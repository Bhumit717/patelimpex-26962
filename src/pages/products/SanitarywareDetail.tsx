import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import sanitarywareImg from "@/assets/products/sanitaryware-set-complete.png";

const SanitarywareDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Construction & Industrial"
      name="Premium Sanitaryware"
      description="Patel Impex exports high-performance, beautifully crafted sanitaryware. Our range includes water closets, wash basins, and specialized bathroom ceramic hardware designed for both residential luxury and commercial durability."
      images={[sanitarywareImg]}
      hsCode="6910"
      specifications={[
        { label: "Origin", value: "Thangadh / Morbi, India" },
        { label: "Material", value: "Vitreous China / Fine Fire Clay" },
        { label: "Flushing System", value: "Rimless / Dual Flush / S-Trap & P-Trap" },
        { label: "Surface Finish", value: "Antibacterial Glaze / Super Smooth" },
      ]}
      uses={[
        "Modern Residential Bathrooms",
        "Hospitality and Hotel Projects",
        "Commercial and Public Restrooms",
      ]}
      exportInfo={[
        { label: "Certification", value: "CE / SASO / Watermark Certified" },
        { label: "Packing", value: "Individual Cartons / Wooden Pallets" },
      ]}
      formats={["One-Piece Closets", "Wall Hung Closets", "Table Top Basins", "Pedestal Basins"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Sanitaryware" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/sanitaryware"
      metaTitle="Premium Sanitaryware Exporter India | Basins & Closets | Patel Impex"
      metaDescription="High-quality vitreous china sanitaryware. Digital flush systems, rimless closets, and designer basins exported globally."
    />
  );
};

export default SanitarywareDetail;
