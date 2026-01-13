import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Zap, Clock, Globe, Package, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ExpressShippingServices = () => {
  return (
    <>
      <Helmet>
        <title>Express Shipping Services | Fast International Courier | Patel Impex</title>
        <meta name="description" content="Fast express shipping services for urgent international deliveries. Same-day, next-day, and 48-hour express courier solutions with tracking and insurance." />
        <meta name="keywords" content="express shipping, fast courier services, urgent delivery, same day shipping, international express, DHL, FedEx, UPS services" />
        <link rel="canonical" href="https://patelimpex.com/seo/express-shipping-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent mb-6">
                Express Shipping Services ⚡
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Ultra-fast express shipping for urgent international deliveries. Same-day, next-day, and 48-hour delivery options with real-time tracking and guaranteed delivery times.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Same Day Delivery</h3>
                <p className="text-slate-600">Urgent deliveries within 4-6 hours in major cities worldwide</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">220+ Countries</h3>
                <p className="text-slate-600">Worldwide express network reaching every corner of the globe</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 text-center">
                <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Real-time Tracking</h3>
                <p className="text-slate-600">Live GPS tracking with delivery notifications and updates</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-orange-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Express Service Options</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Same Day Delivery (4-6 hrs)",
                  "Next Day Delivery (24 hrs)", 
                  "48-Hour Express (2 days)",
                  "Weekend Delivery Services",
                  "Time-Definite Delivery",
                  "Emergency Courier Services",
                  "Document Express",
                  "Package Express",
                  "Temperature Controlled Express"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Zap className="h-6 w-6" />
                <span>Get Express Shipping Quote</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ExpressShippingServices;