import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Pill, Shield, Globe, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PharmaceuticalExport = () => {
  return (
    <>
      <Helmet>
        <title>Pharmaceutical Export Services | Medical Drug Exports | Patel Impex</title>
        <meta name="description" content="Export pharmaceutical products globally with Patel Impex. GMP compliance, drug regulatory approvals, cold chain logistics for pharmaceutical exports worldwide." />
        <meta name="keywords" content="pharmaceutical export, drug export services, GMP compliance, pharmaceutical logistics, medical exports, API export, formulations export" />
        <link rel="canonical" href="https://patelimpex.com/seo/pharmaceutical-export" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Pill className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent mb-6">
                Pharmaceutical Export Services 💊
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Export pharmaceutical products globally with comprehensive regulatory compliance. GMP certified processes, drug approvals, and specialized logistics for medical exports.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">$1.4 Trillion Market</h3>
                <p className="text-slate-600">Global pharmaceutical market with 5%+ annual growth rate</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">GMP Compliance</h3>
                <p className="text-slate-600">WHO-GMP, FDA, EMA regulatory compliance and certification</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Reach</h3>
                <p className="text-slate-600">Export to 100+ countries with regulatory approvals</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200 mb-16">
              <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Pharmaceutical Product Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Active Pharmaceutical Ingredients",
                  "Finished Formulations", 
                  "Generic Medicines",
                  "Biosimilars & Biologics",
                  "Vaccines & Serums",
                  "Medical Devices",
                  "Diagnostic Reagents",
                  "Nutraceuticals",
                  "Veterinary Products"
                ].map((product, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Shield className="h-6 w-6" />
                <span>Start Pharmaceutical Export</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PharmaceuticalExport;