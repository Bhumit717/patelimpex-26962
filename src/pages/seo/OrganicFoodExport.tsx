import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Shield, Globe, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrganicFoodExport = () => {
  return (
    <>
      <Helmet>
        <title>Organic Food Export Services | Certified Organic Exports | Patel Impex</title>
        <meta name="description" content="Export organic food products globally with Patel Impex. Certified organic food export services with compliance support, quality assurance, and international market access." />
        <meta name="keywords" content="organic food export, certified organic exports, organic certification, USDA organic, EU organic, organic food trade, natural food exports" />
        <link rel="canonical" href="https://patelimpex.com/seo/organic-food-export" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Organic Food Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Certified organic food export services with global compliance and quality assurance",
            "serviceType": "Organic Food Trading"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">
                Organic Food Export Services 🌱
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export certified organic food products to global markets. Comprehensive organic compliance, certification support, and quality assurance for premium organic food trade.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$220B+ Market</h3>
                <p className="text-slate-600">Global organic food market growing at 6.2% annually with premium pricing</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Certified Quality</h3>
                <p className="text-slate-600">USDA, EU, JAS, and other international organic certifications supported</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Reach</h3>
                <p className="text-slate-600">Export to 50+ countries with established organic import protocols</p>
              </div>
            </div>

            {/* Product Categories */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Organic Product Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Organic Grains & Cereals",
                  "Organic Spices & Herbs", 
                  "Organic Pulses & Legumes",
                  "Organic Tea & Coffee",
                  "Organic Oils & Ghee",
                  "Organic Dried Fruits",
                  "Organic Honey Products",
                  "Organic Rice Varieties",
                  "Organic Superfoods"
                ].map((product, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Organic Certifications We Handle</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">International Standards</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• USDA Organic (United States)</li>
                    <li>• EU Organic Regulation (Europe)</li>
                    <li>• JAS Organic (Japan)</li>
                    <li>• Canada Organic Regime</li>
                    <li>• APEDA Organic (India)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Quality Assurance</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Third-party certification support</li>
                    <li>• Organic integrity maintenance</li>
                    <li>• Supply chain documentation</li>
                    <li>• Traceability systems</li>
                    <li>• Regular compliance audits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Organic Market Trends</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Premium Pricing</h3>
                  <p className="text-slate-600">Organic products command 20-40% premium over conventional products</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Growing Demand</h3>
                  <p className="text-slate-600">Health-conscious consumers driving 8%+ annual growth in organic sales</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Global Expansion</h3>
                  <p className="text-slate-600">Organic markets expanding rapidly in Asia, Middle East, and Africa</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Leaf className="h-6 w-6" />
                <span>Start Organic Export Business</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrganicFoodExport;