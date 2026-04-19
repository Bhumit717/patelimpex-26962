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
                { name: "Expert Blog", path: "/blog", icon: MessageSquare },
                { name: "Latest Trade News", path: "/news", icon: Newspaper },
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

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Sitemap;
