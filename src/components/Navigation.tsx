import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, Sparkles, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import CustomLanguageSelector from "@/components/CustomLanguageSelector";

import logoVideo from "@/assets/logo_video.mp4";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();

  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Products",
    href: "/products"
  }, {
    name: "Certificates",
    href: "/more/certification-services"
  }, {
    name: "News",
    href: "/news"
  }, {
    name: "Blog",
    href: "/blog",
    subItems: [
      { name: "Resources", href: "/more" },
      { name: "Sitemap", href: "/seo" },
      { name: "FAQ", href: "/faq" }
    ]
  }, {
    name: "Contact",
    href: "/contact"
  }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const checkTime = () => {
      if (!video.duration || isNaN(video.duration)) return;

      // Safety check: if video is paused for more than 1 second, force play
      if (video.paused && video.readyState >= 3) {
        video.play().catch(() => { });
      }

      // Forward direction
      if (video.playbackRate > 0) {
        if (video.currentTime >= video.duration - 0.5) {
          video.pause();
          video.playbackRate = -1;
          video.play().catch(() => { });
        }
      }
      // Backward direction
      else {
        if (video.currentTime <= 0.5) {
          video.pause();
          video.playbackRate = 1;
          video.play().catch(() => { });
        }
      }
    };

    const intervalId = setInterval(checkTime, 100); // Check every 100ms

    // Initial play
    video.play().catch(() => { });

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleQuoteClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#e9edf3]/95 backdrop-blur-md shadow-lg' : 'bg-[#e9edf3]'}`} role="banner">
    {/* Ultra Pro Contact Bar with Advanced Animations */}
    <div className="bg-[#e9edf3] text-slate-700 py-2 md:py-3 px-4 border-b border-gray-200 relative overflow-visible" role="complementary" aria-label="Contact information and certifications">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center text-sm relative z-10 gap-2">
        <div className="flex items-center flex-wrap gap-2 sm:gap-8">
          <a href="tel:+917984133417" className="flex items-center space-x-2 sm:space-x-3 hover:text-blue-600 transition-all duration-300 cursor-pointer group" aria-label="Call Patel Impex at +91 798 41 33 417">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-[4px_4px_8px_#cfd6e0,-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff] transition-all duration-300">
              <Phone size={14} className="text-blue-600" aria-hidden="true" />
            </div>
            <span className="font-semibold transition-all duration-300 whitespace-nowrap text-slate-600 group-hover:text-blue-600">+91 798 41 33 417</span>
          </a>
          <a href="mailto:info@patelimpex.com" className="flex items-center space-x-2 sm:space-x-3 hover:text-blue-600 transition-all duration-300 cursor-pointer group" aria-label="Email Patel Impex at info@patelimpex.com">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-[4px_4px_8px_#cfd6e0,-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff] transition-all duration-300">
              <Mail size={14} className="text-teal-600" aria-hidden="true" />
            </div>
            <span className="font-semibold transition-all duration-300 whitespace-nowrap text-slate-600 group-hover:text-blue-600">info@patelimpex.com</span>
          </a>

        </div>
        <div className="absolute top-1 right-2 md:static md:flex md:items-center md:space-x-4" role="text" aria-label="Company certification">
          <CustomLanguageSelector />
        </div>
      </div>
    </div>

    {/* Ultra Pro Main Navigation */}
    <nav className="bg-[#e9edf3]/95 backdrop-blur-sm relative" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-24">
          <Link to="/" className="flex items-center group" aria-label="Patel Impex - Home page">
            <div className="relative flex items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-[6px_6px_10px_#cfd6e0,-6px_-6px_10px_#ffffff] mr-2 md:mr-3 border-4 border-[#e9edf3]">
                <video
                  ref={videoRef}
                  src={logoVideo}
                  className="w-full h-full object-cover rounded-full"
                  autoPlay
                  muted
                  playsInline
                />
              </div>
              <div className="text-xl md:text-3xl font-black text-slate-700">
                Patel<span className="text-blue-600">Impex</span>
              </div>
            </div>
          </Link>

          {/* Ultra Advanced Desktop Menu */}
          <div className="hidden md:block" role="menubar" aria-label="Main navigation menu">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item, index) => (
                item.subItems ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-[12px] flex items-center ${location.pathname === item.href || item.subItems.some(sub => location.pathname === sub.href) ? 'text-blue-600 shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff]' : 'text-slate-600 hover:text-blue-600 hover:shadow-[6px_6px_10px_#cfd6e0,-6px_-6px_10px_#ffffff]'}`}
                      role="menuitem"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </Link>
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 bg-[#e9edf3] rounded-[20px] shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] p-2 overflow-hidden transition-all duration-300 w-48 ${openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-3 text-sm font-semibold rounded-[10px] transition-all duration-300 mb-1 last:mb-0 ${location.pathname === subItem.href ? 'text-blue-600 shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff]' : 'text-slate-600 hover:text-blue-600 hover:shadow-[3px_3px_6px_#cfd6e0,-3px_-3px_6px_#ffffff]'}`}
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.name} to={item.href} className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-[12px] flex items-center ${location.pathname === item.href ? 'text-blue-600 shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff]' : 'text-slate-600 hover:text-blue-600 hover:shadow-[6px_6px_10px_#cfd6e0,-6px_-6px_10px_#ffffff]'}`} role="menuitem" aria-current={location.pathname === item.href ? 'page' : undefined}>
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Ultra Pro Get Quote Button */}
          <div className="hidden md:block">
            <Link to="/inquiry" onClick={handleQuoteClick}>
              <Button className={`nm-btn !w-auto !px-8 !py-6 text-slate-700 hover:text-blue-600 group ${isLoading ? 'animate-pulse' : ''}`}>
                <span className="relative z-10 flex items-center font-bold">
                  {isLoading ? <>
                    <div className="w-4 h-4 border-2 border-slate-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Loading...
                  </> : <>
                    <Zap className="mr-2 h-5 w-5 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                    Get Quote
                  </>}
                </span>
              </Button>
            </Link>
          </div>

          {/* Ultra Pro Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/inquiry" className="block">
              <Button size="sm" className="nm-btn !px-3 !py-2 !text-xs !w-auto">
                <Zap className="h-3 w-3 mr-1 text-blue-600" />
                Quote
              </Button>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-11 h-11 text-slate-600 bg-[#e9edf3] shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#cfd6e0,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 rounded-[15px] group outline-none" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
              {isOpen ? <X size={24} className="group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" /> : <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Ultra Pro Mobile Menu with Advanced Animations */}
      <div id="mobile-menu" className={`md:hidden transition-all duration-500 transform origin-top ${isOpen ? 'max-h-[85vh] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 overflow-hidden'}`} role="menu" aria-label="Mobile navigation menu">
        <div className="bg-[#e9edf3] border-t border-gray-200 px-4 pt-4 pb-6 space-y-4 relative overflow-y-auto max-h-[85vh] shadow-inner">
          <div className="absolute inset-0 bg-[#e9edf3]" aria-hidden="true"></div>
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#cfd6e0_1px,transparent_1px)] [background-size:16px_16px]"></div>


          {navItems.map((item, index) => (
            item.subItems ? (
              <div key={item.name} className="space-y-2">
                <Link to={item.href} className={`block px-6 py-4 text-lg font-bold rounded-full transition-all duration-300 relative group ${location.pathname === item.href ? 'text-blue-600 shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]' : 'text-slate-700 hover:text-blue-600 shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]'}`} onClick={() => setIsOpen(false)} role="menuitem">
                  <span className="relative z-10">{item.name}</span>
                </Link>
                <div className="pl-4 space-y-4 relative z-20 mt-4">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={`block px-6 py-4 text-lg font-bold rounded-full transition-all duration-300 relative z-20 ${location.pathname === subItem.href ? 'text-blue-600 shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]' : 'text-slate-700 hover:text-blue-600 shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                      role="menuitem"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.name} to={item.href} className={`block px-6 py-4 text-lg font-bold rounded-full transition-all duration-300 relative group ${location.pathname === item.href ? 'text-blue-600 shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]' : 'text-slate-700 hover:text-blue-600 shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]'}`} onClick={() => setIsOpen(false)} role="menuitem" aria-current={location.pathname === item.href ? 'page' : undefined}>
                <span className="relative z-10">{item.name}</span>
              </Link>
            )
          ))}

          <div className="px-4 py-4">
            <Link to="/inquiry" onClick={() => {
              setIsOpen(false);
              handleQuoteClick();
            }}>
              <Button className="w-full nm-btn !py-4 text-slate-700 hover:text-blue-600">
                <span className="relative z-10 flex items-center justify-center font-bold">
                  <Zap className="mr-2 h-5 w-5 text-blue-500" />
                  Get Quote Now
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header >;
};
export default Navigation;