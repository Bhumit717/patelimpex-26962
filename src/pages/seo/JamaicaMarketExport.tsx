import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Palmtree, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const JamaicaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Jamaica Export Services | Import Export to Jamaica | Patel Impex</title>
        <meta name="description" content="Export to Jamaica market with Patel Impex. Professional Jamaican import export services, customs clearance, Caribbean gateway for Jamaica market entry." />
        <meta name="keywords" content="Jamaica export, Jamaican import export, export to Jamaica, Jamaica market entry, Jamaican customs clearance, Caribbean CARICOM" />
        <link rel="canonical" href="https://patelimpex.com/seo/jamaica-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent mb-6">
                Jamaica Market Export Services 🇯🇲
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                One Love island opportunities in Jamaica. Caribbean culture and comprehensive Jamaican export services for regional market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Palmtree className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$45B Economy</h3>
                <p className="text-slate-600">Island economy with 3M consumers and tourism</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tourism & Mining</h3>
                <p className="text-slate-600">Major tourism destination with bauxite mining</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Cultural Influence</h3>
                <p className="text-slate-600">Global cultural impact and brand recognition</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Jamaica Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Jamaican Customs Clearance",
                  "BSJ Standards Compliance", 
                  "English Documentation",
                  "Ministry of Industry Registration",
                  "Kingston Port Services",
                  "Distribution Networks",
                  "Jamaica Market Research",
                  "CARICOM Trade Benefits",
                  "Tourism Sector Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Jamaica Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JamaicaMarketExport;