
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import CustomLanguageSelector from "@/components/CustomLanguageSelector";
import logoVideo from "@/assets/logo_video.mp4";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'top-0 py-1' : 'top-0 py-3'}`} role="banner">
      <div className="container mx-auto px-4 md:px-6">
        <nav className={`transition-all duration-700 flex justify-between items-center rounded-2xl border border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-xl px-6 lg:px-12 ${isScrolled ? 'h-16' : 'h-20 md:h-24'}`}>
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-xl group-hover:scale-110 transition-transform duration-700">
              <video ref={videoRef} src={logoVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-black text-slate-900 font-graduate tracking-tighter leading-none">Patel</span>
              <span className="text-[10px] md:text-xs font-fredericka text-emerald-600 tracking-[0.2em] uppercase font-bold">Impex</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] font-graduate transition-all duration-300 rounded-xl relative group overflow-hidden ${location.pathname === item.href ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname !== item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Language Selector - Desktop Only */}
            <div className="hidden lg:block">
              <CustomLanguageSelector />
            </div>

            <Link to="/inquiry" className="group">
              <button className="!h-10 md:!h-12 !px-4 md:!px-8 bg-slate-900 text-white rounded-xl shadow-xl hover:bg-emerald-600 hover:shadow-emerald-600/20 transition-all duration-500 flex items-center gap-3">
                <span className="font-bold font-graduate uppercase text-[9px] md:text-[10px] tracking-widest">Get Quote</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden ml-4 w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-900 rounded-xl shadow-sm hover:bg-emerald-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-[90px] px-4 transition-all duration-500 ease-out z-40 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="nm-card !p-6 md:!p-8 flex flex-col space-y-6 rounded-[40px] shadow-2xl bg-white border-2 border-slate-50">
          {/* Language Selector - Mobile Menu */}
          <div className="flex justify-center pb-2 border-b border-slate-100">
            <CustomLanguageSelector />
          </div>

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all ${location.pathname === item.href ? 'bg-green-50 text-green-700' : 'hover:bg-white text-slate-700'}`}
            >
              <span className="text-lg font-black font-graduate uppercase tracking-tight">{item.name}</span>
              <ChevronRight size={20} className={location.pathname === item.href ? 'text-green-600' : 'text-slate-300'} />
            </Link>
          ))}
          <Link to="/inquiry" onClick={() => setIsOpen(false)} className="pt-2">
            <button className="nm-btn-dark w-full !h-16 text-lg font-black font-graduate bg-slate-900 !text-white uppercase tracking-widest rounded-[20px] shadow-2xl transition-all duration-300 border-none">
              REQUEST FREE QUOTE
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
