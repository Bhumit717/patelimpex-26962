import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Flag, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ChinaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>China Market Export Services | Export to China | Patel Impex</title>
        <meta name="description" content="Export to China market with Patel Impex. Professional China export services with customs clearance, documentation, and logistics for Chinese market entry." />
        <meta name="keywords" content="China export, export to China, China market, Chinese importers, China trade, Beijing export, Shanghai export, Guangzhou export" />
        <link rel="canonical" href="https://patelimpex.com/seo/china-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Flag className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                China Market Export Services 🇨🇳
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access China's massive market with professional export services. Navigate Chinese regulations, connect with importers, and establish successful trade relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$14.7T Economy</h3>
                <p className="text-slate-600">World's second-largest economy with massive import demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">1.4B Population</h3>
                <p className="text-slate-600">Enormous consumer market with growing middle class</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Belt & Road Initiative</h3>
                <p className="text-slate-600">Strategic trade partnerships and infrastructure development</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start China Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ChinaMarketExport;