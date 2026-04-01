import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Droplet, Award, Globe, Sparkles } from "lucide-react";
import basinImg from "@/assets/products/bathroom-sinks-modern.png";
import SEOHead from "@/components/SEOHead";

const DesignerWashBasinsExport = () => {
  const features = [
    { title: "Artistic Variety", description: "Table-top, under-counter, and wall-hung designer basins.", icon: Droplet },
    { title: "Glassy Glaze", description: "Uniform and super-smooth finish for modern aesthetics.", icon: Award },
    { title: "International Style", description: "Trends sourced from European and West-Asian markets.", icon: Globe },
    { title: "Easy Install", description: "Standard sizing for global plumbing compatibility.", icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Designer Wash Basins Export | Luxury Ceramic Sinks | Patel Impex" 
        description="Premium designer wash basins exported globally from India. Discover artistic tabletop and wall-hung basins for luxury bathroom designs." 
        canonicalUrl="/more/designer-wash-basins-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Droplet className="w-4 h-4 mr-2" />
                Luxury Sinks
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Designer Wash Basins Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Elevate bathroom aesthetics with our designer wash basin collection. We export a range of table-top basins that combine the elegance of Indian ceramic artistry with modern functional requirements.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Designer Collection</Link>
              </Button>
            </div>
            <div>
              <img 
                src={basinImg} 
                alt="Designer ceramic tabletop wash basins for luxury import"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Design Precision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-green-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
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

export default DesignerWashBasinsExport;
