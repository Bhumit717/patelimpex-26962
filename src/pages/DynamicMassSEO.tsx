import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Globe, Package, Truck, Award, ShieldCheck, ArrowRight, BarChart, CheckCircle2, Factory, LineChart } from 'lucide-react';
import dict from '../data/seoDictionary.json';

const generateSeed = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return Math.abs(hash);
};

const themes = [
    {
        bg: 'bg-slate-50',
        primaryText: 'text-green-600',
        secondaryBg: 'bg-green-100',
        secondaryText: 'text-green-800',
        button: 'bg-green-600 text-white hover:bg-green-700 shadow-md',
        font: 'font-graduate',
        rounded: 'rounded-2xl',
        card: 'border-slate-100 shadow-sm',
        footerBase: 'bg-slate-900',
        footerText: 'text-slate-400'
    },
    {
        bg: 'bg-blue-50',
        primaryText: 'text-blue-700',
        secondaryBg: 'bg-blue-200',
        secondaryText: 'text-blue-900',
        button: 'bg-blue-700 text-white hover:bg-blue-800 shadow-xl rounded-full',
        font: 'font-sans font-black tracking-tight',
        rounded: 'rounded-full',
        card: 'border-blue-100 shadow-lg',
        footerBase: 'bg-blue-950',
        footerText: 'text-blue-200'
    },
    {
        bg: 'bg-amber-50',
        primaryText: 'text-amber-600',
        secondaryBg: 'bg-amber-100',
        secondaryText: 'text-amber-800',
        button: 'bg-amber-600 text-white hover:bg-amber-700 shadow-none border-b-4 border-amber-800',
        font: 'font-serif italic',
        rounded: 'rounded-none',
        card: 'border-amber-200 shadow-none border-2',
        footerBase: 'bg-stone-900',
        footerText: 'text-stone-300'
    },
    {
        bg: 'bg-zinc-100',
        primaryText: 'text-black',
        secondaryBg: 'bg-zinc-300',
        secondaryText: 'text-zinc-900',
        button: 'bg-black text-white hover:bg-zinc-800 rounded-sm border-2 border-black',
        font: 'font-mono uppercase tracking-widest',
        rounded: 'rounded-sm',
        card: 'border-black shadow-none border-2',
        footerBase: 'bg-black',
        footerText: 'text-zinc-500'
    },
    {
        bg: 'bg-indigo-50',
        primaryText: 'text-indigo-600',
        secondaryBg: 'bg-indigo-100',
        secondaryText: 'text-indigo-800',
        button: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition-transform shadow-indigo-200/50 shadow-xl',
        font: 'font-fondamento',
        rounded: 'rounded-3xl',
        card: 'border-indigo-100 shadow-2xl bg-white/50 backdrop-blur',
        footerBase: 'bg-indigo-950',
        footerText: 'text-indigo-300'
    }
];

import img1 from '@/assets/hero-main.png';
import img2 from '@/assets/hero-plant.png';
import img3 from '@/assets/products/rice.png';
import img4 from '@/assets/products/cotton.png';
import img5 from '@/assets/patel_impex_plaque.png';

const images = [img1, img2, img3, img4, img5];

const contentEssays = [
    (product: string, location: string, intent: any) => `Establishing a reliable supply chain for ${product} requires navigating volatile sourcing environments, verifying supplier integrities, and overcoming logistical blockades. When you seek to ${intent.originalPrefix} ${product} ${intent.originalSuffix} ${location}, you need absolute certainty from departure port to arrival dock. Patel Impex sits at the nexus of India's manufacturing and agricultural hubs. By choosing us as your dedicated supplier, you bypass fragmented middlemen.`,
    (product: string, location: string, intent: any) => `The global market for ${product} is expanding rapidly in ${location}. Businesses looking to ${intent.originalPrefix} ${product} ${intent.originalSuffix} ${location} face intense competition and supply unreliability. Patel Impex offers a formidable advantage: secure sourcing pipelines directly originating from top-tier facilities in India. Let us eliminate your procurement bottlenecks.`,
    (product: string, location: string, intent: any) => `Scaling your enterprise in ${location} depends entirely on input reliability. With Patel Impex handling your requirement to ${intent.originalPrefix} ${product} ${intent.originalSuffix} ${location}, your supply chain becomes bulletproof. We enforce meticulous grading, secure cargo transits, and transparent pricing models that protect your bottom-line profitability.`,
    (product: string, location: string, intent: any) => `Disruptions in international trade can heavily impact your business in ${location}. That's why top buyers trust Patel Impex as exactly what they are looking for: a strategic partner to ${intent.originalPrefix} ${product} ${intent.originalSuffix} ${location}. From initial sampling to bulk container roll-outs, our dedicated account managers oversee every micro-step of your freight.`
];

const DynamicMassSEO = () => {
    const { slug } = useParams();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (!slug) return;

        // Parse slug
        let matchedIntent = null;
        let fallback = false;

        for (const i of dict.intents) {
            if (slug.startsWith(i.prefix + '-') && slug.includes('-' + i.suffix + '-')) {
                matchedIntent = i;
                break;
            }
        }

        let matchedProduct = null;
        for (const p of dict.products) {
            if (matchedIntent && slug.includes(`${matchedIntent.prefix}-${p.slug}-${matchedIntent.suffix}`)) {
                matchedProduct = p;
                break;
            }
        }

        let matchedLocation = null;
        for (const l of dict.locations) {
            if (slug.endsWith(`-${l.slug}`)) {
                matchedLocation = l;
                break;
            }
        }

        if (matchedIntent && matchedProduct && matchedLocation) {
            setData({ intent: matchedIntent, product: matchedProduct, location: matchedLocation });
        } else {
            setData({ fallback: true });
        }
    }, [slug]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
            </div>
        );
    }

    if (data.fallback) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8 bg-slate-50">
                <div className="text-center max-w-md">
                    <h1 className="text-3xl font-bold font-graduate mb-4 text-slate-900">Market Guide Not Found</h1>
                    <p className="text-slate-600 mb-8">We could not locate the specific trading portal you were looking for. However, Patel Impex ships globally.</p>
                    <Link to="/" className="nm-btn-primary rounded-xl py-3 px-6 font-bold uppercase tracking-widest text-sm inline-flex items-center">
                        Go to Homepage <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        );
    }

    const { intent, product, location } = data;
    const capitalizedPrefix = intent.originalPrefix.split(" ").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const capitalizedSuffix = intent.originalSuffix.split(" ").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

    const pageTitle = `${capitalizedPrefix} ${product.original} ${capitalizedSuffix} ${location.original} | B2B Guide`;
    const pageDescription = `Patel Impex is your ideal partner to ${intent.originalPrefix} ${product.original} ${intent.originalSuffix} ${location.original}. Enjoy competitive wholesale rates, premium sourcing, and secure global freight.`;

    // Deterministic randomizations based on slug
    const seed = generateSeed(slug || '');
    const theme = themes[seed % themes.length];
    const layoutStyle = seed % 3; // 0: Centered, 1: Left-aligned Split, 2: Right-aligned Split
    const heroImage = images[seed % images.length];
    const essay = contentEssays[seed % contentEssays.length];

    // Helper arrays for internal link networking
    const randomLinks = [
        { title: "Export Guide", url: "/more/export-import-guide" },
        { title: "Browse Products", url: "/products" },
        { title: "Trade Finance", url: "/more/trade-finance" },
        { title: "Quality Standards", url: "/more/quality-standards" },
        { title: "Global Logistics", url: "/more/sea-freight" },
        { title: "About Us", url: "/about" },
        { title: "More Knowledge Base", url: "/more" },
        { title: "All SEO Profiles", url: "/seo" }
    ];

    // Select 4 pseudo-random related links
    const relatedLinks = [];
    for (let i = 0; i < 4; i++) {
        relatedLinks.push(randomLinks[(seed + i) % randomLinks.length]);
    }

    return (
        <div className={`min-h-screen ${theme.bg} overflow-hidden font-sans pt-20`}>
            <SEOHead
                title={pageTitle}
                description={pageDescription}
                canonicalUrl={`/seo/${slug}`}
            />

            {/* Hero Section */}
            <section className={`relative py-20 lg:py-32 overflow-hidden border-b border-black/5`}>
                {/* Dynamic Background Overlays */}
                <div className={`absolute top-0 right-0 w-[60vw] h-[60vh] ${theme.secondaryBg} rounded-bl-full opacity-60 pointer-events-none mix-blend-multiply`} />

                <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">

                    <div className={`flex-1 ${layoutStyle === 0 ? 'text-center mx-auto max-w-4xl' : (layoutStyle === 1 ? 'text-left lg:order-first' : 'text-left lg:order-last')}`}>
                        <div className={`inline-flex items-center ${theme.secondaryBg} ${theme.secondaryText} px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 ${theme.font} shadow-sm`}>
                            <Globe className="w-4 h-4 mr-2" /> Authorized B2B Network
                        </div>

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-8 ${theme.font} uppercase leading-tight`}>
                            <span className={theme.primaryText}>{capitalizedPrefix}</span> {product.original} <br />
                            <span className="text-slate-400 text-3xl md:text-5xl">{capitalizedSuffix}</span> {location.original}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-10 opacity-90">
                            Securing reliable volume shipments of <strong>{product.original}</strong> to <strong>{location.original}</strong> requires a vetted partner. Patel Impex ensures scale, aggressive pricing, and sustained perfection.
                        </p>

                        <div className={`flex flex-col sm:flex-row items-center gap-4 ${layoutStyle === 0 ? 'justify-center' : 'justify-start'}`}>
                            <Link to="/contact" className={`w-full sm:w-auto px-8 py-4 font-bold uppercase text-sm inline-flex justify-center items-center transition-all ${theme.button}`}>
                                Request Wholesale Quote <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link to="/products" className={`w-full sm:w-auto px-8 py-4 font-bold uppercase text-sm inline-flex justify-center items-center transition-all bg-white text-slate-800 border-2 border-slate-300 hover:border-slate-800 ${theme.rounded}`}>
                                Explore Full Catalog
                            </Link>
                        </div>
                    </div>

                    {layoutStyle !== 0 && (
                        <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none">
                            <div className={`relative ${theme.rounded} overflow-hidden shadow-2xl`}>
                                <img src={heroImage} alt={`${product.original} Trade`} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none flex flex-col justify-end p-8">
                                    <div className="flex items-center text-white/90">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" /> 100% Export Ready
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Internal Linking & Dynamic Info Row */}
            <section className="bg-white py-6 border-b border-slate-200">
                <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    {relatedLinks.map((link, idx) => (
                        <Link key={idx} to={link.url} className="hover:text-black transition-colors flex items-center">
                            {link.title} <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Factory, title: `Pristine ${product.original} Manufacturing`, desc: `Every batch is meticulously analyzed to meet strictly the highest benchmark standards before leaving Indian ports.` },
                            { icon: Truck, title: `Logistics specifically to ${location.original}`, desc: `Our routing intelligence prevents costly demurrage. We clear customs and hit your exact fulfillment windows.` },
                            { icon: ShieldCheck, title: "Zero-Risk Protocol", desc: "Escrow structures, letter of credit facilitation, and comprehensive marine insurance to eliminate your wholesale risk." },
                            { icon: LineChart, title: "Real-time Tracking", desc: "Gain total visibility on your containers as they transit the world's oceans directly to your distribution center." },
                            { icon: Award, title: "Global Certifications", desc: "FSSAI, ISO, APEDA, and country-specific required documentation are bundled precisely within your invoice package." },
                            { icon: Package, title: "Custom Packaging", desc: `From 25kg PP bags for agriculture to industrial pallets, we package ${product.original} according to your retail or bulk needs.` }
                        ].map((feat, idx) => (
                            <div key={idx} className={`bg-white p-10 ${theme.rounded} ${theme.card} relative overflow-hidden group`}>
                                <div className={`absolute top-0 right-0 w-32 h-32 ${theme.secondaryBg} rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 ease-in-out duration-700`} />
                                <div className={`relative z-10 w-16 h-16 ${theme.bg} rounded-full flex items-center justify-center mb-8 ${theme.primaryText}`}>
                                    <feat.icon className="w-8 h-8" />
                                </div>
                                <h3 className={`text-2xl font-bold text-slate-900 mb-4 ${theme.font}`}>{feat.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-base relative z-10">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Essay */}
            <section className="py-24 bg-white/50 backdrop-blur-md">
                <div className={`container mx-auto px-4 max-w-4xl bg-white p-10 md:p-16 ${theme.rounded} shadow-2xl border border-black/5`}>
                    <h2 className={`text-3xl lg:text-4xl font-black text-slate-900 mb-8 ${theme.font} uppercase`}>
                        The Strategic Advantage in {location.original}
                    </h2>
                    <div className="prose prose-lg prose-slate text-slate-700 max-w-none leading-loose">
                        <p className="text-xl font-medium mb-6 text-slate-800">
                            {essay(product.original, location.original, intent)}
                        </p>
                        <p>
                            Sourcing on the global stage is fraught with miscommunications, sub-standard deliveries, and severe regulatory hurdles. Why risk your brand reputation in <strong>{location.original}</strong>? Patel Impex acts as your outsourced procurement arm in India. We do the heavy lifting regarding multi-point quality inspections.
                        </p>
                        <div className={`my-10 p-8 ${theme.secondaryBg} ${theme.rounded} border-l-8 border-slate-900`}>
                            <h4 className={`text-xl font-bold text-slate-900 mb-4 ${theme.font}`}>Core Deliverables:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-6 h-6 mr-3 ${theme.primaryText} flex-shrink-0 mt-1`} />
                                    <span><strong>Uncompromising {product.original} Quality:</strong> Strictly sorted and graded by industry experts.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-6 h-6 mr-3 ${theme.primaryText} flex-shrink-0 mt-1`} />
                                    <span><strong>Transparent Documentation:</strong> Certificates of origin, phytosanitary reports, and SGS inspection availability.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-6 h-6 mr-3 ${theme.primaryText} flex-shrink-0 mt-1`} />
                                    <span><strong>Market Agility:</strong> Rapid adaptation to shifting freight dynamics to guarantee the best CIF/FOB rates.</span>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Stop guessing. Start growing. Connect with Patel Impex today to revolutionize your procurement matrix. Give your business the competitive edge it truly deserves.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                        <Link to="/inquiry" className={`px-10 py-5 text-lg font-bold uppercase transition-all inline-block ${theme.button}`}>
                            Submit a Bulk Inquiry Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dynamic SEO Footer */}
            <footer className={`${theme.footerBase} ${theme.footerText} py-16 text-center`}>
                <div className="container mx-auto px-4 max-w-3xl">
                    <h4 className={`text-white text-2xl mb-6 ${theme.font}`}>Explore Patel Impex</h4>
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                        <Link to="/products" className="hover:text-white transition-colors">Complete Assortment</Link>
                        <Link to="/services" className="hover:text-white transition-colors">Export Services</Link>
                        <Link to="/more/export-import-guide" className="hover:text-white transition-colors">Trade Guidelines</Link>
                        <Link to="/seo" className="hover:text-white transition-colors">Global Connectivity</Link>
                    </div>
                    <p className="opacity-60 text-sm">
                        This intelligence page detailing the procurement of {product.original} for {location.original} is generated dynamically by Patel Impex's Market Network. © 2026 Patel Impex. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default DynamicMassSEO;
