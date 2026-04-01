import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import elevationImg from "@/assets/products/elevation-wall-tiles.png";

const ElevationTilesDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Construction & Industrial"
      name="3D Elevation Wall Tiles"
      description="Patel Impex exports artistic 3D textured elevation tiles for modern building exteriors and internal feature walls. These tiles mimic natural stone, wood, and concrete patterns with premium finishing."
      images={[elevationImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Surface Texture", value: "3D Molded / High Relief" },
        { label: "Material", value: "Ceramic / Porcelen" },
        { label: "Sizes", value: "300x450, 300x600 mm" },
      ]}
      uses={[
        "Building Exterior Elevation",
        "Accent Walls in Living Rooms",
        "Entrance Foyer Decoration",
        "Garden Walls & Boundaries",
      ]}
      exportInfo={[
        { label: "Packaging", value: "Corrugated Box with high-impact protection" },
        { label: "Variety", value: "100+ Designs in Stone, Wood & Abstract" },
      ]}
      formats={["Stone Texture", "Wood Texture", "Brick Series", "Abstract Design"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Elevation Tiles" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/elevation"
      metaTitle="3D Elevation Wall Tiles Exporter India | Stone Textured | Patel Impex"
      metaDescription="Premium exterior elevation tiles with realistic 3D textures. Stone, wood and abstract designs for modern architectural facades."
    />
  );
};

export default ElevationTilesDetail;
