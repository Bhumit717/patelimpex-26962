import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";
import marketImage from "@/assets/international-trade-fair.jpg";

const SoutheastAsianMarkets = () => {
  const seaCountries = [
    { country: "Indonesia", market: "$1.4 Trillion", specialty: "Palm Oil & Mining", imports: "Rice, spices, pulses" },
    { country: "Thailand", market: "$540 Billion", specialty: "Automotive & Electronics", imports: "Rice, agricultural products" },
    { country: "Singapore", market: "$400 Billion", specialty: "Financial Services", imports: "Spices, specialty foods" },
    { country: "Malaysia", market: "$430 Billion", specialty: "Electronics & Palm Oil", imports: "Rice, spices, textiles" },
    { country: "Philippines", market: "$390 Billion", specialty: "Electronics & Services", imports: "Rice, spices, pulses" },
    { country: "Vietnam", market: "$410 Billion", specialty: "Manufacturing", imports: "Rice, agricultural products" }
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
                Southeast Asian Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Southeast Asian Export Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with dynamic Southeast Asian economies. Access ASEAN markets with strong growth potential and diverse opportunities.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Explore SEA Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketImage} 
                alt="Southeast Asian Export Markets - ASEAN trade opportunities"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Southeast Asian Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seaCountries.map((country, index) => (
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

export default SoutheastAsianMarkets;