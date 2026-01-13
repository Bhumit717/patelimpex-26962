import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Mountain, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GeorgiaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Georgia Export Services | Import Export to Georgia | Patel Impex</title>
        <meta name="description" content="Export to Georgia market with Patel Impex. Professional Georgian import export services, customs clearance, Caucasus gateway for Georgia market entry." />
        <meta name="keywords" content="Georgia export, Georgian import export, export to Georgia, Georgia market entry, Georgian customs clearance, Caucasus wine country" />
        <link rel="canonical" href="https://patelimpex.com/seo/georgia-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-white to-red-600 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-red-200">
                  <Globe className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-700 to-red-600 bg-clip-text text-transparent mb-6">
                Georgia Market Export Services 🇬🇪
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Cradle of wine opportunities in Georgia. Caucasus crossroads and comprehensive Georgian export services for regional market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$65B Economy</h3>
                <p className="text-slate-600">Growing economy with 3.7M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Wine Heritage</h3>
                <p className="text-slate-600">World's oldest wine-making region</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Location</h3>
                <p className="text-slate-600">Bridge between Europe and Asia</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Georgia Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Georgian Customs Clearance",
                  "GEOSTM Standards Compliance", 
                  "Georgian Language Support",
                  "Ministry of Economy Registration",
                  "Batumi Port Services",
                  "Tbilisi Distribution Hub",
                  "Georgia Market Research",
                  "Wine Export Expertise",
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
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-600 to-red-600 hover:from-slate-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Georgia Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GeorgiaMarketExport;