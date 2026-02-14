import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import hd2687Img from "@/assets/products/subtypes/hd-2687-wheat.png";

const HD2687WheatDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Wheat Products"
            name="HD 2687 (Shreshth) Wheat"
            description="HD 2687, popularly known as Shreshth, is a high-yielding wheat variety developed by IARI. It is known for its excellent bread-making qualities, high sedimentation value, and resistance to rusts. A preferred choice for commercial baking and milling."
            images={[hd2687Img]}
            hsCode="1001.99"
            specifications={[
                { label: "Origin", value: "India (North Western Plains)" },
                { label: "Variety", value: "HD 2687 (Shreshth)" },
                { label: "Protein Content", value: "11.5-13%" },
                { label: "Hectoliter Weight", value: "78-80 kg/hl" },
                { label: "Moisture", value: "< 12%" },
                { label: "Sedimentation Value", value: "> 50ml" },
                { label: "Hardness", value: "Semi-Hard to Hard" },
                { label: "Packaging", value: "50kg PP bags / Bulk" },
            ]}
            uses={[
                "Commercial bread baking",
                "Bakery products",
                "Milling for refined flour (Maida)",
                "Chapatis with good puffing",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Bangladesh, Middle East, Asia" },
                { label: "Supply Ability", value: "High Volume Available" },
                { label: "Container Capacity", value: "24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C" },
            ]}
            formats={["Whole Grain", "Milling Quality"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Wheat", href: "/products/wheat" },
                { label: "HD 2687 Wheat" },
            ]}
            backLink="/products/wheat"
            backLinkText="Back to Wheat Products"
            canonicalUrl="/products/wheat/hd-2687"
            metaTitle="HD 2687 Wheat Exporter India | Shreshth Variety | Patel Impex"
            metaDescription="Export HD 2687 (Shreshth) Wheat from India. High yielding variety excellent for bread making and milling. Superior sedimentation value."
        />
    );
};

export default HD2687WheatDetail;
