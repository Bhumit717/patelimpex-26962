import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import psylliumHuskWhiteImg from "@/assets/products/psyllium-husk.png";
import psylliumPowderImg from "@/assets/products/psyllium-powder.png";
import psylliumSeedsImg from "@/assets/products/seeds.png";

const IsabgolProducts = () => {
  const products = [
    {
      name: "Psyllium Husk",
      image: psylliumHuskWhiteImg,
      link: "/products/psyllium-husk/husk",
      description: "Outer covering of Plantago ovata seeds, high-purity with excellent swelling capacity.",
    },
    {
      name: "Psyllium Husk Powder",
      image: psylliumPowderImg,
      link: "/products/psyllium-husk/powder",
      description: "Finely ground psyllium husk, ideal for capsules and supplements.",
    },
    {
      name: "Psyllium Seeds",
      image: psylliumSeedsImg,
      link: "/products/psyllium-husk/seeds",
      description: "Whole psyllium seeds from Plantago ovata, source of natural fiber.",
    },
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Herbs & Ayurvedic"
      title="Isabgol (Psyllium) Products"
      description="Patel Impex exports premium-grade Psyllium (Plantago ovata) products sourced from India's leading agricultural zones. Our range includes Psyllium Husk, Psyllium Husk Powder, and Psyllium Seeds, processed under strict international quality standards."
      products={products}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Isabgol (Psyllium)" },
      ]}
      canonicalUrl="/products/psyllium-husk"
      metaTitle="Psyllium Husk Exporter India | Isabgol Export | Patel Impex"
      metaDescription="Leading exporter of premium psyllium husk, powder & seeds from India. High purity, certified quality for pharmaceutical & food industries. Request quote today."
    />
  );
};

export default IsabgolProducts;
