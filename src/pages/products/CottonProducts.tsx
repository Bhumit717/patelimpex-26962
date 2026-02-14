import ProductCategoryTemplate from "@/components/ProductCategoryTemplate";
import rawCottonImg from "@/assets/products/raw-cotton.png";
import cottonYarnImg from "@/assets/products/cotton-yarn.png";
import comberNoilImg from "@/assets/products/comber-noil-cotton.png";
import cottonCardingImg from "@/assets/products/cotton-carding.png";
import processedCottonImg from "@/assets/products/processed-cotton.png";
import cottonRovingImg from "@/assets/products/cotton-roving.png";

const CottonProducts = () => {
  const products = [
    {
      name: "Raw Cotton",
      image: rawCottonImg,
      link: "/products/raw-cotton",
      description: "Unprocessed cotton fiber sourced from Gujarat, Madhya Pradesh, and Maharashtra.",
    },
    {
      name: "Cotton Yarn",
      image: cottonYarnImg,
      link: "/products/cotton-yarn",
      description: "High-quality spun cotton yarn for textile manufacturing.",
    },
    {
      name: "Comber Noil Cotton",
      image: comberNoilImg,
      link: "/products/comber-noil-cotton",
      description: "Short fiber cotton waste used in various industrial applications.",
    },
    {
      name: "Cotton Carding Dropping",
      image: cottonCardingImg,
      link: "/products/cotton-carding-dropping",
      description: "Byproduct of cotton carding process, used for stuffing and insulation.",
    },
    {
      name: "Processed Cotton",
      image: processedCottonImg,
      link: "/products/processed-cotton",
      description: "Clean, processed cotton ready for spinning and textile production.",
    },
    {
      name: "Cotton Roving",
      image: cottonRovingImg,
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

