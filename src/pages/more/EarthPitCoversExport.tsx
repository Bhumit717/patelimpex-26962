import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Layout, Award, Globe, ShieldCheck } from "lucide-react";
import pitCoversImg from "@/assets/products/earth-pit-covers.png";
import SEOHead from "@/components/SEOHead";

const EarthPitCoversExport = () => {
  const features = [
    { title: "Polypropylene (PP)", description: "High-grade UV-resistant plastic for standard industrial use.", icon: Layout },
    { title: "Heavy Load", description: "Design withstands pedestrian and light vehicle traffic.", icon: Award },
    { title: "Weatherproof", description: "Locks out debris and moisture while allowing easy access.", icon: Globe },
    { title: "Standard Sizes", description: "Square and circular covers in 10-inch, 12-inch and more.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Earth Pit Covers Export | Terminal Protection | Patel Impex" 
        description="Premium earth pit covers in PP and CI for global export. Durable terminal protection boxes for electrical grounding points." 
        canonicalUrl="/more/earth-pit-covers-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Layout className="w-4 h-4 mr-2" />
                Terminal Protection
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Earth Pit Covers Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ensure easy access and long-term protection for your grounding terminals with our heavy-duty pit covers. We export highly durable PP covers designed for global site conditions.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Bulk Request</Link>
              </Button>
            </div>
            <div>
              <img 
                src={pitCoversImg} 
                alt="Durable earth pit covers for terminal protection export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Cover Specifications</h2>
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

export default EarthPitCoversExport;
