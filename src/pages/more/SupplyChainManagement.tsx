import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Network, TrendingUp, Globe, Users, Target, Award } from "lucide-react";
import supplyChainImage from "@/assets/global-export-shipping.jpg";

const SupplyChainManagement = () => {
  const scmServices = [
    { service: "Vendor Development", benefit: "Quality supplier network", scope: "Source verification" },
    { service: "Inventory Optimization", benefit: "Reduced carrying costs", scope: "Demand forecasting" },
    { service: "Logistics Coordination", benefit: "Seamless delivery", scope: "Multi-modal transport" },
    { service: "Risk Management", benefit: "Supply continuity", scope: "Contingency planning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Network className="w-4 h-4 mr-2" />
                Supply Chain Management
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Supply Chain Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Optimize your export supply chain with end-to-end management solutions. Streamline operations from sourcing to delivery for maximum efficiency.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Optimize Supply Chain</Link>
              </Button>
            </div>
            <div>
              <img 
                src={supplyChainImage} 
                alt="Export Supply Chain Solutions - End-to-end management"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Supply Chain Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scmServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    {service.service}
                  </CardTitle>
                  <CardDescription>{service.benefit}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{service.scope}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupplyChainManagement;