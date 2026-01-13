import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";
import marketImage from "@/assets/international-trade-fair.jpg";

const MediterraneanMarkets = () => {
  const medCountries = [
    { country: "Italy", market: "$2.4 Trillion", specialty: "Manufacturing & Tourism", imports: "Basmati rice, spices, organic products" },
    { country: "Spain", market: "$1.8 Trillion", specialty: "Tourism & Agriculture", imports: "Rice, spices, specialty foods" },
    { country: "Greece", market: "$220 Billion", specialty: "Shipping & Tourism", imports: "Rice, spices, ethnic foods" },
    { country: "Turkey", market: "$850 Billion", specialty: "Textiles & Manufacturing", imports: "Rice, spices, pulses" },
    { country: "Israel", market: "$520 Billion", specialty: "Technology & Agriculture", imports: "Rice, spices, organic products" },
    { country: "Cyprus", market: "$28 Billion", specialty: "Services & Tourism", imports: "Rice, spices, food products" }
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
                Mediterranean Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mediterranean Export Gateway
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with Mediterranean markets known for culinary excellence and appreciation for quality food imports.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Explore Mediterranean Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketImage} 
                alt="Mediterranean Export Markets - Trade opportunities in Mediterranean region"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Mediterranean Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medCountries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{country.country}</CardTitle>
                  <Badge variant="outline">{country.market}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{country.specialty}</p>
                  <p className="text-xs text-muted-foreground">{country.imports}</p>
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

export default MediterraneanMarkets;