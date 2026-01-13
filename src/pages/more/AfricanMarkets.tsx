import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, Users, Award, Target, Building } from "lucide-react";
import africaImage from "@/assets/global-export-shipping.jpg";

const AfricanMarkets = () => {
  const africanCountries = [
    { country: "Nigeria", market: "$432B", specialty: "Oil & Agriculture", demand: "Rice, Spices, Textiles" },
    { country: "South Africa", market: "$419B", specialty: "Mining & Manufacturing", demand: "Agricultural Products" },
    { country: "Kenya", market: "$109B", specialty: "Agriculture & Services", demand: "Rice, Pulses, Spices" },
    { country: "Ghana", market: "$75B", specialty: "Cocoa & Gold", demand: "Food Products, Textiles" },
    { country: "Tanzania", market: "$64B", specialty: "Agriculture & Tourism", demand: "Rice, Sugar, Spices" },
    { country: "Ethiopia", market: "$96B", specialty: "Coffee & Agriculture", demand: "Spices, Textiles" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Globe className="w-4 h-4 mr-2" />
                African Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                African Markets Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore rapidly growing African markets with high demand for Indian products. Tap into emerging economies with strong trade relationships.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Enter African Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={africaImage} 
                alt="African Markets Export - Emerging economy opportunities"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key African Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {africanCountries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {country.country}
                    <Badge variant="outline">{country.market}</Badge>
                  </CardTitle>
                  <CardDescription>{country.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"><strong>High Demand:</strong> {country.demand}</p>
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

export default AfricanMarkets;