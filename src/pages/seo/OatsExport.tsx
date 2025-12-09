import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Wheat, Users } from "lucide-react";
import { Link } from "react-router-dom";

const OatsExport = () => {
  return (
    <>
      <Helmet>
        <title>Oats Export Services | Oats Export from India | Patel Impex</title>
        <meta name="description" content="Premium Oats export from India. High-quality oats with international certifications and global shipping." />
        <meta name="keywords" content="oats export, India grain export, oats supplier, oats exporter" />
        <link rel="canonical" href="https://patelimpex.com/seo/oats-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-6">
                Premium Oats Export
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Oats worldwide. High-quality with complete documentation.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Oats Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OatsExport;
