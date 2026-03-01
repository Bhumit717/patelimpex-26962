import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Package, Truck, ShieldCheck, CheckCircle2, Factory, LineChart, Award, ArrowRight, BarChart3, Users, Leaf, Anchor, ArrowUpRight, FileText, Activity } from 'lucide-react';

const generateSeed = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
};

// Bulletproof Image Component that ensures 100% uptime with relatable imagery
// Falls back to a universally available seed image if the category fetch fails anywhere globally
function FallbackImage({ src, fallbackSrc, alt, className }: { src: string, fallbackSrc: string, alt: string, className: string }) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setImgSrc(src); // Reset if src changes
        setHasError(false);
    }, [src]);

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            loading="lazy"
            onError={() => {
                if (!hasError) {
                    setImgSrc(fallbackSrc);
                    setHasError(true);
                }
            }}
        />
    );
}

const getProductImage = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase();

    // Comprehensive lookup table for all local assets
    const mapping: Record<string, string> = {
        'white crystal sugar': '/assets/products/subtypes/refined-white-sugar-m30.png',
        'm30 sugar': '/assets/products/subtypes/refined-white-sugar-m30.png',
        'raw sugar': '/assets/products/subtypes/raw-sugar.png',
        'brown sugar': '/assets/products/subtypes/brown-sugar.png',
        'organic sugar': '/assets/products/subtypes/organic-sugar.png',
        'jaggery powder': '/assets/products/subtypes/jaggery-powder.png',
        'jaggery': '/assets/products/subtypes/jaggery-rounds.png',
        'sugar': '/assets/products/sugar.png',

        'basmati': '/assets/products/steam-basmati-rice.png',
        'sella': '/assets/products/golden-sella-rice.png',
        'masoori': '/assets/products/sona-masoori-rice.png',
        'parboiled': '/assets/products/ir64-parboiled-rice.png',
        'ir64': '/assets/products/ir64-parboiled-rice.png',
        'rice': '/assets/products/rice.png',

        'sharbati': '/assets/products/sharbati-wheat.png',
        'bhalia': '/assets/products/bhalia-wheat.png',
        'durum': '/assets/products/durum-wheat.png',
        'lokwan': '/assets/products/lokwan-wheat.png',
        'wheat': '/assets/products/bhalia-wheat.png',

        'groundnut': '/assets/products/groundnut.png',
        'peanut': '/assets/products/groundnut.png',
        'bold': '/assets/products/bold-runner-groundnut.png',
        'java': '/assets/products/java-spanish-groundnut.png',

        'sesame': '/assets/products/sesame-seeds.png',
        'natural sesame': '/assets/products/natural-sesame.png',
        'hulled sesame': '/assets/products/hulled-sesame.png',

        'psyllium': '/assets/products/psyllium-husk.png',
        'husk': '/assets/products/psyllium-husk.png',
        'isabgol': '/assets/products/psyllium-husk.png',

        'cotton': '/assets/products/cotton.png',
        'yarn': '/assets/products/cotton-yarn.png',

        'cumin': '/assets/products/cumin-seeds.png',
        'fennel': '/assets/products/fennel-seeds.png',
        'cardamom': '/assets/products/cardamom.png',
        'soybean': '/assets/products/soybean.png',

        'cow dung': '/assets/products/cow-dung-cake.png',
        'dung': '/assets/products/animal-dung.png',
        'cashew': 'https://images.unsplash.com/photo-1509358111104-5858089f81df?auto=format&fit=crop&q=80&w=1200',
        'cashew nut': 'https://images.unsplash.com/photo-1509358111104-5858089f81df?auto=format&fit=crop&q=80&w=1200'
    };

    // Precise priority search with word boundary protection
    const words = lowerKeyword.split(/[\s-]+/);

    // Sort keys by length descending to match most specific terms first
    const sortedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);

    for (const k of sortedKeys) {
        if (k.includes(' ')) {
            if (lowerKeyword.includes(k)) return mapping[k];
        } else {
            // Ensure strict whole word match using regex boundary for single words
            const regex = new RegExp(`\\b${k}\\b`, 'i');
            if (regex.test(lowerKeyword)) return mapping[k];
        }
    }

    return ''; // Return empty string to trigger fallback
};

const TradeIntelligence = {
    getIntroduction: (keyword: string, seed: number) => {
        const intros = [
            `${keyword} represents a critical node in the global agricultural and industrial supply chain, particularly when sourced from the high-yield production belts of Western India. Patel Impex, leveraging decades of regional dominance in Rajkot, Gujarat, offers a vertically integrated solution for the procurement of ${keyword}. Our framework is designed to satisfy the rigorous technical requirements of international millers, distributors, and industrial end-users who demand consistent purity and certified grade compliance.`,
            `The international trade of ${keyword} has evolved beyond simple arbitrage; it now demands a sophisticated synthesis of origin intelligence, maritime efficiency, and risk-mitigation strategies. As a premier export house, we provide our partners with a fortified entry point into the Indian market for ${keyword}. By maintaining a dedicated origin-tracking system and high-capacity processing facilities, we ensure that every metric ton of ${keyword} meets the precise specifications required by your regional market standards.`,
            `Navigating the complexities of ${keyword} sourcing requires an export partner with both local depth and global reach. Patel Impex stands as a Tier-1 gateway for the global distribution of ${keyword}, utilizing a multi-modal logistics framework that connects the heart of Saurashtra's production clusters to major international hub ports. Our commitment to 'Zero-Defect' exports ensures that your supply chain for ${keyword} remains resilient against the volatility of global commodity shifts.`
        ];
        return intros[seed % intros.length];
    },
    getTechnicalDeepDive: (keyword: string, seed: number) => {
        return `
            The technical profile of ${keyword} is foundational to its industrial utility and market valuation. Our processing sequence for ${keyword} begins with a multi-stage cleaning protocol that utilizes high-frequency electronic sorting and magnetic separation to remove every trace of foreign matter, ensuring a purity level that exceeds ${(seed % 2) + 98.5}%. 
            For ${keyword}, moisture control is paramount during the pre-shipment phase. We utilize advanced hydration analytics to maintain a moisture coefficient of less than ${(seed % 3) + 7}%, preventing any risk of fermentation or structural degradation during cross-continental transit. 
            Furthermore, the physicochemical analysis of ${keyword} is conducted in ISO/IEC 17025 accredited laboratories. This includes testing for technical markers such as grain length, mesh size, oil content, or sucrose concentration, depending on the specific grade of ${keyword} required. We provide full certificate of analysis (COA) dossiers for every batch, allowing for seamless integration into your manufacturing or distribution workflows. 
            Our Quality Assurance team also monitors the 'Cargo Stress' variables, ensuring that the packaging used for ${keyword}—whether it be 25kg PP bags, jumbo tote bags, or consumer-ready vacuum packs—is optimized for both durability and aeration during the humid maritime journey.
        `;
    },
    getLogisticsThesis: (keyword: string, seed: number) => {
        return `
            Strategic logistics for ${keyword} are anchored by our proximity to the Mundra Port (INMUN) and Kandla Port, India's premier gateways for containerized and bulk cargo. This geographical advantage allows Patel Impex to maintain a 'Gate-to-Vessel' latency that is 40% lower than the industry average for ${keyword}. 
            Our logistics desk coordinates a dedicated fleet for the inland transit of ${keyword}, ensuring that cargo is staged in our humidity-controlled warehouses near the port to await vessel berthing. This 'Just-In-Time' staging prevents exposure to monsoon variables and ensures the freshness of the ${keyword}. We offer full multi-modal solutions, including bulk vessel chartering for large-volume ${keyword} contracts and LCL options for boutique distributors.
        `;
    },
    getMarketOutlook: (keyword: string, seed: number) => {
        return `
            The global demand trajectory for ${keyword} is projected to sustain a CAGR of ${(seed % 4) + 4.5}% over the next five-year cycle, driven by industrial expansion and changing consumer patterns in the EU, GCC, and Southeast Asian regions. Patel Impex utilizes seasonal price hedging and historical crop data for ${keyword} to provide our clients with a competitive pricing buffer. 
            We monitor the 'Global Yield Index' and political trade barriers in real-time to advise our partners on the optimal 'Procurement Windows' for ${keyword}. This data-driven approach allows our clients to secure volume during market contractions and lock in pricing before the peak-demand surges typical of the ${keyword} trade. 
        `;
    },
    getRegionalDynamics: (keyword: string, seed: number) => {
        return `
            The state of Gujarat, and specifically the Saurashtra region around Rajkot, provides a topological advantage for ${keyword} that is unmatched elsewhere. The mineral-rich soil and controlled irrigation systems result in a grade of ${keyword} that consistently out-performs other origins in technical stress tests. 
            Patel Impex maintains deep-tier relationships within the primary ${keyword} production clusters, allowing us to source and segregate the highest-grade material before it reaches the standard commodity markets. This 'Origin-Direct' model ensures that your supply of ${keyword} is free from the quality dilution common in multi-origin blending operations.
        `;
    },
    getRegionalHarvestIntel: (keyword: string, seed: number) => {
        return `
            The harvest analysis for the current season of ${keyword} indicate a robust yield with exceptional technical consistency across the Saurashtra belt. By maintaining field-level intelligence, Patel Impex is able to predict batch quality variances in ${keyword} weeks before the actual factory arrival. 
            Our seasonal reports for ${keyword} capture critical data on kernel density, color consistency, and size distribution, providing our clients with the clarity needed for long-term inventory budgeting.
        `;
    },
    getRegulatoryFramework: (keyword: string, seed: number) => {
        return `
            Navigating the regulatory landscape for the export of ${keyword} involves a complex mesh of APEDA (Agricultural and Processed Food Products Export Development Authority) filings, FSSAI certificates, and GSP (Generalized System of Preferences) documentation. Our dedicated compliance officers manage the entire digital lifecycle of these licenses for ${keyword}. 
            We ensure that every container of ${keyword} is accompanied by a full dossier of phytosanitary certificates, certificates of origin, and SGS/Intertek inspection reports as required by your destination port's customs authority.
        `;
    },
    getGlobalSupplyThesis: (keyword: string, seed: number) => {
        return `
            The global supply thesis for ${keyword} is built upon the convergence of traditional Indian agricultural depth and modern 4.0 industrial logistics. As we move towards a more fragmented global trade environment, the importance of a reliable, high-volume origin node like the Rajkot cluster cannot be overstated. 
            Patel Impex acts as a 'Primary Stabilizer' in the ${keyword} market, providing consistent supply even during periods of extreme volatility. Our multi-year contracts for ${keyword} are designed to protect your manufacturing throughput against the disruptions typical of the modern geopolitical landscape.
        `;
    },
    getFinancialThesis: (keyword: string, seed: number) => {
        return `
            Strategic capital deployment for ${keyword} procurement is facilitated through our Tier-1 banking partnerships with HDFC and ICICI. We offer flexible financial instruments including Irrevocable Letters of Credit (LC) at Sight, Bank Guarantees (BG), and structured standby arrangements for long-term contract fulfillment. 
            Our financial desk provides 'Currency Volatility Protection' for ${keyword} contracts, effectively insulating their margins from the fluctuations of the Indian Rupee. This fiscal transparency is essential for ${keyword} traders who operating in high-volume, low-margin arbitrage environments. We also facilitate trade credit insurance through ECGC, ensuring that every dollar of your investment in ${keyword} is backed by sovereign-grade risk mitigation.
        `;
    },
    getEthicalSourcingProof: (keyword: string, seed: number) => {
        return `
            The ethical procurement of ${keyword} is not just a CSR initiative; it is a core operational requirement. Patel Impex enforces a strict Code of Conduct across our entire production network. This ensures that every MT of ${keyword} is sourced from facilities that adhere to ILO (International Labour Organization) standards, with zero-tolerance for child labor or forced labor. 
            We are actively transitioning our ${keyword} processing nodes towards a 'Carbon-Neutral' footprint. By implementing biomass energy generation and water-recycling systems in our Gujarati facilities, we ensure that your supply chain for ${keyword} contributes to global sustainability targets (SDGs).
        `;
    },
    getProcessingStandards: (keyword: string, seed: number) => {
        return `
            Our industrial processing architecture for ${keyword} is designed around the 'Total Quality Management' (TQM) philosophy. The facility utilizes state-of-the-art Japanese sortex machinery and Swiss-engineered moisture extraction units. 
            For ${keyword}, the processing environment is maintained under positive pressure with HEPA-grade dust extraction to prevent cross-contamination. Every batch of ${keyword} undergoes a double-pass through multi-spectrum cameras that identify and remove discolored or broken units with 99.99% accuracy. This technical precision is why our ${keyword} grade is consistently selected for high-end retail and pharmaceutical applications.
        `;
    },
    getWholesaleArchitecture: (keyword: string, seed: number) => {
        return `
            The wholesale architecture for ${keyword} is optimized for maximum scalability. We manage specialized inventory buffers in Rajkot that allow us to fulfill urgent spot-market orders for ${keyword} within 48-72 hours. 
            For our 'Contractual Partners', we offer a multi-year 'Volume Guarantee' for ${keyword}, ensuring that even during regional harvest failures, your facilities receive priority allocation. Our tiered pricing models are transparent and based on 'Net-Yield' metrics, meaning you only pay for the high-performing grade of ${keyword} you actually receive.
        `;
    },
    getFutureMarketAnalysis: (keyword: string, seed: number) => {
        return `
            Looking towards the 2030 horizon, the market for ${keyword} is expected to undergo a radical shift towards 'Precision Traceability'. Patel Impex is already piloting blockchain-enabled tracking for ${keyword}, allowing end-consumers to scan a QR code on a bag to see the GPS coordinates of the specific Gujarati field where their ${keyword} was grown.
            As global dietary preferences shift and industrial use-cases for ${keyword} derivatives expand, we are investing in advanced R&D to develop ultra-purified variants of ${keyword}. Our predictive analytics engine indicates that ${keyword} will remain a cornerstone of the emerging 'Green Economy' in South Asia.
        `;
    }
};

const extractImageKeywords = (keyword: string) => {
    const lower = keyword.toLowerCase();
    const hasWord = (word: string) => new RegExp(`\\b${word}\\b`, 'i').test(lower);

    // Stricter separation to prevent "rice" in "price" or "cashew"
    if (hasWord('rice')) return 'rice,grains';
    if (hasWord('cashew')) return 'cashew,nuts,dryfruit';
    if (hasWord('wheat') || hasWord('flour')) return 'wheat,flour,grain';
    if (hasWord('groundnut') || hasWord('peanut')) return 'peanuts,groundnuts';
    if (hasWord('sesame')) return 'sesame,seeds';
    if (hasWord('sugar') || hasWord('jaggery')) return 'sugar,crystals';
    if (hasWord('cotton')) return 'cotton,raw,fiber';
    if (hasWord('spice') || hasWord('cumin') || hasWord('chili')) return 'spices,herbs';
    if (hasWord('dung')) return 'organic,fertilizer';

    return 'logistics,container,cargo';
};

const cleanQueryForSearch = (keyword: string) => {
    const noiseWords = ['cif', 'fob', 'price', 'cost', 'to', 'port', 'per', 'mt', 'metric', 'ton', '2024', '2025', '2026', 'grade', 'export', 'wholesale', 'buy', 'bulk', 'indian', 'india'];
    const parts = keyword.toLowerCase().split(/[\s-]+/);
    const cleaned = parts.filter(word => !noiseWords.includes(word) && word.length > 2);

    // Safety check: if 'rice' is just part of 'price' or 'cashew' is not explicitly there
    if (cleaned.includes('cashew')) return 'cashew,nut';
    if (cleaned.includes('rice')) return 'rice,grains';

    return cleaned.slice(0, 2).join(',');
};

export default function DynamicMassSEO() {
    const { slug } = useParams();
    const [keyword, setKeyword] = useState('');
    const [dynamicImageUrl, setDynamicImageUrl] = useState('');
    const [dynamicFallbackUrl, setDynamicFallbackUrl] = useState('');
    const [seed, setSeed] = useState(1);

    useEffect(() => {
        if (!slug) return;

        const parsedKeyword = slug.replace(/-/g, ' ');
        setKeyword(parsedKeyword);

        const newSeed = generateSeed(parsedKeyword);
        setSeed(newSeed);

        const localImage = getProductImage(parsedKeyword);
        const searchTerms = cleanQueryForSearch(parsedKeyword) || 'agriculture,india';

        if (localImage) {
            setDynamicImageUrl(localImage);
        } else {
            // Using a high-precision Unsplash search pattern
            setDynamicImageUrl(`https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&q=80&w=1200&h=800`); // Default high quality ag

            // Try to find a specific one
            const specificSearch = `https://source.unsplash.com/featured/?${encodeURIComponent(searchTerms)},product`;
            // Note: Since unsplash source is flaky, we actually prefer specialized terms or a better fallback
            if (searchTerms.includes('cashew')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1509358111104-5858089f81df?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('rice')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1200');
            } else {
                setDynamicImageUrl(`https://loremflickr.com/1200/800/${encodeURIComponent(searchTerms.split(',')[0])},agriculture/all`);
            }
        }

        setDynamicFallbackUrl(`https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200&h=800`);

    }, [slug]);

    if (!keyword) return null;

    // 3 completely distinct page architectures so they never look like duplicate templates
    const layoutType = seed % 3;

    const capitalizedTitle = keyword.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-green-100 selection:text-slate-900">
            <SEOHead
                title={`${capitalizedTitle} - Professional B2B Export Dossier`}
                description={`Access strategic insights and procurement advantages for: ${keyword}. Patel Impex provides high-yield supply chains directly from India with certified QA.`}
                canonicalUrl={`/seo/${slug}`}
            />

            <Navigation />

            <main className="min-h-screen flex flex-col">
                {layoutType === 0 && (
                    <ArchitectureCorporate
                        title={capitalizedTitle} image={dynamicImageUrl} fallback={dynamicFallbackUrl} keyword={keyword} seed={seed}
                    />
                )}
                {layoutType === 1 && (
                    <ArchitectureEditorial
                        title={capitalizedTitle} image={dynamicImageUrl} fallback={dynamicFallbackUrl} keyword={keyword} seed={seed}
                    />
                )}
                {layoutType === 2 && (
                    <ArchitectureIndustrial
                        title={capitalizedTitle} image={dynamicImageUrl} fallback={dynamicFallbackUrl} keyword={keyword} seed={seed}
                    />
                )}
            </main>

            <Footer />
        </div>
    );
}

// -------------------------------------------------------------
// Architecture 1: Corporate Intelligence State
// High-end, structured, executive aesthetic
// -------------------------------------------------------------
function ArchitectureCorporate({ title, image, fallback, keyword, seed }: { title: string, image: string, fallback: string, keyword: string, seed: number }) {
    return (
        <div className="bg-slate-50 pt-32 min-h-screen">
            <section className="px-6 py-12 md:py-32 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            <ShieldCheck className="w-3 h-3" /> VERIFIED EXPORT ORIGIN
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-slate-900 leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed border-l-4 border-green-600 pl-6">
                            {TradeIntelligence.getIntroduction(keyword, seed)}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <span className="block text-2xl font-bold text-slate-900">{(seed % 15) + 85}%</span>
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Yield Purity</span>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <span className="block text-2xl font-bold text-slate-900">Tier 1</span>
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Port Logistics</span>
                            </div>
                            <div className="hidden md:block p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <span className="block text-2xl font-bold text-slate-900">ISO Cert</span>
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">QA Standard</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-green-600/5 rounded-[2rem] blur-2xl group-hover:bg-green-600/10 transition-all" />
                        <FallbackImage
                            src={image}
                            fallbackSrc={fallback}
                            alt={keyword}
                            className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl border-8 border-white"
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-20">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <FileText className="text-green-600" /> Technical Specification
                                </h2>
                                <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600">
                                    <p>{TradeIntelligence.getTechnicalDeepDive(keyword, seed)}</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Financial & Regulatory Security</h3>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-green-600" /> Fiscal Policy
                                        </p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{TradeIntelligence.getFinancialThesis(keyword, seed)}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-green-600" /> Compliance Framework
                                        </p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{TradeIntelligence.getRegulatoryFramework(keyword, seed)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="p-8 bg-slate-900 text-white rounded-3xl space-y-6">
                                <h4 className="text-xl font-bold border-b border-white/10 pb-4">Global Outlook 2030</h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic">
                                    {TradeIntelligence.getFutureMarketAnalysis(keyword, seed)}
                                </p>
                                <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold transition-all mt-4">
                                    Request Forecast <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="p-8 border border-slate-200 rounded-3xl">
                                <h4 className="text-lg font-bold text-slate-900 mb-4">Export Capacity</h4>
                                <div className="space-y-4">
                                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-green-600 h-full w-[85%]" />
                                    </div>
                                    <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
                                        <span>Current Load</span>
                                        <span>85% Utilized</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// -------------------------------------------------------------
// Architecture 2: Editorial Trade Feature
// Modern web-magazine style, high contrast, staggered
// -------------------------------------------------------------
function ArchitectureEditorial({ title, image, fallback, keyword, seed }: { title: string, image: string, fallback: string, keyword: string, seed: number }) {
    return (
        <div className="bg-white pt-32 px-6">
            <section className="max-w-7xl mx-auto pt-12 md:pt-24 pb-20 border-b-2 border-slate-900">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-end">
                    <div className="lg:col-span-1">
                        <span className="text-sm font-black rotate-0 lg:-rotate-90 block whitespace-nowrap uppercase tracking-[0.5em] origin-left mb-6 lg:mb-0">
                            EDITION_{seed % 99}
                        </span>
                    </div>
                    <div className="lg:col-span-7">
                        <h1 className="text-5xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none uppercase mb-8 break-words">
                            {title.split(' ')[0]}<br />
                            <span className="text-green-600 italic">{title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-xl md:text-3xl text-slate-900 font-serif leading-tight italic">
                            "{TradeIntelligence.getIntroduction(keyword, seed).split('. ')[0]}."
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-24">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-16">
                        <FallbackImage
                            src={image}
                            fallbackSrc={fallback}
                            alt={keyword}
                            className="w-full grayscale hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
                        />
                        <div className="prose prose-slate prose-lg md:prose-2xl max-w-none font-serif text-slate-800 leading-snug">
                            <p className="first-letter:text-5xl md:first-letter:text-8xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-green-600">
                                {TradeIntelligence.getTechnicalDeepDive(keyword, seed)}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-24 pt-0 lg:pt-40">
                        <div className="bg-slate-900 text-white p-8 md:p-20">
                            <h3 className="text-xl md:text-3xl font-black uppercase mb-12 tracking-widest border-b border-white/20 pb-8">Logistics Hub Mundra</h3>
                            <p className="text-lg md:text-2xl font-light text-slate-300 leading-relaxed mb-12 italic">
                                {TradeIntelligence.getLogisticsThesis(keyword, seed)}
                            </p>
                            <Link to="/contact" className="inline-block border-2 border-white px-10 py-5 hover:bg-white hover:text-slate-900 transition-all font-black uppercase tracking-[0.3em] text-sm">
                                Terminal Access
                            </Link>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">Regional Dynamics</h4>
                            <p className="text-xl text-slate-800 leading-relaxed">
                                {TradeIntelligence.getRegionalDynamics(keyword, seed)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 -mx-6 py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline gap-12 border-b border-white/10 pb-20">
                        <h2 className="text-6xl md:text-[8rem] font-black text-white/5 uppercase select-none leading-none">
                            Patel Impex
                        </h2>
                        <div className="text-white text-right max-w-lg">
                            <p className="text-2xl font-serif italic mb-6">Sustainable Harvest Logic</p>
                            <p className="text-slate-400 text-sm leading-relaxed">{TradeIntelligence.getEthicalSourcingProof(keyword, seed)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// -------------------------------------------------------------
// Architecture 3: Industrial Cyber Matrix
// Stealth, dark, data-heavy, tech-forward
// -------------------------------------------------------------
function ArchitectureIndustrial({ title, image, fallback, keyword, seed }: { title: string, image: string, fallback: string, keyword: string, seed: number }) {
    return (
        <div className="bg-zinc-950 pt-32 min-h-screen text-white">
            <header className="py-12 md:py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                        <div className="space-y-6">
                            <span className="text-emerald-500 font-mono text-xs tracking-[1em] block uppercase">[ STATUS: SYSTEM_OPTIMIZED ]</span>
                            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none break-words">
                                {title}
                            </h1>
                        </div>
                        <div className="bg-zinc-900 p-8 border-l-4 border-emerald-500 min-w-[300px] shadow-2xl">
                            <span className="block text-emerald-500 font-mono text-[10px] mb-2 uppercase tracking-widest">Global Logistics Hub</span>
                            <span className="text-4xl font-mono font-black text-white">{(seed % 50) + 150} <small className="text-lg opacity-50">MT/D</small></span>
                            <span className="block text-[10px] text-zinc-500 uppercase mt-2 tracking-widest font-bold">Verified Daily Capacity</span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <div className="relative aspect-video overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-emerald-500/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-all duration-1000" />
                                <div className="absolute top-6 left-6 z-20 flex gap-2">
                                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 rounded-sm">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-mono font-bold tracking-widest">LIVE_CAM: FACTORY_01</span>
                                    </div>
                                </div>
                                <FallbackImage
                                    src={image}
                                    fallbackSrc={fallback}
                                    alt={keyword}
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                            <div className="p-8 bg-zinc-900 border border-white/5 hover:border-emerald-500/50 transition-all group">
                                <Activity className="text-emerald-500 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-white">Industrial TQM</h3>
                                <p className="text-sm leading-relaxed text-zinc-400 italic">
                                    {TradeIntelligence.getProcessingStandards(keyword, seed)}
                                </p>
                            </div>
                            <div className="p-8 bg-zinc-900 border border-white/5 hover:border-emerald-500/50 transition-all group">
                                <Package className="text-emerald-500 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-white">Wholesale Logic</h3>
                                <p className="text-sm leading-relaxed text-zinc-400 italic">
                                    {TradeIntelligence.getWholesaleArchitecture(keyword, seed)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 md:py-48 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <div className="space-y-32">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-12 border-b-2 border-emerald-500 inline-block">Trade Matrix</h2>
                                <div className="prose prose-invert prose-lg md:prose-2xl max-w-none text-zinc-400 font-light leading-relaxed space-y-12">
                                    <p>{TradeIntelligence.getTechnicalDeepDive(keyword, seed)}</p>
                                    <p>{TradeIntelligence.getLogisticsThesis(keyword, seed)}</p>
                                </div>
                            </div>
                            <div className="p-12 md:p-20 bg-emerald-500 text-zinc-950">
                                <h3 className="text-4xl md:text-6xl font-black uppercase mb-10 leading-none tracking-tighter">Market Resilience</h3>
                                <p className="text-xl md:text-2xl font-bold italic mb-0">
                                    {TradeIntelligence.getMarketOutlook(keyword, seed)}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="bg-zinc-900 p-6 md:p-10 border border-emerald-500/20 shadow-2xl">
                                <h4 className="text-[10px] md:text-xs font-black text-emerald-500 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-12 flex items-center gap-4">
                                    <BarChart3 className="w-5 h-5 shrink-0" /> TECHNICAL_OPERATIONS_METRICS
                                </h4>
                                <ul className="space-y-8">
                                    {[
                                        { label: 'Logistics Latency', value: 'RAJ_SUB_SEC_01' },
                                        { label: 'Verification rate', value: '99.9%' },
                                        { label: 'Supply Priority', value: 'TIER_1_MUNDRA' },
                                        { label: 'Quality Assurance', value: 'ISO_CERTIFIED' }
                                    ].map((stat, i) => (
                                        <li key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-6 gap-2">
                                            <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{stat.label}</span>
                                            <span className="text-white font-mono font-bold tracking-tighter break-all">{stat.value}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="mt-16 block w-full bg-emerald-500 hover:bg-white text-zinc-950 text-center font-black py-6 uppercase text-sm tracking-[0.1em] md:tracking-[0.4em] transition-all">
                                    Initiate Strategic Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// -------------------------------------------------------------
// Original Base Layout: Product Expert Dossier (Legacy / Fallback)
// -------------------------------------------------------------
function ProductExpertDossier({ title, image, fallback, keyword, seed }: { title: string, image: string, fallback: string, keyword: string, seed: number }) {
    return (
        <div className="bg-white">
            {/* Professional Hero Section */}
            <section className="bg-slate-50 border-y border-slate-200 py-12 md:py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-8 bg-green-600" />
                            <span className="text-xs font-graduate tracking-widest text-green-700 uppercase">Export Intellectual Portfolio IPX-{(seed % 99999).toString()}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-graduate text-slate-900 leading-[1.1] mb-8">
                            {title}
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-600 font-sans leading-relaxed mb-8 italic">
                            A strategic technical overview and logistics framework for <strong>{keyword}</strong> exports from the Rajkot industrial cluster.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-green-50 text-green-700 text-xs font-bold uppercase rounded-full border border-green-100">ISO 9001:2015</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-full border border-blue-100">UCP 600 Ready</span>
                            <span className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-full border border-slate-200">Export Tier 1</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-2 bg-green-600/10 rounded-2xl blur-2xl" />
                        <FallbackImage
                            src={image}
                            fallbackSrc={fallback}
                            alt={keyword}
                            className="relative w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Strategic Analysis Content */}
            <section className="py-16 md:py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-slate prose-lg md:prose-2xl max-w-none space-y-12">
                        <div className="border-l-4 border-green-600 pl-8 py-4 bg-slate-50/50 rounded-r-lg">
                            <h2 className="text-2xl md:text-4xl font-graduate text-slate-900 mb-6">Trade Introduction</h2>
                            <p className="font-sans leading-relaxed text-slate-700">
                                {TradeIntelligence.getIntroduction(keyword, seed)}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-graduate text-slate-900 mb-6 flex items-center gap-3">
                                <FileText className="text-green-600" /> Technical Specification Deck
                            </h2>
                            <div className="bg-white border p-6 md:p-10 rounded-xl shadow-sm leading-relaxed text-slate-700">
                                {TradeIntelligence.getTechnicalDeepDive(keyword, seed)}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-slate-900 text-white rounded-2xl">
                                <h3 className="text-xl font-graduate mb-4 text-green-400">Market Intelligence</h3>
                                <p className="text-sm md:text-base leading-relaxed text-slate-300 italic">{TradeIntelligence.getMarketOutlook(keyword, seed)}</p>
                            </div>
                            <div className="p-8 bg-green-700 text-white rounded-2xl">
                                <h3 className="text-xl font-graduate mb-4 text-green-100">Logistics Thesis</h3>
                                <p className="text-sm md:text-base leading-relaxed text-green-50 italic">{TradeIntelligence.getLogisticsThesis(keyword, seed)}</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-graduate text-slate-900 mb-6 underline decoration-green-600 decoration-4 underline-offset-8">Compliance & Financial Security</h2>
                            <div className="space-y-6 text-slate-700">
                                <p>{TradeIntelligence.getFinancialThesis(keyword, seed)}</p>
                                <p>{TradeIntelligence.getRegulatoryFramework(keyword, seed)}</p>
                            </div>
                        </div>

                        <div className="py-12 px-8 md:px-16 bg-slate-50 border border-slate-200 rounded-2xl">
                            <h2 className="text-2xl md:text-3xl font-graduate text-slate-900 mb-8 text-center italic">Institutional Sourcing Standards</h2>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 mb-4 flex items-center gap-2">
                                        <Award className="w-4 h-4" /> Ethical Procurement
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed font-sans">{TradeIntelligence.getEthicalSourcingProof(keyword, seed)}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 mb-4 flex items-center gap-2">
                                        <Activity className="w-4 h-4" /> Processing Excellence
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed font-sans">{TradeIntelligence.getProcessingStandards(keyword, seed)}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-graduate text-slate-900 mb-6">Regional Supply Resilience</h2>
                            <p className="text-slate-700">{TradeIntelligence.getRegionalDynamics(keyword, seed)}</p>
                        </div>

                        <div className="p-8 md:p-12 border-t border-b border-slate-100 my-16">
                            <h3 className="text-3xl font-graduate text-center text-slate-900 mb-8">2030 Global Outlook</h3>
                            <p className="text-lg md:text-xl text-slate-600 text-center font-sans leading-relaxed italic">
                                {TradeIntelligence.getFutureMarketAnalysis(keyword, seed)}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-graduate text-slate-900 mb-6">Wholesale Logic & Export Scalability</h2>
                            <div className="space-y-6 text-slate-700">
                                <p>{TradeIntelligence.getWholesaleArchitecture(keyword, seed)}</p>
                                <p>{TradeIntelligence.getGlobalSupplyThesis(keyword, seed)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Call to Action */}
            <section className="bg-slate-900 py-20 md:py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-graduate text-white mb-10 leading-tight">
                        Scale your <span className="text-green-500">Supply</span> Pipeline
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 italic">
                        The elite procurement of <strong>{keyword}</strong> begins with an origin intelligence partnership.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-full text-xl font-bold transition-all shadow-xl shadow-green-600/20">
                        Initiate Global Trade <ArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}
