import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FennelSeedsExport = () => {
  return (
    <>
      <Helmet>
        <title>Fennel Seeds Export | Saunf Export from India | Patel Impex</title>
        <meta name="description" content="Premium Fennel Seeds (Saunf) export from India. High-quality fennel seeds export with international certifications and global shipping." />
        <meta name="keywords" content="fennel seeds export, saunf export, fennel export, India spice export, saunf supplier, fennel seed exporter" />
        <link rel="canonical" href="https://patelimpex.com/seo/fennel-seeds-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent mb-6">
                Premium Fennel Seeds Export 🌿
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export authentic Indian Fennel Seeds (Saunf) worldwide. Premium quality aromatic fennel seeds with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Fennel Seeds Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FennelSeedsExport;