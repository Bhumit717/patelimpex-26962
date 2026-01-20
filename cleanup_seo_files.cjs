const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src', 'pages', 'seo');
const files = fs.readdirSync(seoDir);

let deletedCount = 0;
files.forEach(file => {
    // Pattern: Ends with Page[Number].tsx
    // e.g. PsylliumHuskExporttoUSAPage0.tsx
    if (/Page[0-9]+\.tsx$/.test(file)) {
        fs.unlinkSync(path.join(seoDir, file));
        deletedCount++;
    }
});

console.log(`Deleted ${deletedCount} unused SEO files.`);
