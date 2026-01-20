import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import steamBasmatiImg from "@/assets/products/steam-basmati-rice.png";

const SteamBasmatiRice1121Detail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Agricultural Products"
      name="1121 Steam Basmati Rice"
      description="1121 Steam Basmati is the finest quality basmati rice, steam processed to retain maximum aroma and elongation. Known for exceptional grain length (up to 22mm after cooking) and authentic basmati fragrance."
      images={[steamBasmatiImg]}
      hsCode="1006.30"
      specifications={[
        { label: "Origin", value: "India (Punjab, Haryana)" },
        { label: "Grain Length", value: "8.4mm+ (Raw), 22mm+ (Cooked)" },
        { label: "Grain Type", value: "Steam Processed" },
        { label: "Aroma", value: "Strong Natural Basmati" },
        { label: "Moisture", value: "< 12.5%" },
        { label: "Broken", value: "< 1%" },
        { label: "Packaging", value: "1kg, 5kg, 10kg, 25kg bags" },
        { label: "Certifications", value: "FSSAI, ISO, BRC, Organic" },
      ]}
      uses={[
        "Premium biryani preparation",
        "Fine dining restaurants",
        "Luxury retail market",
        "Special occasion cooking",
        "Gourmet food products",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "USA, UK, Canada, UAE, Singapore" },
        { label: "Supply Ability", value: "1000+ MT per month" },
        { label: "Container Capacity", value: "24 MT per 40' FCL" },
        { label: "Premium Grade", value: "XXL, 1% Broken" },
      ]}
      formats={["1% Broken Premium", "2% Broken", "Organic Certified"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Rice", href: "/products/rice" },
        { label: "1121 Steam Basmati" },
      ]}
      backLink="/products/rice"
      backLinkText="Back to Rice Products"
      canonicalUrl="/products/steam-basmati-rice-1121"
      metaTitle="1121 Steam Basmati Rice Exporter | Extra Long Grain | Patel Impex"
      metaDescription="Premium 1121 Steam Basmati Rice with 22mm+ cooked length. Finest quality basmati for luxury markets. BRC certified exporter."
    />
  );
};

export default SteamBasmatiRice1121Detail;
