import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import lightningArresterImg from "@/assets/products/earthing-terminal-rod.png";

const LightningArresterDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="Lightning Protection Rods"
      description="Patel Impex exports high-tech Lightning Arresters including Early Streamer Emission (ESE) and Conventional Spikes for building safety. Designed to safely capture and divert lightning surges."
      images={[lightningArresterImg]}
      hsCode="8535.90"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Type", value: "Conventional / ESE (Early Streamer)" },
        { label: "Material", value: "Pure Copper / Copper Bonded / Stainless Steel" },
        { label: "Spike Number", value: "5-Prong, 3-Prong, Single Tip" },
      ]}
      uses={[
        "High-Rise Residential Buildings",
        "Industrial Sheds and Factories",
        "Telecommunication Towers",
      ]}
      exportInfo={[
        { label: "Coverage", value: "ESE - 45m to 120m Protection Radius" },
        { label: "Standards", value: "NFC 17-102 Compliant" },
      ]}
      formats={["ESE Active", "5 Prong Spike", "Pure Copper", "Steel Arrester"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "Lightning Arrester" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/lightning-arresters"
      metaTitle="Lightning Arrester Exporter India | ESE & Conventional | Patel Impex"
      metaDescription="Advanced lightning protection systems for building safety. ESE active rods and conventional spikes exported globally from India."
    />
  );
};

export default LightningArresterDetail;
