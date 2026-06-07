import { Package, Globe, ShieldCheck, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import agriImg from "@/assets/products/seeds.png";

const Products = () => {
  const categories = [
    {
      title: "Basmati Rice",
      description: "Premium long-grain Basmati rice varieties including 1121, Sella, Steam, and traditional aged Basmati. Sourced from the Himalayan foothills.",
      icon: Package,
      image: agriImg,
      link: "/products/rice",
      items: ["1121 Basmati", "Sella Basmati", "Steam Basmati"]
    },
    {
      title: "Non-Basmati Rice",
      description: "High-quality non-basmati rice varieties including IR-64, Sona Masoori, and Jeerakasala for diverse global requirements.",
      icon: Globe,
      image: agriImg,
      link: "/products/rice",
      items: ["IR-64 Rice", "Sona Masoori", "Jeerakasala"]
    },
    {
      title: "Rice Export Services",
      description: "End-to-end rice export solutions with global logistics, quality certification, and bulk shipping capabilities.",
      icon: ShieldCheck,
      image: agriImg,
      link: "/products/rice",
      items: ["Global Logistics", "Quality Certifications", "Bulk Shipping"]
    }
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-2 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-white border border-slate-100 mb-6">
              <Globe className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] font-graduate">Global Inventory</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] font-graduate uppercase tracking-tighter">
              Premium Trade <span className="block text-green-600 font-fredericka tracking-tight lowercase py-2">Categories</span>
            </h2>
          </div>
          <Link to="/products" className="nm-btn-green !py-4 px-8 group">
            <span className="font-graduate font-bold uppercase text-xs tracking-widest">All Products</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`hover:-translate-y-3 transition-all duration-500 group animate-slide-up opacity-0`}
              style={{ animationDelay: `${(index + 1) * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative h-64 overflow-hidden mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  <span className="bg-white/80 backdrop-blur-md p-3">
                    <category.icon className="h-6 w-6 text-green-600" />
                  </span>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-black text-slate-900 font-graduate uppercase tracking-tight">{category.title}</h3>
                <p className="text-slate-500 font-fondamento text-lg italic leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2 pt-2">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-slate-400 text-xs font-bold font-graduate uppercase tracking-widest">
                      <ChevronRight className="h-3 w-3 text-green-600 mr-2" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link to={category.link} className="nm-btn-green w-full !py-4 mt-6">
                  <span className="font-graduate font-bold uppercase text-[10px] tracking-[0.2em]">View Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
