import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Cog, Users } from "lucide-react";
import { Link } from "react-router-dom";

const IndustrialMotorExport = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Motor Export | Electric Motors Export | Patel Impex</title>
        <meta name="description" content="Premium industrial motor export from India. High-quality electric motors with international certifications." />
        <meta name="keywords" content="industrial motor export, electric motor, industrial machinery, motor export, AC motor" />
        <link rel="canonical" href="https://patelimpex.com/products/industrial-motor-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Cog className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent mb-6">
                Premium Industrial Motor Export ⚙️
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export powerful industrial motors worldwide. High-efficiency electric motors with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Industrial Motors Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/industrial-motor-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndustrialMotorExport;
