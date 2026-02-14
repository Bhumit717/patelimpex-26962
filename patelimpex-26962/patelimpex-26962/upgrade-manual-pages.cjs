const fs = require('fs');
const path = require('path');

const rootPagesDir = path.join(__dirname, 'src', 'pages');
const morePagesDir = path.join(__dirname, 'src', 'pages', 'more');

// Mapping for root pages
const rootPageMetadata = {
    "Index.tsx": { title: "Import Export Company in India | Patel Impex", desc: "Patel Impex is a leading government recognized import export company in India dealing in agro products, spices, and more." },
    "About.tsx": { title: "About Us | Patel Impex", desc: "Learn about Patel Impex, our journey, values, and mission in the global import-export industry." },
    "Products.tsx": { title: "Our Products | Patel Impex", desc: "Explore our wide range of certificates agro products including spices, grains, oil seeds, and more." },
    "Services.tsx": { title: "Export Import Services | Patel Impex", desc: "Comprehensive export import services including logistics, documentation, and market research." },
    "Contact.tsx": { title: "Contact Us | Patel Impex", desc: "Get in touch with Patel Impex for your import export requirements. 24/7 support available." },
    "Blog.tsx": { title: "Latest News & Insights | Patel Impex", desc: "Stay updated with the latest trends in international trade and global markets." },
    "FAQ.tsx": { title: "Frequently Asked Questions | Patel Impex", desc: "Find answers to common questions about our export process and products." },
    "Inquiry.tsx": { title: "Send Inquiry | Patel Impex", desc: "Send us your trade inquiry and get a quick quotation." },
    "TermsOfService.tsx": { title: "Terms of Service | Patel Impex", desc: "Terms and conditions for trading with Patel Impex." },
    "PrivacyPolicy.tsx": { title: "Privacy Policy | Patel Impex", desc: "Our commitment to protecting your privacy and data." },
    "CookiePolicy.tsx": { title: "Cookie Policy | Patel Impex", desc: "Information about how we use cookies on our website." },
    "News.tsx": { title: "Company News | Patel Impex", desc: "Latest updates and announcements from Patel Impex." },
    "More.tsx": { title: "More Resources | Patel Impex", desc: "Explore more resources and information about international trade." },
    "SEO.tsx": { title: "Global Export Network | Patel Impex", desc: "Our global export network covering USA, China, Europe, and more." }
};

function splitCamelCase(str) {
    return str.replace(/([A-Z])/g, ' $1').trim();
}

function processDirectory(dir, isMore = false) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (isMore && file === 'products' || file === 'seo' || file === 'more') return; // Skip directories if listed as files (shouldn't happen with filter)

        let content = fs.readFileSync(filePath, 'utf8');

        // Skip if already has SEOHead
        if (content.includes('<SEOHead') || content.includes('import SEOHead')) {
            console.log(`Skipping ${file} (already has SEOHead)`);
            return;
        }

        let title, desc, url;

        if (rootPageMetadata[file]) {
            title = rootPageMetadata[file].title;
            desc = rootPageMetadata[file].desc;
            url = file === 'Index.tsx' ? '/' : `/${file.replace('.tsx', '').toLowerCase()}`;
        } else if (isMore) {
            const prettyName = splitCamelCase(file.replace('.tsx', ''));
            title = `${prettyName} | Patel Impex`;
            desc = `${prettyName} - Expert services and information by Patel Impex.`;
            url = `/more/${file.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
        } else {
            return; // Skip unknown root files
        }

        // 1. Add Import
        const importStatement = `import SEOHead from "@/components/SEOHead";\n`;
        // Insert after last import or at top
        const lastImportIdx = content.lastIndexOf('import ');
        if (lastImportIdx !== -1) {
            const endOfImportLine = content.indexOf('\n', lastImportIdx);
            content = content.slice(0, endOfImportLine + 1) + importStatement + content.slice(endOfImportLine + 1);
        } else {
            content = importStatement + content;
        }

        // 2. Inject Component
        // Look for return ( <div or return <div
        if (content.match(/return\s*\(\s*<div/)) {
            content = content.replace(/(return\s*\(\s*<div[^>]*>)/, `$1\n      <SEOHead title="${title}" description="${desc}" canonicalUrl="${url}" />`);
        } else if (content.match(/return\s*<div/)) {
            content = content.replace(/(return\s*<div[^>]*>)/, `$1\n      <SEOHead title="${title}" description="${desc}" canonicalUrl="${url}" />`);
        } else if (content.match(/return\s*\(\s*<>/)) { // Fragment
            content = content.replace(/(return\s*\(\s*<>)/, `$1\n      <SEOHead title="${title}" description="${desc}" canonicalUrl="${url}" />`);
        } else {
            console.log(`Could not find suitable injection point for ${file}`);
            return;
        }

        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    });
}

console.log('Processing Root Pages...');
processDirectory(rootPagesDir);
console.log('Processing More Pages...');
processDirectory(morePagesDir, true);
