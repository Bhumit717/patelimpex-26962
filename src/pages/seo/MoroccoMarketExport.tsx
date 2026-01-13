import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Building, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MoroccoMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Morocco Market Export Services | Export to Morocco | Patel Impex</title>
        <meta name="description" content="Export to Morocco market with Patel Impex. Professional Morocco export services with customs clearance, documentation, and logistics for North African trade." />
        <meta name="keywords" content="Morocco export, export to Morocco, Morocco importers, North Africa trade, Casablanca export, Morocco market" />
        <link rel="canonical" href="https://patelimpex.com/seo/morocco-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Building className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-green-600 bg-clip-text text-transparent mb-6">
                Morocco Market Export Services 🇲🇦
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access Morocco's strategic North African market with professional export services. Gateway to Africa and Europe through Morocco's growing economy.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Morocco Export</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MoroccoMarketExport;