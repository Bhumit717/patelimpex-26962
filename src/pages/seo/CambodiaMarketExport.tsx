import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Building2, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CambodiaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Cambodia Export Services | Import Export to Cambodia | Patel Impex</title>
        <meta name="description" content="Export to Cambodia market with Patel Impex. Professional Cambodian import export services, customs clearance, ASEAN benefits for Cambodia market entry." />
        <meta name="keywords" content="Cambodia export, Cambodian import export, export to Cambodia, Cambodia market entry, Cambodian customs clearance, ASEAN Cambodia" />
        <link rel="canonical" href="https://patelimpex.com/seo/cambodia-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent mb-6">
                Cambodia Market Export Services 🇰🇭
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Kingdom of Wonder market opportunities. ASEAN advantages and comprehensive Cambodian export services for Mekong region access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Building2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$80B Economy</h3>
                <p className="text-slate-600">Fastest growing ASEAN economy with 17M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Textile Manufacturing</h3>
                <p className="text-slate-600">Major garment manufacturing and export destination</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tourism Growth</h3>
                <p className="text-slate-600">Ancient Angkor Wat driving tourism and service sector</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Cambodia Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Cambodia Customs Clearance",
                  "ISC Standards Compliance", 
                  "DDF Registration",
                  "Khmer Language Support",
                  "Sihanoukville Port Services",
                  "Phnom Penh Distribution",
                  "ASEAN Certificate of Origin",
                  "Cambodia Market Research",
                  "Tourism Industry Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Cambodia Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CambodiaMarketExport;