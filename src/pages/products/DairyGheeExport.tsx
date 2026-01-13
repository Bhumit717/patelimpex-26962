import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Coffee, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DairyGheeExport = () => {
  return (
    <>
      <Helmet>
        <title>Dairy Ghee Export | Pure Cow Ghee Export | Patel Impex</title>
        <meta name="description" content="Premium dairy ghee export from India. Pure cow ghee with international certifications." />
        <meta name="keywords" content="dairy ghee export, cow ghee, pure ghee, clarified butter, Indian ghee" />
        <link rel="canonical" href="https://patelimpex.com/products/dairy-ghee-export" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Coffee className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                Premium Dairy Ghee Export 🧈
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export pure dairy ghee worldwide. Authentic cow ghee with complete documentation.
              </p>
            </div>
            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Dairy Ghee Globally</span>
              </Link>
            </div>
            <RelatedLinks currentPage="/products/dairy-ghee-export" category="products" />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default DairyGheeExport;
