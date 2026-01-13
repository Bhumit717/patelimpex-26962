import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Building, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const KenyaMarketExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Kenya Market Export Services | Export to Kenya | Patel Impex</title>
        <meta name="description" content="Export to Kenya market with Patel Impex. Professional Kenya export services with Nairobi customs clearance, documentation, and East African trade logistics." />
        <meta name="keywords" content="Kenya export, export to Kenya, Kenya importers, East Africa trade, Nairobi export, Kenya market, Mombasa port" />
        <link rel="canonical" href="https://patelimpex.com/seo/kenya-market-export-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-black">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-3xl flex items-center justify-center shadow-2xl">
                  <Building className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-slate-700 bg-clip-text text-transparent mb-6">
                Kenya Market Export Services 🇰🇪
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access Kenya's dynamic East African market with professional export services. Gateway to East Africa through Nairobi and Mombasa trade hubs.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-slate-600 hover:from-red-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Kenya Export</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KenyaMarketExportServices;