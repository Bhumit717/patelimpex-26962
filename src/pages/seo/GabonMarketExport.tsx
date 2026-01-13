import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, TreePine, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GabonMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Gabon Export Services | Import Export to Gabon | Patel Impex</title>
        <meta name="description" content="Export to Gabon market with Patel Impex. Professional Gabonese import export services, customs clearance, Central Africa gateway for Gabon market entry." />
        <meta name="keywords" content="Gabon export, Gabonese import export, export to Gabon, Gabon market entry, Gabon customs clearance, Central Africa CEMAC oil" />
        <link rel="canonical" href="https://patelimpex.com/seo/gabon-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                Gabon Market Export Services 🇬🇦
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Equatorial forest opportunities in Gabon. Oil wealth and comprehensive Gabonese export services for Central African market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$60B Economy</h3>
                <p className="text-slate-600">Oil-rich economy with 2.3M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Natural Resources</h3>
                <p className="text-slate-600">Rich in oil, timber and mineral wealth</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Equatorial Location</h3>
                <p className="text-slate-600">Strategic position on Atlantic coast</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Gabon Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Gabon Customs Clearance",
                  "AGANOR Standards Compliance", 
                  "French Documentation",
                  "Ministry of Commerce Registration",
                  "Port-Gentil Services",
                  "Libreville Distribution Hub",
                  "Gabon Market Research",
                  "CEMAC Trade Benefits",
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
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Gabon Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GabonMarketExport;