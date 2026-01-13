import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Building, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NigeriaMarketExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Nigeria Market Export Services | Export to Nigeria | Patel Impex</title>
        <meta name="description" content="Export to Nigeria market with Patel Impex. Professional Nigeria export services with Lagos customs clearance, documentation, and West African trade logistics." />
        <meta name="keywords" content="Nigeria export, export to Nigeria, Nigeria importers, West Africa trade, Lagos export, Nigeria market, Apapa port" />
        <link rel="canonical" href="https://patelimpex.com/seo/nigeria-market-export-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-gray-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Building className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-gray-600 bg-clip-text text-transparent mb-6">
                Nigeria Market Export Services 🇳🇬
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access Nigeria's largest West African market with professional export services. Gateway to 200+ million consumers through Lagos trade hub.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-gray-600 hover:from-green-700 hover:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Nigeria Export</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NigeriaMarketExportServices;