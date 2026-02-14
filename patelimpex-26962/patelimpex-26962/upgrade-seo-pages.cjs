const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'pages', 'seo');

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

function splitCamelCase(str) {
    return str.replace(/([A-Z])/g, ' $1').trim();
}

function processFiles() {
    if (!fs.existsSync(targetDir)) {
        console.error("Target directory not found:", targetDir);
        return;
    }

    const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.tsx'));
    let updatedCount = 0;

    files.forEach(file => {
        let content = null;
        let pageName = file.replace('.tsx', '');

        // Pattern 1: [Product]ExportTo[Market]Page[ID].tsx (Handling both 'To' and 'to')
        const matchCombination = file.match(/^(.+)Export[Tt]o(.+)Page(\d+)\.tsx$/);

        // Pattern 2: [Market]MarketExport.tsx
        const matchMarket = file.match(/^(.+)MarketExport\.tsx$/);

        // Pattern 3: [Product]Export.tsx (or ExportServices)
        const matchProduct = file.match(/^(.+)Export(Services)?\.tsx$/);

        if (matchCombination) {
            const product = splitCamelCase(matchCombination[1]);
            const market = splitCamelCase(matchCombination[2]);
            const urlPath = `/seo/${product.toLowerCase().replace(/ /g, '-')}-export-to-${market.toLowerCase().replace(/ /g, '-')}`;
            content = generateDetailedContent(pageName, product, market, urlPath, images);
        }
        else if (matchMarket) {
            const market = splitCamelCase(matchMarket[1]);
            const product = "All Products"; // Generic for market page
            const urlPath = `/seo/${market.toLowerCase().replace(/ /g, '-')}-market-export`;
            content = generateMarketContent(pageName, market, urlPath, images);
        }
        else if (matchProduct && !matchMarket) { // Ensure it's not MarketExport (MarketExport caught above)
            const product = splitCamelCase(matchProduct[1]);
            const urlPath = `/seo/${product.toLowerCase().replace(/ /g, '-')}-export`;
            content = generateProductContent(pageName, product, urlPath, images);
        }

        if (content) {
            fs.writeFileSync(path.join(targetDir, file), content);
            updatedCount++;
            if (updatedCount % 50 === 0) console.log(`Updated ${updatedCount} pages...`);
        }
    });

    console.log(`Finished updating ${updatedCount} pages.`);
}

function generateDetailedContent(pageName, product, market, urlPath, images) {
    const title = `${product} Export to ${market} | Premium Quality | Patel Impex`;
    const description = `Leading ${product} exporter to ${market}. Patel Impex supplies certified high-quality ${product} with reliable shipping and competitive pricing for the ${market} market.`;
    const keywords = `${product}, export ${product} to ${market}, ${product} supplier, ${market} importers of ${product}, Indian ${product} exporter, bulk ${product} supplier, agro products export, Patel Impex, buy ${product} in ${market}`;
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${product} for Export to ${market}`,
        "description": `Premium quality ${product} available for export to ${market}. ISO certified supplier.`,
        "brand": { "@type": "Brand", "name": "Patel Impex" },
        "offers": {
            "@type": "Offer",
            "url": `https://patelimpex.com${urlPath}`,
            "availability": "https://schema.org/InStock"
        }
    };

    return `import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, CheckCircle, Truck, Award, Users, Globe, Package, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ${pageName} = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
        <link rel="canonical" href="https://patelimpex.com${urlPath}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="${randomImage}" />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify(${JSON.stringify(structuredData)})}
        </script>
      </Helmet>
      <Navigation />
      <div className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <img src="${randomImage}" alt="${product} Export to ${market}" className="w-full h-[60vh] object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6 backdrop-blur-sm border border-orange-500/30">Trusted Global Exporter</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Premium <span className="text-orange-500">${product}</span> Export to <span className="text-blue-400">${market}</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">Your reliable partner for exporting finest quality ${product} to ${market}. We ensure international standards, timely delivery, and competitive pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all group">Get A Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold transition-all backdrop-blur-sm">View Products</Link>
          </div>
        </div>
      </div>
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our ${product} for ${market}?</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">As a leading exporter to ${market}, Patel Impex understands the specific quality and documentation requirements of the region. Our ${product} is sourced from the best farms, processed in hygienic facilities, and packed to preserve freshness during transit to ${market}.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3"><div className="p-2 bg-orange-100 rounded-lg text-orange-600 shrink-0"><CheckCircle className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Premium Quality</h3><p className="text-sm text-slate-600">Selected best grade</p></div></div>
                <div className="flex items-start gap-3"><div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0"><Globe className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">${market} Compliant</h3><p className="text-sm text-slate-600">Meets import regulations</p></div></div>
                <div className="flex items-start gap-3"><div className="p-2 bg-green-100 rounded-lg text-green-600 shrink-0"><Truck className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Timely Delivery</h3><p className="text-sm text-slate-600">Efficient logistics network</p></div></div>
                <div className="flex items-start gap-3"><div className="p-2 bg-purple-100 rounded-lg text-purple-600 shrink-0"><Package className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Export Packaging</h3><p className="text-sm text-slate-600">Secure & customized</p></div></div>
              </div>
            </div>
            <div className="relative"><img src="${randomImage}" alt="Patel Impex Export" className="relative rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" /></div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default ${pageName};`;
}

function generateMarketContent(pageName, market, urlPath, images) {
    const title = `${market} Import Export Services | Trade with ${market} | Patel Impex`;
    const description = `Comprehensive import export services for ${market}. Patel Impex facilitates trade between India and ${market} with expert logistics and customs support.`;
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return `import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Globe, Truck, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ${pageName} = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <link rel="canonical" href="https://patelimpex.com${urlPath}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="${randomImage}" />
      </Helmet>
      <Navigation />
      <div className="pt-32 pb-20 bg-blue-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Exporting to <span className="text-orange-400">${market}</span></h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">Your Gateway to the ${market} Market</p>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Trade Opportunities in ${market}</h2>
                <p className="text-slate-600 mb-4">Patel Impex specializes in connecting Indian exporters with buyers in ${market}. We understand the local market dynamics, consumer preferences, and regulatory landscape.</p>
                <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Contact our ${market} desk &rarr;</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white shadow rounded-lg text-center"><Truck className="mx-auto text-blue-500 w-8 h-8 mb-2"/><h3 className="font-bold">Logistics</h3><p className="text-sm text-slate-500">Fast shipping to ${market}</p></div>
                <div className="p-6 bg-white shadow rounded-lg text-center"><Building2 className="mx-auto text-orange-500 w-8 h-8 mb-2"/><h3 className="font-bold">Compliance</h3><p className="text-sm text-slate-500">Customs & documentation</p></div>
            </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default ${pageName};`;
}

function generateProductContent(pageName, product, urlPath, images) {
    const title = `${product} Exporter from India | Buy Bulk ${product} | Patel Impex`;
    const description = `Patel Impex is a leading supplier and exporter of ${product} from India. Best quality ${product} at competitive prices for global markets.`;
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return `import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Star, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ${pageName} = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <link rel="canonical" href="https://patelimpex.com${urlPath}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
         <meta property="og:image" content="${randomImage}" />
      </Helmet>
      <Navigation />
      <div className="pt-32 pb-20 bg-green-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Indian <span className="text-yellow-400">${product}</span> Export</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">World-class quality ${product} sourced from best farms</p>
      </div>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Why Our ${product}?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Natural & Pure</h3>
                <p className="text-slate-600">Cultivated without harmful chemicals.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Premium Grade</h3>
                <p className="text-slate-600">Sorted and graded for best quality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Award className="w-12 h-12 text-blue-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Certified</h3>
                <p className="text-slate-600">Meets international export standards.</p>
            </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default ${pageName};`;
}

processFiles();
