import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Candy, Award, Globe, ArrowRight } from "lucide-react";
import sugarImage from "@/assets/agricultural-export-processing.jpg";
import SEOHead from "@/components/SEOHead";

// Product Images
import rawCaneSugarImg from "@/assets/products/subtypes/raw-cane-sugar.png";
import refinedM30Img from "@/assets/products/subtypes/refined-white-sugar-m30.png";
import refinedS30Img from "@/assets/products/subtypes/refined-white-sugar-s30.png";
import whiteCrystalImg from "@/assets/products/subtypes/white-crystal-sugar.png";
import brownSugarImg from "@/assets/products/subtypes/brown-sugar.png";
import organicSugarImg from "@/assets/products/subtypes/organic-sugar.png";
import jaggeryPowderImg from "@/assets/products/subtypes/jaggery-powder.png";
import jaggeryRoundsImg from "@/assets/products/subtypes/jaggery-rounds.png";
import pharmaSugarImg from "@/assets/products/subtypes/pharmaceutical-sugar.png";
import rawSugarImg from "@/assets/products/subtypes/raw-sugar.png";

const SugarExport = () => {
    const sugarTypes = [
        {
            type: "Raw Cane Sugar",
            grade: "High Pol 98.5-99.5%",
            specs: "Polarization 98.5% min",
            markets: "Global",
            link: "/products/sugar/raw-sugar",
            image: rawCaneSugarImg
        },
        {
            type: "Raw Sugar",
            grade: "Standard",
            specs: "Unrefined",
            markets: "Global",
            link: "/products/sugar/raw-sugar",
            image: rawSugarImg
        },
        {
            type: "Refined White Sugar",
            grade: "M-30 Grade",
            specs: "Sparkling White",
            markets: "Europe, Middle East",
            link: "/products/sugar/refined-white-sugar",
            image: refinedM30Img
        },
        {
            type: "Refined White Sugar",
            grade: "S-30 Grade",
            specs: "Pure & Clean",
            markets: "Global",
            link: "/products/sugar/refined-white-sugar",
            image: refinedS30Img
        },
        {
            type: "White Crystal Sugar",
            grade: "Refined",
            specs: "High Purity",
            markets: "Global",
            link: "/products/sugar/white-crystal-sugar",
            image: whiteCrystalImg
        },
        {
            type: "Brown Sugar",
            grade: "Premium",
            specs: "Rich Molasses",
            markets: "Europe, USA",
            link: "/products/sugar/brown-sugar",
            image: brownSugarImg
        },
        {
            type: "Organic Sugar",
            grade: "Certified Organic",
            specs: "Non-GMO, Chemical-free",
            markets: "USA, Europe",
            link: "/products/sugar/organic-sugar",
            image: organicSugarImg
        },
        {
            type: "Jaggery Powder",
            grade: "Natural",
            specs: "Chemical Free",
            markets: "Global",
            link: "/products/sugar/jaggery",
            image: jaggeryPowderImg
        },
        {
            type: "Jaggery Rounds",
            grade: "Traditional",
            specs: "Pure Cane",
            markets: "Global",
            link: "/products/sugar/jaggery",
            image: jaggeryRoundsImg
        },
        {
            type: "Pharma Grade Sugar",
            grade: "IP/BP/USP",
            specs: "High Purity",
            markets: "Medical/Pharmaceutical",
            link: "/products/sugar/pharmaceutical-sugar",
            image: pharmaSugarImg
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEOHead title="Sugar Export | Patel Impex" description="Sugar Export - Expert services and information by Patel Impex. Premium quality sugar varieties for global markets." canonicalUrl="/more/sugar-export" />
            <Navigation />

            <section className="pt-32 pb-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <Badge variant="outline" className="mb-4 px-4 py-1 text-green-600 border-green-200 bg-green-50">
                                <Candy className="w-4 h-4 mr-2" />
                                Sugar Export
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 font-graduate uppercase tracking-tighter">
                                Premium quality <span className="text-green-600 font-fredericka tracking-tight lowercase">Sugar</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 font-fondamento italic">
                                We export a wide range of premium Indian sugar varieties, compliant with international ICUMSA standards and pharmaceutical requirements.
                            </p>
                            <Button size="lg" asChild className="nm-btn-green !py-6 px-10">
                                <Link to="/contact" className="font-graduate uppercase tracking-widest text-sm">Export Inquiry</Link>
                            </Button>
                        </div>
                        <div className="relative animate-scale-in">
                            <img
                                src={sugarImage}
                                alt="Sugar Export - Premium Indian sugar processing"
                                className="rounded-[40px] shadow-2xl w-full h-[400px] object-cover border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 font-graduate uppercase">Available <span className="text-green-600 font-fredericka tracking-tight lowercase">Varieties</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sugarTypes.map((sugar, index) => (
                            <Link
                                key={index}
                                to={sugar.link}
                                className="group block"
                            >
                                <Card className="nm-card !p-0 overflow-hidden border-none group-hover:-translate-y-2 transition-all duration-500 h-full">
                                    <CardHeader className="bg-white p-0 border-b border-slate-100">
                                        <div className="h-48 w-full overflow-hidden p-6 flex items-center justify-center bg-slate-50">
                                            <img
                                                src={sugar.image}
                                                alt={sugar.type}
                                                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <CardTitle className="flex flex-col gap-2 font-graduate uppercase tracking-tight text-xl group-hover:text-green-600 transition-colors">
                                                <span>{sugar.type}</span>
                                                <Badge variant="outline" className="w-fit font-bold text-[10px]">{sugar.grade}</Badge>
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-8 space-y-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                                    <Award className="w-4 h-4 text-green-600" />
                                                </div>
                                                <span className="text-sm font-fondamento italic text-slate-600">Specs: {sugar.specs}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                                    <Globe className="w-4 h-4 text-slate-400" />
                                                </div>
                                                <span className="text-sm font-fondamento italic text-slate-500">Markets: {sugar.markets}</span>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex items-center text-green-600 font-graduate font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                                            <span>View Details</span>
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SugarExport;

