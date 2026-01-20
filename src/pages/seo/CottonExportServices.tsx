import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Star, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CottonExportServices = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Cotton Exporter from India | Buy Bulk Cotton | Patel Impex</title>
        <meta name="description" content="Patel Impex is a leading supplier and exporter of Cotton from India. Best quality Cotton at competitive prices for global markets." />
        <link rel="canonical" href="https://patelimpex.com/seo/cotton-export" />
        <meta property="og:title" content="Cotton Exporter from India | Buy Bulk Cotton | Patel Impex" />
        <meta property="og:description" content="Patel Impex is a leading supplier and exporter of Cotton from India. Best quality Cotton at competitive prices for global markets." />
         <meta property="og:image" content="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" />
      
        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum order quantity for Cotton export to Global Markets?","acceptedAnswer":{"@type":"Answer","text":"Our minimum order quantity for Cotton to Global Markets typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the Global Markets market."}},{"@type":"Question","name":"What documents do you provide for importing Cotton into Global Markets?","acceptedAnswer":{"@type":"Answer","text":"We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by Global Markets customs authorities."}},{"@type":"Question","name":"What are the shipping times from India to Global Markets?","acceptedAnswer":{"@type":"Answer","text":"Transit times to Global Markets typically range from 38 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Cotton."}},{"@type":"Question","name":"Can you provide customized packaging for Cotton in Global Markets?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer fully customizable packaging options for Cotton, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with Global Markets's labeling and packaging regulations."}}]}`}
        </script>
      </Helmet>
      <Navigation />
      <div className="pt-32 pb-20 bg-green-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Indian <span className="text-yellow-400">Cotton</span> Export</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">World-class quality Cotton sourced from best farms</p>
      </div>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Why Our Cotton?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Natural & Pure</h3>
                <p className="text-slate-600">Cultivated without harmful chemicals.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Premium Grade</h3>
                <p className="text-slate-600">Sorted and graded for best quality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <Award className="w-12 h-12 text-blue-500 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Certified</h3>
                <p className="text-slate-600">Meets international export standards.</p>
            </div>
        </div>
      </div>
      
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What is the minimum order quantity for Cotton export to Global Markets?</h3>
              <p className="text-slate-600 leading-relaxed">Our minimum order quantity for Cotton to Global Markets typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the Global Markets market.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What documents do you provide for importing Cotton into Global Markets?</h3>
              <p className="text-slate-600 leading-relaxed">We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by Global Markets customs authorities.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What are the shipping times from India to Global Markets?</h3>
              <p className="text-slate-600 leading-relaxed">Transit times to Global Markets typically range from 38 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Cotton.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Can you provide customized packaging for Cotton in Global Markets?</h3>
              <p className="text-slate-600 leading-relaxed">Yes, we offer fully customizable packaging options for Cotton, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with Global Markets's labeling and packaging regulations.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default CottonExportServices;