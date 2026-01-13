import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, Package, Globe, Crown } from "lucide-react";
import cashewImage from "@/assets/agricultural-export-processing.jpg";

const CashewExport = () => {
  const cashewGrades = [
    { grade: "W-240", size: "240 pieces/lb", origin: "Kerala", markets: "USA, Europe, Middle East" },
    { grade: "W-320", size: "320 pieces/lb", origin: "Karnataka", markets: "Europe, Australia, Japan" },
    { grade: "W-450", size: "450 pieces/lb", origin: "Goa", markets: "Middle East, Asia" },
    { grade: "Cashew Pieces", size: "LWP/SWP/BB", origin: "Various", markets: "Food Processing Industry" }
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
                Cashew Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Cashew Nut Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian cashew nuts with superior taste and quality. World-class processing for international nut markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Cashews</Link>
              </Button>
            </div>
            <div>
              <img 
                src={cashewImage} 
                alt="Cashew Export - Premium Indian cashew nuts for global markets"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Cashew Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cashewGrades.map((cashew, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {cashew.grade}
                    <Badge variant="outline">{cashew.size}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">Origin: {cashew.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Markets: {cashew.markets}</span>
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

export default CashewExport;