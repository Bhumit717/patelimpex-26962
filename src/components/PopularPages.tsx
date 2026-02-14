
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Package, Wheat, FileText } from "lucide-react";

const PopularPages = () => {
  const popularLinks = {
    "Top Export Products": [
      { title: "Basmati Rice Export", href: "/more/basmati-rice-export" },
      { title: "Turmeric Export", href: "/more/turmeric-export" },
      { title: "Cumin Seeds Export", href: "/more/cumin-export" },
      { title: "Black Pepper Export", href: "/more/black-pepper-export" },
      { title: "Textile Export", href: "/more/textile-export" },
      { title: "Spices Export", href: "/more/spices-export" }
    ],
    "Top Country Markets": [
      { title: "USA Market Export", href: "/seo/usa-market-export" },
      { title: "UK Market Export", href: "/seo/uk-market-export" },
      { title: "UAE Market Export", href: "/seo/uae-market-export" },
      { title: "Germany Market Export", href: "/seo/germany-market-export" },
      { title: "Canada Market Export", href: "/seo/canada-market-export" },
      { title: "Singapore Market Export", href: "/seo/singapore-market-export" }
    ],
    "Export Resources": [
      { title: "Export Import Guide", href: "/more/export-import-guide" },
      { title: "Trade Finance", href: "/more/trade-finance" },
      { title: "Export Documentation", href: "/more/export-documentation" },
      { title: "Quality Standards", href: "/more/quality-standards" },
      { title: "Sea Freight Services", href: "/more/sea-freight" },
      { title: "Customs Clearance", href: "/more/customs-clearance" }
    ],
    "More Products": [
      { title: "Wheat Export", href: "/more/wheat-export" },
      { title: "Rice Export", href: "/more/rice-export" },
      { title: "Cardamom Export", href: "/more/cardamom-export" },
      { title: "Ginger Export", href: "/more/ginger-export" },
      { title: "Onion Export", href: "/more/onion-export" },
      { title: "Sugar Export", href: "/more/sugar-export" },
      { title: "Cashew Export", href: "/more/cashew-export" }
    ]
  };

  const icons: { [key: string]: any } = {
    "Top Export Products": Package,
    "Top Country Markets": Globe,
    "Export Resources": FileText,
    "More Products": Wheat
  };

  return (
    <section className="py-24 bg-white" aria-label="Popular export pages and resources">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 font-graduate uppercase tracking-tighter">
            Explore Our <span className="text-green-600 font-fredericka tracking-tight">Export Resources</span>
          </h2>
          <p className="text-slate-500 font-fondamento text-xl italic max-w-2xl mx-auto">
            Discover detailed guides for 200+ pages covering products and markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(popularLinks).map(([category, links]) => {
            const Icon = icons[category];
            return (
              <div key={category} className="nm-card !p-8 bg-white border-none transition-all hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-2xl shadow-inner border border-slate-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-black text-slate-800 font-graduate uppercase tracking-tight">{category}</h3>
                </div>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="flex items-center text-slate-500 hover:text-green-600 transition-colors font-fondamento text-lg italic group"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularPages;
