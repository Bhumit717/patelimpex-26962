import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Mountain, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IndonesiaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Indonesia Export Services | Import Export to Indonesia | Patel Impex</title>
        <meta name="description" content="Export to Indonesia market with Patel Impex. Professional Indonesian import export services, customs clearance, halal certification for Indonesia market entry." />
        <meta name="keywords" content="Indonesia export, Indonesian import export, export to Indonesia, Indonesia market entry, Indonesian customs clearance, halal certification" />
        <link rel="canonical" href="https://patelimpex.com/seo/indonesia-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-blue-600 bg-clip-text text-transparent mb-6">
                Indonesia Market Export Services 🇮🇩
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access Southeast Asia's largest market with Indonesian export expertise. Halal certification and comprehensive trade support for successful market entry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$4.2 Trillion Economy</h3>
                <p className="text-slate-600">ASEAN's largest economy with 275M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Growing Middle Class</h3>
                <p className="text-slate-600">Rapidly expanding consumer market and digital economy</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Islands</h3>
                <p className="text-slate-600">17,000 islands creating diverse market opportunities</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Indonesia Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Indonesian Customs Clearance",
                  "SNI Standards Compliance", 
                  "Halal MUI Certification",
                  "BPOM Registration",
                  "Indonesian Language Labeling",
                  "Jakarta Port Services",
                  "Island Distribution Networks",
                  "E-commerce Platforms",
                  "Local Partnership Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Indonesia Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndonesiaMarketExport;