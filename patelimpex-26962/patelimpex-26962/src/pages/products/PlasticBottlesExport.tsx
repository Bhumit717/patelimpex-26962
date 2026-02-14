import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Package, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PlasticBottlesExport = () => {
  return (
    <>
      <Helmet>
        <title>Plastic Bottles Export | PET Bottles Export | Patel Impex</title>
        <meta name="description" content="Premium plastic bottles export from India. High-quality PET and plastic bottles with international certifications." />
        <meta name="keywords" content="plastic bottles export, PET bottles, water bottles, beverage bottles, bottle manufacturing" />
        <link rel="canonical" href="https://patelimpex.com/products/plastic-bottles-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-sky-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Package className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent mb-6">
                Premium Plastic Bottles Export 🍶
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export quality plastic bottles worldwide. PET bottles and containers with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Plastic Bottles Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/plastic-bottles-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PlasticBottlesExport;
