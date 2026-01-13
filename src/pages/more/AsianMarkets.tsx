import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, Users, DollarSign, Target, Building } from "lucide-react";
import asianMarketsImage from "@/assets/global-export-shipping.jpg";

const AsianMarkets = () => {
  const majorMarkets = [
    { country: "China", market: "$14.7T", population: "1.4B", opportunity: "Manufacturing & Technology" },
    { country: "Japan", market: "$4.9T", population: "125M", opportunity: "Premium Products & Innovation" },
    { country: "South Korea", market: "$1.8T", population: "52M", opportunity: "Electronics & Automotive" },
    { country: "Singapore", market: "$372B", population: "5.9M", opportunity: "Financial Hub & Trading" },
    { country: "Thailand", market: "$544B", population: "70M", opportunity: "Agriculture & Tourism" },
    { country: "Malaysia", market: "$432B", population: "33M", opportunity: "Palm Oil & Electronics" }
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
                Asian Trade Opportunities
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Asian Markets for Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore lucrative trade opportunities in Asia's dynamic markets. From China's massive consumer base to Japan's premium market, discover how to succeed in Asian trade.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Enter Asian Markets</Link>
              </Button>
            </div>
            <div>
              <img 
                src={asianMarketsImage} 
                alt="Asian Markets Export - Global shipping and trade opportunities in Asia"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Major Asian Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorMarkets.map((market, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {market.country}
                    <Badge variant="outline">{market.market}</Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {market.population} people
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"><strong>Key Opportunity:</strong> {market.opportunity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Asian Markets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Rapid Growth",
                description: "Asia represents the fastest-growing economic region with emerging middle classes"
              },
              {
                icon: DollarSign,
                title: "High Value Markets",
                description: "Premium pricing opportunities in developed Asian economies like Japan and Singapore"
              },
              {
                icon: Building,
                title: "Trade Infrastructure",
                description: "Well-developed ports, logistics networks, and business-friendly policies"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="mb-4">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AsianMarkets;