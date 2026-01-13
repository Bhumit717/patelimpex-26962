import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";
import marketImage from "@/assets/international-trade-fair.jpg";

const NorthAmericanMarkets = () => {
  const naCountries = [
    { country: "United States", market: "$21.4 Trillion", specialty: "Technology & Services", imports: "Agricultural products, spices, textiles" },
    { country: "Canada", market: "$2.1 Trillion", specialty: "Natural Resources", imports: "Rice, pulses, organic products" },
    { country: "Mexico", market: "$1.7 Trillion", specialty: "Manufacturing", imports: "Spices, agricultural commodities" }
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
                North American Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                North American Export Opportunities
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Unlock the potential of North American markets with our specialized export services. Access lucrative opportunities in the US, Canada, and Mexico.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Explore NA Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketImage} 
                alt="North American Export Markets - Trade opportunities in US, Canada, Mexico"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key North American Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {naCountries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {country.country}
                    <Badge variant="outline">{country.market}</Badge>
                  </CardTitle>
                  <CardDescription>{country.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{country.imports}</p>
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

export default NorthAmericanMarkets;