import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import comberNoilImg from "@/assets/products/comber-noil-cotton.png";

const ComberNoilDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Textile"
      name="Comber Noil Cotton"
      description="Comber noil is the short fiber cotton waste removed during the combing process. Patel Impex exports high-quality comber noil suitable for various industrial applications including blending with longer fibers."
      images={[comberNoilImg]}
      hsCode="5202.10"
      specifications={[
        { label: "Origin", value: "India (Gujarat, Maharashtra)" },
        { label: "Fiber Length", value: "< 12mm (short fibers)" },
        { label: "Trash Content", value: "< 2%" },
        { label: "Moisture", value: "< 10%" },
        { label: "Nep Count", value: "Controlled" },
        { label: "Color", value: "White to Off-White" },
        { label: "Packaging", value: "Pressed Bales (100-150 kg)" },
        { label: "Certifications", value: "ISO 9001, Quality Tested" },
      ]}
      uses={[
        "Blending with longer fibers for yarn production",
        "Non-woven fabric manufacturing",
        "Medical and surgical cotton products",
        "Absorbent cotton production",
        "Stuffing and padding material",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "China, Bangladesh, Indonesia, Pakistan" },
        { label: "Supply Ability", value: "300+ MT per month" },
        { label: "Container Capacity", value: "20-22 MT per 20' FCL" },
        { label: "Quality Grades", value: "A, B, C Grades available" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
        { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
        { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
        { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
      ]}
      formats={["Grade A (Premium)", "Grade B (Standard)", "Grade C (Economy)"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Cotton", href: "/products/cotton" },
        { label: "Comber Noil Cotton" },
      ]}
      backLink="/products/cotton"
      backLinkText="Back to Cotton Products"
      canonicalUrl="/products/comber-noil-cotton"
      metaTitle="Comber Noil Cotton Exporter India | Short Fiber | Patel Impex"
      metaDescription="Export quality comber noil cotton for industrial applications. Premium short fiber cotton waste for blending and non-woven manufacturing."
    />
  );
};

export default ComberNoilDetail;
