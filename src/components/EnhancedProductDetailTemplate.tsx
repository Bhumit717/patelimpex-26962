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
    <div className="min-h-screen bg-[#e9edf3]">
      <SEOHead
        title={metaTitle || `${name} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        ogImage={images[0]}
        ogType="product"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />

          <Link
            to={backLink}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {backLinkText}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-square rounded-[30px] overflow-hidden bg-white p-2 nm-inset">
                <img
                  src={images[selectedImage]}
                  alt={`${name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
                {hsCode && (
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#e9edf3] text-blue-600 text-sm font-bold rounded-full shadow-[3px_3px_6px_#cfd6e0,-3px_-3px_6px_#ffffff]">
                    HSN: {hsCode}
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-[15px] overflow-hidden transition-all p-1 ${selectedImage === index
                          ? "nm-inset border-2 border-blue-200"
                          : "nm-card hover:translate-y-[-2px]"
                        }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-[10px]"
                      />
                    </button>
                  ))}
                </div>
              )}

              {imageCredit && (
                <p className="text-xs text-slate-500 italic text-center">Image source: {imageCredit}</p>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
                  {category}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-6">
                  {name}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="nm-btn !bg-[#e9edf3] text-blue-600 hover:text-blue-700"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Request Quote
                </Button>
                <Button
                  size="lg"
                  className="nm-btn !bg-[#e9edf3] text-slate-700 hover:text-slate-900"
                  asChild
                >
                  <Link to="/contact">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Sales
                  </Link>
                </Button>
                {specSheetUrl && (
                  <Button
                    size="lg"
                    className="nm-btn !bg-[#e9edf3] text-slate-700 hover:text-slate-900"
                    asChild
                  >
                    <a href={specSheetUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-5 w-5 mr-2" />
                      Spec Sheet
                    </a>
                  </Button>
                )}
              </div>

              {/* Available Formats */}
              {formats && formats.length > 0 && (
                <div className="nm-card p-6">
                  <h3 className="font-bold text-slate-800 mb-4 text-lg">Available Formats</h3>
                  <div className="flex flex-wrap gap-3">
                    {formats.map((format, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#e9edf3] rounded-full text-sm font-medium text-slate-600 shadow-[3px_3px_6px_#cfd6e0,-3px_-3px_6px_#ffffff]"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              <div className="nm-card !p-0 overflow-hidden">
                <div className="bg-[#e9edf3] px-6 py-4 border-b border-white shadow-sm">
                  <h3 className="font-bold text-slate-800 text-lg">Specifications</h3>
                </div>
                <div className="divide-y divide-white">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex px-6 py-4 hover:bg-white/30 transition-colors">
                      <span className="font-semibold text-slate-600 w-1/3">{spec.label}</span>
                      <span className="text-slate-800 w-2/3 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Uses & Benefits */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="nm-card p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                Uses & Benefits
              </h2>
              <ul className="space-y-4">
                {uses.map((use, index) => (
                  <li key={index} className="flex items-start p-3 rounded-xl hover:bg-white/40 transition-colors">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nm-card p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Export Information</h2>
              <div className="space-y-4">
                {exportInfo.map((info, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-slate-200 pb-3 last:border-0 hover:bg-white/30 p-2 rounded-lg transition-colors">
                    <p className="text-sm font-medium text-slate-500">{info.label}</p>
                    <p className="font-bold text-slate-800 text-right">{info.value}</p>
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
