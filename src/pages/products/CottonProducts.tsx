import ProductCategoryTemplate from "@/components/ProductCategoryTemplate";
import cottonImg from "@/assets/products/cotton.png";

const CottonProducts = () => {
  const products = [
    {
      name: "Raw Cotton",
      image: cottonImg,
      link: "/products/raw-cotton",
      description: "Unprocessed cotton fiber sourced from Gujarat, Madhya Pradesh, and Maharashtra.",
    },
    {
      name: "Cotton Yarn",
      image: cottonImg,
      link: "/products/cotton-yarn",
      description: "High-quality spun cotton yarn for textile manufacturing.",
    },
    {
      name: "Comber Noil Cotton",
      image: cottonImg,
      link: "/products/comber-noil-cotton",
      description: "Short fiber cotton waste used in various industrial applications.",
    },
    {
      name: "Cotton Carding Dropping",
      image: cottonImg,
      link: "/products/cotton-carding-dropping",
      description: "Byproduct of cotton carding process, used for stuffing and insulation.",
    },
    {
      name: "Processed Cotton",
      image: cottonImg,
      link: "/products/processed-cotton",
      description: "Clean, processed cotton ready for spinning and textile production.",
    },
    {
      name: "Cotton Roving",
      image: cottonImg,
      link: "/products/cotton-roving",
      description: "Semi-processed cotton strand ready for spinning into yarn.",
    },
  ];

  return (
    <ProductCategoryTemplate
      category="Textile"
      title="Cotton Products"
      description="Patel Impex sources, supplies, and exports all types of Indian Cotton as per specification and variety required by cotton industries worldwide. India's favorable climate allows us to supply cotton varieties ranging from low staple length (20mm) to highest staple length (32mm)."
      products={products}
    />
  );
};

export default CottonProducts;
