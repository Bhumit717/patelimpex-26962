import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Award, Globe, Crown } from "lucide-react";
import cardamomImage from "@/assets/spices-export-facility.jpg";

const CardamomExport = () => {
  const cardamomGrades = [
    { grade: "Alleppey Green Extra Bold", size: "8mm+", origin: "Kerala", markets: "Middle East, Europe, USA" },
    { grade: "Alleppey Green Bold", size: "7-8mm", origin: "Kerala", markets: "Saudi Arabia, UAE, Kuwait" },
    { grade: "Alleppey Green Superior", size: "6-7mm", origin: "Kerala", markets: "Qatar, Bahrain, Oman" },
    { grade: "Guatemala Cardamom", size: "6-8mm", origin: "Import-Export", markets: "Global Markets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Crown className="w-4 h-4 mr-2" />
                Cardamom Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Queen of Spices - Cardamom Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian cardamom, the queen of spices. High-quality green cardamom pods for international gourmet markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Cardamom</Link>
              </Button>
            </div>
            <div>
              <img 
                src={cardamomImage} 
                alt="Cardamom Export - Premium Indian green cardamom queen of spices"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Cardamom Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardamomGrades.map((cardamom, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {cardamom.grade}
                    <Badge variant="outline">{cardamom.size}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {cardamom.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {cardamom.markets}</span>
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

export default CardamomExport;