import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Star, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PakistanMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Pakistan Export Services | Import Export to Pakistan | Patel Impex</title>
        <meta name="description" content="Export to Pakistan market with Patel Impex. Professional Pakistani import export services, customs clearance, SAARC benefits for Pakistan market entry." />
        <meta name="keywords" content="Pakistan export, Pakistani import export, export to Pakistan, Pakistan market entry, Pakistani customs clearance, SAARC Pakistan" />
        <link rel="canonical" href="https://patelimpex.com/seo/pakistan-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-green-200">
                  <Globe className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-slate-600 bg-clip-text text-transparent mb-6">
                Pakistan Market Export Services 🇵🇰
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Strategic South Asian market through Pakistan. CPEC advantages and comprehensive Pakistani export services for regional trade success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.8 Trillion Economy</h3>
                <p className="text-slate-600">World's 5th most populous country with 230M consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">CPEC Gateway</h3>
                <p className="text-slate-600">China-Pakistan Economic Corridor trade opportunities</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Agricultural Base</h3>
                <p className="text-slate-600">Strong agricultural economy with textile manufacturing</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Pakistan Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Pakistan Customs Clearance",
                  "PSQCA Standards Compliance", 
                  "DRAP Registration",
                  "Urdu & English Documentation",
                  "Karachi Port Services",
                  "Lahore Distribution Hub",
                  "SAARC Certificate of Origin",
                  "Pakistan Market Research",
                  "Halal Certification Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-slate-600 hover:from-green-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Pakistan Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PakistanMarketExport;