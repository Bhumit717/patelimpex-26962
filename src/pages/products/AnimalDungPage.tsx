import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import cakeImg from "@/assets/products/cow-dung-cake.png";
import powderImg from "@/assets/products/animal-dung-powder.png";

const AnimalDungPage = () => {
    const products = [
        {
            name: "Cow Dung Cake",
            image: cakeImg,
            link: "/products/animal-dung/cake",
            description: "Traditional dried organic cow dung cakes, sun-dried and rich in minerals, ideal for agricultural soil enrichment and traditional use.",
        },
        {
            name: "Animal Dung Powder",
            image: powderImg,
            link: "/products/animal-dung/powder",
            description: "Finely processed and decomposed organic manure powder, perfect for pot culture, gardening, and large-scale organic farming.",
        },
    ];

    return (
        <EnhancedProductCategoryTemplate
            category="Organic Fertilizers"
            title="Animal Dung Products"
            description="Patel Impex offers premium organic animal dung products, including traditional cakes and processed powder. Sourced from healthy, grass-fed livestock, our products are 100% natural, eco-friendly, and perfect for sustainable agriculture."
            products={products}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Animal Dung" },
            ]}
            canonicalUrl="/products/animal-dung"
            metaTitle="Organic Animal Dung Exporter | Cow Dung Cake & Powder | Patel Impex"
            metaDescription="High-quality organic animal dung products for export. Pure cow dung cakes and manure powder for organic farming. Global export from India. Request a quote."
        />
    );
};

export default AnimalDungPage;
