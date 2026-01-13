import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Award, Globe, TrendingUp } from "lucide-react";
import riceImage from "@/assets/rice-export-warehouse.jpg";

const BasmatiRiceExport = () => {
  const basmatiVarieties = [
    { variety: "1121 Basmati", grade: "Extra Long Grain", aroma: "Premium", markets: "UAE, Saudi Arabia, UK" },
    { variety: "Pusa Basmati", grade: "Traditional", aroma: "Classic", markets: "Middle East, Europe" },
    { variety: "Super Basmati", grade: "Long Grain", aroma: "Strong", markets: "Iran, Iraq, Afghanistan" },
    { variety: "Sharbati Basmati", grade: "Medium Long", aroma: "Mild", markets: "Nepal, Bangladesh" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Wheat className="w-4 h-4 mr-2" />
                Basmati Rice Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Basmati Rice Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export world-class Indian Basmati rice with authentic aroma and extra-long grains. Premium quality rice for international markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Basmati Rice</Link>
              </Button>
            </div>
            <div>
              <img 
                src={riceImage} 
                alt="Basmati Rice Export - Premium Indian long grain rice for global markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Basmati Rice Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {basmatiVarieties.map((rice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {rice.variety}
                    <Badge variant="outline">{rice.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Aroma: {rice.aroma}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {rice.markets}</span>
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

export default BasmatiRiceExport;