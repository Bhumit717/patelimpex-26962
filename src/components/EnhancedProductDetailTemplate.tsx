import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Download, Mail, MessageSquare, Star, ArrowRight, Package, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  formats,
  breadcrumbs,
  backLink,
  backLinkText,
  metaTitle,
  metaDescription,
  canonicalUrl,
  specSheetUrl,
  imageCredit,
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
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "100",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Patel Impex",
      },
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f7] to-white font-sans text-slate-800">
      <SEOHead
        title={metaTitle || `${name} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        ogImage={images[0]}
        ogType="product"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-6">
              <Package className="h-4 w-4 text-orange-500" />
              <span className="text-orange-600 font-bold text-[11px] uppercase tracking-widest leading-none mt-0.5">{category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a2b4b] mb-6 tracking-tight">
              {name}
            </h1>
            <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-8"></div>
            <p className="max-w-3xl text-lg text-slate-500 font-medium leading-relaxed italic">
              "{description}"
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Image Section */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-[15px] p-10 shadow-xl border border-slate-100 h-full flex flex-col items-center">
                <div className="relative w-full aspect-square mb-10 overflow-hidden bg-slate-50 rounded-xl p-8 flex items-center justify-center border border-slate-50 group">
                  <img
                    src={images[selectedImage]}
                    alt={name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-700"
                  />
                  {hsCode && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-[#1a2b4b] text-white text-[10px] font-black rounded-lg shadow-lg">
                      HS CODE: {hsCode}
                    </div>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="flex flex-wrap justify-center gap-4">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-24 h-24 rounded-lg overflow-hidden transition-all bg-white border-2 p-2 ${selectedImage === index
                          ? "border-orange-500 shadow-md scale-105"
                          : "border-slate-100 hover:border-slate-300"
                          }`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-12 w-full grid grid-cols-2 gap-6">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-[#1a2b4b] hover:bg-orange-500 text-white font-black uppercase text-xs tracking-widest py-6 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-3 group"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Inquire Now</span>
                  </button>
                  <Link
                    to="/contact"
                    className="bg-white hover:border-[#1a2b4b] text-[#1a2b4b] border-2 border-slate-100 font-black uppercase text-xs tracking-widest py-6 rounded-xl transition-all shadow-md flex items-center justify-center space-x-3"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Contact Sales</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Specifications & Details section */}
            <div className="lg:col-span-6 space-y-10">
              {/* Spec Table */}
              <div className="bg-white rounded-[15px] overflow-hidden shadow-xl border border-slate-100">
                <div className="bg-[#1a2b4b] px-8 py-5 text-white flex justify-between items-center">
                  <h3 className="text-sm font-black uppercase tracking-widest">Technical Specifications</h3>
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                          <td className="w-2/5 px-8 py-5 bg-slate-50 border-r border-slate-100">
                            <span className="text-[11px] font-black text-[#1a2b4b] uppercase tracking-wider">{spec.label}</span>
                          </td>
                          <td className="w-3/5 px-8 py-5">
                            <span className="text-slate-600 font-medium">{spec.value}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Uses / Applications */}
              <div className="bg-white rounded-[15px] p-8 md:p-10 shadow-xl border border-slate-100">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100">
                    <Globe className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-black text-[#1a2b4b] uppercase tracking-tight">Industrial Applications</h3>
                </div>
                <ul className="grid gap-6">
                  {uses.map((use, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-orange-500 rounded-sm mt-2.5 mr-6 flex-shrink-0" />
                      <span className="text-slate-500 font-medium leading-relaxed">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Export compliance Info */}
              <div className="bg-[#1a2b4b] rounded-[15px] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-bl-[100px] opacity-10 transition-transform group-hover:scale-110"></div>
                <h4 className="text-lg font-black uppercase tracking-widest mb-10 border-b border-white/10 pb-4 inline-block">Global Trade Data</h4>
                <div className="space-y-6">
                  {exportInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em]">{info.label}</span>
                      <span className="text-sm font-black text-white">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Link
              to={backLink}
              className="inline-flex items-center text-slate-400 hover:text-orange-500 transition-colors font-bold uppercase text-[10px] tracking-[0.3em]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {backLinkText}
            </Link>
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

