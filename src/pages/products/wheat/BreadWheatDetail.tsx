import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import breadWheatImg from "@/assets/products/bread-wheat.png";

const BreadWheatDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Wheat Products"
            name="Bread Wheat"
            description="Premium bread wheat variety with high protein and strong gluten content. Specifically cultivated for commercial bread making and bakery applications. Delivers excellent dough strength and volume."
            images={[breadWheatImg]}
            hsCode="1001.99"
            specifications={[
                { label: "Origin", value: "India (Punjab, Haryana, UP)" },
                { label: "Variety", value: "Bread Wheat (Hard Red)" },
                { label: "Color", value: "Reddish Brown" },
                { label: "Protein Content", value: "12-14%" },
                { label: "Gluten Strength", value: "Strong" },
                { label: "Moisture", value: "< 12%" },
                { label: "Falling Number", value: "300+ seconds" },
                { label: "Packaging", value: "25kg, 50kg PP bags / Bulk" },
                { label: "Certifications", value: "FSSAI, ISO 22000, Bakery Grade" },
            ]}
            uses={[
                "Commercial bread production",
                "Artisan bakery products",
                "High-volume bakery operations",
                "Premium bread flour manufacturing",
                "Industrial baking applications",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Europe, Middle East, Asia, Africa" },
                { label: "Supply Ability", value: "800+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["Whole Grain", "Bakery Grade", "Premium Bread Grade"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Wheat", href: "/products/wheat" },
                { label: "Bread Wheat" },
            ]}
            backLink="/products/wheat"
            backLinkText="Back to Wheat Products"
            canonicalUrl="/products/wheat/bread-wheat"
            metaTitle="Bread Wheat Exporter India | Bakery Grade Wheat | Patel Impex"
            metaDescription="Export premium bread wheat from India. High protein 12-14%. Strong gluten for commercial baking. Bakery grade quality for global markets."
        />
    );
};

export default BreadWheatDetail;
