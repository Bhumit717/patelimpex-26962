import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Shirt, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BangladeshMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Bangladesh Export Services | Import Export to Bangladesh | Patel Impex</title>
        <meta name="description" content="Export to Bangladesh market with Patel Impex. Professional Bangladeshi import export services, customs clearance, SAARC benefits for Bangladesh market entry." />
        <meta name="keywords" content="Bangladesh export, Bangladeshi import export, export to Bangladesh, Bangladesh market entry, Bangladeshi customs clearance, SAARC trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/bangladesh-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent mb-6">
                Bangladesh Market Export Services 🇧🇩
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gateway to South Asian markets through Bangladesh. Textile powerhouse with SAARC advantages and comprehensive Bangladeshi export services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Shirt className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.3 Trillion Economy</h3>
                <p className="text-slate-600">World's 2nd largest textile exporter with 166M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Manufacturing Hub</h3>
                <p className="text-slate-600">Ready-made garments and pharmaceutical manufacturing center</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Young Population</h3>
                <p className="text-slate-600">Demographic dividend with growing middle class consumption</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Bangladesh Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Bangladesh Customs Clearance",
                  "BSTI Standards Compliance", 
                  "DGDA Registration",
                  "Bengali & English Documentation",
                  "Chittagong Port Services",
                  "Dhaka Distribution Networks",
                  "SAARC Certificate of Origin",
                  "Bangladesh Market Research",
                  "Textile Industry Expertise"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Bangladesh Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BangladeshMarketExport;