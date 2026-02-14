import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import jaggeryPowderImg from "@/assets/products/subtypes/jaggery-powder.png";
import jaggeryRoundsImg from "@/assets/products/subtypes/jaggery-rounds.png";

const JaggeryDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Sugar Products"
            name="Jaggery (Gur)"
            description="Traditional Indian sweetener (Gur) available in powder, rounds (balls), and blocks. Rich in minerals and natural flavor, chemical-free."
            images={[jaggeryRoundsImg, jaggeryPowderImg]}
            hsCode="1701.13"
            specifications={[
                { label: "Origin", value: "India (Maharashtra, Uttar Pradesh)" },
                { label: "Grade", value: "Traditional Premium" },
                { label: "Type", value: "Sugarcane Jaggery" },
                { label: "Color", value: "Golden Brown to Dark Brown" },
                { label: "Moisture", value: "< 8%" },
                { label: "Sucrose", value: "65-85%" },
                { label: "Processing", value: "Traditional Method" },
                { label: "Packaging", value: "25kg bags / Custom blocks" },
                { label: "Certifications", value: "FSSAI, Organic (on request)" },
            ]}
            uses={[
                "Traditional Indian sweets and desserts",
                "Ayurvedic medicine preparation",
                "Natural sweetener for beverages",
                "Health food applications",
                "Export to Indian diaspora markets",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Global, USA, UK, Middle East, SE Asia" },
                { label: "Supply Ability", value: "500+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["Jaggery Powder", "Jaggery Rounds", "Jaggery Blocks", "Organic Jaggery"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sugar", href: "/more/sugar-export" },
                { label: "Jaggery" },
            ]}
            backLink="/more/sugar-export"
            backLinkText="Back to Sugar Products"
            canonicalUrl="/products/sugar/jaggery"
            metaTitle="Jaggery Exporter India | Organic Gur | Patel Impex"
            metaDescription="Export traditional Indian jaggery (gur). Available in powder, rounds, and blocks. Natural sweetener rich in minerals. Premium quality for global markets."
        />
    );
};

export default JaggeryDetail;
