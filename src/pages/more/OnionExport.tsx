import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Package, Globe, Award, Zap } from "lucide-react";
import onionImage from "@/assets/agricultural-export-processing.jpg";

const OnionExport = () => {
  const onionTypes = [
    { type: "Red Onion", size: "50-80mm", origin: "Maharashtra", markets: "Bangladesh, Malaysia, UAE" },
    { type: "White Onion", size: "40-70mm", origin: "Gujarat", markets: "Middle East, Europe" },
    { type: "Yellow Onion", size: "50-90mm", origin: "Karnataka", markets: "Sri Lanka, Singapore, Philippines" },
    { type: "Dehydrated Onion", grade: "Flakes/Powder", origin: "Gujarat", markets: "USA, Europe, Japan" }
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
                Onion Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fresh Onion Export Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian onions with excellent shelf life and pungency. Quality bulbs for international vegetable markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Onions</Link>
              </Button>
            </div>
            <div>
              <img 
                src={onionImage} 
                alt="Onion Export - Fresh Indian onions for global vegetable markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Onion Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {onionTypes.map((onion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {onion.type}
                    <Badge variant="outline">{onion.size || onion.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {onion.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {onion.markets}</span>
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

export default OnionExport;