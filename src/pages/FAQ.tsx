import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Search, Globe, FileText, Phone, Package, Truck, MapPin, Building, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import riceExportImage from "@/assets/rice-export-warehouse.jpg";
import spicesExportImage from "@/assets/spices-export-facility.jpg";
import rajkotExportImage from "@/assets/rajkot-export-hub.jpg";
import importExportImage from "@/assets/import-export-documentation.jpg";
import patelImpexImage from "@/assets/patel-impex-headquarters.jpg";
import globalExportImage from "@/assets/global-export-shipping.jpg";
import agriculturalExportImage from "@/assets/agricultural-export-processing.jpg";
import exportConsultationImage from "@/assets/export-consultation.jpg";
import tradeFairImage from "@/assets/international-trade-fair.jpg";
import exportFinanceImage from "@/assets/export-finance-banking.jpg";
import qualityControlImage from "@/assets/quality-control-lab.jpg";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // All internal pages from /more and /seo directories
  const internalPages = {
    more: [
      { name: "African Markets", slug: "african-markets", description: "Comprehensive guide to African market opportunities and export strategies" },
      { name: "Agricultural Products", slug: "agricultural-products", description: "Complete agricultural product export solutions and market analysis" },
      { name: "Almond Export", slug: "almond-export", description: "Premium almond export services with quality assurance" },
      { name: "American Markets", slug: "american-markets", description: "North and South American market entry strategies" },
      { name: "Asian Markets", slug: "asian-markets", description: "Asian market penetration and trade opportunities" },
      { name: "Barley Export", slug: "barley-export", description: "High-quality barley export with global reach" },
      { name: "Basmati Rice Export", slug: "basmati-rice-export", description: "Premium basmati rice export services worldwide" },
      { name: "Black Pepper Export", slug: "black-pepper-export", description: "Quality black pepper export with certifications" },
      { name: "Buyer Verification", slug: "buyer-verification", description: "Secure buyer verification and due diligence services" },
      { name: "Cardamom Export", slug: "cardamom-export", description: "Premium cardamom export with quality standards" },
      { name: "Cashew Export", slug: "cashew-export", description: "High-quality cashew export services" },
      { name: "Central Asian Markets", slug: "central-asian-markets", description: "Central Asian trade opportunities and market entry" },
      { name: "Certificate of Origin", slug: "certificate-of-origin", description: "Certificate of origin services for all exports" },
      { name: "Certification Services", slug: "certification-services", description: "Complete export certification and compliance" },
      { name: "Compliance Training", slug: "compliance-training", description: "Export compliance training and consultation" },
      { name: "Coriander Export", slug: "coriander-export", description: "Quality coriander export with global standards" },
      { name: "Corn Export", slug: "corn-export", description: "Premium corn export services worldwide" },
      { name: "Cumin Export", slug: "cumin-export", description: "High-quality cumin export with certifications" },
      { name: "Customs Clearance", slug: "customs-clearance", description: "Expert customs clearance and documentation" },
      { name: "Digital Marketing", slug: "digital-marketing", description: "Digital marketing for export businesses" },
      { name: "East African Markets", slug: "east-african-markets", description: "East African market opportunities and strategies" },
      { name: "Eastern European Markets", slug: "eastern-european-markets", description: "Eastern European trade opportunities" },
      { name: "European Markets", slug: "european-markets", description: "European market entry and compliance" },
      { name: "Export Documentation", slug: "export-documentation", description: "Complete export documentation services" },
      { name: "Export Import Guide", slug: "export-import-guide", description: "Comprehensive export-import guidance" },
      { name: "Freight Forwarding", slug: "freight-forwarding", description: "Professional freight forwarding services" },
      { name: "Garlic Export", slug: "garlic-export", description: "Fresh garlic export with quality assurance" },
      { name: "Ginger Export", slug: "ginger-export", description: "Premium ginger export services" },
      { name: "Gulf Cooperation Council", slug: "gulf-cooperation-council", description: "GCC market opportunities and strategies" },
      { name: "Insurance Services", slug: "insurance-services", description: "Export insurance and risk management" },
      { name: "International Trade Basics", slug: "international-trade-basics", description: "Fundamentals of international trade" },
      { name: "Legal Compliance", slug: "legal-compliance", description: "Legal compliance for international trade" },
      { name: "Levant Markets", slug: "levant-markets", description: "Levant region market opportunities" },
      { name: "Market Research", slug: "market-research", description: "International market research services" },
      { name: "Mediterranean Markets", slug: "mediterranean-markets", description: "Mediterranean market entry strategies" },
      { name: "Middle East Markets", slug: "middle-east-markets", description: "Middle East trade opportunities" },
      { name: "Millet Export", slug: "millet-export", description: "Nutritious millet export services" },
      { name: "Non-Basmati Rice Export", slug: "non-basmati-rice-export", description: "Quality non-basmati rice export" },
      { name: "North African Markets", slug: "north-african-markets", description: "North African market opportunities" },
      { name: "North American Markets", slug: "north-american-markets", description: "North American market strategies" },
      { name: "Northeast Asian Markets", slug: "northeast-asian-markets", description: "Northeast Asian trade opportunities" },
      { name: "Oceania Markets", slug: "oceania-markets", description: "Australia and Pacific market entry" },
      { name: "Onion Export", slug: "onion-export", description: "Fresh onion export with quality standards" },
      { name: "Packaging Services", slug: "packaging-services", description: "Professional export packaging solutions" },
      { name: "Quality Standards", slug: "quality-standards", description: "International quality standards compliance" },
      { name: "Red Chili Export", slug: "red-chili-export", description: "Spicy red chili export services" },
      { name: "Rice Export", slug: "rice-export", description: "Comprehensive rice export solutions" },
      { name: "Scandinavian Markets", slug: "scandinavian-markets", description: "Nordic market opportunities" },
      { name: "Sea Freight", slug: "sea-freight", description: "Reliable sea freight services" },
      { name: "Sesame Seeds Export", slug: "sesame-seeds-export", description: "Quality sesame seeds export" },
      { name: "South American Markets", slug: "south-american-markets", description: "South American market entry" },
      { name: "Southeast Asian Markets", slug: "southeast-asian-markets", description: "Southeast Asian trade opportunities" },
      { name: "Southern African Markets", slug: "southern-african-markets", description: "Southern African market strategies" },
      { name: "Spices Export", slug: "spices-export", description: "Premium spices export services" },
      { name: "Sunflower Seeds Export", slug: "sunflower-seeds-export", description: "Quality sunflower seeds export" },
      { name: "Supply Chain Management", slug: "supply-chain-management", description: "End-to-end supply chain solutions" },
      { name: "Technology Integration", slug: "technology-integration", description: "Technology solutions for export business" },
      { name: "Textile Export", slug: "textile-export", description: "Quality textile export services" },
      { name: "Trade Finance", slug: "trade-finance", description: "Export finance and payment solutions" },
      { name: "Turmeric Export", slug: "turmeric-export", description: "Premium turmeric export services" },
      { name: "Warehouse Services", slug: "warehouse-services", description: "Professional warehousing solutions" },
      { name: "West African Markets", slug: "west-african-markets", description: "West African trade opportunities" },
      { name: "Wheat Export", slug: "wheat-export", description: "Quality wheat export services" }
    ],
    seo: [
      { name: "Air Freight Services", slug: "air-freight-services", description: "Fast and reliable air freight solutions for urgent shipments" },
      { name: "Ajwain Export", slug: "ajwain-export", description: "Premium ajwain (carom seeds) export services" },
      { name: "Algeria Market Export", slug: "algeria-market-export", description: "Algeria market opportunities and export strategies" },
      { name: "Angola Market Export", slug: "angola-market-export", description: "Angola market entry and trade opportunities" },
      { name: "Argentina Market Export", slug: "argentina-market-export", description: "Argentina export market strategies" },
      { name: "Arhar Dal Export", slug: "arhar-dal-export", description: "Premium arhar dal (pigeon peas) export" },
      { name: "Australia Market Export", slug: "australia-market-export", description: "Australian market entry strategies" },
      { name: "Azerbaijan Market Export", slug: "azerbaijan-market-export", description: "Azerbaijan trade opportunities" },
      { name: "Bahrain Market Export", slug: "bahrain-market-export", description: "Bahrain market export strategies" },
      { name: "Banana Export Services", slug: "banana-export-services", description: "Fresh banana export with cold chain" },
      { name: "Bangladesh Market Export", slug: "bangladesh-market-export", description: "Bangladesh market opportunities" },
      { name: "Belarus Market Export", slug: "belarus-market-export", description: "Belarus export market strategies" },
      { name: "Belgium Market Export", slug: "belgium-market-export", description: "Belgium market entry opportunities" },
      { name: "Black Mustard Seeds Export", slug: "black-mustard-seeds-export", description: "Quality black mustard seeds export" },
      { name: "Bolivia Market Export", slug: "bolivia-market-export", description: "Bolivia market entry strategies" },
      { name: "Botswana Market Export", slug: "botswana-market-export", description: "Botswana trade opportunities" },
      { name: "Brazil Market Export", slug: "brazil-market-export", description: "Brazil export market strategies" },
      { name: "Brazil Nut Export", slug: "brazil-nut-export", description: "Premium Brazil nut export services" },
      { name: "Brunei Market Export", slug: "brunei-market-export", description: "Brunei market opportunities" },
      { name: "Bulgaria Market Export", slug: "bulgaria-market-export", description: "Bulgaria export strategies" },
      { name: "Cambodia Market Export", slug: "cambodia-market-export", description: "Cambodia market entry opportunities" },
      { name: "Cameroon Market Export", slug: "cameroon-market-export", description: "Cameroon trade opportunities" },
      { name: "Canada Market Export", slug: "canada-market-export", description: "Canadian market entry strategies" },
      { name: "Cashew Oil Export Services", slug: "cashe-oil-export-services", description: "Premium cashew oil export" },
      { name: "Celery Seeds Export", slug: "celery-seeds", description: "Quality celery seeds export services" },
      { name: "Chana Dal Export", slug: "chana-dal-export", description: "Premium chana dal (chickpea lentils) export" },
      { name: "Chickpea Export", slug: "chickpea-export", description: "Quality chickpea export services" },
      { name: "Chile Market Export", slug: "chile-market-export", description: "Chile market entry strategies" },
      { name: "China Market Export", slug: "china-market-export", description: "China export market opportunities" },
      { name: "Cinnamon Export", slug: "cinnamon-export", description: "Premium cinnamon export services" },
      { name: "Clove Export", slug: "clove-export", description: "Quality clove export with certifications" },
      { name: "Coconut Export Services", slug: "coconut-export-services", description: "Fresh coconut export solutions" },
      { name: "Coffee Export Services", slug: "coffee-export-services", description: "Premium coffee export services" },
      { name: "Colombia Market Export", slug: "colombia-market-export", description: "Colombia market entry strategies" },
      { name: "Cotton Export Services", slug: "cotton-export-services", description: "Quality cotton export solutions" },
      { name: "Croatia Market Export", slug: "croatia-market-export", description: "Croatia market opportunities" },
      { name: "Cuba Market Export", slug: "cuba-market-export", description: "Cuba trade opportunities" },
      { name: "Cyprus Market Export", slug: "cyprus-market-export", description: "Cyprus market entry strategies" },
      { name: "Czech Market Export", slug: "czech-market-export", description: "Czech Republic market opportunities" },
      { name: "Dates Export", slug: "dates-export", description: "Premium dates export services" },
      { name: "Denmark Market Export", slug: "denmark-market-export", description: "Denmark market entry strategies" },
      { name: "Dill Seeds Export", slug: "dill-seeds-export", description: "Quality dill seeds export" },
      { name: "Dominican Republic Market Export", slug: "dominican-republic-market-export", description: "Dominican Republic trade opportunities" },
      { name: "Ecuador Market Export", slug: "ecuador-market-export", description: "Ecuador market entry strategies" },
      { name: "Egypt Market Export", slug: "egypt-market-export", description: "Egypt export market opportunities" },
      { name: "Estonia Market Export", slug: "estonia-market-export", description: "Estonia market strategies" },
      { name: "Ethiopia Market Export", slug: "ethiopia-market-export", description: "Ethiopia trade opportunities" },
      { name: "Express Shipping Services", slug: "express-shipping-services", description: "Fast express shipping solutions" },
      { name: "Fennel Seeds Export", slug: "fennel-seeds-export", description: "Premium fennel seeds export" },
      { name: "Fenugreek Seeds Export", slug: "fenugreek-seeds-export", description: "Quality fenugreek seeds export" },
      { name: "Finland Market Export", slug: "finland-market-export", description: "Finland market entry strategies" },
      { name: "France Market Export", slug: "france-market-export", description: "France export market opportunities" },
      { name: "Frozen Food Export", slug: "frozen-food-export", description: "Frozen food export with cold chain" },
      { name: "Gabon Market Export", slug: "gabon-market-export", description: "Gabon trade opportunities" },
      { name: "Gambia Market Export", slug: "gambia-market-export", description: "Gambia market strategies" },
      { name: "Gems Jewelry Export Services", slug: "gems-jewelry-export-services", description: "Premium gems and jewelry export" },
      { name: "Georgia Market Export", slug: "georgia-market-export", description: "Georgia market opportunities" },
      { name: "Germany Market Export", slug: "germany-market-export", description: "German market entry strategies" },
      { name: "Ghana Market Export", slug: "ghana-market-export", description: "Ghana export opportunities" },
      { name: "Grapes Export Services", slug: "grapes-export-services", description: "Fresh grapes export solutions" },
      { name: "Greece Market Export", slug: "greece-market-export", description: "Greece market entry strategies" },
      { name: "Guatemala Market Export", slug: "guatemala-market-export", description: "Guatemala trade opportunities" },
      { name: "Guinea Market Export", slug: "guinea-market-export", description: "Guinea market strategies" },
      { name: "Handicrafts Export Services", slug: "handicrafts-export-services", description: "Traditional handicrafts export" },
      { name: "Hazelnut Export", slug: "hazelnut-export", description: "Premium hazelnut export services" },
      { name: "Honduras Market Export", slug: "honduras-market-export", description: "Honduras market opportunities" },
      { name: "Hungary Market Export", slug: "hungary-market-export", description: "Hungary export strategies" },
      { name: "Iceland Market Export", slug: "iceland-market-export", description: "Iceland market entry opportunities" },
      { name: "Indonesia Market Export", slug: "indonesia-market-export", description: "Indonesia trade opportunities" },
      { name: "Iraq Market Export", slug: "iraq-market-export", description: "Iraq market entry strategies" },
      { name: "Ireland Market Export", slug: "ireland-market-export", description: "Ireland export opportunities" },
      { name: "Israel Market Export", slug: "israel-market-export", description: "Israel market strategies" },
      { name: "Italy Market Export", slug: "italy-market-export", description: "Italian market entry opportunities" },
      { name: "Ivory Coast Market Export", slug: "ivory-coast-market-export", description: "Ivory Coast trade opportunities" },
      { name: "Jaggery Export Services", slug: "jaggery-export-services", description: "Natural jaggery export services" },
      { name: "Jamaica Market Export", slug: "jamaica-market-export", description: "Jamaica market opportunities" },
      { name: "Japan Market Export", slug: "japan-market-export", description: "Japanese market entry strategies" },
      { name: "Jordan Market Export", slug: "jordan-market-export", description: "Jordan export opportunities" },
      { name: "Kazakhstan Market Export", slug: "kazakhstan-market-export", description: "Kazakhstan trade opportunities" },
      { name: "Kenya Market Export", slug: "kenya-market-export", description: "Kenya market entry strategies" },
      { name: "Kenya Market Export Services", slug: "kenya-market-export-services", description: "Comprehensive Kenya export services" },
      { name: "Kuwait Market Export", slug: "kuwait-market-export", description: "Kuwait market opportunities" },
      { name: "Kyrgyzstan Market Export", slug: "kyrgyzstan-market-export", description: "Kyrgyzstan trade strategies" },
      { name: "Laos Market Export", slug: "laos-market-export", description: "Laos market entry opportunities" },
      { name: "Latvia Market Export", slug: "latvia-market-export", description: "Latvia export strategies" },
      { name: "Leather Products Export Services", slug: "leather-products-export-services", description: "Quality leather products export" },
      { name: "Lebanon Market Export", slug: "lebanon-market-export", description: "Lebanon market opportunities" },
      { name: "Macadamia Export", slug: "macadamia-export", description: "Premium macadamia export services" },
      { name: "Malaysia Market Export", slug: "malaysia-market-export", description: "Malaysia market entry strategies" },
      { name: "Mango Export Services", slug: "mango-export-services", description: "Fresh mango export solutions" },
      { name: "Masoor Dal Export", slug: "masoor-dal-export", description: "Premium masoor dal (red lentils) export" },
      { name: "Mexico Market Export", slug: "mexico-market-export", description: "Mexico market opportunities" },
      { name: "Moong Dal Export", slug: "moong-dal-export", description: "Quality moong dal (green lentils) export" },
      { name: "Morocco Market Export", slug: "morocco-market-export", description: "Morocco market entry strategies" },
      { name: "Mustard Seeds Export", slug: "mustard-seeds-export", description: "Premium mustard seeds export" },
      { name: "Myanmar Market Export", slug: "myanmar-market-export", description: "Myanmar trade opportunities" },
      { name: "Nepal Market Export", slug: "nepal-market-export", description: "Nepal market entry strategies" },
      { name: "Netherlands Market Export", slug: "netherlands-market-export", description: "Netherlands export opportunities" },
      { name: "Nigella Seeds Export", slug: "nigella-seeds-export", description: "Quality nigella seeds (kalonji) export" },
      { name: "Nigeria Market Export", slug: "nigeria-market-export", description: "Nigeria market strategies" },
      { name: "Nigeria Market Export Services", slug: "nigeria-market-export-services", description: "Comprehensive Nigeria export services" },
      { name: "Ocean Freight Services", slug: "ocean-freight-services", description: "Reliable ocean freight solutions" },
      { name: "Organic Food Export", slug: "organic-food-export", description: "Certified organic food export" },
      { name: "Pakistan Market Export", slug: "pakistan-market-export", description: "Pakistan market opportunities" },
      { name: "Pecan Export", slug: "pecan-export", description: "Premium pecan export services" },
      { name: "Peru Market Export", slug: "peru-market-export", description: "Peru market entry strategies" },
      { name: "Pharmaceutical Export", slug: "pharmaceutical-export", description: "Quality pharmaceutical export services" },
      { name: "Philippines Market Export", slug: "philippines-market-export", description: "Philippines trade opportunities" },
      { name: "Pine Nut Export", slug: "pine-pnut-export", description: "Premium pine nut export services" },
      { name: "Pistachio Export", slug: "pistachio-export", description: "Quality pistachio export" },
      { name: "Poppy Seeds Export", slug: "popopy-seeds-export", description: "Premium poppy seeds export" },
      { name: "Psyllium Husk Export", slug: "psyllium-husk-export", description: "Quality psyllium husk export" },
      { name: "Pulses Export Services", slug: "pulses-export-services", description: "Comprehensive pulses export solutions" },
      { name: "Raisins Export", slug: "raisins-export", description: "Premium raisins export services" },
      { name: "Rajma Export", slug: "rajma-export", description: "Quality rajma (kidney beans) export" },
      { name: "Russia Market Export", slug: "russia-market-export", description: "Russian market entry strategies" },
      { name: "Singapore Market Export", slug: "singapore-market-export", description: "Singapore trade opportunities" },
      { name: "South Africa Market Export", slug: "south-africa-market-export", description: "South Africa market strategies" },
      { name: "South Korea Market Export", slug: "south-korea-market-export", description: "South Korea export opportunities" },
      { name: "Spain Market Export", slug: "spain-market-export", description: "Spanish market entry strategies" },
      { name: "Sri Lanka Market Export", slug: "sri-lanka-market-export", description: "Sri Lanka trade opportunities" },
      { name: "Star Anise Export", slug: "star-anise-export", description: "Premium star anise export" },
      { name: "Sugar Export Services", slug: "sugar-export-services", description: "Quality sugar export solutions" },
      { name: "Tea Export Services", slug: "tea-export-services", description: "Premium tea export services" },
      { name: "Thailand Market Export", slug: "thailand-market-export", description: "Thailand market entry strategies" },
      { name: "Turkey Market Export", slug: "turkey-market-export", description: "Turkish market opportunities" },
      { name: "UAE Market Export", slug: "uae-market-export", description: "UAE export market strategies" },
      { name: "UK Market Export", slug: "uk-market-export", description: "United Kingdom market opportunities" },
      { name: "USA Market Export", slug: "usa-market-export", description: "United States export strategies" },
      { name: "Urad Dal Export", slug: "urad-dal-export", description: "Premium urad dal (black lentils) export" },
      { name: "Vietnam Market Export", slug: "vietnam-market-export", description: "Vietnam trade opportunities" },
      { name: "Walnut Export", slug: "walnut-export", description: "Premium walnut export services" },
      { name: "Wheat Flour Export Services", slug: "wheat-flour-export-services", description: "Quality wheat flour export" }
    ]
  };

  const faqSections = [
    {
      title: "Rice Export from India",
      icon: <Globe className="h-6 w-6" />,
      image: riceExportImage,
      faqs: [
        {
          question: "Who is the best rice exporter in India?",
          answer: "India's largest basmati rice exporters include companies from Punjab, Haryana, and Rajkot. The best rice exporter depends on quality standards, certifications, and global reach. Leading exporters maintain ISO certifications, FSSAI licenses, and strong supply chains. Top exporters offer both basmati and non-basmati rice varieties with competitive pricing and reliable delivery schedules."
        },
        {
          question: "What is the rice export price to Dubai in 2025?",
          answer: "Rice export prices to Dubai vary by variety: Basmati rice ranges from $800-1200 per MT, non-basmati rice from $400-600 per MT. Prices depend on quality grade, packaging, shipping terms (FOB/CIF), and seasonal demand. Current market rates include freight charges, insurance, and customs duties. Bulk orders typically receive better pricing."
        },
        {
          question: "How to export rice from India to Saudi Arabia?",
          answer: "Rice export to Saudi Arabia requires: 1) IEC code registration, 2) FSSAI license, 3) Phytosanitary certificate, 4) Certificate of origin, 5) Quality inspection certificate, 6) Halal certification, 7) Commercial invoice and packing list. The procedure involves pre-shipment inspection, customs clearance, and compliance with SASO standards."
        }
      ]
    },
    {
      title: "Spices Export from India",
      icon: <FileText className="h-6 w-6" />,
      image: spicesExportImage,
      faqs: [
        {
          question: "Who is the top spice exporter in India?",
          answer: "India's top spice exporters are located in Kerala, Gujarat, Rajkot, and Tamil Nadu. Leading exporters specialize in turmeric, cumin, coriander, cardamom, and pepper. Top companies maintain organic certifications, steam sterilization facilities, and global quality standards. Gujarat and Rajkot exporters are particularly strong in cumin and fennel exports."
        },
        {
          question: "What spices are exported to UAE from India?",
          answer: "Major spices exported to UAE include cumin seeds, coriander seeds, turmeric powder, red chili powder, cardamom, black pepper, and garam masala. UAE is India's largest spice export destination. Export requirements include Halal certification, quality certificates, and compliance with Emirates Authority for Standardization requirements."
        }
      ]
    },
    {
      title: "Export Business Guide",
      icon: <Building className="h-6 w-6" />,
      image: exportConsultationImage,
      faqs: [
        {
          question: "How to start import export business in India?",
          answer: "Starting import-export business: 1) Business registration (proprietorship/partnership/company), 2) Obtain IEC code from DGFT, 3) Open current account with AD bank, 4) Register with Export Promotion Councils, 5) Product selection and market research, 6) Supplier/buyer identification, 7) Compliance setup, 8) Logistics partnerships, 9) Finance arrangements."
        },
        {
          question: "What documents are required for export from India?",
          answer: "Export documents include: 1) Commercial invoice, 2) Packing list, 3) Shipping bill, 4) Bill of lading/Airway bill, 5) Certificate of origin, 6) Quality inspection certificates, 7) Insurance certificate, 8) Bank realization certificate, 9) Export declaration form, 10) Product-specific certificates (phytosanitary, health, etc.)."
        }
      ]
    }
  ];

  const filteredFAQs = faqSections.map(section => ({
    ...section,
    faqs: section.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.faqs.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-teal-600/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FAQ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about export-import business, international trade, and our comprehensive services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-full border-2 border-blue-200 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12">
            {filteredFAQs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm mr-3">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => {
                      const globalIndex = sectionIndex * 100 + faqIndex;
                      return (
                        <div key={faqIndex} className="border border-slate-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-6 py-4 text-left bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-all duration-300 flex justify-between items-center group"
                          >
                            <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                              {faq.question}
                            </span>
                            {openFAQ === globalIndex ? (
                              <ChevronUp className="h-5 w-5 text-blue-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            )}
                          </button>
                          {openFAQ === globalIndex && (
                            <div className="px-6 py-4 bg-white border-t border-slate-100">
                              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Pages Directory */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Explore Our Comprehensive Resources
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover detailed guides, market insights, and specialized services across our extensive knowledge base
            </p>
          </div>

          {/* Market & Services Pages */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-800">Market Guides</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Comprehensive guides for international markets and trade opportunities
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {internalPages.more.slice(0, 8).map((page, index) => (
                  <Link
                    key={index}
                    to={`/more/${page.slug}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors p-1"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
              <Link to="/more" className="inline-block mt-4">
                <Button variant="outline" size="sm">
                  View All Market Guides
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Package className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-800">Product & Service Pages</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Specialized export services and product-specific solutions
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {internalPages.seo.slice(0, 8).map((page, index) => (
                  <Link
                    key={index}
                    to={`/seo/${page.slug}`}
                    className="text-teal-600 hover:text-teal-800 hover:underline transition-colors p-1"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
              <Link to="/seo" className="inline-block mt-4">
                <Button variant="outline" size="sm">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Assistance?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our export specialists are ready to help you navigate international trade complexities and find the perfect solutions for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Expert
                </Button>
              </Link>
              <Link to="/inquiry">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Heart className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;