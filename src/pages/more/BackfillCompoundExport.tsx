import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Waves, Award, Globe, ShieldCheck } from "lucide-react";
import backfillImg from "@/assets/products/backfill-compound-sack.png";
import SEOHead from "@/components/SEOHead";

const BackfillCompoundExport = () => {
  const features = [
    { title: "Low Resistance", description: "Soil enhancement material that significantly lowers earth resistance.", icon: Waves },
    { title: "Moisture Retention", description: "Absorbs and retains soil moisture for stable grounding.", icon: Award },
    { title: "Eco-Friendly", description: "Bentonite and graphite based, non-toxic to surroundings.", icon: Globe },
    { title: "Bulk Packaging", description: "Supplied in 25kg export bags for easy onsite handling.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Backfill Compound Export | Soil Enhancement Material | Patel Impex" 
        description="Premium moisture-retaining backfill compound for earthing systems. High-quality soil enhancement material exported globally from India." 
        canonicalUrl="/more/backfill-compound-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Waves className="w-4 h-4 mr-2" />
                Soil Enhancement
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Backfill Compound Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Maximize the efficiency of your grounding systems with our high-performance backfill compound. It ensures low resistance even in dry or rocky terrain by maintaining a moisture-rich conductive environment.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Bulk Order</Link>
              </Button>
            </div>
            <div>
              <img 
                src={backfillImg} 
                alt="Backfill compound bags for earthing systems export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Features</h2>
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

export default BackfillCompoundExport;
