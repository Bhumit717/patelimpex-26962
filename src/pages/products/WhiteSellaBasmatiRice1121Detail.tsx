import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import whiteSellaImg from "@/assets/products/white-sella-rice.png";

const WhiteSellaBasmatiRice1121Detail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Agricultural Products"
      name="1121 White Sella Basmati Rice"
      description="1121 White Sella is a premium parboiled basmati rice with creamy white appearance. The extended parboiling and polishing process gives it a bright white color while maintaining the nutritional benefits of sella rice."
      images={[whiteSellaImg]}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Punjab, Haryana, UP)" },
        { label: "Grain Length", value: "8.3mm+ (Extra Long)" },
        { label: "Grain Type", value: "Parboiled (Sella)" },
        { label: "Color", value: "Creamy White" },
        { label: "Moisture", value: "< 13%" },
        { label: "Broken", value: "< 2%" },
        { label: "Packaging", value: "5kg, 10kg, 25kg, 50kg bags" },
        { label: "Certifications", value: "FSSAI, ISO, HACCP" },
      ]}
      uses={[
        "Premium rice dishes and biryani",
        "Restaurant and hotel use",
        "Retail consumer market",
        "Export to European markets",
        "Health-conscious consumers",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "UK, EU, USA, Australia" },
        { label: "Supply Ability", value: "1500+ MT per month" },
        { label: "Container Capacity", value: "25 MT per 20' FCL" },
        { label: "Shelf Life", value: "24 months" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["2% Broken", "5% Broken", "Double Polished"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Rice", href: "/products/rice" },
        { label: "1121 White Sella" },
      ]}
      backLink="/products/rice"
      backLinkText="Back to Rice Products"
      canonicalUrl="/products/white-sella-basmati-rice-1121"
      metaTitle="1121 White Sella Basmati Rice Exporter | Premium Quality | Patel Impex"
      metaDescription="Export quality 1121 White Sella Basmati Rice with creamy white appearance. Premium parboiled rice for European and Western markets."
    />
  );
};

export default WhiteSellaBasmatiRice1121Detail;
