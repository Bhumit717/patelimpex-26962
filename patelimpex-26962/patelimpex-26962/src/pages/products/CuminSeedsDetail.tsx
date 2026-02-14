import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import cuminSeedsImg from "@/assets/products/cumin-seeds.png";

const CuminSeedsDetail = () => {
  return (
    <ProductDetailTemplate
      category="Spices"
      name="Cumin Seeds"
      description="Cumin Seeds is one of the most widely used spices in global cuisine and holds great importance in both culinary and medicinal applications. Patel Impex exports premium-quality cumin seeds sourced directly from trusted farmers, ensuring international quality standards."
      image={cuminSeedsImg}
      hsCode="0909.31"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Type", value: "Whole, Powder, Customized" },
        { label: "Moisture", value: "< 10%" },
        { label: "Purity", value: "99% Minimum" },
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
      ]}
      backLink="/#products"
      backLinkText="Back to Products"
    />
  );
};

export default CuminSeedsDetail;
