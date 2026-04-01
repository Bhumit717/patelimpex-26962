import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import motorImg from "@/assets/global-export-shipping.jpg";

const IndustrialMotorExport = () => {
  const specs = [
    { label: "Power Range", value: "0.37 kW to 1000 kW" },
    { label: "Frame Sizes", value: "63 to 450" },
    { label: "Efficiency Class", value: "IE2, IE3, IE4 Premium" },
    { label: "Protection", value: "IP55 / IP56 / IP66" },
    { label: "Mounting", value: "Foot (B3), Flange (B5), Face (B14)" },
  ];

  const features = [
    "High-torque performance for heavy industrial loads",
    "Energy-efficient design reducing long-term operational costs",
    "Balanced rotors for low noise and vibration levels",
    "Robust cast iron or aluminum enclosures for durability",
    "VFD-compatible windings for precise speed control"
  ];

  return (
    <EnhancedProductDetailTemplate
      title="Industrial Electric Motors"
      subtitle="High-Efficiency AC/DC Induction Motors"
      description="Patel Impex exports high-performance electric motors for industrial, agricultural, and commercial applications. Certified to international efficiency standards, our motors ensure maximum uptime and reliability."
      mainImage={motorImg}
      galleryImages={[motorImg, motorImg, motorImg]}
      specifications={specs}
      features={features}
      category="Industrial Hub"
      categoryLink="/products/industrial"
      metaTitle="Industrial Motor Exporter India | AC/DC Motors | Patel Impex"
      metaDescription="Premium Indian exporter of IE2, IE3, and IE4 industrial motors. Certified motors for machinery, pumps, and fans globally."
    />
  );
};

export default IndustrialMotorExport;
