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
    <div className="min-h-screen bg-[#f8fafc]">
      <SEOHead
        title={metaTitle || `${title} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="pt-32">
        {/* Header */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbs.map(item => ({ ...item, href: item.href }))} />
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-slate-50 rounded-full border border-slate-100 mb-8">
              <span className="text-green-600 text-[10px] font-bold uppercase tracking-[0.2em] font-graduate">{category}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tighter">
              {title}
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-fondamento italic leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-24">
          <div className="flex items-center mb-16 space-x-4">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h2 className="text-2xl font-black text-slate-900 font-graduate uppercase tracking-tight">Our <span className="text-green-600 font-fredericka tracking-tight lowercase">{title}</span> Range</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group relative nm-card !p-0 overflow-hidden hover:-translate-y-3 transition-all duration-500 bg-white"
              >
                <div className="relative h-64 overflow-hidden bg-slate-50 p-10 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 font-graduate uppercase tracking-tight group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-slate-500 font-fondamento text-lg italic mb-8 line-clamp-2 leading-relaxed">{product.description}</p>
                  )}
                  <div className="flex items-center text-green-600 font-graduate font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                    <span>Explore Specifications</span>
                    <ArrowRight className="h-4 w-4 ml-4" />
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
