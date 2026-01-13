import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Coffee, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CoffeeExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Coffee Export Services | International Coffee Export | Patel Impex</title>
        <meta name="description" content="Professional coffee export services by Patel Impex. Export premium Indian coffee globally with quality assurance, organic certification, and international logistics solutions." />
        <meta name="keywords" content="coffee export, Indian coffee export, Arabica coffee export, Robusta coffee export, specialty coffee export, organic coffee export, international coffee trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/coffee-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Coffee Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium coffee export services with quality assurance and international logistics",
            "serviceType": "Agricultural Export",
            "category": "Coffee Export"
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
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-brown-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Coffee className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-brown-600 bg-clip-text text-transparent mb-6">
                Coffee Export Services ☕
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export India's premium coffee globally. Professional coffee export services with quality assurance, specialty grade certification, and comprehensive international logistics solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Coffee Market</h3>
                <p className="text-slate-600">$100+ billion global coffee market with growing specialty coffee demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Origins</h3>
                <p className="text-slate-600">Export premium Arabica from Coorg, Chikmagalur, and Nilgiris regions</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Specialty Grade</h3>
                <p className="text-slate-600">Certified specialty grade coffee with complete traceability and quality assurance</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-amber-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Coffee Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Coffee Sourcing",
                  "Quality Grading & Cupping", 
                  "Specialty Grade Certification",
                  "Coffee Board Compliance",
                  "Custom Roasting Services",
                  "Vacuum Packaging",
                  "Climate-Controlled Storage",
                  "International Shipping",
                  "Direct Trade Programs"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coffee Varieties */}
            <div className="bg-gradient-to-r from-amber-50 to-brown-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Coffee Export Varieties</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Premium Coffee Types</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Arabica Plantation (Washed & Natural)</li>
                    <li>• Robusta Parchment & Cherry</li>
                    <li>• Monsooned Malabar AA</li>
                    <li>• Mysore Nuggets Extra Bold</li>
                    <li>• Specialty Single Origins</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Specifications</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Coffee Board of India certification</li>
                    <li>• Specialty Coffee Association graded</li>
                    <li>• Moisture content: 11-12%</li>
                    <li>• Organic & Fair Trade available</li>
                    <li>• Farm-to-cup traceability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-brown-600 hover:from-amber-700 hover:to-brown-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Coffee Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CoffeeExportServices;