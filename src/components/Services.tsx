
import { Truck, ShieldCheck, Globe, Clock, ArrowRight, Anchor } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Anchor,
      title: "Sea Freight",
      description: "Efficient ocean shipping solutions for bulk commodities and large-scale cargo movements.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "End-to-end supply chain management ensuring timely delivery across global borders.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous inspection protocols to maintain high standards for all agro resources.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Strategic partnerships with verified suppliers to provide premium commodities.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm mb-6">
            <Clock className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] font-graduate">Reliable Solutions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] font-graduate uppercase tracking-tighter">
            World-Class
            <span className="block text-green-600 font-fredericka tracking-tight lowercase py-2">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-4 group hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-8 border border-white transition-transform group-hover:scale-110`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>

              <h3 className="text-2xl font-black text-slate-900 font-graduate uppercase tracking-tight mb-4">{service.title}</h3>
              <p className="text-slate-500 font-fondamento text-lg italic leading-relaxed mb-8">
                {service.description}
              </p>

              <Link to="/services" className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] font-graduate group-hover:text-green-600 transition-colors">
                Learn More <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 md:p-16 bg-white rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-100">
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-black text-slate-900 font-graduate uppercase tracking-tighter mb-4">
              Need a Custom <span className="text-green-600 font-fredericka tracking-tight lowercase">Export Plan?</span>
            </h4>
            <p className="text-slate-500 font-fondamento italic text-xl max-w-xl">
              Our consultants are ready to tailor a logistics strategy that perfectly fits your business goals.
            </p>
          </div>
          <Link to="/contact">
            <button className="nm-btn-green border-none !py-6 px-12 !text-white font-graduate font-bold uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl">
              Request Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
