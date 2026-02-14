import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import crystalImg from "@/assets/products/subtypes/white-crystal-sugar.png";

const WhiteCrystalSugarDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Sugar Products"
            name="White Crystal Sugar"
            description="Large crystal white sugar, known for its high purity and sparkling appearance. Ideal for decorative toppings, high-end confectionery, and sweetening beverages where visual appeal matters."
            images={[crystalImg]}
            hsCode="1701.99"
            specifications={[
                { label: "Origin", value: "India" },
                { label: "Crystal Size", value: "Large / Medium" },
                { label: "Color", value: "Sparkling White" },
                { label: "Purity", value: "99.8% minimum" },
                { label: "Moisture", value: "< 0.04%" },
                { label: "Grade", value: "Double Refined" },
                { label: "Solubility", value: "100% Free Flowing" },
                { label: "Packaging", value: "50kg PP bags / 1kg Retail" },
            ]}
            uses={[
                "Table sugar for tea/coffee",
                "Decorating cakes and pastries",
                "High-end confectionery",
                "Beverage manufacturing",
                "Pharmaceutical syrups",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Global, Middle East, Africa" },
                { label: "Supply Ability", value: "1000+ MT per month" },
                { label: "Container Capacity", value: "24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C" },
            ]}
            formats={["Large Crystal", "Medium Crystal"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sugar", href: "/more/sugar-export" },
                { label: "White Crystal Sugar" },
            ]}
            backLink="/more/sugar-export"
            backLinkText="Back to Sugar Products"
            canonicalUrl="/products/sugar/white-crystal-sugar"
            metaTitle="White Crystal Sugar Exporter India | Large Crystals | Patel Impex"
            metaDescription="Export premium White Crystal Sugar from India. Sparkling large crystals with high purity. Ideal for table use and confectionery. Competitive pricing."
        />
    );
};

export default WhiteCrystalSugarDetail;
