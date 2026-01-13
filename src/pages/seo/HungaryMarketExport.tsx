import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Factory, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HungaryMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Hungary Export Services | Import Export to Hungary | Patel Impex</title>
        <meta name="description" content="Export to Hungary market with Patel Impex. Professional Hungarian import export services, customs clearance, EU benefits for Hungary market entry." />
        <meta name="keywords" content="Hungary export, Hungarian import export, export to Hungary, Hungary market entry, Hungarian customs clearance, EU Central Europe" />
        <link rel="canonical" href="https://patelimpex.com/seo/hungary-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-green-600 bg-clip-text text-transparent mb-6">
                Hungary Market Export Services 🇭🇺
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Heart of Europe opportunities in Hungary. EU advantages and comprehensive Hungarian export services for Central European market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$550B Economy</h3>
                <p className="text-slate-600">Industrial economy with 9.7M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Automotive Hub</h3>
                <p className="text-slate-600">Major automotive and electronics manufacturing</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Location</h3>
                <p className="text-slate-600">Gateway to Central and Eastern Europe</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Hungary Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Hungarian Customs Clearance",
                  "MSZT Standards Compliance", 
                  "Hungarian Language Support",
                  "Ministry of Foreign Affairs Registration",
                  "Budapest Distribution Hub",
                  "Industrial Zone Access",
                  "Hungary Market Research",
                  "EU Single Market Access",
                  "Automotive Sector Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Hungary Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HungaryMarketExport;