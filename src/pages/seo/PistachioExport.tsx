import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Wheat, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PistachioExport = () => {
  return (
    <>
      <Helmet>
        <title>Pistachio Export Services | Pista Export from India | Patel Impex</title>
        <meta name="description" content="Premium Pistachio (Pista) export from India. High-quality pistachios export with international certifications and global shipping services." />
        <meta name="keywords" content="pistachio export, pista export, pistachio nut export, India dry fruit export, pistachio supplier, pista exporter" />
        <link rel="canonical" href="https://patelimpex.com/seo/pistachio-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-lime-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-lime-600 bg-clip-text text-transparent mb-6">
                Premium Pistachio Export 🟢
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export authentic Indian Pistachios (Pista) worldwide. Premium quality nutritious nuts with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Pistachios Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PistachioExport;