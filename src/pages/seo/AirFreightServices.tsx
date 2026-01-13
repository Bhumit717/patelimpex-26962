import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Plane, Clock, Globe, Shield, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AirFreightServices = () => {
  return (
    <>
      <Helmet>
        <title>Air Freight Services | International Air Cargo | Patel Impex</title>
        <meta name="description" content="Fast air freight services for international cargo shipping. Express air cargo solutions with door-to-door delivery, customs clearance, and real-time tracking worldwide." />
        <meta name="keywords" content="air freight services, air cargo shipping, international air freight, express shipping, air logistics, cargo airlines, freight forwarding" />
        <link rel="canonical" href="https://patelimpex.com/seo/air-freight-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Air Freight Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Fast international air freight and cargo services with global coverage",
            "serviceType": "Air Cargo Transportation"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Plane className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent mb-6">
                Air Freight Services ✈️
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Fast, reliable air freight solutions for time-sensitive cargo. Global air cargo network with express delivery, customs clearance, and door-to-door service worldwide.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 text-center">
                <Clock className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">24-72 Hours</h3>
                <p className="text-slate-600">Express delivery to major international destinations within 1-3 days</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">200+ Destinations</h3>
                <p className="text-slate-600">Worldwide air cargo network covering all major airports and cities</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 text-center">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Secure Handling</h3>
                <p className="text-slate-600">Professional cargo handling with insurance coverage and tracking</p>
              </div>
            </div>

            {/* Service Types */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Air Freight Solutions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Express Air Cargo (24-48hrs)",
                  "Standard Air Freight (3-5 days)", 
                  "Consolidated Shipments",
                  "Charter Flight Services",
                  "Temperature Controlled",
                  "Dangerous Goods Handling",
                  "Door-to-Door Service",
                  "Airport-to-Airport",
                  "Multi-modal Solutions"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Industries We Serve</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">High-Value Cargo</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Electronics & Technology</li>
                    <li>• Pharmaceuticals & Medical</li>
                    <li>• Automotive Parts</li>
                    <li>• Fashion & Textiles</li>
                    <li>• Jewelry & Precious Items</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Time-Sensitive Goods</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Perishable Food Products</li>
                    <li>• Emergency Medical Supplies</li>
                    <li>• Spare Parts & Components</li>
                    <li>• Documents & Samples</li>
                    <li>• Event & Exhibition Materials</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Airlines Network */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Airline Partners</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Emirates Cargo</h3>
                  <p className="text-slate-600 text-sm">Global network via Dubai</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Lufthansa Cargo</h3>
                  <p className="text-slate-600 text-sm">European hub operations</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Air India Cargo</h3>
                  <p className="text-slate-600 text-sm">Direct India connections</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">FedEx & DHL</h3>
                  <p className="text-slate-600 text-sm">Express courier services</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Zap className="h-6 w-6" />
                <span>Get Air Freight Quote</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AirFreightServices;