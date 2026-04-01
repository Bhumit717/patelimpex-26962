import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, Star, Globe, Shield, Award, CheckCircle } from "lucide-react";
import earthingImage from "@/assets/products/copper-bonded-earthing-rods.png";
import SEOHead from "@/components/SEOHead";

const EarthingMore = () => {
  const products = [
    { name: "GI Earthing Electrodes", path: "/more/gi-earthing-electrode-export", description: "Hot-dip galvanized grounding solutions", origin: "Gujarat, India" },
    { name: "Copper Earthing Electrodes", path: "/more/copper-earthing-electrode-export", description: "High-conductivity chemical grounding", origin: "Gujarat, India" },
    { name: "Copper Bonded Rods", path: "/more/copper-bonded-rods-export", description: "250 microns copper coating for durability", origin: "Gujarat, India" },
    { name: "Backfill Compound", path: "/more/backfill-compound-export", description: "Earth enhancing moisture-retaining material", origin: "Gujarat, India" },
    { name: "Lightning Arresters", path: "/more/lightning-arrester-export", description: "ESE and Conventional lightning protection", origin: "Gujarat, India" },
    { name: "Earth Pit Covers", path: "/more/earth-pit-covers-export", description: "Heavy-duty polypropylene protection", origin: "Gujarat, India" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title="Earthing & Grounding Export | Patel Impex" description="Strategic grounding solutions and earthing accessories exported from India by Patel Impex." canonicalUrl="/more/earthing-export-info" />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4 text-slate-900 border-b border-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-amber-200 text-amber-700 bg-amber-50">
                <Zap className="w-4 h-4 mr-2 fill-amber-500" />
                Industrial Safety Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-graduate uppercase leading-tight">
                Earthing & <br/>Grounding Systems
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Protecting infrastructure with advanced earthing technology. We export complete grounding kits for power plants, telecom, and oil & gas projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link to="/contact">Request Technical Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products/earthing-export">View Catalog</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="relative">
                 <div className="absolute inset-0 bg-amber-200/20 blur-3xl rounded-full" />
                 <img 
                  src={earthingImage} 
                  alt="Earthing Electrodes Export - Industrial grounding materials"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-contain relative z-10 p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl text-white">
          <h2 className="text-3xl font-bold text-center mb-12 font-graduate">Technical Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <Link to={item.path} key={index} className="block">
                <Card className="hover:shadow-xl transition-all border-slate-800 bg-slate-800 text-white h-full group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center text-slate-100 group-hover:text-amber-500 transition-colors">
                        <Zap className="w-5 h-5 mr-2 text-amber-500" />
                        {item.name}
                      </CardTitle>
                      <Star className="w-5 h-5 text-amber-500" />
                    </div>
                    <CardDescription className="text-slate-400">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500">Origin: {item.origin}</p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                      <span className="text-sm">Tested to IEC Standard</span>
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
          <h2 className="text-3xl font-bold mb-8 font-graduate">Engineered For Reliability</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "CPRI Tested", desc: "Certified performance" },
              { icon: Globe, title: "Export Grade", desc: "Meeting global standards" },
              { icon: Award, title: "Corrosion Proof", desc: "Long life electrodes" },
              { icon: CheckCircle, title: "Technical Support", desc: "Design & Installation help" }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-8 border border-slate-100 shadow-sm bg-slate-50/50">
                <feature.icon className="w-12 h-12 text-slate-900 mx-auto mb-4" />
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

export default EarthingMore;
