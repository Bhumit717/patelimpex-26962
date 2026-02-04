import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import psylliumPowderImg from "@/assets/products/psyllium-powder.png";

const PsylliumHuskPowderDetail = () => {
  return (
    <ProductDetailTemplate
      category="Psyllium Husk Products"
      name="Psyllium Husk Powder"
      description="Psyllium Husk Powder is finely ground psyllium husk, ideal for easy mixing in beverages, food products, and dietary supplements. Our powder is processed under strict hygiene conditions to maintain purity and effectiveness."
      image={psylliumPowderImg}
      hsCode="1211.90"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Type", value: "Fine Powder" },
        { label: "Purity", value: "98% - 99%" },
        { label: "Moisture", value: "< 10%" },
        { label: "Mesh Size", value: "80, 100, 200 Mesh" },
        { label: "Packaging", value: "25kg PP Bags, Customized" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, Organic" },
      ]}
      uses={[
        "Easy to mix in smoothies, shakes, and beverages",
        "Used in pharmaceutical capsule formulations",
        "Excellent ingredient for gluten-free products",
        "Used in cosmetic and skincare products",
        "Popular in weight loss and detox supplements",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, Germany, Australia, Japan" },
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

export default PsylliumHuskPowderDetail;
