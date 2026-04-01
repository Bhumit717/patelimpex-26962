import EnhancedProductDetailTemplate from "@/components/EnhancedProductDetailTemplate";
import cncImg from "@/assets/global-export-shipping.jpg"; // Placeholder until exact asset found

const CNCMachineExport = () => {
  const specs = [
    { label: "Type", value: "3-Axis & 5-Axis VMC/HMC" },
    { label: "Control System", value: "FANUC / Siemens / Mitsubishi" },
    { label: "Spindle Speed", value: "8,000 - 15,000 RPM" },
    { label: "Accuracy", value: "±0.005mm Positioning" },
    { label: "Applications", value: "Aerospace, Automotive, Mold Making" },
  ];

  const features = [
    "High-speed precision machining for complex components",
    "Robust cast iron bed for vibration-free operation",
    "Advanced thermal compensation for consistent accuracy",
    "Automatic tool changers (ATC) with high storage",
    "IoT-ready control systems for smart manufacturing"
  ];

  return (
    <EnhancedProductDetailTemplate
      title="Precision CNC Machines"
      subtitle="High-Efficiency Computer Numerical Control Machinery"
      description="Patel Impex exports state-of-the-art CNC machines optimized for high-volume production and precision engineering. Our machines are sourced from top Indian manufacturers, featuring global standard controllers and robust mechanical builds."
      mainImage={cncImg}
      galleryImages={[cncImg, cncImg, cncImg]}
      specifications={specs}
      features={features}
      category="Industrial Hub"
      categoryLink="/products/industrial"
      metaTitle="CNC Machine Exporter India | Precision Engineering | Patel Impex"
      metaDescription="Leading exporter of high-precision CNC machines from India. VMC, HMC, and Lathes with global certifications and documentation support."
    />
  );
};

export default CNCMachineExport;
