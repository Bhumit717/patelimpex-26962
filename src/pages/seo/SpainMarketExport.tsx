import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SpainMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Spain Export Services | Import Export to Spain | Patel Impex</title>
        <meta name="description" content="Export to Spain market with Patel Impex. Professional Spain import export services, customs clearance, EU compliance, and logistics solutions for Spanish market entry." />
        <meta name="keywords" content="Spain export, España import export, export to Spain, Spanish market entry, EU compliance, Spanish customs clearance, European market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/spain-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Spain Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for Spain market entry with EU compliance and customs support",
            "areaServed": "Spain",
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
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent mb-6">
                Spain Market Export Services 🇪🇸
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gateway to Europe and Latin America. Expert Spain export services with EU compliance, customs clearance, and comprehensive Spanish market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">€1.4 Trillion Economy</h3>
                <p className="text-slate-600">Access Europe's fourth-largest economy with 47 million consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Gateway</h3>
                <p className="text-slate-600">Spain imports €350 billion annually, gateway to Latin America</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Growing Market</h3>
                <p className="text-slate-600">Spanish consumers increasingly value quality international products</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Spain Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "EU Regulatory Compliance",
                  "Spanish Customs Documentation", 
                  "Port Entry Solutions",
                  "AENOR Standards Support",
                  "Spanish Market Research",
                  "Regional Buyer Networks",
                  "Distribution Solutions",
                  "Retail Chain Access",
                  "Spanish Language Support"
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
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Spain Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Machinery & Equipment (€65B+)</li>
                    <li>• Energy & Fuels (€55B+)</li>
                    <li>• Chemicals & Materials (€45B+)</li>
                    <li>• Textiles & Fashion (€35B+)</li>
                    <li>• Food & Agricultural Products (€30B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• CE marking for EU compliance</li>
                    <li>• AENOR Spanish standards</li>
                    <li>• Spanish product labeling</li>
                    <li>• Environmental certifications</li>
                    <li>• Spanish/English documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Spain Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SpainMarketExport;