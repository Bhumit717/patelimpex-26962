import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, Star, TrendingUp, Users, Building, Award } from "lucide-react";
import americaImage from "@/assets/global-export-shipping.jpg";

const AmericanMarkets = () => {
  const americanMarkets = [
    { country: "United States", market: "$26.9T", specialty: "Technology & Services", imports: "Textiles, Spices, Rice" },
    { country: "Canada", market: "$2.1T", specialty: "Natural Resources", imports: "Agricultural Products" },
    { country: "Mexico", market: "$1.7T", specialty: "Manufacturing", imports: "Spices, Textiles" },
    { country: "Brazil", market: "$2.6T", specialty: "Agriculture & Mining", imports: "Pharmaceutical Products" },
    { country: "Argentina", market: "$630B", specialty: "Agriculture", imports: "Chemical Products" },
    { country: "Chile", market: "$317B", specialty: "Mining & Agriculture", imports: "Textiles, Machinery" }
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
                American Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Americas Export Markets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Penetrate high-value American markets from North to South America. Access developed economies with strong purchasing power and diverse import needs.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Access American Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={americaImage} 
                alt="Americas Export Markets - High-value trade opportunities"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key American Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {americanMarkets.map((market, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {market.country}
                    <Badge variant="outline">{market.market}</Badge>
                  </CardTitle>
                  <CardDescription>{market.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"><strong>Key Imports:</strong> {market.imports}</p>
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

export default AmericanMarkets;