import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, FileText, Globe, TrendingUp, Users, Award } from "lucide-react";
import insuranceImage from "@/assets/global-export-shipping.jpg";

const InsuranceServices = () => {
  const coverageTypes = [
    { type: "Marine Cargo Insurance", coverage: "Transit risks and damages", premium: "0.1-0.5%" },
    { type: "Credit Insurance", coverage: "Buyer default protection", premium: "0.2-2%" },
    { type: "Political Risk Insurance", coverage: "Government intervention risks", premium: "0.5-3%" },
    { type: "Product Liability", coverage: "Product defect claims", premium: "0.1-1%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Export Insurance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Insurance Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your international trade with comprehensive insurance coverage. Minimize risks and secure your export business investments.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Insurance Quote</Link>
              </Button>
            </div>
            <div>
              <img 
                src={insuranceImage} 
                alt="Export Insurance Services - Comprehensive trade protection"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Insurance Coverage Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageTypes.map((coverage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {coverage.type}
                    <Badge variant="outline">{coverage.premium}</Badge>
                  </CardTitle>
                  <CardDescription>{coverage.coverage}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">Industry standard rates</span>
                  </div>
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

export default InsuranceServices;