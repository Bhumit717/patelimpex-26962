import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Mountain, Award, Globe, ShieldCheck } from "lucide-react";
import elevationImg from "@/assets/products/elevation-wall-tiles.png";
import SEOHead from "@/components/SEOHead";

const ElevationTilesExport = () => {
  const features = [
    { title: "Exterior Durability", description: "Weatherproof tiles for building facades and front-view elevation.", icon: Mountain },
    { title: "3D Textures", description: "Deeply textured designs that mimic natural split stone.", icon: Award },
    { title: "Thermal Insulation", description: "Provides an extra layer of protection against direct heat.", icon: Globe },
    { title: "Easy Installation", description: "Precise edge cutting for seamless interlocking installation.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Elevation Wall Tiles Export | Facade Solutions | Patel Impex" 
        description="Premium elevation wall tiles for building exteriors. 3D textured ceramic facade tiles exported from India for premium construction." 
        canonicalUrl="/more/elevation-tiles-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Mountain className="w-4 h-4 mr-2" />
                Building Exteriours
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Elevation Wall Tiles Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Elevate your architectural frontage with our premium 3D elevation tiles. Designed to withstand harsh outdoor conditions while providing the timeless look of natural stone and brick.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Facade Solutions</Link>
              </Button>
            </div>
            <div>
              <img 
                src={elevationImg} 
                alt="Exterior elevation tiles for building facades"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Architectural Protection</h2>
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

export default ElevationTilesExport;
