import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, Package } from "lucide-react";
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
import sesameSeedsImg from "@/assets/products/hulled-sesame.png";
import sharbatiWheatImg from "@/assets/products/subtypes/sharbati-wheat.png";
import animalDungImg from "@/assets/products/animal-dung.png";

const ribbonColors = [
  "#FA8072", // salmon/pink
  "#50BFC3", // teal
  "#FA8072",
  "#50BFC3",
  "#FA8072",
  "#50BFC3",
];

const Products = () => {
  const productCategories = [
    {
      title: "Spices & Condiments",
      items: [
        {
          name: "Isabgol (Psyllium)",
          image: psylliumHuskImg,
          link: "/products/psyllium-husk",
          shortDesc: "95%+ purity psyllium husk, ideal for pharma and food industries worldwide.",
          hsn: "1211.90"
        },
        {
          name: "Fennel Seeds",
          image: fennelSeedsImg,
          link: "/products/fennel-seeds",
          shortDesc: "99% purity bold fennel seeds, machine cleaned and export ready.",
          hsn: "0909.61"
        },
        {
          name: "Cumin Seeds",
          image: cuminSeedsImg,
          link: "/products/cumin-seeds",
          shortDesc: "Machine cleaned cumin in 25/50 kg bags, 99% purity grade.",
          hsn: "0909.31"
        },
        {
          name: "Cardamom",
          image: cardamomImg,
          link: "/products/cardamom",
          shortDesc: "8mm bold green and bleached cardamom in premium 25 kg boxes.",
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
          shortDesc: "Basmati & Non-Basmati rice in 25/50 kg bags, multiple varieties.",
          hsn: "1006.30"
        },
        {
          name: "Wheat",
          image: sharbatiWheatImg,
          link: "/products/wheat",
          shortDesc: "Sharbati, Durum and Lokwan wheat in premium export quality.",
          hsn: "1001.99"
        },
        {
          name: "Wheat Flour",
          image: wheatFlourImg,
          link: "/products/wheat-flour",
          shortDesc: "White refined wheat flour with 10-12% protein, 25/50 kg bags.",
          hsn: "1101.00"
        },
        {
          name: "Sugar",
          image: sugarImg,
          link: "/products/sugar",
          shortDesc: "ICUMSA 45/100 refined and raw sugar, jaggery powder available.",
          hsn: "1701.99"
        },
        {
          name: "Soybeans",
          image: soybeanImg,
          link: "/products/soybeans",
          shortDesc: "Non-GMO soybeans with 46-48% protein in 50 kg PP bags.",
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
          shortDesc: "99.95% purity hulled and natural white/golden sesame seeds.",
          hsn: "1207.40"
        },
        {
          name: "Groundnut",
          image: groundnutImg,
          link: "/products/groundnut",
          shortDesc: "Bold/Java/TJ groundnut, 40-50 count, in 25/50 kg bags.",
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
          shortDesc: "28-30mm staple cotton in 170 kg bales, multiple grades.",
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
          shortDesc: "100% organic fully decomposed dung cakes and powder.",
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
      <SEOHead
        title="Our Products | Patel Impex"
        description="Explore our wide range of premium agro products including spices, grains, oil seeds, and more."
        canonicalUrl="/products"
      />
      <Helmet>
        <title>Our Products | Premium Agricultural Exports | Patel Impex</title>
        <meta name="description" content="Explore our premium agricultural products including Psyllium Husk, Fennel, Cumin, Cotton, Rice, Groundnut, Cardamom, Soybean, and Wheat varieties for global export." />
        <meta name="keywords" content="psyllium husk export, fennel seeds, cumin export, cotton export, rice export, groundnut, cardamom, soybean, wheat flour, agricultural exports India" />
        <link rel="canonical" href="https://patelimpex.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .products-page-bg {
          background-color: #fbbd22;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Product Card */
        .pi-card {
          position: relative;
          background: #fdfaf3;
          border-radius: 15px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          /* The characteristic bottom box-shadow from the reference image */
          box-shadow:
            0 25px 0 rgba(0,0,0,0.07),
            0 38px 60px -10px rgba(0,0,0,0.22);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          border: none;
        }

        .pi-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 35px 0 rgba(0,0,0,0.06),
            0 50px 70px -10px rgba(0,0,0,0.26);
        }

        /* Ribbon Tag */
        .pi-ribbon {
          position: absolute;
          top: 0;
          right: 36px;
          width: 52px;
          height: 88px;
          z-index: 20;
        }

        .pi-ribbon::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 26px solid transparent;
          border-right: 26px solid transparent;
          border-top-width: 0; /* override */
        }

        /* card ribbon notch (triangle cut at bottom of ribbon) */
        .pi-ribbon-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 86%, 0% 100%);
        }

        /* Image Frame */
        .pi-img-wrap {
          padding: 30px 28px 16px;
          flex-shrink: 0;
        }

        .pi-img-frame {
          border: 1.5px solid rgba(180,148,100,0.35);
          border-radius: 14px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 220px;
          overflow: hidden;
          padding: 18px;
        }

        .pi-img-frame img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.10));
          transition: transform 0.5s ease;
        }

        .pi-card:hover .pi-img-frame img {
          transform: scale(1.06);
        }

        /* Card Content */
        .pi-content {
          padding: 6px 28px 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .pi-name {
          font-size: 26px;
          font-weight: 800;
          color: #2d1b00;
          margin-bottom: 8px;
          line-height: 1.2;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .pi-desc {
          font-size: 14px;
          color: #7a6a55;
          line-height: 1.6;
          font-weight: 400;
          flex-grow: 1;
        }

        /* HSN Badge */
        .pi-hsn {
          display: inline-block;
          margin-top: 14px;
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        /* Footer Enquiry Button */
        .pi-enquiry-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 18px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: white;
          text-decoration: none;
          transition: filter 0.2s;
          flex-shrink: 0;
        }

        .pi-enquiry-btn:hover {
          filter: brightness(1.08);
          color: white;
          text-decoration: none;
        }

        /* Category heading */
        .pi-category-title {
          font-size: clamp(28px, 5vw, 52px);
          font-weight: 900;
          color: #2d1b00;
          text-align: center;
          font-style: italic;
          letter-spacing: -0.02em;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .pi-divider {
          height: 3px;
          background: rgba(255,255,255,0.25);
          border-radius: 999px;
          flex: 1;
        }
      `}</style>

      <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navigation />

        {/* Hero */}
        <section className="pt-40 pb-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 mb-8">
                <Leaf className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Premium Inventory</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 uppercase tracking-tighter" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Our <span className="text-green-600">Products</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                High-grade agricultural commodities and industrial raw materials direct from verified Indian sources.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-page-bg pb-32">
          <div className="container mx-auto px-4">
            {productCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-28 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center gap-8 mb-16 pt-16">
                  <div className="pi-divider" />
                  <h2 className="pi-category-title px-4">{category.title}</h2>
                  <div className="pi-divider" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {category.items.map((product, index) => {
                    const ribbonColor = ribbonColors[index % ribbonColors.length];
                    return (
                      <div key={index} className="pi-card">
                        {/* Ribbon */}
                        <div className="pi-ribbon">
                          <div
                            className="pi-ribbon-inner"
                            style={{ backgroundColor: ribbonColor }}
                          />
                        </div>

                        {/* Image */}
                        <div className="pi-img-wrap">
                          <div className="pi-img-frame">
                            <img src={product.image} alt={product.name} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="pi-content">
                          <div className="pi-name">{product.name}</div>
                          <p className="pi-desc">{product.shortDesc}</p>
                          <span className="pi-hsn">HSN: {product.hsn}</span>
                        </div>

                        {/* Footer CTA — Enquiry (not Add to Cart) */}
                        <Link
                          to={product.link}
                          className="pi-enquiry-btn"
                          style={{ backgroundColor: ribbonColor }}
                        >
                          VIEW DETAILS
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="text-center mt-24">
              <Link
                to="/contact"
                className="inline-flex items-center bg-slate-900 text-white px-14 py-6 rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] group no-underline"
              >
                <Package className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                <span className="font-bold uppercase tracking-[0.35em] text-sm">Request Free Quote</span>
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
