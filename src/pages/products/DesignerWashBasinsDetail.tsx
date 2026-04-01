import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import basinImg from "@/assets/products/bathroom-sinks-modern.png";

const DesignerWashBasinsDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Tiles & Sanitaryware"
      name="Designer Wash Basins"
      description="Patel Impex exports a premium collective of designer wash basins from the ceramic hub of India. Our range includes exotic table-top patterns, pedestal basins, and space-saving wall-hung models with high-grade glaze and contemporary aesthetics."
      images={[basinImg]}
      hsCode="6910"
      specifications={[
        { label: "Material", value: "Fine Ceramic / Vitreous China" },
        { label: "Surface Finish", value: "High Gloss White, Matte, Printed Patterns" },
        { label: "Types", value: "Table Top, Wall Hung, Pedestal, Integrated" },
        { label: "Durability", value: "Scratch-resistant, Staining-proof" },
        { label: "Packaging", value: "7-Ply Corrugated Box with Foam Protection" }
      ]}
      uses={[
        "Luxury Residential Bathrooms",
        "Commercial Restrooms & Hotels",
        "Hospitality Projects",
        "Designer Powder Rooms"
      ]}
      exportInfo={[
        { label: "Major Markets", value: "GULF, Africa, Europe, USA" },
        { label: "Supply Ability", value: "10,000+ Units per month" },
        { label: "Customization", value: "Logo printing and custom box designs" }
      ]}
      formats={["Table Top", "Wall Hung", "One Piece", "Half Pedestal", "Full Pedestal"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles & Sanitaryware", href: "/products/tiles-export" },
        { label: "Wash Basins" }
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Sanitaryware"
      canonicalUrl="/products/sanitaryware/wash-basins"
      metaTitle="Designer Wash Basin Exporter India | Premium Sanitaryware | Patel Impex"
      metaDescription="Exporting high-quality designer ceramic wash basins from India. Table-top, wall-hung, and pedestal designs for global markets."
    />
  );
};

export default DesignerWashBasinsDetail;
