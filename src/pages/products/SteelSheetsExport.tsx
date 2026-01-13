import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Wrench, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SteelSheetsExport = () => {
  return (
    <>
      <Helmet>
        <title>Steel Sheets Export | Industrial Steel Plates Export | Patel Impex</title>
        <meta name="description" content="Premium steel sheets export from India. High-quality industrial steel plates with international certifications." />
        <meta name="keywords" content="steel sheets export, steel plates, metal sheets, industrial steel, stainless steel" />
        <link rel="canonical" href="https://patelimpex.com/products/steel-sheets-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-slate-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wrench className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 to-slate-600 bg-clip-text text-transparent mb-6">
                Premium Steel Sheets Export 🏗️
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export industrial steel sheets worldwide. High-grade metal plates with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Steel Sheets Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/steel-sheets-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SteelSheetsExport;
