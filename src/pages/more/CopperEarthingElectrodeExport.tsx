import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, Award, Globe, ShieldCheck } from "lucide-react";
import copperElectrodeImg from "@/assets/products/chemical-earthing-electrode.png";
import SEOHead from "@/components/SEOHead";

const CopperEarthingElectrodeExport = () => {
  const features = [
    { title: "High Conductivity", description: "Pure electrolytic copper bonding for superior surge diversion.", icon: Zap },
    { title: "Maintenance Free", description: "Long-term grounding solution without periodic water addition.", icon: Award },
    { title: "Safe for Equipment", description: "Ideal for protecting sensitive electronic and medical equipment.", icon: ShieldCheck },
    { title: "Global Export", description: "Used in renewable energy and telecom projects globally.", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Copper Earthing Electrode Export | Chemical Grounding | Patel Impex" 
        description="Premium copper bonded chemical earthing electrodes for global export. High-conductivity grounding solutions for sensitive electrical protection." 
        canonicalUrl="/more/copper-earthing-electrode-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Sensitive Protection
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Copper Earthing Electrode Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                For applications requiring high-precision grounding, our Copper bonded chemical electrodes offer the best conductivity. These are widely used in data centers, hospitals, and telecom towers.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Request Export Catalog</Link>
              </Button>
            </div>
            <div>
              <img 
                src={copperElectrodeImg} 
                alt="Copper bonded chemical earthing electrode for electronics protection"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">System Benefits</h2>
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

export default CopperEarthingElectrodeExport;
