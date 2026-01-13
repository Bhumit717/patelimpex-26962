import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, Package, Globe, Heart } from "lucide-react";
import almondImage from "@/assets/agricultural-export-processing.jpg";

const AlmondExport = () => {
  const almondTypes = [
    { type: "Mamra Almonds", grade: "Premium", origin: "Kashmir", markets: "Middle East, Europe, USA" },
    { type: "California Almonds", grade: "Standard", origin: "Import-Export", markets: "India, Asia" },
    { type: "Gurbandi Almonds", grade: "Organic", origin: "Kashmir", markets: "Health Food Markets" },
    { type: "Almond Flour", grade: "Food Grade", origin: "Processing", markets: "Bakery Industry" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Heart className="w-4 h-4 mr-2" />
                Almond Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nutritious Almond Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian almonds rich in nutrients and flavor. Health-focused nut products for international wellness markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Almonds</Link>
              </Button>
            </div>
            <div>
              <img 
                src={almondImage} 
                alt="Almond Export - Premium Indian almonds for health-conscious markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Almond Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {almondTypes.map((almond, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {almond.type}
                    <Badge variant="outline">{almond.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {almond.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {almond.markets}</span>
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

export default AlmondExport;