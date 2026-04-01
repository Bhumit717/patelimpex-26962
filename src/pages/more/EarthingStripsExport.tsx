import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Layers, Award, Globe, Link2 } from "lucide-react";
import giStripsImg from "@/assets/products/gi-earthing-flat-bar.png";
import SEOHead from "@/components/SEOHead";

const EarthingStripsExport = () => {
  const features = [
    { title: "GI & Copper Options", description: "Hot-dip galvanized or high-purity copper flat strips.", icon: Layers },
    { title: "Standard Sizes", description: "Available in 25x3, 25x6, 50x6 mm and custom dimensions.", icon: Award },
    { title: "Network Grounding", description: "Ideal for large-scale industrial network earthing.", icon: Globe },
    { title: "Secure Joints", description: "Precision flat bars for easy welding or bolt connections.", icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="GI & Copper Earthing Strip Export | Grounding Flats | Patel Impex" 
        description="Premium GI and copper earthing strips for global export. High-quality grounding flat bars for industrial and commercial projects." 
        canonicalUrl="/more/earthing-strips-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Link2 className="w-4 h-4 mr-2" />
                Network Grounding
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Earthing Strips Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Exporting premium quality earthing strips in both GI and copper for diverse grounding needs. These flat strips are essential for connecting electrodes in a grounding grid.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Bulk Request</Link>
              </Button>
            </div>
            <div>
              <img 
                src={giStripsImg} 
                alt="GI and Copper earthing strips for project import"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Strip Specifications</h2>
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

export default EarthingStripsExport;
