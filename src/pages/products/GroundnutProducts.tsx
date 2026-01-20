import ProductCategoryTemplate from "@/components/ProductCategoryTemplate";
import boldRunnerImg from "@/assets/products/bold-runner-groundnut.png";
import javaSpanishImg from "@/assets/products/java-spanish-groundnut.png";
import tjGroundnutImg from "@/assets/products/tj-groundnut.png";
import g10g20Img from "@/assets/products/g10-g20-groundnut.png";

const GroundnutProducts = () => {
  const products = [
    {
      name: "Bold/Runner/Virginia Groundnut",
      image: boldRunnerImg,
      link: "/products/bold-runner-groundnut",
      description: "Larger, elongated kernels, often used in confectionery and peanut butter.",
    },
    {
      name: "Java/Spanish Groundnut",
      image: javaSpanishImg,
      link: "/products/java-spanish-groundnut",
      description: "Smaller, rounder kernels, preferred for snacks and oil extraction.",
    },
    {
      name: "TJ (Tikkam Jawar) Groundnut",
      image: tjGroundnutImg,
      link: "/products/tj-groundnut",
      description: "Specific varieties like TJ 37 and TJ Pathavada, known for their quality.",
    },
    {
      name: "G10 & G20 Premium Groundnut",
      image: g10g20Img,
      link: "/products/g10-g20-groundnut",
      description: "Premium varieties of Java peanuts with reddish, shiny appearance and strong shells.",
    },
  ];

  return (
    <ProductCategoryTemplate
      category="Oil Seeds"
      title="Groundnut Products"
      description="Patel Impex is a leading exporter of premium Indian groundnuts (peanuts) in various varieties and formats. Our groundnuts are sourced from the finest farms in Gujarat and processed under strict quality standards."
      products={products}
    />
  );
};

export default GroundnutProducts;
