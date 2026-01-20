import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Tractor, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ThresherExport = () => {
  return (
    <>
      <Helmet>
        <title>Thresher Export | Agricultural Threshing Machines | Patel Impex</title>
        <meta name="description" content="Premium thresher export from India. Efficient grain threshing machines with international certifications." />
        <meta name="keywords" content="thresher export, threshing machine, grain thresher, agricultural equipment, crop processing" />
        <link rel="canonical" href="https://patelimpex.com/products/thresher-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Tractor className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-700 to-amber-600 bg-clip-text text-transparent mb-6">
                Premium Thresher Export 🌾
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export efficient threshing machines worldwide. Grain processing equipment with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Threshers Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/thresher-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ThresherExport;
