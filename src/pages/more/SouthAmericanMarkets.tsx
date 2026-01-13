import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";
import marketImage from "@/assets/international-trade-fair.jpg";

const SouthAmericanMarkets = () => {
  const saCountries = [
    { country: "Brazil", market: "$2.6 Trillion", specialty: "Agriculture & Mining", imports: "Spices, rice, textile products" },
    { country: "Argentina", market: "$630 Billion", specialty: "Beef & Grains", imports: "Rice, pulses, organic products" },
    { country: "Chile", market: "$510 Billion", specialty: "Mining & Wine", imports: "Spices, agricultural products" },
    { country: "Colombia", market: "$410 Billion", specialty: "Coffee & Oil", imports: "Rice, spices, textiles" }
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
                South American Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                South American Export Opportunities
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expand into dynamic South American markets with our expert guidance. Connect with growing economies across the continent.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Explore SA Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketImage} 
                alt="South American Export Markets - Trade opportunities across South America"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key South American Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saCountries.map((country, index) => (
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

export default SouthAmericanMarkets;