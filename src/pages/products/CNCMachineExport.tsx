import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Wrench, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CNCMachineExport = () => {
  return (
    <>
      <Helmet>
        <title>CNC Machine Export | Computer Numerical Control Machines | Patel Impex</title>
        <meta name="description" content="Premium CNC machine export from India. High-precision computer numerical control machines with international certifications." />
        <meta name="keywords" content="CNC machine export, CNC machinery, precision machines, industrial automation, machining equipment" />
        <link rel="canonical" href="https://patelimpex.com/products/cnc-machine-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-gray-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wrench className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-700 to-gray-600 bg-clip-text text-transparent mb-6">
                Premium CNC Machine Export 🔧
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export precision CNC machines worldwide. High-tech machining equipment with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export CNC Machines Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/cnc-machine-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CNCMachineExport;
