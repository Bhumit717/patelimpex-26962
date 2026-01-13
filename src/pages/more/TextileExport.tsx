import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shirt, TrendingUp, Globe, Award, Users, Target } from "lucide-react";
import textileImage from "@/assets/textile-export-warehouse.jpg";

const TextileExport = () => {
  const textileProducts = [
    { category: "Cotton Textiles", demand: "High", markets: "USA, EU, Japan" },
    { category: "Silk Products", demand: "Premium", markets: "Europe, Middle East" },
    { category: "Jute Items", demand: "Growing", markets: "Europe, Australia" },
    { category: "Synthetic Fabrics", demand: "Mass Market", markets: "Global" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Shirt className="w-4 h-4 mr-2" />
                Textile Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Indian Textile Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Leverage India's rich textile heritage and modern manufacturing capabilities. Export premium quality fabrics, garments, and textile products to global markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Start Textile Export</Link>
              </Button>
            </div>
            <div>
              <img 
                src={textileImage} 
                alt="Indian Textile Export - Premium quality fabrics and garments"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Textile Export Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {textileProducts.map((product, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{product.category}</CardTitle>
                  <Badge variant={product.demand === "Premium" ? "default" : "secondary"}>
                    {product.demand} Demand
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.markets}</p>
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

export default TextileExport;