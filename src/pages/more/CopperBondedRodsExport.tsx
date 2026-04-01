import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, Target, Globe, ShieldCheck } from "lucide-react";
import copperRodsImg from "@/assets/products/copper-bonded-earthing-rods.png";
import SEOHead from "@/components/SEOHead";

const CopperBondedRodsExport = () => {
  const features = [
    { title: "250 Micron Coating", description: "Uniform high-purity copper coating for long life and conduction.", icon: Zap },
    { title: "Threaded Ends", description: "Easy to couple multiple rods for deep grounding requirements.", icon: Target },
    { title: "International Sizes", description: "Available in 5/8 inch, 3/4 inch and custom global sizes.", icon: Globe },
    { title: "Tensile Strength", description: "Steel core allows driving into hard soil without bending.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Copper Bonded Earthing Rods Export | Grounding Rods | Patel Impex" 
        description="Premium copper bonded steel earthing rods exported from India. UL-certified quality grounding rods for global electrical infrastructure." 
        canonicalUrl="/more/copper-bonded-rods-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Grounding Infrastructure
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Copper Bonded Earthing Rods Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our copper bonded rods are the gold standard for reliable grounding. Featuring a high-tensile steel core for physical strength and thick molecularly bonded copper for electrical performance.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Bulk Inquiry</Link>
              </Button>
            </div>
            <div>
              <img 
                src={copperRodsImg} 
                alt="Copper bonded steel earthing rods for export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Global Quality</h2>
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

export default CopperBondedRodsExport;
