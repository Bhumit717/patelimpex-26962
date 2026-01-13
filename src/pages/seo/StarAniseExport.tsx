import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const StarAniseExport = () => {
  return (
    <>
      <Helmet>
        <title>Star Anise Export Services | Chakra Phool Export from India | Patel Impex</title>
        <meta name="description" content="Premium Star Anise (Chakra Phool) export from India. High-quality star anise export with international certifications and global shipping." />
        <meta name="keywords" content="star anise export, chakra phool export, anise export, India spice export, star anise supplier, chakra phool exporter" />
        <link rel="canonical" href="https://patelimpex.com/seo/star-anise-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent mb-6">
                Premium Star Anise Export ⭐
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export authentic Indian Star Anise (Chakra Phool) globally. Premium quality star-shaped spice with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Star Anise Globally</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default StarAniseExport;