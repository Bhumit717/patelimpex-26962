import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Wind, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const DenmarkMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Denmark Export Services | Import Export to Denmark | Patel Impex</title>
        <meta name="description" content="Export to Denmark market with Patel Impex. Professional Danish import export services, customs clearance, EU benefits for Denmark market entry." />
        <meta name="keywords" content="Denmark export, Danish import export, export to Denmark, Denmark market entry, Danish customs clearance, EU Scandinavia Nordic" />
        <link rel="canonical" href="https://patelimpex.com/seo/denmark-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-red-200">
                  <Globe className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-slate-600 bg-clip-text text-transparent mb-6">
                Denmark Market Export Services 🇩🇰
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gateway to Scandinavia through Denmark. Nordic efficiency and comprehensive Danish export services for European market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Wind className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.1 Trillion Economy</h3>
                <p className="text-slate-600">High-income economy with 5.8M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Green Technology</h3>
                <p className="text-slate-600">World leader in renewable energy and sustainability</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Nordic Gateway</h3>
                <p className="text-slate-600">Strategic access to Scandinavian markets</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Denmark Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Danish Customs Clearance",
                  "DS Standards Compliance", 
                  "Danish Language Support",
                  "Ministry of Business Registration",
                  "Copenhagen Port Services",
                  "Distribution Networks",
                  "Denmark Market Research",
                  "EU Single Market Access",
                  "Green Technology Opportunities"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-slate-600 hover:from-red-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Denmark Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DenmarkMarketExport;