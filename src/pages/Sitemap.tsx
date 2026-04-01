import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Badge } from "@/components/ui/badge";
import {
    Globe, Layout, ShoppingBag, Truck, FileText,
    HelpCircle, Shield, Search, ArrowRight, Home,
    Info, MessageSquare, Newspaper, Mail, Layers,
    Wheat, Sprout, Package, Zap, Activity, BookOpen,
    FileCheck, BarChart3, TrendingUp, Users
} from 'lucide-react';

const Sitemap = () => {
    const sections = [
        {
            title: "Core Navigation",
            icon: Layout,
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            links: [
                { name: "Homepage", path: "/", icon: Home },
                { name: "About Patel Impex", path: "/about", icon: Info },
                { name: "Global Services", path: "/services", icon: Truck },
                { name: "Product Catalog", path: "/products", icon: ShoppingBag },
                { name: "Contact Hub", path: "/contact", icon: Mail },
                { name: "Global Inquiry", path: "/inquiry", icon: MessageSquare },
            ]
        },
        {
            title: "Trade Intelligence",
            icon: Globe,
            color: "text-green-500",
            bgColor: "bg-green-50",
            links: [
                { name: "Resource Library Hub", path: "/more", icon: Layers },
                { name: "Export Import Guide", path: "/more/export-import-guide", icon: FileText },
                { name: "Trade Documentation", path: "/more/export-documentation", icon: FileCheck },
                { name: "Market Research", path: "/more/market-research", icon: Search },
                { name: "Rice Export Insights", path: "/more/rice-export", icon: Wheat },
                { name: "Spices Global Trade", path: "/more/spices-export", icon: Sprout },
                { name: "Quality Standards", path: "/more/quality-standards", icon: Shield },
                { name: "Customs Clearance", path: "/more/customs-clearance", icon: FileText },
            ]
        },
        {
            title: "Tiles & Sanitaryware",
            icon: Layout,
            color: "text-indigo-500",
            bgColor: "bg-indigo-50",
            links: [
                { name: "GVT & PGVT Tiles Hub", path: "/more/gvt-pgvt-tiles-export", icon: Layout },
                { name: "Double Charge Durable", path: "/more/double-charge-tiles-export", icon: Layout },
                { name: "Full Body Vitrified", path: "/more/full-body-tiles-export", icon: Layout },
                { name: "Digital Wall Ceramics", path: "/more/digital-wall-tiles-export", icon: Layout },
                { name: "Elevation Exterior Tiles", path: "/more/elevation-tiles-export", icon: Layout },
                { name: "Parking Anti-Skid Tiles", path: "/more/parking-tiles-export", icon: Layout },
                { name: "Porcelain Luxury Slabs", path: "/more/porcelain-slabs-export", icon: Layout },
                { name: "Sanitaryware Sets", path: "/more/sanitaryware-sets-export", icon: Layout },
                { name: "Designer Wash Basins", path: "/more/designer-wash-basins-export", icon: Layout },
                { name: "Water Closet Solutions", path: "/more/water-closets-export", icon: Layout },
                { name: "Soluble Salt Tiles", path: "/more/soluble-salt-tiles-export", icon: Layout },
                { name: "Nano Vitrified Tiles", path: "/more/nano-vitrified-tiles-export", icon: Layout },
                { name: "Polished Vitrified Hub", path: "/more/polished-vitrified-tiles-export", icon: Layout },
                { name: "Ceramic Wall Tiles", path: "/more/ceramic-wall-tiles-export", icon: Layout },
                { name: "Subway Decorative Tiles", path: "/more/subway-tiles-export", icon: Layout },
                { name: "Glass Mosaic Designs", path: "/more/glass-mosaic-export", icon: Layout },
                { name: "Mosaic Floor Layouts", path: "/more/mosaic-floor-tiles-export", icon: Layout },
                { name: "Terracotta Traditional", path: "/more/terracotta-tiles-export", icon: Layout },
            ]
        },
        {
            title: "Earthing & Safety",
            icon: Zap,
            color: "text-amber-500",
            bgColor: "bg-amber-50",
            links: [
                { name: "GI Grounding Electrode", path: "/more/gi-earthing-electrode-export", icon: Zap },
                { name: "Copper Electrode Pro", path: "/more/copper-earthing-electrode-export", icon: Zap },
                { name: "Copper Bonded Rods", path: "/more/copper-bonded-rods-export", icon: Zap },
                { name: "Ground Backfill Compound", path: "/more/backfill-compound-export", icon: Zap },
                { name: "Earthing Conductor Strips", path: "/more/earthing-strips-export", icon: Zap },
                { name: "Lightning Arrester Tech", path: "/more/lightning-arrester-export", icon: Zap },
                { name: "Heavy Duty Earth Clamps", path: "/more/earthing-clamps-export", icon: Zap },
                { name: "Protective Pit Covers", path: "/more/earth-pit-covers-export", icon: Zap },
                { name: "Grounding Electrodes", path: "/more/grounding-electrode-export", icon: Zap },
                { name: "Maintenance Free Earthing", path: "/more/maintenance-free-earthing-export", icon: Zap },
                { name: "Earthing Kits & Spares", path: "/more/earthing-kit-export", icon: Zap },
                { name: "Bentonite Compound Powder", path: "/more/bentonite-powder-export", icon: Zap },
                { name: "Earth Pit Infrastructure", path: "/more/earth-pit-export", icon: Zap },
                { name: "Industrial Grounding Rods", path: "/more/earthing-rod-export", icon: Zap },
            ]
        },
        {
            title: "Agriculture & Grains",
            icon: Wheat,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            links: [
                { name: "Basmati Rice Export", path: "/more/basmati-rice-export", icon: Wheat },
                { name: "Non-Basmati Varieties", path: "/more/non-basmati-rice-export", icon: Wheat },
                { name: "Wheat & Flour Export", path: "/more/wheat-export", icon: Wheat },
                { name: "Maize & Corn Sourcing", path: "/more/corn-export", icon: Wheat },
                { name: "Millet & Sorghum", path: "/more/millet-export", icon: Wheat },
                { name: "Barley Grains Export", path: "/more/barley-export", icon: Wheat },
                { name: "Groundnut Kernels", path: "/more/groundnut-export", icon: Sprout },
                { name: "Sesame Seeds Natural", path: "/more/sesame-seeds-export", icon: Sprout },
                { name: "Psyllium Husk 99%", path: "/more/psyllium-husk-export", icon: Activity },
            ]
        },
        {
            title: "Spices & Dry Fruits",
            icon: Sprout,
            color: "text-red-500",
            bgColor: "bg-red-50",
            links: [
                { name: "Cumin Seeds Export", path: "/more/cumin-seeds-export", icon: Sprout },
                { name: "Turmeric Finger/Powder", path: "/more/turmeric-export", icon: Sprout },
                { name: "Coriander Seeds Hub", path: "/more/coriander-export", icon: Sprout },
                { name: "Red Chili Whole/Crushed", path: "/more/red-chili-export", icon: Sprout },
                { name: "Black Pepper Export", path: "/more/black-pepper-export", icon: Sprout },
                { name: "Ginger & Garlic Mix", path: "/more/ginger-export", icon: Sprout },
                { name: "Cashew Nut Kernels", path: "/more/cashew-export", icon: Package },
                { name: "Almond Premium Sourcing", path: "/more/almond-export", icon: Package },
            ]
        },
        {
            title: "Trade & Compliance Services",
            icon: Activity,
            color: "text-slate-600",
            bgColor: "bg-slate-100",
            links: [
                { name: "Legal Compliance", path: "/more/legal-compliance", icon: Shield },
                { name: "Buyer Verification", path: "/more/buyer-verification", icon: Users },
                { name: "Trade Insurance", path: "/more/insurance-services", icon: Shield },
                { name: "Market Trends", path: "/more/market-research", icon: TrendingUp },
            ]
        },
        {
            title: "Healthcare & Pharma",
            icon: Activity,
            color: "text-rose-500",
            bgColor: "bg-rose-50",
            links: [
                { name: "Veterinary Medicines", path: "/more/veterinary-medicines-export", icon: Activity },
                { name: "Health Caps Exporter", path: "/more/health-capsules-export", icon: Activity },
                { name: "Diagnostic Test Kits", path: "/more/diagnostic-kits-export", icon: Activity },
                { name: "Herbal Supplements", path: "/more/herbal-supplements-export", icon: Activity },
                { name: "Medical Safety Gloves", path: "/more/medical-gloves-export", icon: Activity },
            ]
        },
        {
            title: "Agri-Machinery & Tools",
            icon: Sprout,
            color: "text-emerald-700",
            bgColor: "bg-emerald-50",
            links: [
                { name: "Mini Tractor Export", path: "/more/mini-tractor-export", icon: Sprout },
                { name: "Combine Harvester", path: "/more/combine-harvester-export", icon: Sprout },
                { name: "Drip Irrigation Tech", path: "/more/drip-irrigation-export", icon: Sprout },
                { name: "Power Tiller Hub", path: "/more/power-tiller-export", icon: Sprout },
                { name: "Farming Hand Tools", path: "/more/hand-tools-export", icon: Sprout },
            ]
        },
        {
            title: "Textiles & Home Decor",
            icon: ShoppingBag,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            links: [
                { name: "Premium Cotton Fiber", path: "/more/cotton-export", icon: ShoppingBag },
                { name: "Organic Cotton Yarn", path: "/more/cotton-yarn-export", icon: ShoppingBag },
                { name: "Designer Textile Fabrics", path: "/more/designer-fabrics-export", icon: ShoppingBag },
                { name: "Luxury Bed Linen", path: "/more/bed-linen-export", icon: ShoppingBag },
                { name: "Home Curtains Hub", path: "/more/curtains-export", icon: ShoppingBag },
                { name: "Premium Towel Sets", path: "/more/towel-sets-export", icon: ShoppingBag },
            ]
        },
        {
            title: "Company & Media",
            icon: Newspaper,
            color: "text-purple-500",
            bgColor: "bg-purple-50",
            links: [
                { name: "Expert Blog", path: "/blog", icon: MessageSquare },
                { name: "Latest Trade News", path: "/news", icon: Newspaper },
                { name: "Knowledge Base (FAQ)", path: "/faq", icon: HelpCircle },
                { name: "Brand Assets (Logo)", path: "/logo", icon: Layout },
            ]
        },
        {
            title: "Legal & Global",
            icon: Shield,
            color: "text-slate-500",
            bgColor: "bg-slate-50",
            links: [
                { name: "Privacy Policy", path: "/privacy-policy", icon: Shield },
                { name: "Terms of Service", path: "/terms-of-service", icon: Shield },
                { name: "Cookie Policy", path: "/cookie-policy", icon: Shield },
                { name: "Global Trade Map", path: "/services", icon: Globe },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <SEOHead title="Sitemap | Patel Impex" description="Complete index of all pages and resources on the Patel Impex global trade platform." canonicalUrl="/sitemap" />
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')] opacity-10 bg-center object-cover scale-110" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <Badge className="bg-green-600 mb-6 px-4 py-1 text-xs uppercase tracking-widest font-bold border-none">Navigation Index</Badge>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 font-graduate uppercase tracking-tighter">Site Architecture</h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Access our complete directory of specialized export catalogs, trade intelligence, and global market insights.
                    </p>
                </div>
            </section>

            {/* Sitemap Grid */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {sections.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 border border-white hover:border-green-100 transition-all group overflow-hidden relative">
                                <div className={`w-14 h-14 ${section.bgColor} rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-500`}>
                                    <section.icon className={`w-7 h-7 ${section.color}`} />
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 font-graduate mb-8 flex items-center">
                                    {section.title}
                                    <div className="h-0.5 flex-1 bg-slate-100 ml-4 rounded-full" />
                                </h3>

                                <ul className="space-y-4">
                                    {section.links.map((link, lIdx) => {
                                        const LinkIcon = link.icon;
                                        return (
                                            <li key={lIdx}>
                                                <Link to={link.path} className="flex items-center text-slate-600 hover:text-green-600 font-semibold group/link transition-all">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center mr-3 group-hover/link:bg-green-100 transition-colors">
                                                        <LinkIcon className="w-4 h-4 text-slate-400 group-hover/link:text-green-600" />
                                                    </div>
                                                    <span className="text-sm md:text-base">{link.name}</span>
                                                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-green-500" />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Decorative element */}
                                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-green-50 transition-colors pointer-events-none -z-10" />
                            </div>
                        ))}
                    </div>

                    {/* Mass Directory Teaser */}
                    <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center border-4 border-slate-800 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />
                        <h3 className="text-3xl md:text-5xl font-black text-white font-graduate uppercase mb-6 tracking-tighter">Mass Trade Route Cluster</h3>
                        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light px-4">
                            Our platform manages a high-volume network of localized trade routes. For specific regional insights spanning 120+ categories, explore our resource library.
                        </p>
                        <Link to="/more" className="bg-green-600 hover:bg-green-500 text-white font-black uppercase px-12 py-5 rounded-full inline-flex items-center transition-all hover:scale-105 shadow-xl shadow-green-900/40 tracking-widest text-xs">
                            Access Resource Library <Globe className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Sitemap;
