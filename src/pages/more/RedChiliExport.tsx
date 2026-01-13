import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Flower, Flame, Globe, Award } from "lucide-react";
import chiliImage from "@/assets/spices-export-facility.jpg";

const RedChiliExport = () => {
  const chiliGrades = [
    { grade: "Teja S17", shu: "40,000-50,000", origin: "Andhra Pradesh", markets: "Bangladesh, Sri Lanka, Malaysia" },
    { grade: "Sannam S4", shu: "35,000-40,000", origin: "Andhra Pradesh", markets: "USA, Europe, Middle East" },
    { grade: "Bydagi Kashmir", shu: "15,000-25,000", origin: "Karnataka", markets: "Europe, Australia, Canada" },
    { grade: "Red Chili Powder", shu: "Various", origin: "Various", markets: "Global Markets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Flame className="w-4 h-4 mr-2" />
                Red Chili Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fiery Red Chili Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian red chilies with high capsaicin content. Authentic heat and flavor for international spice markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Red Chili</Link>
              </Button>
            </div>
            <div>
              <img 
                src={chiliImage} 
                alt="Red Chili Export - Premium Indian red chilies for global spice trade"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Red Chili Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chiliGrades.map((chili, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {chili.grade}
                    <Badge variant="outline">{chili.shu} SHU</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {chili.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {chili.markets}</span>
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

export default RedChiliExport;