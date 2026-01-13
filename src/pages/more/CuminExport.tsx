import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Package, Globe, Award } from "lucide-react";
import cuminImage from "@/assets/spices-export-facility.jpg";

const CuminExport = () => {
  const cuminGrades = [
    { grade: "99% Sortex Quality", origin: "Gujarat", purity: "99.5%", markets: "USA, Europe, Middle East" },
    { grade: "98% Machine Clean", origin: "Rajasthan", purity: "98%", markets: "Bangladesh, Sri Lanka, Nepal" },
    { grade: "95% FAQ", origin: "Gujarat", purity: "95%", markets: "Malaysia, Singapore, Indonesia" },
    { grade: "Cumin Powder", origin: "Various", purity: "98%", markets: "Global Markets" }
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
                Cumin Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Cumin Seed Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export high-quality Indian cumin seeds with superior aroma and flavor. Premium spice for international culinary markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Cumin</Link>
              </Button>
            </div>
            <div>
              <img 
                src={cuminImage} 
                alt="Cumin Export - Premium Indian cumin seeds for global spice markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Cumin Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cuminGrades.map((cumin, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {cumin.grade}
                    <Badge variant="outline">{cumin.purity}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {cumin.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {cumin.markets}</span>
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

export default CuminExport;