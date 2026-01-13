import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SingaporeMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Singapore Export Services | Import Export to Singapore | Patel Impex</title>
        <meta name="description" content="Export to Singapore market with Patel Impex. Professional Singapore import export services, customs clearance, regulatory compliance, and logistics solutions for Singapore market entry." />
        <meta name="keywords" content="Singapore export, Singapore import export, export to Singapore, Singapore market entry, SPRING compliance, Singapore customs clearance, Asian market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/singapore-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Singapore Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for Singapore market entry with regulatory compliance and customs support",
            "areaServed": "Singapore",
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
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-white rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-slate-800 bg-clip-text text-transparent mb-6">
                Singapore Market Export Services 🇸🇬
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Gateway to Southeast Asia and global trade hub. Expert Singapore export services with regulatory compliance, customs clearance, and comprehensive market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$400 Billion Economy</h3>
                <p className="text-slate-600">Access Asia's financial hub with 5.9 million high-income residents</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Trade Gateway</h3>
                <p className="text-slate-600">Singapore imports $350 billion annually, gateway to ASEAN markets</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Business Excellence</h3>
                <p className="text-slate-600">World's easiest place to do business with pro-trade policies</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-red-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Singapore Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "SPRING Singapore Compliance",
                  "Singapore Customs Documentation", 
                  "Port Solutions",
                  "ASEAN Market Access",
                  "Singapore Market Research",
                  "Business Networks",
                  "Regional Distribution Hub",
                  "Financial Services Support",
                  "English Language Support"
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
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Singapore Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Electronics & Semiconductors (€120B+)</li>
                    <li>• Machinery & Equipment (€85B+)</li>
                    <li>• Chemicals & Petrochemicals (€65B+)</li>
                    <li>• Food & Beverages (€45B+)</li>
                    <li>• Transport Equipment (€35B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Singapore Safety Mark (SAFETY)</li>
                    <li>• SPRING Singapore standards</li>
                    <li>• Health Sciences Authority (HSA)</li>
                    <li>• English product labeling</li>
                    <li>• Halal certification (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-slate-800 hover:from-red-700 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Singapore Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SingaporeMarketExport;