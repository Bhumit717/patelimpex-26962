import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { ArrowRight, BookOpen, Briefcase, Globe, Truck, FileText, DollarSign, Shield, Users, BarChart3, Target, Zap, Award, Package, Ship, Plane, Building, Factory, Wheat, Spade, Scale, Calendar, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const More = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const resourceCategories = [
    {
      title: "Export Import Basics",
      description: "Essential guides for international trade beginners",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      pages: [
        { title: "Export Import Guide", slug: "export-import-guide", description: "Complete guide to international trade" },
        { title: "International Trade Basics", slug: "international-trade-basics", description: "Fundamentals of global commerce" },
        { title: "Export Documentation", slug: "export-documentation", description: "Essential documents for exports" },
        { title: "Trade Finance", slug: "trade-finance", description: "Financing international trade" }
      ]
    },
    {
      title: "Product Categories",
      description: "Detailed information about our export products",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-50",
      pages: [
        { title: "Rice Export", slug: "rice-export", description: "Premium rice varieties for export" },
        { title: "Spices Export", slug: "spices-export", description: "Authentic Indian spices worldwide" },
        { title: "Agricultural Products", slug: "agricultural-products", description: "Farm-fresh agricultural exports" },
        { title: "Basmati Rice", slug: "basmati-rice-export", description: "World's finest basmati rice" },
        { title: "Non Basmati Rice", slug: "non-basmati-rice-export", description: "Quality non-basmati varieties" },
        { title: "Wheat Export", slug: "wheat-export", description: "Premium wheat grains" },
        { title: "Textile Export", slug: "textile-export", description: "Quality textiles and fabrics" },
      ]
    },
    {
      title: "Spices & Seeds",
      description: "Premium spices and seeds for global markets",
      icon: Wheat,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      pages: [
        { title: "Turmeric Export", slug: "turmeric-export", description: "Golden turmeric powder" },
        { title: "Cumin Export", slug: "cumin-export", description: "Aromatic cumin seeds" },
        { title: "Coriander Export", slug: "coriander-export", description: "Fresh coriander seeds" },
        { title: "Cardamom Export", slug: "cardamom-export", description: "Premium cardamom pods" },
        { title: "Black Pepper Export", slug: "black-pepper-export", description: "Quality black pepper" },
        { title: "Red Chili Export", slug: "red-chili-export", description: "Spicy red chilies" },
        { title: "Ginger Export", slug: "ginger-export", description: "Fresh ginger roots" },
        { title: "Garlic Export", slug: "garlic-export", description: "Quality garlic bulbs" },
        { title: "Sesame Seeds Export", slug: "sesame-seeds-export", description: "Premium sesame seeds" },
        { title: "Sunflower Seeds Export", slug: "sunflower-seeds-export", description: "Quality sunflower seeds" },
      ]
    },
    {
      title: "Nuts & Vegetables",
      description: "Fresh vegetables and premium nuts",
      icon: Package,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      pages: [
        { title: "Onion Export", slug: "onion-export", description: "Fresh quality onions" },
        { title: "Cashew Export", slug: "cashew-export", description: "Premium cashew nuts" },
        { title: "Almond Export", slug: "almond-export", description: "Quality almonds" },
        { title: "Corn Export", slug: "corn-export", description: "Fresh corn grains" },
        { title: "Millet Export", slug: "millet-export", description: "Nutritious millet" },
        { title: "Barley Export", slug: "barley-export", description: "Premium barley grains" },
      ]
    },
    {
      title: "Global Markets - Asia",
      description: "Export opportunities in Asian markets",
      icon: Globe,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      pages: [
        { title: "Asian Markets", slug: "asian-markets", description: "Trading opportunities in Asia" },
        { title: "Southeast Asian Markets", slug: "southeast-asian-markets", description: "ASEAN region trade" },
        { title: "Northeast Asian Markets", slug: "northeast-asian-markets", description: "Japan, Korea, China trade" },
        { title: "Central Asian Markets", slug: "central-asian-markets", description: "Central Asia opportunities" },
      ]
    },
    {
      title: "Global Markets - Europe & Americas",
      description: "Export opportunities in Western markets",
      icon: Globe,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      pages: [
        { title: "European Markets", slug: "european-markets", description: "Export to European countries" },
        { title: "Eastern European Markets", slug: "eastern-european-markets", description: "Eastern Europe trade" },
        { title: "Scandinavian Markets", slug: "scandinavian-markets", description: "Nordic countries trade" },
        { title: "Mediterranean Markets", slug: "mediterranean-markets", description: "Mediterranean region" },
        { title: "American Markets", slug: "american-markets", description: "North and South American trade" },
        { title: "North American Markets", slug: "north-american-markets", description: "USA and Canada" },
        { title: "South American Markets", slug: "south-american-markets", description: "Latin American trade" },
        { title: "Oceania Markets", slug: "oceania-markets", description: "Australia and Pacific" },
      ]
    },
    {
      title: "Global Markets - Middle East & Africa",
      description: "Export opportunities in MENA and Africa",
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      pages: [
        { title: "Middle East Markets", slug: "middle-east-markets", description: "Middle Eastern market insights" },
        { title: "Gulf Cooperation Council", slug: "gulf-cooperation-council", description: "GCC countries trade" },
        { title: "Levant Markets", slug: "levant-markets", description: "Levant region trade" },
        { title: "African Markets", slug: "african-markets", description: "Growing African trade opportunities" },
        { title: "North African Markets", slug: "north-african-markets", description: "North Africa trade" },
        { title: "West African Markets", slug: "west-african-markets", description: "West Africa opportunities" },
        { title: "East African Markets", slug: "east-african-markets", description: "East Africa trade" },
        { title: "Southern African Markets", slug: "southern-african-markets", description: "Southern Africa markets" },
      ]
    },
    {
      title: "Logistics & Shipping",
      description: "Transportation and logistics solutions",
      icon: Truck,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      pages: [
        { title: "Sea Freight", slug: "sea-freight", description: "Ocean shipping solutions" },
        { title: "Freight Forwarding", slug: "freight-forwarding", description: "Complete freight services" },
        { title: "Warehouse Services", slug: "warehouse-services", description: "Storage and distribution" },
        { title: "Packaging Services", slug: "packaging-services", description: "Export packaging solutions" },
        { title: "Supply Chain Management", slug: "supply-chain-management", description: "End-to-end supply chain" },
      ]
    },
    {
      title: "Construction & Industrial",
      description: "Premium ceramics and building materials",
      icon: Building,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      pages: [
        { title: "Tiles Export Guide", slug: "tiles-export-info", description: "Comprehensive guide to GVT, PGVT and slabs" },
        { title: "GVT & PGVT Tiles", slug: "gvt-pgvt-tiles-export", description: "Glazed vitrified tiles for premium floors" },
        { title: "Double Charge Tiles", slug: "double-charge-tiles-export", description: "Heavy duty double layer tiles" },
        { title: "Full Body Vitrified", slug: "full-body-tiles-export", description: "Homogeneous tiles for high traffic" },
        { title: "Digital Wall Tiles", slug: "digital-wall-tiles-export", description: "Decorative ceramics for interiors" },
        { title: "Elevation Tiles", slug: "elevation-tiles-export", description: "Exterior wall cladding solutions" },
        { title: "Parking Tiles", slug: "parking-tiles-export", description: "Heavy duty anti-skid floor tiles" },
        { title: "Porcelain Slabs", slug: "porcelain-slabs-export", description: "Large format luxury porcelain" },
        { title: "Sanitaryware Sets", slug: "sanitaryware-sets-export", description: "Complete bathroom ceramic sets" },
        { title: "Designer Wash Basins", slug: "designer-wash-basins-export", description: "Luxury tabletop and pedestal basins" },
        { title: "Water Closets", slug: "water-closets-export", description: "Modern ceramic toilet solutions" }
      ]
    },
    {
      title: "Earthing & Safety",
      description: "Industrial grounding and electrical protection",
      icon: Zap,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      pages: [
        { title: "Earthing Info Desk", slug: "earthing-export-info", description: "Technical grounding solutions and kits" },
        { title: "GI Earthing Electrode", slug: "gi-earthing-electrode-export", description: "Galvanized iron grounding rods" },
        { title: "Copper Electrode", slug: "copper-earthing-electrode-export", description: "Solid copper and bonded electrodes" },
        { title: "Copper Bonded Rods", slug: "copper-bonded-rods-export", description: "High conductivity protection rods" },
        { title: "Backfill Compound", slug: "backfill-compound-export", description: "Ground enhancement material" },
        { title: "Earthing Strips", slug: "earthing-strips-export", description: "GI and Copper conductor strips" },
        { title: "Lightning Arrester", slug: "lightning-arrester-export", description: "ESE and conventional systems" },
        { title: "Earthing Clamps", slug: "earthing-clamps-export", description: "Heavy duty electrical connectors" },
        { title: "Earth Pit Covers", slug: "earth-pit-covers-export", description: "Protective covers for ground pits" }
      ]
    },
    {
      title: "Compliance & Services",
      description: "Trade regulations and business services",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      pages: [
        { title: "Quality Standards", slug: "quality-standards", description: "Global quality certifications" },
        { title: "Customs Clearance", slug: "customs-clearance", description: "Customs clearance processes" },
        { title: "Legal Compliance", slug: "legal-compliance", description: "Regulatory compliance help" },
        { title: "Insurance Services", slug: "insurance-services", description: "Trade insurance solutions" },
        { title: "Buyer Verification", slug: "buyer-verification", description: "Verify international buyers" },
        { title: "Market Research", slug: "market-research", description: "Global market trends" },
        { title: "Digital Marketing", slug: "digital-marketing", description: "Digital marketing for exporters" },
        { title: "Compliance Training", slug: "compliance-training", description: "Trade compliance education" },
        { title: "Technology Integration", slug: "technology-integration", description: "Tech solutions for trade" },
      ]
    }
  ];

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return resourceCategories;
    
    const term = searchTerm.toLowerCase();
    return resourceCategories.map(category => ({
      ...category,
      pages: category.pages.filter(page => 
        page.title.toLowerCase().includes(term) || 
        page.description.toLowerCase().includes(term)
      )
    })).filter(category => category.pages.length > 0);
  }, [searchTerm, resourceCategories]);

  const totalPages = filteredCategories.reduce((total, category) => total + category.pages.length, 0);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title="More Resources | Patel Impex" description="Explore more resources and information about international trade." canonicalUrl="/more" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Resource Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              More
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Comprehensive guides, market insights, and expert knowledge to help you succeed in international trade.
              Access specialized pages covering every aspect of export-import business.
            </p>

            {/* Search Implementation */}
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search resources, markets, or products..."
                className="pl-12 pr-12 py-6 text-lg rounded-2xl border-2 focus:border-primary shadow-sm bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-primary"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4 min-h-[400px]">
        <div className="container mx-auto max-w-6xl space-y-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 font-graduate uppercase tracking-tight">{category.title}</h2>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.pages.map((page, pageIndex) => (
                    <Card key={pageIndex} className="group hover:shadow-xl transition-all duration-300 border-slate-100 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg flex items-center justify-between group-hover:text-primary transition-colors">
                          {page.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{page.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all rounded-lg" asChild>
                          <Link to={`/more/${page.slug}`}>
                            Quick Access
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">No matching resources found</h3>
              <p className="text-slate-500 mt-2">Try searching for something else, like "Rice" or "Documentation"</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Assistance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our export-import experts are ready to help you navigate international trade successfully
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Expert Consultation</Link>
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

export default More;
