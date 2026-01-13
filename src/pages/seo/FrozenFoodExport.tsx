import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Snowflake, Thermometer, Globe, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FrozenFoodExport = () => {
  return (
    <>
      <Helmet>
        <title>Frozen Food Export Services | Cold Chain Logistics | Patel Impex</title>
        <meta name="description" content="Export frozen food products globally with Patel Impex. Professional cold chain logistics, HACCP compliance, temperature-controlled shipping for frozen food exports." />
        <meta name="keywords" content="frozen food export, cold chain logistics, frozen seafood export, frozen vegetables export, temperature controlled shipping, HACCP compliance" />
        <link rel="canonical" href="https://patelimpex.com/seo/frozen-food-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Snowflake className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-6">
                Frozen Food Export Services ❄️
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export frozen food products worldwide with professional cold chain logistics. Temperature-controlled shipping, HACCP compliance, and quality preservation for global frozen food trade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$291B Market</h3>
                <p className="text-slate-600">Global frozen food market growing at 4.2% CAGR with rising demand</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Thermometer className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Temperature Control</h3>
                <p className="text-slate-600">Precise temperature monitoring from -18°C to -25°C throughout transit</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality Assured</h3>
                <p className="text-slate-600">HACCP certified cold chain with quality preservation guarantee</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Frozen Product Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Frozen Seafood & Fish",
                  "Frozen Vegetables", 
                  "Frozen Fruits & Berries",
                  "Frozen Meat Products",
                  "Frozen Ready Meals",
                  "Frozen Bakery Items",
                  "Frozen Dairy Products",
                  "Frozen Snacks & Appetizers",
                  "Frozen Desserts & Ice Cream"
                ].map((product, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Snowflake className="h-6 w-6" />
                <span>Start Frozen Food Export</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FrozenFoodExport;