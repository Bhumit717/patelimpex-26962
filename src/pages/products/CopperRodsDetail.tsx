import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import copperRodsImg from "@/assets/products/copper-bonded-earthing-rods.png";

const CopperRodsDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="Copper Bonded Grounding Rods"
      description="Patel Impex exports high-tensile steel core rods with electrolytic molecular bonding of high-purity copper. Exceptional conductivity and corrosion resistance over decades of service."
      images={[copperRodsImg]}
      hsCode="7215.90"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Core Material", value: "Low Carbon Steel (High Tensile)" },
        { label: "Copper Coating", value: "High Grade Electrolytic Copper" },
        { label: "Coating Thickness", value: "100 - 250 Microns (Standard & Custom)" },
      ]}
      uses={[
        "Substations and Power Plants",
        "Telecommunication Towers",
        "Lightning Protection Systems",
      ]}
      exportInfo={[
        { label: "Reliability", value: "UL Listed and Compliant with IEEE 80 Standards" },
        { label: "Installation", value: "Deep driven into the soil for low resistance" },
      ]}
      formats={["100 Microns", "250 Microns", "12mm Diameter", "17mm Diameter"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "Copper Rods" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/copper-rods"
      metaTitle="Copper Bonded Grounding Rods Exporter | Patel Impex India"
      metaDescription="Premium copper bonded grounding rods with 100-250 micron coating. Exceptional durability for electrical safety. Exporting from India."
    />
  );
};

export default CopperRodsDetail;
