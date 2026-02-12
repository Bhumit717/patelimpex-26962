import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Ship, Plane, FileText, Shield, Clock, ArrowRight, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

const Services = () => {
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

  const services = [
    {
      icon: Ship,
      title: "Sea Freight Solutions",
      description: "Cost-effective ocean shipping for bulk cargo and containers with complete door-to-door tracking and insurance coverage.",
      features: ["FCL & LCL Container Shipping", "Bulk Cargo Handling", "Port-to-Port Services", "Door-to-Door Delivery"],
      price: "Starting from $800/TEU",
      color: "from-ai-primary to-ai-secondary",
      bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
    },
    {
      icon: Plane,
      title: "Air Freight Express",
      description: "Fast and reliable air cargo services for time-sensitive shipments with priority handling and temperature control.",
      features: ["Express Air Cargo", "Temperature Controlled Transport", "Dangerous Goods Handling", "Charter Flight Services"],
      price: "Starting from $4.50/kg",
      color: "from-ai-secondary to-ai-accent",
      bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
    },
    {
      icon: Truck,
      title: "Land Transportation",
      description: "Comprehensive road and rail transportation across continents with real-time GPS tracking and secure handling.",
      features: ["Cross-border Road Transport", "Rail Freight Services", "Last Mile Delivery", "Multi-modal Solutions"],
      price: "Custom Pricing",
      color: "from-ai-accent to-ai-cyber",
      bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
    },
    {
      icon: FileText,
      title: "Trade Documentation",
      description: "Complete export-import documentation services with expert compliance support and customs clearance assistance.",
      features: ["Export-Import Documentation", "Customs Clearance Support", "Trade License Assistance", "Certificate of Origin"],
      price: "Starting from $150",
      color: "from-ai-cyber to-ai-neon",
      bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality inspection and testing services with detailed reporting and international certification support.",
      features: ["Pre-shipment Inspection", "Quality Testing & Analysis", "International Certifications", "Compliance Verification"],
      price: "Starting from $200",
      color: "from-ai-neon to-ai-primary",
      bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
    },
    {
      icon: Clock,
      title: "24/7 Support Services",
      description: "Round-the-clock customer support with dedicated account managers and real-time shipment tracking.",
      features: ["24/7 Customer Support", "Real-time Tracking", "Dedicated Account Manager", "Emergency Response Team"],
      price: "Included",
      color: "from-ai-primary to-ai-accent",
      bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
    }
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Free consultation to understand your trade requirements" },
    { step: "02", title: "Planning", desc: "Customized logistics and documentation planning" },
    { step: "03", title: "Execution", desc: "Professional handling of all trade processes" },
    { step: "04", title: "Delivery", desc: "Timely delivery with complete tracking support" }
  ];

  const benefits = [
    "ISO 9001:2015 Certified Quality Management",
    "15+ Years of International Trade Expertise",
    "Network Spanning 50+ Countries Globally",
    "End-to-End Trade Solution Provider",
    "Competitive Pricing with No Hidden Costs",
    "99.5% On-Time Delivery Performance"
  ];

  return (
    <div className="min-h-screen bg-[#e9edf3]">
      <SEOHead title="Export Import Services | Patel Impex" description="Comprehensive export import services including logistics, documentation, and market research." canonicalUrl="/services" />
      <Navigation />

      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-24 max-w-4xl mx-auto animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <Globe className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] font-graduate">Global Trade Solutions</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              World Class <span className="text-green-600 font-fredericka tracking-tight lowercase">Logistics</span>
            </h1>
            <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              Comprehensive import-export solutions designed to streamline your international trade operations.
              From logistics to documentation, we handle every aspect of global commerce with expertise and reliability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 reveal">
            {services.map((service, index) => (
              <div key={index}
                className="nm-card group hover:-translate-y-3 transition-all duration-500 !p-0 overflow-hidden bg-white animate-slide-up opacity-0"
                style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}>
                <div className="p-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 shadow-inner border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 font-graduate uppercase tracking-tight group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-lg font-fondamento italic leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 text-xs font-bold font-graduate uppercase tracking-widest">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-black text-green-600 font-graduate">{service.price}</span>
                  </div>

                  <Link to="/inquiry">
                    <button className="nm-btn-dark w-full !py-4 group">
                      <span className="font-graduate uppercase tracking-widest text-[10px] font-bold">Secure Quote</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-24 reveal">
            <div className="text-center mb-20 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tight">Our <span className="text-green-600 font-fredericka tracking-tight lowercase">Trade</span> Process</h2>
              <p className="text-xl text-slate-500 font-fondamento italic max-w-2xl mx-auto leading-relaxed">
                A streamlined approach to international trade that ensures efficiency, transparency, and success at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group animate-slide-up opacity-0" style={{ animationDelay: `${(index + 1) * 200}ms`, animationFillMode: 'forwards' }}>
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-slate-50 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl font-black text-green-600 font-graduate">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 font-graduate uppercase tracking-tight group-hover:text-green-600 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 font-fondamento italic leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="nm-card !p-16 mb-24 bg-white border-none reveal">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="animate-slide-up opacity-0 stagger-1" style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tight">Why Choose <span className="text-green-600 tracking-tight font-fredericka lowercase">Patel Impex?</span></h2>
                <p className="text-xl text-slate-500 font-fondamento italic mb-10 leading-relaxed">
                  With over 15 years of experience in international trade, we bring unmatched expertise and reliability to your global business operations.
                </p>
                <div className="grid gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-slate-400 font-graduate font-bold uppercase tracking-widest text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-scale-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                  alt="International business meeting"
                  className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl border-8 border-slate-50"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[30px] shadow-2xl border border-slate-100 group">
                  <Globe className="h-10 w-10 mb-4 text-green-600 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="text-4xl font-black text-slate-900 font-graduate">50+</div>
                  <div className="text-xs font-bold text-slate-400 font-graduate uppercase tracking-widest">Countries Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center nm-card !p-16 bg-white border-none overflow-hidden relative reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-[150px] opacity-40 -z-10 animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}></div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-slate-900 font-graduate uppercase tracking-tighter animate-slide-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>Ready to <span className="text-green-600 font-fredericka tracking-tight lowercase">Expand</span> Globally?</h2>
            <p className="text-xl text-slate-500 font-fondamento italic mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              Get started with a free consultation and discover how we can help your business reach international markets successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-slide-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
              <Link to="/inquiry" className="nm-btn-green !w-auto min-w-[250px] !py-6 group">
                <span className="font-graduate uppercase tracking-[0.2em] font-bold text-sm">Get Free Quote</span>
                <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="nm-btn !w-auto min-w-[250px] !py-6 group bg-white">
                <span className="font-graduate uppercase tracking-[0.2em] font-bold text-sm">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
