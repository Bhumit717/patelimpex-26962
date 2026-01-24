import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import wheatFlourImg from "@/assets/products/wheat-flour.png";

const WheatFlourPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Grains & Pulses"
      name="Wheat Flour (Maida)"
      description="Wheat flour is a staple product made from grinding wheat grains into a powdery substance. Patel Impex exports premium grade wheat flour carefully selected and processed using modern technology to ensure no impurities, packed fresh to retain nutrients."
      images={[wheatFlourImg]}
      hsCode="1101.00"
      specifications={[
        { label: "Origin", value: "India (Punjab, Madhya Pradesh)" },
        { label: "Product Name", value: "Wheat Flour (Maida/Atta)" },
        { label: "Color", value: "Creamish White" },
        { label: "Moisture", value: "13% Max" },
        { label: "Protein", value: "11% Min" },
        { label: "Ash", value: "1.20% Max" },
        { label: "Dry Gluten", value: "8% Min" },
        { label: "Wet Gluten", value: "25% Min" },
        { label: "Packaging", value: "25/50 kg PP Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Used for roti, bread, paratha, pasta and noodles",
        "Can be used to make healthy pizza bases",
        "High in nutrients and fiber",
        "Lower your risk of heart disease and stroke",
        "Reduce your risk of obesity and type 2 diabetes",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Malaysia, Indonesia, UAE, Saudi Arabia, Africa" },
        { label: "Container Capacity", value: "23-24 MT per 20' FT Container" },
        { label: "Private Labeling", value: "Yes, as per customer requirement" },
        { label: "Supply Ability", value: "1000+ MT per month" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["All Purpose Flour (Maida)", "Whole Wheat Flour (Atta)", "Semolina (Suji)", "Bread Flour", "Pastry Flour"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Wheat Flour" },
      ]}
      backLink="/products"
      backLinkText="Back to Products"
      canonicalUrl="/products/wheat-flour"
      metaTitle="Wheat Flour Exporter India | Maida & Atta | Patel Impex"
      metaDescription="Premium wheat flour exporter from India. High protein content, FSSAI certified. Bulk supply for bakeries, food manufacturers & retailers."
    />
  );
};

export default WheatFlourPage;
