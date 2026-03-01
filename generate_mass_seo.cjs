const fs = require('fs');
const path = require('path');

const products = [
    "Basmati Rice", "Non-Basmati Rice", "Sella Rice", "Parboiled Rice", "Steam Rice", "IR-64 Rice", "Sona Masoori Rice",
    "Wheat", "Durum Wheat", "Sharbati Wheat", "Lokwan Wheat", "Corn", "Yellow Maize", "Millet", "Barley",
    "Raw Cotton", "Cotton Yarn", "Comber Noil", "Cotton Carding", "Processed Cotton",
    "Soybean", "Soybean Meal", "Groundnut", "Peanut", "Java Groundnut", "Bold Groundnut",
    "Psyllium Husk", "Psyllium Seeds", "Psyllium Powder", "Isabgol",
    "Fennel Seeds", "Cardamom", "Cumin Seeds", "Turmeric", "Coriander", "Black Pepper", "Red Chili", "Ginger", "Garlic", "Onion",
    "Cashew", "Almond", "Sesame Seeds", "Hulled Sesame", "Sunflower Seeds",
    "Raw Sugar", "White Crystal Sugar", "Refined Sugar", "Organic Sugar", "Jaggery", "Brown Sugar",
    "Medical Gloves", "Diagnostic Kits", "Health Capsules", "Herbal Supplements", "Veterinary Medicines",
    "Farm Tractors", "Mini Tractors", "Combine Harvesters", "Drip Irrigation Systems", "Cultivators", "Sprinkler Systems", "Seeding Machines", "Power Tillers", "Threshers", "Farm Trailers",
    "Hand Tools", "CNC Machines", "Power Drill Sets", "Industrial Motors", "Engine Parts", "Welding Machines", "Hydraulic Presses", "Ball Bearings", "Hardware Fittings", "Conveyor Belts",
    "Storage Containers", "Packaging Boxes", "Industrial Pipes", "Household Buckets", "Medical Containers", "Automotive Bumpers", "Plastic Bottles", "Food Containers", "Plastic Sheets", "Molded Parts",
    "Bed Linen", "Designer Fabrics", "Curtains", "Towel Sets", "Wool Blankets",
    "Spice Pickles", "Ready Meals", "Snack Packets", "Dairy Ghee", "Organic Pesticides", "Bio Fertilizers"
];

const locations = [
    "USA", "United States", "UK", "United Kingdom", "Canada", "Australia", "New Zealand",
    "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Sweden", "Switzerland", "Norway", "Denmark", "Finland", "Austria", "Poland", "Ireland", "Portugal", "Greece", "Czech Republic", "Hungary", "Romania",
    "Russia", "Ukraine", "Belarus", "Kazakhstan", "Uzbekistan", "Georgia", "Armenia", "Azerbaijan",
    "China", "Japan", "South Korea", "Taiwan", "Hong Kong", "Macau",
    "Indonesia", "Malaysia", "Singapore", "Thailand", "Vietnam", "Philippines", "Myanmar", "Cambodia", "Laos", "Brunei",
    "India", "Sri Lanka", "Bangladesh", "Nepal", "Bhutan", "Maldives",
    "Pakistan", "Afghanistan",
    "UAE", "Dubai", "Abu Dhabi", "Saudi Arabia", "Riyadh", "Oman", "Qatar", "Kuwait", "Bahrain", "Israel", "Tel Aviv", "Jordan", "Lebanon", "Iraq", "Iran", "Syria", "Yemen",
    "Egypt", "South Africa", "Nigeria", "Kenya", "Ghana", "Ethiopia", "Morocco", "Algeria", "Tunisia", "Libya", "Sudan", "Tanzania", "Uganda", "Angola", "Mozambique", "Madagascar", "Cameroon", "Cote d'Ivoire", "Senegal", "Zimbabwe", "Rwanda", "Zambia", "Mali",
    "Brazil", "Argentina", "Colombia", "Chile", "Peru", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay",
    "Mexico", "Cuba", "Dominican Republic", "Puerto Rico", "Costa Rica", "Panama", "Jamaica", "Trinidad and Tobago", "Bahamas", "Haiti", "El Salvador", "Honduras", "Nicaragua", "Guatemala",
    "Turkey", "Cyprus", "Malta", "Iceland", "Greenland", "Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu", "Samoa", "Tonga"
];

const intents = [
    { prefix: "import", suffix: "from india to" },
    { prefix: "wholesale", suffix: "suppliers in" },
    { prefix: "best", suffix: "exporters for" },
    { prefix: "bulk", suffix: "buyers in" },
    { prefix: "high quality", suffix: "manufacturers for" },
    { prefix: "top", suffix: "distributors in" }
];

const slugify = (text) => text.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-');

console.log(`Generating dictionary for parsing...`);
const dictionary = {
    products: products.map(p => ({ original: p, slug: slugify(p) })),
    locations: locations.map(l => ({ original: l, slug: slugify(l) })),
    intents: intents.map(i => ({
        prefix: slugify(i.prefix),
        suffix: slugify(i.suffix),
        originalPrefix: i.prefix,
        originalSuffix: i.suffix
    }))
};

fs.writeFileSync('src/data/seoDictionary.json', JSON.stringify(dictionary, null, 2));

console.log(`Generating sitemaps...`);

// We will generate the sitemaps.
let currentSitemapIndex = 1;
let currentUrlCount = 0;
let currentSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
const sitemapFiles = [];
const BASE_URL = 'https://patelimpex.com';

const maxUrlsPerSitemap = 2000;

for (const product of dictionary.products) {
    for (const location of dictionary.locations) {
        for (const intent of dictionary.intents) {
            const slug = `${intent.prefix}-${product.slug}-${intent.suffix}-${location.slug}`;
            const url = `${BASE_URL}/seo/${slug}`;

            currentSitemapContent += `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
            currentUrlCount++;

            if (currentUrlCount >= maxUrlsPerSitemap) {
                currentSitemapContent += `</urlset>`;
                const filename = `sitemap-mass-${currentSitemapIndex}.xml`;
                fs.writeFileSync(path.join('public', filename), currentSitemapContent);
                sitemapFiles.push(filename);

                currentSitemapIndex++;
                currentUrlCount = 0;
                currentSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
            }
        }
    }
}

// Write the last one if it has content
if (currentUrlCount > 0) {
    currentSitemapContent += `</urlset>`;
    const filename = `sitemap-mass-${currentSitemapIndex}.xml`;
    fs.writeFileSync(path.join('public', filename), currentSitemapContent);
    sitemapFiles.push(filename);
}

// Update the main index or write a new sitemap index
console.log(`Generating sitemap index...`);
let indexContent = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Include original sitemap
indexContent += `  <sitemap>\n    <loc>${BASE_URL}/sitemap.xml</loc>\n  </sitemap>\n`;

for (const file of sitemapFiles) {
    indexContent += `  <sitemap>\n    <loc>${BASE_URL}/${file}</loc>\n  </sitemap>\n`;
}
indexContent += `</sitemapindex>`;

fs.writeFileSync(path.join('public', 'sitemap_index.xml'), indexContent);

console.log(`Total URLs generated: ${(currentSitemapIndex - 1) * maxUrlsPerSitemap + currentUrlCount}`);
console.log(`Completed. Please ensure robots.txt points to sitemap_index.xml`);
