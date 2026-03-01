const axios = require('axios');
const fs = require('fs');
const path = require('path');

const coreProducts = [
    "basmati rice", "non basmati rice", "parboiled rice",
    "turmeric powder", "cumin seeds", "coriander seeds",
    "raw cotton", "cotton yarn", "woven fabric",
    "soybean meal", "groundnut", "peanut",
    "psyllium husk", "sesame seeds"
];

const b2bIntents = [
    "wholesale suppliers in",
    "import process from india to",
    "bulk buyers in",
    "top exporters of",
    "b2b price for",
    "manufacturers of"
];

const targetMarkets = [
    "uae", "dubai", "saudi arabia", "uk", "usa", "canada", "germany", "france",
    "italy", "spain", "netherlands", "australia", "japan", "south korea", "vietnam",
    "thailand", "malaysia", "singapore", "egypt", "south africa", "kenya", "nigeria",
    "brazil", "mexico", "chile", "colombia", "oman", "qatar", "kuwait"
];

// Helper to slugify
const slugify = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

async function generateKeywords() {
    console.log("Generating highly targeted long-tail B2B keywords...");

    const keywords = new Set();

    // Simulate finding hundreds of thousands of organic combinations
    // Example: "top exporters of basmati rice in dubai 2026"
    // Example: "wholesale suppliers of raw cotton in vietnam"
    const years = ["", " 2025", " 2026"];
    const adjectives = ["", "premium ", "organic ", "bulk "];

    for (const product of coreProducts) {
        for (const market of targetMarkets) {
            for (const intent of b2bIntents) {
                for (const adj of adjectives) {
                    for (const year of years) {
                        let keyword = "";
                        if (intent.endsWith("in") || intent.endsWith("to")) {
                            keyword = `${intent.replace('in', '').replace('to', '')} ${adj}${product} in ${market}${year}`;
                        } else if (intent.includes("price")) {
                            keyword = `${intent} ${adj}${product} in ${market}${year}`;
                        } else {
                            keyword = `${intent} ${adj}${product} for ${market}${year}`;
                        }

                        // Cleanup spaces
                        keyword = keyword.replace(/\s+/g, ' ').trim();
                        keywords.add(keyword);
                    }
                }
            }
        }
    }

    const keywordArray = Array.from(keywords);
    console.log(`Generated ${keywordArray.length} realistic long-tail B2B keywords.`);

    // Now chunk them into sitemaps of 2000 URLs each
    const SITE_URL = 'https://patelimpex.com';
    const sitemapsDir = path.join(__dirname, 'public');

    // Delete old mass sitemaps
    const files = fs.readdirSync(sitemapsDir);
    for (const file of files) {
        if (file.startsWith('sitemap-mass-') && file.endsWith('.xml')) {
            fs.unlinkSync(path.join(sitemapsDir, file));
        }
    }

    let sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    sitemapIndexContent += `  <sitemap>\n    <loc>${SITE_URL}/sitemap.xml</loc>\n  </sitemap>\n`;

    const maxUrls = 3000;
    let sitemapCount = 0;

    for (let i = 0; i < keywordArray.length; i += maxUrls) {
        sitemapCount++;
        const chunk = keywordArray.slice(i, i + maxUrls);

        let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        for (const kw of chunk) {
            const slug = slugify(kw);
            sitemapContent += `  <url>\n    <loc>${SITE_URL}/seo/${slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
        }

        sitemapContent += `</urlset>`;

        const filename = `sitemap-mass-${sitemapCount}.xml`;
        fs.writeFileSync(path.join(sitemapsDir, filename), sitemapContent);

        sitemapIndexContent += `  <sitemap>\n    <loc>${SITE_URL}/${filename}</loc>\n  </sitemap>\n`;
    }

    sitemapIndexContent += `</sitemapindex>`;
    fs.writeFileSync(path.join(sitemapsDir, 'sitemap_index.xml'), sitemapIndexContent);

    // Save minimal dict for lookup if needed, but the component will now run on the slug naturally.
    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'seoKeywords.json'), JSON.stringify(keywordArray, null, 2));

    console.log(`Successfully mapped ${keywordArray.length} keywords into ${sitemapCount} XML node graphs.`);
}

generateKeywords();
