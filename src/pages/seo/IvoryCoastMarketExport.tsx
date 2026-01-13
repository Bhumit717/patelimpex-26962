import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, TreePine, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IvoryCoastMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Ivory Coast Export Services | Import Export to Ivory Coast | Patel Impex</title>
        <meta name="description" content="Export to Ivory Coast market with Patel Impex. Professional Ivorian import export services, customs clearance, West Africa gateway for Côte d'Ivoire market entry." />
        <meta name="keywords" content="Ivory Coast export, Côte d'Ivoire export, Ivorian import export, export to Ivory Coast, Ivory Coast market entry, West Africa ECOWAS cocoa" />
        <link rel="canonical" href="https://patelimpex.com/seo/ivory-coast-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-green-600 bg-clip-text text-transparent mb-6">
                Ivory Coast Market Export Services 🇨🇮
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Cocoa capital opportunities in Côte d'Ivoire. Economic powerhouse and comprehensive Ivorian export services for West African market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <TreePine className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$270B Economy</h3>
                <p className="text-slate-600">West Africa's largest economy with 27M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Cocoa Leader</h3>
                <p className="text-slate-600">World's largest cocoa producer and exporter</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Regional Hub</h3>
                <p className="text-slate-600">Economic and financial center of Francophone Africa</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-orange-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Ivory Coast Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Ivorian Customs Clearance",
                  "CODINORM Standards Compliance", 
                  "French Documentation",
                  "Ministry of Commerce Registration",
                  "Abidjan Port Services",
                  "Distribution Networks",
                  "Ivory Coast Market Research",
                  "ECOWAS Trade Benefits",
                  "Cocoa & Agriculture Expertise"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Ivory Coast Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IvoryCoastMarketExport;