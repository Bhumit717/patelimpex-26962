import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Wheat, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PulsesExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Pulses Export Services | International Pulses Export | Patel Impex</title>
        <meta name="description" content="Professional pulses export services by Patel Impex. Export premium Indian pulses globally with quality assurance, organic certification, and international logistics solutions." />
        <meta name="keywords" content="pulses export, Indian pulses export, lentils export, chickpeas export, beans export, organic pulses export, international pulses trade" />
        <link rel="canonical" href="https://patelimpex.com/seo/pulses-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pulses Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium pulses export services with quality assurance and international logistics",
            "serviceType": "Agricultural Export",
            "category": "Pulses Export"
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
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-6">
                Pulses Export Services 🫘
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export India's premium pulses globally. Professional pulses export services with quality assurance, organic certification, and comprehensive international logistics solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Globe className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Pulses Market</h3>
                <p className="text-slate-600">$15+ billion global pulses market with increasing health-conscious demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">India's Dominance</h3>
                <p className="text-slate-600">World's largest pulses producer with 25+ million tonnes production</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Protein Power</h3>
                <p className="text-slate-600">High-protein, nutritious pulses meeting global food security needs</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Pulses Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Pulses Sourcing",
                  "Quality Testing & Grading", 
                  "Organic Certification",
                  "Pesticide Residue Testing",
                  "Custom Processing",
                  "Fumigation Services",
                  "Climate-Controlled Storage",
                  "International Shipping",
                  "Nutritional Analysis"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pulses Varieties */}
            <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Pulses Export Varieties</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Premium Pulses Types</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Chickpeas (Kabuli & Desi)</li>
                    <li>• Lentils (Red, Green, Black)</li>
                    <li>• Black Gram (Urad Dal)</li>
                    <li>• Green Gram (Moong Dal)</li>
                    <li>• Pigeon Peas (Toor Dal)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Specifications</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• APEDA quality standards</li>
                    <li>• Organic & conventional varieties</li>
                    <li>• Moisture content: 12-14%</li>
                    <li>• Pesticide residue compliant</li>
                    <li>• Complete nutritional profiling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Pulses Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PulsesExportServices;