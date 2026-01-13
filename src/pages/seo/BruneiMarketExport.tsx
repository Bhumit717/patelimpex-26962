import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Crown, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BruneiMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Brunei Export Services | Import Export to Brunei | Patel Impex</title>
        <meta name="description" content="Export to Brunei market with Patel Impex. Professional Brunei import export services, customs clearance, ASEAN benefits for Brunei Darussalam market entry." />
        <meta name="keywords" content="Brunei export, Brunei import export, export to Brunei, Brunei market entry, Brunei customs clearance, ASEAN oil rich" />
        <link rel="canonical" href="https://patelimpex.com/seo/brunei-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-black rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-700 to-slate-800 bg-clip-text text-transparent mb-6">
                Brunei Market Export Services 🇧🇳
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Abode of Peace opportunities in Brunei. Oil-rich sultanate and comprehensive Brunei export services for ASEAN market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Crown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$40B Economy</h3>
                <p className="text-slate-600">High-income oil economy with 450K consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Oil Wealth</h3>
                <p className="text-slate-600">One of highest GDP per capita in Asia</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Location</h3>
                <p className="text-slate-600">Gateway to Borneo and Southeast Asia</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Brunei Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Brunei Customs Clearance",
                  "DSM Standards Compliance", 
                  "English & Malay Documentation",
                  "Ministry of Finance Registration",
                  "Muara Port Services",
                  "Bandar Seri Begawan Hub",
                  "Brunei Market Research",
                  "ASEAN Certificate of Origin",
                  "Halal Certification Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-slate-800 hover:from-yellow-700 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Brunei Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BruneiMarketExport;