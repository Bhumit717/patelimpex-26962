const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'pages', 'seo');
// Ensure directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Check current count
const initialFiles = fs.readdirSync(targetDir).filter(f => f.endsWith('.tsx'));
const initialCount = initialFiles.length;
const GOAL = 1000;
const NEEDED = Math.max(0, GOAL - initialCount);

console.log(`Current SEO pages: ${initialCount}`);
console.log(`Need to generate: ${NEEDED} more pages to reach ${GOAL}.`);

if (NEEDED <= 0) {
    console.log("Goal reached or exceeded.");
    process.exit(0);
}

// Expanded Lists for creating massive combinations
const products = [
    // Spices
    "Cumin Seeds", "Fennel Seeds", "Sesame Seeds", "Coriander Seeds", "Fenugreek Seeds",
    "Mustard Seeds", "Ajwain", "Dill Seeds", "Black Pepper", "Red Chilli", "Turmeric Finger",
    "Turmeric Powder", "Chilli Powder", "Coriander Powder", "Cumin Powder", "Cardamom",
    "Cloves", "Cinnamon", "Star Anise", "Nutmeg", "Ginger Powder", "Garlic Powder",
    "Dried Ginger", "Tamarind", "Bay Leaves", "Curry Leaves", "Asafoetida", "Saffron", "Vanilla",
    "Nigella Seeds", "Celery Seeds", "Poppy Seeds",

    // Grains & Rice
    "Basmati Rice", "Non-Basmati Rice", "Parboiled Rice", "Sona Masoori Rice", "IR64 Rice",
    "1121 Basmati Rice", "Sugandha Rice", "Pusa Basmati Rice", "Sharbati Rice",
    "Wheat", "Wheat Flour", "Maida", "Semolina", "Corn", "Maize", "Millet", "Sorghum", "Barley",
    "Amaranth", "Buckwheat", "Pearl Millet", "Finger Millet",

    // Pulses
    "Chickpeas", "Kabuli Chana", "Desi Chana", "Green Gram", "Black Gram", "Red Lentils",
    "Yellow Lentils", "Pigeon Peas", "Kidney Beans", "Soybeans", "Moth Beans", "Horse Gram",

    // Oil Seeds & Nuts
    "Groundnut", "Peanuts", "Castor Seeds", "Flax Seeds", "Safflower Seeds", "Sunflower Seeds",
    "Cashew Nuts", "Almonds", "Walnuts", "Pistachios", "Raisins", "Dates", "Fox Nuts",

    // Processed & Others
    "Psyllium Husk", "Psyllium Powder", "Dehydrated Onion", "Dehydrated Garlic",
    "Dehydrated Tomato", "Fried Onion", "Jaggery", "Sugar", "Salt", "Tea", "Coffee",
    "Cocoa Powder", "Cotton", "Cotton Yarn", "Animal Feed", "Rice Bran"
];

const markets = [
    // Asia
    "China", "Japan", "South Korea", "Vietnam", "Indonesia", "Malaysia", "Thailand",
    "Philippines", "Singapore", "Taiwan", "Bangladesh", "Sri Lanka", "Nepal", "Hong Kong",
    "Myanmar", "Cambodia", "Laos", "Maldives", "Kazakhstan", "Uzbekistan",

    // Middle East
    "UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain", "Iraq", "Iran", "Israel",
    "Jordan", "Lebanon", "Yemen", "Turkey", "Cyprus", "Syria",

    // Europe
    "UK", "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Poland",
    "Russia", "Ukraine", "Switzerland", "Sweden", "Norway", "Finland", "Denmark",
    "Ireland", "Portugal", "Austria", "Greece", "Czech Republic", "Hungary", "Romania",
    "Bulgaria", "Croatia", "Slovakia", "Slovenia", "Estonia", "Latvia", "Lithuania",

    // Americas
    "USA", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru",
    "Ecuador", "Venezuela", "Panama", "Costa Rica", "Guatemala", "Trinidad and Tobago",

    // Africa
    "South Africa", "Nigeria", "Egypt", "Kenya", "Ghana", "Ethiopia", "Tanzania",
    "Uganda", "Morocco", "Algeria", "Sudan", "Angola", "Mozambique", "Ivory Coast",
    "Senegal", "Mauritius", "Zambia", "Zimbabwe", "Tunisia",

    // Oceania
    "Australia", "New Zealand", "Fiji", "Papua New Guinea"
];

// Helper to sanitize filename
function sanitize(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

const imports = [];
const routes = [];
const seoLinks = [];
let generatedCount = 0;

// Read existing files to avoid dupes
const existingFiles = new Set(fs.readdirSync(targetDir));

// Random images for variety
const images = [
    "https://images.unsplash.com/photo-1588612143735-a774617dfb8f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1615485925785-68d489b27582?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1532336414008-82923c530dad?auto=format&fit=crop&q=80"
];

// Iterate products first, then markets
// To ensure we get a good spread, we can randomize loops or just iterate.
// Simple iteration is fine as long as we hit the count.

outerLoop:
for (const product of products) {
    for (const market of markets) {
        if (generatedCount >= NEEDED) break outerLoop;

        const fileNameBase = `${sanitize(product)}ExportTo${sanitize(market)}`;
        // Check if a file starting with this base exists (to avoid duplicates like basePage51.tsx vs basePage251.tsx)
        // Actually, our previous format appended 'PageX'. 
        // We should check if the semantic concept exists.

        // We'll construct what the filename WOULD be if we generated it now, but we need a unique ID.
        // To check existence of the concept "Product X to Market Y", we can check if any existing file matches the pattern.
        // For simplicity and speed in this script, we'll assume standard naming convention.
        // If we find `ProductExportToMarket` in the file list (ignoring the suffix page number), skip.

        let exists = false;
        for (const f of initialFiles) {
            if (f.startsWith(fileNameBase)) {
                exists = true;
                break;
            }
        }

        if (exists) continue;

        const uniqueId = initialCount + generatedCount + 1000; // Offset ID to avoid conflicts with previous small numbers
        const pageName = `${fileNameBase}Page${uniqueId}`;
        const fileName = `${pageName}.tsx`;

        const urlPath = `/seo/${product.toLowerCase().replace(/ /g, '-')}-export-to-${market.toLowerCase().replace(/ /g, '-')}`;

        const title = `${product} Export to ${market} | ISO Certified Exporter | Patel Impex`;
        const description = `Leading ${product} exporter to ${market}. Patel Impex offers premium quality ${product} with international grade packaging and timely delivery to ${market}.`;
        const keywords = `${product}, ${product} export to ${market}, ${product} supplier in India, ${product} manufacturer, buy ${product}, export ${product}, ${market} importers of ${product}, Patel Impex ${product}, Indian ${product} supplier, bulk ${product} export`;

        const randomImage = images[Math.floor(Math.random() * images.length)];

        const content = `import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import WhatsAppButton from '../../components/WhatsAppButton';
import { ArrowRight, CheckCircle, Truck, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ${pageName} = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
        <link rel="canonical" href="https://patelimpex.com${urlPath}" />
      </Helmet>
      
      <Header />
      
      <div className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="${randomImage}" 
            alt="${product} Export" 
            className="w-full h-[60vh] object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6 backdrop-blur-sm border border-orange-500/30">
            Global Trade Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium <span className="text-orange-500">${product}</span> Export to <span className="text-blue-400">${market}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Exporting high-quality ${product} to ${market} with end-to-end logistics solutions. Trusted by importers across ${market} for our quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all group">
              Request Quotation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold transition-all backdrop-blur-sm">
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Your Trusted Partner for ${product} in ${market}
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Patel Impex has established a strong presence in the ${market} market, supplying premium grade ${product}. We ensure strict adherence to ${market}'s import standards and quality regulations.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600 shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Quality Guaranteed</h3>
                    <p className="text-sm text-slate-600">Pure, adulteration-free ${product}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Global Standards</h3>
                    <p className="text-sm text-slate-600">Compliant with ${market} regulations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600 shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Seamless Logistics</h3>
                    <p className="text-sm text-slate-600">Door-to-port delivery to ${market}</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Certified Exporter</h3>
                    <p className="text-sm text-slate-600">Recognized by Export Promotion Councils</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-2xl transform rotate-3" />
              <img 
                src="${randomImage}" 
                alt="Patel Impex Export Quality" 
                className="relative rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ${pageName};
`;

        fs.writeFileSync(path.join(targetDir, fileName), content);

        imports.push(`import ${pageName} from "./pages/seo/${pageName}";`);
        routes.push(`<Route path="${urlPath}" element={<${pageName} />} />`);
        seoLinks.push(`{ title: "${product} Export to ${market}", path: "${urlPath}" },`);

        generatedCount++;
        if (generatedCount % 50 === 0) console.log(`Generated ${generatedCount} pages so far...`);
    }
}

console.log(`Finished generation. Created ${generatedCount} new pages.`);
// Write outputs for next step
fs.writeFileSync(path.join(__dirname, 'generated_remaining_imports.txt'), imports.join('\n'));
fs.writeFileSync(path.join(__dirname, 'generated_remaining_routes.txt'), routes.join('\n'));
fs.writeFileSync(path.join(__dirname, 'generated_remaining_seo_links.txt'), seoLinks.join('\n'));
