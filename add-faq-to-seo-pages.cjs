const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src', 'pages', 'seo');
const files = fs.readdirSync(seoDir).filter(f => f.endsWith('.tsx'));

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const camelToSpace = (str) => {
    return str.replace(/([A-Z])/g, ' $1').trim();
}

const getFAQContent = (product, country) => {
    const faqs = [
        {
            question: `What is the minimum order quantity for ${product} export to ${country}?`,
            answer: `Our minimum order quantity for ${product} to ${country} typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the ${country} market.`
        },
        {
            question: `What documents do you provide for importing ${product} into ${country}?`,
            answer: `We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by ${country} customs authorities.`
        },
        {
            question: `What are the shipping times from India to ${country}?`,
            answer: `Transit times to ${country} typically range from ${getRandomInt(15, 45)} days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your ${product}.`
        },
        {
            question: `Can you provide customized packaging for ${product} in ${country}?`,
            answer: `Yes, we offer fully customizable packaging options for ${product}, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with ${country}'s labeling and packaging regulations.`
        }
    ];
    return faqs;
};

files.forEach((file, index) => {
    const filePath = path.join(seoDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has FAQ section
    if (content.includes('Frequently Asked Questions')) {
        // console.log(`Skipping ${file} - FAQ already exists`);
        return;
    }

    let product = "Quality Product";
    let country = "Global Markets";

    // Different naming conventions
    const standardMatch = file.match(/^(.+)Export[Tt]o(.+)Page\d+\.tsx$/);
    const marketMatch = file.match(/^(.+)MarketExport\.tsx$/);
    const serviceMatch = file.match(/^(.+)ExportServices\.tsx$/);
    const basicMatch = file.match(/^(.+)Export\.tsx$/);

    if (standardMatch) {
        product = camelToSpace(standardMatch[1]);
        country = camelToSpace(standardMatch[2]);
    } else if (marketMatch) {
        product = "Import Export Services";
        country = camelToSpace(marketMatch[1]);
    } else if (serviceMatch) {
        product = camelToSpace(serviceMatch[1]);
        country = "Global Markets";
    } else if (basicMatch) {
        product = camelToSpace(basicMatch[1]);
        country = "Global Markets";
    } else {
        console.log(`Skipping ${file} - Non-standard filename format`);
        return;
    }

    const faqs = getFAQContent(product, country);

    // 1. Construct FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const faqScriptTag = `
        <script type="application/ld+json">
          ${JSON.stringify(faqSchema)}
        </script>`;

    // Insert before closing </Helmet>
    if (content.includes('</Helmet>')) {
        content = content.replace('</Helmet>', `${faqScriptTag}\n      </Helmet>`);
    }

    // 3. Construct Visual FAQ Section
    const visualFAQ = `
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            ${faqs.map(faq => `
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">${faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">${faq.answer}</p>
            </div>`).join('')}
          </div>
        </div>
      </div>`;

    // 4. Insert Visual FAQ before Footer
    if (content.includes('<Footer />')) {
        content = content.replace('<Footer />', `${visualFAQ}\n      <Footer />`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file} with FAQ for ${product} -> ${country}`);
    } else {
        console.warn(`Could not find Footer in ${file}, skipping visual injection`);
    }

});

console.log('FAQ Injection Complete');
