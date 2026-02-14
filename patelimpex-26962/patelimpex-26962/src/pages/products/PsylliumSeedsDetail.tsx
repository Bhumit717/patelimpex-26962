import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import psylliumSeedsImg from "@/assets/products/seeds.png";

const PsylliumSeedsDetail = () => {
  return (
    <ProductDetailTemplate
      category="Psyllium Husk Products"
      name="Psyllium Seeds"
      description="Psyllium Seeds (Isabgol Seeds) are the whole seeds of Plantago ovata plant. These seeds are the source of psyllium husk and are used in traditional medicine, food industry, and as raw material for husk production."
      image={psylliumSeedsImg}
      hsCode="1209.99"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Type", value: "Whole Seeds" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Moisture", value: "< 12%" },
        { label: "Color", value: "Light Brown to Pinkish" },
        { label: "Packaging", value: "25/50kg PP Bags, Customized" },
        { label: "Shelf Life", value: "24 Months" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Raw material for psyllium husk production",
        "Used in traditional Ayurvedic medicine",
        "Ingredient in animal feed formulations",
        "Used in food processing industry",
        "Source of dietary fiber supplements",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Europe, USA, Middle East, Asia" },
        { label: "Supply Ability", value: "Large quantities available seasonally" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
      ]}
      backLink="/products/psyllium-husk-products"
      backLinkText="Back to Psyllium Products"
    />
  );
};

export default PsylliumSeedsDetail;
