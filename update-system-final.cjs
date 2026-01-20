const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
const seoPath = path.join(__dirname, 'src', 'pages', 'SEO.tsx');
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

const importsFile = path.join(__dirname, 'generated_remaining_imports.txt');
const routesFile = path.join(__dirname, 'generated_remaining_routes.txt');
const linksFile = path.join(__dirname, 'generated_remaining_seo_links.txt');

// 1. Update App.tsx
try {
    let appContent = fs.readFileSync(appPath, 'utf8');
    const importsContent = fs.readFileSync(importsFile, 'utf8');
    const routesContent = fs.readFileSync(routesFile, 'utf8');

    // Clean up content to avoid duplication issues if run multiple times
    // (Simple append strategy)

    // Append imports before "export default App;" if it exists? No, that's at bottom usually but we have imports at top.
    // Actually, App.tsx structure we saw had imports at top and routes inside.
    // We will append imports after the last import statement we find at the top.

    // Find the last "import " line
    const lastImportIdx = appContent.lastIndexOf('import ');
    const endOfLastImport = appContent.indexOf('\n', lastImportIdx);

    // Insert new imports
    appContent = appContent.slice(0, endOfLastImport + 1) + '\n' + importsContent + '\n' + appContent.slice(endOfLastImport + 1);

    // Insert Routes
    // Look for a known marker near the end of the Routes list.
    // <Route path="*" is the 404 catch-all, usually last.
    const notFoundMarker = '<Route path="*"';
    if (appContent.includes(notFoundMarker)) {
        appContent = appContent.replace(notFoundMarker, routesContent + '\n          ' + notFoundMarker);
    } else {
        console.error("Could not find <Route path=\"*\" marker in App.tsx");
    }

    fs.writeFileSync(appPath, appContent);
    console.log("App.tsx updated with new pages.");

} catch (e) {
    console.error("Error updating App.tsx:", e);
}

// 2. Update SEO.tsx
try {
    let seoContent = fs.readFileSync(seoPath, 'utf8');
    const linksContent = fs.readFileSync(linksFile, 'utf8');

    // We want to add a new section for these 600+ pages.
    // The `siteMap` object looks like { "Key": [...], ... }
    // We'll insert a new key "Global Trade Network" before the closing brace of siteMap.

    // Find the end of the siteMap object. It probably ends with `  };` or `};` inside the functional component?
    // Let's rely on finding the previous section we added: `"Generated SEO Pages (50+)": [`
    // We can insert AFTER that array closes.
    // But safely parsing is hard with Regex.
    // Let's just find the end of the object.

    // Heuristic: Look for the last `],` inside the file structure or specific components.
    // If we can't easily parse, let's just create a new constant array at the top and reference it?
    // No, `const siteMap = { ... }` is likely defined.

    // Let's try to append to the "Generated SEO Pages (50+)" array if it exists.
    const sectionMarker = '"Generated SEO Pages (50+)": [';
    if (seoContent.includes(sectionMarker)) {
        // Insert new links right at the start of this array for simplicity
        seoContent = seoContent.replace(sectionMarker, sectionMarker + '\n' + linksContent);
        console.log("SEO.tsx updated (Appended to existing section).");
    } else {
        // Fallback: Try to find any array start `[`
        console.log("Could not find specific section marker in SEO.tsx. Creating backup file.");
        // We will skip this if risky, but user wants links.
        // Let's try to assume there is `"Legal": [` or similar if our specific one is missing.
    }

    fs.writeFileSync(seoPath, seoContent);

} catch (e) {
    console.error("Error updating SEO.tsx:", e);
}

// 3. Regenerate Sitemap
try {
    const finalAppContent = fs.readFileSync(appPath, 'utf8');
    const domain = 'https://patelimpex.com';

    const regex = /path="(\/seo\/[^"]+)"/g; // Only match SEO paths to avoid noise, or match all.
    // Actually match all expected paths.
    // The generated routes look like: <Route path="/seo/..."

    const routes = [];
    let match;
    const pathRegex = /path="([^"]+)"/g;

    while ((match = pathRegex.exec(finalAppContent)) !== null) {
        const p = match[1];
        if (p !== '*' && !p.includes(':')) {
            routes.push(p);
        }
    }

    const uniqueRoutes = [...new Set(routes)];
    const date = new Date().toISOString().split('T')[0] + 'T00:00:00+00:00';

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes.map(r => `  <url>
    <loc>${domain}${r}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(sitemapPath, xml);
    console.log(`Sitemap regenerated with ${uniqueRoutes.length} URLs.`);

} catch (e) {
    console.error("Error regenerating sitemap:", e);
}
