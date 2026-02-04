import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import fennelSeedsImg from "@/assets/products/fennel-seeds.png";

const FennelSeedsDetail = () => {
  return (
    <ProductDetailTemplate
      category="Spices"
      name="Fennel Seeds"
      description="Fennel Seeds is one of the most widely used spices in global cuisine and holds great importance in both culinary and medicinal applications. Patel Impex exports premium-quality fennel seeds sourced directly from trusted farmers, ensuring international quality standards."
      image={fennelSeedsImg}
      hsCode="0909.61"
      specifications={[
        { label: "Origin", value: "India (Gujarat)" },
        { label: "Type", value: "Whole, Powder, Customized" },
        { label: "Moisture", value: "< 10%" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Packaging", value: "25kg/50kg PP Bags, Jute Bags" },
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

export default FennelSeedsDetail;
