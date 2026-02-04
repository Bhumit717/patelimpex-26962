import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import sesameSeedsImg from "@/assets/products/natural-sesame.jpg";

const NaturalSesameSeedsDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Oil Seeds"
            name="Natural Sesame Seeds"
            description="Natural Sesame Seeds are unprocessed seeds that retain their outer husk, ensuring they keep their natural nutrition and rich, nutty flavor. We source the finest quality sesame seeds from Gujarat and process them through cleaning and sorting to remove foreign matter. They are rich in calcium, iron, and other minerals."
            images={[sesameSeedsImg]}
            hsCode="1207.40.10"
            specifications={[
                { label: "Origin", value: "India (Gujarat)" },
                { label: "Purity", value: "99/1/1, 99.90%, 99.95%" },
                { label: "Admixture", value: "1% Max / 0.05% Max" },
                { label: "Moisture", value: "6% Max" },
                { label: "Oil Content", value: "48% - 50% Min" },
                { label: "FFA", value: "2% Max" },
                { label: "Color", value: "White to Whitish / Golden" },
                { label: "Packaging", value: "25kg / 50kg PP Bags" },
            ]}
            uses={[
                "Oil extraction for sesame oil",
                "Direct consumption in salads and curry",
                "Used in traditional sweets (Laddoo, Chikki)",
                "Crucial ingredient in Asian and African cuisine",
                "Medicinal applications",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "China, Vietnam, Turkey, Middle East" },
                { label: "Supply Ability", value: "1000 MT per Month" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF" },
                { label: "Port of Loading", value: "Mundra Port" },
            ]}
            formats={["99/1/1 Grade", "99.90% Cleaned", "Sortex Quality"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sesame Seeds", href: "/products/sesame-seeds" },
                { label: "Natural Sesame Seeds" },
            ]}
            backLink="/products/sesame-seeds"
            backLinkText="Back to Sesame Products"
            canonicalUrl="/products/sesame-seeds/natural"
            metaTitle="Natural Sesame Seeds Exporter | High Oil Content | Patel Impex"
            metaDescription="Leading exporter of Natural Sesame Seeds from India. Rich in oil and nutrition. Available in 99/1/1 and Sortex grades for oil crushing and food."
        />
    );
};

export default NaturalSesameSeedsDetail;
