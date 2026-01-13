import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Banana, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BananaExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Banana Export Services | Fresh Banana Export | Patel Impex</title>
        <meta name="description" content="Professional banana export services by Patel Impex. Export fresh Indian bananas globally with cold chain logistics, quality assurance, and international shipping solutions." />
        <meta name="keywords" content="banana export, Indian banana export, fresh fruit export, banana supplier, international fruit trade, tropical fruit export, Cavendish banana export" />
        <link rel="canonical" href="https://patelimpex.com/seo/banana-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Banana Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium banana export services with cold chain logistics and quality assurance",
            "serviceType": "Agricultural Export",
            "category": "Fruit Export"
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
                  <Banana className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-6">
                Banana Export Services 🍌
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export premium Indian bananas worldwide. Professional banana export services with cold chain logistics, quality assurance, and comprehensive international shipping solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Globe className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Market Reach</h3>
                <p className="text-slate-600">$15 billion global banana market with consistent demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Varieties</h3>
                <p className="text-slate-600">Export premium Cavendish, Robusta and Nendran varieties</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Fresh Delivery</h3>
                <p className="text-slate-600">Temperature-controlled logistics for optimal freshness</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-yellow-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Banana Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Premium Banana Sourcing",
                  "Ripeness Monitoring", 
                  "Quality Grade Classification",
                  "Cold Chain Management",
                  "Ripening Chamber Facilities",
                  "Export Packaging Solutions",
                  "Phytosanitary Compliance",
                  "Sea & Air Freight",
                  "Market Price Analytics"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Banana Varieties */}
            <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Banana Export Varieties</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Commercial Varieties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Cavendish (Grand Naine)</li>
                    <li>• Robusta (Poovan Banana)</li>
                    <li>• Nendran (Kerala Variety)</li>
                    <li>• Red Banana (Specialty)</li>
                    <li>• Hill Banana (Organic)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Export Standards</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• APEDA registration</li>
                    <li>• International quality grades</li>
                    <li>• Storage temperature: 13-15°C</li>
                    <li>• Shelf life: 7-14 days</li>
                    <li>• Packaging: 13.5 kg cartons</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Banana Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BananaExportServices;