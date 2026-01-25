import { Truck, Ship, Plane, FileText, Shield, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Services = () => {
  const services = [{
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective ocean shipping solutions for bulk cargo and containers worldwide with complete tracking.",
    features: ["Container Shipping", "Bulk Cargo", "Port-to-Port", "Door-to-Door"],
    color: "from-ai-primary to-ai-secondary",
    hoverColor: "group-hover:bg-ai-primary/10"
  }, {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments with priority handling.",
    features: ["Express Delivery", "Temperature Control", "Dangerous Goods", "Charter Services"],
    color: "from-ai-secondary to-ai-accent",
    hoverColor: "group-hover:bg-ai-secondary/10"
  }, {
    icon: Truck,
    title: "Land Transport",
    description: "Comprehensive road and rail transportation across continents with real-time monitoring.",
    features: ["Road Transport", "Rail Freight", "Cross-border", "Last Mile Delivery"],
    color: "from-ai-accent to-ai-cyber",
    hoverColor: "group-hover:bg-ai-accent/10"
  }, {
    icon: FileText,
    title: "Documentation",
    description: "Complete trade documentation and customs clearance services with expert compliance support.",
    features: ["Customs Clearance", "Trade Documents", "Compliance", "Insurance"],
    color: "from-ai-cyber to-ai-neon",
    hoverColor: "group-hover:bg-ai-cyber/10"
  }, {
    icon: Shield,
    title: "Quality Control",
    description: "Rigorous quality inspection and assurance for all shipments with detailed reporting.",
    features: ["Pre-shipment Inspection", "Quality Testing", "Certification", "Compliance Check"],
    color: "from-ai-neon to-ai-primary",
    hoverColor: "group-hover:bg-ai-neon/10"
  }, {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support and shipment tracking with dedicated account managers.",
    features: ["Live Tracking", "Customer Support", "Emergency Response", "Real-time Updates"],
    color: "from-ai-primary to-ai-accent",
    hoverColor: "group-hover:bg-ai-primary/10"
  }];
  return <section id="services" className="py-24 bg-[#e9edf3]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 bg-[#e9edf3] border border-white/50 rounded-[50px] mb-6 shadow-[6px_6px_10px_#cfd6e0,-6px_-6px_10px_#ffffff]">
          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
            Our Services
          </span>
        </div>

        <h2 className="text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
          Comprehensive
          <span className="block text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">
            Trade Solutions
          </span>
        </h2>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From logistics to documentation, we provide end-to-end solutions for all your
          international trade requirements with unmatched expertise and reliability. Explore our
          <a href="/products" className="text-blue-600 hover:underline ml-1">export products</a> and discover why we're the
          <a href="/about" className="text-blue-600 hover:underline ml-1">leading import export company</a> in India.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => <div key={index} className="nm-card p-8 group transition-all duration-500 hover:-translate-y-4">
          <div className="relative z-10">
            <div className={`w-16 h-16 rounded-[25px] flex items-center justify-center mb-6 shadow-[inset_6px_6px_10px_#cfd6e0,inset_-6px_-6px_10px_#ffffff]`}>
              <service.icon className="h-8 w-8 text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="space-y-3">
              {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-slate-500">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-medium">{feature}</span>
              </li>)}
            </ul>
          </div>
        </div>)}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">

      </div>
    </div>
  </section>;
};
export default Services;