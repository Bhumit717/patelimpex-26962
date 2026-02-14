import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import organicImg from "@/assets/products/subtypes/organic-sugar.png";
import brownImg from "@/assets/products/subtypes/brown-sugar.png";

const OrganicSugarDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Sugar Products"
            name="Organic Sugar"
            description="Certified Organic Sugar produced without chemical fertilizers or pesticides. A healthier, natural sweetener option with a rich flavor profile."
            images={[organicImg, brownImg]}
            hsCode="1701.99"
            specifications={[
                { label: "Origin", value: "India (Organic Certified Farms)" },
                { label: "Certification", value: "USDA Organic, EU Organic" },
                { label: "Grade", value: "Certified Organic" },
                { label: "Color", value: "Light Golden" },
                { label: "Processing", value: "Chemical-free" },
                { label: "GMO Status", value: "Non-GMO Verified" },
                { label: "Moisture", value: "< 0.1%" },
                { label: "Packaging", value: "25kg, 50kg Organic certified bags" },
            ]}
            uses={[
                "Organic food manufacturing",
                "Health food products",
                "Organic beverage production",
                "Natural confectionery",
                "Premium retail packaging",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "USA, Europe, Japan, Australia" },
                { label: "Supply Ability", value: "500+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["Organic Granulated", "Organic Raw", "Organic Powdered"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sugar", href: "/more/sugar-export" },
                { label: "Organic Sugar" },
            ]}
            backLink="/more/sugar-export"
            backLinkText="Back to Sugar Products"
            canonicalUrl="/products/sugar/organic-sugar"
            metaTitle="Organic Sugar Exporter India | USDA Certified | Patel Impex"
            metaDescription="Export certified organic sugar from India. USDA and EU organic certified. Non-GMO, chemical-free. Premium quality for health-conscious markets."
        />
    );
};

export default OrganicSugarDetail;
