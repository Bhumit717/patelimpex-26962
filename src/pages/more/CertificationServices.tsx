import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, CheckCircle, Globe, Shield, FileText, Users } from "lucide-react";
import certificationImage from "@/assets/quality-control-lab.jpg";

const CertificationServices = () => {
  const certifications = [
    { cert: "ISO 9001:2015", scope: "Quality Management System", validity: "3 years" },
    { cert: "HACCP", scope: "Food Safety Management", validity: "1 year" },
    { cert: "Organic Certification", scope: "Organic products compliance", validity: "1 year" },
    { cert: "Halal Certification", scope: "Islamic dietary compliance", validity: "1 year" },
    { cert: "Fair Trade", scope: "Ethical trade practices", validity: "3 years" },
    { cert: "GMP Certification", scope: "Good Manufacturing Practice", validity: "2 years" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Award className="w-4 h-4 mr-2" />
                Certification Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Certification Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Obtain essential certifications for international market access. Ensure compliance with global standards and enhance product credibility.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Certified Now</Link>
              </Button>
            </div>
            <div>
              <img 
                src={certificationImage} 
                alt="Export Certification Services - Quality assurance and compliance"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Available Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{certification.cert}</CardTitle>
                  <Badge variant="outline">{certification.validity}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{certification.scope}</p>
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

export default CertificationServices;