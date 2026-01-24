import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import tjGroundnutImg from "@/assets/products/tj-groundnut.png";

const TJGroundnutDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Oil Seeds"
      name="TJ (Tikkam Jawar) Groundnut"
      description="TJ groundnuts are premium Indian varieties including TJ 37 and TJ Pathavada, known for their excellent taste and quality. Patel Impex exports these specialty groundnuts for discerning international markets."
      images={[tjGroundnutImg]}
      hsCode="1202.42"
      specifications={[
        { label: "Origin", value: "India (Gujarat)" },
        { label: "Variety", value: "TJ 37, TJ Pathavada, TJ Bold" },
        { label: "Count", value: "45/55, 55/65 per ounce" },
        { label: "Oil Content", value: "46-50%" },
        { label: "Moisture", value: "< 7%" },
        { label: "Aflatoxin", value: "< 4 ppb" },
        { label: "Packaging", value: "25kg, 50kg Bags, Bulk" },
        { label: "Certifications", value: "FSSAI, ISO, APEDA" },
      ]}
      uses={[
        "Premium snack production",
        "Specialty food manufacturing",
        "Direct consumption roasted",
        "Export grade confectionery",
        "High-end peanut products",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Vietnam, Philippines, Indonesia, UAE" },
        { label: "Supply Ability", value: "500+ MT per month" },
        { label: "Container Capacity", value: "22-24 MT per 20' FCL" },
        { label: "Quality", value: "Hand-sorted, Premium Grade" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["TJ 37 Raw", "TJ Pathavada", "Blanched TJ", "Roasted TJ"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Groundnut", href: "/products/groundnut" },
        { label: "TJ Groundnut" },
      ]}
      backLink="/products/groundnut"
      backLinkText="Back to Groundnut Products"
      canonicalUrl="/products/tj-groundnut"
      metaTitle="TJ Groundnut Exporter India | TJ 37 Premium | Patel Impex"
      metaDescription="Export quality TJ Tikkam Jawar groundnuts including TJ 37 and Pathavada varieties. Premium hand-sorted peanuts for export."
    />
  );
};

export default TJGroundnutDetail;
