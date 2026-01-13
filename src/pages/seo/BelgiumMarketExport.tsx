import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Globe, DollarSign, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BelgiumMarketExport = () => {
  return (
    <>
      <Helmet>
        <title>Belgium Export Services | Import Export to Belgium | Patel Impex</title>
        <meta name="description" content="Export to Belgium market with Patel Impex. Professional Belgium import export services, customs clearance, EU compliance, and logistics solutions for Belgian market entry." />
        <meta name="keywords" content="Belgium export, België import export, export to Belgium, Belgian market entry, EU compliance, Belgium customs clearance, European market export services" />
        <link rel="canonical" href="https://patelimpex.com/seo/belgium-market-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Belgium Market Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Professional export services for Belgium market entry with EU compliance and customs support",
            "areaServed": "Belgium",
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
                <div className="w-24 h-24 bg-gradient-to-br from-black to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black to-yellow-600 bg-clip-text text-transparent mb-6">
                Belgium Market Export Services 🇧🇪
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Heart of Europe and EU headquarters. Expert Belgium export services with EU compliance, customs clearance, and comprehensive Belgian market entry support.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">€530 Billion Economy</h3>
                <p className="text-slate-600">Access EU's administrative center with 11.5 million consumers</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">EU Gateway</h3>
                <p className="text-slate-600">Belgium imports €385 billion annually, gateway to European institutions</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Business Hub</h3>
                <p className="text-slate-600">Strategic location for European business and trade operations</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Belgium Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "EU Regulatory Compliance",
                  "Belgian Customs Documentation", 
                  "Antwerp Port Solutions",
                  "NBN Standards Support",
                  "Belgian Market Analysis",
                  "EU Institution Networks",
                  "Benelux Distribution",
                  "Multilingual Support",
                  "French/Dutch/English"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-gradient-to-r from-yellow-50 to-black-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Belgium Market Insights</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Top Import Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Chemicals & Pharmaceuticals (€95B+)</li>
                    <li>• Machinery & Equipment (€65B+)</li>
                    <li>• Diamonds & Precious Metals (€45B+)</li>
                    <li>• Energy & Fuels (€40B+)</li>
                    <li>• Food & Beverages (€35B+)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Requirements</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• CE marking for EU compliance</li>
                    <li>• NBN Belgian standards</li>
                    <li>• Multilingual labeling (FR/NL)</li>
                    <li>• Environmental regulations</li>
                    <li>• EU customs procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-black to-yellow-600 hover:from-gray-800 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Belgium Export Journey</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BelgiumMarketExport;