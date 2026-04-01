import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import earthingClampsImg from "@/assets/products/u-bolt-earthing-clamps.png";

const EarthingAccessoriesDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="Earthing Clamps & Accessories"
      description="Patel Impex exports precision-engineered grounding clamps and accessories for safe electrical installations. Our range includes C-Clamps, U-Bolts, Rod-to-Tape Clamps, and Coupling Connectors built for high-conductivity."
      images={[earthingClampsImg]}
      hsCode="7326"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Clamp Types", value: "C-Clamp, U-Bolt, G-Clamp, Rebar Clamp" },
        { label: "Material", value: "Brass, Copper, Gun Metal, Stainless Steel" },
      ]}
      uses={[
        "Safety connection between rods and cables",
        "Lightning protection bonding",
        "Electrical panel earthing",
      ]}
      exportInfo={[
        { label: "Global Presence", value: "Exported to Asia, Europe, and GCC" },
        { label: "Compliance", value: "BS EN 62561-1 standards" },
      ]}
      formats={["Brass Clamps", "Copper Clamps", "U-Bolts", "Couplers"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "Earthing Accessories" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/accessories"
      metaTitle="Earthing Clamps & Accessories Exporter | Brass & Copper | Patel Impex"
      metaDescription="Comprehensive range of earthing clamps and accessories for industrial safety. High-conductivity and durable grounding components exported from India."
    />
  );
};

export default EarthingAccessoriesDetail;
