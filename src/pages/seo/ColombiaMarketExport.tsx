import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Coffee, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ColombiaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Colombia Export Services | Import Export to Colombia | Patel Impex</title>
        <meta name="description" content="Export to Colombia market with Patel Impex. Professional Colombian import export services, customs clearance, Pacific Alliance benefits for Colombia market entry." />
        <meta name="keywords" content="Colombia export, Colombian import export, export to Colombia, Colombia market entry, Colombian customs clearance, Pacific Alliance Colombia" />
        <link rel="canonical" href="https://patelimpex.com/seo/colombia-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-700 to-blue-600 bg-clip-text text-transparent mb-6">
                Colombia Market Export Services 🇨🇴
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gateway to South America's northern coast through Colombia. Pacific Alliance advantages and comprehensive Colombian export services for regional success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$800B Economy</h3>
                <p className="text-slate-600">Latin America's 4th largest economy with 51M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Location</h3>
                <p className="text-slate-600">Only South American country with Pacific and Atlantic coasts</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Growing Economy</h3>
                <p className="text-slate-600">Emerging market with expanding middle class and infrastructure</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Colombia Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Colombian Customs Clearance",
                  "ICONTEC Standards Compliance", 
                  "INVIMA Registration",
                  "Spanish Documentation",
                  "Cartagena Port Services",
                  "Bogota Distribution Hub",
                  "Pacific Alliance Benefits",
                  "Colombia Market Research",
                  "Coffee Trade Expertise"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-blue-600 hover:from-yellow-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Colombia Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ColombiaMarketExport;