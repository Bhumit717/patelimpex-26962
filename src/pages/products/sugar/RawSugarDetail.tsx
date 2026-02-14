import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import rawCaneSugarImg from "@/assets/products/subtypes/raw-cane-sugar.png";
import rawSugarImg from "@/assets/products/subtypes/raw-sugar.png";

const RawSugarDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Sugar Products"
            name="Raw Sugar (VHP)"
            description="Very High Polarization (VHP) Raw Sugar is a premium quality raw cane sugar with high sucrose content. Ideal for refineries and industrial applications requiring consistent quality and high polarization levels."
            images={[rawCaneSugarImg, rawSugarImg]}
            hsCode="1701.14"
            specifications={[
                { label: "Origin", value: "India (Maharashtra, Uttar Pradesh)" },
                { label: "Polarization", value: "98.5% minimum" },
                { label: "Grade", value: "VHP (Very High Pol)" },
                { label: "Color", value: "Light Brown" },
                { label: "Moisture", value: "< 0.15%" },
                { label: "Ash Content", value: "< 0.15%" },
                { label: "Packaging", value: "50kg PP bags / Bulk" },
                { label: "Certifications", value: "FSSAI, ISO 22000" },
            ]}
            uses={[
                "Sugar refinery feedstock",
                "Industrial sweetener production",
                "Beverage manufacturing",
                "Food processing industry",
                "Export to refineries worldwide",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Global, Middle East, Africa, Asia" },
                { label: "Supply Ability", value: "1000+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["VHP Grade", "Bulk Shipment", "50kg Bags"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sugar", href: "/more/sugar-export" },
                { label: "Raw Sugar VHP" },
            ]}
            backLink="/more/sugar-export"
            backLinkText="Back to Sugar Products"
            canonicalUrl="/products/sugar/raw-sugar"
            metaTitle="Raw Sugar VHP Exporter India | Very High Pol Sugar | Patel Impex"
            metaDescription="Export quality VHP Raw Sugar from India. 98.5% minimum polarization. Ideal for refineries and industrial applications. Competitive bulk pricing."
        />
    );
};

export default RawSugarDetail;
