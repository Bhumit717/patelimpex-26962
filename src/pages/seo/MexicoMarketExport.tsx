import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Sun, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MexicoMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Mexico Export Services | Import Export to Mexico | Patel Impex</title>
        <meta name="description" content="Export to Mexico market with Patel Impex. Professional Mexican import export services, NAFTA benefits, customs clearance for Mexico market entry." />
        <meta name="keywords" content="Mexico export, Mexican import export, export to Mexico, Mexico market entry, Mexican customs clearance, USMCA trade benefits" />
        <link rel="canonical" href="https://patelimpex.com/seo/mexico-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent mb-6">
                Mexico Market Export Services 🇲🇽
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access North America's gateway with comprehensive Mexican export services. USMCA benefits and strategic market entry support for Mexico.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$2.7 Trillion Economy</h3>
                <p className="text-slate-600">Latin America's 2nd largest economy with 128M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">USMCA Benefits</h3>
                <p className="text-slate-600">Strategic location with preferential trade agreements</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Manufacturing Hub</h3>
                <p className="text-slate-600">Global manufacturing center with growing consumer market</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Mexico Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Mexican Customs Clearance",
                  "NOM Standards Compliance", 
                  "COFEPRIS Health Permits",
                  "Spanish Documentation",
                  "Maquiladora Support",
                  "Mexico Market Research",
                  "Distribution Networks",
                  "Port of Veracruz Services",
                  "USMCA Certification"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Mexico Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MexicoMarketExport;