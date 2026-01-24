import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import riceImg from "@/assets/products/rice.png";

const JeerakasalaRice = () => {
  return (
    <ProductDetailTemplate
      category="Rice Products"
      name="Jeerakasala Rice"
      description="Jeerakasala Rice is a premium short-grain aromatic rice from Kerala, also known as 'Kaima' rice. Named after cumin seeds due to its shape, it's ideal for biryanis and pulaos with its unique fragrance and taste."
      image={riceImg}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Kerala)" },
        { label: "Grain Length", value: "4.5-5.0mm (Short)" },
        { label: "Type", value: "Aromatic" },
        { label: "Broken", value: "2% - 5% Max" },
        { label: "Moisture", value: "< 13%" },
        { label: "Aroma", value: "Unique Natural Fragrance" },
        { label: "Packaging", value: "25/50kg PP Bags" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Traditional Malabar biryani preparation",
        "Premium pulaos and flavored rice dishes",
        "Authentic Kerala cuisine restaurants",
        "Special occasion and festive cooking",
        "Export to Indian diaspora markets",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "UAE, Kuwait, Qatar, UK, USA" },
        { label: "Supply Ability", value: "500+ MT per month" },
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

export default JeerakasalaRice;
