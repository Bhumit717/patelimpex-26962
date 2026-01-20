import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import cottonYarnImg from "@/assets/products/cotton-yarn.png";

const CottonYarnDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Textile"
      name="Cotton Yarn"
      description="Premium quality cotton yarn manufactured from finest Indian cotton fibers. Patel Impex exports ring-spun, open-end, and compact cotton yarns in various counts suitable for weaving and knitting applications."
      images={[cottonYarnImg]}
      hsCode="5205.11"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Tamil Nadu)" },
        { label: "Count Range", value: "6s to 80s Ne" },
        { label: "Type", value: "Ring Spun, Open End, Compact" },
        { label: "Twist", value: "TPI as per requirement" },
        { label: "Strength", value: "CSP 2200-3200" },
        { label: "Evenness", value: "U% < 12" },
        { label: "Packaging", value: "Cone, Hank, Warp Beam" },
        { label: "Certifications", value: "OEKO-TEX, BCI, GOTS" },
      ]}
      uses={[
        "Weaving for fabric production",
        "Knitting for garments and hosiery",
        "Towel and terry manufacturing",
        "Denim fabric production",
        "Home textile manufacturing",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "Bangladesh, Egypt, Turkey, Portugal" },
        { label: "Supply Ability", value: "500+ MT per month" },
        { label: "Container Capacity", value: "12-14 MT per 40' FCL" },
        { label: "Private Labeling", value: "Yes, custom cones available" },
      ]}
      formats={["Carded Yarn", "Combed Yarn", "Compact Yarn", "Slub Yarn"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cotton", href: "/products/cotton" },
        { label: "Cotton Yarn" },
      ]}
      backLink="/products/cotton"
      backLinkText="Back to Cotton Products"
      canonicalUrl="/products/cotton-yarn"
      metaTitle="Cotton Yarn Exporter India | Ring Spun & Combed | Patel Impex"
      metaDescription="Export quality cotton yarn 6s-80s Ne. Ring spun, open end, compact yarns. OEKO-TEX and GOTS certified for global textile industries."
    />
  );
};

export default CottonYarnDetail;
