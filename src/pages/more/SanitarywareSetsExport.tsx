import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Bath, Award, Globe, ShieldCheck } from "lucide-react";
import sanitarySetImg from "@/assets/products/sanitaryware-set-complete.png";
import SEOHead from "@/components/SEOHead";

const SanitarywareSetsExport = () => {
  const features = [
    { title: "Coordinate Design", description: "Perfectly matching closets, basins, and pedestals.", icon: Bath },
    { title: "Superior Glaze", description: "Anto-bacterial and stain resistant ceramic surfaces.", icon: Award },
    { title: "Export Certified", description: "Meeting global standards for water conservation and hygiene.", icon: Globe },
    { title: "Reliable Packing", description: "Export-grade wooden crate packing for zero breakage.", icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Sanitaryware Sets Export | Indian Bathroom Solutions | Patel Impex" 
        description="Premium ceramic sanitaryware sets exported from India. Complete bathroom solutions including closets and basins for global construction projects." 
        canonicalUrl="/more/sanitaryware-sets-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Bath className="w-4 h-4 mr-2" />
                Sanitary Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sanitaryware Sets Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete your property projects with our matching sanitaryware sets. We export a wide variety of designs, from traditional classic to ultra-modern sleek bathroom configurations.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Project Quote</Link>
              </Button>
            </div>
            <div>
              <img 
                src={sanitarySetImg} 
                alt="Complete ceramic sanitaryware set for bathroom export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Product Features</h2>
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

export default SanitarywareSetsExport;
