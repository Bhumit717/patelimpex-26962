import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Sparkles, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
  const handleQuoteClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-white'}`} role="banner">
    {/* Ultra Pro Contact Bar with Advanced Animations */}
    <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 text-slate-700 py-2 md:py-3 px-4 border-b border-blue-100 relative overflow-hidden" role="complementary" aria-label="Contact information and certifications">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" aria-hidden="true"></div>
      <div className="container mx-auto flex justify-between items-center text-sm relative z-10">
        <div className="flex items-center flex-wrap gap-2 sm:gap-8">
          <a href="tel:+917984133417" className="flex items-center space-x-2 sm:space-x-3 hover:text-blue-600 transition-all duration-300 cursor-pointer group" aria-label="Call Patel Impex at +91 798 41 33 417">
            <div className="relative">
              <Phone size={16} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <div className="absolute -inset-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 animate-pulse" aria-hidden="true"></div>
            </div>
            <span className="font-semibold group-hover:font-bold transition-all duration-300 whitespace-nowrap">+91 798 41 33 417</span>
          </a>
          <a href="mailto:info@patelimpex.com" className="flex items-center space-x-2 sm:space-x-3 hover:text-blue-600 transition-all duration-300 cursor-pointer group" aria-label="Email Patel Impex at info@patelimpex.com">
            <div className="relative">
              <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <div className="absolute -inset-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-20 animate-pulse" aria-hidden="true"></div>
            </div>
            <span className="font-semibold group-hover:font-bold transition-all duration-300 whitespace-nowrap">info@patelimpex.com</span>
          </a>

        </div>
        <div className="hidden md:flex items-center space-x-4" role="text" aria-label="Company certification">

        </div>
      </div>
    </div>

    {/* Ultra Pro Main Navigation */}
    <nav className="bg-white/95 backdrop-blur-sm relative" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center group" aria-label="Patel Impex - Home page">
            <div className="relative flex items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 mr-2 md:mr-3">
                <img src="/logo.png" alt="Patel Impex Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="text-xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 animate-text-shimmer bg-size-200 bg-pos-0">
                Patel<span className="text-slate-700">Impex</span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500" aria-hidden="true"></div>
            </div>
          </Link>

          {/* Ultra Advanced Desktop Menu */}
          <div className="hidden md:block" role="menubar" aria-label="Main navigation menu">
            <div className="ml-10 flex items-baseline space-x-8">
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
                      className={`relative px-4 py-3 text-sm font-bold transition-all duration-500 group focus:ring-2 focus:ring-blue-500 focus:outline-none rounded flex items-center ${location.pathname === item.href || item.subItems.some(sub => location.pathname === sub.href) ? 'text-blue-600 scale-110' : 'text-slate-700 hover:text-blue-600 hover:scale-105'}`}
                      role="menuitem"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                      <span className={`absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 transform transition-all duration-500 ${location.pathname === item.href || item.subItems.some(sub => location.pathname === sub.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'} rounded-full`}></span>
                    </Link>
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-blue-100 overflow-hidden transition-all duration-300 ${openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-6 py-3 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${location.pathname === subItem.href ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50'}`}
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.name} to={item.href} className={`relative px-4 py-3 text-sm font-bold transition-all duration-500 group focus:ring-2 focus:ring-blue-500 focus:outline-none rounded ${location.pathname === item.href ? 'text-blue-600 scale-110' : 'text-slate-700 hover:text-blue-600 hover:scale-105'}`} style={{
                    animationDelay: `${index * 0.1}s`
                  }} role="menuitem" aria-current={location.pathname === item.href ? 'page' : undefined}>
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                    <span className={`absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 transform transition-all duration-500 ${location.pathname === item.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'} rounded-full`}></span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute top-0 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Ultra Pro Get Quote Button */}
          <div className="hidden md:block">
            <Link to="/inquiry" onClick={handleQuoteClick}>
              <Button className={`bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white font-black px-8 py-3 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-4xl relative overflow-hidden group ${isLoading ? 'animate-pulse' : ''}`}>
                <span className="relative z-10 flex items-center">
                  {isLoading ? <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Loading...
                  </> : <>
                    <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Get Quote
                    <Sparkles className="ml-2 h-5 w-5 group-hover:-rotate-12 transition-transform duration-300" />
                  </>}
                </span>

                {/* Ultra Advanced Button Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
          </div>

          {/* Ultra Pro Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/inquiry" className="block">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-3 py-2 text-xs shadow-lg">
                <Zap className="h-3 w-3 mr-1" />
                Quote
              </Button>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-11 h-11 text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-300 rounded-xl group focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
              {isOpen ? <X size={24} className="group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" /> : <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Ultra Pro Mobile Menu with Advanced Animations */}
      <div id="mobile-menu" className={`md:hidden transition-all duration-500 transform origin-top ${isOpen ? 'max-h-[40rem] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 overflow-hidden'}`} role="menu" aria-label="Mobile navigation menu">
        <div className="bg-white border-t border-blue-100 px-4 pt-4 pb-6 space-y-2 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-50" aria-hidden="true"></div>

          {navItems.map((item, index) => (
            item.subItems ? (
              <div key={item.name} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Link to={item.href} className={`block px-4 py-4 text-base font-bold rounded-2xl transition-all duration-300 relative group focus:ring-2 focus:ring-blue-500 focus:outline-none ${location.pathname === item.href ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-teal-50 scale-105' : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:scale-105'}`} onClick={() => setIsOpen(false)} role="menuitem">
                  <span className="relative z-10">{item.name}</span>
                </Link>
                <div className="ml-4 space-y-1 relative z-20">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative z-20 ${location.pathname === subItem.href ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50'}`}
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
              <Link key={item.name} to={item.href} className={`block px-4 py-4 text-base font-bold rounded-2xl transition-all duration-300 relative group focus:ring-2 focus:ring-blue-500 focus:outline-none ${location.pathname === item.href ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-teal-50 scale-105' : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:scale-105'} animate-slide-in-up`} style={{ animationDelay: `${index * 0.1}s` }} onClick={() => setIsOpen(false)} role="menuitem" aria-current={location.pathname === item.href ? 'page' : undefined}>
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true"></div>
              </Link>
            )
          ))}

          <div className="px-4 py-4 animate-slide-in-up" style={{
            animationDelay: '0.6s'
          }}>
            <Link to="/inquiry" onClick={() => {
              setIsOpen(false);
              handleQuoteClick();
            }}>
              <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white font-black py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center">
                  <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Get Quote Now
                  <Sparkles className="ml-2 h-5 w-5 group-hover:-rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>;
};
export default Navigation;