import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Droplet, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IraqMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Iraq Export Services | Import Export to Iraq | Patel Impex</title>
        <meta name="description" content="Export to Iraq market with Patel Impex. Professional Iraqi import export services, customs clearance, Middle East gateway for Iraq market entry." />
        <meta name="keywords" content="Iraq export, Iraqi import export, export to Iraq, Iraq market entry, Iraqi customs clearance, Middle East oil reconstruction" />
        <link rel="canonical" href="https://patelimpex.com/seo/iraq-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-slate-800 bg-clip-text text-transparent mb-6">
                Iraq Market Export Services 🇮🇶
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Cradle of civilization opportunities in Iraq. Oil wealth and comprehensive Iraqi export services for Middle Eastern market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Droplet className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$800B Economy</h3>
                <p className="text-slate-600">Oil-rich economy with 41M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Reconstruction</h3>
                <p className="text-slate-600">Massive infrastructure rebuilding opportunities</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Oil Reserves</h3>
                <p className="text-slate-600">World's 5th largest proven oil reserves</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Iraq Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Iraqi Customs Clearance",
                  "COSQC Standards Compliance", 
                  "Arabic Documentation",
                  "Ministry of Trade Registration",
                  "Basra Port Services",
                  "Baghdad Distribution Hub",
                  "Iraq Market Research",
                  "Reconstruction Projects",
                  "Oil Sector Opportunities"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-slate-800 hover:from-red-700 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Iraq Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />      </div>
    </>
  );
};

export default IraqMarketExport;