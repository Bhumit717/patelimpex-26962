import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import sonaMasooriImg from "@/assets/products/sona-masoori-rice.png";

const SonaMasooriRiceDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Agricultural Products"
      name="Sona Masoori Rice"
      description="Sona Masoori is a premium medium-grain South Indian rice variety known for its lightweight texture and aromatic quality. Popular for its low glycemic index and suitability for everyday cooking."
      images={[sonaMasooriImg]}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Andhra Pradesh, Karnataka)" },
        { label: "Grain Length", value: "5.0-5.5mm (Short-Medium)" },
        { label: "Grain Type", value: "Raw/Parboiled" },
        { label: "Color", value: "White with slight cream" },
        { label: "Moisture", value: "< 13%" },
        { label: "Broken", value: "< 5%" },
        { label: "Packaging", value: "5kg, 10kg, 25kg bags" },
        { label: "Certifications", value: "FSSAI, ISO, Organic" },
      ]}
      uses={[
        "South Indian cuisine (sambar rice, rasam)",
        "Daily household consumption",
        "Diabetic-friendly diet",
        "Restaurant and catering",
        "Health food products",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, Singapore, Malaysia, UAE" },
        { label: "Supply Ability", value: "1500+ MT per month" },
        { label: "Container Capacity", value: "25 MT per 20' FCL" },
        { label: "Varieties", value: "BPT 5204, HMT" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["Old Crop (Aged)", "New Crop", "Organic Certified"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Rice", href: "/products/rice" },
        { label: "Sona Masoori" },
      ]}
      backLink="/products/rice"
      backLinkText="Back to Rice Products"
      canonicalUrl="/products/sona-masoori-rice"
      metaTitle="Sona Masoori Rice Exporter India | Low GI Rice | Patel Impex"
      metaDescription="Premium Sona Masoori Rice from South India. Low glycemic index, aromatic quality. Ideal for health-conscious consumers."
    />
  );
};

export default SonaMasooriRiceDetail;
