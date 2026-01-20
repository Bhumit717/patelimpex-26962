import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Globe, Truck, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThailandMarketExport = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Thailand Import Export Services | Trade with Thailand | Patel Impex</title>
        <meta name="description" content="Comprehensive import export services for Thailand. Patel Impex facilitates trade between India and Thailand with expert logistics and customs support." />
        <link rel="canonical" href="https://patelimpex.com/seo/thailand-market-export" />
        <meta property="og:title" content="Thailand Import Export Services | Trade with Thailand | Patel Impex" />
        <meta property="og:description" content="Comprehensive import export services for Thailand. Patel Impex facilitates trade between India and Thailand with expert logistics and customs support." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1606923829579-0cb9d46a8013?auto=format&fit=crop&q=80" />
      
        <script type="application/ld+json">
          {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum order quantity for Import Export Services export to Thailand?","acceptedAnswer":{"@type":"Answer","text":"Our minimum order quantity for Import Export Services to Thailand typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the Thailand market."}},{"@type":"Question","name":"What documents do you provide for importing Import Export Services into Thailand?","acceptedAnswer":{"@type":"Answer","text":"We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by Thailand customs authorities."}},{"@type":"Question","name":"What are the shipping times from India to Thailand?","acceptedAnswer":{"@type":"Answer","text":"Transit times to Thailand typically range from 27 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Import Export Services."}},{"@type":"Question","name":"Can you provide customized packaging for Import Export Services in Thailand?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer fully customizable packaging options for Import Export Services, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with Thailand's labeling and packaging regulations."}}]}
        </script>
      </Helmet>
      <Navigation />
      <div className="pt-32 pb-20 bg-blue-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Exporting to <span className="text-orange-400">Thailand</span></h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">Your Gateway to the Thailand Market</p>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Trade Opportunities in Thailand</h2>
                <p className="text-slate-600 mb-4">Patel Impex specializes in connecting Indian exporters with buyers in Thailand. We understand the local market dynamics, consumer preferences, and regulatory landscape.</p>
                <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Contact our Thailand desk &rarr;</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white shadow rounded-lg text-center"><Truck className="mx-auto text-blue-500 w-8 h-8 mb-2"/><h3 className="font-bold">Logistics</h3><p className="text-sm text-slate-500">Fast shipping to Thailand</p></div>
                <div className="p-6 bg-white shadow rounded-lg text-center"><Building2 className="mx-auto text-orange-500 w-8 h-8 mb-2"/><h3 className="font-bold">Compliance</h3><p className="text-sm text-slate-500">Customs & documentation</p></div>
            </div>
        </div>
      </div>
      
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What is the minimum order quantity for Import Export Services export to Thailand?</h3>
              <p className="text-slate-600 leading-relaxed">Our minimum order quantity for Import Export Services to Thailand typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the Thailand market.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What documents do you provide for importing Import Export Services into Thailand?</h3>
              <p className="text-slate-600 leading-relaxed">We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by Thailand customs authorities.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What are the shipping times from India to Thailand?</h3>
              <p className="text-slate-600 leading-relaxed">Transit times to Thailand typically range from 27 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Import Export Services.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Can you provide customized packaging for Import Export Services in Thailand?</h3>
              <p className="text-slate-600 leading-relaxed">Yes, we offer fully customizable packaging options for Import Export Services, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with Thailand's labeling and packaging regulations.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default ThailandMarketExport;