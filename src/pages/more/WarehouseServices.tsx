import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Warehouse, Package, Shield, Thermometer, Camera, Truck } from "lucide-react";
import warehouseImage from "@/assets/rice-export-warehouse.jpg";

const WarehouseServices = () => {
  const facilities = [
    { feature: "Climate Control", description: "Temperature and humidity managed storage", icon: Thermometer },
    { feature: "Security Systems", description: "24/7 surveillance and access control", icon: Shield },
    { feature: "Inventory Management", description: "Real-time stock tracking and reporting", icon: Package },
    { feature: "Loading Facilities", description: "Multiple dock doors and material handling", icon: Truck }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Warehouse className="w-4 h-4 mr-2" />
                Warehouse Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Modern Warehouse Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                State-of-the-art warehousing facilities for your export goods. Climate-controlled storage, inventory management, and distribution services.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Request Storage Quote</Link>
              </Button>
            </div>
            <div>
              <img 
                src={warehouseImage} 
                alt="Modern Warehouse Services - Secure storage and distribution"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Warehouse Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <facility.icon className="w-5 h-5 text-primary" />
                    {facility.feature}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.description}</p>
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

export default WarehouseServices;