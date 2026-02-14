import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import lokwanWheatImg from "@/assets/products/lokwan-wheat.png";

const LokwanWheatDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Wheat Products"
            name="Lokwan Wheat"
            description="Lokwan wheat is a popular Indian variety known for its excellent milling characteristics and versatility. Medium protein content makes it suitable for various applications from traditional breads to modern bakery products."
            images={[lokwanWheatImg]}
            hsCode="1001.99"
            specifications={[
                { label: "Origin", value: "India (Gujarat, Rajasthan)" },
                { label: "Variety", value: "Lokwan" },
                { label: "Color", value: "Light Golden" },
                { label: "Protein Content", value: "10-11%" },
                { label: "Moisture", value: "< 12%" },
                { label: "Foreign Matter", value: "< 1%" },
                { label: "Milling Quality", value: "Excellent" },
                { label: "Packaging", value: "25kg, 50kg PP bags" },
                { label: "Certifications", value: "FSSAI, ISO 22000" },
            ]}
            uses={[
                "General purpose flour production",
                "Traditional Indian breads",
                "Biscuit and cookie manufacturing",
                "Multi-purpose bakery applications",
                "Blending with other wheat varieties",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Middle East, Africa, Asia" },
                { label: "Supply Ability", value: "1000+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["Whole Grain", "Cleaned & Graded", "Bulk Shipment"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Wheat", href: "/products/wheat" },
                { label: "Lokwan Wheat" },
            ]}
            backLink="/products/wheat"
            backLinkText="Back to Wheat Products"
            canonicalUrl="/products/wheat/lokwan"
            metaTitle="Lokwan Wheat Exporter India | Versatile Wheat Variety | Patel Impex"
            metaDescription="Export Lokwan wheat from India. Medium protein 10-11%. Excellent milling quality. Versatile applications for bakery and traditional breads."
        />
    );
};

export default LokwanWheatDetail;
