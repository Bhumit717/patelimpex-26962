import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import backfillCompoundImg from "@/assets/products/backfill-compound-sack.png";

const BackfillCompoundDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="Backfill Earth Compound"
      description="Patel Impex exports high-performance backfill compounds formulated with high-purity bentonite and conductive graphite. This moisture-retaining material significantly reduces soil resistivity for safe grounding."
      images={[backfillCompoundImg]}
      hsCode="3824.99"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Composition", value: "Bentonite / Graphite / Conductivity Minerals" },
        { label: "Expansion Ratio", value: "< 2x" },
        { label: "Stability", value: "Maintains moisture over long periods" },
        { label: "Chemicals", value: "Non-corrosive to electrodes" },
      ]}
      uses={[
        "Surrounding earthing electrodes in grounding pits",
        "Reducing grounding resistance in rocky soils",
        "Used with copper bonded rods to ensure safety",
      ]}
      exportInfo={[
        { label: "Packaging", value: "25kg / 50kg Bags" },
        { label: "Eco-Friendly", value: "Safe for groundwater" },
      ]}
      formats={["Bentonite Based", "Graphite Enhanced", "Moisture Retaining"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "Backfill Compound" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/backfill"
      metaTitle="Backfill Earth Compound Exporter India | Bentonite | Patel Impex"
      metaDescription="High-conductivity earth enhancement compound. Moisture-retaining and non-corrosive. Bulk exported from India for industrial safety."
    />
  );
};

export default BackfillCompoundDetail;
