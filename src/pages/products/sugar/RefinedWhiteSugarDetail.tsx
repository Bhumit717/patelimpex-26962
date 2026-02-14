import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import m30Img from "@/assets/products/subtypes/refined-white-sugar-m30.png";
import s30Img from "@/assets/products/subtypes/refined-white-sugar-s30.png";
import crystalImg from "@/assets/products/subtypes/white-crystal-sugar.png";

const RefinedWhiteSugarDetail = () => {
    return (
        <EnhancedProductDetailTemplate
            category="Sugar Products"
            name="Refined White Sugar (ICUMSA 45/100)"
            description="Premium quality Refined White Sugar, available in S-30 and M-30 grades. Known for its pure white color, fine grain size, and high purity, suitable for direct consumption and varied food industries."
            images={[m30Img, s30Img, crystalImg]}
            hsCode="1701.99"
            specifications={[
                { label: "Origin", value: "India" },
                { label: "ICUMSA", value: "45-100" },
                { label: "Grade", value: "S-30, M-30" },
                { label: "Color", value: "Pure White" },
                { label: "Polarization", value: "99.8% minimum" },
                { label: "Moisture", value: "< 0.04%" },
                { label: "Ash Content", value: "< 0.04%" },
                { label: "Packaging", value: "25kg, 50kg PP bags" },
                { label: "Certifications", value: "FSSAI, ISO 22000, Halal" },
            ]}
            uses={[
                "Food and beverage manufacturing",
                "Confectionery production",
                "Bakery and pastry applications",
                "Retail consumer packaging",
                "Pharmaceutical applications",
            ]}
            exportInfo={[
                { label: "Major Export Markets", value: "Europe, Middle East, Asia, Africa" },
                { label: "Supply Ability", value: "1000+ MT per month" },
                { label: "Container Capacity", value: "23-24 MT per 20' FT container" },
                { label: "Payment Terms", value: "T/T, L/C, CAD" },
                { label: "Delivery Terms", value: "FOB, CIF, CNF, EXW" },
                { label: "Port of Loading", value: "Mundra Port, Nhava Sheva" },
                { label: "Sample Policy", value: "Free samples available (Freight by buyer)" },
                { label: "Private Labeling", value: "Yes, as per customer requirement" },
            ]}
            formats={["ICUMSA 45", "ICUMSA 100", "S-30 Grade", "M-30 Grade"]}
            breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: "Sugar", href: "/more/sugar-export" },
                { label: "Refined White Sugar" },
            ]}
            backLink="/more/sugar-export"
            backLinkText="Back to Sugar Products"
            canonicalUrl="/products/sugar/refined-white-sugar"
            metaTitle="Refined White Sugar Exporter India | ICUMSA 45-100 | Patel Impex"
            metaDescription="Export quality Refined White Sugar from India. ICUMSA 45-100 standards. S-30, M-30 grades available. Premium quality for global markets."
        />
    );
};

export default RefinedWhiteSugarDetail;
