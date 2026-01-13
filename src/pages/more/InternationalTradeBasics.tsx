import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, Handshake, Target, Shield, Users, ArrowRight } from "lucide-react";
import tradeBasicsImage from "@/assets/international-trade-fair.jpg";

const InternationalTradeBasics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Trade Fundamentals
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                International Trade Basics
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master the fundamentals of global commerce, international trade theories, and cross-border business practices that drive the world economy.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Start Trading Globally</Link>
              </Button>
            </div>
            <div>
              <img 
                src={tradeBasicsImage} 
                alt="International Trade Fair - Global commerce and business networking"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Core International Trade Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Comparative Advantage",
                description: "Understanding how countries benefit from specializing in goods they can produce most efficiently"
              },
              {
                icon: Handshake,
                title: "Trade Agreements",
                description: "Bilateral and multilateral agreements that reduce barriers and facilitate international commerce"
              },
              {
                icon: Target,
                title: "Market Entry Strategies",
                description: "Different approaches to entering foreign markets including direct export, licensing, and joint ventures"
              }
            ].map((concept, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <concept.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>{concept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{concept.description}</p>
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

export default InternationalTradeBasics;