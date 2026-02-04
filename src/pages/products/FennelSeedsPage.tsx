import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import fennelSeedsImg from "@/assets/products/fennel-seeds.png";

const FennelSeedsPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Spices"
      name="Fennel Seeds"
      description="Fennel Seeds is one of the most widely used spices in global cuisine and holds great importance in both culinary and medicinal applications. Patel Impex exports premium-quality fennel seeds sourced directly from trusted farmers, ensuring international quality standards."
      images={[fennelSeedsImg]}
      hsCode="0909.61"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Type", value: "Whole, Powder, Customized" },
        { label: "Moisture", value: "< 10%" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Color", value: "Greenish-Yellow" },
        { label: "Packaging", value: "25kg PP Bags, 50kg PP Bags, Jute Bags, Customized" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, Spices Board of India" },
      ]}
      uses={[
        "Widely used in cooking and food processing",
        "Known for its medicinal and digestive health benefits",
        "Extensively used in spice blends, sauces, and packaged foods",
        "Popular in confectionery and bakery products",
        "Used in traditional medicine and herbal teas",
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
      formats={["Whole Seeds", "Ground Powder", "Bold Grade", "Medium Grade", "Small Grade"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Fennel Seeds" },
      ]}
      backLink="/products"
      backLinkText="Back to Products"
      canonicalUrl="/products/fennel-seeds"
      metaTitle="Fennel Seeds Exporter India | Premium Quality | Patel Impex"
      metaDescription="Leading exporter of premium fennel seeds from India. 99% purity, FSSAI & ISO certified. Bulk supply for food, spice & pharmaceutical industries."
    />
  );
};

export default FennelSeedsPage;
