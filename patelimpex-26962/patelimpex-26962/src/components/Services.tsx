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
  return <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 bg-gray-800/80 border border-ai-primary/30 rounded-[50px] mb-6">
          <span className="text-sm font-semibold text-ai-primary uppercase tracking-wide">
            Our Services
          </span>
        </div>

        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Comprehensive
          <span className="block text-transparent bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text">
            Trade Solutions
          </span>
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From logistics to documentation, we provide end-to-end solutions for all your
          international trade requirements with unmatched expertise and reliability. Explore our
          <a href="/products" className="text-ai-primary hover:underline ml-1">export products</a> and discover why we're the
          <a href="/about" className="text-ai-primary hover:underline ml-1">leading import export company</a> in India.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => <Card key={index} className="group hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] transition-all duration-500 hover:-translate-y-4 border border-ai-primary/20 shadow-[0_5px_15px_rgba(139,92,246,0.2)] bg-gray-800/50 backdrop-blur-sm relative overflow-hidden rounded-[50px]">
          {/* Static gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

          <CardHeader className="relative z-10 pb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-[25px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <service.icon className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ai-primary transition-colors duration-300">
              {service.title}
            </h3>

            <CardDescription className="text-gray-300 text-base leading-relaxed">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10 pt-0">
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-300 hover:text-ai-primary transition-colors duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-medium">{feature}</span>
              </li>)}
            </ul>

            <Button variant="ghost" className="w-full group/btn justify-between hover:bg-ai-primary/10 transition-all duration-300 text-white border border-ai-primary/30 rounded-[50px]">
              <span className="font-semibold">Learn More</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </CardContent>
        </Card>)}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">

      </div>
    </div>
  </section>;
};
export default Services;