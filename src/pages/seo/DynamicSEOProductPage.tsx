import React, { useMemo } from 'react';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, CheckCircle, Truck, Award, Users, Globe, Package, BarChart3, ShieldCheck, Leaf, Star, Anchor, Sun, Zap, Box } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { seoPagesData } from '../../seo_data';
import SEOHead from "@/components/SEOHead";
import { generatePageContent } from '@/utils/seoContentGenerator';

const DynamicSEOProductPage = () => {
    const { slug } = useParams();

    // Find page data
    const pageIndex = useMemo(() => {
        return seoPagesData.findIndex(p => p.slug === slug);
    }, [slug]);

    const pageData = seoPagesData[pageIndex];

    if (!pageData) {
        return <Navigate to="/404" replace />;
    }

    const { product, country } = pageData;
    const title = `${product} Export to ${country}`;

    // Generate content & design config
    const content = useMemo(() => {
        return generatePageContent(slug || '', pageData);
    }, [slug, pageData]);

    const { introText, featureTitle, features, faqs, design } = content;

    // Apply CSS Variables for dynamic coloring
    const pageStyle = {
        '--primary': design.palette.primary,
        '--secondary': design.palette.secondary,
        '--accent': design.palette.accent,
        '--bg': design.palette.bg,
    } as React.CSSProperties;

    // Dynamic JSON-LD
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${product} for Export to ${country}`,
        "description": introText,
        "brand": { "@type": "Brand", "name": "Patel Impex" },
        "offers": {
            "@type": "Offer",
            "url": `https://patelimpex.com/seo/${slug}`,
            "availability": "https://schema.org/InStock"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
    };

    // --- RENDER HELPERS ---

    const renderHero = () => {
        const commonContent = (
            <>
                <span className="inline-block py-2 px-4 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-white/20 text-white bg-white/10 uppercase tracking-widest">
                    Exporting Global Excellence
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
                    {product} <span className="text-[var(--accent)]">/</span> {country}
                </h1>
                <p className="text-xl text-white/90 mb-10 leading-relaxed font-light max-w-xl">
                    {introText}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className={`px-8 py-4 ${design.borderRadius} font-bold bg-[var(--primary)] text-white hover:brightness-110 transition-all shadow-xl hover:scale-105`}>
                        Request Quote
                    </Link>
                    <Link to="/products" className={`px-8 py-4 ${design.borderRadius} font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all`}>
                        View Details
                    </Link>
                </div>
            </>
        );

        if (design.heroStyle === 'centered') {
            return (
                <div className="relative pt-20">
                    <div className="absolute inset-0 z-0 bg-slate-900">
                        <img src="https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80" alt={title} className="w-full h-[70vh] object-cover opacity-40 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent" />
                    </div>
                    <div className="relative z-10 container mx-auto px-6 h-[60vh] flex flex-col justify-center items-center text-center">
                        {commonContent}
                    </div>
                </div>
            );
        }

        if (design.heroStyle === 'split_right') {
            return (
                <div className="relative pt-20 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10 w-full sm:w-2/3" />
                    <img src="https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80" alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 ml-auto sm:w-2/3" />
                    <div className="relative z-20 container mx-auto px-6 py-24 sm:py-32">
                        <div className="max-w-2xl">{commonContent}</div>
                    </div>
                </div>
            );
        }

        if (design.heroStyle === 'card_overlay') {
            return (
                <div className="relative pt-32 pb-48 bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80" alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div className="relative z-10 container mx-auto px-6 flex justify-center">
                        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 p-12 ${design.borderRadius} max-w-3xl text-center`}>
                            {commonContent}
                        </div>
                    </div>
                </div>
            );
        }

        // Default 'split_left' or 'minimal' fallback
        return (
            <div className="relative pt-20 bg-[var(--primary)]">
                <div className="absolute inset-0 bg-slate-900 mix-blend-multiply opacity-50" />
                <div className="container mx-auto px-6 py-24 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>{commonContent}</div>
                    <div className={`hidden lg:block relative h-[500px] ${design.borderRadius} overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-700`}>
                        <img src="https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80" alt={title} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        );
    };

    const renderFeatures = () => {
        const icons = [CheckCircle, Globe, Truck, Package, ShieldCheck, Leaf];

        if (design.featureStyle === 'list_icons') {
            return (
                <div className="max-w-3xl mx-auto space-y-8">
                    {features.map((f, i) => {
                        const Icon = icons[i % icons.length];
                        return (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className={`w-12 h-12 shrink-0 ${design.borderRadius} flex items-center justify-center bg-[var(--accent)] text-[var(--primary)] group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--secondary)] mb-2">{f.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{f.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }

        if (design.featureStyle === 'zigzag') {
            return (
                <div className="space-y-16">
                    {features.map((f, i) => {
                        const Icon = icons[i % icons.length];
                        return (
                            <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`flex-1 p-8 bg-white ${design.borderRadius} shadow-sm border border-[var(--accent)]`}>
                                    <Icon className="w-8 h-8 text-[var(--primary)] mb-4" />
                                    <h3 className="text-2xl font-bold text-[var(--secondary)] mb-3">{f.title}</h3>
                                    <p className="text-slate-600">{f.description}</p>
                                </div>
                                <div className="flex-1 opacity-20">
                                    <div className={`w-full h-48 ${design.borderRadius} bg-[var(--primary)] pattern-dots`} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }

        // Default 'grid_cards'
        return (
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((f, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                        <div key={i} className={`bg-white p-8 ${design.borderRadius} shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[var(--primary)]`}>
                            <Icon className="w-10 h-10 text-[var(--primary)] mb-6" />
                            <h3 className="text-lg font-bold text-[var(--secondary)] mb-3">{f.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div style={pageStyle} className="min-h-screen bg-[var(--bg)] font-sans">
            <SEOHead
                title={`${title} | Premium Quality | Patel Impex`}
                description={introText.substring(0, 160)}
                canonicalUrl={`/seo/${slug}`}
                ogImage="https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80"
                jsonLd={[schemaOrg, faqSchema]}
            />
            <Navigation />

            {renderHero()}

            <div className="py-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[var(--secondary)] mb-4">{featureTitle}</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto" />
                </div>
                {renderFeatures()}
            </div>

            <div className="py-24 bg-[var(--accent)]/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-[var(--secondary)] mb-12">Expert Insights</h2>
                    <div className={`grid md:grid-cols-2 gap-6`}>
                        {faqs.map((f, i) => (
                            <div key={i} className={`bg-white p-6 ${design.borderRadius} shadow-sm`}>
                                <h3 className="font-bold text-[var(--primary)] mb-2 flex items-start gap-2">
                                    <span className="text-black/20">0{i + 1}.</span> {f.question}
                                </h3>
                                <p className="text-slate-600 text-sm pl-8">{f.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
            <WhatsAppChat />
        </div>
    );
};

export default DynamicSEOProductPage;
