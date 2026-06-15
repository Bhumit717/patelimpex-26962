// Model Context Protocol (MCP) Server-Sent Events (SSE) Endpoint for ChatGPT
// GET  /api/gpt/mcp  → Establishes SSE stream
// POST /api/gpt/mcp  → Receives JSON-RPC messages from ChatGPT

import { db } from "../_lib/firebase-init.js";
import { authenticateRequest } from "../_lib/auth.js";
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
    setDoc,
    query,
    orderBy,
    limit,
    serverTimestamp,
    onSnapshot
} from "firebase/firestore";

// Helper to validate API key if configured
function checkAuth(req) {
    // If GPT_API_KEY is not defined in env, allow access for easy setup
    if (!process.env.GPT_API_KEY) {
        return { ok: true };
    }
    return authenticateRequest(req);
}

export default async function handler(req, res) {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const auth = checkAuth(req);
    if (!auth.ok) {
        return res.status(auth.status).json({ error: auth.error });
    }

    // ============================================================
    // 1. SSE CONNECTION HANDLER (GET /api/gpt/mcp)
    // ============================================================
    if (req.method === "GET") {
        const sessionId = req.query.sessionId;

        // If no sessionId, generate one and send the endpoint routing URL
        if (!sessionId) {
            const newSessionId = "mcp_" + Math.random().toString(36).substring(2, 15);

            // Create initial session document in Firestore
            try {
                await setDoc(doc(db, "mcp_sessions", newSessionId), {
                    created: serverTimestamp(),
                    active: true
                });
            } catch (err) {
                console.error("Failed to create Firestore session:", err);
                return res.status(500).json({ error: "Failed to initialize session database." });
            }

            // Set headers for SSE
            res.setHeader("Content-Type", "text/event-stream");
            res.setHeader("Cache-Control", "no-cache, no-transform");
            res.setHeader("Connection", "keep-alive");
            res.setHeader("X-Accel-Buffering", "no");

            // Send the client the POST endpoint to direct messages to
            res.write(`event: endpoint\ndata: /api/gpt/mcp?sessionId=${newSessionId}\n\n`);
            res.flush?.();

            // Return early to let the client connect with the sessionId
            return res.end();
        }

        // Standard SSE connection flow for an active session
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");
        res.setHeader("X-Accel-Buffering", "no");

        // Set up real-time listener on the Firestore document for this session
        const sessionDocRef = doc(db, "mcp_sessions", sessionId);
        let unsubscribe = null;

        try {
            unsubscribe = onSnapshot(sessionDocRef, (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    // If a response message is waiting to be sent
                    if (data && data.response) {
                        const responsePayload = data.response;
                        // Send message over SSE stream
                        res.write(`event: message\ndata: ${JSON.stringify(responsePayload)}\n\n`);
                        res.flush?.();

                        // Clear the response field in Firestore so we don't repeat it
                        setDoc(sessionDocRef, { response: null }, { merge: true }).catch(console.error);
                    }
                }
            });
        } catch (err) {
            console.error("onSnapshot failed:", err);
        }

        // Heartbeat / ping mechanism to keep the connection alive (Vercel max execution is usually 10s)
        const startTime = Date.now();
        const interval = setInterval(() => {
            // Send SSE heartbeat comment
            res.write(":\n\n");
            res.flush?.();

            // Self-terminate connection after 8 seconds to prevent Vercel 502/504 errors.
            // When we close the connection cleanly, ChatGPT will immediately reconnect automatically.
            if (Date.now() - startTime > 8000) {
                clearInterval(interval);
                if (unsubscribe) unsubscribe();
                res.end();
            }
        }, 1000);

        // Handle connection close
        req.on("close", () => {
            clearInterval(interval);
            if (unsubscribe) unsubscribe();
            // Delete the session document to clean up Firestore
            deleteDoc(sessionDocRef).catch(console.error);
        });

        return;
    }

    // ============================================================
    // 2. MESSAGE HANDLER (POST /api/gpt/mcp)
    // ============================================================
    if (req.method === "POST") {
        const sessionId = req.query.sessionId;
        const requestBody = req.body;

        if (!sessionId) {
            return res.status(400).json({ error: "Missing sessionId parameter." });
        }

        if (!requestBody || !requestBody.method) {
            return res.status(400).json({ error: "Invalid JSON-RPC request." });
        }

        // Process JSON-RPC request asynchronously
        try {
            const responsePayload = await handleJsonRpc(requestBody);

            if (responsePayload) {
                // Write the response back to Firestore so the active GET connection sends it over SSE
                await setDoc(doc(db, "mcp_sessions", sessionId), {
                    response: responsePayload
                }, { merge: true });
            }

            return res.status(200).json({ success: true });
        } catch (error) {
            console.error("JSON-RPC error:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    return res.status(455).json({ error: "Method not allowed." });
}

// ============================================================
// JSON-RPC ROUTER FOR MODEL CONTEXT PROTOCOL (MCP)
// ============================================================
async function handleJsonRpc(request) {
    const { jsonrpc, id, method, params } = request;

    if (jsonrpc !== "2.0") {
        return {
            jsonrpc: "2.0",
            id,
            error: { code: -32600, message: "Invalid Request: Must be JSON-RPC 2.0" }
        };
    }

    try {
        switch (method) {
            case "initialize":
                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        protocolVersion: "2024-11-05",
                        capabilities: {
                            tools: {}
                        },
                        serverInfo: {
                            name: "patel-impex-mcp",
                            version: "1.0.0"
                        }
                    }
                };

            case "notifications/initialized":
                return null; // Notifications don't get responses

            case "tools/list":
                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        tools: [
                            {
                                name: "list_blog_posts",
                                description: "List the recent blog posts published on the Patel Impex website.",
                                inputSchema: {
                                    type: "object",
                                    properties: {
                                        limit: { type: "integer", description: "Maximum number of posts to return (default 20)" }
                                    }
                                }
                            },
                            {
                                name: "create_blog_post",
                                description: "Publish a new blog post directly to the Patel Impex site.",
                                inputSchema: {
                                    type: "object",
                                    required: ["title", "content"],
                                    properties: {
                                        title: { type: "string", description: "Title of the blog post (SEO optimized, 60-80 chars)" },
                                        content: { type: "string", description: "Full blog post body in HTML format. Keep professional." },
                                        category: { type: "string", description: "Category name (e.g. Market Insights, Agriculture, Export Guide)" },
                                        tags: { type: "array", items: { type: "string" }, description: "Array of tags" },
                                        link: { type: "string", description: "Custom URL slug/link (optional)" },
                                        imageUrl: { type: "string", description: "URL of the cover image (optional)" }
                                    }
                                }
                            },
                            {
                                name: "list_news_articles",
                                description: "List the recent news articles published on the Patel Impex website.",
                                inputSchema: {
                                    type: "object",
                                    properties: {
                                        limit: { type: "integer", description: "Maximum number of articles to return (default 20)" }
                                    }
                                }
                            },
                            {
                                name: "create_news_article",
                                description: "Publish a new news article directly to the Patel Impex site.",
                                inputSchema: {
                                    type: "object",
                                    required: ["title", "content"],
                                    properties: {
                                        title: { type: "string", description: "Headline of the news article" },
                                        content: { type: "string", description: "Full news article body in HTML format." },
                                        category: { type: "string", description: "Category name (e.g. Global Trade, Export Alerts)" },
                                        tags: { type: "array", items: { type: "string" }, description: "Array of tags" },
                                        link: { type: "string", description: "Custom URL slug/link (optional)" },
                                        imageUrl: { type: "string", description: "URL of the cover image (optional)" }
                                    }
                                }
                            },
                            {
                                name: "update_content",
                                description: "Update or edit an existing blog post or news article by ID.",
                                inputSchema: {
                                    type: "object",
                                    required: ["id", "type"],
                                    properties: {
                                        id: { type: "string", description: "The Firestore document ID of the item" },
                                        type: { type: "string", enum: ["blog", "news"], description: "Type of content: 'blog' or 'news'" },
                                        title: { type: "string", description: "New title (optional)" },
                                        content: { type: "string", description: "New HTML content (optional)" },
                                        category: { type: "string", description: "New category (optional)" },
                                        tags: { type: "array", items: { type: "string" }, description: "New array of tags (optional)" },
                                        link: { type: "string", description: "New custom URL slug (optional)" },
                                        imageUrl: { type: "string", description: "New cover image URL (optional)" }
                                    }
                                }
                            },
                            {
                                name: "delete_content",
                                description: "Permanently delete a blog post or news article by ID.",
                                inputSchema: {
                                    type: "object",
                                    required: ["id", "type"],
                                    properties: {
                                        id: { type: "string", description: "The Firestore document ID of the item to delete" },
                                        type: { type: "string", enum: ["blog", "news"], description: "Type of content: 'blog' or 'news'" }
                                    }
                                }
                            }
                        ]
                    }
                };

            case "tools/call":
                return await handleToolCall(id, params.name, params.arguments);

            default:
                return {
                    jsonrpc: "2.0",
                    id,
                    error: { code: -32601, message: `Method not found: ${method}` }
                };
        }
    } catch (err) {
        return {
            jsonrpc: "2.0",
            id,
            error: { code: -32603, message: `Internal server error: ${err.message}` }
        };
    }
}

// ============================================================
// TOOL CALL EXECUTOR (Interacts with Firebase)
// ============================================================
async function handleToolCall(id, toolName, args) {
    try {
        switch (toolName) {
            case "list_blog_posts": {
                const count = Math.min(args.limit || 20, 50);
                const q = query(collection(db, "blog_posts"), orderBy("timestamp", "desc"), limit(count));
                const snapshot = await getDocs(q);
                const posts = snapshot.docs.map(doc => {
                    const d = doc.data();
                    return {
                        id: doc.id,
                        title: d.title || "",
                        category: d.category || "",
                        tags: d.tags || [],
                        date: d.date || "",
                        link: d.link || "",
                        contentPreview: (d.content || "").replace(/<[^>]+>/g, "").substring(0, 150) + "..."
                    };
                });

                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        content: [{
                            type: "text",
                            text: JSON.stringify({ success: true, count: posts.length, posts }, null, 2)
                        }]
                    }
                };
            }

            case "create_blog_post": {
                const blogData = {
                    title: args.title.trim(),
                    content: args.content.trim(),
                    category: (args.category || "Market Insights").trim(),
                    tags: Array.isArray(args.tags) ? args.tags : [],
                    link: (args.link || "").trim(),
                    image: (args.imageUrl || "").trim(),
                    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
                    timestamp: serverTimestamp()
                };

                const docRef = await addDoc(collection(db, "blog_posts"), blogData);
                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        content: [{
                            type: "text",
                            text: `Successfully created blog post "${args.title}" with ID: ${docRef.id}. View URL: https://patelimpex.com/blog/${args.link || docRef.id}`
                        }]
                    }
                };
            }

            case "list_news_articles": {
                const count = Math.min(args.limit || 20, 50);
                const q = query(collection(db, "news_articles"), orderBy("timestamp", "desc"), limit(count));
                const snapshot = await getDocs(q);
                const articles = snapshot.docs.map(doc => {
                    const d = doc.data();
                    return {
                        id: doc.id,
                        title: d.title || "",
                        category: d.category || "",
                        tags: d.tags || [],
                        date: d.date || "",
                        link: d.link || "",
                        contentPreview: (d.content || "").replace(/<[^>]+>/g, "").substring(0, 150) + "..."
                    };
                });

                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        content: [{
                            type: "text",
                            text: JSON.stringify({ success: true, count: articles.length, articles }, null, 2)
                        }]
                    }
                };
            }

            case "create_news_article": {
                const newsData = {
                    title: args.title.trim(),
                    content: args.content.trim(),
                    category: (args.category || "Global Trade").trim(),
                    tags: Array.isArray(args.tags) ? args.tags : [],
                    link: (args.link || "").trim(),
                    image: (args.imageUrl || "").trim(),
                    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
                    timestamp: serverTimestamp()
                };

                const docRef = await addDoc(collection(db, "news_articles"), newsData);
                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        content: [{
                            type: "text",
                            text: `Successfully created news article "${args.title}" with ID: ${docRef.id}. View URL: https://patelimpex.com/news/${args.link || docRef.id}`
                        }]
                    }
                };
            }

            case "update_content": {
                const { id: docId, type, title, content, category, tags, link, imageUrl } = args;
                const collectionName = type === "blog" ? "blog_posts" : "news_articles";

                const docRef = doc(db, collectionName, docId);
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    return {
                        jsonrpc: "2.0",
                        id,
                        error: { code: -32000, message: `${type} content with ID "${docId}" not found.` }
                    };
                }

                const updateData = { updatedAt: serverTimestamp() };
                if (title !== undefined) updateData.title = title.trim();
                if (content !== undefined) updateData.content = content.trim();
                if (category !== undefined) updateData.category = category.trim();
                if (link !== undefined) updateData.link = link.trim();
                if (imageUrl !== undefined) updateData.image = imageUrl.trim();
                if (tags !== undefined) updateData.tags = Array.isArray(tags) ? tags : [];

                await setDoc(docRef, updateData, { merge: true });

                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        content: [{
                            type: "text",
                            text: `Successfully updated ${type} content ID "${docId}".`
                        }]
                    }
                };
            }

            case "delete_content": {
                const { id: docId, type } = args;
                const collectionName = type === "blog" ? "blog_posts" : "news_articles";

                const docRef = doc(db, collectionName, docId);
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    return {
                        jsonrpc: "2.0",
                        id,
                        error: { code: -32000, message: `${type} content with ID "${docId}" not found.` }
                    };
                }

                const deletedTitle = docSnap.data().title || "Untitled";
                await deleteDoc(docRef);

                return {
                    jsonrpc: "2.0",
                    id,
                    result: {
                        content: [{
                            type: "text",
                            text: `Successfully deleted ${type} "${deletedTitle}" (ID: ${docId}).`
                        }]
                    }
                };
            }

            default:
                return {
                    jsonrpc: "2.0",
                    id,
                    error: { code: -32601, message: `Tool not found: ${toolName}` }
                };
        }
    } catch (err) {
        return {
            jsonrpc: "2.0",
            id,
            error: { code: -32001, message: `Firebase operation failed: ${err.message}` }
        };
    }
}
