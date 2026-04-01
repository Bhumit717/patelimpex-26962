import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, Shield, Globe, TrendingUp } from "lucide-react";
import lightningArresterImg from "@/assets/products/earthing-terminal-rod.png";
import SEOHead from "@/components/SEOHead";

const LightningArresterExport = () => {
  const features = [
    { title: "ESE Technology", description: "Early Streamer Emission to protect larger radii.", icon: Zap },
    { title: "Conventional Type", description: "Traditional multi-prong arresters for standard protection.", icon: Shield },
    { title: "Global Safety", description: "Meeting NFC 17-102 and other global standards.", icon: Globe },
    { title: "Surge Protection", description: "Diverts high-voltage surges safely into the ground.", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Lightning Arresters Export | Lightning Protection Hub | Patel Impex" 
        description="Expert export of advanced ESE and conventional lightning arresters. Complete building protection solutions for international markets." 
        canonicalUrl="/more/lightning-arrester-export" 
      />
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Lightning Protection
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lightning Arresters Export
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your infrastructure from lightning strikes with our advanced arresters. We export both Early Streamer Emission (ESE) and traditional conventional arresters for global projects.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Protection Plan</Link>
              </Button>
            </div>
            <div>
              <img 
                src={lightningArresterImg} 
                alt="Advanced lightning arrester for building protection export"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Safety Features</h2>
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

export default LightningArresterExport;
