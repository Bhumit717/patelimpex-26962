import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Gem, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GuineaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Guinea Export Services | Import Export to Guinea | Patel Impex</title>
        <meta name="description" content="Export to Guinea market with Patel Impex. Professional Guinean import export services, customs clearance, West Africa gateway for Guinea market entry." />
        <meta name="keywords" content="Guinea export, Guinean import export, export to Guinea, Guinea market entry, Guinea customs clearance, West Africa ECOWAS bauxite" />
        <link rel="canonical" href="https://patelimpex.com/seo/guinea-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
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
                Guinea Market Export Services 🇬🇳
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Mineral treasure house of Guinea. Bauxite wealth and comprehensive Guinean export services for West African market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Gem className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$50B Economy</h3>
                <p className="text-slate-600">Mineral-rich economy with 13M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Bauxite Leader</h3>
                <p className="text-slate-600">World's largest bauxite reserves</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Atlantic Coast</h3>
                <p className="text-slate-600">Strategic coastal location in West Africa</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Guinea Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Guinea Customs Clearance",
                  "AGNORM Standards Compliance", 
                  "French Documentation",
                  "Ministry of Commerce Registration",
                  "Conakry Port Services",
                  "Mining Sector Support",
                  "Guinea Market Research",
                  "ECOWAS Trade Benefits",
                  "Mineral Export Expertise"
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
                <span>Start Guinea Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GuineaMarketExport;