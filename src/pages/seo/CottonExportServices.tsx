import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Shirt, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CottonExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Cotton Export Services | Raw Cotton Export | Patel Impex</title>
        <meta name="description" content="Premium cotton export services by Patel Impex. Export high-quality Indian cotton globally with quality testing, grading, and international logistics solutions." />
        <meta name="keywords" content="cotton export, Indian cotton export, raw cotton export, cotton fiber export, textile cotton, organic cotton export, cotton trading" />
        <link rel="canonical" href="https://patelimpex.com/seo/cotton-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cotton Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium cotton export services with quality testing and international logistics",
            "serviceType": "Agricultural Export",
            "category": "Textile Raw Material"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-white rounded-3xl flex items-center justify-center shadow-2xl">
                  <Shirt className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent mb-6">
                Cotton Export Services 🌱
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian cotton worldwide. Professional cotton export services with quality testing, fiber grading, and comprehensive international logistics solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Cotton Market</h3>
                <p className="text-slate-600">$35 billion global cotton market with consistent textile demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600">Export superior Indian cotton with excellent fiber properties</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Testing</h3>
                <p className="text-slate-600">Advanced fiber testing and international quality standards</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Cotton Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Cotton Sourcing",
                  "Fiber Length Testing", 
                  "Micronaire Value Analysis",
                  "Strength & Uniformity Tests",
                  "Moisture Content Check",
                  "Contamination Removal",
                  "Quality Grade Classification",
                  "Container Loading",
                  "International Certification"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cotton Grades */}
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Cotton Export Grades</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Indian Cotton Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Shankar-6 (Premium Long Staple)</li>
                    <li>• DCH-32 (Medium Staple)</li>
                    <li>• Suraj (Short Staple)</li>
                    <li>• Organic Cotton (Certified)</li>
                    <li>• Desi Cotton (Indigenous)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Quality Parameters</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Staple length: 22-34mm</li>
                    <li>• Micronaire: 3.5-5.0</li>
                    <li>• Strength: 22-30 g/tex</li>
                    <li>• Moisture: Max 8%</li>
                    <li>• Grade: Good Middling & above</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Cotton Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CottonExportServices;