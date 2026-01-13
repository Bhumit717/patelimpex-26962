import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Mountain, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ChileMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Chile Export Services | Import Export to Chile | Patel Impex</title>
        <meta name="description" content="Export to Chile market with Patel Impex. Professional Chilean import export services, customs clearance, Pacific Alliance benefits for Chile market entry." />
        <meta name="keywords" content="Chile export, Chilean import export, export to Chile, Chile market entry, Chilean customs clearance, Pacific Alliance trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/chile-market-export" />
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
                Chile Market Export Services 🇨🇱
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Pacific gateway to South America through Chile. Pacific Alliance benefits and comprehensive Chilean export services for regional market success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$500B Economy</h3>
                <p className="text-slate-600">High-income economy with 19M sophisticated consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Mining Powerhouse</h3>
                <p className="text-slate-600">World's largest copper producer with stable economy</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Pacific Alliance</h3>
                <p className="text-slate-600">Member of Pacific Alliance promoting free trade</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Chile Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Chilean Customs Clearance",
                  "INN Standards Compliance", 
                  "ISP Health Registration",
                  "Spanish Documentation",
                  "Valparaiso Port Services",
                  "Pacific Alliance Benefits",
                  "Chile Market Research",
                  "Santiago Distribution Hub",
                  "Wine & Agriculture Expertise"
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
                <span>Start Chile Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ChileMarketExport;