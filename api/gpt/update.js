// GPT Action: Update/Edit Blog Post or News Article
// POST /api/gpt/update  → Update by id and type

import { db } from "../_lib/firebase-init.js";
import { authenticateRequest } from "../_lib/auth.js";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default async function handler(req, res) {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed. Use POST." });

    // Authenticate
    const auth = authenticateRequest(req);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

    try {
        const { id, type, title, content, category, tags, link, imageUrl } = req.body || {};

        if (!id || !type) {
            return res.status(400).json({
                error: "Missing required fields: id and type ('blog' or 'news') are required."
            });
        }

        const collectionName = type === "blog" ? "blog_posts" : type === "news" ? "news_articles" : null;
        if (!collectionName) {
            return res.status(400).json({ error: "Invalid type. Must be 'blog' or 'news'." });
        }

        // Check if document exists
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return res.status(404).json({ error: `${type} with id '${id}' not found.` });
        }

        // Build update data — only update fields that are provided
        const updateData = { updatedAt: serverTimestamp() };

        if (title !== undefined) updateData.title = title.trim();
        if (content !== undefined) updateData.content = content.trim();
        if (category !== undefined) updateData.category = category.trim();
        if (link !== undefined) updateData.link = link.trim();
        if (imageUrl !== undefined) updateData.image = imageUrl.trim();
        if (tags !== undefined) {
            updateData.tags = Array.isArray(tags)
                ? tags
                : (tags || "").split(",").map(t => t.trim()).filter(Boolean);
        }

        await setDoc(docRef, updateData, { merge: true });

        return res.status(200).json({
            success: true,
            message: `${type === "blog" ? "Blog post" : "News article"} "${title || docSnap.data().title}" has been updated.`,
            id: id,
            url: type === "blog"
                ? `https://patelimpex.com/blog/${link || id}`
                : `https://patelimpex.com/news/${link || id}`
        });

    } catch (error) {
        console.error("GPT Update Action Error:", error);
        return res.status(500).json({ error: `Server error: ${error.message}` });
    }
}
