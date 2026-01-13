import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Fuel, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const KazakhstanMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Kazakhstan Export Services | Import Export to Kazakhstan | Patel Impex</title>
        <meta name="description" content="Export to Kazakhstan market with Patel Impex. Professional Kazakhstani import export services, customs clearance, Central Asia gateway for Kazakhstan market entry." />
        <meta name="keywords" content="Kazakhstan export, Kazakhstani import export, export to Kazakhstan, Kazakhstan market entry, Kazakhstan customs clearance, Central Asia oil" />
        <link rel="canonical" href="https://patelimpex.com/seo/kazakhstan-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                Kazakhstan Market Export Services 🇰🇿
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Heart of Eurasia opportunities in Kazakhstan. Oil wealth and comprehensive Kazakhstani export services for Central Asian market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Fuel className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$690B Economy</h3>
                <p className="text-slate-600">Central Asia's largest economy with 19M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Oil & Minerals</h3>
                <p className="text-slate-600">Rich in oil, gas and mineral resources</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Silk Road Hub</h3>
                <p className="text-slate-600">Strategic location on new Silk Road trade route</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Kazakhstan Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Kazakhstan Customs Clearance",
                  "KazStandard Compliance", 
                  "Kazakh & Russian Language",
                  "Ministry of Trade Registration",
                  "Almaty Distribution Hub",
                  "Oil & Gas Sector Support",
                  "Kazakhstan Market Research",
                  "Eurasian Union Benefits",
                  "Mining Opportunities"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-yellow-600 hover:from-blue-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Kazakhstan Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KazakhstanMarketExport;