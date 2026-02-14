import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import rawCottonImg from "@/assets/products/raw-cotton.png";
import cottonYarnImg from "@/assets/products/cotton-yarn.png";
import comberNoilImg from "@/assets/products/comber-noil-cotton.png";
import cottonCardingImg from "@/assets/products/cotton-carding.png";
import processedCottonImg from "@/assets/products/processed-cotton.png";
import cottonRovingImg from "@/assets/products/cotton-roving.png";

const CottonProductsPage = () => {
  const products = [
    { name: "Raw Cotton", image: rawCottonImg, link: "/products/raw-cotton", description: "Unprocessed cotton fiber sourced from Gujarat, MP, Maharashtra" },
    { name: "Cotton Yarn", image: cottonYarnImg, link: "/products/cotton-yarn", description: "High-quality spun cotton yarn for textile manufacturing" },
    { name: "Comber Noil Cotton", image: comberNoilImg, link: "/products/comber-noil-cotton", description: "Short fiber cotton waste used in industrial applications" },
    { name: "Cotton Carding Dropping", image: cottonCardingImg, link: "/products/cotton-carding-dropping", description: "Byproduct of cotton carding for stuffing and insulation" },
    { name: "Processed Cotton", image: processedCottonImg, link: "/products/processed-cotton", description: "Clean, processed cotton ready for spinning" },
    { name: "Cotton Roving", image: cottonRovingImg, link: "/products/cotton-roving", description: "Semi-processed cotton strand ready for spinning into yarn" },
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

