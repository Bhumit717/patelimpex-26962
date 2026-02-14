import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import riceImg from "@/assets/products/rice.png";

const SonaMasooriRice = () => {
  return (
    <ProductDetailTemplate
      category="Rice Products"
      name="Sona Masoori Rice"
      description="Sona Masoori Rice is a lightweight, aromatic South Indian variety known for its low glycemic index and excellent taste. Perfect for everyday meals, it's one of the most popular rice varieties in South India."
      image={riceImg}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Andhra Pradesh, Karnataka)" },
        { label: "Grain Length", value: "5.0-5.5mm (Medium Short)" },
        { label: "Type", value: "Raw/White" },
        { label: "Broken", value: "2% - 5% Max" },
        { label: "Moisture", value: "< 13%" },
        { label: "Aroma", value: "Mild Natural Fragrance" },
        { label: "Packaging", value: "25/50kg PP Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Everyday meals in South Indian households",
        "Ideal for making idli and dosa batter",
        "Low calorie option for health-conscious consumers",
        "Popular in restaurants serving South Indian cuisine",
        "Great for fried rice and rice bowls",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, Singapore, Malaysia, UAE" },
        { label: "Supply Ability", value: "2000+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
      ]}
      backLink="/products/rice-products"
      backLinkText="Back to Rice Products"
    />
  );
};

export default SonaMasooriRice;
