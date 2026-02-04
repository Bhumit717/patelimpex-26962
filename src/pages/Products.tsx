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

  const stats = [
    { label: "Countries Served", value: "50+", icon: Globe },
    { label: "Happy Clients", value: "100+", icon: Users },
    { label: "Products Exported", value: "1000+", icon: Target },
    { label: "Years Experience", value: "15+", icon: Star },
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
        <section className="pt-32 pb-16 bg-[#e9edf3] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-[#e9edf3] rounded-full shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff] mb-6">
                <Leaf className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-slate-600 text-sm font-semibold">Premium Quality Exports</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-800">
                Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Premium Products</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Quality agricultural commodities exported from India to 50+ countries worldwide
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="nm-card p-6">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-[#e9edf3] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.link}
                  className="group relative nm-card !p-0 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden bg-slate-100 p-6 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#e9edf3] text-blue-600 text-xs font-semibold rounded-full shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff]">
                      HSN: {product.hsn}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Specs */}
                    <div className="space-y-2 mb-6">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
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

            {/* Contact CTA */}
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="nm-btn inline-flex items-center !w-auto text-slate-700"
              >
                <Package className="h-5 w-5 mr-2" />
                Request Quote
                <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300" />
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
