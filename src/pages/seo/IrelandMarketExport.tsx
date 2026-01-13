import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Clover, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IrelandMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Ireland Export Services | Import Export to Ireland | Patel Impex</title>
        <meta name="description" content="Export to Ireland market with Patel Impex. Professional Irish import export services, customs clearance, EU benefits for Ireland market entry." />
        <meta name="keywords" content="Ireland export, Irish import export, export to Ireland, Ireland market entry, Irish customs clearance, EU technology pharma" />
        <link rel="canonical" href="https://patelimpex.com/seo/ireland-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent mb-6">
                Ireland Market Export Services 🇮🇪
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Emerald Isle opportunities in Ireland. EU gateway and comprehensive Irish export services for European market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Clover className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.4 Trillion Economy</h3>
                <p className="text-slate-600">High-tech economy with 5M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tech & Pharma Hub</h3>
                <p className="text-slate-600">Global center for technology and pharmaceuticals</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">English Speaking</h3>
                <p className="text-slate-600">Only English-speaking EU member state</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Ireland Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Irish Customs Clearance",
                  "NSAI Standards Compliance", 
                  "English Documentation",
                  "Enterprise Ireland Registration",
                  "Dublin Port Services",
                  "Distribution Networks",
                  "Ireland Market Research",
                  "EU Single Market Access",
                  "Tech Sector Opportunities"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Ireland Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IrelandMarketExport;