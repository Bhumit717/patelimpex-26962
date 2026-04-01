import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Paperclip, Award, Globe, ShieldCheck } from "lucide-react";
import earthingClampsImg from "@/assets/products/earthing-c-clamps.png";
import SEOHead from "@/components/SEOHead";

const EarthingClampsExport = () => {
  const features = [
    { title: "Brass & Copper", description: "High conductivity material options for all environments.", icon: Paperclip },
    { title: "Secure Connections", description: "C-Clamps, U-Bolts, and tape connectors for grounding grids.", icon: Award },
    { title: "Versatile Sizes", description: "Compatible with standard global rod and cable diameters.", icon: Globe },
    { title: "Corrosion Proof", description: "Designed to maintain connection integrity for decades.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Earthing Clamps & Connectors Export | Grounding Hardware | Patel Impex" 
        description="Premium earthing clamps, U-bolts, and connectors for export. Essential hardware for secure electrical grounding systems globally." 
        canonicalUrl="/more/earthing-clamps-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Paperclip className="w-4 h-4 mr-2" />
                Grounding Hardware
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Earthing Clamps Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A grounding system is only as good as its connections. We export high-quality brass and copper clamps designed for maximum surface contact and lifetime reliability.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Hardware Catalog</Link>
              </Button>
            </div>
            <div>
              <img 
                src={earthingClampsImg} 
                alt="Industrial earthing clamps and connectors for global export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Hardware Precision</h2>
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

export default EarthingClampsExport;
