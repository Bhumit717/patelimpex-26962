import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import processedCottonImg from "@/assets/products/processed-cotton.png";

const ProcessedCottonDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Textile"
      name="Processed Cotton"
      description="Processed cotton is cleaned and prepared cotton ready for spinning and textile production. Patel Impex exports ginned, cleaned, and graded cotton that meets international quality standards."
      images={[processedCottonImg]}
      hsCode="5201.00"
      specifications={[
        { label: "Origin", value: "India (Gujarat, MP, Maharashtra)" },
        { label: "Staple Length", value: "24mm to 32mm" },
        { label: "Micronaire", value: "3.8 to 4.5" },
        { label: "Trash Content", value: "< 1.5%" },
        { label: "Moisture", value: "< 7.5%" },
        { label: "Strength", value: "28-34 g/tex" },
        { label: "Packaging", value: "Pressed Bales (170 kg)" },
        { label: "Certifications", value: "BCI, GOTS, ISO 9001" },
      ]}
      uses={[
        "High-quality yarn spinning",
        "Premium textile manufacturing",
        "Medical grade cotton production",
        "Specialty fabric production",
        "Export quality garment manufacturing",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "China, Bangladesh, Vietnam, Indonesia" },
        { label: "Supply Ability", value: "800+ MT per month" },
        { label: "Container Capacity", value: "18-20 MT per 20' FCL" },
        { label: "Quality Assurance", value: "HVI tested" },
      ]}
      formats={["Premium Grade", "Standard Grade", "Organic Certified"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cotton", href: "/products/cotton" },
        { label: "Processed Cotton" },
      ]}
      backLink="/products/cotton"
      backLinkText="Back to Cotton Products"
      canonicalUrl="/products/processed-cotton"
      metaTitle="Processed Cotton Exporter India | Premium Quality | Patel Impex"
      metaDescription="Export quality processed cotton, ginned and graded. BCI and GOTS certified for premium textile manufacturing worldwide."
    />
  );
};

export default ProcessedCottonDetail;
