import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const VanillaExport = () => {
  return (
    <>
      <Helmet>
        <title>Vanilla Export Services | Vanilla Beans Export from India | Patel Impex</title>
        <meta name="description" content="Premium Vanilla Beans export from India. High-quality vanilla with international certifications." />
        <meta name="keywords" content="vanilla export, vanilla beans export, India spice export, vanilla supplier" />
        <link rel="canonical" href="https://patelimpex.com/seo/vanilla-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-700 to-yellow-700 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-800 to-yellow-700 bg-clip-text text-transparent mb-6">
                Premium Vanilla Export
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Vanilla Beans worldwide. High-quality with complete documentation.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-800 hover:to-yellow-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Vanilla Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default VanillaExport;
