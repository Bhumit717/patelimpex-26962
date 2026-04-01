import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { LayoutGrid, Award, Globe, TrendingUp } from "lucide-react";
import gvtPgvtImg from "@/assets/products/grey-vitrified-tiles.png";
import SEOHead from "@/components/SEOHead";

const GvtPgvtTilesExport = () => {
  const features = [
    { title: "High Definition", description: "Advanced digital printing technology for realistic textures.", icon: LayoutGrid },
    { title: "Global Standards", description: "Produced in Morbi following international quality certifications.", icon: Award },
    { title: "Wide Export", description: "Currently exported to 50+ countries including USA, UAE, and Europe.", icon: Globe },
    { title: "Durability", description: "Highly resistant to stains, scratches, and heavy foot traffic.", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="GVT & PGVT Tiles Export | Premium Indian Ceramics | Patel Impex" 
        description="Explore premium GVT and PGVT tiles export from Morbi, India. High-definition digital glazed vitrified tiles for global architectural projects." 
        canonicalUrl="/more/gvt-pgvt-tiles-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <LayoutGrid className="w-4 h-4 mr-2" />
                Tiles & Ceramics
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                GVT & PGVT Tiles Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Premium Glazed Vitrified Tiles (GVT) and Polished Glazed Vitrified Tiles (PGVT) sourced from Morbi, India's ceramic hub. Exceptional quality for international markets.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Request Export Quote</Link>
              </Button>
            </div>
            <div>
              <img 
                src={gvtPgvtImg} 
                alt="Premium GVT and PGVT Tiles for international export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Quality & Features</h2>
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

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Expert Tile Sourcing from India</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Patel Impex specializes in the export of premium ceramic and porcelain tiles. Our GVT and PGVT range offers unparalleled design flexibility with finishes ranging from high-gloss to rustic matt. We handle the entire supply chain, ensuring that your architectural projects receive the finest Indian craftsmanship with reliable global logistics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">600x600mm</Badge>
            <Badge variant="secondary" className="px-4 py-2">600x1200mm</Badge>
            <Badge variant="secondary" className="px-4 py-2">800x1600mm</Badge>
            <Badge variant="secondary" className="px-4 py-2">Full Polish</Badge>
            <Badge variant="secondary" className="px-4 py-2">Satin Finish</Badge>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GvtPgvtTilesExport;
