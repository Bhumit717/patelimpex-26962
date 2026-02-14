import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import sharbatiWheatImg from "@/assets/products/sharbati-wheat.png";

const SharbatiWheatDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Wheat Products"
            name="Sharbati Wheat"
            description="Premium Sharbati wheat is a golden-colored variety known for its superior quality, excellent taste, and high nutritional value. Ideal for making traditional Indian flatbreads like chapati and roti."
            images={[sharbatiWheatImg]}
            hsCode="1001.99"
            specifications={[
                { label: "Origin", value: "India (Madhya Pradesh, Rajasthan)" },
                { label: "Variety", value: "Sharbati (MP Wheat)" },
                { label: "Color", value: "Golden Yellow" },
                { label: "Protein Content", value: "11-12%" },
                { label: "Moisture", value: "< 12%" },
                { label: "Foreign Matter", value: "< 1%" },
                { label: "Broken Grains", value: "< 2%" },
                { label: "Packaging", value: "25kg, 50kg PP bags" },
                { label: "Certifications", value: "FSSAI, ISO 22000" },
            ]}
            uses={[
                "Chapati and roti making",
                "Traditional Indian breads",
                "Wheat flour production",
                "Bakery applications",
                "Export to premium markets",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Middle East, Africa, SE Asia" },
                { label: "Supply Ability", value: "1000+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["Whole Grain", "Cleaned & Sorted", "Organic (on request)"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Wheat", href: "/products/wheat" },
                { label: "Sharbati Wheat" },
            ]}
            backLink="/products/wheat"
            backLinkText="Back to Wheat Products"
            canonicalUrl="/products/wheat/sharbati"
            metaTitle="Sharbati Wheat Exporter India | MP Wheat | Patel Impex"
            metaDescription="Export premium Sharbati wheat from India. Golden variety with 11-12% protein. Ideal for chapati and traditional breads. Competitive bulk pricing."
        />
    );
};

export default SharbatiWheatDetail;
