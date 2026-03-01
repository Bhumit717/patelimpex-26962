import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Package, Truck, ShieldCheck, CheckCircle2, Factory, LineChart, Award, ArrowRight } from 'lucide-react';

// Use local static images for guaranteed loading
import imgRice from '@/assets/products/rice.png';
import imgCotton from '@/assets/products/raw-cotton.png';
import imgSpices from '@/assets/products/cumin-seeds.png';
import imgGroundnut from '@/assets/products/groundnut.png';
import imgPsyllium from '@/assets/products/psyllium-husk.png';
import imgDefault from '@/assets/hero-plant.png';

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
    const [image, setImage] = useState(imgDefault);

    useEffect(() => {
        if (!slug) return;

        // The slug represents the exact real longtail keyword.
        const parsedKeyword = slug.replace(/-/g, ' ');
        setKeyword(parsedKeyword);

        // Intelligent image mapping based on keywords
        if (parsedKeyword.includes('rice')) setImage(imgRice);
        else if (parsedKeyword.includes('cotton') || parsedKeyword.includes('yarn')) setImage(imgCotton);
        else if (parsedKeyword.includes('turmeric') || parsedKeyword.includes('cumin') || parsedKeyword.includes('coriander')) setImage(imgSpices);
        else if (parsedKeyword.includes('groundnut') || parsedKeyword.includes('peanut')) setImage(imgGroundnut);
        else if (parsedKeyword.includes('psyllium')) setImage(imgPsyllium);
        else setImage(imgDefault);

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
                description={`Discover premier insights and wholesale advantages for: ${keyword}. Patel Impex provides scalable export pipelines from India directly to your facilities.`}
                canonicalUrl={`/seo/${slug}`}
            />

            {/* VITAL: Main Navigation Included */}
            <Navigation />

            {/* Ensure it clears the fixed header */}
            <div className="pt-24 lg:pt-32">
                {layoutType === 0 && <ArchitectureCorporate title={capitalizedTitle} image={image} keyword={keyword} />}
                {layoutType === 1 && <ArchitectureEditorial title={capitalizedTitle} image={image} keyword={keyword} />}
                {layoutType === 2 && <ArchitectureIndustrial title={capitalizedTitle} image={image} keyword={keyword} />}
            </div>

            {/* VITAL: Main Footer Included */}
            <Footer />
        </div>
    );
}

// -------------------------------------------------------------
// Layout 0: Corporate B2B Trust Layout (Blue/Gray, Centered)
// -------------------------------------------------------------
function ArchitectureCorporate({ title, image, keyword }: { title: string, image: string, keyword: string }) {
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
                    <img src={image} alt={keyword} className="w-full h-[500px] object-cover rounded-xl shadow-2xl" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-100 pb-4">Operational Superiority</h3>
                    <p className="text-slate-600 mb-6 text-lg">
                        Finding an answer for <i>"{keyword}"</i> shouldn't be gambling on unverified suppliers. We rigorously audit and execute end-to-end supply pipelines out of India.
                    </p>
                    <ul className="space-y-4 text-sm font-semibold text-slate-700">
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Government Recognized Export House</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> APEDA & FSSAI Certified Infrastructure</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Strict Quality SOPs Deployed Pre-Shipment</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

// -------------------------------------------------------------
// Layout 1: Editorial/Magazine Style (Clean, White, Large Typography)
// -------------------------------------------------------------
function ArchitectureEditorial({ title, image, keyword }: { title: string, image: string, keyword: string }) {
    return (
        <div className="bg-[#faf8f5]">
            <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-fredericka text-slate-900 mb-6">
                        {title}
                    </h1>
                    <div className="h-1 w-24 bg-red-800 mx-auto" />
                </div>

                <div className="bg-white p-4 md:p-8 rounded-none border-4 border-slate-900 shadow-[16px_16px_0_0_rgba(15,23,42,1)] relative">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="h-full">
                            <img src={image} alt={keyword} className="w-full h-full min-h-[400px] object-cover filter contrast-125 saturate-150" />
                        </div>
                        <div className="py-8 px-4 flex flex-col justify-center">
                            <h2 className="text-3xl font-black uppercase text-slate-900 mb-4 font-graduate tracking-tighter">Your Direct Indian Node</h2>
                            <p className="font-fondamento text-xl text-slate-700 leading-relaxed italic mb-8 border-l-4 border-red-800 pl-4 bg-red-50 py-4">
                                "Searching for {keyword}? We intercept supply chain volatility by locking in raw material costs directly at the origin."
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
            </section>
        </div>
    );
}

// -------------------------------------------------------------
// Layout 2: Modern Green/Tech Industrial (Green, Left-aligned)
// -------------------------------------------------------------
function ArchitectureIndustrial({ title, image, keyword }: { title: string, image: string, keyword: string }) {
    return (
        <div className="bg-green-950 min-h-screen text-slate-200">
            <section className="relative h-[80vh] min-h-[600px] flex items-center">
                <div className="absolute inset-0 opacity-20">
                    <img src={image} alt={keyword} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12">
                    <div>
                        <Badge className="bg-green-500 text-green-950 hover:bg-green-400 py-1 px-3 uppercase tracking-widest text-xs font-bold mb-6 rounded-none">Industrial Supply Chain</Badge>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                            {title}
                        </h1>
                        <p className="text-2xl text-green-200/80 mb-10 font-light border-l-2 border-green-500 pl-6">
                            Secure your inventory through India's premier logistics and agro-commodity trading house. Unmatched throughput for {keyword}.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-white hover:bg-green-400 text-green-950 font-black py-4 px-10 uppercase text-sm tracking-widest">
                                Connect with Experts
                            </Link>
                            <Link to="/products" className="border-2 border-green-500/50 hover:border-green-400 text-white font-black py-4 px-10 uppercase text-sm tracking-widest hidden sm:inline-block">
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
        </div>
    );
}

// Simple Badge fallback for Layout 2
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return <span className={`inline-block ${className}`}>{children}</span>;
}
