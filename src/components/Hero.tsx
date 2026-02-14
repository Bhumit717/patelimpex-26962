import { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt to autoplay. 
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay blocked by browser:", error);
      });
    }
  }, []);

  return (
    <main className="relative min-h-screen flex items-center pt-20 lg:pt-32 overflow-hidden" role="banner">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-4 lg:space-y-8 text-slate-700 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center animate-fade-in">
            <div className="flex justify-center lg:justify-start">
              <div className="px-6 py-2 rounded-full border border-slate-200 text-green-600 font-graduate text-xs uppercase tracking-[0.2em] font-bold">
                About Us
              </div>
            </div>

            <div>
              <h1 className="font-montecarlo text-5xl sm:text-6xl lg:text-7xl xl:text-9xl text-slate-900 leading-[1.1]">
                Welcome to Patel Impex
              </h1>
            </div>

            <div className="space-y-4 text-lg sm:text-xl lg:text-2xl leading-relaxed font-fondamento text-slate-600 max-w-2xl italic">
              <p>
                Patel Impex is a prominent Export-Import Representative company based in
                India. We specialize in agricultural commodities.
              </p>
              <p className="hidden md:block">
                Our mission is to provide the "essence of the agro resources" to the international
                market, ensuring quality, consistency, and timely service.
              </p>
            </div>

            <div className="pt-4">
              <h2 className="font-fredericka text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-green-600 leading-[1.1] tracking-wider uppercase flex flex-col items-center lg:items-start">
                <span className="whitespace-nowrap">THINK TRADE.</span>
                <span className="whitespace-nowrap">THINK PATEL</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Video Section */}
          <div className="flex justify-center items-center order-1 lg:order-2 w-full">
            <video
              ref={videoRef}
              className="w-full h-auto block"
              playsInline
              preload="auto"
              loop={false}
              muted
              autoPlay
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </main>

  );
};

export default Hero;

