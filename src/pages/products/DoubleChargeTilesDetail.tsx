import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import doubleChargeImg from "@/assets/products/stone-look-tiles.png";

const DoubleChargeTilesDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Tiles & Sanitaryware"
      name="Double Charge Vitrified Tiles"
      description="Patel Impex exports premium Double Charge Vitrified Tiles, known for their exceptional durability and long-lasting shine. These tiles feature two layers of pigment, making them ideal for high-traffic areas."
      images={[doubleChargeImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Thickness", value: "10mm, 12mm" },
        { label: "Sizes", value: "600x600, 800x800 mm" },
        { label: "Finish", value: "Super Glossy" },
        { label: "Durability", value: "Highest in Vitrified Range" },
      ]}
      uses={[
        "Commercial Flooring",
        "Public High-Traffic Zones",
        "Hotel Lobbies",
        "Residential Living Rooms",
      ]}
      exportInfo={[
        { label: "Packaging", value: "Standard Export Quality Corrugated Box" },
        { label: "Loading", value: "20ft FCL Bulk Loading" },
      ]}
      formats={["600x600 mm", "800x800 mm", "Premium White", "Tropicana Series"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Double Charge" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/double-charge"
      metaTitle="Double Charge Vitrified Tiles Exporter India | Heavy Duty | Patel Impex"
      metaDescription="Durable double layer pigment vitrified tiles for high traffic areas. Exporting premium 600x600 and 800x800 sizes from India."
    />
  );
};

export default DoubleChargeTilesDetail;
