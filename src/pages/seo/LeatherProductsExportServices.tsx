import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Briefcase, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LeatherProductsExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Leather Products Export Services | Indian Leather Export | Patel Impex</title>
        <meta name="description" content="Premium leather products export services by Patel Impex. Export high-quality Indian leather goods globally with quality assurance and international logistics." />
        <meta name="keywords" content="leather export, Indian leather products export, leather goods export, leather bags export, leather shoes export, leather accessories export" />
        <link rel="canonical" href="https://patelimpex.com/seo/leather-products-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Leather Products Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium leather products export services with quality assurance",
            "serviceType": "Manufacturing Export",
            "category": "Leather Export"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-brown-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-brown-600 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Briefcase className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brown-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Leather Products Export Services 👜
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian leather products worldwide. Professional leather goods export services with quality assurance, craftsmanship verification, and comprehensive international logistics.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brown-100 text-center">
                <Globe className="h-12 w-12 text-brown-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Leather Market</h3>
                <p className="text-slate-600">$95 billion global leather goods market with premium demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brown-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Craftsmanship</h3>
                <p className="text-slate-600">Export finest Indian leather craftsmanship with traditional techniques</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brown-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Assurance</h3>
                <p className="text-slate-600">International quality standards and ethical sourcing practices</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-brown-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Leather Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Leather Sourcing",
                  "Quality Grade Assessment", 
                  "Craftsmanship Verification",
                  "Durability Testing",
                  "Design Customization",
                  "Finishing Quality Check",
                  "International Compliance",
                  "Protective Packaging",
                  "Brand Label Services"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-brown-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Categories */}
            <div className="bg-gradient-to-r from-brown-50 to-amber-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Leather Export Categories</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Product Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Leather Bags & Handbags</li>
                    <li>• Footwear & Shoes</li>
                    <li>• Leather Jackets & Clothing</li>
                    <li>• Leather Accessories</li>
                    <li>• Leather Home Furnishing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Quality Standards</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Genuine leather certification</li>
                    <li>• Chrome-free tanning available</li>
                    <li>• Color fastness testing</li>
                    <li>• Tensile strength standards</li>
                    <li>• International safety compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-brown-600 to-amber-600 hover:from-brown-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Leather Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LeatherProductsExportServices;