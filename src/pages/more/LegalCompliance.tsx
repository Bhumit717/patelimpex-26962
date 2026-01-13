import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Scale, Shield, FileText, CheckCircle, Globe, Award } from "lucide-react";
import legalImage from "@/assets/import-export-documentation.jpg";

const LegalCompliance = () => {
  const complianceAreas = [
    { area: "Export Licenses", description: "IEC, RCMC, and product-specific licenses", importance: "Critical" },
    { area: "Trade Agreements", description: "FTA benefits and preferential access", importance: "High" },
    { area: "Product Standards", description: "Quality certifications and testing", importance: "Essential" },
    { area: "Documentation", description: "Invoice, packing list, and certificates", importance: "Mandatory" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Scale className="w-4 h-4 mr-2" />
                Legal Compliance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Legal Compliance
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ensure full legal compliance for your international trade operations. Navigate complex regulations and maintain regulatory adherence across all markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Compliance Guidance</Link>
              </Button>
            </div>
            <div>
              <img 
                src={legalImage} 
                alt="Export Legal Compliance - Regulatory adherence and documentation"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((compliance, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {compliance.area}
                    <Badge variant={compliance.importance === "Critical" ? "destructive" : "secondary"}>
                      {compliance.importance}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{compliance.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Expert guidance available</span>
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

export default LegalCompliance;