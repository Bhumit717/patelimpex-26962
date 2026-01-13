import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Globe, Target, BarChart3, Users, FileText, Award, Zap, Shield, Map, Package, Wheat } from "lucide-react";
import { useState } from "react";

const SEO = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const siteMap = {
    "Main Pages": [
      { title: "Home", path: "/" },
      { title: "About Us", path: "/about" },
      { title: "Products", path: "/products" },
      { title: "Services", path: "/services" },
      { title: "Blog", path: "/blog" },
      { title: "Contact", path: "/contact" },
      { title: "FAQ", path: "/faq" },
    ],
    "Country Markets (67 Countries)": [
      { title: "USA Market Export", path: "/seo/usa-market-export" },
      { title: "UK Market Export", path: "/seo/uk-market-export" },
      { title: "Canada Market Export", path: "/seo/canada-market-export" },
      { title: "Germany Market Export", path: "/seo/germany-market-export" },
      { title: "France Market Export", path: "/seo/france-market-export" },
      { title: "Italy Market Export", path: "/seo/italy-market-export" },
      { title: "Spain Market Export", path: "/seo/spain-market-export" },
      { title: "Netherlands Market Export", path: "/seo/netherlands-market-export" },
      { title: "Belgium Market Export", path: "/seo/belgium-market-export" },
      { title: "Australia Market Export", path: "/seo/australia-market-export" },
      { title: "Japan Market Export", path: "/seo/japan-market-export" },
      { title: "Singapore Market Export", path: "/seo/singapore-market-export" },
      { title: "UAE Market Export", path: "/seo/uae-market-export" },
      { title: "China Market Export", path: "/seo/china-market-export" },
      { title: "South Korea Market Export", path: "/seo/south-korea-market-export" },
      { title: "Thailand Market Export", path: "/seo/thailand-market-export" },
      { title: "Vietnam Market Export", path: "/seo/vietnam-market-export" },
      { title: "Malaysia Market Export", path: "/seo/malaysia-market-export" },
      { title: "Indonesia Market Export", path: "/seo/indonesia-market-export" },
      { title: "Philippines Market Export", path: "/seo/philippines-market-export" },
      { title: "Bangladesh Market Export", path: "/seo/bangladesh-market-export" },
      { title: "Pakistan Market Export", path: "/seo/pakistan-market-export" },
      { title: "Sri Lanka Market Export", path: "/seo/sri-lanka-market-export" },
      { title: "Nepal Market Export", path: "/seo/nepal-market-export" },
      { title: "Myanmar Market Export", path: "/seo/myanmar-market-export" },
      { title: "Cambodia Market Export", path: "/seo/cambodia-market-export" },
      { title: "Laos Market Export", path: "/seo/laos-market-export" },
      { title: "Brunei Market Export", path: "/seo/brunei-market-export" },
      { title: "Russia Market Export", path: "/seo/russia-market-export" },
      { title: "Turkey Market Export", path: "/seo/turkey-market-export" },
      { title: "Brazil Market Export", path: "/seo/brazil-market-export" },
      { title: "Argentina Market Export", path: "/seo/argentina-market-export" },
      { title: "Chile Market Export", path: "/seo/chile-market-export" },
      { title: "Colombia Market Export", path: "/seo/colombia-market-export" },
      { title: "Peru Market Export", path: "/seo/peru-market-export" },
      { title: "Mexico Market Export", path: "/seo/mexico-market-export" },
      { title: "South Africa Market Export", path: "/seo/south-africa-market-export" },
      { title: "Nigeria Market Export", path: "/seo/nigeria-market-export" },
      { title: "Kenya Market Export", path: "/seo/kenya-market-export" },
      { title: "Egypt Market Export", path: "/seo/egypt-market-export" },
      { title: "Morocco Market Export", path: "/seo/morocco-market-export" },
      { title: "Algeria Market Export", path: "/seo/algeria-market-export" },
      { title: "Ghana Market Export", path: "/seo/ghana-market-export" },
      { title: "Ethiopia Market Export", path: "/seo/ethiopia-market-export" },
      { title: "Angola Market Export", path: "/seo/angola-market-export" },
      { title: "Cameroon Market Export", path: "/seo/cameroon-market-export" },
      { title: "Ivory Coast Market Export", path: "/seo/ivory-coast-market-export" },
      { title: "Gabon Market Export", path: "/seo/gabon-market-export" },
      { title: "Gambia Market Export", path: "/seo/gambia-market-export" },
      { title: "Guinea Market Export", path: "/seo/guinea-market-export" },
      { title: "Botswana Market Export", path: "/seo/botswana-market-export" },
      { title: "Bahrain Market Export", path: "/seo/bahrain-market-export" },
      { title: "Kuwait Market Export", path: "/seo/kuwait-market-export" },
      { title: "Jordan Market Export", path: "/seo/jordan-market-export" },
      { title: "Lebanon Market Export", path: "/seo/lebanon-market-export" },
      { title: "Iraq Market Export", path: "/seo/iraq-market-export" },
      { title: "Israel Market Export", path: "/seo/israel-market-export" },
      { title: "Azerbaijan Market Export", path: "/seo/azerbaijan-market-export" },
      { title: "Kazakhstan Market Export", path: "/seo/kazakhstan-market-export" },
      { title: "Kyrgyzstan Market Export", path: "/seo/kyrgyzstan-market-export" },
      { title: "Georgia Market Export", path: "/seo/georgia-market-export" },
      { title: "Belarus Market Export", path: "/seo/belarus-market-export" },
      { title: "Denmark Market Export", path: "/seo/denmark-market-export" },
      { title: "Finland Market Export", path: "/seo/finland-market-export" },
      { title: "Iceland Market Export", path: "/seo/iceland-market-export" },
      { title: "Ireland Market Export", path: "/seo/ireland-market-export" },
      { title: "Greece Market Export", path: "/seo/greece-market-export" },
      { title: "Cyprus Market Export", path: "/seo/cyprus-market-export" },
      { title: "Croatia Market Export", path: "/seo/croatia-market-export" },
      { title: "Czech Market Export", path: "/seo/czech-market-export" },
      { title: "Bulgaria Market Export", path: "/seo/bulgaria-market-export" },
      { title: "Hungary Market Export", path: "/seo/hungary-market-export" },
      { title: "Estonia Market Export", path: "/seo/estonia-market-export" },
      { title: "Latvia Market Export", path: "/seo/latvia-market-export" },
      { title: "Bolivia Market Export", path: "/seo/bolivia-market-export" },
      { title: "Ecuador Market Export", path: "/seo/ecuador-market-export" },
      { title: "Cuba Market Export", path: "/seo/cuba-market-export" },
      { title: "Dominican Republic Market", path: "/seo/dominican-republic-market-export" },
      { title: "Guatemala Market Export", path: "/seo/guatemala-market-export" },
      { title: "Honduras Market Export", path: "/seo/honduras-market-export" },
      { title: "Jamaica Market Export", path: "/seo/jamaica-market-export" },
    ],
    "Agricultural Products (40+)": [
      { title: "Basmati Rice Export", path: "/more/basmati-rice-export" },
      { title: "Non-Basmati Rice Export", path: "/more/non-basmati-rice-export" },
      { title: "Wheat Export", path: "/more/wheat-export" },
      { title: "Corn Export", path: "/more/corn-export" },
      { title: "Turmeric Export", path: "/more/turmeric-export" },
      { title: "Cumin Export", path: "/more/cumin-export" },
      { title: "Coriander Export", path: "/more/coriander-export" },
      { title: "Cardamom Export", path: "/more/cardamom-export" },
      { title: "Black Pepper Export", path: "/more/black-pepper-export" },
      { title: "Red Chili Export", path: "/more/red-chili-export" },
      { title: "Ginger Export", path: "/more/ginger-export" },
      { title: "Garlic Export", path: "/more/garlic-export" },
      { title: "Onion Export", path: "/more/onion-export" },
      { title: "Cashew Export", path: "/more/cashew-export" },
      { title: "Almond Export", path: "/more/almond-export" },
      { title: "Tea Export Services", path: "/seo/tea-export-services" },
      { title: "Coffee Export Services", path: "/seo/coffee-export-services" },
      { title: "Sugar Export Services", path: "/seo/sugar-export-services" },
      { title: "Pulses Export Services", path: "/seo/pulses-export-services" },
      { title: "Mango Export Services", path: "/seo/mango-export-services" },
      { title: "Banana Export Services", path: "/seo/banana-export-services" },
      { title: "Grapes Export Services", path: "/seo/grapes-export-services" },
      { title: "Coconut Export Services", path: "/seo/coconut-export-services" },
      { title: "Cotton Export Services", path: "/seo/cotton-export-services" },
      { title: "Arhar Dal Export", path: "/seo/arhar-dal-export" },
      { title: "Moong Dal Export", path: "/seo/moong-dal-export" },
      { title: "Chana Dal Export", path: "/seo/chana-dal-export" },
      { title: "Urad Dal Export", path: "/seo/urad-dal-export" },
      { title: "Masoor Dal Export", path: "/seo/masoor-dal-export" },
      { title: "Rajma Export", path: "/seo/rajma-export" },
      { title: "Chickpea Export", path: "/seo/chickpea-export" },
      { title: "Fenugreek Seeds Export", path: "/seo/fenugreek-seeds-export" },
      { title: "Mustard Seeds Export", path: "/seo/mustard-seeds-export" },
      { title: "Cinnamon Export", path: "/seo/cinnamon-export" },
      { title: "Clove Export", path: "/seo/clove-export" },
      { title: "Star Anise Export", path: "/seo/star-anise-export" },
      { title: "Fennel Seeds Export", path: "/seo/fennel-seeds-export" },
      { title: "Walnut Export", path: "/seo/walnut-export" },
      { title: "Pistachio Export", path: "/seo/pistachio-export" },
      { title: "Raisins Export", path: "/seo/raisins-export" },
      { title: "Dates Export", path: "/seo/dates-export" },
    ],
    "Product Categories (40+)": [
      { title: "Organic Pesticides Export", path: "/products/organic-pesticides-export" },
      { title: "Bio Fertilizers Export", path: "/products/bio-fertilizers-export" },
      { title: "Mini Tractor Export", path: "/products/mini-tractor-export" },
      { title: "CNC Machine Export", path: "/products/cnc-machine-export" },
      { title: "Cotton Yarn Export", path: "/products/cotton-yarn-export" },
      { title: "Silver Earrings Export", path: "/products/silver-earrings-export" },
      { title: "Pearl Jewelry Export", path: "/products/pearl-jewelry-export" },
      { title: "Fashion Jewelry Export", path: "/products/fashion-jewelry-export" },
      { title: "Medical Gloves Export", path: "/products/medical-gloves-export" },
      { title: "Diagnostic Kits Export", path: "/products/diagnostic-kits-export" },
      { title: "Herbal Supplements Export", path: "/products/herbal-supplements-export" },
      { title: "Storage Containers Export", path: "/products/storage-containers-export" },
      { title: "Packaging Boxes Export", path: "/products/packaging-boxes-export" },
      { title: "Bed Linen Export", path: "/products/bed-linen-export" },
      { title: "Towel Sets Export", path: "/products/towel-sets-export" },
      { title: "Wool Blankets Export", path: "/products/wool-blankets-export" },
      { title: "Spice Pickles Export", path: "/products/spice-pickles-export" },
      { title: "Ready Meals Export", path: "/products/ready-meals-export" },
      { title: "Dairy Ghee Export", path: "/products/dairy-ghee-export" },
      { title: "Industrial Motor Export", path: "/products/industrial-motor-export" },
      { title: "Steel Sheets Export", path: "/products/steel-sheets-export" },
      { title: "Welding Machine Export", path: "/products/welding-machine-export" },
      { title: "Ball Bearings Export", path: "/products/ball-bearings-export" },
      { title: "Plastic Bottles Export", path: "/products/plastic-bottles-export" },
      { title: "Food Containers Export", path: "/products/food-containers-export" },
    ],
    "Services & Guides (30+)": [
      { title: "Export Import Guide", path: "/more/export-import-guide" },
      { title: "International Trade Basics", path: "/more/international-trade-basics" },
      { title: "Rice Export", path: "/more/rice-export" },
      { title: "Spices Export", path: "/more/spices-export" },
      { title: "Textile Export", path: "/more/textile-export" },
      { title: "Sea Freight", path: "/more/sea-freight" },
      { title: "Export Documentation", path: "/more/export-documentation" },
      { title: "Trade Finance", path: "/more/trade-finance" },
      { title: "Quality Standards", path: "/more/quality-standards" },
      { title: "Customs Clearance", path: "/more/customs-clearance" },
      { title: "Freight Forwarding", path: "/more/freight-forwarding" },
      { title: "Market Research", path: "/more/market-research" },
      { title: "Warehouse Services", path: "/more/warehouse-services" },
      { title: "Insurance Services", path: "/more/insurance-services" },
      { title: "Buyer Verification", path: "/more/buyer-verification" },
      { title: "Digital Marketing", path: "/more/digital-marketing" },
      { title: "Air Freight Services", path: "/seo/air-freight-services" },
      { title: "Ocean Freight Services", path: "/seo/ocean-freight-services" },
      { title: "Express Shipping Services", path: "/seo/express-shipping-services" },
      { title: "Organic Food Export", path: "/seo/organic-food-export" },
      { title: "Frozen Food Export", path: "/seo/frozen-food-export" },
      { title: "Pharmaceutical Export", path: "/seo/pharmaceutical-export" },
    ]
  };

  const totalPages = Object.values(siteMap).reduce((sum, section) => sum + section.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Map className="w-4 h-4 mr-2" />
              Complete Sitemap
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Sitemap - All Pages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Navigate through our comprehensive export-import resource library with <strong>{totalPages}+ pages</strong> covering markets, products, and services worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl space-y-8">
          {Object.entries(siteMap).map(([section, pages], index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleSection(section)}
              >
                <CardTitle className="flex items-center justify-between text-2xl">
                  <span className="flex items-center gap-3">
                    {section.includes("Country") && <Globe className="w-6 h-6 text-primary" />}
                    {section.includes("Agricultural") && <Wheat className="w-6 h-6 text-green-600" />}
                    {section.includes("Product") && <Package className="w-6 h-6 text-purple-600" />}
                    {section.includes("Services") && <Target className="w-6 h-6 text-blue-600" />}
                    {section.includes("Main") && <FileText className="w-6 h-6 text-orange-600" />}
                    {section}
                  </span>
                  <Badge variant="secondary">{pages.length} pages</Badge>
                </CardTitle>
              </CardHeader>
              {(expandedSection === section || expandedSection === null) && (
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        to={page.path}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <Zap className="w-4 h-4 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm group-hover:text-primary transition-colors">
                          {page.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Card>
              <CardContent className="pt-6">
                <Globe className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">67</div>
                <div className="text-sm text-muted-foreground">Country Markets</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Wheat className="w-8 h-8 mx-auto mb-4 text-green-600" />
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Agricultural Products</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Package className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Product Categories</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <FileText className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-primary mb-2">{totalPages}+</div>
                <div className="text-sm text-muted-foreground">Total Pages</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Exporting?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with our export specialists for personalized guidance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/inquiry">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;