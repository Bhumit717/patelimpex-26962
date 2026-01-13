import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Grape, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GrapesExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Grapes Export Services | Fresh Grapes Export | Patel Impex</title>
        <meta name="description" content="Premium grapes export services by Patel Impex. Export fresh Indian grapes globally with cold storage, quality assurance, and international logistics solutions." />
        <meta name="keywords" content="grapes export, Indian grapes export, fresh fruit export, table grapes export, wine grapes export, Thompson seedless export, international fruit trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/grapes-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Grapes Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium grapes export services with cold storage and quality assurance",
            "serviceType": "Agricultural Export",
            "category": "Fruit Export"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Grape className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent mb-6">
                Grapes Export Services 🍇
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian grapes worldwide. Professional grapes export services with cold storage facilities, quality assurance, and comprehensive international shipping solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Grape Market</h3>
                <p className="text-slate-600">$7 billion global table grapes market with year-round demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Varieties</h3>
                <p className="text-slate-600">Export Thompson seedless, Flame seedless and specialty varieties</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Cold Storage</h3>
                <p className="text-slate-600">Advanced cold storage technology for extended shelf life</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-purple-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Grapes Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Grape Sourcing",
                  "Bunch Selection & Grading", 
                  "Sugar Content Testing",
                  "Pre-cooling Services",
                  "Cold Storage Facilities",
                  "Modified Atmosphere Packaging",
                  "Phytosanitary Certification",
                  "Container Stuffing",
                  "Supply Chain Management"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grape Varieties */}
            <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Grapes Export Varieties</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Table Grape Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Thompson Seedless (White)</li>
                    <li>• Flame Seedless (Red)</li>
                    <li>• Red Globe (Large Size)</li>
                    <li>• Sonaka (Hybrid Variety)</li>
                    <li>• Krishna Seedless (Purple)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Standards</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• APEDA certification required</li>
                    <li>• Brix level: 16-22%</li>
                    <li>• Cold storage: -1 to 0°C</li>
                    <li>• Shelf life: 30-45 days</li>
                    <li>• Packaging: 4.5-9 kg cartons</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Grapes Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GrapesExportServices;