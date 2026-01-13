import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Droplets, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CasheOilExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Cashew Oil Export Services | Premium Cashew Oil Export | Patel Impex</title>
        <meta name="description" content="Premium cashew oil export services by Patel Impex. Export high-quality Indian cashew oil globally with quality testing, packaging, and international logistics." />
        <meta name="keywords" content="cashew oil export, Indian cashew oil export, nut oil export, edible oil export, cashew nut shell oil, industrial oil export" />
        <link rel="canonical" href="https://patelimpex.com/seo/cashew-oil-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cashew Oil Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium cashew oil export services with quality testing and international logistics",
            "serviceType": "Oil Export",
            "category": "Edible Oil Export"
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
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Droplets className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Cashew Oil Export Services 🥜
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian cashew oil worldwide. Professional cashew oil export services with quality testing, packaging solutions, and comprehensive international logistics.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Globe className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Specialty Oil Market</h3>
                <p className="text-slate-600">Growing demand for premium nut oils in health-conscious markets</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600">Export cold-pressed cashew oil with excellent nutritional profile</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Standards</h3>
                <p className="text-slate-600">International food safety and quality certification compliance</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Cashew Oil Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Cashew Sourcing",
                  "Cold Press Extraction", 
                  "Oil Quality Analysis",
                  "Fatty Acid Profile Testing",
                  "Purity Verification",
                  "Filtration & Refining",
                  "Food Grade Packaging",
                  "Temperature Control",
                  "Shelf Life Testing"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Oil Types */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Cashew Oil Export Types</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Oil Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Cold-Pressed Cashew Oil</li>
                    <li>• Refined Cashew Oil</li>
                    <li>• Organic Cashew Oil</li>
                    <li>• Cashew Nut Shell Oil (CNSL)</li>
                    <li>• Virgin Cashew Oil</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Quality Parameters</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Acid value: &lt;2.0 mg KOH/g</li>
                    <li>• Peroxide value: &lt;10 meq O2/kg</li>
                    <li>• Moisture: &lt;0.2%</li>
                    <li>• Free fatty acids: &lt;1%</li>
                    <li>• ISO 22000 certified</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Cashew Oil Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CasheOilExportServices;