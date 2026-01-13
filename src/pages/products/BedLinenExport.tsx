import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Shirt, Users } from "lucide-react";
import { Link } from "react-router-dom";

const BedLinenExport = () => {
  return (
    <>
      <Helmet>
        <title>Bed Linen Export | Premium Bedding Export | Patel Impex</title>
        <meta name="description" content="Premium bed linen export from India. High-quality bedding and home textiles with international certifications." />
        <meta name="keywords" content="bed linen export, bedding export, bed sheets, home textiles, cotton bedding" />
        <link rel="canonical" href="https://patelimpex.com/products/bed-linen-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Shirt className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent mb-6">
                Premium Bed Linen Export 🛏️
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export luxury bed linen worldwide. Premium bedding and home textiles with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Bed Linen Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/bed-linen-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BedLinenExport;
