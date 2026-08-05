// GPT Action: Blog Posts Management
// GET  /api/gpt/blogs  → List all blog posts
// POST /api/gpt/blogs  → Create a new blog post

import { db } from "../_lib/firebase-init.js";
import { authenticateRequest } from "../_lib/auth.js";
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp,
    limit
} from "firebase/firestore";

export default async function handler(req, res) {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") return res.status(200).end();

    // Authenticate
    const auth = authenticateRequest(req);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

    try {
        // ─── LIST BLOG POSTS ───
        if (req.method === "GET") {
            const count = Math.min(parseInt(req.query.limit) || 20, 50);
            const q = query(
                collection(db, "blog_posts"),
                orderBy("timestamp", "desc"),
                limit(count)
            );
            const snapshot = await getDocs(q);
            const posts = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    title: data.title || "",
                    category: data.category || "",
                    tags: data.tags || [],
                    date: data.date || "",
                    link: data.link || "",
                    contentPreview: (data.content || "").replace(/<[^>]+>/g, "").substring(0, 300) + "..."
                };
            });

            return res.status(200).json({
                success: true,
                count: posts.length,
                posts
            });
        }

        // ─── CREATE BLOG POST ───
        if (req.method === "POST") {
            const { title, content, category, tags, link, imageUrl } = req.body || {};

            if (!title || !content) {
                return res.status(400).json({
                    error: "Missing required fields: title and content are required."
                });
            }

            const blogData = {
                title: title.trim(),
                content: content.trim(), // Should be HTML
                category: (category || "Market Insights").trim(),
                tags: Array.isArray(tags) ? tags : (tags || "").split(",").map(t => t.trim()).filter(Boolean),
                link: (link || "").trim(),
                image: (imageUrl || "").trim(),
                date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
                timestamp: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, "blog_posts"), blogData);

            return res.status(201).json({
                success: true,
                message: `Blog post "${title}" has been published successfully.`,
                id: docRef.id,
                url: `https://patelimpex.com/blog/${link || docRef.id}`
            });
        }

        return res.status(405).json({ error: "Method not allowed. Use GET or POST." });

    } catch (error) {
        console.error("GPT Blog Action Error:", error);
        return res.status(500).json({ error: `Server error: ${error.message}` });
    }
}
