
import heroMainImg from "@/assets/hero-main.png";

const Hero = () => {
  return (
    <main className="relative min-h-[90svh] flex items-center bg-white pt-24 pb-12 overflow-hidden" role="banner">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 text-slate-700 text-center lg:text-left order-2 lg:order-1">
            {/* About Us Pill */}
            <div className="flex justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="px-6 py-2 rounded-full bg-green-50 border border-green-100 text-green-600 font-graduate text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                About Us
              </div>
            </div>

            {/* Cursive Welcome Line */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <h1 className="font-montecarlo text-6xl sm:text-7xl lg:text-8xl xl:text-[110px] text-slate-900 leading-[1.1] py-2">
                Welcome to Patel Impex
              </h1>
            </div>

            {/* Description Paragraphs in Fondamento */}
            <div className="space-y-6 text-lg sm:text-xl lg:text-2xl leading-relaxed font-fondamento text-slate-600 px-2 max-w-2xl text-left italic animate-slide-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <p>
                Patel Impex is a prominent Export-Import Representative company based in
                India. We specialize in agricultural commodities and serve as a strategic bridge
                between international buyers and global suppliers.
              </p>
              <p className="hidden md:block">
                Our mission is to provide the "essence of the agro resources" to the international
                market, ensuring quality, consistency, and timely service.
              </p>
            </div>

            {/* Sketched Slogan in GREEN */}
            <div className="pt-6 max-w-4xl text-left px-2 animate-slide-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
              <h2 className="font-fredericka text-2xl sm:text-5xl lg:text-7xl xl:text-8xl text-green-600 leading-[1.1] tracking-wider uppercase flex flex-col items-start">
                <span className="whitespace-nowrap">THINK TRADE.</span>
                <span className="whitespace-nowrap">THINK PATEL</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Main Image */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-lg lg:max-w-2xl transform hover:scale-105 transition-transform duration-1000">
              <img
                src={heroMainImg}
                alt="Patel Impex Peanuts Export"
                className="w-full h-auto object-contain drop-shadow-2xl"
                fetchPriority="high"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Blur Elements for premium feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-[120px] -z-10 opacity-30"></div>
    </main>
  );
};

export default Hero;
