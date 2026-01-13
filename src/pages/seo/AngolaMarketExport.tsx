import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Diamond, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AngolaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Angola Export Services | Import Export to Angola | Patel Impex</title>
        <meta name="description" content="Export to Angola market with Patel Impex. Professional Angolan import export services, customs clearance, SADC benefits for Angola market entry." />
        <meta name="keywords" content="Angola export, Angolan import export, export to Angola, Angola market entry, Angolan customs clearance, SADC Angola oil" />
        <link rel="canonical" href="https://patelimpex.com/seo/angola-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-slate-800 bg-clip-text text-transparent mb-6">
                Angola Market Export Services 🇦🇴
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gateway to Southern Africa through Angola. Oil-rich economy and comprehensive Angolan export services for SADC market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Diamond className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$580B Economy</h3>
                <p className="text-slate-600">Oil-rich economy with 35M consumers and diamond reserves</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Resource Wealth</h3>
                <p className="text-slate-600">Major oil exporter with agricultural potential</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Atlantic Gateway</h3>
                <p className="text-slate-600">Strategic coastal location with deep-water ports</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Angola Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Angolan Customs Clearance",
                  "IANORQ Standards Compliance", 
                  "Portuguese Documentation",
                  "Ministry of Commerce Permits",
                  "Luanda Port Services",
                  "Distribution Networks",
                  "Angola Market Research",
                  "Local Business Partners",
                  "Oil Sector Opportunities"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-slate-800 hover:from-red-700 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Angola Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AngolaMarketExport;