import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Star, Globe, Shield, Award, CheckCircle } from "lucide-react";
import riceWarehouseImage from "@/assets/rice-export-warehouse.jpg";

const RiceExport = () => {
  const riceVarieties = [
    { name: "Basmati Rice", description: "Premium aromatic long-grain rice", origin: "Punjab, Haryana" },
    { name: "Non-Basmati Rice", description: "High-quality parboiled and raw rice", origin: "Andhra Pradesh, Tamil Nadu" },
    { name: "Organic Rice", description: "Certified organic rice varieties", origin: "Uttarakhand, Himachal Pradesh" },
    { name: "Jasmine Rice", description: "Fragrant long-grain rice", origin: "West Bengal, Assam" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Wheat className="w-4 h-4 mr-2" />
                Premium Rice Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Rice Export from India
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium quality Indian rice varieties to global markets. We specialize in basmati, non-basmati, organic, and specialty rice exports with complete quality assurance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Rice Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/inquiry">Request Samples</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={riceWarehouseImage} 
                alt="Rice Export Warehouse - Premium quality rice storage and processing facility"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Rice Varieties We Export</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riceVarieties.map((variety, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Wheat className="w-5 h-5 mr-2 text-primary" />
                      {variety.name}
                    </CardTitle>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <CardDescription>{variety.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Origin: {variety.origin}</p>
                  <div className="flex items-center mt-4">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm">Quality Certified</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Rice Export Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Quality Assured", desc: "Rigorous quality control" },
              { icon: Globe, title: "Global Reach", desc: "Export to 45+ countries" },
              { icon: Award, title: "Certified", desc: "ISO & FSSAI certified" },
              { icon: CheckCircle, title: "Reliable", desc: "On-time delivery guarantee" }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RiceExport;