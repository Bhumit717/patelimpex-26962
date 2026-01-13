import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Cookie, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const JaggeryExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Jaggery Export Services | Organic Jaggery Export | Patel Impex</title>
        <meta name="description" content="Premium jaggery export services by Patel Impex. Export organic Indian jaggery globally with quality assurance, proper packaging, and international logistics." />
        <meta name="keywords" content="jaggery export, Indian jaggery export, organic jaggery export, gur export, natural sweetener export, sugarcane jaggery, palm jaggery export" />
        <link rel="canonical" href="https://patelimpex.com/seo/jaggery-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jaggery Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium jaggery export services with quality assurance and international logistics",
            "serviceType": "Food Export",
            "category": "Natural Sweetener Export"
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
                  <Cookie className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-brown-600 bg-clip-text text-transparent mb-6">
                Jaggery Export Services 🍯
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian jaggery worldwide. Professional jaggery export services with quality assurance, organic certification, and comprehensive international logistics.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Natural Sweetener Market</h3>
                <p className="text-slate-600">Growing global demand for natural alternatives to refined sugar</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600">Export organic and traditional jaggery with rich mineral content</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Organic Certified</h3>
                <p className="text-slate-600">Certified organic jaggery from traditional production methods</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-amber-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Jaggery Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Jaggery Sourcing",
                  "Quality Grade Assessment", 
                  "Purity Testing",
                  "Moisture Content Analysis",
                  "Color Grading",
                  "Contaminant Screening",
                  "Organic Certification",
                  "Hygiene Packaging",
                  "Temperature Monitoring"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jaggery Types */}
            <div className="bg-gradient-to-r from-amber-50 to-brown-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Jaggery Export Types</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Jaggery Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Sugarcane Jaggery (Gur)</li>
                    <li>• Date Palm Jaggery (Khajur Gur)</li>
                    <li>• Coconut Palm Jaggery</li>
                    <li>• Organic Jaggery</li>
                    <li>• Liquid Jaggery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Quality Standards</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Sucrose content: 65-85%</li>
                    <li>• Moisture: &lt;20%</li>
                    <li>• Reducing sugars: 10-15%</li>
                    <li>• Ash content: 2-5%</li>
                    <li>• FSSAI & organic certified</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-brown-600 hover:from-amber-700 hover:to-brown-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Jaggery Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JaggeryExportServices;