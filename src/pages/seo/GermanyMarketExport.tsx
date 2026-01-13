import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GermanyMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Germany Export Services | Import Export to Germany | Patel Impex</title>
        <meta name="description" content="Export to Germany market with Patel Impex. Professional Germany import export services, customs clearance, CE compliance, and logistics solutions for German market entry." />
        <meta name="keywords" content="Germany export, Deutschland import export, export to Germany, German market entry, CE compliance, German customs clearance, European market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/germany-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Germany Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for Germany market entry with CE compliance and customs support",
            "areaServed": "Germany",
            "serviceType": "International Trade"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-black to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent mb-6">
                Germany Market Export Services 🇩🇪
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access Europe's largest economy. Expert Germany export services with CE compliance, customs clearance, and comprehensive German market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">€4.2 Trillion Economy</h3>
                <p className="text-slate-600">Access Europe's powerhouse market with 83 million affluent consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strong Import Demand</h3>
                <p className="text-slate-600">Germany imports over €1.4 trillion worth of goods annually</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Focus</h3>
                <p className="text-slate-600">German consumers value high-quality products and premium brands</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Germany Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "CE Marking & Compliance",
                  "German Customs Documentation", 
                  "Port Entry Clearance",
                  "DIN Standards Certification",
                  "German Market Analysis",
                  "Buyer Connections",
                  "Logistics to All States",
                  "Distribution Networks",
                  "German Language Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Germany Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Machinery & Equipment (€250B+)</li>
                    <li>• Chemicals & Pharmaceuticals (€180B+)</li>
                    <li>• Electronics & Technology (€150B+)</li>
                    <li>• Automotive Parts (€120B+)</li>
                    <li>• Food & Agricultural Products (€90B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• CE marking for regulated products</li>
                    <li>• DIN standards compliance</li>
                    <li>• German product safety laws</li>
                    <li>• Environmental regulations</li>
                    <li>• German/English documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-black to-red-600 hover:from-gray-800 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Germany Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GermanyMarketExport;