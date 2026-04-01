import EnhancedProductCategoryTemplate from "@/components/EnhancedProductCategoryTemplate";
import logisticsImg from "@/assets/global-export-shipping.jpg";

const IndustrialExport = () => {
  const products = [
    { 
      name: "Precision CNC Machines", 
      image: logisticsImg, 
      link: "/products/cnc-machine-export", 
      description: "High-precision computer numerical control machines for industrial manufacturing." 
    },
    { 
      name: "Industrial Motors", 
      image: logisticsImg, 
      link: "/products/industrial-motor-export", 
      description: "Heavy-duty electric motors and engine parts for global industrial power needs." 
    },
    { 
      name: "Steel & Metal Sheets", 
      image: logisticsImg, 
      link: "/products/steel-sheets-export", 
      description: "Premium steel sheets and metal structural components for construction and engineering." 
    },
    { 
      name: "Welding & Power Tools", 
      image: logisticsImg, 
      link: "/products/welding-machine-export", 
      description: "Professional welding machines, power drills, and workshop equipment." 
    },
    { 
      name: "Hardware & Bearings", 
      image: logisticsImg, 
      link: "/products/ball-bearings-export", 
      description: "Precision ball bearings, hardware fittings, and conveyor belt solutions." 
    },
    { 
      name: "Industrial Piping", 
      image: logisticsImg, 
      link: "/products/industrial-pipes-export", 
      description: "Heavy-duty industrial pipes, hydraulic presses, and fluid management systems." 
    },
  ];

  return (
    <EnhancedProductCategoryTemplate
      category="Engineering"
      title="Industrial & Hardware"
      description="Patel Impex is a premier exporter of precision industrial machinery and technical equipment. From advanced CNC machines to robust power tools and metal structural products."
      products={products}
      breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Industrial" }]}
      canonicalUrl="/products/industrial"
      metaTitle="Industrial Machinery Exporter India | Hardware & Engineering | Patel Impex"
      metaDescription="Leading Indian exporter of industrial machinery, CNC machines, power tools, and precision engineering components. Global supply of hardware and metallurgy."
    />
  );
};

export default IndustrialExport;
