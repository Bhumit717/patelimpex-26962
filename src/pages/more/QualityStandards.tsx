import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, Shield, CheckCircle, Globe, Star, Target } from "lucide-react";
import qualityImage from "@/assets/quality-control-lab.jpg";

const QualityStandards = () => {
  const certifications = [
    { cert: "ISO 9001", desc: "Quality Management System", scope: "Global Standard" },
    { cert: "ISO 22000", desc: "Food Safety Management", scope: "Food Products" },
    { cert: "HACCP", desc: "Hazard Analysis Critical Control", scope: "Food Safety" },
    { cert: "FSSAI", desc: "Food Safety Standards Authority", scope: "India Food" },
    { cert: "BRC", desc: "British Retail Consortium", scope: "UK/EU Markets" },
    { cert: "Organic", desc: "Organic Product Certification", scope: "Organic Products" }
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
                Quality Assurance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Standards & Certifications
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Meet international quality standards with our comprehensive certification support. Ensure compliance and build trust with global buyers.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Certified</Link>
              </Button>
            </div>
            <div>
              <img 
                src={qualityImage} 
                alt="Quality Control Laboratory - International standards and testing facility"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">International Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-gold" />
                    {cert.cert}
                  </CardTitle>
                  <CardDescription>{cert.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">{cert.scope}</Badge>
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

export default QualityStandards;