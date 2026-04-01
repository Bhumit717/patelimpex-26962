import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import closetImg from "@/assets/products/modern-toilets.png";

const WaterClosetsDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Tiles & Sanitaryware"
      name="Water Closets (W.C.)"
      description="Patel Impex exports high-performance European and Indian style water closets. Our dual-flush systems and rimless designs are engineered for water efficiency and hygiene, sourced from India's prime ceramic manufacturing units."
      images={[closetImg]}
      hsCode="6910"
      specifications={[
        { label: "Design", value: "European, Indian, Rimless, Wall-Hung" },
        { label: "Flush Mechanism", value: "Dual Flush (3/6 Liters), Siphonic" },
        { label: "Seat Cover", value: "Soft Close PP/UF Covers" },
        { label: "Inlet Type", value: "Bottom / Side / Concealed" },
        { label: "Material", value: "Superior Grade Ceramic" }
      ]}
      uses={[
        "Modern Residential Infrastructure",
        "Public & Commercial Facilities",
        "Hospitals & Schools",
        "Smart Cities & Infrastructure Projects"
      ]}
      exportInfo={[
        { label: "Quality Standards", value: "SASO, CE, Quality Tested" },
        { label: "Markets", value: "GCC, Africa, South East Asia" },
        { label: "Logistics", value: "Heavy-duty palletized shipping" }
      ]}
      formats={["One Piece Closet", "Wall Hung", "Coupled Closet", "European P Trap", "European S Trap"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles & Sanitaryware", href: "/products/tiles-export" },
        { label: "Water Closets" }
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Sanitaryware"
      canonicalUrl="/products/sanitaryware/water-closets"
      metaTitle="Water Closet Exporter India | One Piece & Wall Hung | Patel Impex"
      metaDescription="High-quality ceramic water closets exported from India. One-piece, rimless, and wall-hung toilet suites for global projects."
    />
  );
};

export default WaterClosetsDetail;
