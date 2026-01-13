import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Cpu, Globe, BarChart3, Shield, Zap, Award } from "lucide-react";
import techImage from "@/assets/international-trade-fair.jpg";

const TechnologyIntegration = () => {
  const techSolutions = [
    { solution: "ERP Integration", benefit: "Streamlined operations", features: "Inventory, Finance, CRM" },
    { solution: "Digital Documentation", benefit: "Paperless processes", features: "E-invoicing, Digital certificates" },
    { solution: "Track & Trace", benefit: "Real-time visibility", features: "GPS tracking, Status updates" },
    { solution: "AI Analytics", benefit: "Predictive insights", features: "Market trends, Risk assessment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Cpu className="w-4 h-4 mr-2" />
                Technology Integration
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Technology Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Modernize your export operations with cutting-edge technology integration. Automate processes, improve efficiency, and gain competitive advantages.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Digitize Your Exports</Link>
              </Button>
            </div>
            <div>
              <img 
                src={techImage} 
                alt="Export Technology Solutions - Digital transformation for trade"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techSolutions.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    {tech.solution}
                  </CardTitle>
                  <CardDescription>{tech.benefit}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{tech.features}</Badge>
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

export default TechnologyIntegration;