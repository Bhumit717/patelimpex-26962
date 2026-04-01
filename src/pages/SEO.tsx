import React, { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Search, Globe, Target, BarChart3, Users, FileText, ArrowRight, BookOpen, Package, Wheat, Truck, Shield, Loader2 } from "lucide-react";
import dict from '../data/seoDictionary.json';

const SEO = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allKeywords, setAllKeywords] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1000);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Fetch full keywords list with simulation of progress for better UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setInterval(() => {
      setLoadProgress(prev => (prev < 90 ? prev + 10 : prev));
    }, 100);

    fetch('/seoKeywords.json')
      .then(res => res.json())
      .then(data => {
        setAllKeywords(data || []);
        setIsLoading(false);
        setLoadProgress(100);
        clearInterval(timer);
      })
      .catch(err => {
        console.error("Could not load keywords", err);
        setIsLoading(false);
        clearInterval(timer);
      });
  }, []);

  // Filter logic for dropdown using useMemo for performance
  const filteredKeywords = useMemo(() => {
    if (!searchTerm.trim()) {
      return allKeywords.slice(0, 50); // show 50 default in dropdown
    }
    const lowerSearch = searchTerm.toLowerCase();
    return allKeywords.filter(kw => kw.toLowerCase().includes(lowerSearch)).slice(0, 100);
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
      title: "Agricultural Exports",
      description: "India's finest agro-commodities including Rice, Spices, Grains, and Oil seeds.",
      icon: Wheat,
      color: "text-green-600",
      bgColor: "bg-green-50",
      links: [
        { title: "Premium Basmati Rice", slug: "/products/rice" },
        { title: "Psyllium Husk Hub", slug: "/products/psyllium-husk" },
        { title: "Machine Cleaned Fennel", slug: "/products/fennel-seeds" },
        { title: "Bold Cumin Seeds", slug: "/products/cumin-seeds" },
        { title: "Sesame Oil Seeds", slug: "/products/sesame-seeds" },
        { title: "Groundnut Kernels", slug: "/products/groundnut" },
        { title: "Non-GMO Soybeans", slug: "/products/soybeans" },
        { title: "Wheat & Flour range", slug: "/products/wheat" },
        { title: "Animal Dung Products", slug: "/products/animal-dung" },
        { title: "Animal Dung Powder", slug: "/products/animal-dung-powder" },
      ]
    },
    {
      title: "Tiles & Construction",
      description: "High-end flooring and sanitaryware solutions for global architectural projects.",
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      links: [
        { title: "GVT & PGVT Tiles", slug: "/products/tiles/gvt-pgvt" },
        { title: "Double Charge Vitrified", slug: "/products/tiles/double-charge" },
        { title: "Full Body Vitrified", slug: "/products/tiles/full-body" },
        { title: "Digital Wall Collection", slug: "/products/tiles/wall" },
        { title: "Elevation Wall Skins", slug: "/products/tiles/elevation" },
        { title: "Parking & Outdoor Tiles", slug: "/products/tiles/parking" },
        { title: "Luxury Porcelain Slabs", slug: "/products/tiles/slabs" },
        { title: "Designer Wash Basins", slug: "/products/tiles/sanitary-basin" },
        { title: "Modern Water Closets", slug: "/products/tiles/sanitary-closet" },
        { title: "Sanitaryware Sets", slug: "/products/sanitaryware" },
        { title: "Premium Bath Fittings", slug: "/products/bath-fittings" },
      ]
    },
    {
      title: "Earthing Solutions",
      description: "Advanced electrical safety, grounding electrodes, and lightning protection systems.",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      links: [
        { title: "GI Chemical Earthing", slug: "/products/earthing/gi-electrode" },
        { title: "Copper Bonded Hub", slug: "/products/earthing/copper-electrode" },
        { title: "Copper Grounding Rods", slug: "/products/earthing/copper-rods" },
        { title: "Backfill Compounds", slug: "/products/earthing/backfill" },
        { title: "Grounding Strips", slug: "/products/earthing/strips" },
        { title: "Earth Pit Covers", slug: "/products/earthing/pit-covers" },
        { title: "Lightning Arresters", slug: "/products/earthing/lightning-arresters" },
        { title: "Technical Accessories", slug: "/products/earthing/clamps" },
      ]
    },
    {
      title: "Global Trade Support",
      description: "Policy, documentation, and compliance guides for international trade.",
      icon: Globe,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      links: [
        { title: "Export Import Guide", slug: "/more/export-import-guide" },
        { title: "Trade Documentation", slug: "/more/export-documentation" },
        { title: "Market Research", slug: "/more/market-research" },
        { title: "Rice Export Hub", slug: "/more/rice-export" },
        { title: "Spices Trade Desk", slug: "/more/spices-export" },
        { title: "Tiles Export Guide", slug: "/more/tiles-export-info" },
        { title: "Earthing Safety Desk", slug: "/more/earthing-export-info" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEOHead title="More Resources | Patel Impex" description="Explore our massive global footprint covering everything from logistics intelligence to top regional market penetrations." canonicalUrl="/seo" />
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
              More
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light">
              Your centralized portal bridging Export/Import Intelligence, Product Architectures, and hyper-local B2B trading opportunities spanning {dict.locations.length} countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 font-mono font-bold">{dict.products.length} Products</span>
              <span className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 font-mono font-bold text-green-400">{allKeywords.length.toLocaleString()} Active B2B Market Routes</span>
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
                    {category.links.map((p, i) => (
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
                Access over 100,000 micro-targeted trading routes specifically optimized for your target geography. Search and select from the dropdown below to explore completely unique market guides.
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
                      to={`/more/${kw.replace(/ /g, '-')}`}
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
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-10 min-h-[400px] flex flex-col items-center justify-center relative">
              {isLoading ? (
                <div className="w-full max-w-md space-y-6 text-center">
                  <div className="flex justify-center">
                    <Loader2 className="w-12 h-12 text-green-500 animate-spin" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 transition-all duration-300 ease-out"
                        style={{ width: `${loadProgress}%` }}
                      />
                    </div>
                    <p className="text-slate-400 font-mono text-sm uppercase tracking-widest animate-pulse">
                      Indexing Global Routes... {loadProgress}%
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 w-full">
                    {allKeywords.slice(0, visibleCount).map((kw, idx) => (
                      <Link
                        key={idx}
                        to={`/more/${kw.replace(/ /g, '-')}`}
                        className="text-slate-300 hover:text-green-400 text-sm capitalize truncate block py-1 border-b border-slate-700/50 hover:bg-slate-700/30 px-2 rounded-sm transition-all"
                        title={kw}
                      >
                        • {kw}
                      </Link>
                    ))}
                  </div>

                  {visibleCount < allKeywords.length && (
                    <div className="text-center mt-12 w-full">
                      <button
                        onClick={() => setVisibleCount(prev => prev + 5000)}
                        className="bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors uppercase tracking-widest text-sm"
                      >
                        Load More Routes ({visibleCount.toLocaleString()} / {allKeywords.length.toLocaleString()} showing)
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="mt-16 text-center border-t border-slate-800 pt-16">
            <h3 className="text-2xl text-white font-bold mb-4">View Complete XML Mapping</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Our infrastructure handles exactly {allKeywords.length.toLocaleString()} endpoints. For automated crawling and full site indexing, view our Search Engine Sitemap cluster.</p>
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
