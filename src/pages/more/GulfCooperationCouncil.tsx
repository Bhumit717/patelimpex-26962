import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";
import marketImage from "@/assets/international-trade-fair.jpg";

const GulfCooperationCouncil = () => {
  const gccCountries = [
    { country: "Saudi Arabia", market: "$830 Billion", specialty: "Oil & Petrochemicals", imports: "Rice, spices, halal products" },
    { country: "UAE", market: "$510 Billion", specialty: "Trade & Tourism", imports: "Basmati rice, spices, textiles" },
    { country: "Qatar", market: "$200 Billion", specialty: "LNG & Finance", imports: "Rice, spices, food products" },
    { country: "Kuwait", market: "$140 Billion", specialty: "Oil & Finance", imports: "Rice, spices, pulses" },
    { country: "Bahrain", market: "$40 Billion", specialty: "Banking & Tourism", imports: "Rice, spices, food products" },
    { country: "Oman", market: "$95 Billion", specialty: "Oil & Tourism", imports: "Rice, spices, textiles" }
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
                GCC Markets
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gulf Cooperation Council Markets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access premium GCC markets with high purchasing power and strong demand for quality food imports and halal products.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Explore GCC Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketImage} 
                alt="GCC Export Markets - Gulf Cooperation Council trade opportunities"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">GCC Member Countries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gccCountries.map((country, index) => (
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

export default GulfCooperationCouncil;