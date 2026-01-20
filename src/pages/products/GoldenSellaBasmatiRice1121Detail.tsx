import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import goldenSellaImg from "@/assets/products/golden-sella-rice.png";

const GoldenSellaBasmatiRice1121Detail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Agricultural Products"
      name="1121 Golden Sella Basmati Rice"
      description="1121 Golden Sella is a premium parboiled basmati rice with distinctive golden color. The parboiling process enhances grain strength, reduces breakage, and gives it an attractive golden hue preferred in Middle Eastern and African markets."
      images={[goldenSellaImg]}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Punjab, Haryana, UP)" },
        { label: "Grain Length", value: "8.3mm+ (Extra Long)" },
        { label: "Grain Type", value: "Parboiled (Sella)" },
        { label: "Color", value: "Golden Yellow" },
        { label: "Moisture", value: "< 13%" },
        { label: "Broken", value: "< 2%" },
        { label: "Packaging", value: "5kg, 10kg, 25kg, 50kg bags" },
        { label: "Certifications", value: "FSSAI, ISO, HACCP, BRC" },
      ]}
      uses={[
        "Biryani and pulao preparation",
        "Premium restaurant rice dishes",
        "Export to Middle East and Africa",
        "Hotel and catering industry",
        "Retail consumer packaging",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "UAE, Saudi Arabia, Iraq, Yemen" },
        { label: "Supply Ability", value: "2000+ MT per month" },
        { label: "Container Capacity", value: "25 MT per 40' FCL" },
        { label: "Private Labeling", value: "Yes, custom packaging available" },
      ]}
      formats={["2% Broken", "5% Broken", "Sortex Clean"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Rice", href: "/products/rice" },
        { label: "1121 Golden Sella" },
      ]}
      backLink="/products/rice"
      backLinkText="Back to Rice Products"
      canonicalUrl="/products/golden-sella-basmati-rice-1121"
      metaTitle="1121 Golden Sella Basmati Rice Exporter | Premium Quality | Patel Impex"
      metaDescription="Export quality 1121 Golden Sella Basmati Rice with 8.3mm+ grain length. Premium parboiled rice for Middle East and African markets."
    />
  );
};

export default GoldenSellaBasmatiRice1121Detail;
