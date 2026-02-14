import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Wheat } from "lucide-react";
import sharbatiWheatImg from "@/assets/products/subtypes/sharbati-wheat.png";
import durumWheatImg from "@/assets/products/subtypes/durum-wheat.png";
import lokwanWheatImg from "@/assets/products/subtypes/lokwan-wheat.png";
import breadWheatImg from "@/assets/products/subtypes/bread-wheat.png";
import bhaliaWheatImg from "@/assets/products/subtypes/bhalia-wheat.png";
import hd2687WheatImg from "@/assets/products/subtypes/hd-2687-wheat.png";
import SEOHead from "@/components/SEOHead";

const WheatProductsPage = () => {
    const wheatVarieties = [
        {
            name: "Sharbati Wheat",
            image: sharbatiWheatImg,
            link: "/products/wheat/sharbati",
            description: "Premium golden wheat variety known for its superior quality and taste",
            specs: ["Golden color", "High protein content", "Excellent for chapati/roti"]
        },
        {
            name: "Durum Wheat",
            image: durumWheatImg,
            link: "/products/wheat/durum",
            description: "Hard wheat variety ideal for pasta and semolina production",
            specs: ["High gluten content", "Amber colored", "Premium pasta grade"]
        },
        {
            name: "Lokwan Wheat",
            image: lokwanWheatImg,
            link: "/products/wheat/lokwan",
            description: "Popular Indian wheat variety with excellent milling characteristics",
            specs: ["Medium protein", "Good yield", "Versatile applications"]
        },
        {
            name: "Bread Wheat",
            image: breadWheatImg,
            link: "/products/wheat/bread-wheat",
            description: "High-quality wheat specifically suited for bread making",
            specs: ["High protein 12-14%", "Strong gluten", "Bakery grade"]
        },
        {
            name: "Bhalia Wheat",
            image: bhaliaWheatImg,
            link: "/products/wheat/bhalia",
            description: "Premium long-grain wheat rich in protein and gluten, known for sweet taste",
            specs: ["Rich in Gluten", "Sweet Taste", "Long Grain"]
        },
        {
            name: "HD 2687 (Shreshth)",
            image: hd2687WheatImg,
            link: "/products/wheat/hd-2687",
            description: "High-yielding wheat variety with excellent bread-making qualities",
            specs: ["High Yield", "Good Sedimentation", "Disease Resistant"]
        }
    ];

    return (
        <>
            <SEOHead
                title="Wheat Products | Premium Indian Wheat Export | Patel Impex"
                description="Export quality wheat varieties from India including Sharbati, Durum, Lokwan, and Bread wheat. Premium quality for global markets."
                canonicalUrl="/products/wheat"
            />
            <div className="min-h-screen bg-white">
                <Navigation />

                {/* Hero Section */}
                <section className="pt-40 pb-20 bg-white">
                    <div className="container mx-auto px-4">
                        <Link to="/products" className="inline-flex items-center text-slate-400 hover:text-green-600 mb-8 font-graduate uppercase text-xs tracking-widest transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Products
                        </Link>

                        <div className="max-w-4xl">
                            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 mb-8">
                                <Wheat className="h-4 w-4 text-green-600 mr-2" />
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] font-graduate">Premium Grains</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 font-graduate uppercase tracking-tighter">
                                Wheat <span className="text-green-600 font-fredericka tracking-tight lowercase">Varieties</span>
                            </h1>
                            <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed mb-8">
                                Premium quality wheat varieties from India's finest growing regions. Each variety carefully selected for specific applications and superior quality standards.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="pb-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {wheatVarieties.map((variety, index) => (
                                <Link
                                    key={index}
                                    to={variety.link}
                                    className="group nm-card !p-0 overflow-hidden hover:-translate-y-3 transition-all duration-500 bg-white block"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-80 overflow-hidden bg-white p-12 flex items-center justify-center">
                                        <img
                                            src={variety.image}
                                            alt={variety.name}
                                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-10 border-t border-slate-100">
                                        <h3 className="text-3xl font-black text-slate-900 mb-4 font-graduate uppercase tracking-tight group-hover:text-green-600 transition-colors">
                                            {variety.name}
                                        </h3>

                                        <p className="text-slate-500 font-fondamento italic text-lg mb-6 leading-relaxed">
                                            {variety.description}
                                        </p>

                                        {/* Specs */}
                                        <div className="space-y-3 mb-8">
                                            {variety.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center text-xs font-bold font-graduate uppercase tracking-widest text-slate-400">
                                                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                                                    <span>{spec}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center text-green-600 font-graduate font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                                            <span>View Full Specifications</span>
                                            <ArrowRight className="h-4 w-4 ml-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default WheatProductsPage;
