import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Wheat, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WheatFlourExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Wheat Flour Export Services | Indian Wheat Flour Export | Patel Impex</title>
        <meta name="description" content="Premium wheat flour export services by Patel Impex. Export high-quality Indian wheat flour globally with quality testing, packaging, and international logistics." />
        <meta name="keywords" content="wheat flour export, Indian wheat flour export, atta export, maida export, whole wheat flour export, flour trading, international flour market" />
        <link rel="canonical" href="https://patelimpex.com/seo/wheat-flour-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wheat Flour Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium wheat flour export services with quality testing and international logistics",
            "serviceType": "Food Export",
            "category": "Flour Export"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Wheat Flour Export Services 🌾
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian wheat flour worldwide. Professional wheat flour export services with quality testing, packaging solutions, and comprehensive international logistics.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Flour Market</h3>
                <p className="text-slate-600">$150 billion global flour market with consistent food industry demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600">Export superior Indian wheat flour with excellent protein content</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Assurance</h3>
                <p className="text-slate-600">Advanced milling technology and international food safety standards</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-amber-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Wheat Flour Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Wheat Sourcing",
                  "Advanced Milling Process", 
                  "Protein Content Analysis",
                  "Gluten Quality Testing",
                  "Moisture Control",
                  "Sieving & Purification",
                  "Food Safety Certification",
                  "Custom Packaging",
                  "Bulk Container Loading"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flour Types */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Wheat Flour Export Types</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Flour Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Whole Wheat Flour (Atta)</li>
                    <li>• All-Purpose Flour (Maida)</li>
                    <li>• Semolina (Suji/Rava)</li>
                    <li>• Bran (Wheat Husk)</li>
                    <li>• Organic Wheat Flour</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Quality Standards</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Protein content: 11-14%</li>
                    <li>• Gluten content: 8-12%</li>
                    <li>• Moisture: Max 14%</li>
                    <li>• Ash content: &lt;1.5%</li>
                    <li>• FSSAI & HACCP certified</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Wheat Flour Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WheatFlourExportServices;