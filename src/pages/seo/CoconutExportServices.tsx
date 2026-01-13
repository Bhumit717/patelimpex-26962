import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Apple, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CoconutExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Coconut Export Services | Fresh Coconut Export | Patel Impex</title>
        <meta name="description" content="Premium coconut export services by Patel Impex. Export fresh Indian coconuts globally with quality assurance, proper packaging, and international logistics solutions." />
        <meta name="keywords" content="coconut export, Indian coconut export, fresh coconut export, coconut supplier, tropical fruit export, tender coconut export, copra export" />
        <link rel="canonical" href="https://patelimpex.com/seo/coconut-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Coconut Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium coconut export services with quality assurance and international logistics",
            "serviceType": "Agricultural Export",
            "category": "Fruit Export"
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
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Apple className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent mb-6">
                Coconut Export Services 🥥
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian coconuts worldwide. Professional coconut export services with quality assurance, proper packaging, and comprehensive international shipping solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Coconut Market</h3>
                <p className="text-slate-600">$12 billion global coconut market with growing health trend demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600">Export fresh tender coconuts and mature coconuts from Kerala</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Natural & Organic</h3>
                <p className="text-slate-600">100% natural coconuts with organic certification available</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-amber-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Coconut Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Coconut Sourcing",
                  "Freshness Quality Check", 
                  "Water Content Testing",
                  "Husk Removal Services",
                  "Grading & Classification",
                  "Protective Packaging",
                  "Phytosanitary Compliance",
                  "Temperature Monitoring",
                  "Direct Farm Sourcing"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coconut Types */}
            <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Coconut Export Types</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Coconut Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Tender Coconut (Fresh Water)</li>
                    <li>• Mature Coconut (Copra Grade)</li>
                    <li>• Dehusked Coconut</li>
                    <li>• Semi-Husked Coconut</li>
                    <li>• Organic Certified Coconuts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Specifications</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• APEDA registration</li>
                    <li>• Moisture content: 45-50%</li>
                    <li>• Storage temperature: 0-2°C</li>
                    <li>• Shelf life: 30-45 days</li>
                    <li>• Packaging: Mesh bags/cartons</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Coconut Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CoconutExportServices;