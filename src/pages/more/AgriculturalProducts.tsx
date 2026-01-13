import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Leaf, Globe, Award, Sun, Droplets } from "lucide-react";
import agricultureImage from "@/assets/agricultural-export-processing.jpg";

const AgriculturalProducts = () => {
  const products = [
    { category: "Cereals", items: ["Rice", "Wheat", "Maize", "Barley"], icon: Wheat },
    { category: "Pulses", items: ["Chickpeas", "Lentils", "Kidney Beans", "Black Gram"], icon: Leaf },
    { category: "Spices", items: ["Turmeric", "Coriander", "Cumin", "Cardamom"], icon: Sun },
    { category: "Fresh Produce", items: ["Onions", "Potatoes", "Mangoes", "Grapes"], icon: Droplets }
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
                Farm to Global
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Agricultural Products Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium agricultural products from India's fertile lands. From organic cereals to fresh produce, we connect farms to global markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Agricultural Products</Link>
              </Button>
            </div>
            <div>
              <img 
                src={agricultureImage} 
                alt="Agricultural Export Processing - Farm fresh products for global markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <category.icon className="w-6 h-6 mr-3 text-green-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
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

export default AgriculturalProducts;