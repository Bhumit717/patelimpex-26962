import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import gvtPgvtImg from "@/assets/products/grey-vitrified-tiles.png";
import doubleChargeImg from "@/assets/products/stone-look-tiles.png";
import fullBodyImg from "@/assets/products/marble-tiles-white.png";
import digitalWallImg from "@/assets/products/decorative-wall-tiles.png";
import elevationImg from "@/assets/products/elevation-wall-tiles.png";
import parkingImg from "@/assets/products/patterned-ceramic-tiles.png";
import slabsImg from "@/assets/products/grey-vitrified-tiles.png"; // Reusing high quality grey slab
import sanitarySetImg from "@/assets/products/sanitaryware-set-complete.png";
import basinImg from "@/assets/products/bathroom-sinks-modern.png";
import closetImg from "@/assets/products/modern-toilets.png";

const TilesExport = () => {
  const products = [
    {
      name: "GVT & PGVT Tiles",
      image: gvtPgvtImg,
      link: "/products/tiles/gvt-pgvt",
      description: "Glazed Vitrified Tiles with high-definition digital printing and premium polish.",
    },
    {
      name: "Double Charge Tiles",
      image: doubleChargeImg,
      link: "/products/tiles/double-charge",
      description: "Durable tiles with double layer of pigment for long-lasting heavy traffic use.",
    },
    {
      name: "Full Body Vitrified",
      image: fullBodyImg,
      link: "/products/tiles/full-body",
      description: "Uniform color throughout the thickness, ideal for commercial and industrial zones.",
    },
    {
      name: "Digital Wall Tiles",
      image: digitalWallImg,
      link: "/products/tiles/wall",
      description: "Artistic wall tiles in 300x450mm and 300x600mm for luxury bathrooms.",
    },
    {
      name: "Elevation Wall Tiles",
      image: elevationImg,
      link: "/products/tiles/elevation",
      description: "3D textured tiles for building exteriors and accent walls.",
    },
    {
      name: "Parking Tiles",
      image: parkingImg,
      link: "/products/tiles/parking",
      description: "Heavy-duty 12mm thickness tiles for outdoor parking and walkways.",
    },
    {
      name: "Porcelain Slabs",
      image: slabsImg,
      link: "/products/tiles/slabs",
      description: "Large format slabs (800x1600, 1200x2400) for seamless architectural design.",
    },
    {
      name: "Sanitaryware Sets",
      image: sanitarySetImg,
      link: "/products/sanitaryware",
      description: "Complete bathroom sets including closets, basins, and pedestals.",
    },
    {
      name: "Designer Wash Basins",
      image: basinImg,
      link: "/products/tiles/sanitary-basin",
      description: "Table-top and wall-hung basins with contemporary ceramic designs.",
    },
    {
      name: "Water Closets",
      image: closetImg,
      link: "/products/tiles/sanitary-closet",
      description: "One-piece and wall-hung closets with efficient dual-flush systems.",
    }
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Construction & Industrial"
      title="Tiles & Sanitaryware"
      description="Patel Impex exports a comprehensive range of premium Indian tiles and sanitaryware. Sourced from Morbi, we offer PGVT, GVT, Double Charge, and specialized outdoor tiles alongside designer sanitary solutions for global projects."
      products={products}
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Tiles & Sanitaryware" }]}
      canonicalUrl="/products/tiles-export"
      metaTitle="Tiles & Sanitaryware Exporter India | Premium Products | Patel Impex"
      metaDescription="Leading exporter of Indian tiles including GVT, PGVT, Wall and Parking tiles. Complete sanitaryware solutions for international projects. High quality from Morbi, India."
    />
  );
};

export default TilesExport;
