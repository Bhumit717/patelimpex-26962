import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import ir64ParboiledImg from "@/assets/products/ir64-parboiled-rice.png";

const IR64ParboiledRiceDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Agricultural Products"
      name="IR64 Parboiled Rice"
      description="IR64 Parboiled Rice is a popular non-basmati variety known for its excellent cooking quality and nutritional value. The parboiling process gelatinizes starch, resulting in firmer grains that don't stick together."
      images={[ir64ParboiledImg]}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Andhra Pradesh, Tamil Nadu)" },
        { label: "Grain Length", value: "6.0-6.5mm (Medium)" },
        { label: "Grain Type", value: "Parboiled" },
        { label: "Color", value: "Light Yellow" },
        { label: "Moisture", value: "< 14%" },
        { label: "Broken", value: "5%, 15%, 25%, 100%" },
        { label: "Packaging", value: "25kg, 50kg PP bags" },
        { label: "Certifications", value: "FSSAI, ISO, SGS" },
      ]}
      uses={[
        "Daily staple food consumption",
        "Institutional bulk cooking",
        "Food processing industry",
        "Rice flour production",
        "Animal feed (broken grades)",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Africa, Bangladesh, Sri Lanka" },
        { label: "Supply Ability", value: "5000+ MT per month" },
        { label: "Container Capacity", value: "27 MT per 20' FCL" },
        { label: "Pricing", value: "Competitive bulk rates" },
      ]}
      formats={["5% Broken", "15% Broken", "25% Broken", "100% Broken"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Rice", href: "/products/rice" },
        { label: "IR64 Parboiled" },
      ]}
      backLink="/products/rice"
      backLinkText="Back to Rice Products"
      canonicalUrl="/products/ir64-parboiled-rice"
      metaTitle="IR64 Parboiled Rice Exporter India | Non-Basmati | Patel Impex"
      metaDescription="Export quality IR64 Parboiled Rice for African and Asian markets. Competitive pricing, bulk supply. 5% to 100% broken grades."
    />
  );
};

export default IR64ParboiledRiceDetail;
