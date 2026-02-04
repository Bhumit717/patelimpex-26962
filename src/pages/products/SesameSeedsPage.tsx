import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import sesameSeedsImg from "@/assets/products/seeds.png";

const SesameSeedsPage = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Oil Seeds"
            name="Sesame Seeds"
            description="Patel Impex exports premium-quality Sesame Seeds, available in two main varieties: Hulled and Natural. Our sesame seeds are sourced from the finest crops in India (Gujarat), known for their rich nutty flavor and high oil content. The seeds are processed in state-of-the-art facilities to ensure superior purity, whiteness, and consistency. Hulled seeds are mechanically skinned and dried for a pure white appearance, while Natural seeds retain their original texture and nutritional value."
            images={[sesameSeedsImg]}
            hsCode="1207.40"
            specifications={[
                { label: "Origin", value: "India (Gujarat)" },
                { label: "Varieties", value: "Hulled (Autodry/Mechanically), Natural" },
                { label: "Purity", value: "99.90%, 99.95%, 99.98% (Sortex Cleaned)" },
                { label: "Moisture", value: "4% - 5% Max" },
                { label: "Oil Content", value: "48% - 50% Min" },
                { label: "FFA", value: "1.0% - 1.5% Max" },
                { label: "Color", value: "Mechanically Hulled: Pure White; Natural: Whitish/Golden" },
                { label: "Packaging", value: "25kg, 50kg PP/Paper Bags, Customized" },
                { label: "Certifications", value: "ISO, Kosher, BRC, Halal" },
            ]}
            uses={[
                "Topping for burger buns, breads, and confectionery",
                "Key ingredient in Tahini (sesame paste) and Halva",
                "Used in oil extraction for premium sesame oil",
                "Widely used in traditional Asian and Middle Eastern cuisines",
                "Rich source of protein, antioxidants, and healthy fats",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "USA, Europe, Middle East, Far East Asia" },
                { label: "Supply Ability", value: "Consistent supply year-round" },
                { label: "Processing", value: "Sortex Cleaned, Auto-Dried, Mechanically Hulled" },
                { label: "Container Capacity", value: "19 MT per 20' FCL" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF" },
                { label: "Port of Loading", value: "Mundra Port" },
                { label: "Sample Policy", value: "Samples available on request" },
            ]}
            formats={[
                "Hulled Sesame Seeds (99.95% / 99.98% Purity)",
                "Natural Sesame Seeds (99/1/1, 99.90%)",
                "Sortex Cleaned",
                "Mechanically Hulled",
                "Auto Dried"
            ]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sesame Seeds" },
            ]}
            backLink="/products"
            backLinkText="Back to Products"
            canonicalUrl="/products/sesame-seeds"
            metaTitle="Sesame Seeds Exporter India | Hulled & Natural | Patel Impex"
            metaDescription="Leading exporter of Hulled and Natural Sesame Seeds from India. 99.98% purity, Sortex clean, rich oil content. Bulk supply for food & oil industries."
        />
    );
};

export default SesameSeedsPage;
