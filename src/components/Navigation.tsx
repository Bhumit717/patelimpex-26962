
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
    { name: "Certificates", href: "/more/certification-services" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'top-2' : 'top-0'}`} role="banner">
      <div className="container mx-auto px-4">
        <nav className={`transition-all duration-500 flex justify-between items-center rounded-full border-none shadow-xl bg-white/90 backdrop-blur-md px-6 lg:px-10 ${isScrolled ? 'h-20' : 'h-24 md:h-28'}`}>
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <video ref={videoRef} src={logoVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-slate-900 font-graduate leading-none">Patel</span>
              <span className="text-sm md:text-base font-fredericka text-green-600 tracking-widest uppercase">Impex</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] font-graduate transition-all duration-300 rounded-xl relative group overflow-hidden ${location.pathname === item.href ? 'bg-green-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200'}`}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 lg:space-x-6">
            {/* Language Selector - Desktop Only */}
            <div className="hidden lg:block">
              <CustomLanguageSelector />
            </div>

            <Link to="/inquiry">
              <button className="!h-10 md:!h-16 !px-4 md:!px-8 lg:!px-10 nm-btn-green hover:scale-105 active:scale-95">
                <span className="font-bold font-graduate uppercase text-[10px] md:text-[11px] tracking-widest">Get Quote</span>
              </button>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-[110px] px-4 transition-all duration-500 ease-out z-40 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="nm-card !p-6 md:!p-8 flex flex-col space-y-4 rounded-[40px] shadow-2xl bg-white border-2 border-slate-50 max-h-[80vh] overflow-y-auto">
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
