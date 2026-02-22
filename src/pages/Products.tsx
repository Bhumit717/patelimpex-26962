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
        <section className="pb-24 bg-[#FFFCF5] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {productCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-24 last:mb-0">
                <div className="flex flex-col items-center mb-16">
                  <span className="text-green-600 font-fredericka text-2xl mb-2 lowercase tracking-tighter">Collection</span>
                  <div className="flex items-center w-full">
                    <div className="h-[2px] bg-slate-200 flex-grow rounded-full opacity-50"></div>
                    <h2 className="px-10 text-3xl md:text-5xl font-black text-slate-900 font-graduate uppercase tracking-tighter text-center">
                      {category.title}
                    </h2>
                    <div className="h-[2px] bg-slate-200 flex-grow rounded-full opacity-50"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {category.items.map((product, index) => {
                    const themes = [
                      { bg: "bg-rose-50", accent: "bg-rose-400", border: "border-rose-100", text: "text-rose-600", ribbon: "bg-rose-500" },
                      { bg: "bg-cyan-50", accent: "bg-cyan-500", border: "border-cyan-100", text: "text-cyan-700", ribbon: "bg-cyan-600" },
                      { bg: "bg-amber-50", accent: "bg-amber-400", border: "border-amber-100", text: "text-amber-700", ribbon: "bg-amber-500" },
                    ];
                    const theme = themes[index % themes.length];

                    return (
                      <Link
                        key={index}
                        to={product.link}
                        className={`group relative flex flex-col h-full bg-[#FFFBF0] rounded-[40px] border-b-[8px] border-slate-200/50 overflow-hidden hover:-translate-y-4 transition-all duration-500 shadow-xl`}
                      >
                        {/* Ribbon Tag */}
                        <div className={`absolute top-0 right-10 w-10 h-16 ${theme.ribbon} z-20 shadow-lg`}>
                          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[12px] border-b-[#FFFBF0]"></div>
                        </div>

                        {/* Image Frame */}
                        <div className="p-8 pb-0">
                          <div className={`relative h-64 rounded-[30px] border-2 ${theme.border} bg-white flex items-center justify-center overflow-hidden group-hover:shadow-inner transition-shadow`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-[70%] max-w-[70%] object-contain group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-4 left-4">
                              <span className={`px-3 py-1 bg-white/90 backdrop-blur-sm ${theme.text} text-[9px] font-black rounded-full border border-slate-100 font-graduate uppercase tracking-widest`}>
                                Official Export
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-10 flex-grow">
                          <div className="mb-4">
                            <span className={`text-[10px] font-black ${theme.text} uppercase tracking-[0.2em] font-graduate`}>HSN: {product.hsn}</span>
                            <h3 className="text-3xl font-black text-slate-900 mt-2 font-graduate uppercase tracking-tight leading-none">
                              {product.name}
                            </h3>
                          </div>

                          <div className="space-y-4 mb-8">
                            <p className="text-xs text-slate-400 font-bold font-graduate uppercase tracking-widest leading-relaxed">
                              {product.specs.join(" • ")}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Action Bar */}
                        <div className={`${theme.accent} py-6 flex items-center justify-center group-hover:brightness-110 transition-all`}>
                          <span className="text-white font-graduate font-black uppercase tracking-[0.3em] text-xs">
                            Access Specifications
                          </span>
                          <ArrowRight className="h-4 w-4 ml-3 text-white group-hover:translate-x-2 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="text-center mt-20">
              <Link
                to="/contact"
                className="nm-btn-green inline-flex items-center !w-auto min-w-[300px] !py-6"
              >
                <Package className="h-5 w-5 mr-4" />
                <span className="font-graduate uppercase tracking-[0.3em] text-sm">Request Volume Quote</span>
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
