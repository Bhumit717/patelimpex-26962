import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import riceImg from "@/assets/products/rice.png";

const SteamBasmatiRice1121 = () => {
  return (
    <ProductDetailTemplate
      category="Rice Products"
      name="1121 Steam Basmati Rice"
      description="1121 Steam Basmati Rice is steam-processed to retain its natural white color and aromatic fragrance. This premium variety offers the longest grain length and is highly sought after in international markets."
      image={riceImg}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Punjab, Haryana)" },
        { label: "Grain Length", value: "8.3mm+ (Extra Long)" },
        { label: "Type", value: "Steam (Raw/White)" },
        { label: "Broken", value: "1% - 2% Max" },
        { label: "Moisture", value: "< 12.5%" },
        { label: "Color", value: "Pure White" },
        { label: "Packaging", value: "25/50kg PP Bags, Jute Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, BRC" },
      ]}
      uses={[
        "Premium choice for traditional rice dishes",
        "Excellent for biryanis with authentic aroma",
        "Preferred in Indian and Pakistani cuisines",
        "Ideal for high-end restaurants",
        "Maximum elongation after cooking",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, Canada, Australia, EU" },
        { label: "Supply Ability", value: "800+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      backLink="/products/rice-products"
      backLinkText="Back to Rice Products"
    />
  );
};

export default SteamBasmatiRice1121;
