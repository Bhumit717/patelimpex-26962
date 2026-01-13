import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import groundnutImg from "@/assets/products/groundnut.png";

const GroundnutProductsPage = () => {
  const products = [
    { name: "Bold/Runner/Virginia Groundnut", image: groundnutImg, link: "/products/groundnut/bold-runner", description: "Large, elongated kernels for confectionery & peanut butter" },
    { name: "Java/Spanish Groundnut", image: groundnutImg, link: "/products/groundnut/java-spanish", description: "Smaller, rounder kernels for snacks and oil" },
    { name: "TJ Groundnut (TJ 37, TJ Pathavada)", image: groundnutImg, link: "/products/groundnut/tj-variety", description: "Premium quality Indian varieties" },
    { name: "G10 & G20 Premium Java", image: groundnutImg, link: "/products/groundnut/g10-g20", description: "Reddish, shiny appearance with strong shells" },
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
