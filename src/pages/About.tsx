import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
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

  const principles = [
    { id: 1, title: "Creating Tomorrow, Today", desc: "We are committed to shaping a brighter tomorrow through sustainable trade, ethical sourcing, and eco-friendly solutions that leave a lasting impact." },
    { id: 2, title: "Growing Together", desc: "For us, growth is meaningful only when it is shared. We uplift farmers, suppliers, employees, and partners, ensuring that everyone thrives together." },
    { id: 3, title: "Power of Innovation", desc: "We embrace change and creativity—offering custom private labeling, OEM packaging, and tailored trade solutions that help brands tell their unique story." },
    { id: 4, title: "Inspiring Future Exporters", desc: "Through our initiatives to educate and guide aspiring entrepreneurs, we are nurturing the next generation of exporters and making global trade accessible to youth." },
    { id: 5, title: "Trust at the Core", desc: "Every partnership we build rests on honesty, fairness, and integrity—values that form the backbone of lasting relationships." },
    { id: 6, title: "Excellence in Every Step", desc: "From sourcing to final delivery, we are driven by precision, consistency, and commitment, ensuring that businesses worldwide can rely on us with confidence." },
  ];

  const offers = [
    { title: "Digital product", desc: "Amplify your digital offerings by joining our platform to connect with tech-savvy consumer seeking innovative digital solutions.", pos: "right" },
    { title: "Physical product", desc: "Expand your digital your market reach by showcasing your high quality physical product on our platform, reaching eager customer globally", pos: "left" },
    { title: "Easy payment method", desc: "Optimize your sales with our seamless payment methods, empowering you to receive payments hassle free and efficiently with cryptocurrency and fiat money.", pos: "right" },
    { title: "Fast delivery", desc: "Enhance customer satisfaction by leveraging our rapid delivery service, ensuring your products reach buyers promptly fostering a positive buying experience with our logistic partner quikpik", pos: "left" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title="Our Story | Patel Impex" description="Discover the legacy of Patel Impex - our mission, vision, and the milestones that define our leadership in global trade." canonicalUrl="/about" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-44 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Title & Map */}
            <div className="reveal">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[2px] bg-orange-500"></div>
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">About Us</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-12">
                Welcome to <span className="text-[#1a365d]">Patel Impex</span>
              </h1>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mt-12 group border-4 border-white">
                <video
                  src="/globalexport-map.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Side: Text */}
            <div className="space-y-6 text-slate-600 leading-relaxed reveal" style={{ animationDelay: '200ms' }}>
              <p>
                Patel Impex is a dynamic export company from India, dedicated to bridging global markets and delivering premium agro, herbal, and eco-friendly products that meet EU, USA, and worldwide standards.
              </p>
              <p>
                Founded with a clear vision to simplify global trade, we focus on ethical, transparent, and efficient exports—from spices, rice, pulses, and moringa to psyllium husk, jute bags, clayware, and areca leaf products.
              </p>
              <p>
                Our mission is simple: connect quality Indian products with international buyers, creating partnerships built on trust, consistency, and long-term growth.
              </p>
              <p>
                At Patel Impex, you don't just get a supplier—you gain a reliable export partner committed to helping your business succeed in the global marketplace.
              </p>
              <p>
                Whether it's agricultural products, herbal products, eco-friendly items, or consumer goods, our team ensures timely delivery, competitive pricing, and dependable service. With a global outlook and a dedication to excellence, Patel Impex is more than just an exporter—we are your reliable gateway to international markets, helping businesses expand and succeed worldwide.
              </p>
              <Button onClick={() => window.location.href = '/contact'} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 h-auto flex items-center gap-3 mt-8">
                Meet The Visionaries
                <div className="bg-white/20 p-2 rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Circles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-full border-[3px] border-orange-200 p-4 transition-transform hover:scale-105 duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Spices" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8 text-white">
                    <span className="text-5xl font-black mb-2">15+</span>
                    <p className="text-xs font-medium uppercase tracking-tighter leading-tight">Product Categories From spices, rice, pulses, moringa, psyllium husk to eco-friendly items — offering a diverse export portfolio</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal flex flex-col items-center" style={{ animationDelay: '100ms' }}>
              <div className="relative w-full aspect-square rounded-full border-[3px] border-orange-200 p-4 transition-transform hover:scale-105 duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Global map" />
                  <div className="absolute inset-0 bg-[#5d4037]/60 flex flex-col items-center justify-center text-center p-8 text-white">
                    <span className="text-5xl font-black mb-2">30+</span>
                    <p className="text-xs font-medium uppercase tracking-tighter leading-tight">Active buyer connections across Europe, USA, Middle East, and Asia, steadily expanding.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal flex flex-col items-center" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full aspect-square rounded-full border-[3px] border-orange-200 p-4 transition-transform hover:scale-105 duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Quality" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8 text-white">
                    <span className="text-5xl font-black mb-2">100%</span>
                    <p className="text-xs font-medium uppercase tracking-tighter leading-tight">Commitment to quality, certified sourcing, and ethical trade practices.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal flex flex-col items-center" style={{ animationDelay: '300ms' }}>
              <div className="relative w-full aspect-square rounded-full border-[3px] border-orange-200 p-4 transition-transform hover:scale-105 duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Packaging" />
                  <div className="absolute inset-0 bg-white/20 flex flex-col items-center justify-center text-center p-8">
                    <span className="text-5xl font-black mb-2 text-slate-800">#1</span>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-widest mb-2 font-graduate">PRIVATE LABEL</span>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-tighter leading-tight">Custom packaging & branding support to help clients launch their own label worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-4 reveal">
                <div className="w-6 h-[2px] bg-orange-500"></div>
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">Core Values</span>
              </div>
              <h2 className="text-5xl font-black text-[#1a365d] mb-12 reveal">Our Guiding Principles</h2>
              <div className="space-y-8">
                {principles.map((p) => (
                  <div key={p.id} className="flex gap-6 reveal" style={{ animationDelay: `${p.id * 50}ms` }}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-orange-300 flex items-center justify-center text-orange-500 font-bold text-2xl">
                      {p.id}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">{p.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ animationDelay: '300ms' }}>
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Team session" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-slate-800 mb-20 reveal">What we offer</h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Curvy Dashed Path SVG */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1000 800" fill="none" preserveAspectRatio="none">
              <path d="M100,50 C400,50 600,250 900,250 S600,450 100,450 S400,650 900,650" stroke="#f97316" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            <div className="space-y-40">
              {offers.map((offer, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 reveal ${offer.pos === 'right' ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`w-full md:w-1/2 flex items-center gap-6 ${offer.pos === 'left' ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'}`}>
                    <div className="w-24 h-16 bg-[#5c6bc0] rounded-r-3xl rounded-tl-3xl flex items-center justify-center p-4 shadow-lg flex-shrink-0">
                      <CheckCircle2 className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 mb-4">{offer.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{offer.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

