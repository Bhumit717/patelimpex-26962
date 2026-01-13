import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Pill, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DiagnosticKitsExport = () => {
  return (
    <>
      <Helmet>
        <title>Diagnostic Kits Export | Medical Testing Kits Export | Patel Impex</title>
        <meta name="description" content="Premium diagnostic kits export from India. Medical testing kits with international certifications and global shipping." />
        <meta name="keywords" content="diagnostic kits export, medical testing kits, rapid test kits, laboratory diagnostics, medical test export" />
        <link rel="canonical" href="https://patelimpex.com/products/diagnostic-kits-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Pill className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-transparent mb-6">
                Premium Diagnostic Kits Export 🔬
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export medical diagnostic kits worldwide. Premium testing solutions with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Diagnostic Kits Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/diagnostic-kits-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DiagnosticKitsExport;
