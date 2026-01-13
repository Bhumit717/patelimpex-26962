import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import wheatFlourImg from "@/assets/products/wheat-flour.png";

const WheatFlourDetail = () => {
  return (
    <ProductDetailTemplate
      category="Grains & Pulses"
      name="Wheat Flour (Maida)"
      description="Wheat flour is a staple product made from grinding wheat grains into a powdery substance. Patel Impex exports premium grade wheat flour carefully selected and processed using modern technology to ensure no impurities, packed fresh to retain nutrients."
      image={wheatFlourImg}
      hsCode="1101.00"
      specifications={[
        { label: "Product Name", value: "Wheat Flour" },
        { label: "Color", value: "Creamish White" },
        { label: "Moisture", value: "13% Max" },
        { label: "Protein", value: "11% Min" },
        { label: "Ash", value: "1.20% Max" },
        { label: "Dry Gluten", value: "8% Min" },
        { label: "Wet Gluten", value: "25% Min" },
        { label: "Packaging", value: "25/50 kg PP Bags" },
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
      ]}
      backLink="/#products"
      backLinkText="Back to Products"
    />
  );
};

export default WheatFlourDetail;
