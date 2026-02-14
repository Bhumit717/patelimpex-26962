import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Wheat, Award, Globe, TrendingUp } from "lucide-react";
import wheatImage from "@/assets/agricultural-export-processing.jpg";
import SEOHead from "@/components/SEOHead";

// Product Images
import sharbatiImg from "@/assets/products/subtypes/sharbati-wheat.png";
import durumImg from "@/assets/products/subtypes/durum-wheat.png";
import breadImg from "@/assets/products/subtypes/bread-wheat.png";
import lokwanImg from "@/assets/products/subtypes/lokwan-wheat.png";
import bhaliaImg from "@/assets/products/subtypes/bhalia-wheat.png";
import hd2687Img from "@/assets/products/subtypes/hd-2687-wheat.png";

const WheatExport = () => {
  const wheatTypes = [
    {
      type: "Sharbati Wheat",
      protein: "12-14%",
      grade: "Premium",
      markets: "Global",
      image: sharbatiImg,
      link: "/products/wheat/sharbati"
    },
    {
      type: "Durum Wheat",
      protein: "12-14%",
      grade: "Premium",
      markets: "Italy, North Africa",
      image: durumImg,
      link: "/products/wheat/durum"
    },
    {
      type: "Bread Wheat",
      protein: "11-13%",
      grade: "Standard",
      markets: "Global",
      image: breadImg,
      link: "/products/wheat/bread"
    },
    {
      type: "Lokwan Wheat",
      protein: "10-12%",
      grade: "Superior",
      markets: "Middle East",
      image: lokwanImg,
      link: "/products/wheat/lokwan"
    },
    {
      type: "Bhalia Wheat",
      protein: "10-12%",
      grade: "Superior",
      markets: "Index",
      image: bhaliaImg,
      link: "/products/wheat/bhalia"
    },
    {
      type: "HD 2687 (Shreshth)",
      protein: "11.5-13%",
      grade: "High Yield",
      markets: "Asia",
      image: hd2687Img,
      link: "/products/wheat/hd-2687"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title="Wheat Export | Patel Impex" description="Wheat Export - Expert services and information by Patel Impex." canonicalUrl="/more/wheat-export" />
      <Navigation />

      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Wheat className="w-4 h-4 mr-2" />
                Wheat Export
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Wheat Export Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Export premium Indian wheat varieties to global markets. High protein content wheat for milling and feed applications.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Export Wheat</Link>
              </Button>
            </div>
            <div>
              <img
                src={wheatImage}
                alt="Wheat Export - Premium Indian wheat for global milling industry"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Wheat Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wheatTypes.map((wheat, index) => (
              <Link
                key={index}
                to={wheat.link}
                className="group block"
              >
                <Card className="nm-card !p-0 overflow-hidden border-none group-hover:-translate-y-2 transition-all duration-500 h-full">
                  <CardHeader className="bg-white p-0 border-b border-slate-100">
                    <div className="h-48 w-full overflow-hidden p-6 flex items-center justify-center bg-slate-50">
                      <img
                        src={wheat.image}
                        alt={wheat.type}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <CardTitle className="flex flex-col gap-2 font-graduate uppercase tracking-tight text-xl group-hover:text-green-600 transition-colors">
                        <span>{wheat.type}</span>
                        <Badge variant="outline" className="w-fit font-bold text-[10px]">{wheat.grade}</Badge>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                          <Award className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm font-fondamento italic text-slate-600">Protein: {wheat.protein}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <Globe className="w-4 h-4 text-slate-400" />
                        </div>
                        <span className="text-sm font-fondamento italic text-slate-500">Markets: {wheat.markets}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WheatExport;
