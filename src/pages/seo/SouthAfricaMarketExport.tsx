import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Diamond, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SouthAfricaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>South Africa Export Services | Import Export to South Africa | Patel Impex</title>
        <meta name="description" content="Export to South Africa market with Patel Impex. Professional South African import export services, customs clearance, SADC benefits for African market entry." />
        <meta name="keywords" content="South Africa export, South African import export, export to South Africa, South Africa market entry, SADC trade benefits, Cape Town port" />
        <link rel="canonical" href="https://patelimpex.com/seo/south-africa-market-export" />
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
                South Africa Export Services 🇿🇦
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gateway to African markets through South Africa. SADC advantages and comprehensive South African export services for continental market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Diamond className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.0 Trillion Economy</h3>
                <p className="text-slate-600">Africa's 2nd largest economy with 60M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Industrial Hub</h3>
                <p className="text-slate-600">Most industrialized African economy with advanced infrastructure</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">SADC Gateway</h3>
                <p className="text-slate-600">Access to 16 Southern African Development Community markets</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our South Africa Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "SARS Customs Clearance",
                  "SABS Standards Compliance", 
                  "SAHPRA Registration",
                  "Multi-language Support",
                  "Cape Town Port Services",
                  "Durban Port Services",
                  "SADC Certificate of Origin",
                  "BEE Compliance Support",
                  "African Market Networks"
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
                <span>Start South Africa Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SouthAfricaMarketExport;