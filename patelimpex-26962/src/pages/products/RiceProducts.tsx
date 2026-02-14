import ProductCategoryTemplate from "@/components/ProductCategoryTemplate";
import riceImg from "@/assets/products/rice.png";

const RiceProducts = () => {
  const products = [
    {
      name: "1121 Golden Sella Basmati Rice",
      image: riceImg,
      link: "/products/golden-sella-basmati-rice-1121",
      description: "Parboiled to perfection with rich golden hue and firm texture, ideal for biryanis.",
    },
    {
      name: "1121 White Sella Basmati Rice",
      image: riceImg,
      link: "/products/white-sella-basmati-rice-1121",
      description: "Premium white sella rice with excellent elongation and non-sticky texture.",
    },
    {
      name: "1121 Steam Basmati Rice",
      image: riceImg,
      link: "/products/steam-basmati-rice-1121",
      description: "Steam processed basmati with natural white color and aromatic fragrance.",
    },
    {
      name: "1509 Golden Sella Basmati Rice",
      image: riceImg,
      link: "/products/golden-sella-basmati-rice-1509",
      description: "Golden parboiled rice with excellent taste and affordable pricing.",
    },
    {
      name: "1509 White Sella Basmati Rice",
      image: riceImg,
      link: "/products/white-sella-basmati-rice-1509",
      description: "White sella variety with long grains and excellent cooking quality.",
    },
    {
      name: "1509 Steam Basmati Rice",
      image: riceImg,
      link: "/products/steam-basmati-rice-1509",
      description: "Steam processed 1509 variety with natural aroma and taste.",
    },
    {
      name: "IR64 Parboiled Rice",
      image: riceImg,
      link: "/products/ir64-parboiled-rice",
      description: "Popular non-basmati variety, parboiled for enhanced nutrition and shelf life.",
    },
    {
      name: "IR64 Raw Rice",
      image: riceImg,
      link: "/products/ir64-raw-rice",
      description: "Raw milled IR64 rice, excellent for daily consumption and food service.",
    },
    {
      name: "Sona Masoori Rice",
      image: riceImg,
      link: "/products/sona-masoori-rice",
      description: "Lightweight, aromatic South Indian variety, perfect for everyday meals.",
    },
    {
      name: "Jeerakasala Rice",
      image: riceImg,
      link: "/products/jeerakasala-rice",
      description: "Premium short-grain aromatic rice from Kerala, ideal for biryanis and pulaos.",
    },
  ];

  return (
    <ProductCategoryTemplate
      category="Agriculture"
      title="Rice Products"
      description="Patel Impex exports premium-quality Rice products to global markets, delivering excellence with every grain. Our wide range includes Basmati, Non-Basmati, Golden Sella, and other specialty rice varieties, carefully sourced from trusted farmers and processed under strict international quality standards."
      products={products}
    />
  );
};

export default RiceProducts;
