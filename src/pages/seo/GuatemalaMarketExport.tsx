import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Mountain, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GuatemalaMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Guatemala Export Services | Import Export to Guatemala | Patel Impex</title>
        <meta name="description" content="Export to Guatemala market with Patel Impex. Professional Guatemalan import export services, customs clearance, Central America gateway for Guatemala market entry." />
        <meta name="keywords" content="Guatemala export, Guatemalan import export, export to Guatemala, Guatemala market entry, Guatemalan customs clearance, Central America CAFTA" />
        <link rel="canonical" href="https://patelimpex.com/seo/guatemala-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-blue-200">
                  <Globe className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-slate-600 bg-clip-text text-transparent mb-6">
                Guatemala Market Export Services 🇬🇹
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Heart of the Mayan world opportunities in Guatemala. Central American hub and comprehensive Guatemalan export services for regional market access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$240B Economy</h3>
                <p className="text-slate-600">Central America's largest economy with 18M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Coffee Heritage</h3>
                <p className="text-slate-600">World-renowned coffee and agricultural exports</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Regional Hub</h3>
                <p className="text-slate-600">Strategic location in Central America</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Guatemala Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Guatemalan Customs Clearance",
                  "COGUANOR Standards Compliance", 
                  "Spanish Documentation",
                  "Ministry of Economy Registration",
                  "Puerto Quetzal Services",
                  "Guatemala City Distribution",
                  "Guatemala Market Research",
                  "CAFTA-DR Benefits",
                  "Coffee Export Expertise"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Guatemala Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GuatemalaMarketExport;