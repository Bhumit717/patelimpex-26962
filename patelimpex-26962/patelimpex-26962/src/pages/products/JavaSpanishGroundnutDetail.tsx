import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import javaSpanishImg from "@/assets/products/java-spanish-groundnut.png";

const JavaSpanishGroundnutDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Oil Seeds"
      name="Java/Spanish Groundnut"
      description="Java (Spanish) groundnuts are smaller, rounder peanut kernels with high oil content, ideal for oil extraction and roasted snacks. Patel Impex exports premium Java peanuts from Gujarat's fertile farms."
      images={[javaSpanishImg]}
      hsCode="1202.42"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Andhra Pradesh)" },
        { label: "Count", value: "60/70, 70/80, 80/90 per ounce" },
        { label: "Oil Content", value: "48-52%" },
        { label: "Moisture", value: "< 6%" },
        { label: "Aflatoxin", value: "< 4 ppb (EU Standard)" },
        { label: "Admixture", value: "< 1%" },
        { label: "Packaging", value: "25kg, 50kg PP Bags, Jute Bags" },
        { label: "Certifications", value: "FSSAI, ISO, HACCP, BRC" },
      ]}
      uses={[
        "Groundnut oil production",
        "Roasted and salted snacks",
        "Peanut candy and chikki",
        "Food processing industry",
        "Bird feed and animal feed",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Indonesia, Malaysia, China, Japan" },
        { label: "Supply Ability", value: "800+ MT per month" },
        { label: "Container Capacity", value: "22-24 MT per 20' FCL" },
        { label: "Season", value: "September to February" },
      ]}
      formats={["Raw Kernels", "Blanched", "Roasted Salted", "Oil Grade"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Groundnut", href: "/products/groundnut" },
        { label: "Java/Spanish" },
      ]}
      backLink="/products/groundnut"
      backLinkText="Back to Groundnut Products"
      canonicalUrl="/products/java-spanish-groundnut"
      metaTitle="Java Spanish Groundnut Exporter India | High Oil Content | Patel Impex"
      metaDescription="Export quality Java Spanish groundnuts with 48-52% oil content. Perfect for oil extraction and snacks. BRC certified."
    />
  );
};

export default JavaSpanishGroundnutDetail;
