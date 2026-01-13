import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, Target, TrendingUp, Users, Search, Award } from "lucide-react";
import marketingImage from "@/assets/international-trade-fair.jpg";

const DigitalMarketing = () => {
  const marketingServices = [
    { service: "B2B Marketplaces", reach: "Global buyer network", platforms: "Alibaba, Amazon Business" },
    { service: "SEO Optimization", reach: "Search engine visibility", platforms: "Google, Bing" },
    { service: "Social Media", reach: "Professional networks", platforms: "LinkedIn, Industry forums" },
    { service: "Trade Portals", reach: "Industry-specific buyers", platforms: "IndiaMART, TradeKey" }
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
                Digital Marketing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Digital Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expand your global reach with targeted digital marketing strategies. Connect with international buyers through optimized online presence.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Boost Online Presence</Link>
              </Button>
            </div>
            <div>
              <img 
                src={marketingImage} 
                alt="Export Digital Marketing - Global online presence"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    {service.service}
                  </CardTitle>
                  <CardDescription>{service.reach}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{service.platforms}</Badge>
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

export default DigitalMarketing;