const fs = require('fs');
const path = require('path');

// Configuration
const products = [
    // Existing
    'Psyllium Husk', 'Spices', 'Rice', 'Cotton', 'Groundnut', 'Sesame Seeds',
    'Cumin Seeds', 'Fennel Seeds', 'Turmeric', 'Chilli', 'Cardamom', 'Chickpeas',
    'Soybeans', 'Wheat', 'Corn', 'Sugar', 'Animal Feed', 'Oil Seeds',
    'Dehydrated Onion', 'Dehydrated Garlic', 'Fresh Vegetables', 'Fresh Fruits',
    'Frozen Vegetables', 'Processed Food',
    // New Additions
    'Coriander Seeds', 'Black Pepper', 'Red Chilli Powder', 'Ginger', 'Cashew Kernels',
    'Almonds', 'Walnuts', 'Pistachios', 'Raisins', 'Dates',
    'Yellow Corn', 'White Rice', 'Basmati Rice', 'Non Basmati Rice',
    'Millet', 'Barley', 'Sorghum', 'Jaggery', 'Tea', 'Coffee',
    'Coir Fiber', 'Jute Products', 'Leather Goods', 'Handicrafts', 'Textiles'
];

const markets = [
    // Existing
    'USA', 'Europe', 'UK', 'UAE', 'China', 'Bangladesh', 'Vietnam',
    'Indonesia', 'Philippines', 'Korea', 'Taiwan', 'Saudi Arabia',
    'Malaysia', 'Africa', 'Middle East',
    // New Additions
    'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Belgium',
    'Japan', 'Singapore', 'Thailand', 'Canada', 'Australia', 'Russia',
    'Brazil', 'Turkey', 'Mexico', 'South Africa', 'Egypt', 'Kenya', 'Nigeria',
    'Kuwait', 'Qatar', 'Oman', 'Bahrain', 'Iraq', 'Iran', 'Israel'
];

const existingPages = new Set([
    // List of slugs we already created to avoid duplicates
    'psyllium-husk-export-to-usa', 'psyllium-husk-export-to-europe', 'psyllium-husk-export-to-uk',
    'spices-export-to-usa', 'spices-export-to-uk', 'spices-export-to-uae',
    'rice-export-to-usa', 'rice-export-to-europe', 'rice-export-to-uae',
    'cotton-export-to-china', 'cotton-export-to-bangladesh', 'cotton-export-to-vietnam',
    'groundnut-export-to-indonesia', 'groundnut-export-to-vietnam', 'groundnut-export-to-philippines',
    'sesame-seeds-export-to-korea', 'sesame-seeds-export-to-china', 'sesame-seeds-export-to-taiwan',
    'cumin-seeds-export-to-usa', 'cumin-seeds-export-to-europe',
    'fennel-seeds-export-to-usa', 'fennel-seeds-export-to-europe',
    'turmeric-export-to-usa', 'turmeric-export-to-europe',
    'chilli-export-to-china', 'chilli-export-to-usa',
    'cardamom-export-to-saudi-arabia', 'cardamom-export-to-uae',
    'chickpeas-export-to-usa', 'chickpeas-export-to-uk',
    'soybeans-export-to-china', 'soybeans-export-to-vietnam',
    'wheat-export-to-uae', 'wheat-export-to-bangladesh',
    'corn-export-to-vietnam', 'corn-export-to-malaysia',
    'sugar-export-to-africa', 'sugar-export-to-middle-east',
    'animal-feed-export-to-vietnam', 'animal-feed-export-to-korea',
    'oil-seeds-export-to-europe', 'oil-seeds-export-to-china',
    'dehydrated-onion-export-to-europe', 'dehydrated-onion-export-to-usa',
    'dehydrated-garlic-export-to-europe', 'dehydrated-garlic-export-to-usa',
    'fresh-vegetables-export-to-uae', 'fresh-fruits-export-to-europe',
    'frozen-vegetables-export-to-usa', 'processed-food-export-to-usa'
]);

const outputDir = path.join(__dirname, 'src', 'pages', 'seo');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to get random image
const imagesDir = path.join(__dirname, 'src', 'assets');
let availableImages = [];
try {
    // Simple check for images in potentially nested folders
    const findImages = (dir) => {
        let results = [];
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat && stat.isDirectory()) {
                results = results.concat(findImages(filePath));
            } else {
                if (file.match(/\.(png|jpg|jpeg|webp)$/)) {
                    results.push(filePath.replace(__dirname, '@').replace(/\\/g, '/').replace('@/src', '@'));
                }
            }
        });
        return results;
    };
    availableImages = findImages(imagesDir);
} catch (e) {
    console.log("Could not scan images, using defaults");
}

function getRandomImage() {
    if (availableImages.length > 0) {
        return availableImages[Math.floor(Math.random() * availableImages.length)];
    }
    return "@/assets/hero-bg.jpg"; // Fallback
}

// Template generator
function generatePageContent(product, market, componentName) {
    const imagePath = getRandomImage();
    const title = `${product} Export to ${market}`;
    const slug = `${product.toLowerCase().replace(/ /g, '-')}-export-to-${market.toLowerCase().replace(/ /g, '-')}`;

    return `import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, TrendingUp, Shield } from 'lucide-react';
import heroImage from '${imagePath}';

const ${componentName} = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Helmet>
        <title>${title} | Patel Impex</title>
        <meta name="description" content="Patel Impex is a leading exporter of ${product} to ${market}. We ensure premium quality, timely delivery, and compliance with all international trade regulations." />
        <meta name="keywords" content="${product} export, ${product} supplier, export to ${market}, Indian ${product} exporter, global trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/${slug}" />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={heroImage} 
            alt="${title}" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">${title}</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Connecting Indian Agriculture with ${market}'s Market Demands
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Patel Impex for ${product}?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Premium Quality Assurance</h3>
                      <p className="text-muted-foreground">We maintain strict quality control measures to ensure only the best ${product} reaches ${market}.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Detailed Market Knowledge</h3>
                      <p className="text-muted-foreground">Understanding ${market}'s specific import regulations and consumer preferences.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Competitive Pricing</h3>
                      <p className="text-muted-foreground">Volume-based pricing strategies that give you a competitive edge in the ${market} market.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Export Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Product</span>
                    <span>${product}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Origin</span>
                    <span>India</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Target Market</span>
                    <span>${market}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Packaging</span>
                    <span>Customizable (Bag/Box/Bulk)</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Certifications</span>
                    <span>FSSAI, APEDA, ISO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Import ${product} from India?</h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with Patel Impex for reliable, high-quality exports to ${market}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Us Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/products">Explore All Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ${componentName};
`;
}

// Main generation logic
const newPages = [];
let count = 0;
const targetCount = 200;

productLoop:
for (const product of products) {
    for (const market of markets) {
        if (count >= targetCount) break productLoop;

        const slug = `${product.toLowerCase().replace(/ /g, '-')}-export-to-${market.toLowerCase().replace(/ /g, '-')}`;

        if (existingPages.has(slug)) continue;

        const componentName = product.replace(/ /g, '') + 'ExportTo' + market.replace(/ /g, '') + 'Page' + (count + 51); // Offset ID

        const filePath = path.join(outputDir, `${componentName}.tsx`);
        const content = generatePageContent(product, market, componentName);

        fs.writeFileSync(filePath, content);

        newPages.push({
            product,
            market,
            slug: `/seo/${slug}`,
            componentName,
            title: `${product} Export to ${market}`
        });

        count++;
    }
}

// Generate output for manual addition (since App.tsx is large, we'll append carefully or user will)
// Actually I will try to generate a file I can read to update App.tsx

const imports = newPages.map(p => `import ${p.componentName} from "./pages/seo/${p.componentName}";`).join('\n');
const routes = newPages.map(p => `<Route path="${p.slug}" element={<${p.componentName} />} />`).join('\n');
const seoLinks = newPages.map(p => `{ title: "${p.title}", path: "${p.slug}" },`).join('\n');

fs.writeFileSync('generated_200_imports.txt', imports);
fs.writeFileSync('generated_200_routes.txt', routes);
fs.writeFileSync('generated_200_seo_links.txt', seoLinks);

console.log(`Generated ${count} new SEO pages.`);
