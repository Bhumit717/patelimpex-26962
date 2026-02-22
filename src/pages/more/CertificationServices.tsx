
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Award, CheckCircle, Shield, Download, Leaf } from "lucide-react";

const CertificationServices = () => {
  const certificates = [
    {
      name: "GST Registration Certificate",
      description: "Goods and Services Tax Registration - Government of India",
      number: "24HMFPR6423E1Z0",
      issueDate: "11/11/2025",
      image: "/certificates/gst-certificate.jpg",
      pdfUrl: "/certificates/gst.pdf",
      fileName: "GST_Certificate.pdf"
    },
    {
      name: "Udyam Registration Certificate",
      description: "MSME Registration - Micro Enterprise (Trading)",
      number: "UDYAM-GJ-20-0249757",
      issueDate: "26/08/2025",
      image: "/certificates/udyam-certificate.jpg",
      pdfUrl: "/certificates/udyam.pdf",
      fileName: "Udyam_Certificate.pdf"
    },
    {
      name: "Import Export Code (IEC)",
      description: "DGFT Importer-Exporter License - Ministry of Commerce",
      number: "HMFPR6423E",
      issueDate: "27/12/2025",
      image: "/certificates/iec-certificate.jpg",
      pdfUrl: "/certificates/iec.pdf",
      fileName: "IEC_Certificate.pdf"
    }
  ];

  const triggerDownload = (path: string, name: string) => {
    const a = document.createElement('a');
    a.href = path;
    a.download = name;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <SEOHead title="Certification Services | Patel Impex" description="Certification Services - Expert services and information by Patel Impex." canonicalUrl="/more/certification-services" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 border border-slate-100">
            <Leaf className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest font-graduate">Compliance & Trust</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-800 font-graduate">
            Our <span className="text-green-600 font-fredericka tracking-tight">Certifications</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-fondamento italic">
            Patel Impex is a fully licensed and government-registered export-import company.
            View our official certifications and registrations below.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {certificates.map((cert, index) => (
              <div key={index} className="nm-card !p-0 overflow-hidden bg-white border-none group relative">
                {/* Corner Logo Removed */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white p-8 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-slate-800 font-graduate uppercase leading-tight">{cert.name}</h3>
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 ml-2" />
                  </div>
                  <p className="text-sm text-slate-500 font-fondamento italic">{cert.description}</p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-graduate">Number</span>
                      <span className="font-mono text-xs font-bold text-slate-700">{cert.number}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-graduate">Issue Date</span>
                      <span className="text-xs font-bold text-slate-700">{cert.issueDate}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerDownload(cert.pdfUrl, cert.fileName)}
                    className="nm-btn-dark w-full !py-4 group"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span className="font-graduate uppercase tracking-widest text-[10px]">Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Logos Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-slate-800 font-graduate uppercase tracking-tighter">Global Recognition & Membership</h2>
            <div className="h-1 w-20 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <img
              src="/certification-badge.png"
              alt="Certifications and Memberships"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 pb-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="nm-card text-center max-w-3xl mx-auto !p-12 border-none">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-4 font-graduate uppercase">Verified Exporter</h2>
            <p className="text-lg text-slate-500 mb-10 font-fondamento italic">
              We maintain full compliance with all Indian government export regulations and trade laws.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="nm-btn !w-auto min-w-[200px] !py-4 font-graduate uppercase text-xs tracking-widest">Contact Us</Link>
              <Link to="/inquiry" className="nm-btn-green !w-auto min-w-[200px] !py-4 font-graduate uppercase text-xs tracking-widest">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationServices;
