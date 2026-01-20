const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');
const lines = appContent.split(/\r?\n/);

const newLines = [];
let dynamicImportAdded = false;
let dynamicRouteAdded = false;

const importRegex = /import .*Page[0-9]+ from .*/;
const routeRegex = /<Route .*Page[0-9]+ .*\/>/;

let lastImportIndex = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
        lastImportIndex = i;
    }
}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (importRegex.test(line) || routeRegex.test(line)) {
        continue;
    }

    // Add import just after the last existing import we process
    // But since we are processing line by line, 'lastImportIndex' is from the OLD array.
    // If we are currently AT the last import line index of the old array, we append.

    // Logic:
    // 1. Push current line (if not deleted)
    // 2. If valid import and we want to inject after:
    //    Actually, safer to inject at top or check if we passed the imports.
    //    Let's just inject after the first 'react-router-dom' import or similar.
    //    Or simpler: Inject after the line index 'lastImportIndex'.

    newLines.push(line);

    if (i === lastImportIndex && !dynamicImportAdded) {
        newLines.push('import DynamicSEOProductPage from "./pages/seo/DynamicSEOProductPage";');
        dynamicImportAdded = true;
    }

    if (line.includes('<Route path="*" element={<NotFound />} />') && !dynamicRouteAdded) {
        newLines.pop();
        newLines.push('          <Route path="/seo/:slug" element={<DynamicSEOProductPage />} />');
        newLines.push(line);
        dynamicRouteAdded = true;
    }
}

fs.writeFileSync(appPath, newLines.join('\n'));
console.log('Refactored App.tsx');
