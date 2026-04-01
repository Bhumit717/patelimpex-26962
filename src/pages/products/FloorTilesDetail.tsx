import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import floorTilesImg from "@/assets/products/ceramic-floor-tiles.png";

const FloorTilesDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Tiles & Sanitaryware"
      name="Ceramic Floor Tiles"
      description="Patel Impex exports high-purity ceramic floor tiles, perfect for low-to-medium traffic residential and office spaces. Our floor range includes slip-resistant and anti-skid finishes."
      images={[floorTilesImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Available Sizes", value: "300x300, 400x400 mm" },
        { label: "Material", value: "Ceramic / Red Body" },
        { label: "Surface Finish", value: "Matt, Anti-Skid, Satin" },
      ]}
      uses={[
        "Residential Bed and Living Rooms",
        "Home Kitchen and Utility Areas",
        "Porches and Balconies",
      ]}
      exportInfo={[
        { label: "Packaging", value: "Seaworthy packing with corner protectors" },
        { label: "Loading Capacity", value: "Standard 20ft container" },
      ]}
      formats={["300x300 mm", "400x400 mm", "Matt Finish", "Anti-Skid"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Floor Tiles" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/floor"
      metaTitle="Ceramic Floor Tiles Exporter India | Anti-Skid Finish | Patel Impex"
      metaDescription="Durable and high-aesthetic ceramic floor tiles for residential and commercial use. Exporting globally from Morbi, India."
    />
  );
};

export default FloorTilesDetail;
