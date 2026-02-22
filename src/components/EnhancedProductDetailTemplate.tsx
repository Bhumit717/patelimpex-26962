import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Mail, Package, ShieldCheck, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import QuoteModal from "@/components/QuoteModal";

interface Specification {
  label: string;
  value: string;
}

interface ExportInfo {
  label: string;
  value: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface EnhancedProductDetailTemplateProps {
  category: string;
  name: string;
  description: string;
  images: string[];
  hsCode?: string;
  specifications: Specification[];
  uses: string[];
  exportInfo: ExportInfo[];
  formats?: string[];
  breadcrumbs: BreadcrumbItem[];
  backLink: string;
  backLinkText: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl: string;
  specSheetUrl?: string;
  imageCredit?: string;
}

const EnhancedProductDetailTemplate = ({
  category,
  name,
  description,
  images,
  hsCode,
  specifications,
  uses,
  exportInfo,
  breadcrumbs,
  backLink,
  backLinkText,
  metaTitle,
  metaDescription,
  canonicalUrl,
}: EnhancedProductDetailTemplateProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: images,
    url: `https://patelimpex.com${canonicalUrl}`,
    brand: {
      "@type": "Brand",
      name: "Patel Impex",
    },
    sku: hsCode,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0] font-sans text-slate-700">
      <SEOHead
        title={metaTitle || `${name} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        ogImage={images[0]}
        ogType="product"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-24 pb-20 mt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumbs and Title Card */}
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Top Info Bar */}
            <div className="lg:col-span-12">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row items-center justify-between border-b-4 border-orange-500">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block">{category}</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a2b4b] uppercase tracking-tight">{name}</h1>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {hsCode && (
                    <div className="bg-slate-100 px-4 py-2 rounded-lg text-[#1a2b4b] font-bold text-sm border border-slate-200">
                      HSN CODE: <span className="text-orange-500 ml-1">{hsCode}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Image Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-xl shadow-lg p-10 h-full border border-white">
                <div className="relative aspect-square mb-8 overflow-hidden bg-white flex items-center justify-center p-4 border border-slate-100 rounded-lg">
                  <img
                    src={images[selectedImage]}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {images.length > 1 && (
                  <div className="flex flex-wrap gap-4 justify-center">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all p-1 bg-white ${selectedImage === index ? "border-orange-500 shadow-md scale-105" : "border-slate-100 hover:border-slate-300"}`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Description Card */}
            <div className="lg:col-span-6 space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-10 h-full flex flex-col justify-between border border-white">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a2b4b] mb-6 flex items-center">
                    <span className="w-2.5 h-8 bg-orange-500 mr-4 rounded-full"></span>
                    Description
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-semibold mb-10">
                    {description}
                  </p>
                </div>

                <div className="space-y-4 pt-10 border-t border-slate-100">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full bg-[#1a2b4b] hover:bg-orange-600 text-white font-black uppercase text-xs tracking-[0.2em] py-6 rounded-lg transition-all shadow-lg flex items-center justify-center space-x-3 group"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Whatsapp Enquiry</span>
                  </button>
                  <Link
                    to="/contact"
                    className="w-full bg-white text-[#1a2b4b] border-2 border-slate-100 hover:border-orange-500 hover:text-orange-500 font-black uppercase text-[10px] tracking-[0.3em] py-6 rounded-lg transition-all flex items-center justify-center space-x-3"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Request Quotation</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Technical Specification Table */}
            <div className="lg:col-span-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-white">
                <div className="bg-[#1a2b4b] px-10 py-6 border-b-4 border-orange-500">
                  <h3 className="text-xl font-bold text-white uppercase flex items-center tracking-wider">
                    <ShieldCheck className="h-6 w-6 text-orange-400 mr-4" />
                    Technical Specification
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                          <td className="w-1/3 md:w-1/4 px-10 py-6 bg-[#f8f9fa] border-r border-slate-100">
                            <span className="font-bold text-[#1a2b4b] uppercase text-xs tracking-widest">{spec.label}</span>
                          </td>
                          <td className="px-10 py-6">
                            <span className="text-slate-600 font-extrabold">{spec.value}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Uses Section */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl p-10 shadow-lg border border-white h-full">
                <h3 className="text-2xl font-bold text-[#1a2b4b] uppercase mb-10 flex items-center">
                  <Globe className="h-7 w-7 text-orange-500 mr-4" />
                  Uses and Benefits
                </h3>
                <div className="space-y-6">
                  {uses.map((use, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="h-3.5 w-3.5 bg-orange-500 rounded-sm mt-1.5 mr-6 flex-shrink-0 group-hover:rotate-45 transition-transform duration-300" />
                      <span className="text-slate-600 font-bold leading-relaxed">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#1a2b4b] rounded-xl p-10 text-white shadow-xl h-full flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-10 border-b-2 border-orange-500 pb-2 inline-block">Shipping Log</h4>
                <div className="space-y-6">
                  {exportInfo.slice(0, 4).map((info, index) => (
                    <div key={index} className="flex flex-col border-b border-white/10 pb-4 last:border-0">
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] mb-1">{info.label}</span>
                      <span className="text-sm font-bold text-white uppercase tracking-tight">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="lg:col-span-12 text-center pt-12">
              <Link
                to={backLink}
                className="inline-flex items-center text-[#1a2b4b] hover:text-orange-500 font-black uppercase text-[10px] tracking-[0.4em] transition-all"
              >
                <ArrowLeft className="h-4 w-4 mr-3" />
                {backLinkText}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName={name}
      />
    </div>
  );
};

export default EnhancedProductDetailTemplate;
