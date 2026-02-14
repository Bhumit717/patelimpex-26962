import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface RelatedLink {
  title: string;
  url: string;
  category: string;
}

interface RelatedLinksProps {
  currentPage?: string;
  category?: "agricultural" | "spices" | "markets" | "services" | "products";
}

const RelatedLinks = ({ currentPage, category = "products" }: RelatedLinksProps) => {
  const allLinks: Record<string, RelatedLink[]> = {
    agricultural: [
      { title: "Basmati Rice Export", url: "/more/basmati-rice-export", category: "Rice" },
      { title: "Non-Basmati Rice Export", url: "/more/non-basmati-rice-export", category: "Rice" },
      { title: "Wheat Export Services", url: "/more/wheat-export", category: "Grains" },
      { title: "Corn Export Guide", url: "/more/corn-export", category: "Grains" },
      { title: "Millet Export", url: "/more/millet-export", category: "Grains" },
      { title: "Barley Export", url: "/more/barley-export", category: "Grains" },
      { title: "Tea Export Services", url: "/seo/tea-export-services", category: "Beverages" },
      { title: "Coffee Export Services", url: "/seo/coffee-export-services", category: "Beverages" },
      { title: "Sugar Export Services", url: "/seo/sugar-export-services", category: "Food" },
      { title: "Wheat Flour Export", url: "/seo/wheat-flour-export-services", category: "Food" },
    ],
    spices: [
      { title: "Turmeric Export", url: "/more/turmeric-export", category: "Spices" },
      { title: "Cumin Seeds Export", url: "/more/cumin-export", category: "Spices" },
      { title: "Coriander Export", url: "/more/coriander-export", category: "Spices" },
      { title: "Cardamom Export", url: "/more/cardamom-export", category: "Spices" },
      { title: "Black Pepper Export", url: "/more/black-pepper-export", category: "Spices" },
      { title: "Red Chili Export", url: "/more/red-chili-export", category: "Spices" },
      { title: "Ginger Export", url: "/more/ginger-export", category: "Spices" },
      { title: "Garlic Export", url: "/more/garlic-export", category: "Vegetables" },
      { title: "Onion Export", url: "/more/onion-export", category: "Vegetables" },
      { title: "Cinnamon Export", url: "/seo/cinnamon-export", category: "Spices" },
    ],
    markets: [
      { title: "USA Market Export", url: "/seo/usa-market-export", category: "North America" },
      { title: "UK Market Export", url: "/seo/uk-market-export", category: "Europe" },
      { title: "Germany Market Export", url: "/seo/germany-market-export", category: "Europe" },
      { title: "UAE Market Export", url: "/seo/uae-market-export", category: "Middle East" },
      { title: "Canada Market Export", url: "/seo/canada-market-export", category: "North America" },
      { title: "Australia Market Export", url: "/seo/australia-market-export", category: "Oceania" },
      { title: "Singapore Market Export", url: "/seo/singapore-market-export", category: "Asia" },
      { title: "Japan Market Export", url: "/seo/japan-market-export", category: "Asia" },
      { title: "France Market Export", url: "/seo/france-market-export", category: "Europe" },
      { title: "Italy Market Export", url: "/seo/italy-market-export", category: "Europe" },
    ],
    services: [
      { title: "Air Freight Services", url: "/seo/air-freight-services", category: "Shipping" },
      { title: "Ocean Freight Services", url: "/seo/ocean-freight-services", category: "Shipping" },
      { title: "Express Shipping", url: "/seo/express-shipping-services", category: "Shipping" },
      { title: "Customs Clearance", url: "/more/customs-clearance", category: "Documentation" },
      { title: "Export Documentation", url: "/more/export-documentation", category: "Documentation" },
      { title: "Certificate of Origin", url: "/more/certificate-of-origin", category: "Certification" },
      { title: "Quality Standards", url: "/more/quality-standards", category: "Compliance" },
      { title: "Trade Finance", url: "/more/trade-finance", category: "Finance" },
      { title: "Market Research", url: "/more/market-research", category: "Research" },
      { title: "Warehouse Services", url: "/more/warehouse-services", category: "Logistics" },
    ],
    products: [
      { title: "Organic Food Export", url: "/seo/organic-food-export", category: "Food" },
      { title: "Frozen Food Export", url: "/seo/frozen-food-export", category: "Food" },
      { title: "Pharmaceutical Export", url: "/seo/pharmaceutical-export", category: "Pharma" },
      { title: "Cotton Export", url: "/seo/cotton-export-services", category: "Textiles" },
      { title: "Textile Export", url: "/more/textile-export", category: "Textiles" },
      { title: "Handicrafts Export", url: "/seo/handicrafts-export-services", category: "Handicrafts" },
      { title: "Gems & Jewelry Export", url: "/seo/gems-jewelry-export-services", category: "Jewelry" },
      { title: "Leather Products Export", url: "/seo/leather-products-export-services", category: "Leather" },
      { title: "Cashew Export", url: "/more/cashew-export", category: "Nuts" },
      { title: "Almond Export", url: "/more/almond-export", category: "Nuts" },
    ],
  };

  const links = allLinks[category] || allLinks.products;
  const filteredLinks = links.filter(link => link.url !== currentPage);

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Related Pages</h3>
        <ExternalLink className="h-6 w-6 text-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLinks.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="group flex flex-col p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <span className="text-xs text-primary mb-2">{link.category}</span>
            <span className="text-white group-hover:text-primary transition-colors">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-primary/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/products" className="text-sm text-gray-300 hover:text-primary transition-colors">
            View All Products →
          </Link>
          <Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
            Our Services →
          </Link>
          <Link to="/more" className="text-sm text-gray-300 hover:text-primary transition-colors">
            More Resources →
          </Link>
          <Link to="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedLinks;
