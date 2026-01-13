import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, TreePine, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LatviaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Latvia Export Services | Import Export to Latvia | Patel Impex</title>
        <meta name="description" content="Export to Latvia market with Patel Impex. Professional Latvian import export services, customs clearance, EU benefits for Latvia market entry." />
        <meta name="keywords" content="Latvia export, Latvian import export, export to Latvia, Latvia market entry, Latvian customs clearance, EU Baltic states" />
        <link rel="canonical" href="https://patelimpex.com/seo/latvia-market-export" />
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
                Latvia Market Export Services 🇱🇻
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Baltic gateway opportunities in Latvia. EU advantages and comprehensive Latvian export services for Northern European market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$120B Economy</h3>
                <p className="text-slate-600">Baltic economy with 1.9M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Logistics Hub</h3>
                <p className="text-slate-600">Major transit corridor to Russia and CIS</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Baltic Access</h3>
                <p className="text-slate-600">Strategic Baltic Sea location</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Latvia Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Latvian Customs Clearance",
                  "LVS Standards Compliance", 
                  "Latvian Language Support",
                  "Ministry of Economics Registration",
                  "Riga Port Services",
                  "Distribution Networks",
                  "Latvia Market Research",
                  "EU Single Market Access",
                  "Transit Services to CIS"
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
                <span>Start Latvia Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LatviaMarketExport;