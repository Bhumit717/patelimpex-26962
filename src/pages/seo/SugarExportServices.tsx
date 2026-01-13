import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Zap, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SugarExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Sugar Export Services | International Sugar Export | Patel Impex</title>
        <meta name="description" content="Professional sugar export services by Patel Impex. Export premium Indian sugar globally with quality assurance, ICUMSA standards, and international logistics solutions." />
        <meta name="keywords" content="sugar export, Indian sugar export, white sugar export, raw sugar export, ICUMSA sugar export, organic sugar export, international sugar trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/sugar-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sugar Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium sugar export services with ICUMSA standards and international logistics",
            "serviceType": "Agricultural Export",
            "category": "Sugar Export"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-300 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-gray-200">
                  <Zap className="h-12 w-12 text-gray-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-600 to-slate-800 bg-clip-text text-transparent mb-6">
                Sugar Export Services 🍯
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export India's premium sugar globally. Professional sugar export services with ICUMSA standards, quality assurance, and comprehensive international logistics solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Sugar Market</h3>
                <p className="text-slate-600">$60+ billion global sugar market with consistent worldwide demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">India's Leading Position</h3>
                <p className="text-slate-600">World's second-largest sugar producer with 35+ million tonnes annually</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600">ICUMSA certified sugar with strict quality control and food safety standards</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Sugar Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Sugar Sourcing",
                  "ICUMSA Standards Testing", 
                  "Quality Assurance Labs",
                  "Food Safety Compliance",
                  "Custom Packaging Solutions",
                  "Bulk & Container Loading",
                  "Temperature-Controlled Storage",
                  "International Shipping",
                  "Documentation Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sugar Varieties */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Sugar Export Varieties</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Sugar Types Available</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• ICUMSA 45 (Premium White Sugar)</li>
                    <li>• ICUMSA 100-150 (Refined White Sugar)</li>
                    <li>• ICUMSA 600-1200 (Raw Sugar)</li>
                    <li>• Organic Certified Sugar</li>
                    <li>• Specialty & Brown Sugar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Specifications</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• ICUMSA certified quality standards</li>
                    <li>• Polarization: 99.8° minimum</li>
                    <li>• Moisture content: 0.04% maximum</li>
                    <li>• Food safety certifications</li>
                    <li>• Bulk & retail packaging available</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-600 to-slate-800 hover:from-gray-700 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Sugar Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SugarExportServices;