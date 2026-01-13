import globalTradeLogo from "@/assets/logos/global-trade-logo.png";
import europeanImportLogo from "@/assets/logos/european-import-logo.png";
import asiaPacificLogo from "@/assets/logos/asia-pacific-logo.png";
import middleEastLogo from "@/assets/logos/middle-east-logo.png";
import nordicImportLogo from "@/assets/logos/nordic-import-logo.png";
import americasTradeLogo from "@/assets/logos/americas-trade-logo.png";
import africanImportLogo from "@/assets/logos/african-import-logo.png";
import pacificRimLogo from "@/assets/logos/pacific-rim-logo.png";
import continentalTradeLogo from "@/assets/logos/continental-trade-logo.png";
import internationalBuyersLogo from "@/assets/logos/international-buyers-logo.png";

const LogoScroll = () => {
  const logos = [
    { src: globalTradeLogo, alt: "Global Trade Solutions LLC" },
    { src: europeanImportLogo, alt: "European Import Partners" },
    { src: asiaPacificLogo, alt: "Asia Pacific Trading Co" },
    { src: middleEastLogo, alt: "Middle East Import Group" },
    { src: nordicImportLogo, alt: "Nordic Import Solutions" },
    { src: americasTradeLogo, alt: "Americas Trade Network" },
    { src: africanImportLogo, alt: "African Import Alliance" },
    { src: pacificRimLogo, alt: "Pacific Rim Importers" },
    { src: continentalTradeLogo, alt: "Continental Trade Corp" },
    { src: internationalBuyersLogo, alt: "International Buyers Group" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Global Import Export Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnering with top <a href="/about" className="text-primary hover:underline">import export businesses</a> and 
            <a href="/services" className="text-primary hover:underline ml-1">export companies</a> worldwide
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-fast">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;