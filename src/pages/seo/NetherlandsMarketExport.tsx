import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NetherlandsMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Netherlands Export Services | Import Export to Netherlands | Patel Impex</title>
        <meta name="description" content="Export to Netherlands market with Patel Impex. Professional Netherlands import export services, customs clearance, EU compliance, and logistics solutions for Dutch market entry." />
        <meta name="keywords" content="Netherlands export, Holland import export, export to Netherlands, Dutch market entry, EU compliance, Netherlands customs clearance, European market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/netherlands-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Netherlands Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for Netherlands market entry with EU compliance and customs support",
            "areaServed": "Netherlands",
            "serviceType": "International Trade"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Netherlands Market Export Services 🇳🇱
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Europe's logistics hub and innovation center. Expert Netherlands export services with EU compliance, customs clearance, and comprehensive Dutch market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">€900 Billion Economy</h3>
                <p className="text-slate-600">Access Europe's sixth-largest economy with 17.5 million affluent consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Logistics Gateway</h3>
                <p className="text-slate-600">Netherlands imports €550 billion annually, European distribution hub</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation Leaders</h3>
                <p className="text-slate-600">Dutch consumers embrace innovative and sustainable products</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-orange-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Netherlands Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "EU Regulatory Compliance",
                  "Dutch Customs Documentation", 
                  "Rotterdam Port Solutions",
                  "NEN Standards Support",
                  "Dutch Market Analysis",
                  "Innovation Networks",
                  "European Distribution Hub",
                  "Retail Chain Access",
                  "Dutch/English Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Netherlands Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Machinery & Equipment (€120B+)</li>
                    <li>• Chemicals & Materials (€95B+)</li>
                    <li>• Energy & Fuels (€85B+)</li>
                    <li>• Electronics & Technology (€75B+)</li>
                    <li>• Food & Agricultural Products (€65B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• CE marking for EU compliance</li>
                    <li>• NEN Dutch standards</li>
                    <li>• Sustainability certifications</li>
                    <li>• Dutch product labeling</li>
                    <li>• Environmental regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Netherlands Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NetherlandsMarketExport;