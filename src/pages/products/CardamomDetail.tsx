import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import cardamomImg from "@/assets/products/cardamom.png";

const CardamomDetail = () => {
  return (
    <ProductDetailTemplate
      category="Spices"
      name="Green Cardamom"
      description="Green Cardamom is one of the most widely used spices in global cuisine and holds great importance in both culinary and medicinal applications. Patel Impex exports premium-quality green cardamom sourced directly from trusted farmers, ensuring international quality standards."
      image={cardamomImg}
      hsCode="0908.31"
      specifications={[
        { label: "Origin", value: "India (Kerala, Karnataka)" },
        { label: "Type", value: "Whole / Powder / Customized" },
        { label: "Moisture", value: "< 10%" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Size", value: "8mm Bold" },
        { label: "Packaging", value: "25kg/50kg PP Bags, Jute Bags" },
        { label: "Shelf Life", value: "12-24 Months" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, Spices Board" },
      ]}
      uses={[
        "Widely used in cooking and food processing",
        "Known for its medicinal and health benefits",
        "Extensively used in spice blends, sauces, and packaged foods",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, EU, Middle East, Asia" },
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

export default CardamomDetail;
