import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Apple, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MangoExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Mango Export Services | Fresh Mango Export | Patel Impex</title>
        <meta name="description" content="Premium mango export services by Patel Impex. Export fresh Indian mangoes globally with cold chain logistics, quality assurance, and international shipping solutions." />
        <meta name="keywords" content="mango export, Indian mango export, Alphonso mango export, fresh fruit export, tropical fruit export, mango supplier, international fruit trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/mango-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mango Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium mango export services with cold chain logistics and quality assurance",
            "serviceType": "Agricultural Export",
            "category": "Fruit Export"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Apple className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
                Mango Export Services 🥭
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export India's king of fruits globally. Premium mango export services with cold chain logistics, quality assurance, and comprehensive international shipping solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Mango Market</h3>
                <p className="text-slate-600">$45 billion global mango market with growing demand for premium varieties</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Varieties</h3>
                <p className="text-slate-600">Export Alphonso, Kesar, Totapuri and other premium mango varieties</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Cold Chain Logistics</h3>
                <p className="text-slate-600">Temperature-controlled supply chain for maximum freshness</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-orange-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Mango Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Mango Sourcing",
                  "Quality Inspection & Grading", 
                  "Ripeness Assessment",
                  "Cold Storage Facilities",
                  "Ethylene Treatment",
                  "Export Packaging",
                  "Phytosanitary Certification",
                  "Air Freight Services",
                  "Temperature Monitoring"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mango Varieties */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Mango Export Varieties</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Premium Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Alphonso (King of Mangoes)</li>
                    <li>• Kesar (Queen of Mangoes)</li>
                    <li>• Totapuri (Processing Grade)</li>
                    <li>• Dasheri (North Indian Variety)</li>
                    <li>• Langra (Traditional Variety)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Specifications</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• APEDA certification</li>
                    <li>• Phytosanitary compliance</li>
                    <li>• Cold chain maintained 2-5°C</li>
                    <li>• Shelf life: 15-21 days</li>
                    <li>• Export packaging: 3-5 kg boxes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Mango Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MangoExportServices;