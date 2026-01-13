import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, Globe, Truck, FileText, DollarSign, Shield, Users, BarChart3, Target, Zap, Award, Package, Ship, Plane, Building, Factory, Wheat, Spade, Scale, Calendar } from "lucide-react";

const More = () => {
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
        { title: "Trade Finance", slug: "trade-finance", description: "Financing international trade" },
        { title: "Certificate of Origin", slug: "certificate-of-origin", description: "Origin certification process" }
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
      title: "Compliance & Services",
      description: "Trade regulations and business services",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      pages: [
        { title: "Quality Standards", slug: "quality-standards", description: "Global quality certifications" },
        { title: "Customs Clearance", slug: "customs-clearance", description: "Customs clearance processes" },
        { title: "Legal Compliance", slug: "legal-compliance", description: "Regulatory compliance help" },
        { title: "Certification Services", slug: "certification-services", description: "Export certifications" },
        { title: "Insurance Services", slug: "insurance-services", description: "Trade insurance solutions" },
        { title: "Buyer Verification", slug: "buyer-verification", description: "Verify international buyers" },
        { title: "Market Research", slug: "market-research", description: "Global market trends" },
        { title: "Digital Marketing", slug: "digital-marketing", description: "Digital marketing for exporters" },
        { title: "Compliance Training", slug: "compliance-training", description: "Trade compliance education" },
        { title: "Technology Integration", slug: "technology-integration", description: "Tech solutions for trade" },
      ]
    }
  ];

  const totalPages = resourceCategories.reduce((total, category) => total + category.pages.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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
              Export Import Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive guides, market insights, and expert knowledge to help you succeed in international trade. 
              Access {totalPages}+ specialized pages covering every aspect of export-import business.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-xl text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.pages.map((page, pageIndex) => (
                  <Card key={pageIndex} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {page.title}
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardTitle>
                      <CardDescription>{page.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <Link to={`/more/${page.slug}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
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