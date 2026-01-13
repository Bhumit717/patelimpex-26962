import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Sun, Package, Globe, Award } from "lucide-react";
import sunflowerImage from "@/assets/agricultural-export-processing.jpg";

const SunflowerSeedsExport = () => {
  const sunflowerTypes = [
    { type: "Confectionery Seeds", size: "Large Size", origin: "Karnataka", markets: "Middle East, Europe, Russia" },
    { type: "Oil Seeds", grade: "High Oil Content", origin: "Andhra Pradesh", markets: "Ukraine, Turkey, Bulgaria" },
    { type: "Bird Feed Seeds", grade: "Mixed Grade", origin: "Maharashtra", markets: "Europe, USA, Australia" },
    { type: "Sunflower Oil", grade: "Refined", origin: "Processing", markets: "Global Markets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Sun className="w-4 h-4 mr-2" />
                Sunflower Seeds Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Sunflower Seeds Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian sunflower seeds for oil extraction and confectionery. High-quality seeds for multiple applications.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Sunflower Seeds</Link>
              </Button>
            </div>
            <div>
              <img 
                src={sunflowerImage} 
                alt="Sunflower Seeds Export - Premium Indian sunflower seeds for global oil industry"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sunflower Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sunflowerTypes.map((sunflower, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {sunflower.type}
                    <Badge variant="outline">{sunflower.size || sunflower.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {sunflower.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {sunflower.markets}</span>
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

export default SunflowerSeedsExport;