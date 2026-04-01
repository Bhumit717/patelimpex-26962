import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import bathFittingsImg from "@/assets/products/bath-fittings-taps.png";

const BathFittingsDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Construction & Industrial"
      name="Premium Bath Fittings"
      description="Patel Impex exports high-quality bath fittings and faucets. Our range includes designer taps, showers, and bathroom accessories that combine elegant aesthetics with durable performance for international markets."
      images={[bathFittingsImg]}
      hsCode="8481"
      specifications={[
        { label: "Origin", value: "Jamnagar / Morbi, India" },
        { label: "Material", value: "Solid Brass / Stainless Steel" },
        { label: "Finish", value: "Chrome / Matte Black / Rose Gold" },
        { label: "Installation", value: "Wall Mounted / Deck Mounted" },
      ]}
      uses={[
        "Modern Residential Bathrooms",
        "Luxury Hotel Projects",
        "Commercial Building Restrooms",
      ]}
      exportInfo={[
        { label: "Certification", value: "ISO 9001:2015 Certified" },
        { label: "Packaging", value: "Custom Brand Boxes / Master Cartons" },
      ]}
      formats={["Designer Faucets", "Rain Showers", "Mixer Valves", "Health Faucets"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Tiles", href: "/products/tiles-export" },
        { label: "Bath Fittings" },
      ]}
      backLink="/products/tiles-export"
      backLinkText="Back to Tiles Range"
      canonicalUrl="/products/bath-fittings"
      metaTitle="Premium Bath Fittings Exporter India | Faucets & Showers | Patel Impex"
      metaDescription="Export quality brass and stainless steel bath fittings. Designer faucets, rain showers and bathroom accessories from India's leading exporter."
    />
  );
};

export default BathFittingsDetail;
