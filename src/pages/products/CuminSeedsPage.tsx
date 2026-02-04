import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import cuminSeedsImg from "@/assets/products/cumin-seeds.png";

const CuminSeedsPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Spices"
      name="Cumin Seeds"
      description="Cumin Seeds is one of the most widely used spices in global cuisine and holds great importance in both culinary and medicinal applications. Patel Impex exports premium-quality cumin seeds sourced directly from trusted farmers, ensuring international quality standards."
      images={[cuminSeedsImg]}
      hsCode="0909.31"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Type", value: "Whole, Powder, Customized" },
        { label: "Moisture", value: "< 10%" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Color", value: "Yellowish Brown" },
        { label: "Volatile Oil", value: "2.5% Minimum" },
        { label: "Packaging", value: "25kg PP Bags, 50kg PP Bags, Jute Bags, Customized" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, Spices Board of India" },
      ]}
      uses={[
        "Widely used in cooking and food processing",
        "Known for its medicinal and digestive health benefits",
        "Extensively used in spice blends, sauces, and packaged foods",
        "Essential ingredient in curry powders worldwide",
        "Used in traditional medicine for digestive wellness",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, EU, Middle East, Asia" },
        { label: "Supply Ability", value: "Bulk shipments available year-round" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Container Capacity", value: "16-18 MT per 20' FCL" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["Whole Seeds", "Ground Powder", "Machine Cleaned", "Singapore Quality", "Europe Quality"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cumin Seeds" },
      ]}
      backLink="/products"
      backLinkText="Back to Products"
      canonicalUrl="/products/cumin-seeds"
      metaTitle="Cumin Seeds Exporter India | Premium Quality | Patel Impex"
      metaDescription="Leading exporter of premium cumin seeds from India. 99% purity, high volatile oil, machine cleaned. Bulk supply for global spice traders."
    />
  );
};

export default CuminSeedsPage;
