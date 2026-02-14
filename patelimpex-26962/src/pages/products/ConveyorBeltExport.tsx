import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ConveyorBeltExport = () => {
  return (
    <>
      <Helmet>
        <title>Conveyor Belt Export | Industrial Conveyor Systems | Patel Impex</title>
        <meta name="description" content="Premium conveyor belt export from India. Industrial conveyor systems with international certifications." />
        <meta name="keywords" content="conveyor belt export, industrial conveyor, material handling, belt conveyor, conveyor systems" />
        <link rel="canonical" href="https://patelimpex.com/products/conveyor-belt-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-gray-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-zinc-600 to-gray-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Truck className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-700 to-gray-600 bg-clip-text text-transparent mb-6">
                Premium Conveyor Belt Export 🏭
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export industrial conveyor belts worldwide. Material handling systems with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-zinc-600 to-gray-600 hover:from-zinc-700 hover:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Conveyor Belts Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/conveyor-belt-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ConveyorBeltExport;
