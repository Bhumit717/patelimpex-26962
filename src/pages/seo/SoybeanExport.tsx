import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Star, Award } from 'lucide-react';

const SoybeanExport = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Soybean Meal Exporter in India | High Protein Soya Meal | Patel Impex</title>
                <meta name="description" content="Patel Impex is a leading exporter of Soybean Meal from India. We supply high-quality, protein-rich soya meal for animal feed and industrial use to global markets." />
                <link rel="canonical" href="https://patelimpex.com/seo/soybean-export" />
                <meta property="og:title" content="Soybean Meal Exporter in India | High Protein Soya Meal" />
                <meta property="og:description" content="Patel Impex is a leading exporter of Soybean Meal from India. We supply high-quality, protein-rich soya meal for animal feed and industrial use." />
            </Helmet>
            <Navigation />
            <div className="pt-32 pb-20 bg-yellow-600 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Indian <span className="text-yellow-200">Soybean Meal</span> Export</h1>
                <p className="text-xl max-w-2xl mx-auto opacity-90">Premium quality, protein-rich Soya Meal for global markets</p>
            </div>
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Why Our Soybean Meal?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">High Protein</h3>
                        <p className="text-slate-600">Rich in protein content essential for livestock feed.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Non-GMO</h3>
                        <p className="text-slate-600">Sourced from certified non-GMO soybean crops.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Best Quality</h3>
                        <p className="text-slate-600">Processed under strict hygiene and quality controls.</p>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">What is the protein content of your Soybean Meal?</h3>
                            <p className="text-slate-600 leading-relaxed">Our Soybean Meal typically has a protein content of 46% to 48%, making it an excellent source of protein for animal feed applications.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">What is the minimum order quantity?</h3>
                            <p className="text-slate-600 leading-relaxed">The minimum order quantity is generally one 20ft container (approx. 20-22 MT), but we can discuss specific requirements depending on the destination.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">What packaging options are available?</h3>
                            <p className="text-slate-600 leading-relaxed">We offer Soybean Meal in 50kg PP bags or bulk packing as per customer requirements and shipping regulations.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">Do you provide certificates of analysis?</h3>
                            <p className="text-slate-600 leading-relaxed">Yes, we provide quality certificates including parameters like protein, moisture, sand/silica, and urease activity with every shipment.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <WhatsAppChat />
        </div>
    );
};

export default SoybeanExport;
