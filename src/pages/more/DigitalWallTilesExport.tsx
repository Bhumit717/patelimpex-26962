import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Smartphone, Award, Globe, Zap } from "lucide-react";
import digitalWallImg from "@/assets/products/decorative-wall-tiles.png";
import SEOHead from "@/components/SEOHead";

const DigitalWallTilesExport = () => {
  const features = [
    { title: "HD Resolution", description: "Ultra-sharp textures for realistic stone and wood effects.", icon: Smartphone },
    { title: "Wall Specialists", description: "Optimized weight for secure vertical installation.", icon: Award },
    { title: "Global Designs", description: "Exporting latest international design trends.", icon: Globe },
    { title: "Waterproof", description: "Ideal for bathrooms, kitchens, and wet areas.", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Digital Wall Tiles Export | Decorative Indian Tiles | Patel Impex" 
        description="Source the latest digital wall tiles from India. High-definition decorative tiles for luxury bathrooms and kitchen walls for global markets." 
        canonicalUrl="/more/digital-wall-tiles-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Smartphone className="w-4 h-4 mr-2" />
                Decorative Ceramics
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Wall Tiles Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform walls into art with high-definition digital wall tiles. Our collection offers endless patterns, from 3D textures to photographic realism for the most ambitious designs.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">View Design Catalog</Link>
              </Button>
            </div>
            <div>
              <img 
                src={digitalWallImg} 
                alt="Decorative digital wall tile collection"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Design Precision</h2>
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

export default DigitalWallTilesExport;
