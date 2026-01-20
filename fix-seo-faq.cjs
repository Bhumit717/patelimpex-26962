const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src', 'pages', 'seo');
const files = fs.readdirSync(seoDir).filter(f => f.endsWith('.tsx'));

let fixedCount = 0;

files.forEach(file => {
    const filePath = path.join(seoDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match the MALFORMED script tag content (Raw JSON inside JSX)
    // Considers multiline content (using [\s\S]*?)
    // We specifically look for the FAQPage one to avoid breaking existing Product schema if it was correct (though previous ones used JSON.stringify correctly)
    const badRegex = /(<script type="application\/ld\+json">\s*)({"@context":"https:\/\/schema\.org","@type":"FAQPage"[\s\S]*?)(\s*<\/script>)/;

    if (badRegex.test(content)) {
        const newContent = content.replace(badRegex, (match, openTag, jsonContent, closeTag) => {
            // Wrap the JSON content in a JSX template literal expression: {` ... `}
            return `${openTag}{\`${jsonContent}\`}${closeTag}`;
        });

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            fixedCount++;
            // console.log(`Fixed ${file}`);
        }
    }
});

console.log(`Scan complete. Fixed ${fixedCount} files.`);
