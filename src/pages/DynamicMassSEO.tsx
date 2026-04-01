import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Package, Truck, ShieldCheck, CheckCircle2, Factory, LineChart, Award, ArrowRight, BarChart3, Users, Leaf, Anchor, ArrowUpRight, FileText, Activity, Zap, Network } from 'lucide-react';

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
        // SUGAR & SWEETENERS
        'white crystal sugar': '/assets/products/subtypes/refined-white-sugar-m30.png',
        'm30 sugar': '/assets/products/subtypes/refined-white-sugar-m30.png',
        'raw sugar': '/assets/products/subtypes/raw-sugar.png',
        'brown sugar': '/assets/products/subtypes/brown-sugar.png',
        'organic sugar': '/assets/products/subtypes/organic-sugar.png',
        'jaggery powder': '/assets/products/subtypes/jaggery-powder.png',
        'jaggery': '/assets/products/subtypes/jaggery-rounds.png',
        'sugar': '/assets/products/sugar.png',

        // RICE VARIETIES
        'basmati': '/assets/products/steam-basmati-rice.png',
        'sella': '/assets/products/golden-sella-rice.png',
        'masoori': '/assets/products/sona-masoori-rice.png',
        'parboiled': '/assets/products/ir64-parboiled-rice.png',
        'ir64': '/assets/products/ir64-parboiled-rice.png',
        'rice': '/assets/products/rice.png',

        // WHEAT & GRAINS
        'sharbati': '/assets/products/sharbati-wheat.png',
        'bhalia': '/assets/products/bhalia-wheat.png',
        'durum': '/assets/products/durum-wheat.png',
        'lokwan': '/assets/products/lokwan-wheat.png',
        'wheat': '/assets/products/bhalia-wheat.png',
        'flour': '/assets/products/wheat-flour.png',
        'maize': 'https://images.unsplash.com/photo-1551748629-88d3e3358749?auto=format&fit=crop&q=80&w=1200',
        'corn': 'https://images.unsplash.com/photo-1551748629-88d3e3358749?auto=format&fit=crop&q=80&w=1200',
        'barley': 'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=1200',

        // OIL SEEDS & NUTS
        'groundnut': '/assets/products/groundnut.png',
        'peanut': '/assets/products/groundnut.png',
        'bold runner': '/assets/products/bold-runner-groundnut.png',
        'java spanish': '/assets/products/java-spanish-groundnut.png',
        'sesame': '/assets/products/sesame-seeds.png',
        'natural sesame': '/assets/products/natural-sesame.png',
        'hulled sesame': '/assets/products/hulled-sesame.png',
        'sunflower seeds': 'https://images.unsplash.com/photo-1546816751-d4ba389bc70b?auto=format&fit=crop&q=80&w=1200',
        'cashew': '/assets/products/cashew.png',
        'almond': '/assets/products/almond.png',

        // SPYLLIUM & HEALTH
        'psyllium': '/assets/products/psyllium-husk.png',
        'husk': '/assets/products/psyllium-husk.png',
        'isabgol': '/assets/products/psyllium-husk.png',
        'medical gloves': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
        'supplement': 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1200',

        // SPICES
        'cumin': '/assets/products/cumin-seeds.png',
        'fennel': '/assets/products/fennel-seeds.png',
        'cardamom': '/assets/products/cardamom.png',
        'turmeric': '/assets/products/turmeric.png',
        'coriander': '/assets/products/coriander-seeds.png',
        'pepper': '/assets/products/black-pepper.png',
        'chili': '/assets/products/red-chili.png',
        'ginger': '/assets/products/ginger.png',
        'garlic': '/assets/products/garlic.png',
        'onion': '/assets/products/onion.png',
        'soybean': '/assets/products/soybean.png',
        'pickles': 'https://images.unsplash.com/photo-1589135398302-388cd35095a0?auto=format&fit=crop&q=80&w=1200',

        // TEXTILES
        'cotton': '/assets/products/cotton.png',
        'yarn': '/assets/products/cotton-yarn.png',
        'linen': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200',
        'fabric': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200',
        'towels': 'https://images.unsplash.com/photo-1616627686419-7561f52d5b62?auto=format&fit=crop&q=80&w=1200',

        // INDUSTRIAL & AGRI-TECH
        'cow dung': '/assets/products/cow-dung-cake.png',
        'dung': '/assets/products/animal-dung.png',
        'tractor': '/assets/products/tractor-industrial.png',
        'harvester': '/assets/products/combine-harvester.png',
        'irrigation': '/assets/products/drip-irrigation.png',
        'tiller': '/assets/products/power-tiller.png',
        'cnc': '/assets/products/cnc-machine.png',
        'motor': '/assets/products/industrial-motor.png',
        'welding': '/assets/products/welding-machine.png',
        'bearing': '/assets/products/ball-bearings.png',
        'conveyor': '/assets/products/conveyor-belts.png',
        'pesticides': 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200',
        
        // TILES & SANITARYWARE
        'tile': '/assets/products/ceramic-floor-tiles.png',
        'tiles': '/assets/products/ceramic-floor-tiles.png',
        'wall tiles': '/assets/products/decorative-wall-tiles.png',
        'floor tiles': '/assets/products/ceramic-floor-tiles.png',
        'vitrified tiles': '/assets/products/grey-vitrified-tiles.png',
        'marble tiles': '/assets/products/marble-tiles-white.png',
        'porcelain tiles': '/assets/products/stone-look-tiles.png',
        'sanitaryware': '/assets/products/sanitaryware-set-complete.png',
        'toilet': '/assets/products/modern-toilets.png',
        'basin': '/assets/products/bathroom-sinks-modern.png',
        'wash basin': '/assets/products/bathroom-sinks-modern.png',
        'water closet': '/assets/products/modern-toilets.png',
        'bathroom': '/assets/products/sanitaryware-set-complete.png',
        'bath fittings': '/assets/products/bath-fittings-taps.png',
        'gvt tiles': '/assets/products/grey-vitrified-tiles.png',
        'pgvt tiles': '/assets/products/grey-vitrified-tiles.png',
        'double charge tiles': '/assets/products/stone-look-tiles.png',
        'full body vitrified tiles': '/assets/products/marble-tiles-white.png',
        'digital wall tiles': '/assets/products/decorative-wall-tiles.png',
        'elevation tiles': '/assets/products/elevation-wall-tiles.png',
        'parking tiles': '/assets/products/patterned-ceramic-tiles.png',
        'porcelain slabs': '/assets/products/grey-vitrified-tiles.png',
        'sanitaryware sets': '/assets/products/sanitaryware-set-complete.png',
        'designer wash basins': '/assets/products/bathroom-sinks-modern.png',
        'water closets': '/assets/products/modern-toilets.png',
        'shower': '/assets/products/bath-fittings-taps.png',
        'shower set': '/assets/products/bath-fittings-taps.png',
        'faucets': '/assets/products/bath-fittings-taps.png',

        // EARTHING SYSTEMS
        'gi earthing electrode': '/assets/products/earthing-rod-with-clamp.png',
        'copper earthing electrode': '/assets/products/chemical-earthing-electrode.png',
        'copper bonded rods': '/assets/products/copper-bonded-earthing-rods.png',
        'backfill compound': '/assets/products/backfill-compound-sack.png',
        'earthing strips': '/assets/products/gi-earthing-flat-bar.png',
        'lightning arrester': '/assets/products/earthing-terminal-rod.png',
        'earthing clamps': '/assets/products/earthing-c-clamps.png',
        'earth pit covers': '/assets/products/earth-pit-covers.png',
        'u-bolt': '/assets/products/u-bolt-earthing-clamps.png',
        'maintenance free earthing': '/assets/products/chemical-earthing-electrode.png',
        'earthing rod': '/assets/products/earthing-rod-with-clamp.png',
        'grounding electrode': '/assets/products/chemical-earthing-electrode.png',
        'earth pit': '/assets/products/earth-pit-covers.png',
        'bentonite powder': '/assets/products/backfill-compound-sack.png',
        'earthing kit': '/assets/products/chemical-earthing-electrode.png',
        'soluble salt tiles': '/assets/products/grey-vitrified-tiles.png',
        'nano vitrified tiles': '/assets/products/grey-vitrified-tiles.png',
        'polished vitrified tiles': '/assets/products/grey-vitrified-tiles.png',
        'subway tiles': '/assets/products/decorative-wall-tiles.png',
        'glass mosaic': '/assets/products/decorative-wall-tiles.png',
        'mosaic floor tiles': '/assets/products/patterned-ceramic-tiles.png',
        'ceramic wall tiles': '/assets/products/decorative-wall-tiles.png',
        'terracotta tiles': '/assets/products/elevation-wall-tiles.png'
    };

    // Precise priority search with word boundary protection
    const words = new Set(lowerKeyword.split(/[\s-]+/));

    // Sort keys by length descending to match most specific terms first
    const sortedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);

    for (const k of sortedKeys) {
        const keyWords = k.split(' ');
        // If the mapping key is a multi-word phrase, check if it's contained as a continuous block
        if (keyWords.length > 1) {
            if (lowerKeyword.includes(k)) return mapping[k];
            
            // Fallback: check if all words of the key are present in the keyword (unordered match)
            if (keyWords.every(word => words.has(word))) return mapping[k];
        } else {
            // Strict whole word match for single word keys
            if (words.has(k)) return mapping[k];
        }
    }

    return ''; // Return empty string to trigger fallback
};

// Helper to extract a shorter, more natural product name from a long SEO keyword
const getShortKeyword = (keyword: string) => {
    // Remove year, "cif price", "to port", "kenya", etc.
    let short = keyword.replace(/202[4-9]/g, '')
        .replace(/CIF\s+price/gi, '')
        .replace(/to\s+.*port/gi, '')
        .replace(/\bprice\b/gi, '')
        .replace(/\bExport\s+from\s+India\b/gi, '')
        .replace(/\bQuality\b/gi, '')
        .replace(/\bIndia\b/gi, '')
        .replace(/\bWholesale\b/gi, '')
        .trim();

    // If it's still too long, take the first 3-4 words
    const words = short.split(/\s+/);
    if (words.length > 4) {
        return words.slice(0, 4).join(' ');
    }
    return short || keyword;
};

// Smart content wrapper to prevent repetitive keyword stuffing
const getSmartContent = (contentGetter: (kw: string, s: number) => string, keyword: string, seed: number) => {
    const rawContent = contentGetter(keyword, seed);
    const shortKw = getShortKeyword(keyword);

    // Randomly replace some instances of the full keyword with the short one or generic terms
    let processed = rawContent;
    const occurrences = (processed.match(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')) || []).length;

    if (occurrences > 1) {
        let count = 0;
        processed = processed.replace(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), (match) => {
            count++;
            if (count === 1) return match;
            if (count % 2 === 0) return shortKw;
            const alternatives = ["this premium commodity", "the specified batch", "our origin-direct supply", "this industrial grade", "the verified export stock"];
            return alternatives[seed % alternatives.length];
        });
    }

    // Synonym Swapping for industry terms
    const synonyms: Record<string, string[]> = {
        'premium': ['high-grade', 'top-tier', 'superior', 'elite', 'prime'],
        'sourcing': ['procurement', 'acquisition', 'supply chain management', 'logistics orchestration'],
        'global': ['international', 'cross-border', 'worldwide', 'intercontinental'],
        'reliable': ['consistent', 'dependable', 'verified', 'guaranteed'],
        'quality': ['purity', 'grade compliance', 'standardization', 'excellence']
    };

    Object.keys(synonyms).forEach(key => {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        processed = processed.replace(regex, (match) => {
            const list = synonyms[key];
            return (seed % 3 === 0) ? list[seed % list.length] : match;
        });
    });

    return processed;
};

// Helper to shuffle sentences to prevent duplicate content patterns
const shuffleSentences = (sentences: string[], seed: number) => {
    const result = [...sentences];
    for (let i = result.length - 1; i > 0; i--) {
        const j = (seed + i) % (i + 1);
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result.join(' ');
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
        const sentences = [
            `The technical profile of ${keyword} is foundational to its industrial utility and market valuation.`,
            `Our processing sequence for ${keyword} begins with a multi-stage cleaning protocol that utilizes high-frequency electronic sorting and magnetic separation to remove every trace of foreign matter, ensuring a purity level that exceeds ${(seed % 2) + 98.5}%.`,
            `For ${keyword}, moisture control is paramount during the pre-shipment phase.`,
            `We utilize advanced hydration analytics to maintain a moisture coefficient of less than ${(seed % 3) + 7}%, preventing any risk of fermentation or structural degradation during cross-continental transit.`,
            `The physicochemical analysis of ${keyword} is conducted in ISO/IEC 17025 accredited laboratories.`,
            `This includes testing for technical markers such as grain length, mesh size, oil content, or sucrose concentration, depending on the specific grade of ${keyword} required.`,
            `We provide full certificate of analysis (COA) dossiers for every batch, allowing for seamless integration into your manufacturing or distribution workflows.`,
            `Our Quality Assurance team also monitors the 'Cargo Stress' variables, ensuring that the packaging used for ${keyword}—whether it be 25kg PP bags, jumbo tote bags, or consumer-ready vacuum packs—is optimized for both durability and aeration during the humid maritime journey.`
        ];
        return shuffleSentences(sentences, seed);
    },
    getLogisticsThesis: (keyword: string, seed: number) => {
        const sentences = [
            `Strategic logistics for ${keyword} are anchored by our proximity to the Mundra Port (INMUN) and Kandla Port, India's premier gateways for containerized and bulk cargo.`,
            `This geographical advantage allows Patel Impex to maintain a 'Gate-to-Vessel' latency that is 40% lower than the industry average for ${keyword}.`,
            `Our logistics desk coordinates a dedicated fleet for the inland transit of ${keyword}, ensuring that cargo is staged in our humidity-controlled warehouses near the port to await vessel berthing.`,
            `This 'Just-In-Time' staging prevents exposure to monsoon variables and ensures the freshness of the ${keyword}.`,
            `We offer full multi-modal solutions, including bulk vessel chartering for large-volume ${keyword} contracts and LCL options for boutique distributors.`
        ];
        return shuffleSentences(sentences, seed);
    },
    getMarketOutlook: (keyword: string, seed: number) => {
        const sentences = [
            `The global demand trajectory for ${keyword} is projected to sustain a CAGR of ${(seed % 4) + 4.5}% over the next five-year cycle, driven by industrial expansion and changing consumer patterns in the EU, GCC, and Southeast Asian regions.`,
            `Patel Impex utilizes seasonal price hedging and historical crop data for ${keyword} to provide our clients with a competitive pricing buffer.`,
            `We monitor the 'Global Yield Index' and political trade barriers in real-time to advise our partners on the optimal 'Procurement Windows' for ${keyword}.`,
            `This data-driven approach allows our clients to secure volume during market contractions and lock in pricing before the peak-demand surges typical of the ${keyword} trade.`
        ];
        return shuffleSentences(sentences, seed);
    },
    getLaboratoryAnalysisSpectrum: (keyword: string, seed: number) => {
        const sentences = [
            `The laboratory analysis matrix for ${keyword} covers over 40 distinct chemical and physical markers.`,
            `Using high-performance liquid chromatography (HPLC) and atomic absorption spectroscopy, we verify that ${keyword} is free from pesticide residues, heavy metals, and mycotoxins.`,
            `For our high-specification ${keyword} clients, we provide a 'Digital Lab Passport' for every batch.`,
            `This exhaustive verification ensures that the structural and chemical integrity of ${keyword} remains uncompromised during multi-port handling and varying thermal conditions.`
        ];
        return shuffleSentences(sentences, seed);
    },
    getProductFacts: (keyword: string, seed: number) => {
        const lower = keyword.toLowerCase();
        if (lower.includes('rice')) return {
            origin: 'Punjab / Haryana / Gujarat Belts',
            grade: '1121 / 1509 / PR11 Grade',
            purity: '95% to 99% Sortex Cleaned',
            moisture: '12% to 14% Max',
            packaging: 'Non-Woven / Jute / PP Bags'
        };
        if (lower.includes('cashew')) return {
            origin: 'Kollam / Guinea Bissau / Vietnam',
            grade: 'WW180 to WW450 / SW / LWP',
            purity: 'AFLATOXIN Certified',
            moisture: '5% Max',
            packaging: 'Vacuum Tins / Flexi Packs'
        };
        if (lower.includes('sugar')) return {
            origin: 'Maharashtra / Uttar Pradesh / Gujarat',
            grade: 'M-30 / S-30 / ICUMSA 45',
            purity: 'Refined / Poly-lined',
            moisture: '0.04% Max',
            packaging: '50kg Double PP Bags'
        };
        if (lower.includes('peanut') || lower.includes('groundnut')) return {
            origin: 'Saurashtra / Rajasthan Belts',
            grade: 'Bold / Java / Runner',
            purity: '99.5% Free from Aflatoxin',
            moisture: '7% to 8% Max',
            packaging: 'Jute Bags / Vacuum Packs'
        };
        if (lower.includes('tile') || lower.includes('sanitary')) return {
            origin: 'Morbi Industrial Cluster',
            grade: 'First Grade / AAA / High Gloss',
            purity: 'Nano-Polished / Rectified',
            moisture: 'Water Absorption < 0.05%',
            packaging: 'Palletized Corrugated Boxes'
        };
        if (lower.includes('earthing') || lower.includes('electrode') || lower.includes('lightning')) return {
            origin: 'Rajkot / Jamnagar Engineering Clusters',
            grade: 'CPRI Tested / UL Listed',
            purity: 'High Conductivity Electrolytic Copper',
            moisture: 'Corrosion Resistant Coating',
            packaging: 'Industrial Wood Crates'
        };
        return {
            origin: 'North-Western India (Gujarat Cluster)',
            grade: 'Export Standard / Prime Quality',
            purity: 'Certified Grade Compliance',
            moisture: 'Optimized per Commodity',
            packaging: 'Standard Export Containers'
        };
    },
    getRegionalDynamics: (keyword: string, seed: number) => {
        const sentences = [
            `The state of Gujarat, and specifically the Saurashtra region around Rajkot, provides a topological advantage for ${keyword} that is unmatched elsewhere.`,
            `The mineral-rich soil and controlled irrigation systems result in a grade of ${keyword} that consistently out-performs other origins in technical stress tests.`,
            `Patel Impex maintains deep-tier relationships within the primary ${keyword} production clusters, allowing us to source and segregate the highest-grade material before it reaches the standard commodity markets.`,
            `This 'Origin-Direct' model ensures that your supply of ${keyword} is free from the quality dilution common in multi-origin blending operations.`
        ];
        return shuffleSentences(sentences, seed);
    },
    getRegionalHarvestIntel: (keyword: string, seed: number) => {
        return `The harvest analysis for the current season of ${keyword} indicate a robust yield with exceptional technical consistency across the Saurashtra belt. By maintaining field-level intelligence, Patel Impex is able to predict batch quality variances in ${keyword} weeks before the actual factory arrival. Our seasonal reports for ${keyword} capture critical data on kernel density, color consistency, and size distribution, providing our clients with the clarity needed for long-term inventory budgeting.`;
    },
    getRegulatoryFramework: (keyword: string, seed: number) => {
        return `Navigating the regulatory landscape for the export of ${keyword} involves a complex mesh of APEDA filings, FSSAI certificates, and GSP documentation. Our dedicated compliance officers manage the entire digital lifecycle of these licenses for ${keyword}. We ensure that every container of ${keyword} is accompanied by a full dossier of phytosanitary certificates, certificates of origin, and SGS/Intertek inspection reports as required by your destination port's customs authority.`;
    },
    getGlobalSupplyThesis: (keyword: string, seed: number) => {
        return `The global supply thesis for ${keyword} is built upon the convergence of traditional Indian agricultural depth and modern 4.0 industrial logistics. As we move towards a more fragmented global trade environment, the importance of a reliable, high-volume origin node like the Rajkot cluster cannot be overstated. Patel Impex acts as a 'Primary Stabilizer' in the ${keyword} market, providing consistent supply even during periods of extreme volatility.`;
    },
    getFinancialThesis: (keyword: string, seed: number) => {
        return `Strategic capital deployment for ${keyword} procurement is facilitated through our Tier-1 banking partnerships with HDFC and ICICI. We offer flexible financial instruments including Irrevocable Letters of Credit (LC) at Sight, Bank Guarantees (BG), and structured standby arrangements for long-term contract fulfillment. Our financial desk provides 'Currency Volatility Protection' for ${keyword} contracts, effectively insulating their margins from the fluctuations of the Indian Rupee.`;
    },
    getEthicalSourcingProof: (keyword: string, seed: number) => {
        return `The ethical procurement of ${keyword} is not just a CSR initiative; it is a core operational requirement. Patel Impex enforces a strict Code of Conduct across our entire production network. This ensures that every MT of ${keyword} is sourced from facilities that adhere to ILO standards, with zero-tolerance for child labor or forced labor. We are actively transitioning our ${keyword} processing nodes towards a 'Carbon-Neutral' footprint.`;
    },
    getProcessingStandards: (keyword: string, seed: number) => {
        return `Our industrial processing architecture for ${keyword} is designed around the 'Total Quality Management' (TQM) philosophy. The facility utilizes state-of-the-art Japanese sortex machinery and Swiss-engineered moisture extraction units. For ${keyword}, the processing environment is maintained under positive pressure with HEPA-grade dust extraction to prevent cross-contamination. Every batch of ${keyword} undergoes a double-pass through multi-spectrum cameras.`;
    },
    getWholesaleArchitecture: (keyword: string, seed: number) => {
        return `The wholesale architecture for ${keyword} is optimized for maximum scalability. We manage specialized inventory buffers in Rajkot that allow us to fulfill urgent spot-market orders for ${keyword} within 48-72 hours. For our 'Contractual Partners', we offer a multi-year 'Volume Guarantee' for ${keyword}, ensuring that even during regional harvest failures, your facilities receive priority allocation.`;
    },
    getFutureMarketAnalysis: (keyword: string, seed: number) => {
        return `Looking towards the 2030 horizon, the market for ${keyword} is expected to undergo a radical shift towards 'Precision Traceability'. Patel Impex is already piloting blockchain-enabled tracking for ${keyword}, allowing end-consumers to scan a QR code on a bag to see the GPS coordinates of the specific Gujarati field where their ${keyword} was grown. As global dietary preferences shift, we are investing in advanced R&D for ${keyword} derivatives.`;
    },
    getBatchProcessingIntelligence: (keyword: string, seed: number) => {
        return `Our batch-level processing for ${keyword} utilizes an automated lifecycle management system. Each grain or unit of ${keyword} is subjected to a triple-spectrum optical analysis that evaluates internal density, geometric symmetry, and surface luminescence. This high-fidelity screening ensures that the 'Physical Signature' of our exported ${keyword} remains consistent regardless of the harvest moon phase.`;
    },
    getGlobalPhytosanitaryProtocol: (keyword: string, seed: number) => {
        return `The phytosanitary protocol for ${keyword} exports involves a comprehensive three-tier sterilization process. Beyond the standard methyl bromide fumigation, we implement supervised CO2 blanketing for organic variants of ${keyword}. This creates an anaerobic environment that is lethal to polyphagous pests while preserving the organoleptic properties of the product.`;
    },
    getSupplyChainDigitizationLogic: (keyword: string, seed: number) => {
        return `Supply chain transparency for ${keyword} is powered by our proprietary 'PatelLink' ERP. This system provides our clients with real-time visibility into the status of their ${keyword} cargo, from the primary cleaning stage in Rajkot to the final container sealing. By digitizing the documentation trail for ${keyword}, we reduce the administrative friction typically associated with Indian exports.`;
    },
    getIndustrialApplicationSpectrum: (keyword: string, seed: number) => {
        return `The industrial utility of ${keyword} extends across multiple high-value sectors. In the pharmaceutical grade space, ${keyword} is processed for maximum solubility and chemical stability. For the food-service industry, our ${keyword} is graded for specific 'Aroma Profiles' and 'Structural Integrity' during high-temperature convection cooking. The versatility of ${keyword} makes it an essential raw material.`;
    },
    getTradeHazardMitigation: (keyword: string, seed: number) => {
        return `Mitigating trade hazards for ${keyword} requires an anticipation of maritime and geopolitical volatility. Patel Impex maintains a 'Reserve Storage Buffer' of high-grade ${keyword} to fulfill contracts even during sudden export bans or regional crop failures. Our insurance framework for ${keyword} covers everything from 'General Average' maritime losses to strike-related delays at the port.`;
    },
    getPortTerminalExecutionLogic: (keyword: string, seed: number) => {
        return `Terminal execution for ${keyword} at Mundra Port is optimized through our dedicated CFs partnerships. We utilize pre-staged container allocation for ${keyword}, ensuring that your cargo is the first to be loaded onto the mother-vessel during the berthing window. This 'Prime-Slot' allocation prevents the ${keyword} from sitting in the sun on the terminal tarmac, preserving the cellular integrity.`;
    }
};

const extractImageKeywords = (keyword: string) => {
    const lower = keyword.toLowerCase();
    const hasWord = (word: string) => new RegExp(`\\b${word}\\b`, 'i').test(lower);

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

const getRelatedKeywords = (keyword: string, seed: number) => {
    const lower = keyword.toLowerCase();
    const allKeywords = [
        "White Crystal Sugar M30", "Refined Sugar Grade A", "Raw Brown Sugar", "Organic Jaggery Powder",
        "Basmati Rice 1121", "Sona Masoori Rice", "IR64 Parboiled Rice", "Golden Sella Rice",
        "Bhalia Wheat", "Sharbati Wheat", "Durum Wheat Semolina", "Lokwan Wheat Grade 1",
        "Java Peanut Kernels", "Bold Runner Groundnuts", "Blanched Peanuts", "Peanut Butter Export",
        "Natural White Sesame Seeds", "Hulled Sesame Seeds", "Black Sesame Seeds", "Sesame Oil Bulk",
        "Psyllium Husk 99%", "Isabgol Powder", "Psyllium Industrial Grade",
        "Raw Upland Cotton", "Combed Cotton Yarn", "Organic Cotton Fiber",
        "Cumin Seeds Europe Grade", "Fennel Seeds Singapore Quality", "Green Cardamom 8mm", "Soybean Meal"
    ];

    // Filter to find some related and some random to ensure diversity
    const related = allKeywords.filter(k => {
        const parts = k.toLowerCase().split(' ');
        return parts.some(p => lower.includes(p) && p.length > 3);
    });

    const pool = related.length >= 4 ? related : allKeywords;
    const shuffled = [...pool].sort(() => 0.5 - ((seed % 10) / 10));
    return shuffled.slice(0, 6);
};

function RelatedInterlinking({ keyword, seed }: { keyword: string, seed: number }) {
    const related = getRelatedKeywords(keyword, seed);
    return (
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-green-600 font-black tracking-[0.4em] text-[10px] uppercase block mb-4">Internal Network</span>
                        <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-none uppercase">Related Procurement <span className="text-green-600 font-serif lowercase italic tracking-normal">intelligence</span></h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {related.map((k, i) => (
                        <Link 
                            key={i} 
                            to={`/more/${k.toLowerCase().replace(/\s+/g, '-')}`}
                            className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-green-500 hover:shadow-xl transition-all group"
                        >
                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-4">Dossier {seed + i}</span>
                            <span className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">{k}</span>
                            <ArrowUpRight className="w-4 h-4 mt-4 text-slate-300 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

const cleanQueryForSearch = (keyword: string) => {
    const noiseWords = ['cif', 'fob', 'price', 'cost', 'to', 'port', 'per', 'mt', 'metric', 'ton', '2024', '2025', '2026', 'grade', 'export', 'wholesale', 'buy', 'bulk', 'indian', 'india'];
    const parts = keyword.toLowerCase().split(/[\s-]+/);
    const cleaned = parts.filter(word => !noiseWords.includes(word) && word.length > 2);

    // Safety check: if 'rice' is just part of 'price' or 'cashew' is not explicitly there
    if (cleaned.includes('cashew')) return 'cashew,nut';
    if (cleaned.includes('rice')) return 'rice,grains';

    return cleaned.slice(0, 2).join(',');
};

function TechnicalDatasheet({ keyword, seed }: { keyword: string, seed: number }) {
    const facts = TradeIntelligence.getProductFacts(keyword, seed);
    return (
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-6 flex items-center gap-3">
                <BarChart3 className="text-green-500" /> Technical Data Sheet
            </h3>
            <div className="grid gap-6">
                {Object.entries(facts).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 group/row">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/row:text-green-400 transition-colors">{key}</span>
                        <span className="text-sm font-bold text-slate-200">{value}</span>
                    </div>
                ))}
            </div>
            <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 italic text-[10px] text-slate-400 leading-relaxed">
                * Specifications are batch-specific and subject to final laboratory variance. Patel Impex guarantees compliance within ±{(seed % 3) + 1}% of the stated values.
            </div>
        </div>
    );
}

function TradeRouteGlossary({ keyword, seed }: { keyword: string, seed: number }) {
    const terms = [
        { t: "FOB (Free on Board)", d: "Seller delivers once goods pass the ship's rail at the named port of shipment." },
        { t: "CIF (Cost, Insurance, Freight)", d: "Price includes cost of goods, insurance, and freight to the destination port." },
        { t: "Phytosanitary Certificate", d: "Official document verifying that the agricultural goods are free from pests and diseases." },
        { t: "Bill of Lading", d: "Legal document between the shipper and carrier detailing the type, quantity, and destination of the cargo." },
        { t: "SGS Inspection", d: "Third-party audit of weight and quality before container sealing at terminal." }
    ];
    
    return (
        <div className="space-y-8 mt-12">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 border-l-2 border-green-500 pl-4">Trade Context Definitions</h4>
            <div className="grid md:grid-cols-2 gap-4">
                {terms.slice(seed % 2, (seed % 2) + 4).map((term, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                        <span className="block font-bold text-slate-900 mb-2">{term.t}</span>
                        <span className="text-xs text-slate-500 leading-relaxed font-light">{term.d}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

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
            // High-stability fallback strategy: Use search-optimized high-res images from Unsplash
            // This replaces the unreliable loremflickr which returns random animals
            const searchTerms = cleanQueryForSearch(parsedKeyword) || 'agriculture,export';
            const seedAdjust = (newSeed % 5);
            
            if (searchTerms.includes('rice')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('millet') || searchTerms.includes('bajra')) {
                // Specific high-quality Pearl Millet/Bajra image
                setDynamicImageUrl('https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('wheat') || searchTerms.includes('flour') || searchTerms.includes('grain')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('sugar') || searchTerms.includes('sweet') || searchTerms.includes('jaggery')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('pharma') || searchTerms.includes('medical') || searchTerms.includes('medicine')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('cashew') || searchTerms.includes('peanut') || searchTerms.includes('nut') || searchTerms.includes('almond')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('spice') || searchTerms.includes('pepper') || searchTerms.includes('cumin') || searchTerms.includes('chili') || searchTerms.includes('turmeric')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('tile') || searchTerms.includes('ceramic') || searchTerms.includes('porcelain') || searchTerms.includes('sanitary') || searchTerms.includes('bathroom') || searchTerms.includes('shower') || searchTerms.includes('basin') || searchTerms.includes('toilet')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('earthing') || searchTerms.includes('grounding') || searchTerms.includes('electrode')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('cotton') || searchTerms.includes('yarn') || searchTerms.includes('textile') || searchTerms.includes('fabric') || searchTerms.includes('linen')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200');
            } else if (searchTerms.includes('industrial') || searchTerms.includes('machine') || searchTerms.includes('tool') || searchTerms.includes('bearing')) {
                setDynamicImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200');
            } else {
                // Universal professional export fallback (industrial warehouse / cargo)
                setDynamicImageUrl(`https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200`);
            }
        }

        setDynamicFallbackUrl(`https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200&h=800`);

    }, [slug]);

    if (!keyword) return null;

    // 3 completely distinct page architectures so they never look like duplicate templates
    const layoutType = seed % 3;
    const capitalizedTitle = keyword.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const titles = [
        `${capitalizedTitle} - Professional B2B Export Dossier`,
        `Buy ${capitalizedTitle} Wholesale - Direct India Supplier`,
        `${capitalizedTitle} Export from India - 2026 Bulk Pricing Intelligence`,
        `Premium ${capitalizedTitle} for Industry - Verified Export Quality`
    ];

    const descriptions = [
        `Access strategic insights and procurement advantages for: ${keyword}. Patel Impex provides high-yield supply chains directly from India with certified QA.`,
        `Looking for ${keyword}? Secure your supply with our origin-direct logistics framework from India. ISO certified and trade-ready.`,
        `Technical specifications, logistics thesis, and market outlook for ${keyword} exports. Tier-1 sourcing from the Rajkot industrial cluster.`
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": capitalizedTitle,
        "description": descriptions[seed % descriptions.length],
        "brand": {
            "@type": "Brand",
            "name": "Patel Impex"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "offerCount": "10",
            "lowPrice": (seed % 500) + 200,
            "highPrice": (seed % 1000) + 1500,
            "availability": "https://schema.org/InStock"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `How to import ${keyword} from India?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Importing ${keyword} requires a verified partner like Patel Impex. We handle APEDA filings, FSSAI certification, and logistics to your destination port.`
                }
            },
            {
                "@type": "Question",
                "name": `What is the wholesale price of ${keyword}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `The price for ${keyword} varies based on technical specifications and volume. Contact our trade desk for a real-time CIF quote.`
                }
            }
        ]
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://patelimpex.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Market Intelligence",
                "item": "https://patelimpex.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": capitalizedTitle,
                "item": `https://patelimpex.com/more/${slug}`
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-green-100 selection:text-slate-900">
            <SEOHead
                title={titles[seed % titles.length]}
                description={descriptions[seed % descriptions.length]}
                canonicalUrl={`/more/${slug}`}
            />

            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqJsonLd)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbJsonLd)}
            </script>

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
            {/* Executive Summary Hero */}
            <section className="px-6 py-12 md:py-32 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            <ShieldCheck className="w-3 h-3" /> VERIFIED EXPORT ORIGIN
                        </div>
                        <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed border-l-4 border-emerald-600 pl-8 md:pl-12 italic">
                            "{getSmartContent(TradeIntelligence.getIntroduction, keyword, seed)}"
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6">
                            {[
                                { val: `${(seed % 15) + 85}%`, label: 'Yield Purity' },
                                { val: 'Tier 1', label: 'Logistic Node' },
                                { val: 'ISO 22K', label: 'QC Standard' },
                                { val: 'DIRECT', label: 'Source Model' }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 group hover:border-emerald-500 transition-colors">
                                    <span className="block text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{item.val}</span>
                                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{item.label}</span>
                                </div>
                            ))}
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

            {/* Technical Detail Complex */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-20">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <FileText className="text-green-600" /> Technical Specification Dossier
                                </h2>
                                <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600 leading-relaxed">
                                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-3 first-letter:float-left">
                                        {TradeIntelligence.getTechnicalDeepDive(keyword, seed)}
                                    </p>
                                    <p className="mt-8">
                                        {TradeIntelligence.getProcessingStandards(keyword, seed)}
                                    </p>
                                    <TradeRouteGlossary keyword={keyword} seed={seed} />
                                </div>
                            </div>

                            {/* Nested Grid for Financial & Regulatory */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Financial Integrity</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed italic">{TradeIntelligence.getFinancialThesis(keyword, seed)}</p>
                                </div>
                                <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Global Compliance</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed italic">{TradeIntelligence.getRegulatoryFramework(keyword, seed)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Widgets */}
                        <div className="space-y-8">
                            <TechnicalDatasheet keyword={keyword} seed={seed} />

                            <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] space-y-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <Zap className="w-24 h-24 text-green-500" />
                                </div>
                                <h4 className="text-2xl font-bold border-b border-white/10 pb-6">Market Outlook 2030</h4>
                                <p className="text-slate-400 text-sm font-light leading-relaxed">
                                    {TradeIntelligence.getFutureMarketAnalysis(keyword, seed)}
                                </p>
                                <div className="pt-4">
                                    <Link to="/contact" className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-[1.25rem] font-black uppercase tracking-widest text-[10px] transition-all">
                                        Request Intelligence Report <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-10 border border-slate-200 rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50">
                                <h4 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <ArrowRight className="w-4 h-4 text-green-600" /> Export Utilization
                                </h4>
                                <div className="space-y-6">
                                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                        <div className="bg-green-600 h-full w-[88%]" />
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        <span>Current Contract Load</span>
                                        <span className="text-green-600">88% Capacity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Laboratory & Certification Appendix */}
            <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-white p-12 md:p-16 border border-slate-200 shadow-2xl rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-bl-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000" />
                            <div className="relative space-y-10">
                                <div className="flex justify-between items-center border-b pb-8">
                                    <h3 className="text-2xl font-bold text-slate-900">Phytosanitary Protocol</h3>
                                    <Activity className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Pathogen Neutralization', value: 'STERILE' },
                                        { label: 'CO2 Anaerobic Sealing', value: 'COMPLIANT' },
                                        { label: 'NPPO Global Validation', value: 'CERTIFIED' },
                                        { label: 'Moisture Integrity Check', value: 'OPTIMAL' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <span>{item.label}</span>
                                            <span className="text-green-600">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-10 p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 text-sm leading-relaxed">
                                    "{TradeIntelligence.getGlobalPhytosanitaryProtocol(keyword, seed)}"
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="text-green-600 font-black tracking-[0.4em] text-[10px] uppercase block">Analysis Node 044</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tighter">Molecular & Chemical <br /> Verification Protocols</h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            {TradeIntelligence.getLaboratoryAnalysisSpectrum(keyword, seed)}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <span className="px-5 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">HPLC Analyzed</span>
                            <span className="px-5 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">ISO 9001:2015</span>
                            <span className="px-5 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">SGS Peer Review</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Matrix Section */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <span className="text-green-600 font-black tracking-[0.4em] text-[10px] uppercase block mb-6 px-4 py-2 border border-green-200 rounded-full inline-block">Supply Chain Architecture</span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-10">Industrial Application <br /> <span className="text-green-600 font-serif lowercase tracking-normal italic">spectrums</span></h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                            {TradeIntelligence.getIndustrialApplicationSpectrum(keyword, seed)}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: 'Supply Chain Digitization', body: TradeIntelligence.getSupplyChainDigitizationLogic(keyword, seed), icon: <Globe className="w-8 h-8" /> },
                            { title: 'Batch Intelligence', body: TradeIntelligence.getBatchProcessingIntelligence(keyword, seed), icon: <Network className="w-8 h-8" /> },
                            { title: 'Terminal Execution', body: TradeIntelligence.getPortTerminalExecutionLogic(keyword, seed), icon: <Anchor className="w-8 h-8" /> }
                        ].map((node, i) => (
                            <div key={i} className="group p-12 bg-slate-50 border border-slate-100 hover:border-green-300 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] transition-all duration-700 rounded-[3rem] relative overflow-hidden">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm border border-slate-100 text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                                    {node.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-green-600 transition-colors uppercase tracking-tight">{node.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed italic mb-10 group-hover:text-slate-700 transition-colors">
                                    {node.body}
                                </p>
                                <div className="flex items-center gap-2 text-green-600 font-black text-[10px] uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                                    Access Protocol <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedInterlinking keyword={keyword} seed={seed} />
        </div>
    );
}

// -------------------------------------------------------------
// Architecture 2: Editorial Trade Feature
// Modern web-magazine style, high contrast, staggered
// -------------------------------------------------------------
// -------------------------------------------------------------
function ArchitectureEditorial({ title, image, fallback, keyword, seed }: { title: string, image: string, fallback: string, keyword: string, seed: number }) {
    const shortTitlePart1 = title.split(' ')[0];
    const restOfTitle = title.split(' ').slice(1).join(' ');
    const shortKw = getShortKeyword(keyword);

    return (
        <div className="bg-white pt-24 min-h-screen">
            {/* High-Concept Magazine Header */}
            <section className="max-w-7xl mx-auto pt-16 md:pt-32 pb-24 border-b border-slate-900/10 px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-9">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-emerald-600 font-mono">VOL. {(seed % 99).toString().padStart(2, '0')} // INTEL_DOCK_{seed}</span>
                            <div className="h-px flex-1 bg-slate-100" />
                        </div>
                        <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-black text-slate-900 tracking-tighter leading-[0.8] uppercase">
                            <span className="block mb-6">{shortTitlePart1}</span>
                            <span className="text-emerald-600 font-serif lowercase tracking-normal italic text-[clamp(2rem,8vw,8rem)] block border-l-[12px] border-emerald-500 pl-10 bg-emerald-50/10 py-8 rounded-r-3xl">
                                {restOfTitle}
                            </span>
                        </h1>
                    </div>
                    <div className="lg:col-span-3 pb-4">
                        <div className="p-8 bg-slate-900 text-white rounded-[2rem] space-y-6">
                            <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">Executive Summary</p>
                            <p className="text-lg font-serif italic leading-snug">
                                "{getSmartContent(TradeIntelligence.getIntroduction, keyword, seed).split('. ')[0]}."
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <div className="w-8 h-8 rounded-full bg-emerald-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Origin Direct Alpha</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Staggered Narrative Grid */}
            <section className="max-w-7xl mx-auto py-24 px-6">
                <div className="grid lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-5 space-y-24">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-emerald-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100">
                                <FallbackImage
                                    src={image}
                                    fallbackSrc={fallback}
                                    alt={keyword}
                                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 aspect-[4/5] object-cover scale-105 group-hover:scale-100"
                                />
                                <div className="absolute top-8 right-8">
                                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        Batch_ID_{seed}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-none uppercase">
                                Disrupting Global Logistics <br /> with <span className="text-emerald-600">{shortKw}</span>
                            </h3>
                            <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-serif leading-relaxed italic border-l-2 border-slate-100 pl-10">
                                <p>{getSmartContent(TradeIntelligence.getTechnicalDeepDive, keyword, seed)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-32">
                        <div className="space-y-12">
                            <div className="flex items-center gap-6">
                                <span className="w-12 h-px bg-emerald-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600">Protocol 01: Supply Chain Alpha</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9] uppercase">The Era of <br /> Digitized Trade</h2>
                            <div className="text-2xl text-slate-500 font-light leading-relaxed">
                                {getSmartContent(TradeIntelligence.getSupplyChainDigitizationLogic, keyword, seed)}
                            </div>
                        </div>

                        <div className="bg-emerald-600 text-white p-12 md:p-24 rounded-[3rem] shadow-2xl shadow-emerald-600/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                                <Network className="w-64 h-64" />
                            </div>
                            <div className="relative z-10 space-y-12">
                                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Global Processing <br /> & TQM Standards</h3>
                                <p className="text-xl text-emerald-50 leading-relaxed font-light italic">
                                    {getSmartContent(TradeIntelligence.getProcessingStandards, keyword, seed)}
                                </p>
                                <div className="pt-8 flex flex-wrap gap-4">
                                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">ISO 22000</div>
                                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">FSSAI Certified</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <h2 className="text-5xl font-bold text-slate-900 tracking-tighter uppercase">Market Resilience <br /> Analysis 2026-2030</h2>
                            <div className="prose prose-slate prose-xl max-w-none text-slate-600 leading-relaxed italic">
                                <p>
                                    {getSmartContent(TradeIntelligence.getFutureMarketAnalysis, keyword, seed)}
                                </p>
                                <p className="mt-12 pt-12 border-t border-slate-100">
                                    {getSmartContent(TradeIntelligence.getMarketOutlook, keyword, seed)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Footer CTA */}
            <section className="bg-slate-50 py-32 px-6 border-t border-slate-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8 italic">
                            Secure Your <span className="text-emerald-600 font-serif lowercase tracking-normal px-4">procurement</span> pipeline today.
                        </h2>
                        <p className="text-xl text-slate-500 font-light italic leading-loose">
                            Connect with the Patel Impex trade desk for an exclusive origin intelligence brief and specialized pricing for {shortKw}.
                        </p>
                    </div>
                    <Link to="/contact" className="group shrink-0">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-700 shadow-2xl group-hover:scale-110">
                            <ArrowRight className="w-12 h-12 md:w-20 md:h-20 text-white" />
                        </div>
                    </Link>
                </div>
            </section>

            <RelatedInterlinking keyword={keyword} seed={seed} />
        </div>
    );
}

function ArchitectureIndustrial({ title, image, fallback, keyword, seed }: { title: string, image: string, fallback: string, keyword: string, seed: number }) {
    const shortTitle = title.split(' ').slice(0, 3).join(' ');
    const rest = title.split(' ').slice(3).join(' ');
    const shortKw = getShortKeyword(keyword);

    return (
        <div className="bg-[#050505] min-h-screen text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-white pt-24">
            {/* Cyber-Matrix Hero */}
            <section className="relative px-6 py-12 md:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(16,185,129,0.08),transparent_70%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                        <span className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-[0.5em]">Command_Center // Origin_Verification_Feed</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-12">
                            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black uppercase tracking-tighter leading-[0.8] text-white">
                                {shortTitle} <br />
                                <span className="text-emerald-500">{rest}</span>
                            </h1>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="bg-zinc-900 border border-white/10 px-6 py-3 rounded-xl text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">STATUS: ACTIVE_NODE</div>
                                <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-xl text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest">QC_CLEARED_2030</div>
                            </div>
                        </div>
                        <div className="space-y-12 lg:pt-32">
                            <div className="border-l-2 border-emerald-500 pl-8 md:pl-12">
                                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic mb-10">
                                    "{getSmartContent(TradeIntelligence.getIntroduction, keyword, seed).split('. ')[0]}."
                                </p>
                                <div className="grid grid-cols-2 gap-8 font-mono text-[10px]">
                                    <div className="space-y-2">
                                        <p className="text-zinc-600 uppercase tracking-widest">Molecular Stability</p>
                                        <p className="text-white font-black text-lg">99.98% Verification</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-zinc-600 uppercase tracking-widest">Global Reach</p>
                                        <p className="text-white font-black text-lg">Direct_CIF_Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Data Matrix */}
            <section className="py-20 md:py-32 px-6 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8 space-y-32">
                            {/* Visual Asset Container */}
                            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                                <FallbackImage
                                    src={image}
                                    fallbackSrc={fallback}
                                    alt={keyword}
                                    className="w-full aspect-video object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">REALTIME_ASSET_SCAN</span>
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">{shortKw} // Production Origin</h3>
                                    </div>
                                    <div className="bg-emerald-500 text-black p-4 md:p-6 rounded-2xl flex items-center justify-center font-black text-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-110 transition-transform">
                                        <Zap className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-16">
                                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">Technical Dossier <br /> & Process Intelligence</h2>
                                <div className="h-px w-full bg-gradient-to-r from-emerald-500 via-emerald-500/10 to-transparent" />
                                <div className="prose prose-invert prose-lg md:prose-2xl max-w-none text-zinc-400 font-light leading-relaxed italic">
                                    <p>{getSmartContent(TradeIntelligence.getTechnicalDeepDive, keyword, seed)}</p>
                                    <p className="mt-12 text-zinc-100 border-l-4 border-emerald-500 pl-8 md:pl-12">
                                        {getSmartContent(TradeIntelligence.getIndustrialApplicationSpectrum, keyword, seed)}
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-10 bg-zinc-900 border border-white/5 rounded-3xl space-y-6">
                                    <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Phytosanitary Protocol</h4>
                                    <p className="text-zinc-400 leading-relaxed italic">{TradeIntelligence.getGlobalPhytosanitaryProtocol(keyword, seed)}</p>
                                </div>
                                <div className="p-10 bg-zinc-900 border border-white/5 rounded-3xl space-y-6">
                                    <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Digitization Logic</h4>
                                    <p className="text-zinc-400 leading-relaxed italic">{TradeIntelligence.getSupplyChainDigitizationLogic(keyword, seed)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-12">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-8 md:p-12 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] space-y-10 backdrop-blur-md">
                                    <div>
                                        <h4 className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-[0.4em] mb-6">Financial_Thesis</h4>
                                        <p className="text-sm text-zinc-400 leading-relaxed italic">
                                            {getSmartContent(TradeIntelligence.getFinancialThesis, keyword, seed)}
                                        </p>
                                    </div>
                                    <div className="h-px w-full bg-white/5" />
                                    <div>
                                        <h4 className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-[0.4em] mb-6">Logistics_Protocol</h4>
                                        <p className="text-sm text-zinc-400 leading-relaxed italic">
                                            {getSmartContent(TradeIntelligence.getLogisticsThesis, keyword, seed)}
                                        </p>
                                    </div>
                                    <Link to="/contact" className="block w-full text-center bg-white text-black py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all duration-500 shadow-xl hover:shadow-emerald-500/20">
                                        Initiate_Global_Trade
                                    </Link>
                                </div>

                                <div className="p-8 md:p-12 bg-emerald-500 text-black rounded-[2.5rem] space-y-8 group shadow-[0_0_50px_rgba(16,185,129,0.1)] hover:bg-emerald-400 transition-colors cursor-default">
                                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">Regional <br /> Dynamics 2030</h3>
                                    <p className="text-sm font-bold leading-relaxed italic">
                                        {getSmartContent(TradeIntelligence.getRegionalDynamics, keyword, seed)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedInterlinking keyword={keyword} seed={seed} />
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

                        <div className="p-8 border-b border-slate-100">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">Financial Protocol</h4>
                            <p className="text-base text-slate-700 font-medium leading-snug">
                                {getSmartContent(TradeIntelligence.getFinancialThesis, keyword, seed).split('. ')[0]}.
                            </p>
                        </div>
                        <div className="p-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">Compliance Node</h4>
                            <p className="text-base text-slate-700 font-medium leading-snug">
                                {getSmartContent(TradeIntelligence.getRegulatoryFramework, keyword, seed).split('. ')[0]}.
                            </p>
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

            <RelatedInterlinking keyword={keyword} seed={seed} />
        </div>
    );
}
