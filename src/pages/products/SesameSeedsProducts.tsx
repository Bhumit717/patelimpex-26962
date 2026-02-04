import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import hulledSesameImg from "@/assets/products/hulled-sesame.png";
import naturalSesameImg from "@/assets/products/natural-sesame.jpg";

const SesameSeedsProducts = () => {
    const products = [
        {
            name: "Hulled Sesame Seeds",
            image: hulledSesameImg,
            link: "/products/sesame-seeds/hulled",
            description: "Mechanically hulled and auto-dried sesame seeds with superior whiteness and 99.95%+ purity.",
        },
        {
            name: "Natural Sesame Seeds",
            image: naturalSesameImg,
            link: "/products/sesame-seeds/natural",
            description: "Premium natural sesame seeds retaining their original nutritional value and rich nutty flavor.",
        },
    ];

    return (
        <EnhancedProductCategoryTemplate
            category="Oil Seeds"
            title="Sesame Seeds Products"
            description="Patel Impex offers high-quality Sesame Seeds sourced from the best cultivation regions in India. We supply both Hulled and Natural varieties, processed in state-of-the-art facilities to ensure international standards of purity and hygiene."
            products={products}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sesame Seeds" },
            ]}
            canonicalUrl="/products/sesame-seeds"
            metaTitle="Sesame Seeds Exporter India | Hulled & Natural | Patel Impex"
            metaDescription="Premium exporter of Hulled and Natural Sesame Seeds from India. 99.9% purity, Sortex quality. Contact for bulk export inquiries."
        />
    );
};

export default SesameSeedsProducts;
