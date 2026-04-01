import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import giElectrodeImg from "@/assets/products/earthing-rod-with-clamp.png";
import copperElectrodeImg from "@/assets/products/chemical-earthing-electrode.png";
import copperRodsImg from "@/assets/products/copper-bonded-earthing-rods.png";
import backfillImg from "@/assets/products/backfill-compound-sack.png";
import giStripsImg from "@/assets/products/gi-earthing-flat-bar.png";
import copperStripsImg from "@/assets/products/copper-strips-braided.png";
import lightningArresterImg from "@/assets/products/earthing-terminal-rod.png";
import earthingClampsImg from "@/assets/products/earthing-c-clamps.png";
import uBoltClampsImg from "@/assets/products/u-bolt-earthing-clamps.png";
import pitCoversImg from "@/assets/products/earth-pit-covers.png";

const EarthingExport = () => {
  const products = [
    {
      name: "Chemical Earthing (GI)",
      image: giElectrodeImg,
      link: "/products/earthing/gi-electrode",
      description: "Galvanized Iron electrodes for durable, maintenance-free industrial grounding.",
    },
    {
      name: "Chemical Earthing (Copper)",
      image: copperElectrodeImg,
      link: "/products/earthing/copper-electrode",
      description: "High-conductivity copper bonded electrodes for sensitive electrical protection.",
    },
    {
      name: "Copper Bonded Rods",
      image: copperRodsImg,
      link: "/products/earthing/copper-rods",
      description: "Threaded or pointed rods with high-purity copper coating (100-250 microns).",
    },
    {
      name: "Backfill Compound",
      image: backfillImg,
      link: "/products/earthing/backfill",
      description: "Bentonite and graphite based soil enhancement material for low resistance.",
    },
    {
      name: "GI Earthing Strip",
      image: giStripsImg,
      link: "/products/earthing/strips",
      description: "Hot-dip galvanized flat bars for network grounding in large facilities.",
    },
    {
      name: "Copper Earthing Strip",
      image: copperStripsImg,
      link: "/products/earthing/strips",
      description: "Pure electrolytic copper strips for high-frequency earthing applications.",
    },
    {
      name: "Lightning Arresters",
      image: lightningArresterImg,
      link: "/products/earthing/lightning-arresters",
      description: "Advanced protection tips (ESE and Conventional) to safely divert surges.",
    },
    {
      name: "Earthing Clamps (C-Type)",
      image: earthingClampsImg,
      link: "/products/earthing/clamps",
      description: "Brass and copper clamps for connecting rods to conductors securely.",
    },
    {
      name: "U-Bolt Connectors",
      image: uBoltClampsImg,
      link: "/products/earthing/clamps",
      description: "Universal connectors for bonding rods to tapes and cables in grounding networks.",
    },
    {
      name: "Earth Pit Covers",
      image: pitCoversImg,
      link: "/products/earthing/pit-covers",
      description: "Heavy-duty Polypropylene and Cast Iron covers for earth electrode terminals.",
    }
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Industrial Safety"
      title="Earthing Rods & Accessories"
      description="Patel Impex exports certified electrical grounding materials. From advanced chemical electrodes and copper rods to moisture-retaining backfill compounds and technical accessories."
      products={products}
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Earthing Solutions" }]}
      canonicalUrl="/products/earthing-export"
      metaTitle="Earthing Solutions Exporter | High-Tech Protection | Patel Impex"
      metaDescription="Comprehensive grounding solutions exported from India. Chemical earthing, copper bonded rods, backfill compound and all grounding accessories."
    />
  );
};

export default EarthingExport;
