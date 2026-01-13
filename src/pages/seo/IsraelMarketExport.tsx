import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Cpu, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IsraelMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Israel Export Services | Import Export to Israel | Patel Impex</title>
        <meta name="description" content="Export to Israel market with Patel Impex. Professional Israeli import export services, customs clearance, innovation hub for Israel market entry." />
        <meta name="keywords" content="Israel export, Israeli import export, export to Israel, Israel market entry, Israeli customs clearance, startup nation technology" />
        <link rel="canonical" href="https://patelimpex.com/seo/israel-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-blue-200">
                  <Globe className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-slate-600 bg-clip-text text-transparent mb-6">
                Israel Market Export Services 🇮🇱
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Startup Nation opportunities in Israel. Innovation leadership and comprehensive Israeli export services for Middle Eastern market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.6 Trillion Economy</h3>
                <p className="text-slate-600">High-tech economy with 9.5M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation Leader</h3>
                <p className="text-slate-600">Highest density of startups in the world</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Hub</h3>
                <p className="text-slate-600">Bridge between Europe, Asia and Africa</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Israel Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Israeli Customs Clearance",
                  "SII Standards Compliance", 
                  "Hebrew & English Documentation",
                  "Ministry of Economy Registration",
                  "Haifa & Ashdod Ports",
                  "Tel Aviv Distribution Hub",
                  "Israel Market Research",
                  "Technology Sector Support",
                  "Innovation Partnerships"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Israel Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IsraelMarketExport;