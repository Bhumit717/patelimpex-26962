import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import riceImg from "@/assets/products/rice.png";

const GoldenSellaBasmatiRice1121 = () => {
  return (
    <ProductDetailTemplate
      category="Rice Products"
      name="1121 Golden Sella Basmati Rice"
      description="1121 Golden Sella Basmati Rice is parboiled to perfection, giving it a rich golden hue and firm texture. Widely used in biryanis, it retains its shape and aroma after cooking, making it a premium export choice."
      image={riceImg}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Punjab, Haryana)" },
        { label: "Grain Length", value: "8.3mm+ (Extra Long)" },
        { label: "Type", value: "Golden Sella (Parboiled)" },
        { label: "Broken", value: "1% - 5% Max" },
        { label: "Moisture", value: "< 13%" },
        { label: "Aroma", value: "Natural Basmati Fragrance" },
        { label: "Packaging", value: "25/50kg PP Bags, Jute Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, BRC" },
      ]}
      uses={[
        "Ideal for preparing premium biryanis and pulaos",
        "Excellent for restaurants and hotel chains",
        "Popular in Middle East and African cuisines",
        "Retains shape and doesn't become sticky",
        "Long shelf life due to parboiling process",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "UAE, Saudi Arabia, Iraq, Yemen, USA" },
        { label: "Supply Ability", value: "1000+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
      ]}
      backLink="/products/rice-products"
      backLinkText="Back to Rice Products"
    />
  );
};

export default GoldenSellaBasmatiRice1121;
