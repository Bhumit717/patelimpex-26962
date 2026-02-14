import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import cottonCardingImg from "@/assets/products/cotton-carding.png";

const CottonCardingDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Textile"
      name="Cotton Carding Dropping"
      description="Cotton carding dropping is the byproduct obtained during the carding process in spinning mills. Patel Impex exports quality carding waste suitable for stuffing, insulation, and recycled fiber production."
      images={[cottonCardingImg]}
      hsCode="5202.91"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Maharashtra)" },
        { label: "Fiber Content", value: "Mixed short fibers" },
        { label: "Trash Content", value: "5-15%" },
        { label: "Moisture", value: "< 12%" },
        { label: "Color", value: "Off-White to Light Brown" },
        { label: "Form", value: "Loose/Pressed" },
        { label: "Packaging", value: "Pressed Bales (100-120 kg)" },
        { label: "Quality", value: "Mill Tested" },
      ]}
      uses={[
        "Stuffing for mattresses and cushions",
        "Insulation material production",
        "Recycled fiber manufacturing",
        "Paper and pulp industry",
        "Composite material production",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "China, Vietnam, Thailand, Turkey" },
        { label: "Supply Ability", value: "500+ MT per month" },
        { label: "Container Capacity", value: "22-24 MT per 20' FCL" },
        { label: "Pricing", value: "Competitive bulk rates" },
      ]}
      formats={["Clean Dropping", "Mixed Dropping", "Color Sorted"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cotton", href: "/products/cotton" },
        { label: "Cotton Carding Dropping" },
      ]}
      backLink="/products/cotton"
      backLinkText="Back to Cotton Products"
      canonicalUrl="/products/cotton-carding-dropping"
      metaTitle="Cotton Carding Dropping Exporter | Waste Cotton | Patel Impex"
      metaDescription="Export quality cotton carding dropping for industrial use. Ideal for stuffing, insulation, and recycled fiber production."
    />
  );
};

export default CottonCardingDetail;
