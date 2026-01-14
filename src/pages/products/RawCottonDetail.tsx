import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import rawCottonImg from "@/assets/products/raw-cotton.png";

const RawCottonDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Textile"
      name="Raw Cotton"
      description="Raw cotton is unprocessed cotton fiber directly harvested from cotton plants. Patel Impex exports premium quality raw cotton sourced from Gujarat, Madhya Pradesh, and Maharashtra, known for their superior staple length and fiber strength."
      images={[rawCottonImg]}
      hsCode="5201.00"
      specifications={[
        { label: "Origin", value: "India (Gujarat, MP, Maharashtra)" },
        { label: "Staple Length", value: "20mm to 32mm" },
        { label: "Micronaire", value: "3.5 to 4.9" },
        { label: "Strength", value: "26-32 g/tex" },
        { label: "Trash Content", value: "< 3%" },
        { label: "Moisture", value: "< 8.5%" },
        { label: "Packaging", value: "Pressed Bales (170 kg)" },
        { label: "Certifications", value: "BCI, GOTS Organic, ISO 9001" },
      ]}
      uses={[
        "Spinning mills for yarn production",
        "Textile manufacturing industries",
        "Non-woven fabric production",
        "Medical cotton and hygiene products",
        "Stuffing material for mattresses and pillows",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "China, Bangladesh, Vietnam, Indonesia" },
        { label: "Supply Ability", value: "1000+ MT per month" },
        { label: "Container Capacity", value: "18-20 MT per 40' FCL" },
        { label: "Season", value: "October to March (Peak)" },
      ]}
      formats={["Long Staple (28mm+)", "Medium Staple (24-28mm)", "Short Staple (20-24mm)"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cotton", href: "/products/cotton" },
        { label: "Raw Cotton" },
      ]}
      backLink="/products/cotton"
      backLinkText="Back to Cotton Products"
      canonicalUrl="/products/raw-cotton"
      metaTitle="Raw Cotton Exporter India | Premium Quality | Patel Impex"
      metaDescription="Export quality raw cotton with 20-32mm staple length. BCI and GOTS certified. Bulk supply for textile industries worldwide."
    />
  );
};

export default RawCottonDetail;
