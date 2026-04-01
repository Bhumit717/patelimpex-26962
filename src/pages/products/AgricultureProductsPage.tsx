import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import psylliumHuskImg from "@/assets/products/psyllium-husk.png";
import fennelSeedsImg from "@/assets/products/fennel-seeds.png";
import cuminSeedsImg from "@/assets/products/cumin-seeds.png";
import riceImg from "@/assets/products/rice.png";
import sharbatiWheatImg from "@/assets/products/subtypes/sharbati-wheat.png";
import wheatFlourImg from "@/assets/products/wheat-flour.png";
import sesameSeedsImg from "@/assets/products/sesame-seeds.png";
import groundnutImg from "@/assets/products/groundnut.png";
import soybeanImg from "@/assets/products/soybean.png";
import animalDungImg from "@/assets/products/animal-dung.png";

const AgricultureProductsPage = () => {
  const products = [
    { name: "Psyllium Husk", image: psylliumHuskImg, link: "/products/psyllium-husk", description: "Premium purity psyllium husk and powder from India's finest crops." },
    { name: "Fennel Seeds", image: fennelSeedsImg, link: "/products/fennel-seeds", description: "Machine cleaned, aromatic fennel seeds for global spice markets." },
    { name: "Cumin Seeds", image: cuminSeedsImg, link: "/products/cumin-seeds", description: "High-grade Indian cumin seeds with intense aroma and flavor." },
    { name: "Basmati Rice", image: riceImg, link: "/products/rice", description: "Aromatic long-grain basmati and non-basmati rice varieties." },
    { name: "Premium Wheat", image: sharbatiWheatImg, link: "/products/wheat", description: "Golden Sharbati and Durum wheat varieties for milling and food use." },
    { name: "Wheat Flour", image: wheatFlourImg, link: "/products/wheat-flour", description: "Finely milled wheat flour and semolina for diverse culinary needs." },
    { name: "Sesame Seeds", image: sesameSeedsImg, link: "/products/sesame-seeds", description: "Hulled and natural sesame seeds with high oil content and purity." },
    { name: "Groundnut", image: groundnutImg, link: "/products/groundnut", description: "Bold and Java export-quality groundnuts (peanuts) for global snacks." },
    { name: "Soybeans", image: soybeanImg, link: "/products/soybeans", description: "Non-GMO, high-protein soybeans for food and industrial processing." },
    { name: "Animal Dung Products", image: animalDungImg, link: "/products/animal-dung", description: "Organic fertilizer solutions including cow dung cakes and powder." },
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Primary Sector"
      title="Agricultural Exports"
      description="Patel Impex is a premier exporter of Indian agricultural commodities. We bridge the gap between India's fertile farms and the global market, ensuring every product meets the highest standards of purity, nutrition, and quality."
      products={products}
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Agriculture" }]}
      canonicalUrl="/products/agriculture"
      metaTitle="Agricultural Exporter India | Premium Grains, Spices & Oilseeds | Patel Impex"
      metaDescription="Leading Indian agricultural exporter specializing in Basmati Rice, Wheat, Spices, Oilseeds, and Organic Fertilizers. High-quality farm-fresh exports to 50+ countries."
    />
  );
};

export default AgricultureProductsPage;
