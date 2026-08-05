import ProductCategoryTemplate from "@/components/ProductCategoryTemplate";
import psylliumHuskImg from "@/assets/products/psyllium-husk.png";
import psylliumPowderImg from "@/assets/products/psyllium-powder.png";
import psylliumSeedsImg from "@/assets/products/seeds.png";

const PsylliumHuskProducts = () => {
  const products = [
    {
      name: "Psyllium Husk",
      image: psylliumHuskImg,
      link: "/products/psyllium-husk",
      description: "Outer covering of Plantago ovata seeds, widely used as natural laxative and dietary fiber supplement.",
    },
    {
      name: "Psyllium Husk Powder",
      image: psylliumPowderImg,
      link: "/products/psyllium-husk/powder",
      description: "Finely ground psyllium husk for easy mixing in beverages, food products, and supplements.",
    },
    {
      name: "Psyllium Seeds",
      image: psylliumSeedsImg,
      link: "/products/psyllium-husk/seeds",
      description: "Whole psyllium seeds (Isabgol seeds) used in traditional medicine and food industry.",
    },
  ];

  return (
    <ProductCategoryTemplate
      category="Herbs & Ayurvedic"
      title="Psyllium Husk Products"
      description="Patel Impex is a trusted exporter of premium-grade Psyllium (Plantago ovata) products sourced from India's leading agricultural zones. Psyllium is globally recognized for its natural dietary fiber content and digestive health benefits."
      products={products}
    />
  );
};

export default PsylliumHuskProducts;
