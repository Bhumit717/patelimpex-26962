
import { Truck, ShieldCheck, Globe, Clock, ArrowRight, Anchor } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Anchor,
      title: "Sea Freight",
      description: "Efficient ocean shipping solutions for bulk commodities and large-scale cargo movements.",
      color: "text-accent-ink",
      bg: "bg-secondary"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "End-to-end supply chain management ensuring timely delivery across global borders.",
      color: "text-accent-ink",
      bg: "bg-secondary"
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous inspection protocols to maintain high standards for all agro resources.",
      color: "text-accent-ink",
      bg: "bg-secondary"
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Strategic partnerships with verified suppliers to provide premium commodities.",
      color: "text-accent-ink",
      bg: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-card border border-border mb-6">
            <Clock className="h-4 w-4 text-accent-ink mr-2" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] font-graduate">Reliable Solutions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[0.9] font-graduate uppercase tracking-tighter">
            World-Class
            <span className="block text-accent-ink font-fredericka tracking-tight lowercase py-2">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-4 group hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 ${service.bg} flex items-center justify-center mb-8 border border-white transition-transform group-hover:scale-110`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>

              <h3 className="text-2xl font-black text-foreground font-graduate uppercase tracking-tight mb-4">{service.title}</h3>
              <p className="text-muted-foreground font-fondamento text-lg italic leading-relaxed mb-8">
                {service.description}
              </p>

              <Link to="/services" className="flex items-center text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] font-graduate group-hover:text-accent-ink transition-colors">
                Learn More <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 md:p-16 bg-card flex flex-col md:flex-row items-center justify-between gap-10 border border-border">
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-black text-foreground font-graduate uppercase tracking-tighter mb-4">
              Need a Custom <span className="text-accent-ink font-fredericka tracking-tight lowercase">Export Plan?</span>
            </h4>
            <p className="text-muted-foreground font-fondamento italic text-xl max-w-xl">
              Our consultants are ready to tailor a logistics strategy that perfectly fits your business goals.
            </p>
          </div>
          <Link to="/contact">
            <button className="nm-btn-green border-none !py-6 px-12 !text-[hsl(var(--paper))] font-graduate font-bold uppercase tracking-widest text-sm">
              Request Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
