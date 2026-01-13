import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Ship, Plane, FileText, Shield, Clock, ArrowRight, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive import-export solutions designed to streamline your international trade operations. From logistics to documentation, we handle every aspect of global commerce with expertise and reliability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-ai-primary/20 shadow-lg bg-gray-800/50 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-3 group-hover:text-ai-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 hover:text-ai-primary transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-ai-primary mr-3 flex-shrink-0" />
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-ai-primary">{service.price}</span>
                  </div>
                  
                  <Link to="/inquiry">
                    <Button variant="ghost" className="w-full group/btn justify-between hover:bg-ai-primary/10 transition-all duration-300 text-white border border-ai-primary/30">
                      <span className="font-semibold">Get Quote</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A streamlined approach to international trade that ensures efficiency, transparency, and success at every step.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl font-black text-white">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-ai-primary/30 to-ai-secondary/30 -translate-x-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ai-primary transition-colors">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-800/50 rounded-3xl p-12 shadow-2xl mb-20 border border-ai-primary/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Patel Exports?</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  With over 15 years of experience in international trade, we bring unmatched expertise and reliability to your global business operations.
                </p>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-ai-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
                  alt="International business meeting"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-ai-primary to-ai-secondary text-white p-6 rounded-xl shadow-xl">
                  <Globe className="h-8 w-8 mb-2" />
                  <div className="text-2xl font-black">50+</div>
                  <div className="text-sm">Countries Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-ai-primary to-ai-secondary rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Expand Globally?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get started with a free consultation and discover how we can help your business reach international markets successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry">
                <Button size="lg" className="bg-white text-ai-primary hover:bg-gray-100 font-bold transform hover:scale-105 transition-all duration-300">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-ai-primary transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </Button>
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
