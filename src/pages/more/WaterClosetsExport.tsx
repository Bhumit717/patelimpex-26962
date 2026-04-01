import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wind, Award, Globe, ShieldCheck, Zap } from "lucide-react";
import closetImg from "@/assets/products/modern-toilets.png";
import SEOHead from "@/components/SEOHead";

const WaterClosetsExport = () => {
  const features = [
    { title: "Water Saving", description: "Efficient dual-flush systems (3/6 liters) for sustainability.", icon: Zap },
    { title: "One-Piece Designs", description: "Seamless construction for easier cleaning and better looks.", icon: Award },
    { title: "Soft Close Seats", description: "High-quality hydraulic seat covers included.", icon: Globe },
    { title: "Export Packaging", description: "Securely boxed and palletized for safe global shipping.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Modern Water Closets Export | High-Efficiency Toilets | Patel Impex" 
        description="Premium one-piece and wall-hung water closets for export. Indian sanitaryware leading in water conservation and design excellence." 
        canonicalUrl="/more/water-closets-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Hygiene Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Water Closets Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Exporting high-quality ceramic water closets to markets worldwide. Our range includes EWC one-piece, wall-hung, and two-piece toilets with advanced flushing technology.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Sanitary Export Inquiry</Link>
              </Button>
            </div>
            <div>
              <img 
                src={closetImg} 
                alt="Modern ceramic water closets for global export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Excellence</h2>
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

export default WaterClosetsExport;
