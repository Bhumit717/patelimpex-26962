import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Layout, Star, Globe, Shield, Award, CheckCircle } from "lucide-react";
import tilesWarehouseImage from "@/assets/products/grey-vitrified-tiles.png";
import SEOHead from "@/components/SEOHead";

const TilesMore = () => {
  const varieties = [
    { name: "GVT & PGVT Tiles", path: "/more/gvt-pgvt-tiles-export", description: "Glazed Vitrified Tiles with digital printing", origin: "Morbi, Gujarat" },
    { name: "Double Charge Tiles", path: "/more/double-charge-tiles-export", description: "Heavy-duty dual layer pigment tiles", origin: "Morbi, Gujarat" },
    { name: "Full Body Vitrified", path: "/more/full-body-tiles-export", description: "Uniform color through thickness", origin: "Morbi, Gujarat" },
    { name: "Porcelain Slabs", path: "/more/porcelain-slabs-export", description: "Large format architectural surfaces", origin: "Morbi, Gujarat" },
    { name: "Digital Wall Tiles", path: "/more/digital-wall-tiles-export", description: "Stylish wall cladding solutions", origin: "Morbi, Gujarat" },
    { name: "Sanitaryware Sets", path: "/more/sanitaryware-sets-export", description: "Premium ceramic toilet & bath sets", origin: "Gujarat, India" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title="Tiles & Ceramic Export | Patel Impex" description="Premium Indian tiles and ceramic export services by Patel Impex. GVT, PGVT, and Double Charge tiles." canonicalUrl="/more/tiles-export" />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4 text-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
                <Layout className="w-4 h-4 mr-2" />
                Premium Ceramic Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-graduate uppercase">
                Tiles & Ceramics
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Exporting world-class Indian ceramic tiles and sanitaryware to global projects. Sourced directly from Morbi, the ceramic hub of India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link to="/contact">Get Tiles Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products/tiles-export">Browse Catalog</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={tilesWarehouseImage} 
                alt="Ceramic Tiles Export - High quality vitrified tiles storage"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover border border-slate-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl text-slate-900">
          <h2 className="text-3xl font-bold text-center mb-12 font-graduate">Ceramic Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {varieties.map((variety, index) => (
              <Link to={variety.path} key={index} className="block">
                <Card className="hover:shadow-xl transition-all border-none shadow-lg h-full group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center text-slate-800 group-hover:text-blue-600 transition-colors">
                        <Layout className="w-5 h-5 mr-2 text-blue-600" />
                        {variety.name}
                      </CardTitle>
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    </div>
                    <CardDescription className="text-slate-500">{variety.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400">Production Hub: {variety.origin}</p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm font-medium text-slate-700">Export Quality Tested</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center text-slate-900">
          <h2 className="text-3xl font-bold mb-8 font-graduate">Global Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Damage Proof", desc: "Premium export packing" },
              { icon: Globe, title: "Global Logistics", desc: "Shipping to 30+ ports" },
              { icon: Award, title: "ISO Certified", desc: "Top manufacturing standards" },
              { icon: CheckCircle, title: "Inspection", desc: "SGS/Intertek available" }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-8 border-none shadow-md bg-white">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-slate-800">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TilesMore;
