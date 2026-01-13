import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Award, Globe, Zap } from "lucide-react";
import pepperImage from "@/assets/spices-export-facility.jpg";

const BlackPepperExport = () => {
  const pepperGrades = [
    { grade: "Malabar Garbled", piperine: "6-7%", origin: "Kerala", markets: "USA, Europe, Middle East" },
    { grade: "Tellicherry Extra Bold", piperine: "6.5-7.5%", origin: "Kerala", markets: "Germany, UK, France" },
    { grade: "Black Pepper Powder", piperine: "5-6%", origin: "Kerala", markets: "Global Markets" },
    { grade: "Cracked Black Pepper", piperine: "6%", origin: "Karnataka", markets: "Food Processing Industry" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Black Pepper Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                King of Spices - Black Pepper Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian black pepper, the king of spices. High piperine content pepper for international culinary excellence.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Black Pepper</Link>
              </Button>
            </div>
            <div>
              <img 
                src={pepperImage} 
                alt="Black Pepper Export - Premium Indian black pepper king of spices"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Black Pepper Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pepperGrades.map((pepper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {pepper.grade}
                    <Badge variant="outline">{pepper.piperine}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {pepper.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {pepper.markets}</span>
                    </div>
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

export default BlackPepperExport;