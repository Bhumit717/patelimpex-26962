import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FlaxSeeds = () => {
  return (
    <>
      <Helmet>
        <title>Flax Seeds Export | Alsi Seeds Export from India | Patel Impex</title>
        <meta name="description" content="Premium Flax Seeds (Alsi) export from India. High-quality flax seeds with international certifications and global shipping." />
        <meta name="keywords" content="flax seeds export, alsi seeds export, India seeds export, flax supplier, linseed export" />
        <link rel="canonical" href="https://patelimpex.com/seo/flax-seeds" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                Premium Flax Seeds Export
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Flax Seeds (Alsi) worldwide. High-quality with complete documentation.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Flax Seeds Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FlaxSeeds;
