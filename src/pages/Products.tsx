import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import{ 
  Wheat, 
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import agricultureImg from "@/assets/products/rice.png";
import wheatImg from "@/assets/products/sharbati-wheat.png";
import psylliumImg from "@/assets/products/psyllium-husk.png";
import groundnutImg from "@/assets/products/groundnut.png";
import cuminImg from "@/assets/products/cumin-seeds.png";

const Products = () => {
  const sectors = [
    {
      id: "rice",
      name: "Rice Exports",
      icon: Wheat,
      image: agricultureImg,
      link: "/products/rice",
      color: "bg-green-600",
      description: "Premium Indian rice varieties including Basmati 1121, Sella, Steam, IR-64, Sona Masoori, and Jeerakasala. Sourced from Punjab, Haryana, and Andhra Pradesh.",
      features: ["Basmati & Non-Basmati", "Premium Grain Quality", "Bulk Export Capability"]
    },
    {
      id: "wheat",
      name: "Wheat Products",
      icon: Wheat,
      image: wheatImg,
      link: "/products/wheat",
      color: "bg-amber-600",
      description: "Premium quality wheat varieties from India including Sharbati, Durum, Lokwan, Bread Wheat, Bhalia, and HD 2687. Sourced from India's finest growing regions.",
      features: ["Multiple Premium Varieties", "High Protein Content", "Bulk Export Capability"]
    },
    {
      id: "psyllium",
      name: "Psyllium (Isabgol)",
      icon: Wheat,
      image: psylliumImg,
      link: "/products/psyllium-husk",
      color: "bg-stone-600",
      description: "Premium-grade Psyllium (Plantago ovata) products including husk, powder, and seeds. Processed under strict international quality standards.",
      features: ["High Purity Grade", "Pharmaceutical Quality", "Global Certifications"]
    },
    {
      id: "groundnut",
      name: "Groundnut (Peanut)",
      icon: Wheat,
      image: groundnutImg,
      link: "/products/groundnut",
      color: "bg-orange-600",
      description: "Premium groundnuts in multiple varieties including Bold, Java, TJ, and G-series. Available in raw kernels, blanched, roasted, and peanut butter formats.",
      features: ["Multiple Varieties", "Multiple Processing Formats", "Global Export Quality"]
    },
    {
      id: "cumin",
      name: "Cumin Seeds",
      icon: Wheat,
      image: cuminImg,
      link: "/products/cumin-seeds",
      color: "bg-yellow-700",
      description: "Premium-quality cumin seeds sourced directly from trusted farmers. 99% purity with high volatile oil content, machine cleaned for international quality standards.",
      features: ["99% Minimum Purity", "High Volatile Oil", "Machine Cleaned"]
    },
  ];

  return (
    <>
      <SEOHead 
        title="Export Product Catalog | Patel Impex" 
        description="Explore our premium agricultural export products including rice, wheat, psyllium husk, groundnuts, and cumin seeds. Premium Indian quality for global markets." 
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

        <section className="pt-40 pb-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[60vw] h-full bg-green-500/5 -skew-x-12 transform origin-top pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <Badge className="bg-green-600 mb-8 px-6 py-2 text-xs uppercase tracking-[0.2em] font-black border-0">Global Trade Portfolio</Badge>
              <h1 className="text-6xl md:text-8xl font-black mb-8 font-graduate uppercase tracking-tighter leading-none">
                Specialized <span className="text-green-500 italic font-fredericka lowercase">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
                Explore our premium export products with technical specifications, international certifications, and bulk export capabilities.
              </p>
            </div>
          </div>
        </section>

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
                        View Products <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
