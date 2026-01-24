import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import boldRunnerImg from "@/assets/products/bold-runner-groundnut.png";

const BoldRunnerGroundnutDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Oil Seeds"
      name="Bold/Runner/Virginia Groundnut"
      description="Bold Runner (Virginia) groundnuts are large, elongated peanut kernels prized for their size and oil content. Patel Impex exports premium quality Bold groundnuts sourced from the finest farms in Gujarat."
      images={[boldRunnerImg]}
      hsCode="1202.42"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Rajasthan)" },
        { label: "Count", value: "38/42, 40/50, 50/60 per ounce" },
        { label: "Oil Content", value: "45-50%" },
        { label: "Moisture", value: "< 7%" },
        { label: "Aflatoxin", value: "< 4 ppb (EU Standard)" },
        { label: "Admixture", value: "< 1%" },
        { label: "Packaging", value: "25kg, 50kg PP Bags, Vacuum Packs" },
        { label: "Certifications", value: "FSSAI, ISO, HACCP, Kosher" },
      ]}
      uses={[
        "Peanut butter manufacturing",
        "Confectionery and chocolate industry",
        "Roasted peanut snacks",
        "Groundnut oil extraction",
        "Bakery and food industry",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Indonesia, Vietnam, UAE, Philippines" },
        { label: "Supply Ability", value: "1000+ MT per month" },
        { label: "Container Capacity", value: "22-24 MT per 20' FCL" },
        { label: "Season", value: "October to March" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["Raw Kernels", "Blanched", "Roasted", "Split"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Groundnut", href: "/products/groundnut" },
        { label: "Bold/Runner/Virginia" },
      ]}
      backLink="/products/groundnut"
      backLinkText="Back to Groundnut Products"
      canonicalUrl="/products/bold-runner-groundnut"
      metaTitle="Bold Virginia Groundnut Exporter India | 38/42 Count | Patel Impex"
      metaDescription="Export quality Bold Runner Virginia groundnuts. Premium peanuts for confectionery and peanut butter. HACCP certified."
    />
  );
};

export default BoldRunnerGroundnutDetail;
