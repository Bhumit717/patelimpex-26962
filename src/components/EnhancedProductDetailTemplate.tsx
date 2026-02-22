import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Download, Mail, MessageSquare, Star, ArrowRight } from "lucide-react";
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
  const [selectedFormat, setSelectedFormat] = useState(formats ? formats[0] : null);

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
    },
    aggregateRating: {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <SEOHead
        title={metaTitle || `${name} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        ogImage={images[0]}
        ogType="product"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-24 lg:pt-32">
        {/* Dynamic Header Section */}
        <section className="relative overflow-hidden bg-slate-900 text-white min-h-[500px] flex items-center mb-24 lg:mb-40">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-600/20 to-transparent"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"></div>

          <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  to={backLink}
                  className="inline-flex items-center text-green-500 hover:text-white mb-12 transition-all font-graduate uppercase text-[10px] tracking-widest font-black"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {backLinkText}
                </Link>

                <div className="mb-6">
                  <span className="text-green-500 font-fredericka text-2xl lowercase tracking-tighter block mb-2">{category}</span>
                  <h1 className="text-5xl md:text-8xl font-black font-graduate uppercase tracking-tighter leading-none mb-8">
                    {name}
                  </h1>
                </div>

                <div className="flex items-center space-x-2 mb-10">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-5 w-5 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  <span className="text-sm font-bold font-graduate opacity-60">(124 Global Exports)</span>
                </div>

                <p className="text-xl text-slate-400 font-fondamento italic leading-relaxed max-w-xl mb-12">
                  {description}
                </p>

                {hsCode && (
                  <div className="inline-flex items-baseline space-x-3 bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
                    <span className="text-4xl font-black font-graduate text-white">$</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-green-500 uppercase tracking-widest font-graduate">HS CODE</span>
                      <span className="text-2xl font-black text-white leading-none">{hsCode}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Large Overlapping Product Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                <div className="w-full aspect-square md:w-[600px] md:h-[600px] mx-auto bg-white rounded-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-4 shadow-2xl flex items-center justify-center p-16 border-8 border-slate-900 group">
                  <img
                    src={images[selectedImage]}
                    alt={name}
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute -bottom-6 right-6 bg-green-500 text-slate-900 px-6 py-3 rounded-full font-black font-graduate uppercase tracking-widest text-xs shadow-xl animate-bounce">
                    Verified Exporter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="mb-24">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar Controls */}
            <div className="lg:col-span-4 space-y-12">
              {/* Image Thumbnails */}
              {images.length > 1 && (
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-graduate mb-6">Gallery View</h4>
                  <div className="grid grid-cols-4 gap-4">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-[20px] overflow-hidden transition-all bg-white border-2 flex items-center justify-center p-2 ${selectedImage === index
                          ? "border-green-500 shadow-xl scale-105"
                          : "border-slate-100 opacity-60 hover:opacity-100"
                          }`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Format / Size selector */}
              {formats && formats.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-graduate mb-6">Available Formats</h4>
                  <div className="flex flex-wrap gap-4">
                    {formats.map((format, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedFormat(format)}
                        className={`px-6 py-4 rounded-2xl font-black font-graduate uppercase tracking-widest text-xs transition-all border-2 ${selectedFormat === format
                          ? "bg-green-500 border-green-500 text-slate-900 shadow-lg scale-105"
                          : "bg-white border-slate-100 text-slate-400 hover:border-green-500"
                          }`}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Actions */}
              <div className="space-y-4 pt-6">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-slate-900 text-white !py-8 rounded-[30px] shadow-2xl hover:bg-green-600 transition-all group flex items-center justify-center"
                >
                  <span className="font-black font-graduate uppercase tracking-[0.2em] text-lg">Inquire Now</span>
                  <ArrowRight className="h-5 w-5 ml-4 group-hover:translate-x-2 transition-transform" />
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={specSheetUrl || "#"}
                    className="flex flex-col items-center justify-center bg-white p-6 rounded-[30px] border border-slate-100 hover:border-green-500 transition-colors"
                  >
                    <Download className="h-6 w-6 text-slate-400 mb-2" />
                    <span className="text-[9px] font-black font-graduate uppercase tracking-widest">Spec Sheet</span>
                  </a>
                  <Link
                    to="/contact"
                    className="flex flex-col items-center justify-center bg-white p-6 rounded-[30px] border border-slate-100 hover:border-green-500 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-slate-400 mb-2" />
                    <span className="text-[9px] font-black font-graduate uppercase tracking-widest">Connect</span>
                  </Link>
                </div>
              </div>

              {/* Trade Info Card */}
              <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-bl-[100px] opacity-20 transition-transform group-hover:scale-110"></div>
                <h4 className="text-xl font-black font-graduate uppercase tracking-tight mb-8">Export Compliance</h4>
                <div className="space-y-6">
                  {exportInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 hover:translate-x-1 transition-transform">
                      <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest font-graduate">{info.label}</span>
                      <span className="text-sm font-black text-white font-graduate">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              {/* Technical Specifications */}
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-white">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-3xl font-black text-slate-900 font-graduate uppercase tracking-tight italic">Technical Specification</h3>
                  <div className="h-[3px] bg-green-500 w-24"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  {specifications.map((spec, index) => (
                    <div key={index} className="group border-b border-slate-50 pb-6 last:md:border-0 hover:translate-x-2 transition-transform">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-graduate block mb-2">{spec.label}</span>
                      <span className="text-2xl font-fondamento italic text-slate-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications & Benefits */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-[40px] p-12 shadow-xl border border-white">
                  <div className="w-16 h-16 bg-green-50 rounded-[20px] flex items-center justify-center mb-8">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-graduate uppercase tracking-tight mb-8">Industrial Focus</h3>
                  <ul className="space-y-5">
                    {uses.map((use, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2.5 mr-6 flex-shrink-0 group-hover:scale-150 transition-all" />
                        <span className="text-slate-500 font-fondamento text-lg italic leading-relaxed">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-emerald-800 rounded-[40px] p-12 text-white shadow-xl relative overflow-hidden flex flex-col justify-end min-h-[400px]">
                  <div className="absolute top-12 left-12">
                    <Star className="h-20 w-20 text-white/10" />
                  </div>
                  <h3 className="text-4xl font-black font-graduate uppercase tracking-tighter leading-none mb-6">Quality First Commitment</h3>
                  <p className="font-fondamento italic text-xl opacity-80">
                    We ensure world-class standards for {name} with rigorous quality testing before every global shipment.
                  </p>
                </div>
              </div>
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

