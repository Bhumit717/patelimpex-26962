import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const WatermelonSeeds = () => {
  return (
    <>
      <Helmet>
        <title>Watermelon Seeds Export | Tarbooz Seeds Export from India | Patel Impex</title>
        <meta name="description" content="Premium Watermelon Seeds export from India. High-quality watermelon seeds with international certifications." />
        <meta name="keywords" content="watermelon seeds export, tarbooz seeds export, India seeds export, watermelon supplier" />
        <link rel="canonical" href="https://patelimpex.com/seo/watermelon-seeds" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent mb-6">
                Premium Watermelon Seeds Export
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Watermelon Seeds worldwide. High-quality with complete documentation.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Watermelon Seeds Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WatermelonSeeds;
