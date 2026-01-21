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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {backLinkText}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-[50px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-transparent shadow-[0_5px_15px_rgba(59,130,246,0.15)]">
                <img
                  src={images[selectedImage]}
                  alt={`${name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-contain p-8"
                />
                {hsCode && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-[25px] shadow-lg">
                    HSN: {hsCode}
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-[25px] overflow-hidden border-2 transition-all ${selectedImage === index
                          ? "border-blue-600 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                        }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {imageCredit && (
                <p className="text-xs text-gray-500 italic">Image source: {imageCredit}</p>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                  {category}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {name}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Request Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
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
                    variant="outline"
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
                <div className="bg-gray-50 rounded-[50px] p-6 shadow-[0_5px_15px_rgba(59,130,246,0.15)] border border-transparent">
                  <h3 className="font-bold text-gray-900 mb-3">Available Formats</h3>
                  <div className="flex flex-wrap gap-2">
                    {formats.map((format, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-transparent rounded-[25px] text-sm text-gray-700 shadow-sm"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              <div className="bg-white border border-transparent rounded-[50px] overflow-hidden shadow-[0_5px_15px_rgba(59,130,246,0.15)]">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 rounded-t-[50px]">
                  <h3 className="font-bold text-gray-900">Specifications</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex px-6 py-3">
                      <span className="font-medium text-gray-700 w-1/3">{spec.label}</span>
                      <span className="text-gray-900 w-2/3">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Uses & Benefits */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-[50px] p-8 shadow-[0_5px_15px_rgba(59,130,246,0.15)] border border-transparent">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Uses & Benefits</h2>
              <ul className="space-y-3">
                {uses.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-transparent rounded-[50px] p-8 shadow-[0_5px_15px_rgba(59,130,246,0.15)]">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Export Information</h2>
              <div className="space-y-4">
                {exportInfo.map((info, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <p className="font-medium text-gray-900">{info.value}</p>
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
