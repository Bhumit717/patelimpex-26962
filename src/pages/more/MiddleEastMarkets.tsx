import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, Star, TrendingUp, Users, Building, Award } from "lucide-react";
import middleEastImage from "@/assets/global-export-shipping.jpg";

const MiddleEastMarkets = () => {
  const meCountries = [
    { country: "UAE", market: "$507B", specialty: "Trade Hub & Tourism", imports: "Rice, Spices, Textiles" },
    { country: "Saudi Arabia", market: "$833B", specialty: "Oil & Petrochemicals", imports: "Food, Agricultural Products" },
    { country: "Qatar", market: "$204B", specialty: "Energy & Construction", imports: "Food Products, Textiles" },
    { country: "Kuwait", market: "$148B", specialty: "Oil & Finance", imports: "Rice, Pulses, Spices" },
    { country: "Oman", market: "$104B", specialty: "Oil & Tourism", imports: "Agricultural Products" },
    { country: "Bahrain", market: "$44B", specialty: "Finance & Tourism", imports: "Food, Spices" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Star className="w-4 h-4 mr-2" />
                Middle East Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Middle East Export Markets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access lucrative Middle Eastern markets with strong demand for Indian products. Leverage historical trade relationships and cultural connections.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Expand to Middle East</Link>
              </Button>
            </div>
            <div>
              <img 
                src={middleEastImage} 
                alt="Middle East Export Markets - Premium trade opportunities"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Middle East Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meCountries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {country.country}
                    <Badge variant="outline">{country.market}</Badge>
                  </CardTitle>
                  <CardDescription>{country.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"><strong>Key Imports:</strong> {country.imports}</p>
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

export default MiddleEastMarkets;