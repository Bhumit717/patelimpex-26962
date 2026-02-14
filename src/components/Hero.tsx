import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 1024
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const video = videoRef.current;
      if (video) {
        video.muted = true; // Mobile requires muted for reliable autoplay
        video.loop = true;
        video.play().catch(e => console.warn("Video autoplay failed:", e));
      }
      return;
    }

    let animationFrameId: number;
    let lastTime = -1;
    let targetTime = 0;
    let currentTime = 0;
    const lerpFactor = 0.08; // High precision smoothing
    let isVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          renderLoop();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const renderLoop = () => {
      if (!isVisible) return;

      const section = sectionRef.current;
      const video = videoRef.current;

      if (section && video && video.duration) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalDistance = rect.height - viewportHeight;
        const scrolled = -rect.top;

        const progress = Math.max(0, Math.min(1, scrolled / totalDistance));

        if (Number.isFinite(progress)) {
          targetTime = video.duration * progress;
          currentTime = currentTime + (targetTime - currentTime) * lerpFactor;

          if (Math.abs(currentTime - lastTime) > 0.001) {
            video.currentTime = currentTime;
            lastTime = currentTime;
            video.muted = false;
          }
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <main
      ref={sectionRef}
      className={`relative ${isMobile ? "h-screen" : "h-[600vh]"} bg-white transition-all duration-500`}
      role="banner"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-20 lg:pt-32">
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-12 items-center content-center h-full">

            {/* Left Side - Content */}
            <div className="space-y-1 lg:space-y-4 text-slate-700 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center animate-fade-in">
              <div className="flex justify-center lg:justify-start pb-1">
                <div className="px-4 py-1 lg:px-6 lg:py-2 rounded-full bg-green-50 border border-green-100 text-green-600 font-graduate text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  About Us
                </div>
              </div>

              <div>
                <h1 className="font-montecarlo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-slate-900 leading-[1.1] py-0 lg:py-1">
                  Welcome to Patel Impex
                </h1>
              </div>

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

              <div className="pt-0 lg:pt-4 max-w-4xl text-left px-2">
                <h2 className="font-fredericka text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-green-600 leading-[1.1] tracking-wider uppercase flex flex-col items-start">
                  <span className="whitespace-nowrap">THINK TRADE.</span>
                  <span className="whitespace-nowrap">THINK PATEL</span>
                </h2>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="flex flex-col justify-center items-center order-1 lg:order-2 space-y-2 w-full pb-2 lg:pb-0">
              <div className="relative w-full max-w-[220px] sm:max-w-sm lg:max-w-md mx-auto transform-gpu">
                <video
                  ref={videoRef}
                  className="w-full h-auto block rounded-2xl shadow-2xl brightness-105 transform-gpu"
                  playsInline
                  preload="auto"
                  muted={true}
                  poster="/hero-bg.jpg"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Visual accent for the video */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-green-100 to-transparent rounded-2xl -z-10 opacity-30 blur-sm"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-[120px] -z-10 opacity-30"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce cursor-pointer lg:flex hidden">
          <span className="text-[10px] font-graduate tracking-widest text-slate-400 uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-slate-300"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
