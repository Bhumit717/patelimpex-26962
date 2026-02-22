import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, Package, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";

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
import sesameSeedsImg from "@/assets/products/sesame-seeds.png";
import sharbatiWheatImg from "@/assets/products/subtypes/sharbati-wheat.png";
import animalDungImg from "@/assets/products/animal-dung.png";

const Products = () => {
  const productCategories = [
    {
      title: "Spices & Condiments",
      style: "arched",
      bgColor: "#f5ece1",
      items: [
        {
          name: "Isabgol (Psyllium)",
          image: psylliumHuskImg,
          link: "/products/psyllium-husk",
          shortDesc: "Premium pharmaceutical grade psyllium husk.",
          hsn: "1211.90"
        },
        {
          name: "Fennel Seeds",
          image: fennelSeedsImg,
          link: "/products/fennel-seeds",
          shortDesc: "Machine cleaned bold green fennel seeds.",
          hsn: "0909.61"
        },
        {
          name: "Cumin Seeds",
          image: cuminSeedsImg,
          link: "/products/cumin-seeds",
          shortDesc: "High purity machine cleaned cumin seeds.",
          hsn: "0909.31"
        }
      ]
    },
    {
      title: "Grains & Pulses",
      style: "ribbon",
      bgColor: "#fbbd22",
      items: [
        {
          name: "Rice",
          image: riceImg,
          link: "/products/rice",
          shortDesc: "Basmati & Non-Basmati export varieties.",
          hsn: "1006.30"
        },
        {
          name: "Wheat",
          image: sharbatiWheatImg,
          link: "/products/wheat",
          shortDesc: "Premium Sharbati and Durum wheat grains.",
          hsn: "1001.99"
        },
        {
          name: "Wheat Flour",
          image: wheatFlourImg,
          link: "/products/wheat-flour",
          shortDesc: "Finely milled high-protein wheat flour.",
          hsn: "1101.00"
        }
      ]
    },
    {
      title: "Oil Seeds",
      style: "modern",
      bgColor: "#f8d7da",
      items: [
        {
          name: "Sesame Seeds",
          image: sesameSeedsImg,
          link: "/products/sesame-seeds",
          shortDesc: "Hulled and natural white sesame seeds.",
          hsn: "1207.40"
        },
        {
          name: "Groundnut",
          image: groundnutImg,
          link: "/products/groundnut",
          shortDesc: "Bold and Java variety export groundnuts.",
          hsn: "1202.42"
        },
        {
          name: "Soybeans",
          image: soybeanImg,
          link: "/products/soybeans",
          shortDesc: "Non-GMO high protein export soybeans.",
          hsn: "1201.90"
        }
      ]
    },
    {
      title: "Natural Fibers",
      style: "minimal",
      bgColor: "#e2f0d9",
      items: [
        {
          name: "Cotton",
          image: cottonImg,
          link: "/products/cotton",
          shortDesc: "Long staple organic cotton bales.",
          hsn: "5201.00"
        }
      ]
    },
    {
      title: "Bio-Fertilizers",
      style: "dark",
      bgColor: "#1a1a1a",
      items: [
        {
          name: "Animal Dung",
          image: animalDungImg,
          link: "/products/animal-dung",
          shortDesc: "100% organic decomposed fertilizer.",
          hsn: "3101.00"
        }
      ]
    }
  ];

  const allProducts = productCategories.flatMap(cat => cat.items);

  return (
    <>
      <SEOHead title="Our Products | Patel Impex" description="Explore our wide range of premium agro products." canonicalUrl="/products" />
      <Helmet>
        <title>Our Products | Premium Agricultural Exports | Patel Impex</title>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .products-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* --- CATEGORY STYLE: ARCHED (Spices) --- */
        .card-arched {
          background: #fff;
          border-radius: 40px;
          padding: 24px;
          text-align: center;
          transition: transform 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .card-arched:hover { transform: translateY(-10px); }
        .img-frame-arched {
          background: #fdfaf3;
          border-radius: 100px 100px 20px 20px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          padding: 30px;
          border: 1px solid #eee;
        }
        .img-frame-arched img { max-height: 100%; object-contain; }
        .btn-arched {
          background: #d4a373;
          color: white;
          padding: 12px;
          border-radius: 50px;
          display: block;
          margin-top: 15px;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* --- CATEGORY STYLE: RIBBON (Grains) --- */
        .card-ribbon {
          background: #fdfaf3;
          position: relative;
          padding: 30px 24px;
          box-shadow: 0 25px 0 rgba(0,0,0,0.07), 0 38px 60px -10px rgba(0,0,0,0.22);
        }
        .ribbon-tag {
          position: absolute;
          top: 0; right: 30px;
          width: 40px; height: 70px;
          background: #FA8072;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%);
        }
        .img-frame-ribbon {
          border: 1.5px solid rgba(180,148,100,0.3);
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: #fff;
        }
        .img-frame-ribbon img { max-height: 80%; object-contain; }
        .btn-ribbon {
          background: #FA8072;
          color: white;
          padding: 15px;
          text-align: center;
          font-weight: 800;
          display: block;
          margin-top: 10px;
        }

        /* --- CATEGORY STYLE: MODERN (Seeds) --- */
        .card-modern {
          background: #fff;
          border: 2px solid #000;
          padding: 0;
          box-shadow: 10px 10px 0 #000;
          transition: all 0.2s;
        }
        .card-modern:hover { transform: translate(-4px, -4px); box-shadow: 14px 14px 0 #000; }
        .img-frame-modern {
          height: 250px;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid #000;
        }
        .img-frame-modern img { max-height: 70%; object-contain; }
        .content-modern { padding: 20px; }
        .btn-modern {
          background: #000;
          color: #fff;
          padding: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        }

        /* --- CATEGORY STYLE: MINIMAL (Fibers) --- */
        .card-minimal {
          background: #fff;
          border-left: 8px solid #50BFC3;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .img-minimal { height: 180px; margin-bottom: 20px; }
        .btn-minimal { color: #50BFC3; font-weight: 800; border-bottom: 2px solid #50BFC3; margin-top: 10px; }

        /* --- CATEGORY STYLE: DARK (Fertilizers) --- */
        .card-dark {
          background: #2a2a2a;
          color: white;
          padding: 40px;
          border: 1px solid #444;
          text-align: center;
        }
        .img-dark { 
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          width: 180px; height: 180px;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #666;
        }
        .img-dark img { max-height: 60%; filter: brightness(1.2); }
        .btn-dark {
          background: #3ba72f;
          color: #fff;
          padding: 12px 30px;
          border-radius: 4px;
          display: inline-block;
          margin-top: 20px;
          font-weight: 700;
        }

        .category-stripe {
          padding: 100px 0;
        }
        .section-title {
          font-size: 42px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -1px;
          margin-bottom: 60px;
          position: relative;
          display: inline-block;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px; left: 0;
          width: 60px; height: 6px;
          background: currentColor;
        }
      `}</style>

      <div className="min-h-screen products-page">
        <Navigation />

        {/* Hero */}
        <section className="pt-40 pb-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Product <span className="text-green-600 italic">Catalog</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Diverse agricultural solutions tailored for international standards.
            </p>
          </div>
        </section>

        {/* Dynamic Categories */}
        {productCategories.map((category, idx) => (
          <section key={idx} className="category-stripe" style={{ backgroundColor: category.bgColor }}>
            <div className="container mx-auto px-4">
              <h2 className={`section-title ${category.style === 'dark' ? 'text-white' : 'text-slate-900'}`}>{category.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {category.items.map((product, pIdx) => (
                  <div key={pIdx}>

                    {/* ARCHED STYLE */}
                    {category.style === "arched" && (
                      <div className="card-arched">
                        <div className="img-frame-arched">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">{product.name}</h3>
                        <p className="text-sm text-slate-500 mb-4">{product.shortDesc}</p>
                        <Link to={product.link} className="btn-arched">Enquire Now</Link>
                      </div>
                    )}

                    {/* RIBBON STYLE */}
                    {category.style === "ribbon" && (
                      <div className="card-ribbon">
                        <div className="ribbon-tag"></div>
                        <div className="img-frame-ribbon">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">{product.name}</h3>
                        <p className="text-sm text-slate-500 mb-4">{product.shortDesc}</p>
                        <Link to={product.link} className="btn-ribbon">VIEW DETAILS</Link>
                      </div>
                    )}

                    {/* MODERN STYLE */}
                    {category.style === "modern" && (
                      <div className="card-modern">
                        <div className="img-frame-modern">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="content-modern">
                          <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                          <p className="text-sm text-slate-600 mb-4">{product.shortDesc}</p>
                          <Link to={product.link} className="btn-modern">
                            EXPLORE <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* MINIMAL STYLE */}
                    {category.style === "minimal" && (
                      <div className="card-minimal">
                        <img src={product.image} alt={product.name} className="img-minimal" />
                        <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                        <p className="text-sm text-slate-500 mb-4">{product.shortDesc}</p>
                        <Link to={product.link} className="btn-minimal">Catalog & Specs</Link>
                      </div>
                    )}

                    {/* DARK STYLE */}
                    {category.style === "dark" && (
                      <div className="card-dark">
                        <div className="img-dark">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2">{product.name}</h3>
                        <p className="text-sm text-slate-400 mb-6">{product.shortDesc}</p>
                        <Link to={product.link} className="btn-dark">Inquiry</Link>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <Footer />
      </div>
    </>
  );
};

export default Products;
