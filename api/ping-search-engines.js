export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { url, type } = req.body;
    const siteUrl = "https://patelimpex.com";
    const results = [];

    // 1. Ping Google to recrawl sitemap
    try {
        const sitemapUrl = `${siteUrl}/sitemap.xml`;
        const googleRes = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
        results.push({ engine: "Google", method: "sitemap-ping", status: googleRes.ok ? "ok" : "error", code: googleRes.status });
    } catch (e) {
        results.push({ engine: "Google", method: "sitemap-ping", status: "error", error: e.message });
    }

    // 2. Ping Bing IndexNow if a specific URL is provided
    if (url) {
        try {
            const bingRes = await fetch(`https://www.bing.com/indexnow?url=${encodeURIComponent(url)}`);
            results.push({ engine: "Bing", method: "indexnow", status: bingRes.ok ? "ok" : "error", code: bingRes.status });
        } catch (e) {
            results.push({ engine: "Bing", method: "indexnow", status: "error", error: e.message });
        }
    }

    return res.status(200).json({ success: true, siteUrl, url, type, results, submittedAt: new Date().toISOString() });
}
