import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, Package, Globe, Flower } from "lucide-react";
import sesameImage from "@/assets/agricultural-export-processing.jpg";

const SesameSeedsExport = () => {
  const sesameTypes = [
    { type: "Natural Sesame", color: "White/Natural", origin: "Gujarat", markets: "China, Japan, Turkey" },
    { type: "Hulled Sesame", color: "White", origin: "Rajasthan", markets: "Europe, USA, Middle East" },
    { type: "Black Sesame", color: "Black", origin: "Madhya Pradesh", markets: "Japan, Korea, China" },
    { type: "Sesame Oil", grade: "Cold Pressed", origin: "Various", markets: "Health Food Markets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Flower className="w-4 h-4 mr-2" />
                Sesame Seeds Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Sesame Seeds Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export high-quality Indian sesame seeds rich in oil content and nutrients. Premium seeds for food and oil industries.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Sesame Seeds</Link>
              </Button>
            </div>
            <div>
              <img 
                src={sesameImage} 
                alt="Sesame Seeds Export - Premium Indian sesame seeds for global markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sesame Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sesameTypes.map((sesame, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {sesame.type}
                    <Badge variant="outline">{sesame.color || sesame.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {sesame.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {sesame.markets}</span>
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

export default SesameSeedsExport;