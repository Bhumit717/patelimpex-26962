import { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  // Removed explicit audio overlay state as requested

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = -1;

    const renderLoop = () => {
      const section = sectionRef.current;
      const video = videoRef.current;

      if (section && video && video.duration) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate usage based on how far we've scrolled into the section
        // 0% when section top is at 0, 100% when section bottom meets bottom of screen
        const totalDistance = rect.height - viewportHeight;
        const scrolled = -rect.top;

        let progress = Math.max(0, Math.min(1, scrolled / totalDistance));

        if (Number.isFinite(progress)) {
          // Map scroll progress directly to video time
          const targetTime = video.duration * progress;

          // Only update if time has changed significantly (0.001s) to reduce DOM thrashing
          // But kept small enough to be smooth
          if (Math.abs(targetTime - lastTime) > 0.001) {
            video.currentTime = targetTime;
            lastTime = targetTime;
            // Ensure sound attempts to play
            video.muted = false;
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    // Height determines total scroll distance - Kept at 600vh for smooth precision
    <main ref={sectionRef} className="relative h-[600vh] bg-white" role="banner">

      {/* Sticky container: Pins content to viewport while scrolling */}
      {/* Desktop: increased pt to 32 to CLEAR header, but reduced font sizes below to fit bottom */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-20 lg:pt-32">
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-12 items-center content-center h-full">

            {/* Left Side - Content */}
            <div className="space-y-1 lg:space-y-4 text-slate-700 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center">
              {/* About Us Pill */}
              <div className="flex justify-center lg:justify-start pb-1">
                <div className="px-4 py-1 lg:px-6 lg:py-2 rounded-full bg-green-50 border border-green-100 text-green-600 font-graduate text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  About Us
                </div>
              </div>

              {/* Cursive Welcome Line - Reduced Desktop Size to fit */}
              <div>
                <h1 className="font-montecarlo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-slate-900 leading-[1.1] py-0 lg:py-1">
                  Welcome to Patel Impex
                </h1>
              </div>

              {/* Description Paragraphs - Reduced Desktop Size/Spacing */}
              <div className="space-y-1 lg:space-y-4 text-sm sm:text-lg lg:text-xl leading-relaxed font-fondamento text-slate-600 px-2 max-w-2xl text-left italic">
                <p>
                  Patel Impex is a prominent Export-Import Representative company based in
                  India. We specialize in agricultural commodities.
                </p>
                <p className="hidden md:block">
                  Our mission is to provide the "essence of the agro resources" to the international
                  market, ensuring quality, consistency, and timely service.
                </p>
              </div>

              {/* Sketched Slogan - Reduced Desktop Size to fit */}
              <div className="pt-0 lg:pt-4 max-w-4xl text-left px-2">
                <h2 className="font-fredericka text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-green-600 leading-[1.1] tracking-wider uppercase flex flex-col items-start">
                  <span className="whitespace-nowrap">THINK TRADE.</span>
                  <span className="whitespace-nowrap">THINK PATEL</span>
                </h2>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="flex flex-col justify-center items-center order-1 lg:order-2 space-y-2 w-full pb-2 lg:pb-0">
              {/* Main Video Section */}
              <div className="relative w-full max-w-[220px] sm:max-w-sm lg:max-w-md mx-auto">
                <video
                  ref={videoRef}
                  className="w-full h-auto block"
                  playsInline
                  preload="auto"
                  muted={false}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Blur Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-[120px] -z-10 opacity-30"></div>
      </div>
    </main>
  );
};

export default Hero;
