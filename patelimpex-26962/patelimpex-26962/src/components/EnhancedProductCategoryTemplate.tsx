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
    <div className="min-h-screen bg-background">
      <SEOHead
        title={metaTitle || `${title} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        jsonLd={jsonLd}
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
          <div className="container mx-auto px-4">
            <div className="text-white mb-4">
              <Breadcrumbs items={breadcrumbs.map(item => ({ ...item, href: item.href }))} />
            </div>
            <p className="text-blue-100 text-sm mb-2">{category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">{description}</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our {title} Range</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white rounded-[50px] overflow-hidden shadow-[0_5px_15px_rgba(59,130,246,0.15)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.25)] transition-all duration-500 hover:-translate-y-2 border border-transparent"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
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
