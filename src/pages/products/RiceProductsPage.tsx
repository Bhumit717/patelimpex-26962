import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import riceImg from "@/assets/products/rice.png";

const RiceProductsPage = () => {
  const products = [
    { name: "1121 Golden Sella Basmati Rice", image: riceImg, link: "/products/rice/golden-sella-1121", description: "Premium parboiled basmati with golden hue" },
    { name: "1121 White Sella Basmati Rice", image: riceImg, link: "/products/rice/white-sella-1121", description: "Creamy white parboiled basmati" },
    { name: "1121 Steam Basmati Rice", image: riceImg, link: "/products/rice/steam-1121", description: "Steam processed premium basmati" },
    { name: "IR64 Parboiled Rice", image: riceImg, link: "/products/rice/ir64-parboiled", description: "Non-basmati parboiled variety" },
    { name: "IR64 Raw Rice", image: riceImg, link: "/products/rice/ir64-raw", description: "Non-basmati white rice" },
    { name: "Sona Masoori Rice", image: riceImg, link: "/products/rice/sona-masoori", description: "Lightweight South Indian variety" },
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Agricultural Products"
      title="Rice Products"
      description="Patel Impex exports premium-quality Rice products including Basmati and Non-Basmati varieties to global markets. Our range is carefully sourced from trusted farmers and processed under strict international quality standards."
      products={products}
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Rice" }]}
      canonicalUrl="/products/rice"
      metaTitle="Rice Exporter India | Basmati & Non-Basmati | Patel Impex"
      metaDescription="Leading rice exporter from India. Premium basmati & non-basmati varieties. 1121, IR64, Sona Masoori. Bulk supply to 50+ countries."
    />
  );
};

export default RiceProductsPage;
