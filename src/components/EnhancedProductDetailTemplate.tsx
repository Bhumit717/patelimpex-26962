import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Mail, ChevronRight, Globe, ShieldCheck } from "lucide-react";
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

      {/* Load Font and Custom Styles */}
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

        .container-trigol {
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 12px;
          padding-right: 12px;
        }

        .trigol-summary-row {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .trigol-whatsapp-btn {
          background-color: ${colors.whatsapp};
          color: white;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, brightness 0.2s;
        }

        .trigol-whatsapp-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }

        .trigol-bullet {
          width: 14px;
          height: 14px;
          background-color: ${colors.orange};
          display: inline-block;
          margin-right: 15px;
          margin-top: 6px;
          flex-shrink: 0;
        }
      `}</style>

      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container-trigol">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[11px] font-extrabold mb-10 uppercase tracking-[0.25em] text-slate-400">
            {breadcrumbs.map((item, i) => (
              <div key={i} className="flex items-center">
                {item.href ? (
                  <Link to={item.href} className="hover:text-orange-500 transition-colors">{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 mx-2 opacity-50" />}
              </div>
            ))}
          </div>

          {/* 1. Summary Section (Grid) */}
          <div className="grid lg:grid-cols-2 gap-16 trigol-summary-row">
            {/* Column 1: Product Image */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-[15px] shadow-[0_15px_35px_rgba(0,0,0,0.05)] p-12 w-full aspect-square flex items-center justify-center border border-white overflow-hidden relative group">
                <img
                  src={images[selectedImage]}
                  alt={name}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {images.length \u003e 1 && (
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all p-1 bg-white ${selectedImage === index ? "border-orange-500 shadow-md" : "border-slate-100 hover:border-slate-300"}`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
              )}
            </div>

            {/* Column 2: Product Header Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-[14px] font-extrabold uppercase tracking-[0.4em]" style={{ color: colors.orange }}>{category}</span>
                <h1 className="text-[38px] font-extrabold leading-tight mt-1 mb-10" style={{ color: colors.navy }}>{name}</h1>
              </div>

              <div className="mb-12">
                <p className="text-[16px] leading-[1.6] text-[#212529] font-medium opacity-90">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="trigol-whatsapp-btn uppercase tracking-widest font-bold"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Whatsapp Enquiry</span>
                </button>

                {hsCode && (
                  <div className="bg-white px-6 py-2.5 border-2 border-dashed border-slate-200 rounded-lg text-xs font-black text-slate-400 tracking-widest flex items-center">
                    HSN: <span className="text-[#124576] ml-2">{hsCode}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 2. Tab Navigation (Centered) */}
          <div className="flex flex-wrap justify-center gap-4 mb-2 pt-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold py-3.5 px-10 transition-all rounded-[50px] tracking-[0.1em] ${activeTab === tab ? "active-tab" : "inactive-tab"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3. Tab Content Area (White Card) */}
          <div className="bg-white rounded-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] p-12 md:p-16 border border-white min-h-[400px]">
            {activeTab === "DESCRIPTION" && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-[28px] font-extrabold text-[#124576] text-center mb-12 uppercase tracking-tight">Description</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-[16px] leading-[1.8] text-[#212529] font-medium">
                    {description}
                  </p>

                  {/* Added Additional Shipping Hook as seen on Reference */}
                  <div className="mt-16 grid md:grid-cols-2 gap-12 border-t border-slate-50 pt-12">
                    <div className="flex items-start space-x-5">
                      <div className="p-3 bg-orange-50 rounded-xl text-orange-500">
                        <ShieldCheck className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-[#124576] uppercase tracking-[0.2em] mb-2">Quality Grade</h4>
                        <p className="text-xs text-slate-400 font-bold leading-relaxed tracking-wider uppercase">Premium export quality fiber</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-5">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
                        <Globe className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-[#124576] uppercase tracking-[0.2em] mb-2">Market Reach</h4>
                        <p className="text-xs text-slate-400 font-bold leading-relaxed tracking-wider uppercase">Worldwide Shipping (40+ Countries)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "SPECIFICATION" && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-[28px] font-extrabold text-[#124576] text-center mb-12 uppercase tracking-tight">Specification</h2>
                <div className="max-w-4xl mx-auto overflow-x-auto">
                  <table className="w-full border-collapse border border-[#a8a8a8]">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index} className="border-b border-[#a8a8a8] last:border-0 hover:bg-slate-50 transition-colors">
                          <td className="w-1/3 px-8 py-5 bg-[#f8f9fa] border-r border-[#a8a8a8] font-bold text-xs uppercase tracking-[0.3em] text-[#124576]">
                            {spec.label}
                          </td>
                          <td className="px-8 py-5 text-[16px] text-[#212529] font-extrabold">
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
              <div className="animate-in fade-in duration-500 grid xl:grid-cols-12 gap-16 items-start">
                <div className="xl:col-span-7">
                  <h2 className="text-[28px] font-extrabold text-[#124576] text-center mb-12 uppercase tracking-tight">Uses Benefits</h2>
                  <div className="space-y-6">
                    {uses.map((use, index) => (
                      <div key={index} className="flex items-start">
                        <div className="trigol-bullet" />
                        <span className="text-[16px] font-bold text-[#212529] leading-[28px]">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="xl:col-span-5">
                  <div className="bg-[#124576] rounded-[25px] p-12 text-white relative overflow-hidden group shadow-2xl h-full flex flex-col justify-center border-l-[10px] border-orange-500">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-1000"></div>
                    <div className="flex items-center space-x-4 mb-10 border-b border-white/10 pb-6">
                      <Globe className="h-8 w-8 text-orange-400" />
                      <h3 className="text-xl font-black uppercase tracking-[0.2em]">Shipping Profile</h3>
                    </div>
                    <div className="space-y-8">
                      {exportInfo.map((info, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="text-[11px] font-black text-orange-400 uppercase tracking-[0.35em] mb-2">{info.label}</span>
                          <span className="text-sm font-black uppercase tracking-widest">{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Footer/Back Navigation */}
          <div className="mt-24 text-center">
            <Link
              to={backLink}
              className="inline-flex items-center text-slate-400 hover:text-orange-500 font-extrabold uppercase text-[10px] tracking-[0.6em] transition-all"
            >
              <ArrowLeft className="h-4 w-4 mr-4" />
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
