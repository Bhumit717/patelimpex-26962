import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import cottonImg from "@/assets/products/cotton.png";

const CottonProductsPage = () => {
  const products = [
    { name: "Raw Cotton", image: cottonImg, link: "/products/cotton/raw-cotton", description: "Unprocessed cotton directly from farms" },
    { name: "Cotton Yarn", image: cottonImg, link: "/products/cotton/cotton-yarn", description: "Spun cotton yarn for textiles" },
    { name: "Comber Noil Cotton", image: cottonImg, link: "/products/cotton/comber-noil", description: "Short fiber cotton from combing process" },
    { name: "Cotton Carding Dropping", image: cottonImg, link: "/products/cotton/carding-dropping", description: "Cotton waste from carding machines" },
    { name: "Processed Cotton", image: cottonImg, link: "/products/cotton/processed", description: "Cleaned and processed cotton fiber" },
    { name: "Cotton Roving", image: cottonImg, link: "/products/cotton/roving", description: "Intermediate product before spinning" },
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Textiles & Fibers"
      title="Cotton Products"
      description="Patel Impex exports a complete range of cotton products including raw cotton, cotton yarn, and various cotton waste products for textile and industrial applications."
      products={products}
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Cotton" }]}
      canonicalUrl="/products/cotton"
      metaTitle="Cotton Exporter India | Raw Cotton & Yarn | Patel Impex"
      metaDescription="Leading cotton exporter from India. Raw cotton, yarn, comber noil, carding dropping. Premium quality for textile industries worldwide."
    />
  );
};

export default CottonProductsPage;
