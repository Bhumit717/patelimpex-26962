import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Truck, Award, Globe, ShieldCheck } from "lucide-react";
import parkingImg from "@/assets/products/patterned-ceramic-tiles.png";
import SEOHead from "@/components/SEOHead";

const ParkingTilesExport = () => {
  const features = [
    { title: "High Breaking Strength", description: "12mm+ thickness to withstand heavy vehicle load.", icon: Truck },
    { title: "Anti-Skid", description: "Special rough textures for high friction and safety.", icon: Award },
    { title: "Frost Resistance", description: "Handles extreme temperature variations.", icon: Globe },
    { title: "Scratch Proof", description: "Hard surface suitable for driveway and parking use.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Outdoor Parking Tiles Export | Heavy Duty Ceramics | Patel Impex" 
        description="Premium heavy-duty parking tiles for outdoor driveways and commercial areas. High breaking strength 12mm tiles exported from Morbi, India." 
        canonicalUrl="/more/parking-tiles-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Truck className="w-4 h-4 mr-2" />
                Civil Construction
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Parking Tiles Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Engineered for resilience, our parking tiles offer the perfect blend of strength and aesthetics. Sourced from Morbi, these heavy-duty tiles are ideal for driveways, terraces, and public walkways.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Request Bulk Export</Link>
              </Button>
            </div>
            <div>
              <img 
                src={parkingImg} 
                alt="Heavy-duty parking tiles for outdoor use"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Durability Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-green-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
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

export default ParkingTilesExport;
