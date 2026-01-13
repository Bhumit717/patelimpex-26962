import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Award, Users, CheckCircle, Globe, TrendingUp } from "lucide-react";
import trainingImage from "@/assets/export-consultation.jpg";

const ComplianceTraining = () => {
  const trainingModules = [
    { module: "Export Documentation", duration: "8 hours", certification: "FIDR Certified" },
    { module: "Customs Regulations", duration: "12 hours", certification: "Customs Compliance" },
    { module: "Trade Finance", duration: "16 hours", certification: "Trade Finance Expert" },
    { module: "Quality Standards", duration: "10 hours", certification: "QA Specialist" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Compliance Training
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Compliance Training
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master international trade regulations with comprehensive compliance training programs. Build expertise in export procedures and documentation.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Enroll in Training</Link>
              </Button>
            </div>
            <div>
              <img 
                src={trainingImage} 
                alt="Export Compliance Training - Professional development programs"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingModules.map((training, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {training.module}
                    <Badge variant="outline">{training.duration}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">{training.certification}</span>
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

export default ComplianceTraining;