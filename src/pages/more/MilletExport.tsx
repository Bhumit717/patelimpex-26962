import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Award, Globe, Heart } from "lucide-react";
import milletImage from "@/assets/agricultural-export-processing.jpg";

const MilletExport = () => {
  const milletTypes = [
    { type: "Pearl Millet", benefits: "High Protein", grade: "Organic", markets: "USA, Europe, Australia" },
    { type: "Finger Millet", benefits: "Rich in Calcium", grade: "Premium", markets: "Japan, Singapore, Canada" },
    { type: "Foxtail Millet", benefits: "Gluten-Free", grade: "Standard", markets: "Germany, UK, Netherlands" },
    { type: "Proso Millet", benefits: "High Fiber", grade: "Food Grade", markets: "China, South Korea, Taiwan" }
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
                Millet Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Superfood Millet Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export nutritious Indian millets to health-conscious global markets. Gluten-free supergrains with exceptional nutritional benefits.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Millets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={milletImage} 
                alt="Millet Export - Nutritious Indian supergrains for healthy living"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Millet Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milletTypes.map((millet, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {millet.type}
                    <Badge variant="outline">{millet.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <span className="text-sm">Benefits: {millet.benefits}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {millet.markets}</span>
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

export default MilletExport;