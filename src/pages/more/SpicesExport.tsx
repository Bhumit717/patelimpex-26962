import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Spade, Flame, Globe, Star, Award, Package } from "lucide-react";
import spicesImage from "@/assets/spices-export-facility.jpg";

const SpicesExport = () => {
  const spiceCategories = [
    { name: "Turmeric Powder", desc: "Premium quality curcumin-rich turmeric", origin: "Kerala, Tamil Nadu" },
    { name: "Red Chili Powder", desc: "Authentic spicy red chili varieties", origin: "Andhra Pradesh, Karnataka" },
    { name: "Coriander Seeds", desc: "Aromatic whole and ground coriander", origin: "Rajasthan, Gujarat" },
    { name: "Cumin Seeds", desc: "Premium jeera for international markets", origin: "Gujarat, Rajasthan" },
    { name: "Cardamom", desc: "Queen of spices - green and black varieties", origin: "Kerala, Tamil Nadu" },
    { name: "Black Pepper", desc: "King of spices with intense flavor", origin: "Kerala, Karnataka" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Spade className="w-4 h-4 mr-2" />
                Authentic Indian Spices
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Spices Export from India
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export authentic Indian spices worldwide. From aromatic turmeric to fiery red chilies, we supply premium quality spices that add flavor to global cuisines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Spices Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/inquiry">Order Samples</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={spicesImage} 
                alt="Spices Export Facility - Premium Indian spices processing and packaging"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Spices for Export</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spiceCategories.map((spice, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Flame className="w-5 h-5 mr-2 text-orange-500" />
                      {spice.name}
                    </CardTitle>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <CardDescription>{spice.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Origin: {spice.origin}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">Export Grade</Badge>
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Spice Export Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Authentic Quality",
                description: "Direct sourcing from spice-growing regions of India ensures authenticity and premium quality"
              },
              {
                icon: Globe,
                title: "Global Standards",
                description: "Compliance with international food safety standards including HACCP, ISO, and FSSAI"
              },
              {
                icon: Package,
                title: "Custom Packaging",
                description: "Flexible packaging options from bulk containers to retail-ready consumer packs"
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

export default SpicesExport;