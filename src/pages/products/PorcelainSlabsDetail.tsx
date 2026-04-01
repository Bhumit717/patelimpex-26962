import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import slabsImg from "@/assets/products/marble-tiles-white.png";

const PorcelainSlabsDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Construction & Industrial"
      name="Large Format Porcelain Slabs"
      description="Patel Impex exports expansive porcelain slabs in sizes up to 1200x2400 mm. These high-tech slabs allow for continuous surfaces on kitchen countertops, wall claddings, and commercial flooring with minimal joints."
      images={[slabsImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Available Sizes", value: "800x1600, 1200x2400, 1200x3200 mm" },
        { label: "Thickness", value: "6mm (Slim), 9mm, 12mm" },
        { label: "Body Type", value: "Porcelain / Color Body" },
        { label: "Edge", value: "Rectified / Perfectly Straight" },
      ]}
      uses={[
        "Modern Kitchen Countertops",
        "Continuous Bathroom Surfaces",
        "Large Floor Areas without Joints",
        "Furniture Tops & Table Tops",
      ]}
      exportInfo={[
        { label: "Handling", value: "Specialized Large Frame Pallets" },
        { label: "Strength", value: "High Breaking Strength for large dimensions" },
      ]}
      formats={["800x1600 mm", "1200x2400 mm", "Calacatta Style", "Statuario Style"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Slabs" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/slabs"
      metaTitle="Large Format Porcelain Slabs Exporter India | Luxury Surfaces | Patel Impex"
      metaDescription="Seamless architecture with large format porcelain slabs. Sizes 800x1600 and 1200x2400 exported globally from Morbi, India."
    />
  );
};

export default PorcelainSlabsDetail;
