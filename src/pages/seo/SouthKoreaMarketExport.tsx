import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Zap, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SouthKoreaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>South Korea Export Services | Import Export to Korea | Patel Impex</title>
        <meta name="description" content="Export to South Korea market with Patel Impex. Professional Korean import export services, K-FDA compliance, customs clearance for Korean market entry." />
        <meta name="keywords" content="South Korea export, Korean import export, export to Korea, Korea market entry, Korean customs clearance, K-FDA compliance" />
        <link rel="canonical" href="https://patelimpex.com/seo/south-korea-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-blue-600 bg-clip-text text-transparent mb-6">
                South Korea Export Services 🇰🇷
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access the dynamic Korean market with expert export services. Comprehensive K-FDA compliance and Korean trade support for successful market entry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$2.8 Trillion Economy</h3>
                <p className="text-slate-600">World's 10th largest economy with advanced technology sector</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation Hub</h3>
                <p className="text-slate-600">Global leader in technology and consumer electronics</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Standards</h3>
                <p className="text-slate-600">High quality standards and sophisticated consumer preferences</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Korea Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "K-FDA Registration",
                  "Korean Customs Clearance", 
                  "KC Safety Certification",
                  "Korean Language Labeling",
                  "KATS Standards Compliance",
                  "Korean Distributor Networks",
                  "Busan Port Services",
                  "E-commerce Platforms",
                  "Hallyu Market Insights"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Korea Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SouthKoreaMarketExport;