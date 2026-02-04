import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import soybeanImg from "@/assets/products/soybean.png";

const SoybeanDetail = () => {
  return (
    <ProductDetailTemplate
      category="Pulses"
      name="Soybeans"
      description="Soybeans are one of the most important protein sources for plant-based diets and are widely used in food and industrial applications. Patel Impex offers high-grade, non-GMO soybeans sourced from certified Indian farms."
      image={soybeanImg}
      hsCode="2304.00"
      specifications={[
        { label: "Origin", value: "India (Madhya Pradesh, Maharashtra)" },
        { label: "Type", value: "Whole / Organic / Customized" },
        { label: "Moisture", value: "< 13%" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Protein", value: "46-48%" },
        { label: "Packaging", value: "25kg/50kg PP Bags, Jute Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Used in soymilk, tofu, soy flour, and animal feed",
        "Rich in protein, isoflavones, and essential amino acids",
        "Suitable for vegetarian/vegan diets and functional foods",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Asia, USA, EU, Africa, South America" },
        { label: "Supply Ability", value: "Bulk shipments available year-round" },
        { label: "Private Labeling", value: "Yes" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      backLink="/#products"
      backLinkText="Back to Products"
    />
  );
};

export default SoybeanDetail;
