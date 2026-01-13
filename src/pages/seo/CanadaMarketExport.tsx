import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, MapPin, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CanadaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Canada Export Services | Import Export to Canada | Patel Impex</title>
        <meta name="description" content="Export to Canada market with Patel Impex. Professional Canadian import export services, CBSA compliance, customs clearance, and logistics solutions for Canadian market entry." />
        <meta name="keywords" content="Canada export, Canadian import export, export to Canada, Canada market entry, CBSA compliance, Canadian customs clearance, Canada market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/canada-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-red-200">
                  <MapPin className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent mb-6">
                Canada Market Export Services 🇨🇦
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Enter the prosperous Canadian market with expert export services. CBSA compliance, customs clearance, and comprehensive market entry support for successful Canada trade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$2.1 Trillion GDP</h3>
                <p className="text-slate-600">World's 10th largest economy with stable currency and strong trade relations</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">CETA Benefits</h3>
                <p className="text-slate-600">Comprehensive Economic Trade Agreement offers preferential access</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Multicultural Market</h3>
                <p className="text-slate-600">Diverse population with demand for international and ethnic products</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Canada Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "CBSA Compliance Support",
                  "Canadian Customs Clearance", 
                  "Health Canada Approvals",
                  "CFIA Food Certification",
                  "Canadian Standards (CSA)",
                  "Provincial Regulations",
                  "Toronto/Vancouver Ports",
                  "Distribution Networks",
                  "French Language Labeling"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Canada Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CanadaMarketExport;