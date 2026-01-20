import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import ir64RawImg from "@/assets/products/ir64-raw-rice.png";

const IR64RawRiceDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Agricultural Products"
      name="IR64 Raw Rice"
      description="IR64 Raw Rice is a widely consumed non-basmati white rice variety. Known for its soft texture after cooking and neutral taste, it's perfect for daily consumption and various rice-based preparations."
      images={[ir64RawImg]}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Andhra Pradesh, Telangana)" },
        { label: "Grain Length", value: "6.0-6.5mm (Medium)" },
        { label: "Grain Type", value: "Raw (White Polished)" },
        { label: "Color", value: "Pure White" },
        { label: "Moisture", value: "< 14%" },
        { label: "Broken", value: "5%, 15%, 25%" },
        { label: "Packaging", value: "25kg, 50kg PP bags" },
        { label: "Certifications", value: "FSSAI, ISO" },
      ]}
      uses={[
        "Daily staple consumption",
        "Restaurant and hotel use",
        "Idli and dosa batter",
        "Rice flour manufacturing",
        "Export to price-sensitive markets",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Africa, Middle East, SE Asia" },
        { label: "Supply Ability", value: "4000+ MT per month" },
        { label: "Container Capacity", value: "27 MT per 40' FCL" },
        { label: "Payment Terms", value: "LC, TT" },
      ]}
      formats={["5% Broken", "15% Broken", "25% Broken", "Sortex"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Rice", href: "/products/rice" },
        { label: "IR64 Raw" },
      ]}
      backLink="/products/rice"
      backLinkText="Back to Rice Products"
      canonicalUrl="/products/ir64-raw-rice"
      metaTitle="IR64 Raw Rice Exporter India | White Rice | Patel Impex"
      metaDescription="Export quality IR64 Raw White Rice. Non-basmati variety for African and Asian markets. Competitive bulk pricing."
    />
  );
};

export default IR64RawRiceDetail;
