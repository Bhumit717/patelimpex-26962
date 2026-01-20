import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import boldRunnerImg from "@/assets/products/bold-runner-groundnut.png";
import javaSpanishImg from "@/assets/products/java-spanish-groundnut.png";
import tjGroundnutImg from "@/assets/products/tj-groundnut.png";
import g10g20Img from "@/assets/products/g10-g20-groundnut.png";

const GroundnutProductsPage = () => {
  const products = [
    { name: "Bold/Runner/Virginia Groundnut", image: boldRunnerImg, link: "/products/bold-runner-groundnut", description: "Large, elongated kernels for confectionery & peanut butter" },
    { name: "Java/Spanish Groundnut", image: javaSpanishImg, link: "/products/java-spanish-groundnut", description: "Smaller, rounder kernels for snacks and oil extraction" },
    { name: "TJ Groundnut (TJ 37, TJ Pathavada)", image: tjGroundnutImg, link: "/products/tj-groundnut", description: "Premium quality Indian varieties known for taste" },
    { name: "G10 & G20 Premium Java", image: g10g20Img, link: "/products/g10-g20-groundnut", description: "Reddish, shiny appearance with strong shells" },
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Oilseeds"
      title="Groundnut (Peanut) Products"
      description="Patel Impex exports premium groundnuts in multiple varieties including Bold, Java, TJ, and G-series. Available in raw kernels, blanched, roasted, and peanut butter formats."
      products={products}
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Groundnut" }]}
      canonicalUrl="/products/groundnut"
      metaTitle="Groundnut Exporter India | Bold Java TJ | Patel Impex"
      metaDescription="Premium groundnut exporter from India. Bold, Java, TJ, G10, G20 varieties. Raw, blanched, roasted formats. Bulk supply for global markets."
    />
  );
};

export default GroundnutProductsPage;
