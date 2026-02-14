import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Candy } from "lucide-react";
// Product Images
import rawCaneSugarImg from "@/assets/products/subtypes/raw-cane-sugar.png";
import rawSugarImg from "@/assets/products/subtypes/raw-sugar.png";
import refinedM30Img from "@/assets/products/subtypes/refined-white-sugar-m30.png";
import refinedS30Img from "@/assets/products/subtypes/refined-white-sugar-s30.png";
import whiteCrystalImg from "@/assets/products/subtypes/white-crystal-sugar.png";
import brownSugarImg from "@/assets/products/subtypes/brown-sugar.png";
import organicSugarImg from "@/assets/products/subtypes/organic-sugar.png";
import jaggeryRoundsImg from "@/assets/products/subtypes/jaggery-rounds.png";
import jaggeryPowderImg from "@/assets/products/subtypes/jaggery-powder.png";
import pharmaSugarImg from "@/assets/products/subtypes/pharmaceutical-sugar.png";
import SEOHead from "@/components/SEOHead";

const SugarProductsPage = () => {
    const sugarVarieties = [
        {
            name: "Raw Sugar (VHP)",
            image: rawCaneSugarImg,
            link: "/products/sugar/raw-sugar",
            description: "Very High Polarization raw sugar with 98.5% minimum polarization",
            specs: ["Polarization 98.5% min", "VHP Grade", "Light Brown Color"]
        },
        {
            name: "Raw Sugar (Standard)",
            image: rawSugarImg,
            link: "/products/sugar/raw-sugar",
            description: "Standard quality raw sugar, unrefined and rich in molasses",
            specs: ["Unrefined", "Rich Flavor", "Natural Brown"]
        },
        {
            name: "Refined White Sugar (M-30)",
            image: refinedM30Img,
            link: "/products/sugar/refined-white-sugar",
            description: "Premium M-30 grade refined white sugar, sparkling white and pure",
            specs: ["ICUMSA 45-100", "M-30 Grade", "Sparkling White"]
        },
        {
            name: "Refined White Sugar (S-30)",
            image: refinedS30Img,
            link: "/products/sugar/refined-white-sugar",
            description: "High quality S-30 grade refined sugar for daily consumption",
            specs: ["Clean & Pure", "S-30 Grade", "Daily Use"]
        },
        {
            name: "White Crystal Sugar",
            image: whiteCrystalImg,
            link: "/products/sugar/white-crystal-sugar",
            description: "Large crystal white sugar known for its purity and clarity",
            specs: ["Large Crystals", "High Purity", "Premium Quality"]
        },
        {
            name: "Brown Sugar",
            image: brownSugarImg,
            link: "/products/sugar/brown-sugar",
            description: "Natural brown sugar with rich molasses content and flavor",
            specs: ["Rich Molasses", "Moist Texture", "Caramel Flavor"]
        },
        {
            name: "Organic Sugar",
            image: organicSugarImg,
            link: "/products/sugar/organic-sugar",
            description: "USDA & EU certified organic sugar, Non-GMO and chemical-free",
            specs: ["USDA Organic", "Non-GMO", "Chemical-free"]
        },
        {
            name: "Jaggery Rounds (Gur)",
            image: jaggeryRoundsImg,
            link: "/products/sugar/jaggery",
            description: "Traditional Indian jaggery balls/rounds, rich in minerals",
            specs: ["Natural Sweetener", "Traditional Rounds", "Mineral Rich"]
        },
        {
            name: "Jaggery Powder",
            image: jaggeryPowderImg,
            link: "/products/sugar/jaggery",
            description: "Free-flowing natural jaggery powder for easy usage",
            specs: ["Powder Form", "Easy to Use", "Chemical Free"]
        },
        {
            name: "Pharmaceutical Grade Sugar",
            image: pharmaSugarImg,
            link: "/products/sugar/pharmaceutical-sugar",
            description: "Ultra-pure pharmaceutical grade sugar meeting USP/BP standards",
            specs: ["USP/BP Compliant", "99.9% Purity", "GMP Certified"]
        }
    ];

    return (
        <>
            <SEOHead
                title="Sugar Products | Premium Indian Sugar Export | Patel Impex"
                description="Export quality sugar varieties from India including Raw Sugar, Refined White Sugar, Organic Sugar, Jaggery, and Pharmaceutical Grade Sugar. Premium quality for global markets."
                canonicalUrl="/products/sugar"
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
                                <Candy className="h-4 w-4 text-green-600 mr-2" />
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] font-graduate">Premium Sweeteners</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 font-graduate uppercase tracking-tighter">
                                Sugar <span className="text-green-600 font-fredericka tracking-tight lowercase">Varieties</span>
                            </h1>
                            <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed mb-8">
                                Premium quality sugar varieties from India compliant with international ICUMSA standards and pharmaceutical requirements. Each variety carefully processed for specific applications and superior quality standards.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="pb-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {sugarVarieties.map((variety, index) => (
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

export default SugarProductsPage;
