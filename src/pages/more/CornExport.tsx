import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Package, Globe, TrendingUp } from "lucide-react";
import cornImage from "@/assets/agricultural-export-processing.jpg";

const CornExport = () => {
  const cornTypes = [
    { type: "Yellow Corn", grade: "Feed Grade", moisture: "14% Max", markets: "South Korea, Japan, Vietnam" },
    { type: "White Corn", grade: "Food Grade", moisture: "13% Max", markets: "Mexico, South Africa, Philippines" },
    { type: "Popcorn", grade: "Premium", moisture: "14% Max", markets: "USA, Europe, Middle East" },
    { type: "Sweet Corn", grade: "Fresh Grade", moisture: "70% Natural", markets: "UAE, Singapore, Hong Kong" }
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
                Corn Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Indian Corn Export Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export high-quality Indian corn (maize) for feed, food, and industrial applications. Premium corn varieties for global markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Corn</Link>
              </Button>
            </div>
            <div>
              <img 
                src={cornImage} 
                alt="Corn Export - Quality Indian maize for global feed and food industry"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Corn Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cornTypes.map((corn, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {corn.type}
                    <Badge variant="outline">{corn.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span className="text-sm">Moisture: {corn.moisture}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {corn.markets}</span>
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

export default CornExport;