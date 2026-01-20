import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HerbalSupplementsExport = () => {
  return (
    <>
      <Helmet>
        <title>Herbal Supplements Export | Natural Health Products Export | Patel Impex</title>
        <meta name="description" content="Premium herbal supplements export from India. Natural health products with international certifications." />
        <meta name="keywords" content="herbal supplements export, natural supplements, ayurvedic products, herbal medicines, botanical supplements" />
        <link rel="canonical" href="https://patelimpex.com/products/herbal-supplements-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6">
                Premium Herbal Supplements Export 🌿
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export natural herbal supplements worldwide. Premium botanical products with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Herbal Supplements Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/herbal-supplements-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HerbalSupplementsExport;
