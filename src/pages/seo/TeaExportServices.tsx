import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Leaf, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TeaExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Tea Export Services | International Tea Export | Patel Impex</title>
        <meta name="description" content="Professional tea export services by Patel Impex. Export premium Indian tea globally with quality assurance, organic certification, and international logistics solutions." />
        <meta name="keywords" content="tea export, Indian tea export, Darjeeling tea export, Assam tea export, green tea export, black tea export, organic tea export, international tea trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/tea-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Tea Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium tea export services with quality assurance and international logistics",
            "serviceType": "Agricultural Export",
            "category": "Tea Export"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Tea Export Services 🍃
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export India's finest tea globally. Premium tea export services with quality assurance, organic certification, and comprehensive international logistics solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Tea Market</h3>
                <p className="text-slate-600">$18 billion global tea market with growing demand for premium varieties</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600">Export premium Darjeeling, Assam, and specialty teas worldwide</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Organic Certified</h3>
                <p className="text-slate-600">Certified organic and fair-trade tea export with traceability</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Tea Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Tea Sourcing",
                  "Quality Testing & Grading", 
                  "Organic Certification",
                  "Tea Board Compliance",
                  "Custom Blending Services",
                  "Packaging Solutions",
                  "Cold Storage Facilities",
                  "International Shipping",
                  "Buyer Verification"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tea Varieties */}
            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Tea Export Varieties</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Premium Tea Types</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Darjeeling Black Tea (Muscatel flavor)</li>
                    <li>• Assam CTC & Orthodox Tea</li>
                    <li>• Nilgiri Tea (Citrusy notes)</li>
                    <li>• Green Tea & White Tea</li>
                    <li>• Flavored & Herbal Teas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Specifications</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Tea Board of India certification</li>
                    <li>• Organic & Fair Trade certified</li>
                    <li>• Moisture content: &lt;7%</li>
                    <li>• Custom packaging available</li>
                    <li>• Complete traceability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Tea Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TeaExportServices;