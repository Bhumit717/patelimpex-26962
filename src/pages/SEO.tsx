import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Search, Globe, Target, BarChart3, Users, FileText, ArrowRight, BookOpen, Package, Wheat, Truck, Shield } from "lucide-react";
import dict from '../data/seoDictionary.json';

const SEO = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allKeywords, setAllKeywords] = useState<string[]>([]);
  const [filteredKeywords, setFilteredKeywords] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1000); // Pagination for the massive list

  // Fetch full keywords list
  useEffect(() => {
    fetch('/seoKeywords.json')
      .then(res => res.json())
      .then(data => {
        setAllKeywords(data || []);
      })
      .catch(err => console.error("Could not load keywords", err));
  }, []);

  // Filter logic for dropdown
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredKeywords(allKeywords.slice(0, 50)); // show 50 default in dropdown
      return;
    }
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = allKeywords.filter(kw => kw.toLowerCase().includes(lowerSearch)).slice(0, 100);
    setFilteredKeywords(filtered);
  }, [searchTerm, allKeywords]);

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.relative')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const resourceCategories = [
    {
      title: "Export Import Basics & Logistics",
      description: "Essential guides for international trade and freight forwarding.",
      icon: Truck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      pages: [
        { title: "Definitive Export Guide", slug: "/more/export-import-guide" },
        { title: "Customs Clearance", slug: "/more/customs-clearance" },
        { title: "Trade Finance", slug: "/more/trade-finance" },
        { title: "Sea Freight Logistics", slug: "/more/sea-freight" },
        { title: "Warehouse Services", slug: "/more/warehouse-services" },
        { title: "Export Documentation", slug: "/more/export-documentation" },
      ]
    },
    {
      title: "Core Product Capabilities",
      description: "Direct access to our certified agricultural and industrial indexes.",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-50",
      pages: [
        { title: "Premium Rice Export", slug: "/products/rice" },
        { title: "World-Class Spices", slug: "/more/spices-export" },
        { title: "Agricultural Index", slug: "/more/agricultural-products" },
        { title: "Textiles & Cotton", slug: "/more/textile-export" },
        { title: "Industrial Machinery", slug: "/products/mini-tractor-export" },
        { title: "Medical & Synthetics", slug: "/products/medical-gloves-export" },
      ]
    },
    {
      title: "Corporate Governance",
      description: "Compliance, risk mitigation, and international buyer verification.",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      pages: [
        { title: "Quality Standards", slug: "/more/quality-standards" },
        { title: "Legal Compliance", slug: "/more/legal-compliance" },
        { title: "Insurance Coverings", slug: "/more/insurance-services" },
        { title: "Buyer Verification", slug: "/more/buyer-verification" },
        { title: "Market Research", slug: "/more/market-research" },
        { title: "Digital Security", slug: "/more/digital-marketing" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEOHead title="Global Trade Explorer | Patel Impex" description="Explore our massive global footprint covering everything from logistics intelligence to top regional market penetrations." canonicalUrl="/seo" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-green-500/10 -skew-x-12 transform origin-top pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-green-600 text-white hover:bg-green-500 px-4 py-1 text-sm rounded-full">
              <Globe className="w-4 h-4 mr-2" /> Global Trade Knowledge Base
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-graduate uppercase tracking-tight">
              Explorer <span className="text-green-500">Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light">
              Your centralized portal bridging Export/Import Intelligence, Product Architectures, and hyper-local B2B trading opportunities spanning {dict.locations.length} countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 font-mono font-bold">{dict.products.length} Products</span>
              <span className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 font-mono font-bold text-green-400">29,232 Active B2B Market Routes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Core (Merging /more concepts) */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 font-graduate uppercase">Core Services & Insights</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col">
                <div className={`p-8 ${category.bgColor} border-b border-slate-100`}>
                  <div className={`w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold font-graduate text-slate-900 mb-2">{category.title}</h3>
                  <p className="text-slate-600 text-sm">{category.description}</p>
                </div>
                <div className="p-8 flex-1 bg-white">
                  <ul className="space-y-4">
                    {category.pages.map((p, i) => (
                      <li key={i}>
                        <Link to={p.slug} className="group flex items-center text-slate-700 hover:text-green-600 font-semibold transition-colors">
                          <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-green-500 mr-3 transition-colors" /> {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic SEO Cluster Matrix */}
      <section className="py-24 px-4 bg-slate-900 border-t border-slate-800" id="search-hub">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-3xl">
              <Badge className="bg-slate-800 text-green-400 border border-green-500/30 mb-4 px-3 py-1 uppercase tracking-widest text-xs font-bold">Automated Network Search</Badge>
              <h2 className="text-4xl lg:text-5xl font-black text-white font-graduate uppercase">Global Market Dropdown</h2>
              <p className="text-slate-400 text-lg mt-4">
                Access over {allKeywords.length.toLocaleString()} micro-targeted trading routes specifically optimized for your target geography. Search and select from the dropdown below to explore completely unique market guides.
              </p>
            </div>
          </div>

          <div className="max-w-4xl bg-slate-800 border border-slate-700 rounded-xl p-8 mb-16 shadow-2xl relative z-20">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Type a product or country (e.g. Rice in Dubai)..."
                className="w-full bg-slate-900 border-2 border-slate-700 text-white rounded-lg pl-14 pr-4 py-4 text-xl focus:outline-none focus:border-green-500 transition-colors"
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsDropdownOpen(true)}
              />

              {isDropdownOpen && filteredKeywords.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 rounded-lg shadow-2xl border border-slate-700 overflow-hidden max-h-[400px] overflow-y-auto z-50">
                  {filteredKeywords.map((kw, idx) => (
                    <Link
                      key={idx}
                      to={`/seo/${kw.replace(/ /g, '-')}`}
                      className="block px-6 py-4 hover:bg-slate-800 border-b border-slate-800 transition-colors last:border-0"
                    >
                      <span className="font-bold text-white capitalize block">{kw}</span>
                      <span className="text-xs text-green-400 flex items-center mt-1"><ArrowRight className="w-3 h-3 mr-1" /> View Export Guide</span>
                    </Link>
                  ))}
                </div>
              )}
              {isDropdownOpen && searchTerm && filteredKeywords.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 rounded-lg shadow-xl border border-slate-700 p-6 text-center z-50">
                  <span className="text-slate-400 font-medium">No trading routes found for "{searchTerm}".</span>
                </div>
              )}
            </div>
            <p className="text-slate-500 text-sm mt-4 text-center">
              Showing top {filteredKeywords.length} matching routes across {allKeywords.length.toLocaleString()} total verified export endpoints.
            </p>
          </div>

          {/* Mass Links Section - Rendering directly on the page */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-black text-white font-graduate uppercase">All Export Routes Directory</h3>
              <p className="text-slate-400 mt-2">Browse the massive index of available trade routes natively.</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
                {allKeywords.slice(0, visibleCount).map((kw, idx) => (
                  <Link
                    key={idx}
                    to={`/seo/${kw.replace(/ /g, '-')}`}
                    className="text-slate-300 hover:text-green-400 text-sm capitalize truncate block py-1 border-b border-slate-700/50 hover:bg-slate-700/30 px-2 rounded-sm transition-all"
                    title={kw}
                  >
                    • {kw}
                  </Link>
                ))}
              </div>

              {visibleCount < allKeywords.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 2000)}
                    className="bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors uppercase tracking-widest text-sm"
                  >
                    Load More Routes ({visibleCount} / {allKeywords.length} showing)
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 text-center border-t border-slate-800 pt-16">
            <h3 className="text-2xl text-white font-bold mb-4">View Complete XML Mapping</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Our infrastructure handles more than {allKeywords.length.toLocaleString()} endpoints. For automated crawling and full site indexing, view our Search Engine Sitemap cluster.</p>
            <a href="/sitemap_index.xml" target="_blank" className="nm-btn-primary bg-green-600 hover:bg-green-500 text-white border-0 shadow-lg px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm inline-flex items-center">
              Access Sitemap Index <FileText className="w-4 h-4 ml-2" />
            </a>
          </div>

        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-20 bg-green-600 text-center px-4">
        <h2 className="text-4xl font-black text-white font-graduate uppercase mb-6">Ready to Scale Global?</h2>
        <p className="text-green-100 text-xl font-medium max-w-2xl mx-auto mb-10">We operate natively in multiple continents. Let our logistics and sourcing teams integrate with yours.</p>
        <Link to="/contact" className="bg-white text-green-700 hover:bg-slate-50 hover:scale-105 transition-transform shadow-xl font-black uppercase px-12 py-5 rounded-full inline-block">
          Contact Global Desk
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;
