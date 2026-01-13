import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PopopySeedsExport = () => {
  return (
    <>
      <Helmet>
        <title>Poppy Seeds Export | Khus Khus Export from India | Patel Impex</title>
        <meta name="description" content="Premium Poppy Seeds (Khus Khus) export from India. High-quality poppy seeds export with international certifications and global shipping." />
        <meta name="keywords" content="poppy seeds export, khus khus export, posto export, India spice export, poppy seed supplier, khus khus exporter" />
        <link rel="canonical" href="https://patelimpex.com/seo/poppy-seeds-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6">
                Premium Poppy Seeds Export 🔵
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export authentic Indian Poppy Seeds (Khus Khus) worldwide. Premium quality nutritious seeds with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Poppy Seeds Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PopopySeedsExport;