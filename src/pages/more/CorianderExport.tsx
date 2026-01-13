import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Package, Globe, Award } from "lucide-react";
import corianderImage from "@/assets/spices-export-facility.jpg";

const CorianderExport = () => {
  const corianderGrades = [
    { grade: "Eagle Quality", size: "2-4mm", origin: "Gujarat", markets: "Europe, USA, Australia" },
    { grade: "Scooter Quality", size: "3-5mm", origin: "Rajasthan", markets: "Middle East, Africa" },
    { grade: "Single Parrot", size: "2-3mm", origin: "Madhya Pradesh", markets: "Bangladesh, Sri Lanka" },
    { grade: "Split Coriander", size: "Split", origin: "Various", markets: "Global Markets" }
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
                Coriander Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Coriander Seed Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian coriander seeds with excellent oil content and aroma. Essential spice for global food processing industry.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Coriander</Link>
              </Button>
            </div>
            <div>
              <img 
                src={corianderImage} 
                alt="Coriander Export - Premium Indian coriander seeds for international spice trade"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Coriander Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corianderGrades.map((coriander, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {coriander.grade}
                    <Badge variant="outline">{coriander.size}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {coriander.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {coriander.markets}</span>
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

export default CorianderExport;