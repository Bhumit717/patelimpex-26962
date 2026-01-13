import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Award, Globe, Heart } from "lucide-react";
import turmericImage from "@/assets/spices-export-facility.jpg";

const TurmericExport = () => {
  const turmericGrades = [
    { grade: "Alleppey Finger", curcumin: "6.5-7.5%", origin: "Kerala", markets: "USA, Europe, Middle East" },
    { grade: "Madras Finger", curcumin: "4.5-5.5%", origin: "Tamil Nadu", markets: "Bangladesh, Sri Lanka, Nepal" },
    { grade: "Salem Finger", curcumin: "3-4%", origin: "Tamil Nadu", markets: "Malaysia, Singapore, Thailand" },
    { grade: "Turmeric Powder", curcumin: "5-7%", origin: "Various", markets: "Global Markets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Flower className="w-4 h-4 mr-2" />
                Turmeric Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Golden Turmeric Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian turmeric with high curcumin content. Golden spice with medicinal properties for global wellness markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Turmeric</Link>
              </Button>
            </div>
            <div>
              <img 
                src={turmericImage} 
                alt="Turmeric Export - Premium Indian golden spice with high curcumin content"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Turmeric Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {turmericGrades.map((turmeric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {turmeric.grade}
                    <Badge variant="outline">{turmeric.curcumin}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {turmeric.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {turmeric.markets}</span>
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

export default TurmericExport;