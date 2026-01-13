import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Package, Globe, TrendingUp } from "lucide-react";
import riceImage from "@/assets/rice-export-warehouse.jpg";

const NonBasmatiRiceExport = () => {
  const nonBasmatiVarieties = [
    { variety: "IR-64 Parboiled", type: "Long Grain", processing: "Parboiled", markets: "Africa, Middle East" },
    { variety: "Sona Masuri", type: "Medium Grain", processing: "Raw", markets: "USA, Europe, Australia" },
    { variety: "PR-11 Steamed", type: "Long Grain", processing: "Steam", markets: "Bangladesh, Sri Lanka" },
    { variety: "Broken Rice", type: "Mixed Grade", processing: "Various", markets: "Animal Feed, Food Processing" }
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
                Non-Basmati Rice Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Non-Basmati Rice Export Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive range of non-basmati rice varieties for diverse global markets. Quality rice at competitive prices.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Non-Basmati Rice</Link>
              </Button>
            </div>
            <div>
              <img 
                src={riceImage} 
                alt="Non-Basmati Rice Export - Quality Indian rice varieties for global trade"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Non-Basmati Rice Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonBasmatiVarieties.map((rice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {rice.variety}
                    <Badge variant="outline">{rice.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span className="text-sm">Processing: {rice.processing}</span>
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

export default NonBasmatiRiceExport;