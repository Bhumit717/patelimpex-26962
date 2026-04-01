import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, Shield,Globe, Award } from "lucide-react";
import giElectrodeImg from "@/assets/products/earthing-rod-with-clamp.png";
import SEOHead from "@/components/SEOHead";

const GiEarthingElectrodeExport = () => {
  const features = [
    { title: "Hot Dip Galvanized", description: "Long-lasting protection against corrosion in soil.", icon: Shield },
    { title: "Cost-Effective", description: "Durable grounding solution for industrial applications.", icon: Award },
    { title: "Global Compliance", description: "Produced as per international electrical safety standards.", icon: Globe },
    { title: "High Strength", description: "Structural integrity for deep earth installation.", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="GI Earthing Electrode Export | Galvanized Grounding | Patel Impex" 
        description="Premium GI chemical earthing electrodes for export. Hot-dip galvanized electrodes for reliable industrial grounding solutions worldwide." 
        canonicalUrl="/more/gi-earthing-electrode-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Electrical Safety
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                GI Earthing Electrode Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Chemical GI earthing electrodes provide a stable grounding path for industrial and commercial facilities. Our hot-dip galvanized electrodes ensure maximum longevity and conductivity.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Technical Info</Link>
              </Button>
            </div>
            <div>
              <img 
                src={giElectrodeImg} 
                alt="GI chemical earthing electrode for industrial grounding"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Standards</h2>
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

export default GiEarthingElectrodeExport;
