import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Star, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PharmaceuticalExport = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Pharmaceutical Exporter from India | Buy Bulk Pharmaceutical | Patel Impex</title>
        <meta name="description" content="Patel Impex is a leading supplier and exporter of Pharmaceutical from India. Best quality Pharmaceutical at competitive prices for global markets." />
        <link rel="canonical" href="https://patelimpex.com/seo/pharmaceutical-export" />
        <meta property="og:title" content="Pharmaceutical Exporter from India | Buy Bulk Pharmaceutical | Patel Impex" />
        <meta property="og:description" content="Patel Impex is a leading supplier and exporter of Pharmaceutical from India. Best quality Pharmaceutical at competitive prices for global markets." />
         <meta property="og:image" content="https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80" />
      </Helmet>
      <Navigation />
      <div className="pt-32 pb-20 bg-green-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Indian <span className="text-yellow-400">Pharmaceutical</span> Export</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">World-class quality Pharmaceutical sourced from best farms</p>
      </div>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Why Our Pharmaceutical?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Natural & Pure</h3>
                <p className="text-slate-600">Cultivated without harmful chemicals.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Premium Grade</h3>
                <p className="text-slate-600">Sorted and graded for best quality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Award className="w-12 h-12 text-blue-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Certified</h3>
                <p className="text-slate-600">Meets international export standards.</p>
            </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default PharmaceuticalExport;