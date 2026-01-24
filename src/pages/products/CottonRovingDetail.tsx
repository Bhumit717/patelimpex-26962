import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import cottonRovingImg from "@/assets/products/cotton-roving.png";

const CottonRovingDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Textile"
      name="Cotton Roving"
      description="Cotton roving is a semi-processed cotton strand produced after the drawing process and before final spinning. Patel Impex exports quality cotton roving suitable for yarn spinning mills."
      images={[cottonRovingImg]}
      hsCode="5203.00"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Tamil Nadu)" },
        { label: "Count", value: "0.8 to 1.2 Hank" },
        { label: "Twist", value: "Light twist for processing" },
        { label: "Fiber Length", value: "Based on raw cotton used" },
        { label: "Evenness", value: "Uniform strand" },
        { label: "Moisture", value: "< 8%" },
        { label: "Packaging", value: "Bobbins/Cans" },
        { label: "Quality", value: "Mill tested, consistent" },
      ]}
      uses={[
        "Ring spinning frame input",
        "Compact spinning process",
        "Fine yarn production",
        "Specialty yarn manufacturing",
        "Blended yarn production",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Bangladesh, Egypt, Ethiopia, Vietnam" },
        { label: "Supply Ability", value: "200+ MT per month" },
        { label: "Container Capacity", value: "10-12 MT per 20' FCL" },
        { label: "Custom Specs", value: "Available on request" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["Carded Roving", "Combed Roving", "Blended Roving"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cotton", href: "/products/cotton" },
        { label: "Cotton Roving" },
      ]}
      backLink="/products/cotton"
      backLinkText="Back to Cotton Products"
      canonicalUrl="/products/cotton-roving"
      metaTitle="Cotton Roving Exporter India | Pre-Spinning | Patel Impex"
      metaDescription="Export quality cotton roving for spinning mills. Consistent quality semi-processed cotton for yarn manufacturing."
    />
  );
};

export default CottonRovingDetail;
