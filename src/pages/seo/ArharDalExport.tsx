import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Wheat, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ArharDalExport = () => {
  return (
    <>
      <Helmet>
        <title>Arhar Dal Export Services | Pigeon Pea Export from India | Patel Impex</title>
        <meta name="description" content="Premium Arhar Dal (Pigeon Pea) export from India. High-quality Toor Dal export with international certifications and competitive pricing worldwide." />
        <meta name="keywords" content="arhar dal export, pigeon pea export, toor dal export, India dal export, pulses export, pigeon pea supplier" />
        <link rel="canonical" href="https://patelimpex.com/seo/arhar-dal-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-700 to-orange-600 bg-clip-text text-transparent mb-6">
                Premium Arhar Dal Export 🌾
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export authentic Indian Arhar Dal (Pigeon Pea) globally. Premium quality Toor Dal with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Arhar Dal Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ArharDalExport;