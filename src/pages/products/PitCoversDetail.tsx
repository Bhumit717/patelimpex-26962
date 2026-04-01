import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import pitCoversImg from "@/assets/products/earth-pit-covers.png";

const PitCoversDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="Earth Pit Covers"
      description="Patel Impex exports high-strength pit covers in Polypropylene (PP) and Cast Iron (CI) to protect earthing electrode terminals and allow easy access for testing."
      images={[pitCoversImg]}
      hsCode="7326"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Material", value: "Heavy-Duty Polypropylene / Cast Iron" },
        { label: "Load Capacity", value: "Up to 10 Tons (CI)" },
        { label: "Diameter", value: "250mm, 350mm" },
        { label: "Height", value: "250mm, 300mm" },
      ]}
      uses={[
        "Protection of earthing electrode heads",
        "Safe access point for resistivity testing",
        "Flush-mounting in paved areas & gardens",
      ]}
      exportInfo={[
        { label: "Weather Shield", value: "UV and Impact Resistant" },
        { label: "Color", value: "Green / Black (Customized)" },
      ]}
      formats={["PP Round", "CI Square", "Medium Duty", "Heavy Duty"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "Pit Covers" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/pit-covers"
      metaTitle="Earth Pit Covers Exporter India | PP & Cast Iron | Patel Impex"
      metaDescription="Durable protective covers for grounding electrodes. Safe access for electrical maintenance. High quality exported from India."
    />
  );
};

export default PitCoversDetail;
