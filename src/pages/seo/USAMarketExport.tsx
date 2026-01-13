import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const USAMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>USA Export Services | Import Export to America | Patel Impex</title>
        <meta name="description" content="Export to USA market with Patel Impex. Professional USA import export services, customs clearance, FDA compliance, and logistics solutions for American market entry." />
        <meta name="keywords" content="USA export, America import export, export to USA, USA market entry, FDA compliance, US customs clearance, American market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/usa-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "USA Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for USA market entry with FDA compliance and customs support",
            "areaServed": "United States",
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
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-red-600 bg-clip-text text-transparent mb-6">
                USA Market Export Services 🇺🇸
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Expand your business to the world's largest economy. Expert USA export services with FDA compliance, customs clearance, and comprehensive market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$21.4 Trillion Economy</h3>
                <p className="text-slate-600">Access the world's largest consumer market with over 330 million potential customers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">High Import Volume</h3>
                <p className="text-slate-600">USA imports over $2.4 trillion worth of goods annually, creating massive opportunities</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Market</h3>
                <p className="text-slate-600">American consumers pay premium prices for quality products and services</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our USA Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "FDA Registration & Compliance",
                  "US Customs Documentation", 
                  "Port of Entry Clearance",
                  "USDA Certification Support",
                  "American Market Research",
                  "US Buyer Connections",
                  "Logistics to All US States",
                  "Warehousing Solutions",
                  "Distribution Networks"
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
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">USA Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Electronics & Technology ($400B+)</li>
                    <li>• Machinery & Equipment ($350B+)</li>
                    <li>• Automotive & Parts ($300B+)</li>
                    <li>• Textiles & Apparel ($100B+)</li>
                    <li>• Food Products ($150B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• FDA approval for food/medical items</li>
                    <li>• FCC certification for electronics</li>
                    <li>• EPA compliance for chemicals</li>
                    <li>• DOT approval for transportation</li>
                    <li>• Proper product labeling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start USA Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default USAMarketExport;