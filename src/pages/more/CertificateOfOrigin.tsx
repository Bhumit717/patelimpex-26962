import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Eye, FileText, Globe, Building2 } from "lucide-react";
import GSTCertificate from "@/assets/GST.pdf";
import IECCertificate from "@/assets/IEC.pdf";
import UDYAMCertificate from "@/assets/UDYAM.pdf";
import SEOHead from "@/components/SEOHead";

const CertificateOfOrigin = () => {
  const certificates = [
    {
      name: "GST Registration Certificate",
      file: GSTCertificate,
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "IEC (Import Export Code) Certificate",
      file: IECCertificate,
      icon: Globe,
      color: "from-green-500 to-green-600"
    },
    {
      name: "UDYAM Registration Certificate",
      file: UDYAMCertificate,
      icon: Building2,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Our Certificates | Patel Impex"
        description="View our official business certifications including GST Registration, IEC Certificate, and UDYAM Registration."
        canonicalUrl="/more/certificate-of-origin"
      />
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Certificates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Official business certifications demonstrating our compliance and authorization for international trade operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-64 bg-gradient-to-br ${cert.color} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <IconComponent className="w-24 h-24 text-white relative z-10" strokeWidth={1.5} />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-center min-h-[3rem] flex items-center justify-center">
                      {cert.name}
                    </h3>
                    <Button
                      className="w-full"
                      size="lg"
                      asChild
                    >
                      <a href={cert.file} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificateOfOrigin;
