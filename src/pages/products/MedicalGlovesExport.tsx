import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Pill, Users } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalGlovesExport = () => {
  return (
    <>
      <Helmet>
        <title>Medical Gloves Export | Surgical Gloves Export | Patel Impex</title>
        <meta name="description" content="Premium medical gloves export from India. High-quality surgical and examination gloves with international certifications." />
        <meta name="keywords" content="medical gloves export, surgical gloves, examination gloves, latex gloves, nitrile gloves export" />
        <link rel="canonical" href="https://patelimpex.com/products/medical-gloves-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Pill className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-700 to-cyan-600 bg-clip-text text-transparent mb-6">
                Premium Medical Gloves Export 🧤
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export quality medical gloves worldwide. Premium surgical and examination gloves with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Medical Gloves Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/medical-gloves-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MedicalGlovesExport;
