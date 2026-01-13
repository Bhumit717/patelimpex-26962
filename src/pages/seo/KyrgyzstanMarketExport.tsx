import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Mountain, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const KyrgyzstanMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Kyrgyzstan Export Services | Import Export to Kyrgyzstan | Patel Impex</title>
        <meta name="description" content="Export to Kyrgyzstan market with Patel Impex. Professional Kyrgyz import export services, customs clearance, Central Asia gateway for Kyrgyzstan market entry." />
        <meta name="keywords" content="Kyrgyzstan export, Kyrgyz import export, export to Kyrgyzstan, Kyrgyzstan market entry, Kyrgyz customs clearance, Central Asia mountains" />
        <link rel="canonical" href="https://patelimpex.com/seo/kyrgyzstan-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                Kyrgyzstan Market Export Services 🇰🇬
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Switzerland of Central Asia opportunities in Kyrgyzstan. Mountain republic and comprehensive Kyrgyz export services for regional market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$30B Economy</h3>
                <p className="text-slate-600">Mountain economy with 6.7M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Mining & Agriculture</h3>
                <p className="text-slate-600">Gold mining and agricultural potential</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Location</h3>
                <p className="text-slate-600">Bridge between China and Central Asia</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Kyrgyzstan Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Kyrgyz Customs Clearance",
                  "KyrgyzStandard Compliance", 
                  "Kyrgyz & Russian Language",
                  "Ministry of Economy Registration",
                  "Bishkek Distribution Hub",
                  "Mountain Transport Solutions",
                  "Kyrgyzstan Market Research",
                  "Eurasian Union Benefits",
                  "Agricultural Export Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Kyrgyzstan Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KyrgyzstanMarketExport;