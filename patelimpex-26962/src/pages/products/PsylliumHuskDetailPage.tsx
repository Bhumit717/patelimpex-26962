import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import psylliumHuskWhiteImg from "@/assets/products/psyllium-husk.png";

const PsylliumHuskDetailPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Herbs & Ayurvedic"
      name="Psyllium Husk"
      description="Psyllium Husk is the outer covering of the seeds of Plantago ovata and is widely used as a natural laxative and dietary fiber supplement. Patel Impex exports high-purity psyllium husk with controlled sifting and grading to ensure optimal swelling and fiber content."
      images={[psylliumHuskWhiteImg]}
      hsCode="1211.90"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Type", value: "Husk - 85%, 95%, 98%, 99% Purity" },
        { label: "Moisture", value: "< 12%" },
        { label: "Swelling Index", value: "40ml/g Minimum" },
        { label: "Mesh Size", value: "40, 60, 80, 100 Mesh" },
        { label: "Packaging", value: "25kg PP Bags, 50kg PP Bags, Customized" },
        { label: "Shelf Life", value: "24 Months" },
        { label: "Certifications", value: "FSSAI, ISO, USDA Organic, Kosher, Halal" },
      ]}
      uses={[
        "Used as natural dietary fiber supplement",
        "Key ingredient in pharmaceutical preparations",
        "Used in food industry for fiber enrichment",
        "Aids in digestive health and regularity",
        "Used in gluten-free baking as a binding agent",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, EU, Australia, Japan" },
        { label: "Supply Ability", value: "500+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Container Capacity", value: "15-16 MT per 20' FCL" },
      ]}
      formats={["85% Purity", "95% Purity", "98% Purity", "99% Purity", "Organic Certified"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Isabgol (Psyllium)", href: "/products/psyllium-husk" },
        { label: "Psyllium Husk" },
      ]}
      backLink="/products/psyllium-husk"
      backLinkText="Back to Isabgol Products"
      canonicalUrl="/products/psyllium-husk/husk"
      metaTitle="Psyllium Husk Exporter India | 99% Purity | Patel Impex"
      metaDescription="Export quality psyllium husk with 85-99% purity. USDA Organic, Kosher, Halal certified. Bulk supply for pharmaceutical & food industries."
    />
  );
};

export default PsylliumHuskDetailPage;
