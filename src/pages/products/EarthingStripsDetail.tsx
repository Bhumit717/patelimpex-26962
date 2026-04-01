import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import giCopperStripsImg from "@/assets/products/copper-strips-braided.png";

const EarthingStripsDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="GI & Copper Earthing Strips"
      description="Patel Impex exports high-purity flat conductores for extensive grounding networks. Our range covers both Hot-Dip GI and high-conductivity copper strips for diverse industrial safety requirements."
      images={[giCopperStripsImg]}
      hsCode="7308"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Types", value: "Hot-Dip GI / Bare Copper / Tinned Copper" },
        { label: "Thickness", value: "3mm, 6mm, 10mm" },
        { label: "Width", value: "25mm, 32mm, 50mm, 75mm" },
        { label: "Coating (GI)", value: "80-100 Microns" },
      ]}
      uses={[
        "Grounding grid mesh for power stations",
        "Conduit grounding for factories",
        "Lightning protection bonding",
      ]}
      exportInfo={[
        { label: "Customization", value: "Custom widths and specific lengths" },
        { label: "Durability", value: "Engineered for 20+ years service" },
      ]}
      formats={["25x3 mm GI", "50x6 mm GI", "25x3 mm Copper"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "Earthing Strips" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/strips"
      metaTitle="Earthing Strips Exporter India | GI & Copper Falt Bars | Patel Impex"
      metaDescription="Hot-dip galvanized and pure copper earthing strips for industrial safe grounding grids. High quality flat bars exported from India."
    />
  );
};

export default EarthingStripsDetail;
