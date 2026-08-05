// MCP SEO Generation Endpoint
// POST /api/gpt/generate-seo  → Analyze content and generate SEO recommendations
// GET  /api/gpt/generate-seo  → Health check

import { authenticateRequest } from "../_lib/auth.js";

const STOP_WORDS = new Set([
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
    "of", "with", "by", "from", "as", "is", "was", "are", "were", "be",
    "been", "being", "have", "has", "had", "do", "does", "did", "will",
    "would", "could", "should", "may", "might", "shall", "can", "need",
    "this", "that", "these", "those", "it", "its", "they", "them", "their",
    "we", "our", "you", "your", "he", "she", "his", "her", "him", "not",
    "no", "nor", "so", "if", "then", "than", "too", "very", "just", "about",
    "also", "more", "some", "any", "each", "every", "all", "both", "few",
    "most", "other", "into", "over", "such", "only", "own", "same", "what",
    "which", "who", "whom", "when", "where", "why", "how", "blog", "post",
    "article", "page", "get", "make", "like", "well", "back", "even", "still",
    "way", "much", "really", "new", "now", "here", "there", "one", "two",
    "first", "last", "next", "previous", "another", "many", "much", "some"
]);

function extractText(html) {
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

function analyzeKeywords(text) {
    const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    const freq = {};
    let totalWeight = 0;
    for (const w of words) {
        if (!STOP_WORDS.has(w)) {
            freq[w] = (freq[w] || 0) + 1;
            totalWeight++;
        }
    }

    const sorted = Object.entries(freq)
        .map(([word, count]) => ({
            word,
            count,
            density: totalWeight > 0 ? Math.round((count / totalWeight) * 1000) / 10 : 0
        }))
        .sort((a, b) => b.count - a.count);

    return {
        keywords: sorted.slice(0, 20),
        singleWord: sorted.slice(0, 10),
        totalUnique: Object.keys(freq).length,
        totalWeight
    };
}

function extractPhrases(text, maxLength = 3) {
    const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    const phrases = {};
    for (let i = 0; i < words.length - 1; i++) {
        if (STOP_WORDS.has(words[i]) || STOP_WORDS.has(words[i + 1])) continue;
        for (let len = 2; len <= maxLength && i + len <= words.length; len++) {
            const phrase = words.slice(i, i + len).join(" ");
            if (phrase.split(" ").some(w => STOP_WORDS.has(w))) continue;
            phrases[phrase] = (phrases[phrase] || 0) + 1;
        }
    }
    return Object.entries(phrases)
        .map(([phrase, count]) => ({ phrase, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
}

function estimateReadability(text, wordCount, sentenceCount) {
    if (sentenceCount === 0 || wordCount === 0) return { score: 50, label: "Moderate" };
    const syllablesPerWord = text.split(/\s+/).filter(Boolean)
        .reduce((sum, word) => sum + Math.max(1, (word.match(/[aeiouy]/gi) || []).length), 0) / wordCount;
    const score = Math.max(0, Math.min(100,
        206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * syllablesPerWord
    ));
    const label = score >= 70 ? "Easy to read" : score >= 50 ? "Fairly easy" : score >= 30 ? "Moderate" : score >= 10 ? "Difficult" : "Very difficult";
    return { score: Math.round(score * 10) / 10, label };
}

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") return res.status(200).end();

    // GET = health check
    if (req.method === "GET") {
        return res.status(200).json({
            status: "ok",
            service: "patel-impex-seo-generator",
            version: "1.0.0"
        });
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed. Use POST." });
    }

    const auth = authenticateRequest(req);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

    try {
        const { content, title, targetKeywords } = req.body || {};

        if (!content) {
            return res.status(400).json({ error: "content is required" });
        }

        const text = extractText(content);
        const wordCount = text.split(/\s+/).filter(Boolean).length;
        const charCount = text.length;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const sentenceCount = sentences.length;
        const paragraphs = content.split(/<\/?p[^>]*>/).filter(b => b.trim().length > 50).length || 1;

        const keywordAnalysis = analyzeKeywords(text);
        const phrases = extractPhrases(text);
        const readability = estimateReadability(text, wordCount, sentenceCount);

        const suggestedTitle = title
            ? (title.length > 60 ? title.substring(0, 57) + "..." : title)
            : text.split(/\s+/).slice(0, 8).join(" ");

        let metaDescription = "";
        for (const s of sentences) {
            const candidate = metaDescription ? metaDescription + ". " + s.trim() : s.trim();
            if (candidate.length > 155) break;
            metaDescription = candidate;
        }
        if (!metaDescription) metaDescription = text.substring(0, 155) + (text.length > 155 ? "..." : "");

        const slugSuggestion = suggestedTitle
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "")
            .substring(0, 80);

        const suggestedTags = keywordAnalysis.keywords
            .filter(k => k.count >= 2)
            .slice(0, 8)
            .map(k => k.word.charAt(0).toUpperCase() + k.word.slice(1));

        const hTags = [];
        const headingMatches = content.matchAll(/<h([1-6])[^>]*>(.*?)<\/h\1>/gi);
        for (const match of headingMatches) {
            hTags.push({
                level: parseInt(match[1]),
                text: match[2].replace(/<[^>]+>/g, "").trim()
            });
        }

        return res.status(200).json({
            success: true,
            contentStats: {
                wordCount,
                characterCount: charCount,
                sentenceCount,
                paragraphCount: Math.max(1, paragraphs),
                averageWordsPerSentence: sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0,
                readingTime: Math.max(1, Math.round(wordCount / 225)) + " min"
            },
            readability: {
                score: readability.score,
                label: readability.label,
                fleschKincaid: readability.score
            },
            headings: {
                count: hTags.length,
                structure: hTags
            },
            seo: {
                title: {
                    suggested: suggestedTitle,
                    length: suggestedTitle.length,
                    ideal: "50-60 characters",
                    status: suggestedTitle.length > 60 ? "too_long" : suggestedTitle.length < 30 ? "too_short" : "good"
                },
                metaDescription: {
                    suggested: metaDescription,
                    length: metaDescription.length,
                    ideal: "150-160 characters",
                    status: metaDescription.length > 160 ? "too_long" : metaDescription.length < 120 ? "too_short" : "good"
                },
                slug: {
                    suggested: slugSuggestion,
                    length: slugSuggestion.length,
                    ideal: "30-60 characters"
                },
                keywords: {
                    topKeywords: keywordAnalysis.keywords,
                    twoWordPhrases: phrases.filter(p => p.phrase.split(" ").length === 2),
                    threeWordPhrases: phrases.filter(p => p.phrase.split(" ").length === 3),
                    totalUnique: keywordAnalysis.totalUnique
                },
                suggestedTags,
                imageAltTexts: [] // Could be enhanced to extract existing img alt texts
            },
            targetKeywords: targetKeywords ? {
                provided: targetKeywords,
                foundInContent: targetKeywords
                    .split(",")
                    .map(k => k.trim().toLowerCase())
                    .filter(k => text.toLowerCase().includes(k))
            } : null,
            recommendations: [
                wordCount < 300 ? "Aim for at least 300 words for better SEO performance." : null,
                wordCount > 3000 ? "Consider breaking this into a series of shorter posts for better engagement." : null,
                title && title.length > 60 ? "Title exceeds 60 characters. Shorten for better search result display." : null,
                metaDescription.length > 160 ? "Meta description exceeds 160 characters. Shorten for complete display in search results." : null,
                hTags.length === 0 ? "Add headings (H1, H2, H3) to structure your content and improve SEO." : null,
                !content.includes("<img") && !content.includes("<figure") ? "Add images to improve engagement. Include descriptive alt text." : null,
                !content.includes("<a") && !content.includes("href") ? "Consider adding internal or external links to provide more value." : null,
                keywordAnalysis.totalUnique < 15 ? "Use a wider variety of relevant keywords throughout your content." : null
            ].filter(Boolean)
        });

    } catch (error) {
        console.error("[generate-seo] Error:", error);
        return res.status(500).json({ error: `SEO generation failed: ${error.message}` });
    }
}
