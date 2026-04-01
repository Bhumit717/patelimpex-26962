import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import giElectrodeImg from "@/assets/products/earthing-rod-with-clamp.png";

const GiElectrodeDetail = () => {
  return (
    <EnhancedProductDetailTemplate
      category="Earthing Solutions"
      name="GI Pipe Earthing Electrode"
      description="Patel Impex exports Hot-Dip Galvanized Iron (GI) maintenance-free pipe electrodes for heavy-duty industrial grounding. Designed with internal and external galvanization for maximum longevity."
      images={[giElectrodeImg]}
      hsCode="8535.90"
      specifications={[
        { label: "Origin", value: "India" },
        { label: "Material", value: "Mild Steel Pipe (GI Coated)" },
        { label: "Galvanization", value: "80-100 Microns (Hot-Dip)" },
        { label: "Pipe Diameter", value: "40mm, 50mm, 80mm" },
        { label: "Length", value: "2m, 3m (Customized)" },
      ]}
      uses={[
        "Substations and Transformers",
        "Public Power Grids",
        "Industrial Manufacturing Units",
        "Heavy Earth Stations",
      ]}
      exportInfo={[
        { label: "Compliance", value: "IS 3043 Standards" },
        { label: "Supply Chain", value: "Global Export via Mundra / Kandla" },
      ]}
      formats={["40mm x 2m", "50mm x 3m", "Heavy GI", "Medium GI"]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Earthing", href: "/products/earthing-export" },
        { label: "GI Electrode" },
      ]}
      backLink="/products/earthing-export"
      backLinkText="Back to Earthing Range"
      canonicalUrl="/products/earthing/gi-electrode"
      metaTitle="GI Pipe Earthing Electrode Exporter | Industrial Grounding | Patel Impex"
      metaDescription="High-conductivity hot-dip galvanized grounding electrodes for power stations and industrial facilities exported from India."
    />
  );
};

export default GiElectrodeDetail;
