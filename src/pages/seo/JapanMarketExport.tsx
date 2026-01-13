import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const JapanMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Japan Export Services | Import Export to Japan | Patel Impex</title>
        <meta name="description" content="Export to Japan market with Patel Impex. Professional Japan import export services, customs clearance, JIS compliance, and logistics solutions for Japanese market entry." />
        <meta name="keywords" content="Japan export, Nihon import export, export to Japan, Japanese market entry, JIS compliance, Japan customs clearance, Asian market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/japan-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Japan Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for Japan market entry with JIS compliance and customs support",
            "areaServed": "Japan",
            "serviceType": "International Trade"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-white rounded-3xl flex items-center justify-center shadow-2xl border-2 border-red-500">
                  <Globe className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-slate-800 bg-clip-text text-transparent mb-6">
                Japan Market Export Services 🇯🇵
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Access Asia's premium market leader. Expert Japan export services with JIS compliance, customs clearance, and comprehensive Japanese market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$4.2 Trillion Economy</h3>
                <p className="text-slate-600">Access the world's third-largest economy with 125 million consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Market</h3>
                <p className="text-slate-600">Japan imports $720 billion annually with focus on quality</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Standards</h3>
                <p className="text-slate-600">Japanese consumers demand the highest quality and precision</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Japan Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "JIS Standards Compliance",
                  "Japanese Customs Documentation", 
                  "Port Entry Solutions",
                  "JETRO Support Services",
                  "Japanese Market Research",
                  "Premium Buyer Networks",
                  "Nationwide Distribution",
                  "Retail Chain Access",
                  "Japanese Language Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-gradient-to-r from-red-50 to-slate-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Japan Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Energy & Fuels (€180B+)</li>
                    <li>• Machinery & Equipment (€120B+)</li>
                    <li>• Food & Agricultural Products (€80B+)</li>
                    <li>• Chemicals & Materials (€75B+)</li>
                    <li>• Textiles & Fashion (€55B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• JIS (Japanese Industrial Standards)</li>
                    <li>• Food sanitation law compliance</li>
                    <li>• Pharmaceutical affairs law</li>
                    <li>• Japanese product labeling</li>
                    <li>• Strict quality certifications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-slate-800 hover:from-red-700 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Japan Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JapanMarketExport;