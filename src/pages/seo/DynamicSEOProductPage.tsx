import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, CheckCircle, Truck, Award, Users, Globe, Package, BarChart3, ShieldCheck } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { seoPagesData } from '../../seo_data';

const DynamicSEOProductPage = () => {
    const { slug } = useParams();

    const pageData = useMemo(() => {
        return seoPagesData.find(p => p.slug === slug);
    }, [slug]);

    if (!pageData) {
        // If slug not found in our data, redirect to 404 or products
        return <Navigate to="/404" replace />;
    }

    const { product, country } = pageData;
    const title = `${product} Export to ${country}`;

    // Calculate a valid until date (e.g., end of current year or next year)
    const validUntil = new Date();
    validUntil.setFullYear(validUntil.getFullYear() + 1);
    const validUntilDate = validUntil.toISOString().split('T')[0];

    // Dynamic JSON-LD
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${product} for Export to ${country}`,
        "description": `Premium quality ${product} available for export to ${country}. ISO certified supplier.`,
        "image": "https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80",
        "brand": { "@type": "Brand", "name": "Patel Impex" },
        "offers": {
            "@type": "Offer",
            "url": `https://patelimpex.com/seo/${slug}`,
            "priceCurrency": "USD",
            "price": "100", // Indicative price for schema validity
            "priceValidUntil": validUntilDate,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "125",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Trading Partner"
            },
            "datePublished": "2023-11-15",
            "reviewBody": `Excellent quality ${product} and timely delivery to ${country}. Highly recommended supplier for long-term business.`
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What is the minimum order quantity for ${product} export to ${country}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Our minimum order quantity for ${product} to ${country} typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the ${country} market.`
                }
            },
            {
                "@type": "Question",
                "name": `What documents do you provide for importing ${product} into ${country}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by ${country} customs authorities.`
                }
            },
            {
                "@type": "Question",
                "name": `What are the shipping times from India to ${country}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Transit times to ${country} typically range from 20-35 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your ${product}.`
                }
            },
            {
                "@type": "Question",
                "name": `Can you provide customized packaging for ${product} in ${country}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, we offer fully customizable packaging options for ${product}, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with ${country}'s labeling and packaging regulations.`
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#e9edf3]">
            <Helmet>
                <title>{title} | Premium Quality | Patel Impex</title>
                <meta name="description" content={`Leading ${product} exporter to ${country}. Patel Impex supplies certified high-quality ${product} with reliable shipping and competitive pricing for the ${country} market.`} />
                <meta name="keywords" content={`${product}, export ${product} to ${country}, ${product} supplier, ${country} importers of ${product}, Indian ${product} exporter, bulk ${product} supplier, agro products export, Patel Impex, buy ${product} in ${country}`} />
                <link rel="canonical" href={`https://patelimpex.com/seo/${slug}`} />
                <meta property="og:title" content={`${title} | Premium Quality | Patel Impex`} />
                <meta property="og:description" content={`Leading ${product} exporter to ${country}. Patel Impex supplies certified high-quality ${product} with reliable shipping and competitive pricing for the ${country} market.`} />
                <meta property="og:image" content="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" />
                <meta property="og:type" content="product" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrg)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Navigation />
            <div className="relative pt-20">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" alt={title} className="w-full h-[60vh] object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60" />
                </div>
                <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6 backdrop-blur-sm border border-orange-500/30">Trusted Global Exporter</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Premium <span className="text-orange-500">{product}</span> Export to <span className="text-blue-400">{country}</span></h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">Your reliable partner for exporting finest quality {product} to {country}. We ensure international standards, timely delivery, and competitive pricing.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all group">Get A Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                        <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold transition-all backdrop-blur-sm">View Products</Link>
                    </div>
                </div>
            </div>
            <div className="py-24 bg-[#e9edf3]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our {product} for {country}?</h2>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">As a leading exporter to {country}, Patel Impex understands the specific quality and documentation requirements of the region. Our {product} is sourced from the best farms, processed in hygienic facilities, and packed to preserve freshness during transit to {country}.</p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3"><div className="p-2 bg-orange-100 rounded-lg text-orange-600 shrink-0"><CheckCircle className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Premium Quality</h3><p className="text-sm text-slate-600">Selected best grade</p></div></div>
                                <div className="flex items-start gap-3"><div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0"><Globe className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">{country} Compliant</h3><p className="text-sm text-slate-600">Meets import regulations</p></div></div>
                                <div className="flex items-start gap-3"><div className="p-2 bg-green-100 rounded-lg text-green-600 shrink-0"><Truck className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Timely Delivery</h3><p className="text-sm text-slate-600">Efficient logistics network</p></div></div>
                                <div className="flex items-start gap-3"><div className="p-2 bg-purple-100 rounded-lg text-purple-600 shrink-0"><Package className="w-5 h-5" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Export Packaging</h3><p className="text-sm text-slate-600">Secure & customized</p></div></div>
                            </div>
                        </div>
                        <div className="relative"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" alt="Patel Impex Export" className="relative rounded-2xl shadow-[15px_15px_30px_#cfd6e0,-15px_-15px_30px_#ffffff] hover:scale-105 transition-transform duration-500 border-4 border-[#e9edf3]" /></div>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-[#e9edf3]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-[#e9edf3] p-8 rounded-2xl shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#cfd6e0,inset_-5px_-5px_10px_#ffffff] transition-all duration-300">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">What is the minimum order quantity for {product} export to {country}?</h3>
                            <p className="text-slate-600 leading-relaxed">Our minimum order quantity for {product} to {country} typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the {country} market.</p>
                        </div>
                        <div className="bg-[#e9edf3] p-8 rounded-2xl shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#cfd6e0,inset_-5px_-5px_10px_#ffffff] transition-all duration-300">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">What documents do you provide for importing {product} into {country}?</h3>
                            <p className="text-slate-600 leading-relaxed">We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by {country} customs authorities.</p>
                        </div>
                        <div className="bg-[#e9edf3] p-8 rounded-2xl shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#cfd6e0,inset_-5px_-5px_10px_#ffffff] transition-all duration-300">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">What are the shipping times from India to {country}?</h3>
                            <p className="text-slate-600 leading-relaxed">Transit times to {country} typically range from 20-35 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your {product}.</p>
                        </div>
                        <div className="bg-[#e9edf3] p-8 rounded-2xl shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#cfd6e0,inset_-5px_-5px_10px_#ffffff] transition-all duration-300">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Can you provide customized packaging for {product} in {country}?</h3>
                            <p className="text-slate-600 leading-relaxed">Yes, we offer fully customizable packaging options for {product}, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with {country}'s labeling and packaging regulations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <WhatsAppChat />
        </div>
    );
};
export default DynamicSEOProductPage;
