import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Package, Clock, CheckCircle, FileText, Shield, Users } from "lucide-react";
import customsImage from "@/assets/global-export-shipping.jpg";

const CustomsClearance = () => {
  const clearanceSteps = [
    { step: "Documentation Review", time: "1-2 Hours", description: "Verify all required documents" },
    { step: "Duty Assessment", time: "2-4 Hours", description: "Calculate applicable duties and taxes" },
    { step: "Physical Inspection", time: "4-8 Hours", description: "Customs examination if required" },
    { step: "Final Clearance", time: "1-2 Hours", description: "Release cargo for delivery" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Package className="w-4 h-4 mr-2" />
                Customs Clearance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fast Customs Clearance
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expedite your import and export shipments with our expert customs clearance services. Minimize delays and ensure compliance with all regulations.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Clearance Support</Link>
              </Button>
            </div>
            <div>
              <img 
                src={customsImage} 
                alt="Customs Clearance - Fast and efficient cargo processing"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Clearance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clearanceSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.step}</CardTitle>
                  <Badge variant="outline">{step.time}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
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

export default CustomsClearance;