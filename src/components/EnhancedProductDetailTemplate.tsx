import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Mail, Package, ShieldCheck, Globe, ChevronRight } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState("DESCRIPTION");

  const colors = {
    navy: "#124576",
    orange: "#ef7f1a",
    whatsapp: "#3ba72f",
    text: "#212529",
    border: "#a8a8a8",
    bgGradient: "linear-gradient(to bottom, #cfd9df 0%, #e2ebf0 100%)",
    tabBorder: "#3c3c3c"
  };

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

  const tabs = ["DESCRIPTION", "SPECIFICATION", "USES BENEFITS"];

  return (
    <div className="min-h-screen font-['Plus_Jakarta_Sans',_sans-serif]" style={{ backgroundImage: colors.bgGradient, color: colors.text }}>
      <SEOHead
        title={metaTitle || `${name} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        ogImage={images[0]}
        ogType="product"
        jsonLd={jsonLd}
      />

      {/* Load Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800\u0026display=swap');
        
        .active-tab {
          background-color: ${colors.orange} !important;
          color: white !important;
          border: none !important;
        }
        
        .inactive-tab {
          background-color: white !important;
          color: black !important;
          border: 3.2px dashed ${colors.tabBorder} !important;
        }
      `}</style>

      <Navigation />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-[1320px]">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs font-semibold mb-8 uppercase tracking-wider text-slate-500">
            {breadcrumbs.map((item, i) => (
              <div key={i} className="flex items-center">
                {item.href ? (
                  <Link to={item.href} className="hover:text-orange-500 transition-colors">{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 mx-2 opacity-50" />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[15px] shadow-lg overflow-hidden mb-12 border border-white">
            <div className="grid md:grid-cols-2">
              {/* Product Gallery */}
              <div className="p-8 border-r border-slate-100 bg-[#f8f9fa]">
                <div className="relative aspect-square mb-6 overflow-hidden bg-white flex items-center justify-center border border-slate-200 rounded-lg shadow-inner">
                  <img
                    src={images[selectedImage]}
                    alt={name}
                    className="max-h-[90%] max-w-[90%] object-contain"
                  />
                </div>
                {images.length > 1 && (
                  <div className="flex flex-wrap gap-3 justify-center">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 rounded border-2 transition-all p-1 bg-white ${selectedImage === index ? "border-orange-500 scale-105 shadow-sm" : "border-slate-100 hover:border-slate-200"}`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info Summary */}
              <div className="p-12 flex flex-col justify-center bg-white">
                <div className="mb-4">
                  <span className="text-[14px] font-bold uppercase tracking-[0.2em]" style={{ color: colors.orange }}>{category}</span>
                  <h1 className="text-[38px] font-extrabold leading-tight mt-1 mb-6" style={{ color: colors.navy }}>{name}</h1>
                </div>

                <div className="flex items-center space-x-4 mb-10">
                  {hsCode && (
                    <div className="bg-slate-50 px-4 py-2 border border-slate-200 rounded text-xs font-bold text-slate-500">
                      HSN CODE: <span className="text-[#1a2b4b] ml-1">{hsCode}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="flex items-center space-x-3 text-white font-bold text-sm uppercase tracking-wider py-4 px-10 transition-all hover:brightness-110 shadow-lg"
                    style={{ backgroundColor: colors.whatsapp, borderRadius: '50px' }}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Whatsapp Enquiry</span>
                  </button>
                  <Link
                    to="/contact"
                    className="flex items-center space-x-3 text-white font-bold text-sm uppercase tracking-wider py-4 px-10 transition-all hover:brightness-110 shadow-lg"
                    style={{ backgroundColor: colors.navy, borderRadius: '50px' }}
                  >
                    <Mail className="h-5 w-5" />
                    <span>Request Quotation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Interface */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold py-3 px-8 transition-all rounded-[50px] tracking-widest ${activeTab === tab ? "active-tab" : "inactive-tab"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-[15px] shadow-lg p-12 border border-white min-h-[400px]">
            {activeTab === "DESCRIPTION" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-[28px] font-bold text-center mb-10" style={{ color: colors.navy }}>Description</h2>
                <p className="text-[16px] leading-[1.6] text-slate-600 font-medium">
                  {description}
                </p>
              </div>
            )}

            {activeTab === "SPECIFICATION" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-[28px] font-bold text-center mb-10" style={{ color: colors.navy }}>Specification</h2>
                <div className="overflow-x-auto max-w-4xl mx-auto">
                  <table className="w-full border-collapse border border-[#a8a8a8]">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index} className="border-b border-[#a8a8a8] last:border-0 hover:bg-slate-50 transition-colors">
                          <td className="w-1/3 px-6 py-4 bg-[#f8f9fa] border-r border-[#a8a8a8] font-bold text-xs uppercase tracking-widest text-[#1a2b4b]">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 text-[16px] text-slate-800 font-semibold">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "USES BENEFITS" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-[28px] font-bold text-center mb-10" style={{ color: colors.navy }}>Uses Benefits</h2>
                  <div className="space-y-6">
                    {uses.map((use, index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-3.5 w-3.5 mt-1.5 mr-5 flex-shrink-0" style={{ backgroundColor: colors.orange }}></div>
                        <span className="text-[16px] font-semibold text-slate-600 leading-relaxed">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#124576] rounded-[20px] p-10 text-white relative overflow-hidden group shadow-2xl h-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-bl-full opacity-10 transition-transform group-hover:scale-125"></div>
                  <div className="flex items-center space-x-3 mb-8 border-b border-white/20 pb-4">
                    <Globe className="h-6 w-6 text-orange-400" />
                    <h3 className="text-xl font-bold uppercase tracking-widest">Global Export Info</h3>
                  </div>
                  <div className="space-y-6">
                    {exportInfo.slice(0, 4).map((info, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest opacity-80 mb-1">{info.label}</span>
                        <span className="text-sm font-extrabold uppercase tracking-tight">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-20 text-center">
            <Link
              to={backLink}
              className="inline-flex items-center text-slate-400 hover:text-orange-500 font-bold uppercase text-[10px] tracking-[0.4em] transition-all"
            >
              <ArrowLeft className="h-4 w-4 mr-3" />
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
