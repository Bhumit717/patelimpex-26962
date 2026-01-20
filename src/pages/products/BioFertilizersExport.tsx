import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Sprout, Users } from "lucide-react";
import { Link } from "react-router-dom";

const BioFertilizersExport = () => {
  return (
    <>
      <Helmet>
        <title>Bio Fertilizers Export | Organic Fertilizers | Patel Impex</title>
        <meta name="description" content="Premium bio fertilizers export from India. Organic soil enrichment solutions with international certifications." />
        <meta name="keywords" content="bio fertilizers export, organic fertilizers, soil enrichment, agricultural fertilizers" />
        <link rel="canonical" href="https://patelimpex.com/products/bio-fertilizers-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-lime-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-lime-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Sprout className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-lime-700 to-green-600 bg-clip-text text-transparent mb-6">
                Bio Fertilizers Export 🌱
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export organic bio fertilizers worldwide. Quality soil enrichment products with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Bio Fertilizers Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/bio-fertilizers-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BioFertilizersExport;