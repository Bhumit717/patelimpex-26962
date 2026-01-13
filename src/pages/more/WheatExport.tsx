import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Award, Globe, TrendingUp } from "lucide-react";
import wheatImage from "@/assets/agricultural-export-processing.jpg";

const WheatExport = () => {
  const wheatTypes = [
    { type: "Durum Wheat", protein: "12-14%", grade: "Premium", markets: "Italy, Algeria, Morocco" },
    { type: "Hard Red Winter", protein: "11-13%", grade: "Standard", markets: "Bangladesh, Philippines, Vietnam" },
    { type: "Soft White Wheat", protein: "9-11%", grade: "Feed Grade", markets: "Indonesia, Malaysia, Thailand" },
    { type: "Spring Wheat", protein: "13-15%", grade: "Milling Grade", markets: "Egypt, Turkey, Lebanon" }
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
                Wheat Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Wheat Export Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian wheat varieties to global markets. High protein content wheat for milling and feed applications.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Wheat</Link>
              </Button>
            </div>
            <div>
              <img 
                src={wheatImage} 
                alt="Wheat Export - Premium Indian wheat for global milling industry"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Wheat Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wheatTypes.map((wheat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {wheat.type}
                    <Badge variant="outline">{wheat.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Protein: {wheat.protein}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {wheat.markets}</span>
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

export default WheatExport;