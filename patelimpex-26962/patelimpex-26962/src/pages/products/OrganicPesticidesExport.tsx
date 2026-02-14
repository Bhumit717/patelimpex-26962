import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const OrganicPesticidesExport = () => {
  return (
    <>
      <Helmet>
        <title>Organic Pesticides Export | Natural Pest Control | Patel Impex</title>
        <meta name="description" content="Premium organic pesticides export from India. Eco-friendly natural pest control solutions with international certifications." />
        <meta name="keywords" content="organic pesticides export, natural pest control, bio-pesticides, eco-friendly pesticides" />
        <link rel="canonical" href="https://patelimpex.com/products/organic-pesticides-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">
                Organic Pesticides Export 🌿
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export eco-friendly organic pesticides worldwide. Natural pest control solutions with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Organic Pesticides Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/organic-pesticides-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrganicPesticidesExport;