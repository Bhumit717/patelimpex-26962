import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import powderImg from "@/assets/products/animal-dung-powder.png";

const AnimalDungPowderDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Organic Fertilizers"
            name="Animal Dung Powder"
            description="Our Animal Dung Powder is processed from fully decomposed manure, finely ground and screened to ensure a uniform texture. It is a potent organic fertilizer that improves soil structure, aeration, and water-holding capacity while providing essential N-P-K nutrients to plants."
            images={[powderImg]}
            hsCode="3101.00"
            specifications={[
                { label: "Origin", value: "India" },
                { label: "Form", value: "Fine Powder (Mesh 10-20)" },
                { label: "Decomposition", value: "Fully Decomposed / Aerobically Composted" },
                { label: "NPK Ratio", value: "Natural Organic Balance" },
                { label: "Moisture", value: "10-15% Max" },
                { label: "pH Level", value: "6.5 - 7.5 (Neutral)" },
                { label: "Packaging", value: "25kg / 50kg PP Bags, Jumbo Bags" },
                { label: "Purity", value: "99% Pure Dung, No soil addition" },
            ]}
            uses={[
                "Commercial organic farming and horticulture",
                "Home gardening and lawn maintenance",
                "Ingredient for potting soil mixes",
                "Soil reclamation and restoration projects",
                "Greenhouse and nursery production",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "USA, EU, GCC Countries, Australia" },
                { label: "Supply Ability", value: "200+ MT per month" },
                { label: "Packaging Options", value: "Retail bags with custom branding" },
                { label: "Container Load", value: "18-20 MT per 20' FCL" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Certifications", value: "Phytosanitary Certificate provided" },
            ]}
            formats={["Fine Powder", "Granular (on request)", "Bulk Bags", "Retail 5kg Pouches"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Animal Dung", href: "/products/animal-dung" },
                { label: "Animal Dung Powder" },
            ]}
            backLink="/products/animal-dung"
            backLinkText="Back to Animal Dung Products"
            canonicalUrl="/products/animal-dung/powder"
            metaTitle="Animal Dung Powder Exporter | Organic Manure | Patel Impex"
            metaDescription="Order high-quality processed animal dung powder. Fully decomposed, nutrient-rich organic fertilizer for farming and gardening. Exporting worldwide."
        />
    );
};

export default AnimalDungPowderDetail;
