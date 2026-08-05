// GPT Action: News Articles Management
// GET  /api/gpt/news  → List all news articles
// POST /api/gpt/news  → Create a new news article

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
        // ─── LIST NEWS ARTICLES ───
        if (req.method === "GET") {
            const count = Math.min(parseInt(req.query.limit) || 20, 50);
            const q = query(
                collection(db, "news_articles"),
                orderBy("timestamp", "desc"),
                limit(count)
            );
            const snapshot = await getDocs(q);
            const articles = snapshot.docs.map(doc => {
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
                count: articles.length,
                articles
            });
        }

        // ─── CREATE NEWS ARTICLE ───
        if (req.method === "POST") {
            const { title, content, category, tags, link, imageUrl } = req.body || {};

            if (!title || !content) {
                return res.status(400).json({
                    error: "Missing required fields: title and content are required."
                });
            }

            const newsData = {
                title: title.trim(),
                content: content.trim(), // Should be HTML
                category: (category || "Global Trade").trim(),
                tags: Array.isArray(tags) ? tags : (tags || "").split(",").map(t => t.trim()).filter(Boolean),
                link: (link || "").trim(),
                image: (imageUrl || "").trim(),
                date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
                timestamp: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, "news_articles"), newsData);

            return res.status(201).json({
                success: true,
                message: `News article "${title}" has been published successfully.`,
                id: docRef.id,
                url: `https://patelimpex.com/news/${link || docRef.id}`
            });
        }

        return res.status(405).json({ error: "Method not allowed. Use GET or POST." });

    } catch (error) {
        console.error("GPT News Action Error:", error);
        return res.status(500).json({ error: `Server error: ${error.message}` });
    }
}
