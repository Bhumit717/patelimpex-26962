const fs = require('fs');
const path = require('path');

const MAX_URLS_PER_SITEMAP = 15000;

async function mergeSitemaps() {
    console.log("Merging scattered XML node graphs back into 2 massive sitemaps...");

    // 1. Read the keyword array directly to reconstruct them
    const keywordsPath = path.join(__dirname, 'src', 'data', 'seoKeywords.json');
    if (!fs.existsSync(keywordsPath)) {
        console.error("seoKeywords.json not found!");
        return;
    }
    const keywordArray = JSON.parse(fs.readFileSync(keywordsPath, 'utf8'));

    // Helper to slugify
    const slugify = (str) => {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    const SITE_URL = 'https://patelimpex.com';
    const sitemapsDir = path.join(__dirname, 'public');

    // Delete all current mass sitemaps and index
    const files = fs.readdirSync(sitemapsDir);
    for (const file of files) {
        if ((file.startsWith('sitemap-mass-') || file === 'sitemap_index.xml') && file.endsWith('.xml')) {
            fs.unlinkSync(path.join(sitemapsDir, file));
        }
    }

    let sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    sitemapIndexContent += `  <sitemap>\n    <loc>${SITE_URL}/sitemap.xml</loc>\n  </sitemap>\n`;

    let sitemapCount = 0;

    for (let i = 0; i < keywordArray.length; i += MAX_URLS_PER_SITEMAP) {
        sitemapCount++;
        const chunk = keywordArray.slice(i, i + MAX_URLS_PER_SITEMAP);

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

    console.log(`Successfully packed ${keywordArray.length} keywords into EXACTLY ${sitemapCount} XML sitemaps!`);
}

mergeSitemaps();
