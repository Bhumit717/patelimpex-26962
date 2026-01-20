import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import riceImg from "@/assets/products/rice.png";

const WhiteSellaBasmatiRice1121 = () => {
  return (
    <ProductDetailTemplate
      category="Rice Products"
      name="1121 White Sella Basmati Rice"
      description="1121 White Sella Basmati Rice is a premium parboiled variety with a pristine white appearance. Known for its excellent elongation and non-sticky texture after cooking, it's perfect for both household and commercial use."
      image={riceImg}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Punjab, Haryana)" },
        { label: "Grain Length", value: "8.3mm+ (Extra Long)" },
        { label: "Type", value: "White Sella (Parboiled)" },
        { label: "Broken", value: "1% - 5% Max" },
        { label: "Moisture", value: "< 13%" },
        { label: "Color", value: "Creamy White" },
        { label: "Packaging", value: "25/50kg PP Bags, Jute Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, BRC" },
      ]}
      uses={[
        "Premium choice for restaurants and hotels",
        "Excellent for biryanis and fried rice",
        "Popular in Asian and Middle Eastern cuisines",
        "Suitable for bulk catering services",
        "Great elongation - up to 2.5 times original length",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "UAE, Kuwait, Qatar, UK, USA" },
        { label: "Supply Ability", value: "1000+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
      ]}
      backLink="/products/rice-products"
      backLinkText="Back to Rice Products"
    />
  );
};

export default WhiteSellaBasmatiRice1121;
