import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AsafoetidaExport = () => {
  return (
    <>
      <Helmet>
        <title>Asafoetida Export Services | Hing Export from India | Patel Impex</title>
        <meta name="description" content="Premium Asafoetida (Hing) export from India. High-quality hing with international certifications." />
        <meta name="keywords" content="asafoetida export, hing export, India spice export, asafoetida supplier" />
        <link rel="canonical" href="https://patelimpex.com/seo/asafoetida-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-700 to-amber-600 bg-clip-text text-transparent mb-6">
                Premium Asafoetida Export
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Asafoetida (Hing) worldwide. High-quality with complete documentation.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Asafoetida Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AsafoetidaExport;
