import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Wrench, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HardwareFittingsExport = () => {
  return (
    <>
      <Helmet>
        <title>Hardware Fittings Export | Door & Window Fittings | Patel Impex</title>
        <meta name="description" content="Premium hardware fittings export from India. High-quality door, window and furniture fittings with international certifications." />
        <meta name="keywords" content="hardware fittings export, door fittings, window fittings, furniture hardware, metal fittings" />
        <link rel="canonical" href="https://patelimpex.com/products/hardware-fittings-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-stone-600 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wrench className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-stone-700 to-amber-600 bg-clip-text text-transparent mb-6">
                Premium Hardware Fittings Export 🔩
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export quality hardware fittings worldwide. Door, window and furniture hardware with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-stone-600 to-amber-600 hover:from-stone-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Hardware Fittings Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/hardware-fittings-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HardwareFittingsExport;
