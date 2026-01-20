import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import psylliumSeedsImg from "@/assets/products/seeds.png";

const PsylliumSeedsDetailPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Herbs & Ayurvedic"
      name="Psyllium Seeds"
      description="Psyllium Seeds (Plantago ovata seeds) are the whole seeds from which psyllium husk is derived. Rich in soluble fiber, these seeds are used in traditional medicine and modern health supplements for digestive wellness."
      images={[psylliumSeedsImg]}
      hsCode="1211.90"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Type", value: "Whole Seeds" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Moisture", value: "< 12%" },
        { label: "Admixture", value: "< 1%" },
        { label: "Packaging", value: "25kg PP Bags, 50kg Jute Bags, Customized" },
        { label: "Shelf Life", value: "24 Months" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Source material for psyllium husk production",
        "Used in traditional Ayurvedic preparations",
        "Natural remedy for constipation and digestive issues",
        "Used in animal feed formulations",
        "Ingredient in herbal health products",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, EU, Middle East, Asia" },
        { label: "Supply Ability", value: "400+ MT per month" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Container Capacity", value: "18-20 MT per 20' FCL" },
      ]}
      formats={["Machine Cleaned", "Double Cleaned", "Organic Certified"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Isabgol (Psyllium)", href: "/products/psyllium-husk" },
        { label: "Psyllium Seeds" },
      ]}
      backLink="/products/psyllium-husk"
      backLinkText="Back to Isabgol Products"
      canonicalUrl="/products/psyllium-husk/seeds"
      metaTitle="Psyllium Seeds Exporter India | Plantago Ovata | Patel Impex"
      metaDescription="Export quality whole psyllium seeds (Plantago ovata). High purity, machine cleaned. Bulk supply for herbal & pharmaceutical industries."
    />
  );
};

export default PsylliumSeedsDetailPage;
