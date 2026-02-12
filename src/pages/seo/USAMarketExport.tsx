import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Globe, Truck, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const USAMarketExport = () => {
  // Scroll Reveal Logic
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#e9edf3]">
      <Helmet>
        <title>U S A Import Export Services | Trade with U S A | Patel Impex</title>
        <meta name="description" content="Comprehensive import export services for U S A. Patel Impex facilitates trade between India and U S A with expert logistics and customs support." />
        <link rel="canonical" href="https://patelimpex.com/seo/u-s-a-market-export" />
        <meta property="og:title" content="U S A Import Export Services | Trade with U S A | Patel Impex" />
        <meta property="og:description" content="Comprehensive import export services for U S A. Patel Impex facilitates trade between India and U S A with expert logistics and customs support." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1532336414008-82923c530dad?auto=format&fit=crop&q=80" />

        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum order quantity for Import Export Services export to U S A?","acceptedAnswer":{"@type":"Answer","text":"Our minimum order quantity for Import Export Services to U S A typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the U S A market."}},{"@type":"Question","name":"What documents do you provide for importing Import Export Services into U S A?","acceptedAnswer":{"@type":"Answer","text":"We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by U S A customs authorities."}},{"@type":"Question","name":"What are the shipping times from India to U S A?","acceptedAnswer":{"@type":"Answer","text":"Transit times to U S A typically range from 42 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Import Export Services."}},{"@type":"Question","name":"Can you provide customized packaging for Import Export Services in U S A?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer fully customizable packaging options for Import Export Services, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with U S A's labeling and packaging regulations."}}]}`}
        </script>
      </Helmet>
      <Navigation />
      <div className="pt-40 pb-24 bg-white text-center animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter">Exporting to <span className="text-green-600 font-fredericka tracking-tight lowercase">U S A</span></h1>
        <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed max-w-2xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>Your Gateway to the Premium U S A Market Excellence</p>
      </div>

      <div className="container mx-auto px-6 py-24 reveal">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up opacity-0 stagger-1" style={{ animationFillMode: 'forwards' }}>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 font-graduate uppercase tracking-tight">Trade <span className="text-green-600 font-fredericka tracking-tight lowercase">Opportunities</span></h2>
            <p className="text-slate-600 mb-8 text-lg font-fondamento italic leading-relaxed">Patel Impex specializes in connecting Indian exporters with buyers in U S A. We understand the local market dynamics, consumer preferences, and regulatory landscape.</p>
            <Link to="/contact" className="nm-btn-green !w-auto inline-flex px-8">Contact &rarr;</Link>
          </div>
          <div className="grid grid-cols-2 gap-8 animate-scale-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <div className="p-8 bg-white nm-card text-center group">
              <Truck className="mx-auto text-green-600 w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 font-graduate tracking-tight">Logistics</h3>
              <p className="text-sm text-slate-500 font-fondamento">Fast shipping</p>
            </div>
            <div className="p-8 bg-white nm-card text-center group">
              <Building2 className="mx-auto text-green-600 w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 font-graduate tracking-tight">Compliance</h3>
              <p className="text-sm text-slate-500 font-fondamento">Clearance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-[#e9edf3] reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16 font-graduate uppercase tracking-tight">Frequently Asked <span className="text-green-600">Questions</span></h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              { q: "What is the minimum order quantity for Import Export Services export to U S A?", a: "Our minimum order quantity for Import Export Services to U S A typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the U S A market." },
              { q: "What documents do you provide for importing Import Export Services into U S A?", a: "We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by U S A customs authorities." },
              { q: "What are the shipping times from India to U S A?", a: "Transit times to U S A typically range from 42 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Import Export Services." },
              { q: "Can you provide customized packaging for Import Export Services in U S A?", a: "Yes, we offer fully customizable packaging options for Import Export Services, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with U S A's labeling and packaging regulations." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[30px] nm-card hover:shadow-xl transition-all duration-500 animate-slide-up opacity-0" style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}>
                <h3 className="text-xl font-bold text-slate-800 mb-4 font-graduate tracking-tight">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed font-fondamento italic">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};
export default USAMarketExport;