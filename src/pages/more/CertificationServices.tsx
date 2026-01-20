import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, CheckCircle, Globe, Shield, FileText, Users, ExternalLink, Download } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const CertificationServices = () => {
  const certificates = [
    {
      name: "GST Registration Certificate",
      description: "Goods and Services Tax Registration - Government of India",
      number: "24HMFPR6423E1Z0",
      issueDate: "11/11/2025",
      image: "/certificates/gst-certificate.jpg"
    },
    {
      name: "Udyam Registration Certificate",
      description: "MSME Registration - Micro Enterprise (Trading)",
      number: "UDYAM-GJ-20-0249757",
      issueDate: "26/08/2025",
      image: "/certificates/udyam-certificate.jpg"
    },
    {
      name: "Import Export Code (IEC)",
      description: "DGFT Importer-Exporter License - Ministry of Commerce",
      number: "HMFPR6423E",
      issueDate: "27/12/2025",
      image: "/certificates/iec-certificate.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEOHead title="Certification Services | Patel Impex" description="Certification Services - Expert services and information by Patel Impex." canonicalUrl="/more/certification-services" />
      <Navigation />

      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Government Verified
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Certifications & Licenses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Patel Impex is a fully licensed and government-registered export-import company.

              View our official certifications and registrations below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Official Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Certificate No:</span>
                      <span className="font-mono font-semibold">{cert.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issue Date:</span>
                      <span className="font-semibold">{cert.issueDate}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" onClick={() => window.open(cert.image, '_blank')}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Verified & Trusted Exporter</h2>
          <p className="text-lg text-muted-foreground mb-8">
            All our certifications are issued by the Government of India and can be verified
            through official government portals. We maintain full compliance with all export
            regulations and trade laws.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/inquiry">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationServices;