import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Clock, Target, Globe2, TrendingUp, Shield, MapPin, BarChart3, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const About = () => {
  const milestones = [
    { year: "2010", title: "Foundation", desc: "Patel Impex was established with a bold vision to simplify global trade for Indian manufacturers." },
    { year: "2015", title: "Quality Benchmark", desc: "Achieved ISO 9001:2015 certification, setting a new standard for excellence in our operations." },
    { year: "2018", title: "Global Footprint", desc: "Operations expanded across 30+ countries, establishing a presence in 5 continents." },
    { year: "2023", title: "Digital Transformation", desc: "Integrated AI-driven logistics and trade-matching to provide real-time global connectivity." },
  ];

  const values = [
    { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in every transaction and partnership." },
    { icon: TrendingUp, title: "Innovation", desc: "Constantly evolving our processes to lead in a dynamic global market." },
    { icon: Globe2, title: "Connectivity", desc: "Bridging the gap between local production and international demand." },
    { icon: Heart, title: "Empathy", desc: "Putting our clients' and partners' goals at the heart of our mission." },
  ];

  const stats = [
    { label: "Trade Volume", value: "$500M+", icon: BarChart3 },
    { label: "Countries Served", value: "35+", icon: MapPin },
    { label: "Global Partners", value: "200+", icon: Users },
    { label: "Years Excellence", value: "14+", icon: Award },
  ];

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

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <SEOHead title="Our Story | Patel Impex" description="Discover the legacy of Patel Impex - our mission, vision, and the milestones that define our leadership in global trade." canonicalUrl="/about" />
      <Navigation />

      {/* Hero Section - Immersive & Premium */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(21,128,61,0.15),transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] -mr-64 -mb-64"></div>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -ml-64 -mt-64"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] font-bold uppercase tracking-[0.3em] font-graduate mb-8 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
              <Target className="h-4 w-4 mr-2" />
              Our Corporate Profile
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 font-graduate uppercase tracking-tighter leading-[0.85] animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Defining <span className="text-green-500 font-fredericka tracking-tight lowercase block md:inline">Legacy</span> via Trade
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-fondamento italic leading-relaxed max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              Since 2010, we have been more than just an importer and exporter. We are the architects of global connections, bringing Indian craftsmanship to the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="relative z-20 -mt-16 mb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card !bg-white/90 !p-8 rounded-[30px] shadow-xl border border-white hover:-translate-y-2 transition-all duration-500 reveal group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 font-graduate tracking-widest uppercase">Verified</div>
                </div>
                <div className="text-4xl font-black text-slate-900 font-graduate mb-1 group-hover:text-green-600 transition-colors">{stat.value}</div>
                <div className="text-sm font-bold text-slate-400 font-graduate uppercase tracking-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32 reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-600/10 rounded-[50px] blur-2xl group-hover:bg-green-600/20 transition-all duration-700"></div>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
                alt="Leadership and vision"
                className="relative w-full h-[600px] object-cover rounded-[40px] shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-900 rounded-[40px] z-20 p-10 flex flex-col justify-center shadow-2xl border-4 border-white rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <p className="text-green-500 font-fredericka text-5xl mb-4">Vision</p>
                <p className="text-white font-fondamento text-sm italic leading-snug">Empowering local industries to reach global zeniths through ethical trade.</p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter leading-none">
                  Our <span className="text-green-600 font-fredericka tracking-tight lowercase">Manifesto</span>
                </h2>
                <div className="h-2 w-32 bg-green-600 rounded-full mb-10"></div>
              </div>
              <p className="text-2xl text-slate-600 leading-relaxed font-fondamento italic font-medium">
                At Patel Impex, we believe that borders should be bridges, not barriers. Our manifesto is built on the pillars of absolute transparency and relentless pursuit of quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Strategic Sourcing", desc: "Hand-picking the finest Indian manufacturers." },
                  { title: "Global Compliance", desc: "Adhering to strict international trade laws." },
                  { title: "Risk Mitigation", desc: "Ensuring secure and insured shipping routes." },
                  { title: "Tailored Solutions", desc: "Custom logistics for diverse industrial needs." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 font-graduate uppercase tracking-tight text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-fondamento italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Modern & Elegant */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/5 -skew-x-12 transform translate-x-24"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-5xl md:text-8xl font-black mb-6 font-graduate uppercase tracking-tighter">The <span className="text-green-500 font-fredericka tracking-tight lowercase">Evolution</span></h2>
            <p className="text-xl text-slate-400 font-fondamento italic max-w-2xl mx-auto">Decades of growth distilled into landmark achievements.</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-800 hidden md:block"></div>

            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 reveal ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-1/2">
                    <div className={`p-10 rounded-[40px] border border-slate-800 bg-slate-800/50 backdrop-blur-xl hover:border-green-500/50 transition-all duration-500 group ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="inline-block px-6 py-2 bg-green-500 rounded-full text-slate-900 text-sm font-black font-graduate mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        {milestone.year}
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4 font-graduate uppercase tracking-tight group-hover:text-green-500 transition-colors">{milestone.title}</h3>
                      <p className="text-slate-400 font-fondamento italic text-lg leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 bg-slate-900 border-4 border-green-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8 reveal">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 font-graduate uppercase tracking-tighter">Intrinsic <span className="text-green-600 font-fredericka tracking-tight lowercase">Values</span></h2>
              <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed">Our values are not just words; they are the blueprint for every successful partnership we forge.</p>
            </div>
            <div className="hidden lg:block h-px flex-grow bg-slate-100 mx-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
            {values.map((value, index) => (
              <div key={index} className="nm-card !p-12 group hover:nm-btn-green transition-all duration-700 bg-white border-none flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[30px] bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                  <value.icon className="h-10 w-10 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 font-graduate uppercase tracking-tight group-hover:text-white transition-colors">{value.title}</h3>
                <p className="text-slate-500 font-fondamento italic leading-relaxed group-hover:text-green-50 transition-colors">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder / Leadership CTA */}
      <section className="py-24 bg-[#fafbfc] reveal">
        <div className="container mx-auto px-4">
          <div className="nm-card !p-0 overflow-hidden bg-white border-none shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-16 lg:p-24 flex flex-col justify-center">
                <blockquote className="relative">
                  <div className="text-green-600 font-fredericka text-9xl absolute -top-16 -left-10 opacity-20">"</div>
                  <p className="text-3xl lg:text-4xl text-slate-800 font-fondamento italic leading-tight mb-10 relative z-10">
                    Trade is more than commerce; it is a cultural exchange that brings people together and elevates global standards of living.
                  </p>
                  <cite className="block not-italic">
                    <span className="text-xl font-black text-slate-900 font-graduate uppercase tracking-widest block mb-1">Raj Patel</span>
                    <span className="text-sm font-bold text-green-600 font-graduate uppercase tracking-widest">Founder & Managing Director</span>
                  </cite>
                </blockquote>
              </div>
              <div className="bg-slate-900 relative min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Raj Patel - Founder of Patel Impex"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

