import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Building2, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BahrainMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Bahrain Export Services | Import Export to Bahrain | Patel Impex</title>
        <meta name="description" content="Export to Bahrain market with Patel Impex. Professional Bahraini import export services, customs clearance, GCC benefits for Bahrain market entry." />
        <meta name="keywords" content="Bahrain export, Bahraini import export, export to Bahrain, Bahrain market entry, Bahraini customs clearance, GCC Gulf cooperation" />
        <link rel="canonical" href="https://patelimpex.com/seo/bahrain-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-red-200">
                  <Globe className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-slate-600 bg-clip-text text-transparent mb-6">
                Bahrain Market Export Services 🇧🇭
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Pearl of the Gulf opportunities in Bahrain. GCC financial hub and comprehensive Bahraini export services for Gulf market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$110B Economy</h3>
                <p className="text-slate-600">Financial hub with 1.7M population and high income</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Banking Center</h3>
                <p className="text-slate-600">Regional financial hub with Islamic banking leadership</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Gateway</h3>
                <p className="text-slate-600">Bridge between Saudi Arabia and Gulf markets</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Bahrain Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Bahraini Customs Clearance",
                  "BSMD Standards Compliance", 
                  "Arabic Documentation",
                  "Ministry of Industry Registration",
                  "Khalifa Bin Salman Port",
                  "Distribution Networks",
                  "Bahrain Market Research",
                  "Islamic Finance Support",
                  "GCC Market Gateway"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-slate-600 hover:from-red-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Bahrain Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BahrainMarketExport;