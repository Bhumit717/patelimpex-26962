import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Wheat, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PinePnutExport = () => {
  return (
    <>
      <Helmet>
        <title>Pine Nuts Export Services | Chilgoza Export from India | Patel Impex</title>
        <meta name="description" content="Premium Pine Nuts (Chilgoza) export from India. High-quality pine nuts export with international certifications and global shipping services." />
        <meta name="keywords" content="pine nuts export, chilgoza export, pine nut export, India dry fruit export, pine nut supplier, chilgoza exporter" />
        <link rel="canonical" href="https://patelimpex.com/seo/pine-nuts-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent mb-6">
                Premium Pine Nuts Export 🌲
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export authentic Pine Nuts (Chilgoza) worldwide. Premium quality Himalayan pine nuts with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Pine Nuts Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PinePnutExport;