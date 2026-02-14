import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import pharmaImg from "@/assets/products/subtypes/pharmaceutical-sugar.png";

const PharmaSugarDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Sugar Products"
            name="Pharmaceutical Grade Sugar"
            description="Highly refined, high-purity sucrose meeting USP/BP/IP standards. Used exclusively for pharmaceutical formulations, syrups, and medical applications."
            images={[pharmaImg]}
            hsCode="1701.99"
            specifications={[
                { label: "Origin", value: "India (Pharma Certified Facilities)" },
                { label: "Grade", value: "Pharmaceutical (USP/BP)" },
                { label: "Purity", value: "99.9% minimum" },
                { label: "Color", value: "Pure White" },
                { label: "Compliance", value: "USP, BP, EP Standards" },
                { label: "Moisture", value: "< 0.03%" },
                { label: "Heavy Metals", value: "< 5 ppm" },
                { label: "Microbial Limits", value: "USP Compliant" },
                { label: "Packaging", value: "Multi-layer pharma grade bags" },
                { label: "Certifications", value: "GMP, ISO 22000, FSSC 22000" },
            ]}
            uses={[
                "Pharmaceutical tablet coating",
                "Syrup and suspension formulations",
                "Medical device manufacturing",
                "Laboratory reagent applications",
                "Biotech and research applications",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Scientific & Medical Industries Worldwide" },
                { label: "Supply Ability", value: "200+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
                { label: "COA", value: "Certificate of Analysis provided with each batch" },
            ]}
            formats={["USP Grade", "BP Grade", "EP Grade", "Custom Specifications"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sugar", href: "/more/sugar-export" },
                { label: "Pharmaceutical Sugar" },
            ]}
            backLink="/more/sugar-export"
            backLinkText="Back to Sugar Products"
            canonicalUrl="/products/sugar/pharmaceutical-sugar"
            metaTitle="Pharmaceutical Grade Sugar Exporter | USP/BP Compliant | Patel Impex"
            metaDescription="Export pharmaceutical grade sugar from India. USP/BP/EP compliant. 99.9% purity. GMP certified. For medical and scientific applications."
        />
    );
};

export default PharmaSugarDetail;
