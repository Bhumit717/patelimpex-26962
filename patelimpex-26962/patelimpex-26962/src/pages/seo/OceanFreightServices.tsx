import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Ship, Anchor, Globe, DollarSign, Container, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OceanFreightServices = () => {
  return (
    <>
      <Helmet>
        <title>Ocean Freight Services | Sea Cargo Shipping | Patel Impex</title>
        <meta name="description" content="Cost-effective ocean freight services for international sea cargo shipping. Full container load (FCL), less than container load (LCL), and bulk cargo solutions worldwide." />
        <meta name="keywords" content="ocean freight services, sea freight shipping, container shipping, FCL LCL services, bulk cargo shipping, international sea freight" />
        <link rel="canonical" href="https://patelimpex.com/seo/ocean-freight-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Ship className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent mb-6">
                Ocean Freight Services 🚢
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Cost-effective ocean freight solutions for international sea cargo shipping. FCL, LCL, and bulk cargo services with global port coverage and competitive rates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Cost Effective</h3>
                <p className="text-slate-600">Up to 80% cheaper than air freight for large volume shipments</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Container className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Large Capacity</h3>
                <p className="text-slate-600">Handle containers up to 45 feet with bulk cargo capabilities</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Globe className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Network</h3>
                <p className="text-slate-600">Access to 500+ ports worldwide with regular sailing schedules</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Ocean Freight Solutions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Full Container Load (FCL)",
                  "Less than Container Load (LCL)", 
                  "Bulk Cargo Shipping",
                  "Breakbulk Services",
                  "Refrigerated Containers",
                  "Hazardous Cargo Handling",
                  "Port-to-Port Services",
                  "Door-to-Door Solutions",
                  "Customs Clearance"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Anchor className="h-6 w-6" />
                <span>Get Ocean Freight Quote</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OceanFreightServices;