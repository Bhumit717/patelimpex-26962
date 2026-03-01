const fs = require('fs');
const path = require('path');

const MAX_URLS_PER_SITEMAP = 20000;

async function mergeSitemaps() {
    console.log("Generating ultra-clean sitemaps for Google...");

    const keywordsPath = path.join(__dirname, 'src', 'data', 'seoKeywords.json');
    if (!fs.existsSync(keywordsPath)) {
        console.error("seoKeywords.json not found!");
        return;
    }
    const keywordArray = JSON.parse(fs.readFileSync(keywordsPath, 'utf8'));

    const slugify = (str) => {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    const SITE_URL = 'https://patelimpex.com';
    const sitemapsDir = path.join(__dirname, 'public');
    const simpleDate = new Date().toISOString().split('T')[0];

    // Delete all previous sitemaps
    const files = fs.readdirSync(sitemapsDir);
    for (const file of files) {
        if ((file.startsWith('sitemap-mass-') || file.startsWith('sitemap-bulk-') || file.startsWith('sitemap-core-') || file === 'sitemap_index.xml') && file.endsWith('.xml')) {
            fs.unlinkSync(path.join(sitemapsDir, file));
        }
    }

    let sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    sitemapIndexContent += `  <sitemap>\n    <loc>${SITE_URL}/sitemap.xml</loc>\n    <lastmod>${simpleDate}</lastmod>\n  </sitemap>\n`;

    let sitemapCount = 0;

    for (let i = 0; i < keywordArray.length; i += MAX_URLS_PER_SITEMAP) {
        sitemapCount++;
        const chunk = keywordArray.slice(i, i + MAX_URLS_PER_SITEMAP);

        let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        for (const kw of chunk) {
            const slug = slugify(kw);
            sitemapContent += `  <url>\n    <loc>${SITE_URL}/seo/${slug}</loc>\n    <lastmod>${simpleDate}</lastmod>\n  </url>\n`;
        }

        sitemapContent += `</urlset>`;

        const filename = `sitemap-core-${sitemapCount}.xml`;
        fs.writeFileSync(path.join(sitemapsDir, filename), sitemapContent);

        sitemapIndexContent += `  <sitemap>\n    <loc>${SITE_URL}/${filename}</loc>\n    <lastmod>${simpleDate}</lastmod>\n  </sitemap>\n`;
    }

    sitemapIndexContent += `</sitemapindex>`;
    fs.writeFileSync(path.join(sitemapsDir, 'sitemap_index.xml'), sitemapIndexContent);

    console.log(`Successfully packed ${keywordArray.length} keywords into EXACTLY ${sitemapCount} sitemaps with prefix sitemap-core-!`);
}

mergeSitemaps();
