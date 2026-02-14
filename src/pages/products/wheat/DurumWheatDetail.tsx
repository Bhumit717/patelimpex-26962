import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import durumWheatImg from "@/assets/products/durum-wheat.png";

const DurumWheatDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Wheat Products"
            name="Durum Wheat"
            description="Premium Durum wheat is a hard wheat variety with high protein and gluten content. Amber-colored grains perfect for pasta, semolina, and couscous production. Known for its superior milling quality."
            images={[durumWheatImg]}
            hsCode="1001.19"
            specifications={[
                { label: "Origin", value: "India (Punjab, Haryana)" },
                { label: "Variety", value: "Durum (Hard Wheat)" },
                { label: "Color", value: "Amber Yellow" },
                { label: "Protein Content", value: "13-15%" },
                { label: "Gluten Content", value: "High" },
                { label: "Moisture", value: "< 12%" },
                { label: "Test Weight", value: "78-80 kg/hl" },
                { label: "Packaging", value: "25kg, 50kg PP bags / Bulk" },
                { label: "Certifications", value: "FSSAI, ISO 22000" },
            ]}
            uses={[
                "Pasta and noodle production",
                "Semolina manufacturing",
                "Couscous production",
                "Premium bakery products",
                "Industrial food processing",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Europe, Middle East, North Africa" },
                { label: "Supply Ability", value: "800+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["Whole Grain", "Cleaned Grade", "Premium Pasta Grade"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Wheat", href: "/products/wheat" },
                { label: "Durum Wheat" },
            ]}
            backLink="/products/wheat"
            backLinkText="Back to Wheat Products"
            canonicalUrl="/products/wheat/durum"
            metaTitle="Durum Wheat Exporter India | Pasta Grade Wheat | Patel Impex"
            metaDescription="Export premium Durum wheat from India. High protein 13-15%. Ideal for pasta, semolina, and couscous. Premium quality for global markets."
        />
    );
};

export default DurumWheatDetail;
