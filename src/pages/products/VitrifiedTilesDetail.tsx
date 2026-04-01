import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import tileImg from "@/assets/products/grey-vitrified-tiles.png";

const VitrifiedTilesDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Tiles & Sanitaryware"
      name="Vitrified Tiles"
      description="Patel Impex exports premium-grade Indian Vitrified tiles globally. Sourced from the hub of Morbi, these tiles are known for their high gloss, low water absorption, and exceptional durability. Perfect for high-traffic commercial zones and luxury residential flooring."
      images={[tileImg]}
      hsCode="6907"
      specifications={[
        { label: "Origin", value: "Morbi, India" },
        { label: "Available Sizes", value: "600x600, 800x800, 600x1200 mm" },
        { label: "Water Absorption", value: "< 0.05%" },
        { label: "Surface Finish", value: "Glossy, Matt, Polished, Satin" },
        { label: "Thickness", value: "9mm, 10mm, 12mm" },
        { label: "Packaging", value: "Standard Corrugated Box with Wooden Pallets" },
      ]}
      uses={[
        "Commercial and Residential Flooring",
        "High-traffic public areas like Airports and Malls",
        "Wall cladding for luxury interiors",
        "Bathroom and Kitchen surfaces",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Middle East, USA, Europe, Africa" },
        { label: "Supply Ability", value: "20+ Containers per month" },
        { label: "Private Labeling", value: "Custom branding on boxes available" },
        { label: "Payment Terms", value: "T/T, L/C at sight" },
      ]}
      formats={["600x600 mm", "800x800 mm", "600x1200 mm", "Double Charge", "GVT", "PGVT"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Vitrified Tiles" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/tiles/gvt-pgvt"
      metaTitle="Vitrified Tiles Exporter India | Premium Floor & Wall | Patel Impex"
      metaDescription="High-quality Vitrified tiles in 600x600, 800x800, and 600x1200 sizes. Premium export grade from Morbi, India."
    />
  );
};

export default VitrifiedTilesDetail;
