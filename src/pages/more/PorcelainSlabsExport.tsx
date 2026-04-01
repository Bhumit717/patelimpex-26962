import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Maximize, Award, Globe, Layout } from "lucide-react";
import slabsImg from "@/assets/products/grey-vitrified-tiles.png";
import SEOHead from "@/components/SEOHead";

const PorcelainSlabsExport = () => {
  const features = [
    { title: "Large Format", description: "Sizes up to 1200x2400mm for seamless looking architectures.", icon: Maximize },
    { title: "Premium Aesthetic", description: "Mimics natural marble and exotic stones perfectly.", icon: Award },
    { title: "Global Demand", description: "Increasingly popular in high-end projects in USA and Europe.", icon: Globe },
    { title: "Versatile Use", description: "Ideal for flooring, walls, and kitchen countertops.", icon: Layout }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Porcelain Slabs Export | Large Format Indian Porcelain | Patel Impex" 
        description="Premium large format porcelain slabs for global export. High-end architectural slabs sourced from the ceramic capital of India." 
        canonicalUrl="/more/porcelain-slabs-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Maximize className="w-4 h-4 mr-2" />
                Modern Architecture
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Porcelain Slabs Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Step into the future of surfacing with large format porcelain slabs. These slabs reduce grout lines and provide a continuous, luxurious stone appearance for walls, floors, and facades.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Slab Inquiry</Link>
              </Button>
            </div>
            <div>
              <img 
                src={slabsImg} 
                alt="Large scale porcelain slabs for premium construction"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Architectural Excellence</h2>
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

export default PorcelainSlabsExport;
