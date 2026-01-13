import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Star, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VietnamMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Vietnam Export Services | Import Export to Vietnam | Patel Impex</title>
        <meta name="description" content="Export to Vietnam market with Patel Impex. Professional Vietnamese import export services, customs clearance, ASEAN benefits for Vietnam market entry." />
        <meta name="keywords" content="Vietnam export, Vietnamese import export, export to Vietnam, Vietnam market entry, Vietnamese customs clearance, ASEAN trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/vietnam-market-export" />
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
                Vietnam Market Export Services 🇻🇳
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access Southeast Asia's fastest growing economy. Comprehensive Vietnamese export services with ASEAN benefits and strategic market entry support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.4 Trillion Economy</h3>
                <p className="text-slate-600">Fastest growing ASEAN economy with 98M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Manufacturing Hub</h3>
                <p className="text-slate-600">Global manufacturing destination and export economy</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Young Demographics</h3>
                <p className="text-slate-600">Young, tech-savvy population driving consumer demand</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Vietnam Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Vietnamese Customs Clearance",
                  "TCVN Standards Compliance", 
                  "Vietnamese Documentation",
                  "Ho Chi Minh Port Services",
                  "ASEAN Trade Benefits",
                  "Vietnam Market Research",
                  "Local Distributor Networks",
                  "E-commerce Support",
                  "Manufacturing Partnerships"
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
                <span>Start Vietnam Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default VietnamMarketExport;