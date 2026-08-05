// MCP Shared Utilities
// Slug generation, validation, rate limiting, logging, and helpers

// ─── LOGGING ────────────────────────────────────────────────────────────────

const LOG_LEVELS = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };

const currentLevel = LOG_LEVELS[process.env.MCP_LOG_LEVEL] ?? LOG_LEVELS.INFO;

export function log(level, message, data = {}) {
    const numLevel = LOG_LEVELS[level];
    if (numLevel === undefined || numLevel < currentLevel) return;
    const entry = {
        timestamp: new Date().toISOString(),
        level,
        service: "patel-impex-mcp",
        message,
        ...data
    };
    if (numLevel >= LOG_LEVELS.ERROR) {
        console.error(JSON.stringify(entry));
    } else {
        console.log(JSON.stringify(entry));
    }
}

// ─── CORS ───────────────────────────────────────────────────────────────────

export function setCorsHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Max-Age", "86400");
}

export function handleOptions(req, res) {
    if (req.method === "OPTIONS") {
        setCorsHeaders(res);
        res.status(200).end();
        return true;
    }
    return false;
}

// ─── SLUG GENERATION ────────────────────────────────────────────────────────

export function generateSlug(title) {
    if (!title) return "";
    let slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "")
        .trim();
    if (!slug) slug = "post-" + Date.now();
    return slug;
}

// ─── DUPLICATE SLUG CHECK ──────────────────────────────────────────────────

export async function checkDuplicateSlug(db, slug, excludeId = null) {
    if (!slug) return false;
    const { collection, query, where, getDocs } = await import("firebase/firestore");
    const constraints = [where("link", "==", slug)];
    const q = query(collection(db, "blog_posts"), ...constraints);
    const snapshot = await getDocs(q);
    if (snapshot.empty) return false;
    if (excludeId) {
        return snapshot.docs.some(doc => doc.id !== excludeId);
    }
    return true;
}

export async function ensureUniqueSlug(db, title, existingSlug = "", excludeId = null) {
    let slug = existingSlug && existingSlug.trim() ? existingSlug.trim() : generateSlug(title);
    if (!slug) slug = "post-" + Date.now();
    const isDuplicate = await checkDuplicateSlug(db, slug, excludeId);
    if (isDuplicate) {
        let counter = 1;
        let newSlug = slug + "-" + counter;
        while (await checkDuplicateSlug(db, newSlug, excludeId)) {
            counter++;
            if (counter > 100) {
                newSlug = slug + "-" + Date.now();
                break;
            }
            newSlug = slug + "-" + counter;
        }
        slug = newSlug;
    }
    return slug;
}

// ─── TEXT HELPERS ──────────────────────────────────────────────────────────

export function extractText(html) {
    if (!html) return "";
    return html
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

export function calculateReadTime(content) {
    const text = extractText(content);
    const wordsPerMinute = 225;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute));
    return `${minutes} min read`;
}

export function getContentPreview(html, maxLength = 200) {
    const text = extractText(html);
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

// ─── DATE HELPERS ───────────────────────────────────────────────────────────

export function generateDisplayDate() {
    return new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

export function formatDateForDisplay(date) {
    if (!date) return "";
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

// ─── BLOG POST RESPONSE BUILDER ────────────────────────────────────────────

export function buildBlogPostResponse(docSnap) {
    const d = docSnap.data ? docSnap.data() : docSnap;
    const id = docSnap.id || docSnap.id;
    return {
        id,
        title: d.title || "",
        slug: d.link || "",
        content: d.content || "",
        contentType: d.contentType || "html",
        status: d.status || "published",
        category: d.category || "",
        tags: d.tags || [],
        featuredImage: d.featuredImage || d.image || "",
        date: d.date || "",
        readTime: d.readTime || calculateReadTime(d.content || ""),
        featured: d.featured || false,
        createdAt: d.timestamp ? (d.timestamp.toDate ? d.timestamp.toDate().toISOString() : d.timestamp) : "",
        updatedAt: d.updatedAt ? (d.updatedAt.toDate ? d.updatedAt.toDate().toISOString() : d.updatedAt) : "",
        scheduledDate: d.scheduledDate ? (d.scheduledDate.toDate ? d.scheduledDate.toDate().toISOString() : d.scheduledDate) : null,
        // SEO fields
        metaTitle: d.metaTitle || "",
        metaDescription: d.metaDescription || "",
        keywords: d.keywords || "",
        canonicalUrl: d.canonicalUrl || "",
        schemaMarkup: d.schemaMarkup || "",
        // Legacy field
        link: d.link || ""
    };
}

// ─── RATE LIMITING ──────────────────────────────────────────────────────────

const rateLimitStore = new Map();

export function createRateLimiter(name, maxRequests = 60, windowMs = 60000) {
    return function checkRateLimit(identifier) {
        const key = `${name}:${identifier}`;
        const now = Date.now();
        const entry = rateLimitStore.get(key);

        if (!entry || now - entry.windowStart > windowMs) {
            rateLimitStore.set(key, { windowStart: now, count: 1 });
            return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
        }

        entry.count++;
        if (entry.count > maxRequests) {
            return { allowed: false, remaining: 0, resetTime: entry.windowStart + windowMs };
        }

        return { allowed: true, remaining: maxRequests - entry.count, resetTime: entry.windowStart + windowMs };
    };
}

// ─── TOOL-SPECIFIC RATE LIMITERS ───────────────────────────────────────────

const toolRateLimiters = {
    default: createRateLimiter("default", 60, 60000),
    create_blog: createRateLimiter("create_blog", 10, 60000),
    update_blog: createRateLimiter("update_blog", 30, 60000),
    delete_blog: createRateLimiter("delete_blog", 20, 60000),
    list_blogs: createRateLimiter("list_blogs", 100, 60000),
    get_blog: createRateLimiter("get_blog", 100, 60000),
    publish_blog: createRateLimiter("publish_blog", 20, 60000),
    schedule_blog: createRateLimiter("schedule_blog", 20, 60000),
    upload_featured_image: createRateLimiter("upload_featured_image", 30, 60000),
    generate_seo: createRateLimiter("generate_seo", 30, 60000),
    bulk_create_blogs: createRateLimiter("bulk_create_blogs", 5, 60000),
};

export function checkToolRateLimit(toolName, sessionId) {
    const limiter = toolRateLimiters[toolName] || toolRateLimiters.default;
    return limiter(sessionId || "anonymous");
}

// ─── AUTH ────────────────────────────────────────────────────────────────────

export function authenticateMCPRequest(req) {
    const GPT_API_KEY = process.env.GPT_API_KEY;

    if (!GPT_API_KEY) {
        return { ok: true, role: "admin" };
    }

    const authHeader = req.headers["authorization"] || req.headers["Authorization"] || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();
    if (!token || token !== GPT_API_KEY) {
        return { ok: false, status: 401, error: "Unauthorized: invalid API key" };
    }
    return { ok: true, role: "admin" };
}

// ─── VALIDATION ──────────────────────────────────────────────────────────────

export function validateCreateBlogArgs(args) {
    const errors = [];
    if (!args || !args.title || !args.title.trim()) {
        errors.push("title is required");
    }
    if (!args || !args.content || !args.content.trim()) {
        errors.push("content is required");
    }
    if (args && args.title && args.title.trim().length > 300) {
        errors.push("title must be 300 characters or fewer");
    }
    if (args && args.status && !["draft", "published", "scheduled"].includes(args.status)) {
        errors.push("status must be one of: draft, published, scheduled");
    }
    if (args && args.contentType && !["html", "markdown", "rich"].includes(args.contentType)) {
        errors.push("contentType must be one of: html, markdown, rich");
    }
    if (args && args.scheduledDate && args.status !== "scheduled") {
        errors.push("scheduledDate can only be set when status is 'scheduled'");
    }
    return errors;
}

export function validateUpdateBlogArgs(args) {
    const errors = [];
    if (!args || !args.blogId) {
        errors.push("blogId is required");
    }
    if (args && args.title !== undefined && !args.title.trim()) {
        errors.push("title cannot be empty");
    }
    if (args && args.title && args.title.trim().length > 300) {
        errors.push("title must be 300 characters or fewer");
    }
    if (args && args.status && !["draft", "published", "scheduled"].includes(args.status)) {
        errors.push("status must be one of: draft, published, scheduled");
    }
    if (args && args.contentType && !["html", "markdown", "rich"].includes(args.contentType)) {
        errors.push("contentType must be one of: html, markdown, rich");
    }
    return errors;
}

export function validateScheduleArgs(args) {
    const errors = [];
    if (!args || !args.blogId) errors.push("blogId is required");
    if (!args || !args.scheduledDate) errors.push("scheduledDate is required");
    if (args && args.scheduledDate) {
        const d = new Date(args.scheduledDate);
        if (isNaN(d.getTime())) errors.push("scheduledDate must be a valid ISO date string");
        if (d.getTime() <= Date.now()) errors.push("scheduledDate must be in the future");
    }
    return errors;
}

// ─── JSON-RPC RESPONSE HELPERS ──────────────────────────────────────────────

export function rpcError(id, code, message, data = null) {
    const error = { code, message };
    if (data) error.data = data;
    return { jsonrpc: "2.0", id, error };
}

export function rpcResult(id, result) {
    return {
        jsonrpc: "2.0",
        id,
        result: {
            content: [{
                type: "text",
                text: JSON.stringify(result, null, 2)
            }]
        }
    };
}

export function rpcText(id, text) {
    return {
        jsonrpc: "2.0",
        id,
        result: {
            content: [{ type: "text", text }]
        }
    };
}

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

export const SITE_URL = "https://patelimpex.com";
export const MCP_VERSION = "2.0.0";
export const MCP_PROTOCOL_VERSION = "2024-11-05";
export const BLOG_COLLECTION = "blog_posts";
export const SESSION_COLLECTION = "mcp_sessions";
export const MAX_PAGE_SIZE = 100;
export const DEFAULT_PAGE_SIZE = 20;
export const SSE_HEARTBEAT_INTERVAL = 3000;
export const SSE_MAX_DURATION = 15000;
