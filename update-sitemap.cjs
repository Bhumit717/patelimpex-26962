const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
    let content = fs.readFileSync(sitemapPath, 'utf8');
    const today = new Date().toISOString().split('T')[0];

    // Replace all lastmod dates
    // Pattern: <lastmod>YYYY-MM-DD</lastmod>
    const updatedContent = content.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

    fs.writeFileSync(sitemapPath, updatedContent);
    console.log(`Updated sitemap.xml timestamps to ${today}`);
} else {
    console.error("sitemap.xml not found");
}
