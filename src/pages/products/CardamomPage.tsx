import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import cardamomImg from "@/assets/products/cardamom.png";

const CardamomPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Spices"
      name="Green Cardamom"
      description="Green Cardamom is one of the most widely used spices in global cuisine and holds great importance in both culinary and medicinal applications. Patel Impex exports premium-quality green cardamom sourced directly from trusted farmers, ensuring international quality standards."
      images={[cardamomImg]}
      hsCode="0908.31"
      specifications={[
        { label: "Origin", value: "India (Kerala, Karnataka)" },
        { label: "Type", value: "Whole / Powder / Customized" },
        { label: "Moisture", value: "< 10%" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Size", value: "6mm, 7mm, 8mm Bold" },
        { label: "Color", value: "Natural Green" },
        { label: "Packaging", value: "25kg / 50kg PP Bags, Jute Bags, or Customized" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, Spices Board of India" },
      ]}
      uses={[
        "Widely used in cooking and food processing",
        "Known for its medicinal and health benefits",
        "Extensively used in spice blends, sauces, and packaged foods",
        "Popular in desserts, beverages, and confectionery",
        "Used in traditional Ayurvedic medicine",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, EU, Middle East, Asia" },
        { label: "Supply Ability", value: "Bulk shipments available year-round" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Container Capacity", value: "12-14 MT per 20' FCL" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["8mm Bold", "7mm Bold", "6mm Regular", "Powder", "Green/Bleached"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cardamom" },
      ]}
      backLink="/products"
      backLinkText="Back to Products"
      canonicalUrl="/products/cardamom"
      metaTitle="Green Cardamom Exporter India | 8mm Bold | Patel Impex"
      metaDescription="Premium green cardamom exporter from India. 6-8mm bold, high aroma, FSSAI certified. Bulk supply for spice traders & food manufacturers."
    />
  );
};

export default CardamomPage;

