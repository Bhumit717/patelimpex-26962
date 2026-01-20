
import { SEOPageData } from '../seo_data';

// Deterministic random number generator based on slug
const getRandomForSlug = (slug: string, max: number) => {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = ((hash << 5) - hash) + slug.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % max;
};

// Content Variations
const introVariations = [
    (product: string, country: string) => `Discover the finest quality **${product}** specifically curated for the **${country}** market. Patel Impex stands as a beacon of reliability and excellence in international trade.`,
    (product: string, country: string) => `Are you looking for premium **${product}** in **${country}**? You are in the right place. We specialize in exporting high-grade agri-products that meet strict international standards.`,
    (product: string, country: string) => `Exporting **${product}** to **${country}** requires expertise and precision. At Patel Impex, we deliver not just products, but a promise of quality, timeliness, and trust.`,
    (product: string, country: string) => `Bridging the gap between Indian farms and **${country}**'s market, we bring you top-tier **${product}**. Experience supply chain excellence with Patel Impex.`,
    (product: string, country: string) => `Your search for reliable **${product}** suppliers in **${country}** ends here. We ensure that every shipment adheres to the highest quality norms and regulatory requirements.`
];

const featureTitles = [
    "Why Choose Us?",
    "Our Competitive Advantage",
    "Why Patel Impex?",
    "The Patel Impex Promise",
    "Excellence in Export"
];

const featureVariations = [
    {
        title: "Premium Quality",
        desc: (product: string) => `We source only the best grade ${product} from certified farms.`
    },
    {
        title: "Global Standards",
        desc: (product: string, country: string) => `Our ${product} meets all import regulations for ${country}.`
    },
    {
        title: "Timely Logistics",
        desc: (_: string, country: string) => `Fast and secure shipping network covering major ports in ${country}.`
    },
    {
        title: "Cost Effective",
        desc: () => "Competitive pricing without compromising on quality."
    },
    {
        title: "Expert Support",
        desc: (_: string, country: string) => `24/7 dedicated support for our clients in ${country}.`
    },
    {
        title: "Custom Packaging",
        desc: () => "Tailored packaging solutions to meet your brand needs."
    }
];

const faqVariations = [
    {
        q: (product: string, country: string) => `What is the delivery time for ${product} to ${country}?`,
        a: (country: string) => `Shipments to ${country} usually take 20-35 days depending on the shipping line and destination port.`
    },
    {
        q: (product: string, country: string) => `Do you offer samples of ${product} for ${country} clients?`,
        a: () => `Yes, we provide samples for quality verification before you place a bulk order.`
    },
    {
        q: (product: string) => `Is your ${product} certified?`,
        a: () => `Absolutely. Our products undergo rigorous quality checks and come with all necessary certifications.`
    },
    {
        q: (product: string, country: string) => `What are the payment terms for importing ${product} to ${country}?`,
        a: () => `We offer flexible payment terms including L/C and T/T, tailored to suit international trade practices.`
    },
    {
        q: (product: string) => `Can you handle private labeling for ${product}?`,
        a: () => `Yes, we specialize in OEM and private labeling services to help establish your brand.`
    }
];

// --- PROCEDURAL DESIGN SYSTEM ---

const COLOR_PALETTES = [
    { name: 'Corporate Blue', primary: '#2563eb', secondary: '#475569', accent: '#dbeafe', bg: '#f8fafc' },
    { name: 'Eco Green', primary: '#15803d', secondary: '#44403c', accent: '#dcfce7', bg: '#fafaf9' },
    { name: 'Sunset Orange', primary: '#ea580c', secondary: '#431407', accent: '#ffedd5', bg: '#fff7ed' },
    { name: 'Royal Purple', primary: '#7c3aed', secondary: '#4c1d95', accent: '#ede9fe', bg: '#faf5ff' },
    { name: 'Ocean Teal', primary: '#0d9488', secondary: '#134e4a', accent: '#ccfbf1', bg: '#f0fdfa' },
    { name: 'Berry Red', primary: '#be123c', secondary: '#881337', accent: '#ffe4e6', bg: '#fff1f2' },
    { name: 'Slate Technical', primary: '#334155', secondary: '#0f172a', accent: '#e2e8f0', bg: '#f1f5f9' },
    { name: 'Earth Brown', primary: '#78350f', secondary: '#451a03', accent: '#fef3c7', bg: '#fffbeb' },
    { name: 'Indigo Deep', primary: '#4338ca', secondary: '#312e81', accent: '#e0e7ff', bg: '#eef2ff' },
    { name: 'Forest Dark', primary: '#14532d', secondary: '#064e3b', accent: '#d1fae5', bg: '#ecfdf5' },
    { name: 'Crimson Bold', primary: '#9f1239', secondary: '#881337', accent: '#ffe4e6', bg: '#fff1f2' },
    { name: 'Sky High', primary: '#0284c7', secondary: '#0c4a6e', accent: '#e0f2fe', bg: '#f0f9ff' },
    { name: 'Violet Haze', primary: '#6d28d9', secondary: '#4c1d95', accent: '#ddd6fe', bg: '#f5f3ff' },
    { name: 'Amber Glow', primary: '#b45309', secondary: '#78350f', accent: '#fef3c7', bg: '#fffbeb' },
    { name: 'Emerald City', primary: '#059669', secondary: '#064e3b', accent: '#d1fae5', bg: '#ecfdf5' },
    { name: 'Rose Gold', primary: '#e11d48', secondary: '#9f1239', accent: '#ffe4e6', bg: '#fff1f2' },
    { name: 'Midnight Blue', primary: '#1e3a8a', secondary: '#172554', accent: '#dbeafe', bg: '#eff6ff' },
    { name: 'Olive Drab', primary: '#65a30d', secondary: '#365314', accent: '#ecfccb', bg: '#f7fee7' },
    { name: 'Cyber Pink', primary: '#db2777', secondary: '#831843', accent: '#fce7f3', bg: '#fdf2f8' },
    { name: 'Steel Grey', primary: '#475569', secondary: '#1e293b', accent: '#e2e8f0', bg: '#f8fafc' },
];

const HERO_STYLES = ['split_left', 'split_right', 'centered', 'card_overlay', 'minimal'];
const FEATURE_STYLES = ['grid_cards', 'list_icons', 'zigzag', 'minimal_grid'];
const PATTERNS = ['dots', 'lines', 'checkers', 'none'];

export const generateDesignConfig = (slug: string) => {
    // Deterministic selection based on slug hash
    const paletteIndex = getRandomForSlug(slug + 'color', COLOR_PALETTES.length);
    const heroIndex = getRandomForSlug(slug + 'hero', HERO_STYLES.length);
    const featureIndex = getRandomForSlug(slug + 'feat_style', FEATURE_STYLES.length);
    const patternIndex = getRandomForSlug(slug + 'pattern', PATTERNS.length);

    return {
        palette: COLOR_PALETTES[paletteIndex],
        heroStyle: HERO_STYLES[heroIndex],
        featureStyle: FEATURE_STYLES[featureIndex],
        pattern: PATTERNS[patternIndex],
        // Add random slight borderRadius variation to feel organic
        borderRadius: getRandomForSlug(slug + 'radius', 3) === 0 ? 'rounded-none' : getRandomForSlug(slug + 'radius', 3) === 1 ? 'rounded-lg' : 'rounded-2xl'
    };
};

export const generatePageContent = (slug: string, data: SEOPageData) => {
    const { product, country } = data;

    // 1. Select Layout Variation (0: Standard, 1: Reversed, 2: Centered)
    const layoutId = getRandomForSlug(slug, 3);

    // 2. Select Intro Text
    const introIndex = getRandomForSlug(slug + "intro", introVariations.length);
    const introText = introVariations[introIndex](product, country);

    // 3. Select Feature Section Title
    const featureTitleIndex = getRandomForSlug(slug + "ftitle", featureTitles.length);
    const featureTitle = featureTitles[featureTitleIndex];

    // 4. Select and Shuffle Features (Pick 3 distinct)
    const features = [];
    let fIdx = getRandomForSlug(slug + "features", featureVariations.length);
    for (let i = 0; i < 3; i++) {
        const feature = featureVariations[(fIdx + i) % featureVariations.length];
        features.push({
            title: feature.title,
            description: feature.desc(product, country)
        });
    }

    // 5. Select and Shuffle FAQs (Pick 3 distinct)
    const faqs = [];
    let faqIdx = getRandomForSlug(slug + "faq", faqVariations.length);
    for (let i = 0; i < 3; i++) {
        const faq = faqVariations[(faqIdx + i) % faqVariations.length];
        faqs.push({
            question: faq.q(product, country),
            answer: faq.a(country)
        });
    }

    return {
        layoutId,
        introText,
        featureTitle,
        features,
        faqs,
        design: generateDesignConfig(slug) // Attach design config
    };
};
