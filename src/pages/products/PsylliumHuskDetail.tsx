import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import psylliumHuskWhiteImg from "@/assets/products/psyllium-husk.png";

const PsylliumHuskDetail = () => {
  return (
    <ProductDetailTemplate
      category="Psyllium Husk Products"
      name="Psyllium Husk"
      description="Psyllium Husk is the outer covering of the seeds of Plantago ovata and is widely used as a natural laxative and dietary fiber supplement. Patel Impex exports high-purity psyllium husk with controlled sifting and grading to ensure optimal swelling and fiber content."
      image={psylliumHuskWhiteImg}
      hsCode="1211.90"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Type", value: "Whole Husk" },
        { label: "Purity", value: "95% - 99%" },
        { label: "Moisture", value: "< 12%" },
        { label: "Mesh Size", value: "40, 60, 80, 100 Mesh" },
        { label: "Packaging", value: "25kg PP Bags, Customized" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, Organic" },
      ]}
      uses={[
        "Used as a natural laxative and dietary fiber supplement",
        "Popular ingredient in health drinks and smoothies",
        "Used in pharmaceutical and nutraceutical products",
        "Excellent binding agent in gluten-free baking",
        "Helps in weight management and digestive health",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, EU, Middle East, Asia" },
        { label: "Supply Ability", value: "Bulk shipments available year-round" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      backLink="/products/psyllium-husk-products"
      backLinkText="Back to Psyllium Products"
    />
  );
};

export default PsylliumHuskDetail;
