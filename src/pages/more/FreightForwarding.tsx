import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Truck, Ship, Plane, Globe, Clock, Shield } from "lucide-react";
import freightImage from "@/assets/global-export-shipping.jpg";

const FreightForwarding = () => {
  const shippingModes = [
    { mode: "Sea Freight", icon: Ship, time: "15-45 days", cost: "Low", capacity: "High" },
    { mode: "Air Freight", icon: Plane, time: "3-7 days", cost: "High", capacity: "Medium" },
    { mode: "Road Transport", icon: Truck, time: "5-15 days", cost: "Medium", capacity: "Medium" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Freight Forwarding
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Global Freight Forwarding
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive freight forwarding solutions for your international shipments. Multi-modal transport options with end-to-end tracking and support.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Shipping Quote</Link>
              </Button>
            </div>
            <div>
              <img 
                src={freightImage} 
                alt="Global Freight Forwarding - International shipping solutions"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingModes.map((shipping, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <shipping.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>{shipping.mode}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Transit Time:</span>
                    <Badge variant="outline">{shipping.time}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cost:</span>
                    <Badge variant="secondary">{shipping.cost}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Capacity:</span>
                    <Badge variant="outline">{shipping.capacity}</Badge>
                  </div>
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

export default FreightForwarding;