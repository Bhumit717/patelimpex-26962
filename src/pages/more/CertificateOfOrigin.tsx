import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, Globe, Shield, Award, Users } from "lucide-react";
import certificateImage from "@/assets/import-export-documentation.jpg";

const CertificateOfOrigin = () => {
  const certificateTypes = [
    { type: "Non-Preferential CO", purpose: "General trade documentation", countries: "Worldwide" },
    { type: "Preferential CO", purpose: "Reduced tariffs under trade agreements", countries: "FTA Partners" },
    { type: "GSP Certificate", purpose: "Developing country benefits", countries: "GSP Beneficiaries" },
    { type: "EUR1 Movement", purpose: "EU preferential trade", countries: "EU Member States" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Certificate of Origin
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Certificate of Origin Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert assistance in obtaining certificates of origin for your exports. Ensure compliance with international trade regulations and access preferential tariff benefits.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Certificate Assistance</Link>
              </Button>
            </div>
            <div>
              <img 
                src={certificateImage} 
                alt="Certificate of Origin - Export documentation services"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Certificate Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificateTypes.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    {cert.type}
                  </CardTitle>
                  <CardDescription>{cert.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"><strong>Applicable to:</strong> {cert.countries}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Why Certificate of Origin Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tariff Benefits</h3>
              <p className="text-muted-foreground">Access reduced tariffs under trade agreements</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance</h3>
              <p className="text-muted-foreground">Meet importing country requirements</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Access</h3>
              <p className="text-muted-foreground">Facilitate smooth customs clearance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificateOfOrigin;