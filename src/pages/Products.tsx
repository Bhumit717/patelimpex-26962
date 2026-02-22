import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

// Import product images
import psylliumHuskImg from "@/assets/products/psyllium-husk.png";
import fennelSeedsImg from "@/assets/products/fennel-seeds.png";
import cuminSeedsImg from "@/assets/products/cumin-seeds.png";
import cottonImg from "@/assets/products/cotton.png";
import riceImg from "@/assets/products/rice.png";
import groundnutImg from "@/assets/products/groundnut.png";
import soybeanImg from "@/assets/products/soybean.png";
import wheatFlourImg from "@/assets/products/wheat-flour.png";
import sesameSeedsImg from "@/assets/products/sesame-seeds.png";
import sharbatiWheatImg from "@/assets/products/subtypes/sharbati-wheat.png";
import animalDungImg from "@/assets/products/animal-dung.png";

const Products = () => {
  const productCategories = [
    {
      title: "Spices & Spices",
      style: "arched-pink",
      bgColor: "#FAFAFA", // Clean off-white
      items: [
        { name: "Psyllium Husk", image: psylliumHuskImg, link: "/products/psyllium-husk", desc: "Premium purity psyllium husk.", color: "#E67E22" },
        { name: "Fennel Seeds", image: fennelSeedsImg, link: "/products/fennel-seeds", desc: "Machine cleaned fennel seeds.", color: "#8E44AD" },
        { name: "Cumin Seeds", image: cuminSeedsImg, link: "/products/cumin-seeds", desc: "Bold export grade cumin.", color: "#16A085" }
      ]
    },
    {
      title: "Grains & Pulses",
      style: "ribbon-yellow",
      bgColor: "#FFFDF5", // Very soft cream
      items: [
        { name: "Basmati Rice", image: riceImg, link: "/products/rice", desc: "Aromatic long grain rice." },
        { name: "Premium Wheat", image: sharbatiWheatImg, link: "/products/wheat", desc: "High protein Sharbati wheat." },
        { name: "Wheat Flour", image: wheatFlourImg, link: "/products/wheat-flour", desc: "Multiple milled varieties." }
      ]
    },
    {
      title: "Oil Seeds",
      style: "modern-outline",
      bgColor: "#F8FAFC", // Soft slate blue
      items: [
        { name: "Sesame Seeds", image: sesameSeedsImg, link: "/products/sesame-seeds", desc: "Hulled and natural white seeds.", hsn: "1207.40" },
        { name: "Groundnut", image: groundnutImg, link: "/products/groundnut", desc: "Bold Java export kernels.", hsn: "1202.42" },
        { name: "Soybeans", image: soybeanImg, link: "/products/soybeans", desc: "Non-GMO high quality soybeans.", hsn: "1201.90" }
      ]
    },
    {
      title: "Natural Fibers",
      style: "modern-outline",
      bgColor: "#F9FAF5", // Soft sage tint
      items: [
        { name: "Cotton Fiber", image: cottonImg, link: "/products/cotton", desc: "Long staple organic cotton.", hsn: "5201.00" }
      ]
    },
    {
      title: "Bio-Fertilizers",
      style: "rack-card",
      bgColor: "#FBFBFE", // Soft light stone
      items: [
        { name: "Animal Dung", image: animalDungImg, link: "/products/animal-dung", desc: "Organic bio-fertilizer.", features: ["Eco-Friendly", "Rich Nutrients", "Export Quality"] }
      ]
    }
  ];

  return (
    <>
      <SEOHead title="Our Products | Patel Impex" description="Premium agricultural exports from India." />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .products-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* --- GLOBAL CARD WRAPPER --- */
        .pi-clickable-card {
          display: block;
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease;
        }
        .pi-clickable-card:hover { transform: translateY(-8px); }

        /* --- STYLE: ARCHED PINK --- */
        .card-arched-pink {
          background: #fff;
          border-radius: 50px;
          padding: 60px 20px 20px;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
        .img-circle-arched {
          width: 140px;
          height: 140px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          top: -70px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          overflow: hidden;
          padding: 20px;
          border: 6px solid #fff;
        }
        .img-circle-arched img { max-height: 100%; object-fit: contain; }
        .arched-pink-title { font-size: 20px; font-weight: 800; color: #333; margin: 30px 0 8px; text-transform: uppercase; }
        .arched-pink-desc { font-size: 13px; color: #888; margin-bottom: 25px; line-height: 1.6; max-width: 180px; }
        .arched-pink-btn { width: 100%; padding: 14px; border-radius: 40px; color: #fff; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; margin-top: auto; }

        /* --- STYLE: RIBBON YELLOW --- */
        .card-ribbon-yellow {
          background: #fff;
          position: relative;
          padding: 60px 25px 0 25px;
          width: 100%;
          max-width: 290px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .ribbon-classic-tag {
          position: absolute;
          top: 0; right: 20px;
          width: 34px; height: 65px;
          background: #e74c3c;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 86%, 0% 100%);
        }
        .img-wrap-ribbon { height: 180px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; }
        .img-wrap-ribbon img { max-height: 90%; object-fit: contain; }
        .ribbon-yellow-title { font-size: 22px; font-weight: 800; color: #222; margin-bottom: 12px; }
        .ribbon-yellow-desc { font-size: 13px; color: #777; line-height: 1.6; margin-bottom: 25px; }
        .ribbon-yellow-btn { 
          width: calc(100% + 50px); 
          margin-left: -25px; 
          background: #e74c3c; 
          color: #fff; 
          padding: 16px; 
          font-weight: 800; 
          text-align: center; 
          text-transform: uppercase; 
          font-size: 12px;
          margin-top: auto;
        }

        /* --- STYLE: MODERN OUTLINE --- */
        .card-modern-outline {
          background: #fff;
          border-radius: 24px;
          border: 1px solid #eee;
          overflow: hidden;
          padding: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.04);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .img-modern-outline {
          background: #fdfaf3;
          border-radius: 18px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
        }
        .img-modern-outline img { max-height: 80%; object-fit: contain; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1)); }
        .modern-outline-title { font-size: 18px; font-weight: 800; color: #333; margin-bottom: 8px; }
        .modern-outline-desc { font-size: 12px; color: #999; margin-bottom: 15px; flex-grow: 1; }
        .modern-outline-bottom { border-top: 1px solid #f5f5f5; padding-top: 15px; display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
        .modern-hsn { font-size: 14px; font-weight: 800; color: #333; }
        .modern-btn { color: #e74c3c; font-weight: 800; font-size: 12px; text-transform: uppercase; }

        /* --- STYLE: RACK CARD --- */
        .card-rack {
          background: #fff;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          overflow: hidden;
          max-width: 320px;
          margin: 0 auto;
          height: 100%;
        }
        .rack-top { background: #f8f9fa; padding: 30px 20px; display: flex; align-items: center; gap: 20px; border-bottom: 1px solid #eee; }
        .rack-img { width: 100px; height: 100px; background: #fff; border-radius: 10px; padding: 10px; box-shadow: 0 5px 10px rgba(0,0,0,0.05); flex-shrink: 0; }
        .rack-img img { max-width: 100%; max-height: 100%; object-fit: contain; }
        .rack-label { font-size: 14px; font-weight: 800; color: #333; line-height: 1.3; text-transform: uppercase; }
        .rack-body { padding: 30px 20px; flex-grow: 1; display: flex; flex-direction: column; }
        .rack-list { list-style: none; padding: 0; margin-bottom: 30px; }
        .rack-list li { font-size: 12px; color: #666; font-weight: 600; display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
        .rack-list li::before { content: ''; width: 6px; height: 6px; background: #27ae60; border-radius: 50%; }
        .rack-btn { background: #27ae60; color: #fff; text-align: center; padding: 15px; font-weight: 800; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-top: auto; }

        .cat-stripe { padding: 120px 0; }
        .cat-heading { font-size: 48px; font-weight: 900; text-align: center; margin-bottom: 80px; letter-spacing: -2px; }
      `}</style>

      <div className="min-h-screen products-page">
        <Navigation />

        {/* Hero */}
        <section className="pt-40 pb-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-6 uppercase tracking-tighter">
              Product <span className="text-green-600">Archive</span>
            </h1>
          </div>
        </section>

        {/* Dynamic Categories */}
        {productCategories.map((cat, idx) => (
          <section key={idx} className="cat-stripe" style={{ backgroundColor: cat.bgColor }}>
            <div className="container mx-auto px-4">
              <h2 className="cat-heading">{cat.title}</h2>
              <div className="flex flex-wrap justify-center gap-16">
                {cat.items.map((item, iIdx) => (
                  <Link key={iIdx} to={item.link} className="pi-clickable-card w-full md:max-w-sm">

                    {cat.style === 'arched-pink' && (
                      <div className="card-arched-pink">
                        <div className="img-circle-arched">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <h3 className="arched-pink-title">{item.name}</h3>
                        <p className="arched-pink-desc">{item.desc}</p>
                        <div className="arched-pink-btn" style={{ backgroundColor: item.color }}>View Details</div>
                      </div>
                    )}

                    {cat.style === 'ribbon-yellow' && (
                      <div className="card-ribbon-yellow">
                        <div className="ribbon-classic-tag"></div>
                        <div className="img-wrap-ribbon">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <h3 className="ribbon-yellow-title">{item.name}</h3>
                        <p className="ribbon-yellow-desc">{item.desc}</p>
                        <div className="ribbon-yellow-btn">View Details</div>
                      </div>
                    )}

                    {cat.style === 'modern-outline' && (
                      <div className="card-modern-outline">
                        <div className="img-modern-outline">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <h3 className="modern-outline-title">{item.name}</h3>
                        <p className="modern-outline-desc">{item.desc}</p>
                        <div className="modern-outline-bottom">
                          <span className="modern-hsn">HSN: {item.hsn}</span>
                          <span className="modern-btn">Learn More</span>
                        </div>
                      </div>
                    )}

                    {cat.style === 'rack-card' && (
                      <div className="card-rack">
                        <div className="rack-top">
                          <div className="rack-img">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <h3 className="rack-label">{item.name}<br />Product Information</h3>
                        </div>
                        <div className="rack-body">
                          <ul className="rack-list">
                            {(item.features || []).map((f, fIdx) => <li key={fIdx}>{f}</li>)}
                          </ul>
                          <div className="rack-btn">View Details</div>
                        </div>
                      </div>
                    )}

                  </Link>
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
