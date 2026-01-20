import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import RelatedLinks from "@/components/RelatedLinks";
import { Pill, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HealthCapsulesExport = () => {
  return (
    <>
      <Helmet>
        <title>Health Capsules Export | Dietary Supplements Export | Patel Impex</title>
        <meta name="description" content="Premium health capsules export from India. High-quality dietary supplements with international certifications." />
        <meta name="keywords" content="health capsules export, dietary supplements, vitamin capsules, herbal capsules, supplement export" />
        <link rel="canonical" href="https://patelimpex.com/products/health-capsules-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Pill className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-6">
                Premium Health Capsules Export 💊
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export quality health capsules worldwide. Premium dietary supplements with complete documentation and international shipping.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Export Health Capsules Globally</span>
              </Link>
            </div>

            <RelatedLinks currentPage="/products/health-capsules-export" category="products" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HealthCapsulesExport;
