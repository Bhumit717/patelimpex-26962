import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CustomLanguageSelector from "@/components/CustomLanguageSelector";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Commodities", href: "/products", dropdown: [
      { name: "Rice Products", href: "/products/rice" },
      { name: "Wheat Products", href: "/products/wheat" },
      { name: "Psyllium Husk", href: "/products/psyllium-husk" },
      { name: "Groundnuts", href: "/products/groundnut" },
      { name: "Cumin Seeds", href: "/products/cumin-seeds" },
    ] },
    { name: "Origins", href: "/about" },
    { name: "Quality", href: "/services" },
    { name: "Journal", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md border-b transition-all duration-500 ${
        isScrolled ? 'border-border' : 'border-transparent'
      }`}
      role="banner"
    >
      <nav className="editorial-shell flex items-center justify-between py-5" aria-label="Main">
        <Link
          to="/"
          className="font-display text-lg md:text-2xl font-black uppercase tracking-[0.18em] text-foreground"
        >
          Patel Impex
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative group/nav">
              <Link
                to={item.href}
                className={`link-underline text-[11px] font-medium uppercase tracking-[0.25em] transition-colors ${
                  location.pathname === item.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="absolute top-full left-0 pt-5 w-60 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                  <div className="bg-background border border-border py-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--paper-deep))] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:block">
            <CustomLanguageSelector />
          </div>

          <Link
            to="/inquiry"
            className="hidden sm:inline-flex border border-foreground px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))] transition-all duration-500"
          >
            Enquire
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-border text-foreground"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-border bg-background transition-all duration-500 ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="editorial-shell py-6">
          <div className="flex justify-start pb-4 border-b border-border">
            <CustomLanguageSelector />
          </div>

          <div className="max-h-[50vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-border">
                <Link
                  to={item.href}
                  onClick={() => !item.dropdown && setIsOpen(false)}
                  className="block py-4 font-display text-lg font-bold uppercase tracking-tight text-foreground"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pb-4 space-y-3">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link to="/inquiry" onClick={() => setIsOpen(false)}>
            <button className="nm-btn-dark w-full mt-6 !py-5">Request a quotation</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
