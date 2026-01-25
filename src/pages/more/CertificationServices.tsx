import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Award, CheckCircle, Globe, Shield, FileText, Users, ExternalLink, Download } from "lucide-react";

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
    <div className="min-h-screen bg-[#e9edf3]">
      <SEOHead title="Certification Services | Patel Impex" description="Certification Services - Expert services and information by Patel Impex." canonicalUrl="/more/certification-services" />
      <Navigation />

      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#e9edf3] rounded-full shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff] mb-6">
              <Award className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-slate-600 font-medium">Government Verified</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Our Certifications & Licenses
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Patel Impex is a fully licensed and government-registered export-import company.
              View our official certifications and registrations below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Official Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="nm-card !p-0 overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/50 border-b border-white">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{cert.name}</h3>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-slate-500 mb-4 text-sm">{cert.description}</p>

                  <div className="space-y-2 text-sm mb-6 bg-[#e9edf3] p-4 rounded-xl shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Certificate No:</span>
                      <span className="font-mono font-semibold text-slate-700">{cert.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Issue Date:</span>
                      <span className="font-semibold text-slate-700">{cert.issueDate}</span>
                    </div>
                  </div>

                  <Button className="w-full nm-btn !text-slate-700" onClick={() => window.open(cert.image, '_blank')}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="nm-card p-12">
            <div className="w-20 h-20 rounded-full bg-[#e9edf3] shadow-[6px_6px_12px_#cfd6e0,-6px_-6px_12px_#ffffff] flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Verified & Trusted Exporter</h2>
            <p className="text-lg text-slate-600 mb-8">
              All our certifications are issued by the Government of India and can be verified
              through official government portals. We maintain full compliance with all export
              regulations and trade laws.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="nm-btn !w-auto text-slate-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" asChild className="nm-btn !w-auto text-slate-700">
                <Link to="/inquiry">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationServices;