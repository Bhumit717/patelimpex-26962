import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import riceImg from "@/assets/products/rice.png";

const IR64RawRice = () => {
  return (
    <ProductDetailTemplate
      category="Rice Products"
      name="IR64 Raw Rice"
      description="IR64 Raw Rice is a premium non-basmati variety, raw milled to retain natural taste and texture. It's an excellent choice for daily consumption, food service, and industrial food processing."
      image={riceImg}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Andhra Pradesh, Odisha)" },
        { label: "Grain Length", value: "5.8-6.2mm (Medium)" },
        { label: "Type", value: "Raw/White" },
        { label: "Broken", value: "5%, 10%, 25%, 100%" },
        { label: "Moisture", value: "< 13%" },
        { label: "Color", value: "White" },
        { label: "Packaging", value: "25/50kg PP Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Daily household consumption",
        "Restaurant and hotel chains",
        "Rice flour and noodle production",
        "Snack food manufacturing",
        "Brewing and beverage industry",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Bangladesh, Nepal, Sri Lanka, Africa" },
        { label: "Supply Ability", value: "5000+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
      ]}
      backLink="/products/rice-products"
      backLinkText="Back to Rice Products"
    />
  );
};

export default IR64RawRice;
