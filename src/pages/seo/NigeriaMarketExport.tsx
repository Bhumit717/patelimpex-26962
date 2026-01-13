import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Zap, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NigeriaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Nigeria Export Services | Import Export to Nigeria | Patel Impex</title>
        <meta name="description" content="Export to Nigeria market with Patel Impex. Professional Nigerian import export services, customs clearance, ECOWAS benefits for Nigeria market entry." />
        <meta name="keywords" content="Nigeria export, Nigerian import export, export to Nigeria, Nigeria market entry, Nigerian customs clearance, ECOWAS trade West Africa" />
        <link rel="canonical" href="https://patelimpex.com/seo/nigeria-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-green-200">
                  <Globe className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-slate-600 bg-clip-text text-transparent mb-6">
                Nigeria Market Export Services 🇳🇬
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Giant of Africa awaits your exports. Nigeria's massive market potential with ECOWAS advantages and comprehensive Nigerian export services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.1 Trillion Economy</h3>
                <p className="text-slate-600">Africa's largest economy with 220M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Oil & Gas Hub</h3>
                <p className="text-slate-600">Major oil producer with growing manufacturing sector</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Young Demographics</h3>
                <p className="text-slate-600">Youngest population globally with tech-savvy consumers</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Nigeria Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Nigerian Customs Clearance",
                  "SON Standards Compliance", 
                  "NAFDAC Registration",
                  "English Documentation",
                  "Lagos Port Services",
                  "Abuja Distribution Networks",
                  "ECOWAS Certificate of Origin",
                  "Nigeria Market Research",
                  "Oil & Gas Industry Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-slate-600 hover:from-green-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Nigeria Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NigeriaMarketExport;