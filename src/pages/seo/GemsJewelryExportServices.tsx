import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Diamond, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GemsJewelryExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Gems & Jewelry Export Services | Indian Jewelry Export | Patel Impex</title>
        <meta name="description" content="Premium gems and jewelry export services by Patel Impex. Export exquisite Indian jewelry and precious stones globally with authentication and secure logistics." />
        <meta name="keywords" content="jewelry export, Indian jewelry export, gems export, precious stones export, gold jewelry export, silver jewelry export, diamond export" />
        <link rel="canonical" href="https://patelimpex.com/seo/gems-jewelry-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Gems & Jewelry Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium gems and jewelry export services with authentication and secure logistics",
            "serviceType": "Luxury Export",
            "category": "Jewelry Export"
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
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Diamond className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Gems & Jewelry Export Services 💎
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export exquisite Indian gems and jewelry worldwide. Professional jewelry export services with authentication, certification, and secure international logistics.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Globe className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Jewelry Market</h3>
                <p className="text-slate-600">$348 billion global jewelry market with luxury segment growth</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Authentic Craftsmanship</h3>
                <p className="text-slate-600">Export traditional Indian jewelry with heritage designs</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Certified Authenticity</h3>
                <p className="text-slate-600">Gemstone certification and precious metal authentication</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Jewelry Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Gemstone Authentication",
                  "Precious Metal Assay", 
                  "Design Documentation",
                  "Quality Certification",
                  "Valuation Services",
                  "Secure Packaging",
                  "Insurance Coverage",
                  "Customs Documentation",
                  "Track & Trace Delivery"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Categories */}
            <div className="bg-gradient-to-r from-yellow-50 to-purple-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Jewelry Export Categories</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Product Range</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Gold Jewelry & Ornaments</li>
                    <li>• Silver Jewelry & Artifacts</li>
                    <li>• Precious Gemstones</li>
                    <li>• Costume & Fashion Jewelry</li>
                    <li>• Traditional Indian Jewelry</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Certifications</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• BIS Hallmark certification</li>
                    <li>• Gemological certificates</li>
                    <li>• Conflict-free certification</li>
                    <li>• Customs valuation docs</li>
                    <li>• International standards compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-purple-600 hover:from-yellow-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Jewelry Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GemsJewelryExportServices;