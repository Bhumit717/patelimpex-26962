import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import{ 
  Wheat, 
  LayoutGrid, 
  Zap, 
  ChevronRight,
  ArrowRight,
  Shirt,
  Cog
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Import hub-representative images
import agricultureImg from "@/assets/products/rice.png";
import tilesImg from "@/assets/products/grey-vitrified-tiles.png";
import earthingImg from "@/assets/products/earthing-rod-with-clamp.png";
import cottonImg from "@/assets/products/cotton.png";
import industrialImg from "@/assets/global-export-shipping.jpg";

const Products = () => {
  const sectors = [
    {
      id: "agriculture",
      name: "Agricultural Exports",
      icon: Wheat,
      image: agricultureImg,
      link: "/products/agriculture",
      color: "bg-green-600",
      description: "Indian's finest agro-commodities including Rice, Spices, Grains, and specialized Organic Fertilizers.",
      features: ["50+ Multi-Country Reach", "Certified Quality", "Direct Farm Sourcing"]
    },
    {
      id: "tiles",
      name: "Tiles & Sanitaryware",
      icon: LayoutGrid,
      image: tilesImg,
      link: "/products/tiles-export",
      color: "bg-blue-600",
      description: "Complete flooring and bathroom solutions: GVT, PGVT, Industrial Tiles, and Designer Sanitaryware.",
      features: ["Morbi Sourced Premium", "Heavy-Duty Options", "Global Project Supply"]
    },
    {
      id: "earthing",
      name: "Earthing & Safety",
      icon: Zap,
      image: earthingImg,
      link: "/products/earthing-export",
      color: "bg-orange-600",
      description: "Technical grounding solutions, copper-bonded rods, and advanced electrical safety accessories.",
      features: ["Certified Standards", "Maintenance-Free", "Industrial Protection"]
    },
    {
      id: "textiles",
      name: "Textiles & Garments",
      icon: Shirt,
      image: cottonImg,
      link: "/products/cotton",
      color: "bg-purple-600",
      description: "Premium Indian cotton, designer fabrics, and high-quality ready-to-wear garments for global fashion.",
      features: ["BCI & GOTS Certified", "Staple Length Range", "Bulk Fabric Supply"]
    },
    {
      id: "industrial",
      name: "Industrial & Engineering",
      icon: Cog,
      image: industrialImg,
      link: "/products/industrial",
      color: "bg-slate-600",
      description: "Precision engineered machinery, hardware tools, and industrial metal components for global projects.",
      features: ["ISO Certified Quality", "High-Precision Build", "Global Project Specs"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Export Product Catalog | Patel Impex" 
        description="Explore our specialized export segments: Agriculture, Tiles, Earthing, Textiles, and Industrial Engineering. Premium Indian quality for global markets." 
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .products-hub { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .sector-card {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .sector-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 40px 60px -15px rgba(0, 0, 0, 0.1);
        }
        .sector-image-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
          opacity: 0.8;
        }
      `}</style>

      <div className="min-h-screen products-hub bg-slate-50/50">
        <Navigation />

        {/* Dynamic Hero */}
        <section className="pt-40 pb-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[60vw] h-full bg-green-500/5 -skew-x-12 transform origin-top pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <Badge className="bg-green-600 mb-8 px-6 py-2 text-xs uppercase tracking-[0.2em] font-black border-0">Global Trade Portfolio</Badge>
              <h1 className="text-6xl md:text-8xl font-black mb-8 font-graduate uppercase tracking-tighter leading-none">
                Specialized <span className="text-green-500 italic font-fredericka lowercase">Sectors</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
                Choose an industrial segment to explore our technical specifications, international certifications, and bulk export capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Sector Grid */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sectors.map((sector) => (
                <Link 
                  key={sector.id} 
                  to={sector.link} 
                  className="sector-card group bg-white rounded-[2.5rem] overflow-hidden flex flex-col h-full"
                >
                  <div className="sector-image-container relative h-72 overflow-hidden">
                    <img 
                      src={sector.image} 
                      alt={sector.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-6 left-8 z-20">
                      <div className={`${sector.color} p-4 rounded-2xl shadow-lg inline-block text-white`}>
                        <sector.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-3xl font-black text-slate-900 font-graduate uppercase mb-6 group-hover:text-green-600 transition-colors">
                      {sector.name}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                      {sector.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {sector.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                          <div className={`w-2 h-2 rounded-full ${sector.color}`} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-sm font-black uppercase tracking-widest text-slate-900 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                        Enter Catalog <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="pb-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-black font-graduate uppercase mb-8 leading-tight">Need a customized export solution?</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                Our global desks are ready to assist with procurement, logistics, and documentation tailored to your specific market requirements.
              </p>
              <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-xl inline-block hover:scale-105">
                Contact Industry Specialist
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Products;
