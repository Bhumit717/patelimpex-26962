import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Package, Globe, TrendingUp } from "lucide-react";
import barleyImage from "@/assets/agricultural-export-processing.jpg";

const BarleyExport = () => {
  const barleyTypes = [
    { type: "Malting Barley", grade: "Premium 2-Row", protein: "9-11%", markets: "Europe, Australia, Canada" },
    { type: "Feed Barley", grade: "6-Row", protein: "11-13%", markets: "Middle East, North Africa" },
    { type: "Hulless Barley", grade: "Food Grade", protein: "12-15%", markets: "Japan, South Korea" },
    { type: "Pearl Barley", grade: "Processed", protein: "8-10%", markets: "USA, Europe, Asia" }
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
                Barley Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Barley Export Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export high-quality Indian barley for malting, feed, and food applications. Premium grades for brewing and livestock industries.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Barley</Link>
              </Button>
            </div>
            <div>
              <img 
                src={barleyImage} 
                alt="Barley Export - Premium Indian barley for malting and feed industry"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Barley Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {barleyTypes.map((barley, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {barley.type}
                    <Badge variant="outline">{barley.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span className="text-sm">Protein: {barley.protein}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {barley.markets}</span>
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

export default BarleyExport;