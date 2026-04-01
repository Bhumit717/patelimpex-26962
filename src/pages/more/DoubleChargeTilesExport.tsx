import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Layers, Award, Globe, ShieldCheck } from "lucide-react";
import doubleChargeImg from "@/assets/products/stone-look-tiles.png";
import SEOHead from "@/components/SEOHead";

const DoubleChargeTilesExport = () => {
  const features = [
    { title: "Longevity", description: "Design persists even after heavy surface wear.", icon: Layers },
    { title: "Commercial Grade", description: "Ideal for high-traffic public and commercial spaces.", icon: Award },
    { title: "Low Water Absorption", description: "Minimal porosity ensures frost resistance.", icon: Globe },
    { title: "Indestructible", description: "Exceptional resistance to deep abrasion.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Double Charge Vitrified Tiles Export | Patel Impex" 
        description="Double Charge Vitrified Tiles Export - Premium quality and expert information from the export hub of India." 
        canonicalUrl="/more/double-charge-tiles-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Layers className="w-4 h-4 mr-2" />
                Durable Tiles
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Double Charge Vitrified Tiles Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Double Charge vitrified tiles are known for their extreme durability. Two layers of color pigments are infused into the tile body, making them thicker and much longer-lasting than standard tiles.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Bulk Order</Link>
              </Button>
            </div>
            <div>
              <img 
                src={doubleChargeImg} 
                alt="Double charge vitrified tiles for export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Export Quality Standards</h2>
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

export default DoubleChargeTilesExport;
