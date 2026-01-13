import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";
import marketImage from "@/assets/international-trade-fair.jpg";

const SouthernAfricanMarkets = () => {
  const saCountries = [
    { country: "South Africa", market: "$420 Billion", specialty: "Mining & Services", imports: "Rice, spices, pulses" },
    { country: "Botswana", market: "$18 Billion", specialty: "Diamonds & Beef", imports: "Rice, agricultural products" },
    { country: "Namibia", market: "$12 Billion", specialty: "Mining & Tourism", imports: "Rice, spices, food products" },
    { country: "Zimbabwe", market: "$25 Billion", specialty: "Agriculture & Mining", imports: "Rice, spices, pulses" }
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
                Southern African Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Southern African Trade Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore Southern African markets with strong mining sectors and growing demand for food imports and agricultural products.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Explore SA Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketImage} 
                alt="Southern African Export Markets - Trade opportunities in Southern Africa"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Southern African Markets</h2>
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

export default SouthernAfricanMarkets;