import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";

const cakePlaceholder = "https://images.unsplash.com/photo-1599307734110-60b642699863?q=80&w=800&auto=format&fit=crop";

const AnimalDungCakeDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Organic Fertilizers"
            name="Cow Dung Cake"
            description="Traditional Cow Dung Cakes are made by drying fresh cow dung in the sun. They are a rich source of organic matter and have been used for centuries in agriculture as a natural fertilizer and soil conditioner. Our cakes are sun-dried to perfection, ensuring they are free from harmful pathogens."
            images={[cakePlaceholder]}
            hsCode="3101.00"
            specifications={[
                { label: "Origin", value: "India" },
                { label: "Type", value: "Natural Sun-Dried" },
                { label: "Shape", value: "Circular / Oval" },
                { label: "Size", value: "5-7 inches diameter" },
                { label: "Moisture", value: "< 15%" },
                { label: "Organic Matter", value: "> 40%" },
                { label: "Packaging", value: "Carton Boxes, PP Bags, Bulk" },
                { label: "Chemicals", value: "100% Chemical Free" },
            ]}
            uses={[
                "Organic soil enrichment and conditioning",
                "Used as a natural fuel source for traditional heating",
                "Base for vermicompost production",
                "Natural repellent for certain agricultural pests",
                "Used in traditional ceremonies and rituals",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Middle East, Southeast Asia, Europe" },
                { label: "Supply Ability", value: "100+ MT per month" },
                { label: "Private Labeling", value: "Available for retail packs" },
                { label: "MOQ", value: "1 x 20' FCL" },
                { label: "Payment Terms", value: "T/T, L/C" },
                { label: "Delivery Terms", value: "FOB, CIF" },
            ]}
            formats={["Small (5 inch)", "Large (7 inch)", "Vacuum Packed", "Bulk Carton"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Animal Dung", href: "/products/animal-dung" },
                { label: "Cow Dung Cake" },
            ]}
            backLink="/products/animal-dung"
            backLinkText="Back to Animal Dung Products"
            canonicalUrl="/products/animal-dung/cake"
            metaTitle="Cow Dung Cake Exporter India | Organic Fertilizer | Patel Impex"
            metaDescription="Premium sun-dried cow dung cakes for export. 100% organic, nutrient-rich soil conditioner. Bulk supply available for global markets."
        />
    );
};

export default AnimalDungCakeDetail;
