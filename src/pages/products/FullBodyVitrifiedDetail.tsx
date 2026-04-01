import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import fullBodyImg from "@/assets/products/marble-tiles-white.png";

const FullBodyVitrifiedDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Tiles & Sanitaryware"
      name="Full Body Vitrified Tiles"
      description="Patel Impex exports premium Full Body Vitrified Tiles, where the color and pattern are consistent throughout the entire thickness of the tile. This ensures that even in cases of heavy chipping or wear, the appearance remains unaltered, making them the ultimate choice for industrial and heavy-duty commercial projects."
      images={[fullBodyImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Thickness", value: "10mm, 12mm, 16mm" },
        { label: "Sizes", value: "600x600, 600x1200 mm" },
        { label: "Water Absorption", value: "Less than 0.05%" },
        { label: "Mohs Hardness", value: "7+" },
      ]}
      uses={[
        "Industrial Flooring",
        "Airport Terminals",
        "Railway Stations",
        "Heavy Traffic Corridors",
        "External Walkways",
      ]}
      exportInfo={[
        { label: "Packaging", value: "Heavy-duty Export Corrugated Pallets" },
        { label: "Loading", value: "20ft FCL Containerized" },
        { label: "Min Order", value: "1x20ft FCL" },
      ]}
      formats={["Solid Colors", "Salt-Pepper Pattern", "Technical Unglazed Finish"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Full Body" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/full-body"
      metaTitle="Full Body Vitrified Tiles Exporter India | Industrial Grade | Patel Impex"
      metaDescription="Leading exporter of Indian full body vitrified tiles. Uniform color through the entire tile thickness for heavy-duty industrial and commercial use."
    />
  );
};

export default FullBodyVitrifiedDetail;
