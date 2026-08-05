import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import goldenSellaImg from "@/assets/products/golden-sella-rice.png";
import whiteSellaImg from "@/assets/products/white-sella-rice.png";
import steamBasmatiImg from "@/assets/products/steam-basmati-rice.png";
import ir64ParboiledImg from "@/assets/products/ir64-parboiled-rice.png";
import ir64RawImg from "@/assets/products/ir64-raw-rice.png";
import sonaMasooriImg from "@/assets/products/sona-masoori-rice.png";

const RiceProductsPage = () => {
  const products = [
    { name: "1121 Golden Sella Basmati Rice", image: goldenSellaImg, link: "/products/golden-sella-basmati-rice-1121", description: "Premium parboiled basmati with golden hue" },
    { name: "1121 White Sella Basmati Rice", image: whiteSellaImg, link: "/products/white-sella-basmati-rice-1121", description: "Creamy white parboiled basmati" },
    { name: "1121 Steam Basmati Rice", image: steamBasmatiImg, link: "/products/steam-basmati-rice-1121", description: "Steam processed premium basmati" },
    { name: "IR64 Parboiled Rice", image: ir64ParboiledImg, link: "/products/ir64-parboiled-rice", description: "Non-basmati parboiled variety" },
    { name: "IR64 Raw Rice", image: ir64RawImg, link: "/products/ir64-raw-rice", description: "Non-basmati white rice" },
    { name: "Sona Masoori Rice", image: sonaMasooriImg, link: "/products/sona-masoori-rice", description: "Lightweight South Indian variety" },
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
