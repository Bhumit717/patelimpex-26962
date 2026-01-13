import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Package, Globe, Award } from "lucide-react";
import garlicImage from "@/assets/agricultural-export-processing.jpg";

const GarlicExport = () => {
  const garlicTypes = [
    { type: "Fresh Garlic", size: "5-6cm", origin: "Gujarat", markets: "Bangladesh, Malaysia, Singapore" },
    { type: "Dehydrated Garlic", grade: "Flakes/Granules", origin: "Gujarat", markets: "USA, Europe, Japan" },
    { type: "Garlic Powder", mesh: "80-120", origin: "Rajasthan", markets: "Global Food Industry" },
    { type: "Peeled Garlic", grade: "Fresh Peeled", origin: "Haryana", markets: "USA, Canada, Australia" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Package className="w-4 h-4 mr-2" />
                Garlic Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Garlic Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export high-quality Indian garlic with strong aroma and medicinal properties. Fresh and processed garlic for global markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Garlic</Link>
              </Button>
            </div>
            <div>
              <img 
                src={garlicImage} 
                alt="Garlic Export - Premium Indian garlic for global culinary markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Garlic Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {garlicTypes.map((garlic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {garlic.type}
                    <Badge variant="outline">{garlic.size || garlic.grade || garlic.mesh}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {garlic.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {garlic.markets}</span>
                    </div>
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

export default GarlicExport;