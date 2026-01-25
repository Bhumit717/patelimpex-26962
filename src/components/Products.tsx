import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, CheckCircle } from "lucide-react";

// Import product images
import psylliumHuskImg from "@/assets/products/psyllium-husk.png";
import fennelSeedsImg from "@/assets/products/fennel-seeds.png";
import cuminSeedsImg from "@/assets/products/cumin-seeds.png";
import cottonImg from "@/assets/products/cotton.png";
import riceImg from "@/assets/products/rice.png";
import groundnutImg from "@/assets/products/groundnut.png";
import cardamomImg from "@/assets/products/cardamom.png";
import soybeanImg from "@/assets/products/soybean.png";
import wheatFlourImg from "@/assets/products/wheat-flour.png";

const Products = () => {
  // Only show 3 products on homepage
  const products = [
    {
      name: "Isabgol (Psyllium)",
      image: psylliumHuskImg,
      link: "/products/psyllium-husk",
      specs: ["95%+ Purity", "25 kg Bags", "Husk/Powder/Seeds"],
      hsn: "1211.90"
    },
    {
      name: "Fennel Seeds",
      image: fennelSeedsImg,
      link: "/products/fennel-seeds",
      specs: ["99% Purity", "25 kg Bags", "Bold/Medium"],
      hsn: "0909.61"
    },
    {
      name: "Cardamom",
      image: cardamomImg,
      link: "/products/cardamom",
      specs: ["8mm Bold", "25 kg Boxes", "Green/Bleached"],
      hsn: "0908.31"
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#e9edf3] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#e9edf3] rounded-[50px] mb-6 shadow-[6px_6px_10px_#cfd6e0,-6px_-6px_10px_#ffffff]">
            <Leaf className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-semibold">Premium Quality Exports</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-800">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Premium Products</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Quality agricultural commodities exported from India to 50+ countries worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group relative nm-card !p-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 block"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-[#e9edf3] p-6 flex items-center justify-center rounded-t-[25px] border-b border-gray-100/10">
                <div className="absolute inset-4 rounded-[20px] shadow-[inset_6px_6px_10px_#cfd6e0,inset_-6px_-6px_10px_#ffffff] z-0"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 relative z-10"
                />
                <div className="absolute top-6 right-6 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-[25px] z-20 shadow-lg">
                  HSN: {product.hsn}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="nm-btn inline-flex items-center px-8 !w-auto text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
            <Package className="h-5 w-5 mr-2" />
            View All Products
            <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
