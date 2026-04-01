import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, Award, Globe, TrendingUp } from "lucide-react";
import fullBodyImg from "@/assets/products/marble-tiles-white.png";
import SEOHead from "@/components/SEOHead";

const FullBodyVitrifiedTilesExport = () => {
  const features = [
    { title: "Uniform Color", description: "Color and design go all the way through the tile.", icon: Shield },
    { title: "Industrial Strength", description: "Best suited for industrial and heavy-duty use.", icon: Award },
    { title: "High Longevity", description: "Lasts a lifetime even in harsh conditions.", icon: Globe },
    { title: "Low Maintenance", description: "Easy to clean and highly resistant to acids and chemicals.", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Full Body Vitrified Tiles Export | Indian Tile Sourcing | Patel Impex" 
        description="Premium full body vitrified tiles export from India. Expert sourcing and global logistics for industrial and commercial architectural projects." 
        canonicalUrl="/more/full-body-tiles-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Industrial Ceramics
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Full Body Vitrified Tiles Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The pinnacle of durability in decorative ceramics. Full body tiles maintain their uniform color and appearance throughout the entire material, making chips nearly invisible.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Industrial Supply Inquiry</Link>
              </Button>
            </div>
            <div>
              <img 
                src={fullBodyImg} 
                alt="Full body vitrified tile for industrial use"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Metrics</h2>
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

export default FullBodyVitrifiedTilesExport;
