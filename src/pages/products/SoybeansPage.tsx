import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import soybeanImg from "@/assets/products/soybean.png";

const SoybeansPage = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Pulses & Oilseeds"
      name="Soybeans"
      description="Soybeans are one of the most important protein sources for plant-based diets and are widely used in food and industrial applications. Patel Impex offers high-grade, non-GMO soybeans sourced from certified Indian farms."
      images={[soybeanImg]}
      hsCode="1201.90"
      specifications={[
        { label: "Origin", value: "India (Madhya Pradesh, Maharashtra)" },
        { label: "Type", value: "Whole / Organic / Customized" },
        { label: "Moisture", value: "< 13%" },
        { label: "Purity", value: "99% Minimum" },
        { label: "Protein Content", value: "36-40%" },
        { label: "Oil Content", value: "18-20%" },
        { label: "Packaging", value: "25kg / 50kg PP Bags, Jute Bags, or Customized" },
        { label: "Shelf Life", value: "12-24 Months" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA, Non-GMO" },
      ]}
      uses={[
        "Used in soymilk, tofu, soy flour, and animal feed",
        "Rich in protein, isoflavones, and essential amino acids",
        "Suitable for vegetarian/vegan diets and functional foods",
        "Industrial applications in oil extraction",
        "Ingredient in health supplements and protein products",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Asia, USA, EU, Africa, South America" },
        { label: "Supply Ability", value: "Bulk shipments available year-round" },
        { label: "Private Labeling", value: "Yes, customized packaging available" },
        { label: "Container Capacity", value: "24-26 MT per 20' FCL" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["Whole Soybeans", "Organic Certified", "Non-GMO", "Food Grade", "Feed Grade"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Soybeans" },
      ]}
      backLink="/products"
      backLinkText="Back to Products"
      canonicalUrl="/products/soybeans"
      metaTitle="Soybeans Exporter India | Non-GMO | Patel Impex"
      metaDescription="Premium non-GMO soybeans exporter from India. High protein content, certified quality. Bulk supply for food, feed & oil industries."
    />
  );
};

export default SoybeansPage;
