import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import bhaliaImg from "@/assets/products/subtypes/bhalia-wheat.png";

const BhaliaWheatDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Wheat Products"
            name="Bhalia Wheat"
            description="Bhalia Wheat, also known as Daudkhani wheat, is a premium long-grain wheat variety grown in the Bhal region of Gujarat. It is rich in protein and gluten, making it unique for its sweet taste and high nutritional content. Often grown under rainfed conditions without irrigation."
            images={[bhaliaImg]}
            hsCode="1001.99"
            specifications={[
                { label: "Origin", value: "India (Gujarat - Bhal Region)" },
                { label: "Variety", value: "Bhalia / Daudkhani" },
                { label: "Protein Content", value: "12-15%" },
                { label: "Gluten", value: "High (Rich in Gluten)" },
                { label: "Moisture", value: "< 12%" },
                { label: "Color", value: "Golden / Reddish" },
                { label: "Grain Type", value: "Hard, Long Grain" },
                { label: "Packaging", value: "25kg, 50kg PP bags" },
            ]}
            uses={[
                "Premium pasta and macaroni",
                "Semolina (Suji) production",
                "Traditional medicinal diets",
                "High-quality biscuits",
                "Daily consumption for health benefits",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Middle East, Europe, Asia" },
                { label: "Supply Ability", value: "Seasonally Available" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C" },
            ]}
            formats={["Whole Grain", "Machine Cleaned"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Wheat", href: "/products/wheat" },
                { label: "Bhalia Wheat" },
            ]}
            backLink="/products/wheat"
            backLinkText="Back to Wheat Products"
            canonicalUrl="/products/wheat/bhalia"
            metaTitle="Bhalia Wheat Exporter India | Daudkhani Wheat | Patel Impex"
            metaDescription="Export premium Bhalia Wheat (Daudkhani) from Gujarat, India. Known for high protein, gluten content, and distinct sweet taste. Ideal for pasta and semolina."
        />
    );
};

export default BhaliaWheatDetail;
