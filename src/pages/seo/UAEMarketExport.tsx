import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Building, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const UAEMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>UAE Market Export Services | Export to Dubai & UAE | Patel Impex</title>
        <meta name="description" content="Export to UAE market with Patel Impex. Professional UAE export services with Dubai customs clearance, documentation, and logistics for Middle East market." />
        <meta name="keywords" content="UAE export, export to Dubai, Dubai market, UAE importers, Middle East trade, Abu Dhabi export, Sharjah export" />
        <link rel="canonical" href="https://patelimpex.com/seo/uae-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Building className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent mb-6">
                UAE Market Export Services 🇦🇪
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access UAE's strategic market with professional export services. Gateway to Middle East, Africa, and beyond through Dubai's world-class trade infrastructure.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start UAE Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UAEMarketExport;