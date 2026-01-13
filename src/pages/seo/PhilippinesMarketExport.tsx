import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, Waves, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PhilippinesMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Philippines Export Services | Import Export to Philippines | Patel Impex</title>
        <meta name="description" content="Export to Philippines market with Patel Impex. Professional Filipino import export services, customs clearance, FDA Philippines compliance for market entry." />
        <meta name="keywords" content="Philippines export, Filipino import export, export to Philippines, Philippines market entry, Filipino customs clearance, FDA Philippines" />
        <link rel="canonical" href="https://patelimpex.com/seo/philippines-market-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent mb-6">
                Philippines Market Export Services 🇵🇭
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access the vibrant Filipino market with comprehensive export services. Island nation logistics and regulatory expertise for successful Philippines trade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Waves className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.0 Trillion Economy</h3>
                <p className="text-slate-600">Emerging market with 110M consumers across 7,000 islands</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Young Population</h3>
                <p className="text-slate-600">Median age 25 years with growing consumer spending</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">BPO Hub</h3>
                <p className="text-slate-600">Business process outsourcing and IT services center</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Philippines Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Philippines Customs Clearance",
                  "BPS Standards Compliance", 
                  "FDA Philippines Registration",
                  "DOH Health Certificates",
                  "Manila Port Services",
                  "Island Distribution Networks",
                  "Philippines Market Research",
                  "English Language Advantage",
                  "Remittance Market Access"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Philippines Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PhilippinesMarketExport;