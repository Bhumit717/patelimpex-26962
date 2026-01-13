import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Ship, Anchor, Globe, Clock, DollarSign, Shield } from "lucide-react";
import seaFreightImage from "@/assets/global-export-shipping.jpg";

const SeaFreight = () => {
  const containerTypes = [
    { type: "20ft Container", capacity: "28 CBM", weight: "21.6 MT", ideal: "General cargo, small shipments" },
    { type: "40ft Container", capacity: "56 CBM", weight: "26.5 MT", ideal: "Large volumes, cost-effective" },
    { type: "40ft HC", capacity: "68 CBM", weight: "26.5 MT", ideal: "High-cube cargo, extra height" },
    { type: "Reefer Container", capacity: "54 CBM", weight: "24 MT", ideal: "Temperature-controlled goods" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Ship className="w-4 h-4 mr-2" />
                Ocean Transportation
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sea Freight Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Cost-effective ocean freight solutions for global cargo transportation. We handle FCL, LCL, and specialized shipping requirements with reliable service.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Shipping Quote</Link>
              </Button>
            </div>
            <div>
              <img 
                src={seaFreightImage} 
                alt="Sea Freight Services - Ocean cargo shipping and container transportation"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Container Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {containerTypes.map((container, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Anchor className="w-5 h-5 mr-2 text-blue-600" />
                    {container.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Capacity:</strong> {container.capacity}</p>
                    <p><strong>Max Weight:</strong> {container.weight}</p>
                    <p><strong>Ideal For:</strong> {container.ideal}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12">Sea Freight Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Cost Effective",
                description: "Most economical option for large volume shipments and heavy cargo"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Access to ports worldwide with extensive shipping network coverage"
              },
              {
                icon: Shield,
                title: "Secure Transport",
                description: "Container security and comprehensive insurance coverage for cargo protection"
              }
            ].map((advantage, index) => (
              <Card key={index} className="text-center p-6">
                <advantage.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="mb-4">{advantage.title}</CardTitle>
                <CardDescription>{advantage.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeaFreight;