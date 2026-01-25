import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";

interface ProductVariety {
  name: string;
  image: string;
  link: string;
  description?: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface EnhancedProductCategoryTemplateProps {
  category: string;
  title: string;
  description: string;
  bannerImage?: string;
  products: ProductVariety[];
  breadcrumbs: BreadcrumbItem[];
  backLink?: string;
  backLinkText?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl: string;
}

const EnhancedProductCategoryTemplate = ({
  category,
  title,
  description,
  products,
  breadcrumbs,
  backLink = "/products",
  backLinkText = "Back to Products",
  metaTitle,
  metaDescription,
  canonicalUrl,
}: EnhancedProductCategoryTemplateProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: `https://patelimpex.com${canonicalUrl}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          url: `https://patelimpex.com${product.link}`,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#e9edf3]">
      <SEOHead
        title={metaTitle || `${title} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-24">
        {/* Header */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs.map(item => ({ ...item, href: item.href }))} />
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-[#e9edf3] rounded-full shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff] mb-6">
              <span className="text-blue-600 text-sm font-semibold">{category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">{title}</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{description}</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-blue-600">Our {title} Range</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group nm-card !p-0 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100 p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">{product.description}</p>
                  )}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnhancedProductCategoryTemplate;
