import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Palmtree, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SriLankaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Sri Lanka Export Services | Import Export to Sri Lanka | Patel Impex</title>
        <meta name="description" content="Export to Sri Lanka market with Patel Impex. Professional Sri Lankan import export services, customs clearance, SAARC benefits for Sri Lanka market entry." />
        <meta name="keywords" content="Sri Lanka export, Sri Lankan import export, export to Sri Lanka, Sri Lanka market entry, Sri Lankan customs clearance, SAARC Ceylon" />
        <link rel="canonical" href="https://patelimpex.com/seo/sri-lanka-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                Sri Lanka Market Export Services 🇱🇰
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Pearl of the Indian Ocean market access. Strategic island location with SAARC advantages and comprehensive Sri Lankan export services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Palmtree className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$300B Economy</h3>
                <p className="text-slate-600">Island nation with 22M consumers and strategic location</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tourism & Tea Hub</h3>
                <p className="text-slate-600">World-famous Ceylon tea and growing tourism industry</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Shipping Gateway</h3>
                <p className="text-slate-600">Major shipping hub connecting East and West</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-orange-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Sri Lanka Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Sri Lankan Customs Clearance",
                  "SLSI Standards Compliance", 
                  "NMRA Registration",
                  "Sinhala & Tamil Documentation",
                  "Colombo Port Services",
                  "Island-wide Distribution",
                  "SAARC Certificate of Origin",
                  "Sri Lanka Market Research",
                  "Tea & Spice Trade Expertise"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Sri Lanka Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SriLankaMarketExport;