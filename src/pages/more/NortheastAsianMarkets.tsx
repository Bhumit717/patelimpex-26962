import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";
import marketImage from "@/assets/international-trade-fair.jpg";

const NortheastAsianMarkets = () => {
  const neaCountries = [
    { country: "China", market: "$17.7 Trillion", specialty: "Manufacturing & Technology", imports: "Rice, spices, agricultural products" },
    { country: "Japan", market: "$4.2 Trillion", specialty: "Technology & Automotive", imports: "Basmati rice, spices, organic products" },
    { country: "South Korea", market: "$1.8 Trillion", specialty: "Electronics & Shipbuilding", imports: "Rice, spices, sesame seeds" },
    { country: "Taiwan", market: "$790 Billion", specialty: "Semiconductors", imports: "Rice, agricultural products, spices" }
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
                Northeast Asian Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Northeast Asian Export Powerhouse
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access the world's largest economies in Northeast Asia. Premium markets with high demand for quality agricultural products.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Explore NEA Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketImage} 
                alt="Northeast Asian Export Markets - China, Japan, Korea trade opportunities"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Northeast Asian Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neaCountries.map((country, index) => (
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

export default NortheastAsianMarkets;