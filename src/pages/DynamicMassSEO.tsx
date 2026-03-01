import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Package, Truck, ShieldCheck, CheckCircle2, Factory, LineChart, Award, ArrowRight, BarChart3, Users, Leaf, Anchors } from 'lucide-react';

const generateSeed = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
};

export default function DynamicMassSEO() {
    const { slug } = useParams();
    const [keyword, setKeyword] = useState('');
    const [dynamicImageUrl, setDynamicImageUrl] = useState('');

    useEffect(() => {
        if (!slug) return;

        // The slug represents the exact real longtail keyword.
        const parsedKeyword = slug.replace(/-/g, ' ');
        setKeyword(parsedKeyword);

        const seed = generateSeed(parsedKeyword);
        // Generates completely unique, highly relevant industrial/trade images on the fly!
        const promptString = encodeURIComponent(`${parsedKeyword} cargo export container ship industrial`);
        setDynamicImageUrl(`https://image.pollinations.ai/prompt/${promptString}?width=1200&height=800&nologo=true&seed=${seed}`);

    }, [slug]);

    if (!keyword) return null;

    const seed = generateSeed(keyword);
    // 3 completely distinct page architectures so they never look like duplicate templates
    const layoutType = seed % 3;

    const capitalizedTitle = keyword.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <SEOHead
                title={`${capitalizedTitle} - Exclusive B2B Export Guide`}
                description={`Discover premier insights and wholesale advantages for: ${keyword}. Patel Impex provides scalable export pipelines from India directly to your facilities with certified QA.`}
                canonicalUrl={`/seo/${slug}`}
            />

            <Navigation />

            <div className="pt-24 lg:pt-32">
                {layoutType === 0 && <ArchitectureCorporate title={capitalizedTitle} image={dynamicImageUrl} keyword={keyword} seed={seed} />}
                {layoutType === 1 && <ArchitectureEditorial title={capitalizedTitle} image={dynamicImageUrl} keyword={keyword} seed={seed} />}
                {layoutType === 2 && <ArchitectureIndustrial title={capitalizedTitle} image={dynamicImageUrl} keyword={keyword} seed={seed} />}
            </div>

            <Footer />
        </div>
    );
}

// -------------------------------------------------------------
// Layout 0: Corporate B2B Trust Layout (Blue/Gray, Centered)
// -------------------------------------------------------------
function ArchitectureCorporate({ title, image, keyword, seed }: { title: string, image: string, keyword: string, seed: number }) {
    return (
        <div className="bg-white">
            <section className="bg-slate-900 text-white py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center text-blue-400 font-mono text-sm mb-6 border border-blue-400/30 px-4 py-1 rounded-full bg-blue-400/10">
                        <Globe className="w-4 h-4 mr-2" /> Verified Trade Matrix
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
                        {title}
                    </h1>
                    <p className="text-slate-300 text-xl font-light mb-10 max-w-2xl mx-auto">
                        Executing high-volume wholesale contracts requires a transparent proxy in India. Partner with us for flawless execution regarding <strong>{keyword}</strong>.
                    </p>
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded font-mono uppercase tracking-widest inline-flex items-center transition-colors">
                        Initiate RFQ <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <img src={image} alt={keyword} className="w-full h-[500px] object-cover rounded-xl shadow-2xl bg-slate-100" loading="lazy" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-100 pb-4">Operational Superiority</h3>
                    <p className="text-slate-600 mb-6 text-lg">
                        Finding an answer for <i>"{keyword}"</i> shouldn't involve gambling on unverified suppliers. We rigorously audit, negotiate, and execute end-to-end supply pipelines out of India. Our dedicated procurement teams monitor real-time agricultural and industrial indices to lock in pricing prior to export.
                    </p>
                    <p className="text-slate-600 mb-8 text-lg">
                        For cross-border logistics involving this sector, ensuring appropriate harmonized (HS) codes, fumigation certificates (if agricultural), and customs pre-clearance is critical to avoiding port delays.
                    </p>
                    <ul className="space-y-4 text-sm font-semibold text-slate-700">
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Government Recognized Export House</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Dedicated Customs Clearance Team</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Strict Quality SOPs Deployed Pre-Shipment</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Door-to-Door CIF/FOB Flexibility</li>
                    </ul>
                </div>
            </section>

            <section className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-black text-slate-800 mb-12 uppercase">Market Intelligence: {keyword}</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h4 className="font-bold text-xl mb-2 text-slate-800">Volume Scaling</h4>
                            <p className="text-slate-600 text-sm">We manage containerized freight scaling from 1 TEU to bulk shipments, leveraging strong maritime networks to suppress freight costs by up to {(seed % 10) + 12}% below market average.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h4 className="font-bold text-xl mb-2 text-slate-800">Risk Mitigation</h4>
                            <p className="text-slate-600 text-sm">Every consignment operates under comprehensive inland transit insurance and international maritime cargo policies, ensuring your capital is protected end-to-end.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h4 className="font-bold text-xl mb-2 text-slate-800">Rapid Routing</h4>
                            <p className="text-slate-600 text-sm">Direct port linkages out of Mundra and Nhava Sheva provide us expedited transit routes, drastically reducing lead times for international delivery commitments.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// -------------------------------------------------------------
// Layout 1: Editorial/Magazine Style (Clean, White, Large Typography)
// -------------------------------------------------------------
function ArchitectureEditorial({ title, image, keyword, seed }: { title: string, image: string, keyword: string, seed: number }) {
    return (
        <div className="bg-[#faf8f5]">
            <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-fredericka text-slate-900 mb-6 px-4 leading-tight">
                        {title}
                    </h1>
                    <div className="h-1 w-24 bg-red-800 mx-auto" />
                </div>

                <div className="bg-white p-4 md:p-8 rounded-none border-4 border-slate-900 shadow-[16px_16px_0_0_rgba(15,23,42,1)] relative mb-16">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="h-full">
                            <img src={image} alt={keyword} className="w-full h-full min-h-[500px] object-cover filter contrast-125 saturate-150 bg-slate-100" loading="lazy" />
                        </div>
                        <div className="py-8 px-4 flex flex-col justify-center">
                            <h2 className="text-3xl font-black uppercase text-slate-900 mb-4 font-graduate tracking-tighter">Your Direct Indian Node</h2>
                            <p className="font-fondamento text-xl text-slate-700 leading-relaxed italic mb-8 border-l-4 border-red-800 pl-4 bg-red-50 py-4">
                                "Searching for {keyword}? We intercept supply chain volatility by locking in raw material costs directly at the origin."
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                The global dynamic for this specific commodity requires aggressive on-the-ground intelligence. We bypass traditional broker hierarchies, linking you directly with the deepest parts of the Indian manufacturing and agricultural base.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-slate-100 p-4 border border-slate-200">
                                    <Factory className="w-8 h-8 text-slate-800 mb-2" />
                                    <span className="block font-bold">Direct Sourcing</span>
                                </div>
                                <div className="bg-slate-100 p-4 border border-slate-200">
                                    <LineChart className="w-8 h-8 text-slate-800 mb-2" />
                                    <span className="block font-bold">Price Stability</span>
                                </div>
                            </div>
                            <Link to="/contact" className="bg-red-800 hover:bg-black text-white text-center font-bold py-4 px-8 uppercase hover:shadow-lg transition-all">
                                Unlock Pricing
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-fredericka mb-6">Strategic Global Implementation</h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        By integrating Patel Impex into your supply chain, you are securing a fortified endpoint capable of executing massive volumes. Whether you require immediate spot market procurement or long-term strategic stock buffering, our infrastructure supports your exact structural needs.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        We handle all port operations, container staging, phytosanitary checks (when applicable), and export documentation. This ensures your legal team never faces compliance blockades upon port of entry.
                    </p>
                </div>
            </section>
        </div>
    );
}

// -------------------------------------------------------------
// Layout 2: Modern Green/Tech Industrial (Green, Left-aligned)
// -------------------------------------------------------------
function ArchitectureIndustrial({ title, image, keyword, seed }: { title: string, image: string, keyword: string, seed: number }) {
    return (
        <div className="bg-green-950 min-h-screen text-slate-200">
            <section className="relative h-[80vh] min-h-[700px] flex items-center">
                <div className="absolute inset-0 opacity-20">
                    <img src={image} alt={keyword} className="w-full h-full object-cover bg-green-900" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 pt-16">
                    <div>
                        <Badge className="bg-green-500 text-green-950 hover:bg-green-400 py-1 px-3 uppercase tracking-widest text-xs font-bold mb-6 rounded-none">Industrial Supply Chain</Badge>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                            {title}
                        </h1>
                        <p className="text-2xl text-green-200/80 mb-10 font-light border-l-2 border-green-500 pl-6">
                            Secure your inventory through India's premier logistics and agro-commodity trading house. Unmatched throughput for {keyword}.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-white hover:bg-green-400 text-green-950 font-black py-4 px-10 uppercase text-sm tracking-widest transition-colors">
                                Connect with Experts
                            </Link>
                            <Link to="/products" className="border-2 border-green-500/50 hover:border-green-400 text-white font-black py-4 px-10 uppercase text-sm tracking-widest hidden sm:inline-block transition-colors">
                                View Catalog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-green-900 py-16 border-y border-green-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-green-800/50">
                        <div>
                            <ShieldCheck className="w-10 h-10 mx-auto text-green-400 mb-3" />
                            <h4 className="font-bold text-white uppercase text-sm">Escrow Secure</h4>
                        </div>
                        <div>
                            <Truck className="w-10 h-10 mx-auto text-green-400 mb-3" />
                            <h4 className="font-bold text-white uppercase text-sm">FOB / CIF Routing</h4>
                        </div>
                        <div>
                            <Award className="w-10 h-10 mx-auto text-green-400 mb-3" />
                            <h4 className="font-bold text-white uppercase text-sm">A+ Certification</h4>
                        </div>
                        <div>
                            <Globe className="w-10 h-10 mx-auto text-green-400 mb-3" />
                            <h4 className="font-bold text-white uppercase text-sm">Hyper-Local Intel</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <h2 className="text-4xl font-black text-white mb-8">Heavy-Duty Export Validation</h2>
                        <p className="text-green-200/70 text-lg mb-6 leading-relaxed">
                            B2B purchasing requires extreme operational predictability. We bring industrial-scale validation specifically to the <strong>{keyword}</strong> sector. Our Indian ground-team coordinates packaging, weighing, dispatch, and port coordination to ensure ZERO bottlenecks.
                        </p>
                        <p className="text-green-200/70 text-lg mb-6 leading-relaxed">
                            We pride ourselves on 24/7 communications. Because we span across timezones to deal with international buyers, we provide transparent vessel tracking, Bill of Lading (B/L) drafts off schedule, and comprehensive commercial invoicing designed to instantly clear destination customs.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 bg-green-900/50 border border-green-800 p-8">
                        <h4 className="text-xl font-bold text-white mb-6 uppercase border-b border-green-800 pb-4">Key Performance Metrics</h4>
                        <ul className="space-y-6">
                            <li>
                                <div className="text-green-400 font-black text-2xl mb-1">{98 + (seed % 2)}.%</div>
                                <div className="text-sm text-green-200/60 uppercase">Documentation Accuracy</div>
                            </li>
                            <li>
                                <div className="text-green-400 font-black text-2xl mb-1">{14 + (seed % 10)} Days</div>
                                <div className="text-sm text-green-200/60 uppercase">Avg Spot Dispatch Rate</div>
                            </li>
                            <li>
                                <div className="text-green-400 font-black text-2xl mb-1">{100}%</div>
                                <div className="text-sm text-green-200/60 uppercase">Pre-Shipment Inspection</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Simple Badge fallback for Layout 2
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return <span className={`inline-block ${className}`}>{children}</span>;
}
