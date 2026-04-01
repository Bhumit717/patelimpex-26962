import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import electrodeImg from "@/assets/products/chemical-earthing-electrode.png";

const ChemicalEarthingDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="Chemical Earthing Electrodes"
      description="Patel Impex exports high-performance, maintenance-free Chemical Earthing Electrodes for industrial and high-voltage grounding. Designed to provide consistent resistance even in challenging soil conditions with non-corrosive properties."
      images={[electrodeImg]}
      hsCode="8535.90"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Diameter", value: "40mm, 50mm, 80mm" },
        { label: "Length", value: "1m, 2m, 3m" },
        { label: "Core Pipe", value: "GI (Hot Dip) or Copper Bonded" },
        { label: "Chemical", value: "Bent-Earthing or Graphite Powder" },
        { label: "Earthing Terminal", value: "Standard Lugging or Strip" },
      ]}
      uses={[
        "Substations and Transformers",
        "Solar Power Plants and Wind Farms",
        "Data Centers and IT Parks",
        "Industrial Manufacturing Facilities",
        "Residential High-Rise Buildings",
      ]}
      exportInfo={[
        { label: "Major Export Markets", value: "UAE, Qatar, Saudi Arabia, Europe" },
        { label: "Supply Ability", value: "5000+ units per month" },
        { label: "Customization", value: "Custom lengths and diameters available" },
        { label: "Payment Terms", value: "T/T, L/C, CAD" },
      ]}
      formats={["GI Electrode", "Copper Bonded Electrode", "2 Meters", "3 Meters"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "Chemical Earthing" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/chemical"
      metaTitle="Chemical Earthing Electrodes Exporter | Premium Industrial Protection | Patel Impex"
      metaDescription="Leading exporter of maintenance-free chemical earthing electrodes. Reliable grounding for data centers, solar plants, and heavy industries."
    />
  );
};

export default ChemicalEarthingDetail;
