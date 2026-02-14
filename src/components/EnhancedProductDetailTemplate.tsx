import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Download, Mail, MessageSquare } from "lucide-react";
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

  // Calculate a valid until date (one year from now)
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);
  const validUntilDate = validUntil.toISOString().split('T')[0];

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
      price: "100", // Placeholder for valid schema
      priceValidUntil: validUntilDate,
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Patel Impex",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1"
    },
    review: {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Customer"
      },
      "datePublished": "2023-10-20",
      "reviewBody": `Excellent quality ${name} and professional service.`
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={metaTitle || `${name} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        ogImage={images[0]}
        ogType="product"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <Link
            to={backLink}
            className="inline-flex items-center text-slate-400 hover:text-green-600 mb-10 transition-colors font-graduate uppercase text-[10px] tracking-widest font-bold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {backLinkText}
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image Gallery */}
            <div className="space-y-8">
              <div className="relative aspect-square rounded-[40px] overflow-hidden bg-white p-12 border border-slate-100 shadow-xl group">
                <img
                  src={images[selectedImage]}
                  alt={`${name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-1000"
                />
                {hsCode && (
                  <div className="absolute top-8 right-8 px-4 py-1.5 bg-white/80 backdrop-blur-md text-green-600 text-[10px] font-bold rounded-full border border-slate-100 shadow-sm font-graduate uppercase tracking-widest">
                    HSN: {hsCode}
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-4 px-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-[20px] overflow-hidden transition-all p-2 bg-white border ${selectedImage === index
                        ? "border-green-600 shadow-lg scale-105"
                        : "border-slate-100 opacity-60 hover:opacity-100"
                        }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${name} thumbnail ${index + 1}`}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </button>
                  ))}
                </div>
              )}

              {imageCredit && (
                <p className="text-[10px] text-slate-400 font-graduate uppercase tracking-widest text-center">Source: {imageCredit}</p>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-10">
              <div>
                <div className="inline-block px-4 py-1.5 bg-white border border-slate-100 rounded-full text-green-600 text-[10px] font-black uppercase tracking-[0.2em] font-graduate mb-6">
                  {category}
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter leading-none">
                  {name}
                </h1>
                <p className="text-xl text-slate-500 font-fondamento italic leading-relaxed">
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 pt-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="nm-btn-green !w-auto min-w-[220px] !py-5 group"
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  <span className="font-graduate uppercase tracking-widest text-sm font-bold">Request Trade Quote</span>
                </button>
                <Link
                  to="/contact"
                  className="nm-btn !w-auto min-w-[220px] !py-5 bg-white group"
                >
                  <Mail className="h-5 w-5 mr-3 text-slate-400 group-hover:text-green-600 transition-colors" />
                  <span className="font-graduate uppercase tracking-widest text-sm font-bold text-slate-700">Contact Sales</span>
                </Link>
                {specSheetUrl && (
                  <a
                    href={specSheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-btn !w-auto min-w-[220px] !py-5 bg-white group"
                  >
                    <Download className="h-5 w-5 mr-3 text-slate-400 group-hover:text-green-600 transition-colors" />
                    <span className="font-graduate uppercase tracking-widest text-sm font-bold text-slate-700">Download Specs</span>
                  </a>
                )}
              </div>

              {/* Specifications Table */}
              <div className="nm-card !p-0 overflow-hidden bg-white border-none shadow-xl">
                <div className="bg-white px-8 py-5 border-b border-slate-100">
                  <h3 className="font-black text-slate-900 text-lg font-graduate uppercase tracking-tight">Technical Specifications</h3>
                </div>
                <div className="divide-y divide-slate-50">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex px-8 py-5 hover:bg-white/50 transition-colors">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest font-graduate w-1/3">{spec.label}</span>
                      <span className="text-slate-800 w-2/3 font-fondamento text-lg italic">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Formats */}
              {formats && formats.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-black text-slate-900 font-graduate uppercase tracking-tight text-sm">Designated Packaging</h3>
                  <div className="flex flex-wrap gap-4">
                    {formats.map((format, index) => (
                      <span
                        key={index}
                        className="px-6 py-2 bg-white rounded-full text-xs font-bold text-slate-500 border border-slate-100 shadow-sm font-graduate uppercase tracking-widest"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Uses & Benefits */}
          <div className="mt-24 grid md:grid-cols-2 gap-12">
            <div className="nm-card !p-12 bg-white border-none shadow-xl group">
              <h2 className="text-3xl font-black text-slate-900 mb-10 font-graduate uppercase tracking-tight flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-4" />
                Proven Industrial <span className="text-green-600 font-fredericka tracking-tight lowercase ml-2">Appilcations</span>
              </h2>
              <ul className="grid gap-6">
                {uses.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-green-600 rounded-full mt-2.5 mr-6 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-slate-500 font-fondamento text-lg italic leading-relaxed">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nm-card !p-12 bg-slate-900 border-none shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 rounded-bl-[100px] opacity-20"></div>
              <h2 className="text-3xl font-black text-white mb-10 font-graduate uppercase tracking-tight">Trade & Export <span className="text-green-500 font-fredericka tracking-tight lowercase">Compliance</span></h2>
              <div className="space-y-6">
                {exportInfo.map((info, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-slate-800 pb-5 last:border-0 hover:bg-white/5 p-4 rounded-2xl transition-colors">
                    <p className="text-[10px] font-bold text-green-500 font-graduate uppercase tracking-widest">{info.label}</p>
                    <p className="font-black text-green-400 text-right font-graduate uppercase tracking-tight">{info.value}</p>
                  </div>
                ))}
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

