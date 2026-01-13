import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Star, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GhanaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Ghana Export Services | Import Export to Ghana | Patel Impex</title>
        <meta name="description" content="Export to Ghana market with Patel Impex. Professional Ghanaian import export services, customs clearance, West Africa gateway for Ghana market entry." />
        <meta name="keywords" content="Ghana export, Ghanaian import export, export to Ghana, Ghana market entry, Ghanaian customs clearance, West Africa ECOWAS gold" />
        <link rel="canonical" href="https://patelimpex.com/seo/ghana-market-export" />
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
                Ghana Market Export Services 🇬🇭
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gold Coast opportunities in Ghana. Democratic stability and comprehensive Ghanaian export services for West African market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$250B Economy</h3>
                <p className="text-slate-600">Stable economy with 32M consumers and gold reserves</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Democratic Leader</h3>
                <p className="text-slate-600">West Africa's stable democracy and business hub</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Resource Rich</h3>
                <p className="text-slate-600">Gold, cocoa and oil wealth driving growth</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Ghana Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Ghanaian Customs Clearance",
                  "GSA Standards Compliance", 
                  "English Documentation",
                  "Ministry of Trade Registration",
                  "Tema Port Services",
                  "Accra Distribution Hub",
                  "Ghana Market Research",
                  "ECOWAS Trade Benefits",
                  "Mining & Cocoa Expertise"
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
                <span>Start Ghana Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GhanaMarketExport;