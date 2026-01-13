import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, Star, Euro, Users, Building, Award } from "lucide-react";
import europeImage from "@/assets/global-export-shipping.jpg";

const EuropeanMarkets = () => {
  const euCountries = [
    { country: "Germany", market: "€3.8T", specialty: "Engineering & Automotive", imports: "Machinery, Food" },
    { country: "United Kingdom", market: "£2.1T", specialty: "Financial Services", imports: "Food, Textiles" },
    { country: "France", market: "€2.6T", specialty: "Luxury Goods", imports: "Agriculture, Spices" },
    { country: "Netherlands", market: "€909B", specialty: "Trade Hub", imports: "Re-export, Agriculture" },
    { country: "Italy", market: "€2.1T", specialty: "Fashion & Food", imports: "Textiles, Rice" },
    { country: "Spain", market: "€1.4T", specialty: "Tourism & Agriculture", imports: "Spices, Textiles" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Euro className="w-4 h-4 mr-2" />
                European Trade
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                European Markets Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access Europe's premium markets with high-value trade opportunities. Navigate EU regulations and tap into sophisticated consumer markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Enter European Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={europeImage} 
                alt="European Markets - Premium export opportunities in Europe"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key European Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {euCountries.map((country, index) => (
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

export default EuropeanMarkets;