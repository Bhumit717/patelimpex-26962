import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import g10g20Img from "@/assets/products/g10-g20-groundnut.png";

const G10G20GroundnutDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Oil Seeds"
      name="G10 & G20 Premium Groundnut"
      description="G10 and G20 are premium Java peanut varieties with distinctive reddish, shiny appearance and strong shells. Patel Impex exports these superior quality groundnuts known for their excellent flavor profile."
      images={[g10g20Img]}
      hsCode="1202.42"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Saurashtra)" },
        { label: "Grade", value: "G10, G20, G201" },
        { label: "Count", value: "50/60, 60/70, 70/80 per ounce" },
        { label: "Oil Content", value: "48-52%" },
        { label: "Moisture", value: "< 6%" },
        { label: "Appearance", value: "Reddish, Shiny Skin" },
        { label: "Packaging", value: "25kg PP Bags, Vacuum Packs" },
        { label: "Certifications", value: "FSSAI, HACCP, BRC, Kosher" },
      ]}
      uses={[
        "Premium roasted snacks",
        "High-quality peanut butter",
        "Confectionery applications",
        "Direct table consumption",
        "Gourmet food products",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Japan, South Korea, EU, USA" },
        { label: "Supply Ability", value: "400+ MT per month" },
        { label: "Container Capacity", value: "22 MT per 40' FCL" },
        { label: "Quality", value: "Premium Export Grade" },
      ]}
      formats={["G10 Raw", "G20 Raw", "G201 Premium", "Blanched", "Roasted"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Groundnut", href: "/products/groundnut" },
        { label: "G10 & G20 Premium" },
      ]}
      backLink="/products/groundnut"
      backLinkText="Back to Groundnut Products"
      canonicalUrl="/products/g10-g20-groundnut"
      metaTitle="G10 G20 Premium Groundnut Exporter India | Patel Impex"
      metaDescription="Export quality G10 and G20 premium groundnuts with reddish shiny appearance. BRC and Kosher certified for global markets."
    />
  );
};

export default G10G20GroundnutDetail;
