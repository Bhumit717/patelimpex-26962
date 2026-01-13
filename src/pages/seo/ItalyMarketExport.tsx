import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ItalyMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Italy Export Services | Import Export to Italy | Patel Impex</title>
        <meta name="description" content="Export to Italy market with Patel Impex. Professional Italy import export services, customs clearance, EU compliance, and logistics solutions for Italian market entry." />
        <meta name="keywords" content="Italy export, Italia import export, export to Italy, Italian market entry, EU compliance, Italian customs clearance, European market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/italy-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Italy Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for Italy market entry with EU compliance and customs support",
            "areaServed": "Italy",
            "serviceType": "International Trade"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent mb-6">
                Italy Market Export Services 🇮🇹
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Enter Italy's design and manufacturing powerhouse. Expert Italy export services with EU compliance, customs clearance, and comprehensive Italian market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">€2.1 Trillion Economy</h3>
                <p className="text-slate-600">Access Europe's third-largest economy with 60 million consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strong Import Market</h3>
                <p className="text-slate-600">Italy imports over €450 billion worth of goods annually</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Design Excellence</h3>
                <p className="text-slate-600">Italian consumers value style, design, and quality craftsmanship</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Italy Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "EU Regulatory Compliance",
                  "Italian Customs Documentation", 
                  "Port Entry Solutions",
                  "UNI Standards Support",
                  "Italian Market Analysis",
                  "Fashion & Design Networks",
                  "Regional Distribution",
                  "Retail Partnerships",
                  "Italian Language Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Italy Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Machinery & Equipment (€85B+)</li>
                    <li>• Chemicals & Materials (€70B+)</li>
                    <li>• Textiles & Fashion (€55B+)</li>
                    <li>• Electronics & Technology (€45B+)</li>
                    <li>• Food & Agricultural Products (€40B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• CE marking for EU compliance</li>
                    <li>• UNI Italian standards</li>
                    <li>• Italian product labeling</li>
                    <li>• Environmental regulations</li>
                    <li>• Italian/English documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Italy Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ItalyMarketExport;