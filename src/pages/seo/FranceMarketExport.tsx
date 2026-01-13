import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FranceMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>France Export Services | Import Export to France | Patel Impex</title>
        <meta name="description" content="Export to France market with Patel Impex. Professional France import export services, customs clearance, EU compliance, and logistics solutions for French market entry." />
        <meta name="keywords" content="France export, France import export, export to France, French market entry, EU compliance, French customs clearance, European market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/france-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "France Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for France market entry with EU compliance and customs support",
            "areaServed": "France",
            "serviceType": "International Trade"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-red-500">
                  <Globe className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-6">
                France Market Export Services 🇫🇷
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Enter Europe's luxury market leader. Expert France export services with EU compliance, customs clearance, and comprehensive French market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">€2.9 Trillion Economy</h3>
                <p className="text-slate-600">Access Europe's second-largest economy with 68 million consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Luxury Market Leader</h3>
                <p className="text-slate-600">France imports €625 billion worth of goods annually with focus on luxury</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Consumers</h3>
                <p className="text-slate-600">French consumers appreciate quality, style, and authentic products</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our France Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "EU Regulatory Compliance",
                  "French Customs Documentation", 
                  "Port Entry Solutions",
                  "AFNOR Standards Support",
                  "French Market Research",
                  "Luxury Buyer Networks",
                  "Nationwide Distribution",
                  "Retail Chain Connections",
                  "French Language Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">France Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Machinery & Equipment (€120B+)</li>
                    <li>• Chemicals & Materials (€95B+)</li>
                    <li>• Textiles & Fashion (€85B+)</li>
                    <li>• Electronics & Technology (€75B+)</li>
                    <li>• Food & Wine Products (€65B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• CE marking for EU compliance</li>
                    <li>• AFNOR French standards</li>
                    <li>• French product labeling</li>
                    <li>• Environmental certifications</li>
                    <li>• French/English documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start France Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FranceMarketExport;