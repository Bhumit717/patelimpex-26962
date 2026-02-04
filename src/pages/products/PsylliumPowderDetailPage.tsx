import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import psylliumPowderImg from "@/assets/products/psyllium-powder.png";

const PsylliumPowderDetailPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Herbs & Ayurvedic"
      name="Psyllium Husk Powder"
      description="Psyllium Husk Powder is finely ground psyllium husk, offering superior dispersibility and ease of use in supplements, beverages, and food products. Patel Impex provides premium-grade powder with consistent mesh size and high fiber content."
      images={[psylliumPowderImg]}
      hsCode="1211.90"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Type", value: "Powder - 80, 100, 200 Mesh" },
        { label: "Purity", value: "95%, 98%, 99%" },
        { label: "Moisture", value: "< 12%" },
        { label: "Color", value: "Off-white to Light Brown" },
        { label: "Packaging", value: "25kg PP Bags, 50kg Drums, Customized" },
        { label: "Certifications", value: "FSSAI, ISO, USDA Organic, Kosher, Halal" },
      ]}
      uses={[
        "Ideal for capsule and tablet manufacturing",
        "Used in protein shakes and health drinks",
        "Excellent for gluten-free baking",
        "Used in pharmaceutical formulations",
        "Suitable for dietary supplement production",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, Canada, EU, Australia, Japan" },
        { label: "Supply Ability", value: "300+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Container Capacity", value: "14-15 MT per 20' FCL" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["80 Mesh", "100 Mesh", "200 Mesh", "Organic Certified", "Pharmaceutical Grade"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Isabgol (Psyllium)", href: "/products/psyllium-husk" },
        { label: "Psyllium Husk Powder" },
      ]}
      backLink="/products/psyllium-husk"
      backLinkText="Back to Isabgol Products"
      canonicalUrl="/products/psyllium-husk/powder"
      metaTitle="Psyllium Husk Powder Exporter India | Fine Mesh | Patel Impex"
      metaDescription="Premium psyllium husk powder in 80-200 mesh. Perfect for supplements, capsules & food products. Organic & pharmaceutical grade available."
    />
  );
};

export default PsylliumPowderDetailPage;
