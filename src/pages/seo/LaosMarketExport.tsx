import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Globe, Truck, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaosMarketExport = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Laos Import Export Services | Trade with Laos | Patel Impex</title>
        <meta name="description" content="Comprehensive import export services for Laos. Patel Impex facilitates trade between India and Laos with expert logistics and customs support." />
        <link rel="canonical" href="https://patelimpex.com/seo/laos-market-export" />
        <meta property="og:title" content="Laos Import Export Services | Trade with Laos | Patel Impex" />
        <meta property="og:description" content="Comprehensive import export services for Laos. Patel Impex facilitates trade between India and Laos with expert logistics and customs support." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" />
      </Helmet>
      <Navigation />
      <div className="pt-32 pb-20 bg-blue-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Exporting to <span className="text-orange-400">Laos</span></h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">Your Gateway to the Laos Market</p>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Trade Opportunities in Laos</h2>
                <p className="text-slate-600 mb-4">Patel Impex specializes in connecting Indian exporters with buyers in Laos. We understand the local market dynamics, consumer preferences, and regulatory landscape.</p>
                <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Contact our Laos desk &rarr;</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white shadow rounded-lg text-center"><Truck className="mx-auto text-blue-500 w-8 h-8 mb-2"/><h3 className="font-bold">Logistics</h3><p className="text-sm text-slate-500">Fast shipping to Laos</p></div>
                <div className="p-6 bg-white shadow rounded-lg text-center"><Building2 className="mx-auto text-orange-500 w-8 h-8 mb-2"/><h3 className="font-bold">Compliance</h3><p className="text-sm text-slate-500">Customs & documentation</p></div>
            </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default LaosMarketExport;