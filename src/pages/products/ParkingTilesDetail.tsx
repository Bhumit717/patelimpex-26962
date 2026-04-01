import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import parkingTilesImg from "@/assets/products/patterned-ceramic-tiles.png";

const ParkingTilesDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Construction & Industrial"
      name="Heavy-Duty Parking Tiles"
      description="Patel Impex exports high-strength parking tiles specifically designed for vehicular loads and harsh outdoor environments. Our 12mm thickness tiles provide high P.E.I. rating and excellent anti-skid properties."
      images={[parkingTilesImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Thickness", value: "12mm (Heavy Duty)" },
        { label: "Surface Finish", value: "Anti-Skid / Punch Texture" },
        { label: "Sizes", value: "300x300, 400x400 mm" },
      ]}
      uses={[
        "Residential Garages",
        "Commercial Parking Batches",
        "Patios and Walkways",
        "Industrial Floors",
      ]}
      exportInfo={[
        { label: "Weight Support", value: "8+ Tons static load" },
        { label: "Frost Resistance", value: "Certified for colder climates" },
      ]}
      formats={["300x300 mm", "400x400 mm", "Matte Finish", "Punch Design"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Parking Tiles" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/parking"
      metaTitle="Heavy-Duty Parking Tiles Exporter India | Anti-Skid Outdoor | Patel Impex"
      metaDescription="High-tensile outdoor parking tiles with 12mm thickness. Anti-skid surface for vehicular and pedestrian safety. Durable export grade from Morbi."
    />
  );
};

export default ParkingTilesDetail;
