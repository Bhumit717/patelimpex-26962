import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, AlertCircle, Download, Shield, Clock } from "lucide-react";
import documentationImage from "@/assets/import-export-documentation.jpg";

const ExportDocumentation = () => {
  const essentialDocs = [
    { doc: "Commercial Invoice", desc: "Detailed invoice with product descriptions, quantities, and values", required: true },
    { doc: "Packing List", desc: "Complete list of package contents and specifications", required: true },
    { doc: "Bill of Lading", desc: "Transport document issued by carrier", required: true },
    { doc: "Certificate of Origin", desc: "Document certifying the country of manufacture", required: true },
    { doc: "Export License", desc: "Government permission for specific restricted goods", required: false },
    { doc: "Insurance Certificate", desc: "Cargo insurance coverage documentation", required: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Export Documentation
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Export Documentation Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete guide to export documentation requirements. Ensure compliance and smooth customs clearance with proper documentation.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Documentation Help</Link>
              </Button>
            </div>
            <div>
              <img 
                src={documentationImage} 
                alt="Export Documentation - International trade documents and customs paperwork"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Export Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essentialDocs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-blue-600" />
                      {item.doc}
                    </span>
                    {item.required ? (
                      <Badge variant="destructive" className="text-xs">Required</Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">Optional</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                  <div className="flex items-center mt-4">
                    {item.required ? (
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    )}
                    <span className="text-sm">{item.required ? "Mandatory" : "Recommended"}</span>
                  </div>
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

export default ExportDocumentation;