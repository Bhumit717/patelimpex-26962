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
        <section className="pb-32 bg-[#fbbd22] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {productCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-32 last:mb-0">
                <div className="flex flex-col items-center mb-20">
                  <div className="flex items-center w-full max-w-5xl">
                    <div className="h-[3px] bg-white/20 flex-grow rounded-full"></div>
                    <h2 className="px-12 text-4xl md:text-6xl font-black text-slate-900 font-graduate uppercase tracking-tighter text-center italic">
                      {category.title}
                    </h2>
                    <div className="h-[3px] bg-white/20 flex-grow rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {category.items.map((product, index) => {
                    const themes = [
                      { accent: "bg-[#FA8072]", ribbon: "bg-[#FA8072]" },
                      { accent: "bg-[#50BFC3]", ribbon: "bg-[#50BFC3]" },
                      { accent: "bg-[#FA8072]", ribbon: "bg-[#FA8072]" },
                    ];
                    const theme = themes[index % themes.length];

                    return (
                      <div
                        key={index}
                        className="group relative flex flex-col h-full bg-[#fdfaf3] rounded-[15px] shadow-[0_12px_24px_rgba(0,0,0,0.12)] overflow-hidden hover:-translate-y-2 transition-all duration-300 border-none"
                      >
                        {/* Ribbon Tag */}
                        <div className={`absolute top-0 right-10 w-14 h-24 ${theme.ribbon} z-20 shadow-md`}>
                          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[18px] border-b-[#fdfaf3]"></div>
                        </div>

                        {/* Image Frame */}
                        <div className="p-8 pb-4">
                          <div className="relative aspect-auto h-64 rounded-[15px] border-[1.5px] border-[#d2b48c]/40 bg-transparent flex items-center justify-center overflow-hidden p-6">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-full max-w-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 pt-2 flex-grow flex flex-col">
                          <h3 className="text-3xl font-black text-slate-800 mb-2 leading-tight">
                            {product.name}
                          </h3>
                          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[85%]">
                            {product.specs[0]} and industrial grade quality for global export.
                          </p>

                          <div className="mt-auto">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-baseline">
                                <span className="text-6xl font-black text-slate-800 tracking-tighter">
                                  {product.hsn.split('.')[0]}
                                </span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="flex space-x-0.5 mb-1">
                                  {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className={`h-4 w-4 ${s <= 4 ? "fill-slate-800 text-slate-800" : "text-slate-300"}`} />
                                  ))}
                                </div>
                                <div className="h-[1.5px] bg-slate-800 w-full mb-1"></div>
                                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">Premium Grade</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Action Bar */}
                        <Link
                          to={product.link}
                          className={`${theme.accent} py-6 flex items-center justify-center hover:brightness-105 transition-all no-underline w-full`}
                        >
                          <span className="text-white font-bold uppercase tracking-widest text-xs">
                            ADD TO CART
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
