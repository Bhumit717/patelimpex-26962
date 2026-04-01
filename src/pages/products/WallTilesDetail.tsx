import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import tileImg from "@/assets/products/decorative-wall-tiles.png";

const WallTilesDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Tiles & Sanitaryware"
      name="Ceramic Wall Tiles"
      description="Patel Impex exports designer ceramic wall tiles in multiple textures and sizes. Optimized for bathrooms and kitchens, offering patterns including digital prints, stone textures, and solid finishes."
      images={[tileImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Popular Sizes", value: "200x300, 300x450, 300x600 mm" },
        { label: "Type", value: "Ceramic / Digital Printed" },
        { label: "Surface Finish", value: "Glossy, Satin, Elevation, Punch" },
      ]}
      uses={[
        "Modern Bathroom Walls",
        "Kitchen Backsplashes",
        "Interior Accent Walls",
        "Exterior Building Elevation",
      ]}
      exportInfo={[
        { label: "Global Reach", value: "50+ Countries across Africa, Gulf, and Europe" },
        { label: "Packaging", value: "Standard Corrugated Box (Sea Worthy)" },
        { label: "Supply Chain", value: "Reliable logistics from Mundra Port" },
      ]}
      formats={["300x600 mm", "300x450 mm", "High Gloss", "Satin Matt"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Wall Tiles" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/digital-wall"
      metaTitle="Ceramic Wall Tiles Exporter India | Digital Printed | Patel Impex"
      metaDescription="Premium ceramic wall tiles for modern bathroom and kitchen designs. Large variety of digital printed and elevation tiles exported globally."
    />
  );
};

export default WallTilesDetail;
