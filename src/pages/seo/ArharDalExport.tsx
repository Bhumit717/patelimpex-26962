import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ArrowRight, Star, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArharDalExport = () => {
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
        <title>Arhar Dal Exporter from India | Buy Bulk Arhar Dal | Patel Impex</title>
        <meta name="description" content="Patel Impex is a leading supplier and exporter of Arhar Dal from India. Best quality Arhar Dal at competitive prices for global markets." />
        <link rel="canonical" href="https://patelimpex.com/seo/arhar-dal-export" />
        <meta property="og:title" content="Arhar Dal Exporter from India | Buy Bulk Arhar Dal | Patel Impex" />
        <meta property="og:description" content="Patel Impex is a leading supplier and exporter of Arhar Dal from India. Best quality Arhar Dal at competitive prices for global markets." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1615485925785-68d489b27582?auto=format&fit=crop&q=80" />

        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the minimum order quantity for Arhar Dal export to Global Markets?","acceptedAnswer":{"@type":"Answer","text":"Our minimum order quantity for Arhar Dal to Global Markets typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the Global Markets market."}},{"@type":"Question","name":"What documents do you provide for importing Arhar Dal into Global Markets?","acceptedAnswer":{"@type":"Answer","text":"We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by Global Markets customs authorities."}},{"@type":"Question","name":"What are the shipping times from India to Global Markets?","acceptedAnswer":{"@type":"Answer","text":"Transit times to Global Markets typically range from 43 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Arhar Dal."}},{"@type":"Question","name":"Can you provide customized packaging for Arhar Dal in Global Markets?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer fully customizable packaging options for Arhar Dal, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with Global Markets's labeling and packaging regulations."}}]}`}
        </script>
      </Helmet>
      <Navigation />
      <div className="pt-40 pb-24 bg-white text-center animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter">Indian <span className="text-green-600 font-fredericka tracking-tight lowercase">Arhar Dal</span> Export</h1>
        <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed max-w-2xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>World-class quality Arhar Dal sourced from the finest Indian farms</p>
      </div>

      <div className="container mx-auto px-6 py-24 reveal">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-900 font-graduate uppercase tracking-tight">Why Our <span className="text-green-600 font-fredericka tracking-tight lowercase">Arhar Dal?</span></h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Leaf, title: "Natural & Pure", desc: "Cultivated without harmful chemicals.", color: "text-green-500" },
            { icon: Star, title: "Premium Grade", desc: "Sorted and graded for best quality.", color: "text-yellow-500" },
            { icon: Award, title: "Certified", desc: "Meets international export standards.", color: "text-blue-500" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[30px] nm-card text-center group hover:-translate-y-3 transition-all duration-500 animate-slide-up opacity-0" style={{ animationDelay: `${idx * 200}ms`, animationFillMode: 'forwards' }}>
              <feature.icon className={`w-14 h-14 ${feature.color} mx-auto mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-2xl font-black mb-4 font-graduate uppercase tracking-tight text-slate-900">{feature.title}</h3>
              <p className="text-slate-500 font-fondamento italic text-lg leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 bg-[#e9edf3] reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16 font-graduate uppercase tracking-tight">Frequently Asked <span className="text-green-600">Questions</span></h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              { q: "What is the minimum order quantity for Arhar Dal export to Global Markets?", a: "Our minimum order quantity for Arhar Dal to Global Markets typically starts from 1 FCL (Full Container Load), but we can arrange smaller trial shipments of 5-10 metric tons depending on the customized packaging requirements for the Global Markets market." },
              { q: "What documents do you provide for importing Arhar Dal into Global Markets?", a: "We provide a comprehensive set of documents including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, and any specific quality test reports required by Global Markets customs authorities." },
              { q: "What are the shipping times from India to Global Markets?", a: "Transit times to Global Markets typically range from 43 days, depending on the specific port of discharge and shipping line schedules. We exclusively partner with top-tier logistics providers to ensure timely delivery of your Arhar Dal." },
              { q: "Can you provide customized packaging for Arhar Dal in Global Markets?", a: "Yes, we offer fully customizable packaging options for Arhar Dal, including private labeling, branding, and specific bag sizes (25kg, 50kg, retail packs) compliant with Global Markets's labeling and packaging regulations." }
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
export default ArharDalExport;