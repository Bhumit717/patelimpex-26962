import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Cog, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EnginePartsExport = () => {
  return (
    <>
      <Helmet>
        <title>Engine Parts Export | Automotive Engine Components | Patel Impex</title>
        <meta name="description" content="Premium engine parts export from India. High-quality automotive engine components with international certifications." />
        <meta name="keywords" content="engine parts export, automotive parts, engine components, auto parts, spare parts" />
        <link rel="canonical" href="https://patelimpex.com/products/engine-parts-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Cog className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent mb-6">
                Premium Engine Parts Export 🔩
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export quality engine parts worldwide. Automotive components with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Engine Parts Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/engine-parts-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EnginePartsExport;
