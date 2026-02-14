import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Clock, Target, Globe2, TrendingUp, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const About = () => {
  const milestones = [
    { year: "2010", title: "Founded", desc: "Started with a vision to bridge Indian manufacturers with global markets" },
    { year: "2015", title: "ISO Certified", desc: "Achieved ISO 9001:2015 certification for quality management systems" },
    { year: "2018", title: "Global Expansion", desc: "Expanded operations to 30+ countries across 5 continents" },
    { year: "2023", title: "Digital Innovation", desc: "Launched AI-powered trade matching platform for faster connections" },
  ];

  const values = [
    { icon: Shield, title: "Trust & Transparency", desc: "Building lasting relationships through honest business practices" },
    { icon: TrendingUp, title: "Excellence", desc: "Committed to delivering superior results in every transaction" },
    { icon: Globe2, title: "Global Vision", desc: "Connecting cultures and economies across international borders" },
    { icon: Users, title: "Partnership", desc: "Your success is our success - we grow together" },
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
    <div className="min-h-screen bg-white">
      <SEOHead title="About Us | Patel Impex" description="Learn about Patel Impex, our journey, values, and mission in the global import-export industry." canonicalUrl="/about" />
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter">
              About <span className="text-green-600 font-fredericka tracking-tight lowercase">Patel Impex</span>
            </h1>
            <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed max-w-3xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              Pioneering international trade solutions since 2010, connecting Indian excellence with global opportunities through innovative export-import services.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 reveal">
            <div className="space-y-6 animate-slide-up opacity-0 stagger-1" style={{ animationFillMode: 'forwards' }}>
              <h2 className="text-4xl font-bold text-slate-800 font-graduate uppercase tracking-tight">Our <span className="text-green-600 font-fredericka tracking-tight lowercase">Journey</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed font-fondamento italic">
                Founded in 2010 with a simple yet powerful vision: to make international trade accessible, transparent, and profitable for Indian businesses. Today, we're proud to be a trusted bridge between Indian manufacturers and global markets.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-fondamento italic">
                Our expertise spans across multiple industries including textiles, agricultural products, pharmaceuticals, engineering goods, and handicrafts. We've facilitated over $500 million in trade value and helped hundreds of businesses expand globally.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Expert knowledge of international trade regulations",
                  "Strong relationships with global buyers and suppliers",
                  "Comprehensive logistics and documentation support",
                  "24/7 customer service across all time zones"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-4 animate-slide-up opacity-0" style={{ animationDelay: `${(index + 2) * 200}ms`, animationFillMode: 'forwards' }}>
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-graduate font-bold uppercase tracking-widest text-xs">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Global business meeting - Patel Impex import export business team"
                className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl border-4 border-[#e9edf3]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[30px] shadow-2xl border border-slate-100 group">
                <div className="text-4xl font-black text-green-600 font-graduate group-hover:scale-110 transition-transform">$500M+</div>
                <div className="text-xs font-bold text-slate-400 font-graduate uppercase tracking-widest">Trade Volume Facilitated</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-16 font-graduate uppercase tracking-tight">Our <span className="text-green-600 font-fredericka tracking-tight lowercase">Milestones</span></h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-100 rounded-full"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up opacity-0`} style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="nm-card !p-8 hover:shadow-[15px_15px_30px_#cfd6e0,-15px_-15px_30px_#ffffff] transition-all duration-500 bg-white">
                      <div className="text-3xl font-black text-green-600 mb-2 font-graduate">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 font-graduate uppercase tracking-tight">{milestone.title}</h3>
                      <p className="text-slate-500 font-fondamento italic">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-xl"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-16 font-graduate uppercase tracking-tight">Our Core <span className="text-green-600 font-fredericka tracking-tight lowercase">Values</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value, index) => (
                <div key={index} className="group animate-scale-in opacity-0" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
                  <div className="nm-card !p-10 h-full bg-white hover:-translate-y-3 transition-all duration-500">
                    <div className="w-20 h-20 rounded-[25px] bg-white shadow-inner border border-slate-100 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                      <value.icon className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 font-graduate uppercase tracking-tight text-center group-hover:text-green-600 transition-colors">{value.title}</h3>
                    <p className="text-slate-500 font-fondamento text-center italic leading-relaxed">{value.desc}</p>
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

