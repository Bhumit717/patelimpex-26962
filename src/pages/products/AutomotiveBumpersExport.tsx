import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Car, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AutomotiveBumpersExport = () => {
  return (
    <>
      <Helmet>
        <title>Automotive Bumpers Export | Car Bumpers Export | Patel Impex</title>
        <meta name="description" content="Premium automotive bumpers export from India. High-quality car bumpers with international certifications." />
        <meta name="keywords" content="automotive bumpers export, car bumpers, vehicle bumpers, auto parts, plastic bumpers" />
        <link rel="canonical" href="https://patelimpex.com/products/automotive-bumpers-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-zinc-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Car className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-700 to-zinc-600 bg-clip-text text-transparent mb-6">
                Premium Automotive Bumpers Export 🚗
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export quality automotive bumpers worldwide. Durable car bumpers with complete documentation.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-600 to-zinc-600 hover:from-slate-700 hover:to-zinc-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Auto Bumpers Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/automotive-bumpers-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AutomotiveBumpersExport;
