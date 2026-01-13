import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { TrendingUp, Target, BarChart3, Globe, Users, Award } from "lucide-react";
import researchImage from "@/assets/international-trade-fair.jpg";

const MarketResearch = () => {
  const researchServices = [
    { service: "Market Analysis", scope: "Demand patterns and trends", deliverable: "Market report" },
    { service: "Competitor Study", scope: "Key players and strategies", deliverable: "Competitive landscape" },
    { service: "Price Analysis", scope: "Pricing strategies and benchmarks", deliverable: "Price comparison" },
    { service: "Regulatory Review", scope: "Import requirements and barriers", deliverable: "Compliance guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <BarChart3 className="w-4 h-4 mr-2" />
                Market Research
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Market Research
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Make informed export decisions with comprehensive market research. Identify opportunities, understand competition, and optimize your market entry strategy.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Request Market Study</Link>
              </Button>
            </div>
            <div>
              <img 
                src={researchImage} 
                alt="Export Market Research - Data-driven market insights"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Research Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchServices.map((research, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    {research.service}
                  </CardTitle>
                  <CardDescription>{research.scope}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{research.deliverable}</Badge>
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

export default MarketResearch;