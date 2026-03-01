import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Globe, Package, Truck, Award, ShieldCheck, ArrowRight, BarChart } from 'lucide-react';
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

const templates = [
    {
        heroTitle: (intentPref: string, product: string, intentSuff: string, loc: string) => `${intentPref} Premium ${product} ${intentSuff} ${loc}`,
        heroDesc: (product: string, loc: string) => `Looking for standard, high-quality ${product} to skyrocket your supply chain in ${loc}? Patel Impex is an authoritative global leader bridging Indian agricultural and industrial excellence to your borders.`,
        feature1: (product: string) => `Pristine ${product} Sourcing`,
        feature2: (loc: string) => `Streamlined Logistics to ${loc}`,
    },
    {
        heroTitle: (intentPref: string, product: string, intentSuff: string, loc: string) => `${intentPref} Top-Tier ${product} ${intentSuff} ${loc}`,
        heroDesc: (product: string, loc: string) => `Elevate your market presence in ${loc} with our A-grade ${product}. Sourced responsibly, shipped rapidly, and delivered with unparalleled reliability by Patel Impex.`,
        feature1: (product: string) => `Certified ${product} Standards`,
        feature2: (loc: string) => `Custom Clearances for ${loc}`,
    },
    {
        heroTitle: (intentPref: string, product: string, intentSuff: string, loc: string) => `${intentPref} Reliable ${product} ${intentSuff} ${loc}`,
        heroDesc: (product: string, loc: string) => `Securing volume shipments of ${product} for the ${loc} market requires a trusted partner. We ensure scale, competitive pricing, and sustained quality for your enterprise.`,
        feature1: (product: string) => `High-Volume ${product} Capacity`,
        feature2: (loc: string) => `Optimized Routing to ${loc}`,
    },
    {
        heroTitle: (intentPref: string, product: string, intentSuff: string, loc: string) => `${intentPref} Authentic ${product} ${intentSuff} ${loc}`,
        heroDesc: (product: string, loc: string) => `From origin to destination, Patel Impex guarantees the authenticity and purity of our ${product}. Join hundreds of partners succeeding in ${loc}.`,
        feature1: (product: string) => `Traceable ${product} Origins`,
        feature2: (loc: string) => `Dedicated ${loc} Support Desk`,
    }
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

    const pageTitle = `${capitalizedPrefix} ${product.original} ${capitalizedSuffix} ${location.original} | Patel Impex`;
    const pageDescription = `Patel Impex is your #1 partner to ${intent.originalPrefix} ${product.original} ${intent.originalSuffix} ${location.original}. Enjoy competitive wholesale rates, premium sourcing, and secure global freight logistics.`;

    // Deterministic randomize based on slug
    const seed = generateSeed(slug || '');
    const tpl = templates[seed % templates.length];

    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden">
            <SEOHead
                title={pageTitle}
                description={pageDescription}
                canonicalUrl={`/seo/${slug}`}
            />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-slate-50 border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-green-100 rounded-bl-full opacity-30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-green-50 rounded-tr-full opacity-40 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 font-graduate shadow-sm">
                            <Globe className="w-4 h-4 mr-2" /> Global Trade Solutions
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tight leading-tight">
                            <span className="text-green-600">{capitalizedPrefix}</span> {product.original} <span className="text-slate-400">{capitalizedSuffix}</span> {location.original}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 font-fondamento italic leading-relaxed mb-10 max-w-3xl mx-auto">
                            {tpl.heroDesc(product.original, location.original)}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="w-full sm:w-auto nm-btn-primary rounded-xl py-4 px-8 font-bold uppercase tracking-widest text-sm inline-flex justify-center items-center group">
                                Launch Partnership <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/products" className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 hover:border-green-600 hover:text-green-600 rounded-xl py-4 px-8 font-bold uppercase tracking-widest text-sm inline-flex justify-center items-center transition-colors">
                                View Product Index
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Pillars */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Package, title: tpl.feature1(product.original), desc: `Guaranteed standards and rigid quality assurance frameworks tailored for ${product.original}.` },
                            { icon: Truck, title: tpl.feature2(location.original), desc: `Our extensive shipping networks ensure timely arrivals at your facilities in ${location.original}.` },
                            { icon: ShieldCheck, title: "Compliance & Safety", desc: "A robust compliance team mapping the intricate customs protocols spanning India to your borders." },
                            { icon: BarChart, title: "Wholesale Margin Control", desc: `Protecting your bottom line with wholesale economies of scale direct from Indian origins.` },
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-green-200 transition-all duration-300">
                                <div className="bg-white nm-convex-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                    <feat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-graduate uppercase">{feat.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Essay */}
            <section className="py-20 bg-slate-100 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-slate-200">
                    <h2 className="text-3xl font-black text-slate-900 mb-6 font-graduate uppercase">The {location.original} Trade Advantage</h2>
                    <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
                        <p>
                            Establishing a reliable supply chain for <strong>{product.original}</strong> requires navigating volatile sourcing environments, verifying supplier integrities, and overcoming logistical blockades. When you seek to <em>{intent.originalPrefix} {product.original} {intent.originalSuffix} {location.original}</em>, you need absolute certainty from departure port to arrival dock.
                        </p>
                        <p>
                            Patel Impex sits at the nexus of India's manufacturing and agricultural hubs. By choosing us as your dedicated supplier, you bypass fragmented middlemen. Operations in {location.original} thrive when input materials arrive standardized, authenticated, and scheduled effectively.
                        </p>
                        <ul>
                            <li><strong>Uncompromising {product.original} Quality:</strong> We meticulously sieve, sort, process, and package according strictly to international benchmark criteria.</li>
                            <li><strong>Transparent Documentation:</strong> Phytosanitary certificates, certificates of origin, and comprehensive laboratory reports accompany every {product.original} container dispatched to {location.original}.</li>
                            <li><strong>Market Agility:</strong> We adapt our logistics based on dynamic global conditions ensuring cost-effective fulfillment regardless of market disruptions.</li>
                        </ul>
                        <p>
                            Connect with Patel Impex today to revolutionize your procurement matrix.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DynamicMassSEO;
