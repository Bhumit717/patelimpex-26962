
import { useState, useEffect } from "react";

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Faster, more professional stages
    const timer1 = setTimeout(() => setStage(1), 600);  // PATEL
    const timer2 = setTimeout(() => setStage(2), 1200); // IMPEX
    const timer3 = setTimeout(() => setStage(3), 1800); // Quality Line
    const timer4 = setTimeout(() => setIsExiting(true), 2500); // Start Exit
    const timer5 = setTimeout(() => onComplete(), 3200); // Complete

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
      role="dialog"
      aria-label="Welcome to Patel Impex"
    >
      {/* Decorative background stripes for a premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-slate-900" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-slate-900" />
      </div>

      <div className="text-center space-y-4 px-4 relative z-10">
        <div className={`overflow-hidden`}>
          <span className={`font-montecarlo text-5xl md:text-7xl text-slate-400 block transition-all duration-700 ${stage >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Welcome to
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-6">
          <h1 className={`font-graduate text-6xl md:text-[10rem] font-black tracking-tighter transition-all duration-700 ease-out ${stage >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            PATEL
          </h1>
          <h1 className={`font-fredericka text-6xl md:text-[10rem] text-green-600 transition-all duration-700 delay-100 ease-out ${stage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            IMPEX
          </h1>
        </div>

        <div className={`overflow-hidden pt-4`}>
          <p className={`font-fondamento text-xl md:text-3xl text-slate-500 italic transition-all duration-1000 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
            "The Essence of Agro Resources"
          </p>
        </div>

        {/* Minimalist Progress Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-slate-100">
          <div
            className="h-full bg-green-600 transition-all duration-[2500ms] ease-out"
            style={{ width: stage >= 3 ? '100%' : '0%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default OpeningAnimation;

