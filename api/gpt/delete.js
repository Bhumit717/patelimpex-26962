// GPT Action: Delete Blog Post or News Article
// POST /api/gpt/delete  → Delete by id and type

import { db } from "../_lib/firebase-init.js";
import { authenticateRequest } from "../_lib/auth.js";
import { doc, deleteDoc, getDoc } from "firebase/firestore";

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
        const { id, type } = req.body || {};

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

        const title = docSnap.data().title || "Untitled";
        await deleteDoc(docRef);

        return res.status(200).json({
            success: true,
            message: `${type === "blog" ? "Blog post" : "News article"} "${title}" has been deleted.`
        });

    } catch (error) {
        console.error("GPT Delete Action Error:", error);
        return res.status(500).json({ error: `Server error: ${error.message}` });
    }
}
