import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Gem, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FashionJewelryExport = () => {
  return (
    <>
      <Helmet>
        <title>Fashion Jewelry Export | Costume Jewelry Export | Patel Impex</title>
        <meta name="description" content="Premium fashion jewelry export from India. Trendy costume jewelry with international certifications." />
        <meta name="keywords" content="fashion jewelry export, costume jewelry, imitation jewelry, artificial jewelry, fashion accessories" />
        <link rel="canonical" href="https://patelimpex.com/products/fashion-jewelry-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-purple-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Gem className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-700 to-purple-600 bg-clip-text text-transparent mb-6">
                Premium Fashion Jewelry Export ✨
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export trendy fashion jewelry worldwide. Contemporary costume jewelry with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Fashion Jewelry Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/fashion-jewelry-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FashionJewelryExport;
