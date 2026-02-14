import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Shirt, Users } from "lucide-react";
import { Link } from "react-router-dom";

const WoolBlanketsExport = () => {
  return (
    <>
      <Helmet>
        <title>Wool Blankets Export | Premium Woolen Blankets | Patel Impex</title>
        <meta name="description" content="Premium wool blankets export from India. High-quality woolen blankets with international certifications." />
        <meta name="keywords" content="wool blankets export, woolen blankets, thermal blankets, winter blankets, premium blankets" />
        <link rel="canonical" href="https://patelimpex.com/products/wool-blankets-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Shirt className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-6">
                Premium Wool Blankets Export 🧣
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export quality wool blankets worldwide. Premium woolen textiles with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Wool Blankets Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/wool-blankets-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WoolBlanketsExport;
