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
import sesameSeedsImg from "@/assets/products/hulled-sesame.png";
import SEOHead from "@/components/SEOHead";

const Products = () => {
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
      name: "Sesame Seeds",
      image: sesameSeedsImg,
      link: "/products/sesame-seeds",
      specs: ["Hulled & Natural", "99.95% Purity", "White/Golden"],
      hsn: "1207.40"
    },
    {
      name: "Cumin Seeds",
      image: cuminSeedsImg,
      link: "/products/cumin-seeds",
      specs: ["99% Purity", "25/50 kg Bags", "Machine Cleaned"],
      hsn: "0909.31"
    },
    {
      name: "Groundnut",
      image: groundnutImg,
      link: "/products/groundnut",
      specs: ["40-50 Count", "25/50 kg Bags", "Bold/Java/TJ"],
      hsn: "1202.42"
    },
    {
      name: "Soybeans",
      image: soybeanImg,
      link: "/products/soybeans",
      specs: ["46-48% Protein", "50 kg PP Bags", "Non-GMO"],
      hsn: "1201.90"
    },
    {
      name: "Rice",
      image: riceImg,
      link: "/products/rice",
      specs: ["Basmati & Non-Basmati", "25/50 kg Bags", "Multiple Varieties"],
      hsn: "1006.30"
    },
    {
      name: "Cotton",
      image: cottonImg,
      link: "/products/cotton",
      specs: ["28-30mm Staple", "170 kg Bales", "Multiple Grades"],
      hsn: "5201.00"
    },
    {
      name: "Wheat Flour",
      image: wheatFlourImg,
      link: "/products/wheat-flour",
      specs: ["10-12% Protein", "25/50 kg Bags", "White Refined"],
      hsn: "1101.00"
    },
    {
      name: "Cardamom",
      image: cardamomImg,
      link: "/products/cardamom",
      specs: ["8mm Bold", "25 kg Boxes", "Green/Bleached"],
      hsn: "0908.31"
    },
  ];


  const generateStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Patel Exports Products",
    "description": "Premium agricultural products exported from India",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
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
      <SEOHead title="Our Products | Patel Impex" description="Explore our wide range of certificates agro products including spices, grains, oil seeds, and more." canonicalUrl="/products" />
      <Helmet>
        <title>Our Products | Premium Agricultural Exports | Patel Impex</title>
        <meta name="description" content="Explore our premium agricultural products including Psyllium Husk, Fennel, Cumin, Cotton, Rice, Groundnut, Cardamom, Soybean, and Wheat Flour for global export." />
        <meta name="keywords" content="psyllium husk export, fennel seeds, cumin export, cotton export, rice export, groundnut, cardamom, soybean, wheat flour, agricultural exports India" />
        <link rel="canonical" href="https://patelimpex.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#e9edf3]">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-slate-50 rounded-full border border-slate-100 mb-8">
                <Leaf className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] font-graduate">Premium Inventory</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 font-graduate uppercase tracking-tighter">
                Global <span className="text-green-600 font-fredericka tracking-tight lowercase">Trading</span> Stock
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-fondamento italic leading-relaxed">
                Our portfolio features high-grade agricultural commodities and industrial raw materials direct from verified Indian sources.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.link}
                  className="group relative nm-card !p-0 overflow-hidden hover:-translate-y-3 transition-all duration-500 bg-white"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden bg-slate-50 p-10 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm text-green-600 text-[10px] font-bold rounded-full border border-slate-100 shadow-sm font-graduate uppercase tracking-widest">
                      HSN: {product.hsn}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 font-graduate uppercase tracking-tight group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Specs */}
                    <div className="space-y-3 mb-8">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center text-xs font-bold font-graduate uppercase tracking-widest text-slate-400">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-green-600 font-graduate font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                      <span>Explore Specifications</span>
                      <ArrowRight className="h-4 w-4 ml-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

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
