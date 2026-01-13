import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Smartphone, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EstoniaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Estonia Export Services | Import Export to Estonia | Patel Impex</title>
        <meta name="description" content="Export to Estonia market with Patel Impex. Professional Estonian import export services, customs clearance, EU benefits for Estonia market entry." />
        <meta name="keywords" content="Estonia export, Estonian import export, export to Estonia, Estonia market entry, Estonian customs clearance, EU Baltic digital" />
        <link rel="canonical" href="https://patelimpex.com/seo/estonia-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-black rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-slate-800 bg-clip-text text-transparent mb-6">
                Estonia Market Export Services 🇪🇪
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Digital society opportunities in Estonia. Baltic innovation and comprehensive Estonian export services for Northern European market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$120B Economy</h3>
                <p className="text-slate-600">Digital-first economy with 1.3M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tech Innovation</h3>
                <p className="text-slate-600">World leader in digital governance and e-services</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Baltic Gateway</h3>
                <p className="text-slate-600">Strategic access to Nordic and Baltic markets</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Estonia Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Estonian Customs Clearance",
                  "EVS Standards Compliance", 
                  "Estonian Language Support",
                  "Ministry of Economic Affairs Registration",
                  "Tallinn Port Services",
                  "Digital Infrastructure Access",
                  "Estonia Market Research",
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
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Estonia Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EstoniaMarketExport;