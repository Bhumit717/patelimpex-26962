const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
const appContent = fs.readFileSync(appPath, 'utf8');

// Regex to find imports for generated pages
// import PsylliumHuskExporttoEuropePage1 from "./pages/seo/PsylliumHuskExporttoEuropePage1";
// We focus on the Route definitions to get the mapping of URL -> Component
// <Route path="/seo/psyllium-husk-export-to-usa" element={<PsylliumHuskExporttoUSAPage0 />} />
// Pattern: <Route path="/seo/([a-z0-9-]+)" element=\{<([A-Za-z0-9]+)Page([0-9]+) />\} />

const routeRegex = /<Route path="\/seo\/([a-z0-9-]+)" element=\{<([A-Za-z0-9]+)(Page[0-9]+) \/>\} \/>/g;

const matches = [];
let match;

while ((match = routeRegex.exec(appContent)) !== null) {
    const slug = match[1];
    const componentName = match[2]; // e.g. PsylliumHuskExporttoUSA
    // We need to extract Product and Country from componentName
    // format seems to be [Product]Export(to|To)[Country]
    // or sometimes [Product]Export[Country] if "to" is omitted?
    // Let's rely on the slug for cleaner text if possible, or try to parse component name.

    // Slug: psyllium-husk-export-to-usa
    // We can convert slug to Title Case for display.

    matches.push({
        slug: slug,
        componentName: componentName
    });
}

console.log(`Found ${matches.length} generated SEO routes.`);

// Helper to format slug to text
function slugToText(slug) {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Generate the TS data file
const dataContent = `export interface SEOPageData {
  slug: string;
  title: string;
  product: string;
  country: string;
}

export const seoPagesData: SEOPageData[] = [
${matches.map(m => {
    // Try to extract Product and Country from slug
    // slug: psyllium-husk-export-to-usa
    // generic pattern: [product]-export-to-[country]
    const parts = m.slug.split('-export-to-');
    let product = "Product";
    let country = "Country";

    if (parts.length === 2) {
        product = slugToText(parts[0]);
        country = slugToText(parts[1]);
    } else {
        // Fallback or other patterns like "tea-export-services" (though those shouldn't match the PageN regex hopefully)
        // If it matches, we treat it generically
        product = slugToText(m.slug);
        country = "Global";
    }

    // Specific fix for "U S A" formatting if needed, but Title Case "Usa" is okay for now, we can refine component side.
    if (country === "Usa") country = "USA";
    if (country === "Uae") country = "UAE";
    if (country === "Uk") country = "UK";

    return `  {
    slug: "${m.slug}",
    title: "${product} Export to ${country}",
    product: "${product}",
    country: "${country}"
  }`;
}).join(',\n')}
];
`;

fs.writeFileSync(path.join(__dirname, 'src', 'seo_data.ts'), dataContent);
console.log('Written src/seo_data.ts');

// Generate Sitemap updates
// We need to read existing sitemap, identify where to append, or just regenerate the SEO section.
// The file public/sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// We will construct the XML blocks for these new pages
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD matches sitemap format roughly, or use hardcoded

const newSitemapEntries = matches.map(m => `  <url>
    <loc>https://patelimpex.com/seo/${m.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

// Simplest approach: Check if these URLs are already in sitemap. If not, add them.
// But user said "fix it", implies regenerating is better.
// However, I shouldn't delete existing non-SEO pages.
// I will look for a marker or just append to end before </urlset>
// Warning: This simplistic append might duplicate entries if runnable multiple times. 
// Ideally we regenerate the whole defined SEO section.

// Let's just output the sitemap chunk to a separate file for now to be safe, or we can replace the whole file if we were sure.
// Given the user constraint "fix it", I should probably update the sitemap file.
// I'll rewrite the sitemap to be safe: Keep existing non-duplicate entries, add new ones.

const urlRegex = /<loc>(.*?)<\/loc>/g;
const existingUrls = new Set();
let matchUrl;
while ((matchUrl = urlRegex.exec(sitemapContent)) !== null) {
    existingUrls.add(matchUrl[1]);
}

let addedCount = 0;
const entriesToAdd = [];
matches.forEach(m => {
    const url = `https://patelimpex.com/seo/${m.slug}`;
    if (!existingUrls.has(url)) {
        entriesToAdd.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
        addedCount++;
    }
});

if (addedCount > 0) {
    const closingTag = '</urlset>';
    const newContent = sitemapContent.replace(closingTag, entriesToAdd.join('\n') + '\n' + closingTag);
    fs.writeFileSync(sitemapPath, newContent);
    console.log(`Added ${addedCount} new URLs to sitemap.xml`);
} else {
    console.log('No new URLs to add to sitemap.xml');
}
