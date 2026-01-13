import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Paintbrush, Globe, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HandicraftsExportServices = () => {
  return (
    <>
      <Helmet>
        <title>Handicrafts Export Services | Indian Handicrafts Export | Patel Impex</title>
        <meta name="description" content="Premium handicrafts export services by Patel Impex. Export authentic Indian handicrafts globally with quality assurance, packaging, and international logistics." />
        <meta name="keywords" content="handicrafts export, Indian handicrafts export, traditional crafts export, handmade products export, artisan crafts, cultural artifacts export" />
        <link rel="canonical" href="https://patelimpex.com/seo/handicrafts-export-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Handicrafts Export Services",
            "provider": {
              "@type": "Organization",
              "name": "Patel Impex"
            },
            "description": "Premium handicrafts export services with quality assurance and international logistics",
            "serviceType": "Cultural Export",
            "category": "Handicrafts Export"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Paintbrush className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Handicrafts Export Services 🎨
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export authentic Indian handicrafts worldwide. Professional handicrafts export services with quality assurance, cultural authenticity verification, and comprehensive international logistics.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 text-center">
                <Globe className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Handicrafts Market</h3>
                <p className="text-slate-600">$718 billion global handicrafts market with growing cultural appreciation</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Authentic Crafts</h3>
                <p className="text-slate-600">Export genuine Indian traditional handicrafts from skilled artisans</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Cultural Heritage</h3>
                <p className="text-slate-600">Preserving and promoting traditional Indian craftsmanship globally</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-pink-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Handicrafts Export Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Artisan Network Sourcing",
                  "Quality Authenticity Check", 
                  "Cultural Heritage Verification",
                  "Craft Documentation",
                  "Packaging & Protection",
                  "International Compliance",
                  "Custom Design Services",
                  "Bulk Order Management",
                  "Artisan Fair Trade Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Handicraft Categories */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Handicrafts Export Categories</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Craft Categories</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Wood Carvings & Sculptures</li>
                    <li>• Brass & Metal Crafts</li>
                    <li>• Textiles & Embroidery</li>
                    <li>• Pottery & Ceramics</li>
                    <li>• Jewelry & Ornaments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Regional Specialties</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Rajasthani Miniature Paintings</li>
                    <li>• Kashmir Papier Mache</li>
                    <li>• South Indian Bronze Items</li>
                    <li>• Bengali Terracotta</li>
                    <li>• Gujarati Mirror Work</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Users className="h-6 w-6" />
                <span>Start Handicrafts Export Partnership</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HandicraftsExportServices;