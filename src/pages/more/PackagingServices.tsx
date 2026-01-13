import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Package, Shield, Recycle, Globe, Award, CheckCircle } from "lucide-react";
import packagingImage from "@/assets/rice-export-warehouse.jpg";

const PackagingServices = () => {
  const packagingTypes = [
    { type: "Food Grade Packaging", standards: "FDA, FSSAI compliant", materials: "PP, HDPE, Aluminum" },
    { type: "Export Cartons", standards: "IST certified", materials: "Corrugated, Waterproof" },
    { type: "Bulk Packaging", standards: "Container optimized", materials: "Jute, PP woven bags" },
    { type: "Premium Packaging", standards: "Retail ready", materials: "Laminated, Printed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Package className="w-4 h-4 mr-2" />
                Packaging Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Packaging Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional packaging services for international shipping. Ensure product safety, compliance, and brand presentation with our specialized packaging solutions.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Packaging Quote</Link>
              </Button>
            </div>
            <div>
              <img 
                src={packagingImage} 
                alt="Export Packaging Solutions - Professional packaging services"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Packaging Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packagingTypes.map((packaging, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    {packaging.type}
                  </CardTitle>
                  <CardDescription>{packaging.standards}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{packaging.materials}</Badge>
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

export default PackagingServices;