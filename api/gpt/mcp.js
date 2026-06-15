// Model Context Protocol (MCP) Server for Patel Impex
// OpenAI ChatGPT Connector — SSE transport with JSON-RPC 2.0
// GET  /api/gpt/mcp  → SSE stream
// POST /api/gpt/mcp  → JSON-RPC messages

import { app, db } from "../_lib/firebase-init.js";
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
    setDoc,
    updateDoc,
    query,
    where,
    orderBy,
    limit as fbLimit,
    startAfter,
    serverTimestamp,
    Timestamp,
    onSnapshot
} from "firebase/firestore";
import {
    getStorage,
    ref as storageRef,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import {
    log,
    setCorsHeaders,
    handleOptions,
    authenticateMCPRequest,
    checkToolRateLimit,
    generateSlug,
    ensureUniqueSlug,
    calculateReadTime,
    generateDisplayDate,
    getContentPreview,
    formatDateForDisplay,
    buildBlogPostResponse,
    validateCreateBlogArgs,
    validateUpdateBlogArgs,
    validateScheduleArgs,
    rpcError,
    rpcResult,
    rpcText,
    SITE_URL,
    MCP_VERSION,
    MCP_PROTOCOL_VERSION,
    BLOG_COLLECTION,
    SESSION_COLLECTION,
    MAX_PAGE_SIZE,
    DEFAULT_PAGE_SIZE,
    SSE_HEARTBEAT_INTERVAL,
    SSE_MAX_DURATION
} from "../_lib/mcp-utils.js";

const storage = getStorage(app);

// ─── MAIN HANDLER ───────────────────────────────────────────────────────────

export default async function handler(req, res) {
    setCorsHeaders(res);

    if (handleOptions(req, res)) return;

    const auth = authenticateMCPRequest(req);
    if (!auth.ok) {
        log("WARN", "Authentication failed", { ip: req.headers["x-forwarded-for"] });
        return res.status(auth.status).json({ error: auth.error });
    }

    // ─── SSE CONNECTION (GET) ─────────────────────────────────────────────
    if (req.method === "GET") {
        return handleSSE(req, res);
    }

    // ─── MESSAGE HANDLER (POST) ───────────────────────────────────────────
    if (req.method === "POST") {
        return handleMessage(req, res);
    }

    return res.status(405).json({ error: "Method not allowed. Use GET or POST." });
}

// ─── SSE CONNECTION HANDLER ────────────────────────────────────────────────

async function handleSSE(req, res) {
    const sessionId = req.query.sessionId;

    // New session: create session doc, return endpoint URL
    if (!sessionId) {
        const newSessionId = "mcp_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 10);

        try {
            await setDoc(doc(db, SESSION_COLLECTION, newSessionId), {
                created: serverTimestamp(),
                active: true,
                userAgent: req.headers["user-agent"] || "",
                ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || ""
            });
        } catch (err) {
            log("ERROR", "Failed to create session", { error: err.message });
            return res.status(500).json({ error: "Failed to initialize session" });
        }

        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");
        res.setHeader("X-Accel-Buffering", "no");

        const endpointUrl = `/api/gpt/mcp?sessionId=${newSessionId}`;
        res.write(`event: endpoint\ndata: ${endpointUrl}\n\n`);
        res.flush?.();

        log("INFO", "MCP session created", { sessionId: newSessionId });
        return res.end();
    }

    // Active session: establish SSE stream
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");

    const sessionDocRef = doc(db, SESSION_COLLECTION, sessionId);
    let unsubscribe = null;

    try {
        unsubscribe = onSnapshot(sessionDocRef, (docSnap) => {
            if (!docSnap.exists()) return;
            const data = docSnap.data();
            if (data && data.response) {
                const payload = typeof data.response === "string"
                    ? data.response
                    : JSON.stringify(data.response);
                res.write(`event: message\ndata: ${payload}\n\n`);
                res.flush?.();
                setDoc(sessionDocRef, { response: null }, { merge: true }).catch((err) => {
                    log("ERROR", "Failed to clear response", { error: err.message });
                });
            }
        });
    } catch (err) {
        log("ERROR", "onSnapshot failed", { error: err.message });
    }

    // Heartbeat
    const startTime = Date.now();
    const heartbeat = setInterval(() => {
        res.write(":\n\n");
        res.flush?.();
        if (Date.now() - startTime > SSE_MAX_DURATION) {
            clearInterval(heartbeat);
            if (unsubscribe) unsubscribe();
            setDoc(sessionDocRef, { active: false }, { merge: true }).catch(() => {});
            try { res.end(); } catch (e) {}
        }
    }, SSE_HEARTBEAT_INTERVAL);

    req.on("close", () => {
        clearInterval(heartbeat);
        if (unsubscribe) unsubscribe();
        deleteDoc(sessionDocRef).catch(() => {});
        log("INFO", "SSE connection closed", { sessionId });
    });
}

// ─── MESSAGE HANDLER (POST) ────────────────────────────────────────────────

async function handleMessage(req, res) {
    const sessionId = req.query.sessionId;
    const body = req.body;

    if (!sessionId) {
        return res.status(400).json({ error: "Missing sessionId parameter" });
    }
    if (!body || !body.method) {
        return res.status(400).json({ error: "Invalid JSON-RPC request" });
    }

    log("INFO", "JSON-RPC request", {
        sessionId,
        method: body.method,
        toolName: body.params?.name || body.method
    });

    try {
        const responsePayload = await handleJsonRpc(body);

        if (responsePayload) {
            await setDoc(doc(db, SESSION_COLLECTION, sessionId), {
                response: responsePayload,
                lastActivity: serverTimestamp()
            }, { merge: true });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        log("ERROR", "JSON-RPC handler failed", { error: error.message, method: body.method });
        return res.status(500).json({ error: error.message });
    }
}

// ─── JSON-RPC ROUTER ────────────────────────────────────────────────────────

async function handleJsonRpc(request) {
    const { jsonrpc, id, method, params } = request;

    if (jsonrpc !== "2.0") {
        return rpcError(id, -32600, "Invalid Request: Must be JSON-RPC 2.0");
    }

    try {
        switch (method) {
            case "initialize":
                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        protocolVersion: MCP_PROTOCOL_VERSION,
                        capabilities: {
                            tools: {},
                            resources: {},
                            logging: {}
                        },
                        serverInfo: {
                            name: "patel-impex-mcp",
                            version: MCP_VERSION
                        }
                    }
                };

            case "notifications/initialized":
                return null;

            case "tools/list":
                return {
                    jsonrpc: "2.0",
                    id,
                    result: { tools: getToolDefinitions() }
                };

            case "resources/list":
                return {
                    jsonrpc: "2.0",
                    id,
                    result: { resources: [] }
                };

            case "tools/call":
                return await handleToolCall(id, params.name, params.arguments);

            default:
                return rpcError(id, -32601, `Method not found: ${method}`);
        }
    } catch (err) {
        log("ERROR", "JSON-RPC internal error", { error: err.message, method });
        return rpcError(id, -32603, `Internal error: ${err.message}`);
    }
}

// ─── TOOL DEFINITIONS ──────────────────────────────────────────────────────

function getToolDefinitions() {
    return [
        {
            name: "create_blog",
            description: "Create a new blog post on Patel Impex website. Supports HTML, Markdown, and rich content with full SEO fields, categories, tags, and draft/published/scheduled status. Auto-generates URL slug if not provided.",
            inputSchema: {
                type: "object",
                required: ["title", "content"],
                properties: {
                    title: {
                        type: "string",
                        description: "Blog post title (60-80 characters recommended for SEO)"
                    },
                    content: {
                        type: "string",
                        description: "Full blog post content. Can be HTML, Markdown, or rich text. HTML is recommended for best formatting."
                    },
                    contentType: {
                        type: "string",
                        enum: ["html", "markdown", "rich"],
                        description: "Content format type. 'html' (default) for HTML content, 'markdown' for Markdown, 'rich' for rich text."
                    },
                    status: {
                        type: "string",
                        enum: ["draft", "published", "scheduled"],
                        description: "Publication status. 'published' (default) makes it live immediately, 'draft' saves without publishing, 'scheduled' requires a scheduledDate."
                    },
                    category: {
                        type: "string",
                        description: "Blog category. Examples: Market Insights, Agriculture, Export Guide, Industry News, Trade Analysis, Supply Chain, Product Guide"
                    },
                    tags: {
                        type: "array",
                        items: { type: "string" },
                        description: "Tags/keywords for the blog post. E.g. ['rice', 'export', 'basmati']"
                    },
                    slug: {
                        type: "string",
                        description: "Custom URL slug. Auto-generated from title if not provided. E.g. 'indian-basmati-rice-export-guide'"
                    },
                    featuredImage: {
                        type: "string",
                        description: "URL of the featured/cover image for the blog post. Can be a URL or a base64 data URI."
                    },
                    metaTitle: {
                        type: "string",
                        description: "SEO meta title (50-60 characters recommended). Defaults to post title if not provided."
                    },
                    metaDescription: {
                        type: "string",
                        description: "SEO meta description (150-160 characters recommended). Used in search engine results."
                    },
                    keywords: {
                        type: "string",
                        description: "Comma-separated SEO keywords for search engine optimization."
                    },
                    canonicalUrl: {
                        type: "string",
                        description: "Canonical URL to prevent duplicate content issues in SEO."
                    },
                    schemaMarkup: {
                        type: "string",
                        description: "JSON-LD schema markup for structured data and rich snippets in search results."
                    },
                    scheduledDate: {
                        type: "string",
                        description: "ISO 8601 date string for scheduled publishing (required when status is 'scheduled'). E.g. '2025-06-20T08:00:00Z'"
                    }
                }
            }
        },
        {
            name: "update_blog",
            description: "Update an existing blog post. Only the fields provided will be updated; all other fields remain unchanged. Supports updating any field including SEO metadata, status, content, etc.",
            inputSchema: {
                type: "object",
                required: ["blogId"],
                properties: {
                    blogId: {
                        type: "string",
                        description: "The ID of the blog post to update (obtained from create_blog or list_blogs)"
                    },
                    title: {
                        type: "string",
                        description: "New blog post title"
                    },
                    content: {
                        type: "string",
                        description: "New blog post content (HTML, Markdown, or rich text)"
                    },
                    contentType: {
                        type: "string",
                        enum: ["html", "markdown", "rich"],
                        description: "Content format type"
                    },
                    status: {
                        type: "string",
                        enum: ["draft", "published", "scheduled"],
                        description: "Publication status"
                    },
                    category: {
                        type: "string",
                        description: "Blog category"
                    },
                    tags: {
                        type: "array",
                        items: { type: "string" },
                        description: "Updated tags array"
                    },
                    slug: {
                        type: "string",
                        description: "New URL slug"
                    },
                    featuredImage: {
                        type: "string",
                        description: "New featured image URL"
                    },
                    metaTitle: {
                        type: "string",
                        description: "New SEO meta title"
                    },
                    metaDescription: {
                        type: "string",
                        description: "New SEO meta description"
                    },
                    keywords: {
                        type: "string",
                        description: "New SEO keywords"
                    },
                    canonicalUrl: {
                        type: "string",
                        description: "New canonical URL"
                    },
                    schemaMarkup: {
                        type: "string",
                        description: "New JSON-LD schema markup"
                    },
                    featured: {
                        type: "boolean",
                        description: "Whether to feature this post"
                    }
                }
            }
        },
        {
            name: "delete_blog",
            description: "Permanently delete a blog post by its ID. This action cannot be undone. The post will be immediately removed from the website.",
            inputSchema: {
                type: "object",
                required: ["blogId"],
                properties: {
                    blogId: {
                        type: "string",
                        description: "The ID of the blog post to delete"
                    }
                }
            }
        },
        {
            name: "list_blogs",
            description: "List blog posts with optional filters and pagination. Returns blog posts sorted by creation date (newest first). Supports filtering by status, category, and search term.",
            inputSchema: {
                type: "object",
                properties: {
                    status: {
                        type: "string",
                        enum: ["draft", "published", "scheduled"],
                        description: "Filter by publication status"
                    },
                    category: {
                        type: "string",
                        description: "Filter by category name"
                    },
                    search: {
                        type: "string",
                        description: "Search in title and content"
                    },
                    tag: {
                        type: "string",
                        description: "Filter by tag"
                    },
                    limit: {
                        type: "integer",
                        description: "Maximum number of results (default: 20, max: 100)"
                    },
                    offset: {
                        type: "string",
                        description: "Pagination cursor. Pass the last document ID from the previous page to get the next page."
                    },
                    includeContent: {
                        type: "boolean",
                        description: "Whether to include full content in results (default: false). Set to true to get full HTML content."
                    }
                }
            }
        },
        {
            name: "get_blog",
            description: "Get a single blog post by its ID or URL slug. Returns all fields including SEO metadata, content, and timestamps.",
            inputSchema: {
                type: "object",
                required: ["identifier"],
                properties: {
                    identifier: {
                        type: "string",
                        description: "The blog post ID or URL slug to retrieve"
                    }
                }
            }
        },
        {
            name: "publish_blog",
            description: "Publish a draft or scheduled blog post immediately. Sets the status to 'published' and makes the post live on the website.",
            inputSchema: {
                type: "object",
                required: ["blogId"],
                properties: {
                    blogId: {
                        type: "string",
                        description: "The ID of the blog post to publish"
                    }
                }
            }
        },
        {
            name: "schedule_blog",
            description: "Schedule a blog post for future publication. The post will be saved with status 'scheduled' and will be published automatically at the specified date/time.",
            inputSchema: {
                type: "object",
                required: ["blogId", "scheduledDate"],
                properties: {
                    blogId: {
                        type: "string",
                        description: "The ID of the blog post to schedule"
                    },
                    scheduledDate: {
                        type: "string",
                        description: "ISO 8601 date string for scheduled publication. Must be in the future. E.g. '2025-07-01T10:00:00Z'"
                    }
                }
            }
        },
        {
            name: "upload_featured_image",
            description: "Upload an image to Firebase Storage and return a publicly accessible URL. The image will be stored in the blog-images folder and can be used as the featuredImage for blog posts.",
            inputSchema: {
                type: "object",
                required: ["imageData"],
                properties: {
                    imageData: {
                        type: "string",
                        description: "Base64-encoded image data (with or without data URI prefix). Supported formats: JPEG, PNG, GIF, WebP."
                    },
                    filename: {
                        type: "string",
                        description: "Optional filename for the image. If not provided, a unique name will be generated."
                    },
                    alt: {
                        type: "string",
                        description: "Optional alt text description for accessibility and SEO."
                    }
                }
            }
        },
        {
            name: "generate_seo",
            description: "Analyze blog content and generate comprehensive SEO recommendations including: optimized title suggestions, meta description, keywords, URL slug suggestion, and content quality analysis.",
            inputSchema: {
                type: "object",
                required: ["content"],
                properties: {
                    content: {
                        type: "string",
                        description: "Blog post content to analyze for SEO optimization"
                    },
                    title: {
                        type: "string",
                        description: "Optional blog post title to include in SEO analysis"
                    },
                    targetKeywords: {
                        type: "string",
                        description: "Optional target keywords to optimize for"
                    }
                }
            }
        },
        {
            name: "bulk_create_blogs",
            description: "Create multiple blog posts in a single operation. Each blog post follows the same schema as create_blog. Returns the IDs and URLs of all created posts. Limited to 10 posts per call.",
            inputSchema: {
                type: "object",
                required: ["blogs"],
                properties: {
                    blogs: {
                        type: "array",
                        items: {
                            type: "object",
                            required: ["title", "content"],
                            properties: {
                                title: { type: "string", description: "Blog post title" },
                                content: { type: "string", description: "Blog post content" },
                                contentType: { type: "string", enum: ["html", "markdown", "rich"] },
                                status: { type: "string", enum: ["draft", "published", "scheduled"] },
                                category: { type: "string" },
                                tags: { type: "array", items: { type: "string" } },
                                slug: { type: "string" },
                                featuredImage: { type: "string" },
                                metaTitle: { type: "string" },
                                metaDescription: { type: "string" },
                                keywords: { type: "string" },
                                canonicalUrl: { type: "string" },
                                schemaMarkup: { type: "string" }
                            }
                        },
                        description: "Array of blog post objects to create (max 10)"
                    }
                }
            }
        }
    ];
}

// ─── TOOL CALL DISPATCHER ───────────────────────────────────────────────────

async function handleToolCall(id, toolName, args) {
    log("INFO", "Tool call", { tool: toolName, args: sanitizeArgs(toolName, args) });

    const rateLimit = checkToolRateLimit(toolName, id);
    if (!rateLimit.allowed) {
        log("WARN", "Rate limit exceeded", { tool: toolName });
        return rpcError(id, -32000, "Rate limit exceeded. Try again later.", {
            remaining: rateLimit.remaining,
            resetTime: new Date(rateLimit.resetTime).toISOString()
        });
    }

    try {
        switch (toolName) {
            case "create_blog":
                return await toolCreateBlog(id, args);
            case "update_blog":
                return await toolUpdateBlog(id, args);
            case "delete_blog":
                return await toolDeleteBlog(id, args);
            case "list_blogs":
                return await toolListBlogs(id, args);
            case "get_blog":
                return await toolGetBlog(id, args);
            case "publish_blog":
                return await toolPublishBlog(id, args);
            case "schedule_blog":
                return await toolScheduleBlog(id, args);
            case "upload_featured_image":
                return await toolUploadImage(id, args);
            case "generate_seo":
                return await toolGenerateSeo(id, args);
            case "bulk_create_blogs":
                return await toolBulkCreateBlogs(id, args);
            default:
                return rpcError(id, -32601, `Tool not found: ${toolName}`);
        }
    } catch (err) {
        log("ERROR", "Tool execution failed", { tool: toolName, error: err.message });
        return rpcError(id, -32001, `Operation failed: ${err.message}`);
    }
}

function sanitizeArgs(toolName, args) {
    if (!args) return {};
    const sanitized = { ...args };
    if (sanitized.imageData) sanitized.imageData = "[base64 data omitted]";
    if (sanitized.content) sanitized.content = sanitized.content.substring(0, 100) + (sanitized.content.length > 100 ? "..." : "");
    return sanitized;
}

// ─── TOOL: CREATE BLOG ──────────────────────────────────────────────────────

async function toolCreateBlog(id, args) {
    const errors = validateCreateBlogArgs(args);
    if (errors.length > 0) {
        return rpcError(id, -32002, "Validation failed", { errors });
    }

    const slug = await ensureUniqueSlug(db, args.title, args.slug);
    const now = generateDisplayDate();
    const readTime = calculateReadTime(args.content || "");

    const blogData = {
        title: args.title.trim(),
        content: args.content.trim(),
        contentType: args.contentType || "html",
        status: args.status || "published",
        link: slug,
        slug,
        category: (args.category || "Market Insights").trim(),
        tags: Array.isArray(args.tags) ? args.tags : [],
        featuredImage: args.featuredImage || "",
        image: args.featuredImage || "",
        date: now,
        readTime,
        timestamp: serverTimestamp(),
        updatedAt: serverTimestamp(),
        featured: false,
        // SEO fields
        metaTitle: args.metaTitle || args.title.trim().substring(0, 60),
        metaDescription: args.metaDescription || getContentPreview(args.content, 160),
        keywords: args.keywords || "",
        canonicalUrl: args.canonicalUrl || "",
        schemaMarkup: args.schemaMarkup || ""
    };

    if (args.status === "scheduled" && args.scheduledDate) {
        blogData.scheduledDate = Timestamp.fromDate(new Date(args.scheduledDate));
        blogData.status = "scheduled";
    }

    const docRef = await addDoc(collection(db, BLOG_COLLECTION), blogData);

    const blogUrl = `${SITE_URL}/blog/${slug}`;
    log("INFO", "Blog created", { id: docRef.id, slug, status: blogData.status });

    return rpcResult(id, {
        success: true,
        id: docRef.id,
        slug,
        title: args.title.trim(),
        status: blogData.status,
        url: blogUrl,
        message: `Blog post "${args.title.trim()}" created successfully as "${blogData.status}". View at: ${blogUrl}`
    });
}

// ─── TOOL: UPDATE BLOG ──────────────────────────────────────────────────────

async function toolUpdateBlog(id, args) {
    const errors = validateUpdateBlogArgs(args);
    if (errors.length > 0) {
        return rpcError(id, -32002, "Validation failed", { errors });
    }

    const docRef = doc(db, BLOG_COLLECTION, args.blogId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return rpcError(id, -32000, `Blog post with ID "${args.blogId}" not found.`);
    }

    const existing = docSnap.data();
    const updateData = { updatedAt: serverTimestamp() };

    if (args.title !== undefined) {
        updateData.title = args.title.trim();
    }
    if (args.content !== undefined) {
        updateData.content = args.content.trim();
        if (args.title !== undefined || !existing.readTime) {
            updateData.readTime = calculateReadTime(args.content);
        }
    }
    if (args.contentType !== undefined) updateData.contentType = args.contentType;
    if (args.status !== undefined) updateData.status = args.status;
    if (args.category !== undefined) updateData.category = args.category.trim();
    if (args.tags !== undefined) {
        updateData.tags = Array.isArray(args.tags) ? args.tags : [];
    }
    if (args.slug !== undefined) {
        const newSlug = await ensureUniqueSlug(db, args.slug, args.slug, args.blogId);
        updateData.link = newSlug;
        updateData.slug = newSlug;
    }
    if (args.featuredImage !== undefined) {
        updateData.featuredImage = args.featuredImage;
        updateData.image = args.featuredImage;
    }
    if (args.metaTitle !== undefined) updateData.metaTitle = args.metaTitle.trim();
    if (args.metaDescription !== undefined) updateData.metaDescription = args.metaDescription.trim();
    if (args.keywords !== undefined) updateData.keywords = args.keywords;
    if (args.canonicalUrl !== undefined) updateData.canonicalUrl = args.canonicalUrl;
    if (args.schemaMarkup !== undefined) updateData.schemaMarkup = args.schemaMarkup;
    if (args.featured !== undefined) updateData.featured = args.featured;

    if (args.status === "scheduled" && args.scheduledDate) {
        updateData.scheduledDate = Timestamp.fromDate(new Date(args.scheduledDate));
    } else if (args.status !== "scheduled") {
        updateData.scheduledDate = null;
    }

    await setDoc(docRef, updateData, { merge: true });

    const title = args.title || existing.title || "Untitled";
    const slug = updateData.link || existing.link || args.blogId;
    const blogUrl = `${SITE_URL}/blog/${slug}`;

    log("INFO", "Blog updated", { id: args.blogId });

    return rpcResult(id, {
        success: true,
        id: args.blogId,
        title,
        slug,
        url: blogUrl,
        message: `Blog post "${title}" updated successfully. View at: ${blogUrl}`
    });
}

// ─── TOOL: DELETE BLOG ──────────────────────────────────────────────────────

async function toolDeleteBlog(id, args) {
    if (!args || !args.blogId) {
        return rpcError(id, -32002, "Validation failed", { errors: ["blogId is required"] });
    }

    const docRef = doc(db, BLOG_COLLECTION, args.blogId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return rpcError(id, -32000, `Blog post with ID "${args.blogId}" not found.`);
    }

    const title = docSnap.data().title || "Untitled";
    await deleteDoc(docRef);

    log("INFO", "Blog deleted", { id: args.blogId, title });

    return rpcResult(id, {
        success: true,
        id: args.blogId,
        title,
        message: `Blog post "${title}" has been permanently deleted.`
    });
}

// ─── TOOL: LIST BLOGS ───────────────────────────────────────────────────────

async function toolListBlogs(id, args) {
    const pageSize = Math.min(Math.max(1, args?.limit || DEFAULT_PAGE_SIZE), MAX_PAGE_SIZE);

    try {
        const constraints = [orderBy("timestamp", "desc")];

        if (args?.status) {
            constraints.push(where("status", "==", args.status));
        }
        if (args?.category) {
            constraints.push(where("category", "==", args.category));
        }
        if (args?.tag) {
            constraints.push(where("tags", "array-contains", args.tag));
        }

        constraints.push(fbLimit(pageSize + 1));

        let q;
        if (args?.offset) {
            const offsetDoc = await getDoc(doc(db, BLOG_COLLECTION, args.offset));
            if (offsetDoc.exists()) {
                constraints.push(startAfter(offsetDoc));
            }
        }

        q = query(collection(db, BLOG_COLLECTION), ...constraints);
        const snapshot = await getDocs(q);

        const hasMore = snapshot.docs.length > pageSize;
        const docs = hasMore ? snapshot.docs.slice(0, pageSize) : snapshot.docs;

        const posts = docs.map(d => {
            const data = d.data();
            const post = buildBlogPostResponse({ id: d.id, data: () => data });
            if (!args?.includeContent) {
                delete post.content;
                post.contentPreview = getContentPreview(data.content || "", 250);
            }
            return post;
        });

        const nextOffset = hasMore && docs.length > 0 ? docs[docs.length - 1].id : null;

        return rpcResult(id, {
            success: true,
            count: posts.length,
            hasMore,
            nextOffset,
            posts
        });
    } catch (err) {
        if (err.code === "failed-precondition" && err.message?.includes("index")) {
            log("WARN", "Missing composite index", { error: err.message });
            return rpcResult(id, {
                success: true,
                count: 0,
                hasMore: false,
                nextOffset: null,
                posts: [],
                note: "A composite index needs to be created. Use list_blogs without filters first, or check the Firestore console to create the required index."
            });
        }
        throw err;
    }
}

// ─── TOOL: GET BLOG ─────────────────────────────────────────────────────────

async function toolGetBlog(id, args) {
    if (!args || !args.identifier) {
        return rpcError(id, -32002, "Validation failed", { errors: ["identifier is required"] });
    }

    // Try by document ID first
    const docRef = doc(db, BLOG_COLLECTION, args.identifier);
    let docSnap = await getDoc(docRef);

    // If not found, try by slug/link field
    if (!docSnap.exists()) {
        const q = query(collection(db, BLOG_COLLECTION), where("link", "==", args.identifier), fbLimit(1));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
            docSnap = snapshot.docs[0];
        } else {
            return rpcError(id, -32000, `Blog post not found with identifier "${args.identifier}".`);
        }
    }

    const post = buildBlogPostResponse({ id: docSnap.id, data: () => docSnap.data() });
    const slug = post.slug || post.link || docSnap.id;

    return rpcResult(id, {
        success: true,
        post,
        url: `${SITE_URL}/blog/${slug}`
    });
}

// ─── TOOL: PUBLISH BLOG ─────────────────────────────────────────────────────

async function toolPublishBlog(id, args) {
    if (!args || !args.blogId) {
        return rpcError(id, -32002, "Validation failed", { errors: ["blogId is required"] });
    }

    const docRef = doc(db, BLOG_COLLECTION, args.blogId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return rpcError(id, -32000, `Blog post with ID "${args.blogId}" not found.`);
    }

    const existing = docSnap.data();
    if (existing.status === "published") {
        return rpcResult(id, {
            success: true,
            id: args.blogId,
            title: existing.title,
            status: "published",
            message: `Blog post "${existing.title}" is already published.`
        });
    }

    await updateDoc(docRef, {
        status: "published",
        scheduledDate: null,
        publishedAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });

    const slug = existing.link || args.blogId;
    const blogUrl = `${SITE_URL}/blog/${slug}`;

    log("INFO", "Blog published", { id: args.blogId, title: existing.title });

    return rpcResult(id, {
        success: true,
        id: args.blogId,
        title: existing.title || "Untitled",
        status: "published",
        url: blogUrl,
        message: `Blog post "${existing.title}" has been published. View at: ${blogUrl}`
    });
}

// ─── TOOL: SCHEDULE BLOG ────────────────────────────────────────────────────

async function toolScheduleBlog(id, args) {
    const errors = validateScheduleArgs(args);
    if (errors.length > 0) {
        return rpcError(id, -32002, "Validation failed", { errors });
    }

    const docRef = doc(db, BLOG_COLLECTION, args.blogId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return rpcError(id, -32000, `Blog post with ID "${args.blogId}" not found.`);
    }

    const scheduledTimestamp = Timestamp.fromDate(new Date(args.scheduledDate));

    await updateDoc(docRef, {
        status: "scheduled",
        scheduledDate: scheduledTimestamp,
        updatedAt: serverTimestamp()
    });

    const existing = docSnap.data();
    const slug = existing.link || args.blogId;
    const blogUrl = `${SITE_URL}/blog/${slug}`;

    log("INFO", "Blog scheduled", { id: args.blogId, scheduledDate: args.scheduledDate });

    return rpcResult(id, {
        success: true,
        id: args.blogId,
        title: existing.title || "Untitled",
        status: "scheduled",
        scheduledDate: args.scheduledDate,
        url: blogUrl,
        message: `Blog post "${existing.title}" scheduled for publication on ${new Date(args.scheduledDate).toLocaleString()}.`
    });
}

// ─── TOOL: UPLOAD FEATURED IMAGE ────────────────────────────────────────────

async function toolUploadImage(id, args) {
    if (!args || !args.imageData) {
        return rpcError(id, -32002, "Validation failed", { errors: ["imageData is required (base64 encoded)"] });
    }

    let base64Data = args.imageData;
    let mimeType = "image/jpeg";

    // Extract MIME type and base64 data from data URI
    if (base64Data.startsWith("data:")) {
        const matches = base64Data.match(/^data:([^;]+);base64,(.+)$/);
        if (matches) {
            mimeType = matches[1];
            base64Data = matches[2];
        }
    }

    // Validate approximate size (max 10MB after decoding)
    const decodedLength = base64Data.length * 0.75;
    if (decodedLength > 10 * 1024 * 1024) {
        return rpcError(id, -32002, "Image too large. Maximum size is 10MB.");
    }

    const ext = mimeType.split("/")[1] || "jpg";
    const filename = args.filename || `blog_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const buffer = Buffer.from(base64Data, "base64");

    try {
        const fileRef = storageRef(storage, `blog-images/${filename}`);
        await uploadBytes(fileRef, buffer, { contentType: mimeType });
        const downloadUrl = await getDownloadURL(fileRef);

        log("INFO", "Image uploaded", { filename, size: buffer.length });

        return rpcResult(id, {
            success: true,
            filename,
            size: buffer.length,
            mimeType,
            url: downloadUrl,
            alt: args.alt || filename,
            message: `Image uploaded successfully. Use this URL as featuredImage in create_blog or update_blog.`
        });
    } catch (err) {
        log("ERROR", "Image upload failed", { error: err.message });
        return rpcError(id, -32001, `Image upload failed: ${err.message}`);
    }
}

// ─── TOOL: GENERATE SEO ─────────────────────────────────────────────────────

async function toolGenerateSeo(id, args) {
    if (!args || !args.content) {
        return rpcError(id, -32002, "Validation failed", { errors: ["content is required"] });
    }

    const content = args.content;
    const title = args.title || "";
    const targetKeywords = args.targetKeywords || "";

    const text = content
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const charCount = text.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;

    // Extract potential keywords (word frequency analysis)
    const stopWords = new Set([
        "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
        "of", "with", "by", "from", "as", "is", "was", "are", "were", "be",
        "been", "being", "have", "has", "had", "do", "does", "did", "will",
        "would", "could", "should", "may", "might", "shall", "can", "need",
        "this", "that", "these", "those", "it", "its", "they", "them", "their",
        "we", "our", "you", "your", "he", "she", "his", "her", "him", "not",
        "no", "nor", "so", "if", "then", "than", "too", "very", "just", "about",
        "also", "more", "some", "any", "each", "every", "all", "both", "few",
        "most", "other", "into", "over", "such", "only", "own", "same", "what",
        "which", "who", "whom", "when", "where", "why", "how", "blog", "post"
    ]);

    const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    const wordFreq = {};
    for (const w of words) {
        if (!stopWords.has(w)) {
            wordFreq[w] = (wordFreq[w] || 0) + 1;
        }
    }

    const sortedKeywords = Object.entries(wordFreq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .map(([word, count]) => ({ word, count }));

    // Generate SEO title suggestion
    const generatedTitle = title || text.split(/\s+/).slice(0, 8).join(" ");
    const seoTitle = generatedTitle.length > 60
        ? generatedTitle.substring(0, 57) + "..."
        : generatedTitle;

    // Generate meta description from first meaningful sentence(s)
    let metaDescription = "";
    let descSentences = [];
    for (const s of sentences) {
        descSentences.push(s.trim());
        if (descSentences.join(". ").length >= 120) break;
    }
    metaDescription = descSentences.join(". ").substring(0, 160);
    if (metaDescription.length < 50) {
        metaDescription = text.substring(0, 155) + (text.length > 155 ? "..." : "");
    }

    // Generate slug suggestion
    const slugSuggestion = title
        ? title.toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "")
        : (sortedKeywords.slice(0, 5).map(k => k.word).join("-"));

    // Readability score (simple Flesch-Kincaid approximation)
    const syllablesPerWord = wordCount > 0
        ? text.split(/\s+/).filter(Boolean).reduce((sum, word) => {
            const syls = word.replace(/[^aeiouyAEIOUY]/g, "").length || 1;
            return sum + syls;
        }, 0) / wordCount
        : 1.5;
    const readabilityScore = Math.max(0, Math.min(100,
        206.835 - 1.015 * (wordCount / Math.max(sentenceCount, 1)) - 84.6 * syllablesPerWord
    ));

    const suggestedTags = sortedKeywords
        .filter(k => k.count >= 2)
        .slice(0, 8)
        .map(k => k.word.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()));

    return rpcResult(id, {
        success: true,
        contentAnalysis: {
            wordCount,
            characterCount: charCount,
            sentenceCount,
            averageWordsPerSentence: sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0,
            readabilityScore: Math.round(readabilityScore * 10) / 10,
            readabilityLabel: readabilityScore >= 60 ? "Easy to read" : readabilityScore >= 30 ? "Moderately difficult" : "Very difficult"
        },
        seoSuggestions: {
            title: {
                suggested: seoTitle,
                length: seoTitle.length,
                recommendation: seoTitle.length > 60 ? "Title is too long. Keep under 60 characters." : seoTitle.length < 30 ? "Title is too short. Aim for 50-60 characters." : "Good length."
            },
            metaDescription: {
                suggested: metaDescription,
                length: metaDescription.length,
                recommendation: metaDescription.length > 160 ? "Meta description is too long. Keep under 160 characters." : metaDescription.length < 120 ? "Meta description could be longer. Aim for 150-160 characters." : "Good length."
            },
            slug: {
                suggested: slugSuggestion || "suggested-slug",
                recommendation: "Use hyphens between words, keep under 60 characters."
            },
            keywords: {
                topKeywords: sortedKeywords.slice(0, 15),
                suggestedTags
            },
            targetKeywords: targetKeywords ? {
                provided: targetKeywords,
                foundInContent: targetKeywords.split(",").map(k => k.trim().toLowerCase()).filter(k => text.toLowerCase().includes(k))
            } : null
        },
        message: "SEO analysis complete. Review suggestions and apply them to your blog post for better search engine visibility."
    });
}

// ─── TOOL: BULK CREATE BLOGS ───────────────────────────────────────────────

async function toolBulkCreateBlogs(id, args) {
    if (!args || !args.blogs || !Array.isArray(args.blogs) || args.blogs.length === 0) {
        return rpcError(id, -32002, "Validation failed", { errors: ["blogs must be a non-empty array"] });
    }

    if (args.blogs.length > 10) {
        return rpcError(id, -32002, "Validation failed", { errors: ["Maximum 10 blog posts per bulk operation"] });
    }

    const results = [];
    const errors = [];

    for (let i = 0; i < args.blogs.length; i++) {
        const blog = args.blogs[i];
        const blogErrors = validateCreateBlogArgs(blog);

        if (blogErrors.length > 0) {
            errors.push({ index: i, title: blog.title || "Untitled", errors: blogErrors });
            continue;
        }

        try {
            const slug = await ensureUniqueSlug(db, blog.title, blog.slug);
            const now = generateDisplayDate();
            const readTime = calculateReadTime(blog.content || "");

            const blogData = {
                title: blog.title.trim(),
                content: blog.content.trim(),
                contentType: blog.contentType || "html",
                status: blog.status || "published",
                link: slug,
                slug,
                category: (blog.category || "Market Insights").trim(),
                tags: Array.isArray(blog.tags) ? blog.tags : [],
                featuredImage: blog.featuredImage || "",
                image: blog.featuredImage || "",
                date: now,
                readTime,
                timestamp: serverTimestamp(),
                updatedAt: serverTimestamp(),
                featured: false,
                metaTitle: blog.metaTitle || blog.title.trim().substring(0, 60),
                metaDescription: blog.metaDescription || getContentPreview(blog.content, 160),
                keywords: blog.keywords || "",
                canonicalUrl: blog.canonicalUrl || "",
                schemaMarkup: blog.schemaMarkup || ""
            };

            if (blog.status === "scheduled" && blog.scheduledDate) {
                blogData.scheduledDate = Timestamp.fromDate(new Date(blog.scheduledDate));
            }

            const docRef = await addDoc(collection(db, BLOG_COLLECTION), blogData);

            results.push({
                index: i,
                success: true,
                id: docRef.id,
                slug,
                title: blog.title.trim(),
                status: blogData.status,
                url: `${SITE_URL}/blog/${slug}`
            });
        } catch (err) {
            errors.push({ index: i, title: blog.title || "Untitled", errors: [err.message] });
        }
    }

    log("INFO", "Bulk create completed", { total: args.blogs.length, success: results.length, errors: errors.length });

    return rpcResult(id, {
        success: true,
        total: args.blogs.length,
        created: results.length,
        failed: errors.length,
        results,
        errors: errors.length > 0 ? errors : undefined,
        message: results.length > 0
            ? `Created ${results.length} blog post(s) successfully. ${errors.length > 0 ? `${errors.length} failed.` : ""}`
            : "No blog posts were created due to validation errors."
    });
}
