import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import sesameSeedsImg from "@/assets/products/hulled-sesame.png";

const HulledSesameSeedsDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Oil Seeds"
            name="Hulled Sesame Seeds"
            description="Our Hulled Sesame Seeds are processed from selected premium grade natural sesame seeds. The hull (skin) is removed mechanically and the seeds are auto-dried to ensure the highest level of hygiene and purity. We offer various grades of purity including 99.95%, 99.97%, and 99.98% Sortex Cleaned, making them ideal for confectionery, bakery, and oil extraction industries."
            images={[sesameSeedsImg]}
            hsCode="1207.40.90"
            specifications={[
                { label: "Origin", value: "India (Gujarat)" },
                { label: "Purity", value: "99.95%, 99.97%, 99.98% (Sortex Cleaned)" },
                { label: "Admixture", value: "0.05% Max" },
                { label: "Moisture", value: "4% - 5% Max" },
                { label: "Oil Content", value: "48% Min" },
                { label: "FFA", value: "1.5% Max" },
                { label: "Color", value: "Pure White" },
                { label: "Microbiological", value: "Salmonella & E.Coli Negative" },
                { label: "Packaging", value: "25kg / 50kg Paper or PP Bags" },
            ]}
            uses={[
                "Topping for breads, buns, and confectionery products",
                "Key ingredient in Tahini paste and Halva",
                "Used in sweets and chocolates",
                "Garnishing for salads and savory dishes",
                "High-grade oil extraction",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "USA, Europe, Middle East, Far East" },
                { label: "Supply Ability", value: "500 MT per Month" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF" },
                { label: "Port of Loading", value: "Mundra / Nhava Sheva" },
            ]}
            formats={["Auto Dry", "Mechanically Hulled", "Sortex Cleaned"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sesame Seeds", href: "/products/sesame-seeds" },
                { label: "Hulled Sesame Seeds" },
            ]}
            backLink="/products/sesame-seeds"
            backLinkText="Back to Sesame Products"
            canonicalUrl="/products/sesame-seeds/hulled"
            metaTitle="Hulled Sesame Seeds Exporter | 99.98% Purity | Patel Impex"
            metaDescription="Export quality Hulled Sesame Seeds from India. Auto-dried, mechanically hulled, 99.98% Sortex purity. Ideal for bakery & confectionery."
        />
    );
};

export default HulledSesameSeedsDetail;
