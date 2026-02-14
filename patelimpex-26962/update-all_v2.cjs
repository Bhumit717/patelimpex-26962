const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
const seoPath = path.join(__dirname, 'src', 'pages', 'SEO.tsx');
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml'); // Will regenerate this
const importsFile = path.join(__dirname, 'generated_200_imports.txt');
const routesFile = path.join(__dirname, 'generated_200_routes.txt');
const linksFile = path.join(__dirname, 'generated_200_seo_links.txt');

// 1. Fix App.tsx
try {
    let appContent = fs.readFileSync(appPath, 'utf8');
    const importsContent = fs.readFileSync(importsFile, 'utf8');
    const routesContent = fs.readFileSync(routesFile, 'utf8');

    // Remove trailing imports if any (anything after export default App;)
    const exportDefaultIndex = appContent.indexOf('export default App;');
    if (exportDefaultIndex !== -1) {
        // Keep only up to the end of export default App;
        // Check if there's a newline after it
        const endOfExport = exportDefaultIndex + 'export default App;'.length;
        appContent = appContent.substring(0, endOfExport);
    }

    // Insert Imports at the top (before Product Pages comment or after last import)
    // Let's look for "// Product Pages - Main Categories"
    const importMarker = '// Product Pages - Main Categories';
    if (appContent.includes(importMarker)) {
        appContent = appContent.replace(importMarker, importsContent + '\n\n' + importMarker);
    } else {
        // Fallback: insert after last import
        const lastImportCheck = 'import ';
        const lastImport = appContent.lastIndexOf(lastImportCheck);
        const endOfLastImport = appContent.indexOf('\n', lastImport);
        appContent = appContent.slice(0, endOfLastImport + 1) + '\n' + importsContent + '\n' + appContent.slice(endOfLastImport + 1);
    }

    // Insert Routes
    // Look for the last SEO route or just before the fallback route
    // A good marker is {/* Sitemap is served ... */}
    const routeMarker = '{/* Sitemap is served';
    if (appContent.includes(routeMarker)) {
        appContent = appContent.replace(routeMarker, routesContent + '\n          ' + routeMarker);
    } else {
        // Fallback: look for <Route path="*"
        const fallbackRoute = '<Route path="*"';
        appContent = appContent.replace(fallbackRoute, routesContent + '\n          ' + fallbackRoute);
    }

    fs.writeFileSync(appPath, appContent);
    console.log('App.tsx updated.');

} catch (e) {
    console.error('Error updating App.tsx:', e);
}

// 2. Update SEO.tsx
try {
    let seoContent = fs.readFileSync(seoPath, 'utf8');
    const linksContent = fs.readFileSync(linksFile, 'utf8');

    // Look for the "Generated SEO Pages (50+)" section we added earlier
    const sectionMarker = '"Generated SEO Pages (50+)": [';
    if (seoContent.includes(sectionMarker)) {
        seoContent = seoContent.replace(sectionMarker, sectionMarker + '\n' + linksContent);
        // Note: linksContent ends with comma, which is valid in array
    } else {
        // If marker not found (maybe my previous edit failed?), look for the end of siteMap object
        console.error('Could not find marker in SEO.tsx');
    }

    fs.writeFileSync(seoPath, seoContent);
    console.log('SEO.tsx updated.');

} catch (e) {
    console.error('Error updating SEO.tsx:', e);
}

// 3. Regenerate Sitemap
try {
    const finalAppContent = fs.readFileSync(appPath, 'utf8');
    const domain = 'https://patelimpex.com';

    const regex = /path="([^"]+)"/g;
    let match;
    const routes = [];

    while ((match = regex.exec(finalAppContent)) !== null) {
        const routePath = match[1];
        if (routePath !== '*' && !routePath.includes(':')) {
            routes.push(routePath);
        }
    }

    const uniqueRoutes = [...new Set(routes)];

    const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    const date = new Date().toISOString().split('T')[0] + 'T00:00:00+00:00';

    const urlEntries = uniqueRoutes.map(route => {
        let priority = '0.7';
        let changefreq = 'monthly';

        if (route === '/') {
            priority = '1.0';
            changefreq = 'weekly';
        } else if (route.startsWith('/products') || route.startsWith('/services')) {
            priority = '0.8';
            changefreq = 'weekly';
        } else if (route.startsWith('/seo')) {
            priority = '0.8';
            changefreq = 'weekly';
        }

        const fullUrl = route === '/' ? domain : `${domain}${route}`;

        return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('');

    const xmlFooter = `
</urlset>`;

    fs.writeFileSync(sitemapPath, xmlHeader + urlEntries + xmlFooter);
    console.log(`Sitemap regenerated with ${uniqueRoutes.length} URLs.`);

} catch (e) {
    console.error('Error regenerating sitemap:', e);
}
