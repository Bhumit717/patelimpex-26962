import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import brownImg from "@/assets/products/subtypes/brown-sugar.png";

const BrownSugarDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Sugar Products"
            name="Brown Sugar"
            description="Natural brown sugar possessing a rich flavor and color from its molasses content. It has a moist, soft texture and is widely used in baking and confectionery for its distinctive taste."
            images={[brownImg]}
            hsCode="1701.13"
            specifications={[
                { label: "Origin", value: "India" },
                { label: "Type", value: "Natural Brown" },
                { label: "Molasses Content", value: "Rich" },
                { label: "Color", value: "Golden to Dark Brown" },
                { label: "Texture", value: "Moist and Soft" },
                { label: "Flavor", value: "Caramel / Toffee note" },
                { label: "Sucrose", value: "90-95%" },
                { label: "Packaging", value: "25kg, 50kg bags / Retail" },
            ]}
            uses={[
                "Baking cakes and cookies",
                "Marinades and sauces",
                "Coffee sweetener",
                "Confectionery and toffees",
                "Traditional desserts",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Europe, USA, Global" },
                { label: "Supply Ability", value: "Available on order" },
                { label: "Container Capacity", value: "20-22 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C" },
            ]}
            formats={["Light Brown", "Dark Brown", "Demerara Style"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sugar", href: "/more/sugar-export" },
                { label: "Brown Sugar" },
            ]}
            backLink="/more/sugar-export"
            backLinkText="Back to Sugar Products"
            canonicalUrl="/products/sugar/brown-sugar"
            metaTitle="Brown Sugar Exporter India | Rich Molasses | Patel Impex"
            metaDescription="Export premium Brown Sugar from India. Rich in molasses with a natural caramel flavor. Ideal for baking and confectionery. High quality standards."
        />
    );
};

export default BrownSugarDetail;
