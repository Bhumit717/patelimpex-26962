import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Zap, Clock, Globe, Package, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { useEffect } from "react";

const ExpressShippingServices = () => {
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
    <>
      <Helmet>
        <title>Express Shipping Services | Fast International Courier | Patel Impex</title>
        <meta name="description" content="Fast express shipping services for urgent international deliveries. Same-day, next-day, and 48-hour express courier solutions with tracking and insurance." />
        <meta name="keywords" content="express shipping, fast courier services, urgent delivery, same day shipping, international express, DHL, FedEx, UPS services" />
        <link rel="canonical" href="https://patelimpex.com/seo/express-shipping-services" />
      </Helmet>

      <div className="min-h-screen bg-[#e9edf3]">
        <Navigation />
        <WhatsAppChat />

        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="flex justify-center mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="w-24 h-24 bg-white nm-card flex items-center justify-center shadow-2xl group hover:scale-110 transition-transform">
                  <Zap className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                Express <span className="text-green-600 font-fredericka tracking-tight lowercase">Shipping</span>
              </h1>
              <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed max-w-4xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                Ultra-fast express shipping for urgent international deliveries. Same-day, next-day, and 48-hour delivery options with real-time tracking and guaranteed delivery times.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-20 reveal">
              {[
                { icon: Clock, title: "Same Day Delivery", desc: "Urgent deliveries within 4-6 hours in major cities worldwide", color: "text-green-600" },
                { icon: Globe, title: "220+ Countries", desc: "Worldwide express network reaching every corner of the globe", color: "text-blue-600" },
                { icon: Package, title: "Real-time Tracking", desc: "Live GPS tracking with delivery notifications and updates", color: "text-purple-600" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-[30px] p-10 nm-card text-center group hover:-translate-y-3 transition-all duration-500 animate-slide-up opacity-0" style={{ animationDelay: `${(idx + 1) * 200}ms`, animationFillMode: 'forwards' }}>
                  <item.icon className={`h-14 w-14 ${item.color} mx-auto mb-6 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-black text-slate-900 mb-4 font-graduate uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-fondamento italic text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[40px] p-16 nm-card mb-20 reveal">
              <h2 className="text-4xl md:text-6xl font-black text-center text-slate-900 mb-16 font-graduate uppercase tracking-tight animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>Express <span className="text-green-600 font-fredericka tracking-tight lowercase">Services</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  "Same Day Delivery (4-6 hrs)",
                  "Next Day Delivery (24 hrs)",
                  "48-Hour Express (2 days)",
                  "Weekend Delivery Services",
                  "Time-Definite Delivery",
                  "Emergency Courier Services",
                  "Document Express",
                  "Package Express",
                  "Temperature Controlled Express"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-4 animate-slide-up opacity-0 stagger-1" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-graduate font-bold uppercase tracking-widest text-xs">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center reveal">
              <Link to="/contact" className="nm-btn-green !w-auto inline-flex items-center space-x-4 py-8 px-12 animate-scale-in opacity-0" style={{ animationFillMode: 'forwards' }}>
                <Zap className="h-6 w-6" />
                <span className="font-graduate font-bold uppercase tracking-[0.2em]">Get Express Quote</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ExpressShippingServices;