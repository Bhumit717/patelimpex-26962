import { Link } from "react-router-dom";
import { ArrowRight, Globe, Package, Wheat, Truck, FileText } from "lucide-react";
const PopularPages = () => {
  const popularLinks = {
    "Top Export Products": [{
      title: "Basmati Rice Export",
      href: "/more/basmati-rice-export"
    }, {
      title: "Turmeric Export",
      href: "/more/turmeric-export"
    }, {
      title: "Cumin Seeds Export",
      href: "/more/cumin-export"
    }, {
      title: "Black Pepper Export",
      href: "/more/black-pepper-export"
    }, {
      title: "Textile Export",
      href: "/more/textile-export"
    }, {
      title: "Spices Export",
      href: "/more/spices-export"
    }],
    "Top Country Markets": [{
      title: "USA Market Export",
      href: "/seo/usa-market-export"
    }, {
      title: "UK Market Export",
      href: "/seo/uk-market-export"
    }, {
      title: "UAE Market Export",
      href: "/seo/uae-market-export"
    }, {
      title: "Germany Market Export",
      href: "/seo/germany-market-export"
    }, {
      title: "Canada Market Export",
      href: "/seo/canada-market-export"
    }, {
      title: "Singapore Market Export",
      href: "/seo/singapore-market-export"
    }],
    "Export Resources": [{
      title: "Export Import Guide",
      href: "/more/export-import-guide"
    }, {
      title: "Trade Finance",
      href: "/more/trade-finance"
    }, {
      title: "Export Documentation",
      href: "/more/export-documentation"
    }, {
      title: "Quality Standards",
      href: "/more/quality-standards"
    }, {
      title: "Sea Freight Services",
      href: "/more/sea-freight"
    }, {
      title: "Customs Clearance",
      href: "/more/customs-clearance"
    }],
    "More Products": [{
      title: "Wheat Export",
      href: "/more/wheat-export"
    }, {
      title: "Rice Export",
      href: "/more/rice-export"
    }, {
      title: "Cardamom Export",
      href: "/more/cardamom-export"
    }, {
      title: "Ginger Export",
      href: "/more/ginger-export"
    }, {
      title: "Onion Export",
      href: "/more/onion-export"
    }, {
      title: "Cashew Export",
      href: "/more/cashew-export"
    }]
  };
  const icons: {
    [key: string]: any;
  } = {
    "Top Export Products": Package,
    "Top Country Markets": Globe,
    "Export Resources": FileText,
    "More Products": Wheat
  };
  return <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" aria-label="Popular export pages and resources">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our <span className="text-transparent bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text">Export Resources</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover detailed guides for 200+ pages covering products, markets, and export services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(popularLinks).map(([category, links]) => {
          const Icon = icons[category];
          return <div key={category} className="bg-gray-800/50 rounded-[50px] p-6 border border-ai-primary/20 hover:border-ai-primary/40 transition-all duration-300 shadow-[0_5px_15px_rgba(139,92,246,0.2)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-[25px] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>
                <ul className="space-y-3">
                  {links.map(link => <li key={link.href}>
                      <Link to={link.href} className="flex items-center text-gray-300 hover:text-ai-primary transition-colors duration-200 group text-sm">
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.title}
                      </Link>
                    </li>)}
                </ul>
              </div>;
        })}
        </div>

        
      </div>
    </section>;
};
export default PopularPages;