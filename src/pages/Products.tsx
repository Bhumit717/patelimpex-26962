import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Wheat, ArrowRight, Globe, Star, CheckCircle, Users, Target, Leaf, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
import sugarImg from "@/assets/products/sugar.png";
import sesameSeedsImg from "@/assets/products/hulled-sesame.png";
import sharbatiWheatImg from "@/assets/products/subtypes/sharbati-wheat.png";
import animalDungImg from "@/assets/products/animal-dung.png";
import SEOHead from "@/components/SEOHead";

const Products = () => {
  const productCategories = [
    {
      title: "Spices & Condiments",
      items: [
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
          name: "Cumin Seeds",
          image: cuminSeedsImg,
          link: "/products/cumin-seeds",
          specs: ["99% Purity", "25/50 kg Bags", "Machine Cleaned"],
          hsn: "0909.31"
        },
        {
          name: "Cardamom",
          image: cardamomImg,
          link: "/products/cardamom",
          specs: ["8mm Bold", "25 kg Boxes", "Green/Bleached"],
          hsn: "0908.31"
        }
      ]
    },
    {
      title: "Grains & Pulses",
      items: [
        {
          name: "Rice",
          image: riceImg,
          link: "/products/rice",
          specs: ["Basmati & Non-Basmati", "25/50 kg Bags", "Multiple Varieties"],
          hsn: "1006.30"
        },
        {
          name: "Wheat",
          image: sharbatiWheatImg,
          link: "/products/wheat",
          specs: ["Sharbati/Durum/Lokwan", "Multiple Varieties", "Premium Quality"],
          hsn: "1001.99"
        },
        {
          name: "Wheat Flour",
          image: wheatFlourImg,
          link: "/products/wheat-flour",
          specs: ["10-12% Protein", "25/50 kg Bags", "White Refined"],
          hsn: "1101.00"
        },
        {
          name: "Sugar",
          image: sugarImg,
          link: "/products/sugar",
          specs: ["Refined/Raw/Organic", "Jaggery Powder", "ICUMSA 45/100"],
          hsn: "1701.99"
        },
        {
          name: "Soybeans",
          image: soybeanImg,
          link: "/products/soybeans",
          specs: ["46-48% Protein", "50 kg PP Bags", "Non-GMO"],
          hsn: "1201.90"
        }
      ]
    },
    {
      title: "Oil Seeds",
      items: [
        {
          name: "Sesame Seeds",
          image: sesameSeedsImg,
          link: "/products/sesame-seeds",
          specs: ["Hulled & Natural", "99.95% Purity", "White/Golden"],
          hsn: "1207.40"
        },
        {
          name: "Groundnut",
          image: groundnutImg,
          link: "/products/groundnut",
          specs: ["40-50 Count", "25/50 kg Bags", "Bold/Java/TJ"],
          hsn: "1202.42"
        }
      ]
    },
    {
      title: "Natural Fibers",
      items: [
        {
          name: "Cotton",
          image: cottonImg,
          link: "/products/cotton",
          specs: ["28-30mm Staple", "170 kg Bales", "Multiple Grades"],
          hsn: "5201.00"
        }
      ]
    },
    {
      title: "Bio-Fertilizers",
      items: [
        {
          name: "Animal Dung",
          image: animalDungImg,
          link: "/products/animal-dung",
          specs: ["100% Organic", "Cakes & Powder", "Fully Decomposed"],
          hsn: "3101.00"
        }
      ]
    }
  ];

  const allProducts = productCategories.flatMap(cat => cat.items);

  const generateStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Patel Exports Products",
    "description": "Premium agricultural products exported from India",
    "numberOfItems": allProducts.length,
    "itemListElement": allProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "url": `https://patelimpex.com${product.link}`
      }
    }))
  });

  return (
    <>
      <SEOHead title="Our Products | Patel Impex" description="Explore our wide range of premium agro products including spices, grains, oil seeds, and more." canonicalUrl="/products" />
      <Helmet>
        <title>Our Products | Premium Agricultural Exports | Patel Impex</title>
        <meta name="description" content="Explore our premium agricultural products including Psyllium Husk, Fennel, Cumin, Cotton, Rice, Groundnut, Cardamom, Soybean, and Wheat varieties for global export." />
        <meta name="keywords" content="psyllium husk export, fennel seeds, cumin export, cotton export, rice export, groundnut, cardamom, soybean, wheat flour, agricultural exports India" />
        <link rel="canonical" href="https://patelimpex.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 mb-8">
                <Leaf className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] font-graduate">Premium Inventory</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 font-graduate uppercase tracking-tighter">
                Global <span className="text-green-600 font-fredericka tracking-tight lowercase">Products</span> Stock
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-fondamento italic leading-relaxed">
                Our portfolio features high-grade agricultural commodities and industrial raw materials direct from verified Indian sources.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid by Category */}
        <section className="pb-32 bg-[#fbbd23] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {productCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-32 last:mb-0">
                <div className="flex flex-col items-center mb-20">
                  <span className="text-white font-black text-xl mb-4 uppercase tracking-[0.4em] drop-shadow-md">Professional Catalog</span>
                  <div className="flex items-center w-full max-w-5xl">
                    <div className="h-[2px] bg-white/40 flex-grow rounded-full"></div>
                    <h2 className="px-12 text-4xl md:text-7xl font-black text-slate-900 font-graduate uppercase tracking-tighter text-center italic">
                      {category.title}
                    </h2>
                    <div className="h-[2px] bg-white/40 flex-grow rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {category.items.map((product, index) => {
                    const themes = [
                      { accent: "bg-[#FA8072]", text: "text-[#FA8072]", ribbon: "bg-[#FA8072]" },
                      { accent: "bg-[#50BFC3]", text: "text-[#50BFC3]", ribbon: "bg-[#50BFC3]" },
                      { accent: "bg-[#FA8072]", text: "text-[#FA8072]", ribbon: "bg-[#FA8072]" },
                    ];
                    const theme = themes[index % themes.length];

                    return (
                      <div
                        key={index}
                        className="group relative flex flex-col h-full bg-[#FCF5E5] rounded-[45px] shadow-[0_25px_0_rgba(0,0,0,0.08),0_40px_80px_-15px_rgba(0,0,0,0.2)] overflow-hidden hover:-translate-y-4 transition-all duration-500 border-none"
                      >
                        {/* Ribbon Tag */}
                        <div className={`absolute top-0 right-12 w-16 h-28 ${theme.ribbon} z-20 shadow-2xl clip-path-ribbon`}>
                          <style>{`
                            .clip-path-ribbon {
                              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 88%, 0% 100%);
                            }
                          `}</style>
                        </div>

                        {/* Image Frame */}
                        <div className="p-12 pb-6">
                          <div className="relative aspect-square rounded-[40px] border-2 border-slate-300/30 bg-transparent flex items-center justify-center overflow-hidden p-10">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-1000"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-12 pt-4 flex-grow flex flex-col">
                          <h3 className="text-4xl font-black text-slate-900 mb-3 leading-none uppercase tracking-tight font-graduate">
                            {product.name}
                          </h3>
                          <p className="text-slate-500 font-bold text-base leading-relaxed mb-12 opacity-70">
                            Verified Indian source. {product.specs[0]}, {product.specs[1]}.
                          </p>

                          <div className="mt-auto">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-baseline space-x-2">
                                <span className="text-7xl font-black text-slate-900 tracking-tighter">$</span>
                                <span className="text-5xl font-black text-slate-900 tracking-tighter">HSN</span>
                                <span className="text-2xl font-black text-slate-900">{product.hsn.split(".")[0]}</span>
                              </div>
                              <div className="flex flex-col items-end">
                                <div className="flex space-x-1 mb-1">
                                  {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className={`h-5 w-5 ${s <= 4 ? "fill-slate-900 text-slate-900" : "text-slate-300"}`} />
                                  ))}
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-[#FA8072]">Top Exporter</span>
                              </div>
                            </div>
                            <div className="h-[2px] bg-slate-200 w-full mb-3"></div>
                            <div className="flex justify-between items-center px-1">
                              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Global Logistics ready</span>
                              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-[#FA8072]">Verified</span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Action Bar */}
                        <Link
                          to={product.link}
                          className={`${theme.accent} py-10 flex items-center justify-center hover:brightness-110 transition-all no-underline w-full border-t border-white/20`}
                        >
                          <span className="text-white font-black font-graduate uppercase tracking-[0.4em] text-sm">
                            ADD TO INQUIRY
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="text-center mt-32">
              <Link
                to="/contact"
                className="inline-flex items-center bg-slate-900 text-white px-16 py-8 rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
              >
                <Package className="h-6 w-6 mr-4 group-hover:rotate-12 transition-transform" />
                <span className="font-black font-graduate uppercase tracking-[0.4em] text-sm">Request Free Quote</span>
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
