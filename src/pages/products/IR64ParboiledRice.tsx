import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import riceImg from "@/assets/products/rice.png";

const IR64ParboiledRice = () => {
  return (
    <ProductDetailTemplate
      category="Rice Products"
      name="IR64 Parboiled Rice"
      description="IR64 Parboiled Rice is a popular non-basmati variety, parboiled for enhanced nutrition and extended shelf life. It's widely used in African and Asian markets for everyday consumption and food service applications."
      image={riceImg}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Andhra Pradesh, Tamil Nadu)" },
        { label: "Grain Length", value: "5.8-6.2mm (Medium)" },
        { label: "Type", value: "Parboiled" },
        { label: "Broken", value: "5%, 10%, 25%, 100%" },
        { label: "Moisture", value: "< 14%" },
        { label: "Color", value: "Light Golden" },
        { label: "Packaging", value: "25/50kg PP Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Staple food in many African countries",
        "Popular for daily household consumption",
        "Used in large-scale food service operations",
        "Excellent for rice-based processed foods",
        "Long shelf life and easy storage",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Nigeria, Senegal, Benin, Togo, Ivory Coast" },
        { label: "Supply Ability", value: "5000+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
      ]}
      backLink="/products/rice-products"
      backLinkText="Back to Rice Products"
    />
  );
};

export default IR64ParboiledRice;
