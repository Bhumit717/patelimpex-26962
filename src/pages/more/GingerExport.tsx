import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Heart, Globe, Award } from "lucide-react";
import gingerImage from "@/assets/spices-export-facility.jpg";

const GingerExport = () => {
  const gingerTypes = [
    { type: "Fresh Ginger", grade: "Premium", origin: "Kerala", markets: "USA, Europe, Middle East" },
    { type: "Dried Ginger", grade: "Cochin Grade", origin: "Kerala", markets: "Bangladesh, Sri Lanka, Nepal" },
    { type: "Ginger Powder", grade: "Food Grade", origin: "Various", markets: "Global Food Industry" },
    { type: "Organic Ginger", grade: "Certified Organic", origin: "Karnataka", markets: "Europe, USA, Australia" }
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
                Ginger Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Medicinal Ginger Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian ginger with high gingerol content. Fresh and dried ginger for culinary and medicinal applications.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Ginger</Link>
              </Button>
            </div>
            <div>
              <img 
                src={gingerImage} 
                alt="Ginger Export - Premium Indian ginger for health and culinary markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Ginger Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gingerTypes.map((ginger, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {ginger.type}
                    <Badge variant="outline">{ginger.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {ginger.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {ginger.markets}</span>
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

export default GingerExport;