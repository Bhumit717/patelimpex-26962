import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ProductVariety {
  name: string;
  image: string;
  link: string;
  description?: string;
}

interface ProductCategoryTemplateProps {
  category: string;
  title: string;
  description: string;
  bannerImage?: string;
  products: ProductVariety[];
  backLink?: string;
  backLinkText?: string;
}

const ProductCategoryTemplate = ({
  category,
  title,
  description,
  products,
  backLink = "/#products",
  backLinkText = "Back to Products",
}: ProductCategoryTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <div className="bg-accent-ink py-16">
          <div className="container mx-auto px-4">
            <Link 
              to={backLink} 
              className="inline-flex items-center text-[hsl(var(--paper))]/80 hover:text-[hsl(var(--paper))] mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {backLinkText}
            </Link>
            <p className="text-accent-ink text-sm mb-2">{category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--paper))] mb-4">{title}</h1>
            <p className="text-xl text-accent-ink max-w-3xl">{description}</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Our {title} Range</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-card rounded-2xl overflow-hidden  hover: transition-all duration-500 hover:-translate-y-2 border border-border"
              >
                <div className="relative h-48 overflow-hidden bg-accent-ink p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent-ink transition-colors">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                  )}
                  <div className="flex items-center text-accent-ink font-semibold group-hover:text-accent-ink">
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

export default ProductCategoryTemplate;

