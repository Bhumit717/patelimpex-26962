
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomCursor } from "./components/CustomCursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import Logo from "./pages/Logo";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Admin from "./pages/Admin";
import Sitemap from "./pages/Sitemap";
import BlogPostDetail from "./pages/BlogPostDetail";
import NewsDetail from "./pages/NewsDetail";

// Product Pages - Rice
import RiceProductsPage from "./pages/products/RiceProductsPage";
import GoldenSellaBasmatiRice1121Detail from "./pages/products/GoldenSellaBasmatiRice1121Detail";
import WhiteSellaBasmatiRice1121Detail from "./pages/products/WhiteSellaBasmatiRice1121Detail";
import SteamBasmatiRice1121Detail from "./pages/products/SteamBasmatiRice1121Detail";
import IR64ParboiledRiceDetail from "./pages/products/IR64ParboiledRiceDetail";
import IR64RawRiceDetail from "./pages/products/IR64RawRiceDetail";
import SonaMasooriRiceDetail from "./pages/products/SonaMasooriRiceDetail";
import JeerakasalaRice from "./pages/products/JeerakasalaRice";

// Product Pages - Cumin
import CuminSeedsPage from "./pages/products/CuminSeedsPage";
import CuminSeedsDetail from "./pages/products/CuminSeedsDetail";

// Product Pages - Psyllium Husk
import IsabgolProducts from "./pages/products/IsabgolProducts";
import PsylliumHuskDetailPage from "./pages/products/PsylliumHuskDetailPage";
import PsylliumPowderDetailPage from "./pages/products/PsylliumPowderDetailPage";
import PsylliumSeedsDetailPage from "./pages/products/PsylliumSeedsDetailPage";
import PsylliumHuskPowderDetail from "./pages/products/PsylliumHuskPowderDetail";
import PsylliumHuskProducts from "./pages/products/PsylliumHuskProducts";

// Product Pages - Groundnut
import GroundnutProductsPage from "./pages/products/GroundnutProductsPage";
import BoldRunnerGroundnutDetail from "./pages/products/BoldRunnerGroundnutDetail";
import JavaSpanishGroundnutDetail from "./pages/products/JavaSpanishGroundnutDetail";
import TJGroundnutDetail from "./pages/products/TJGroundnutDetail";
import G10G20GroundnutDetail from "./pages/products/G10G20GroundnutDetail";

// Product Pages - Wheat
import WheatProductsPage from "./pages/products/WheatProductsPage";
import WheatFlourPage from "./pages/products/WheatFlourPage";
import WheatFlourDetail from "./pages/products/WheatFlourDetail";
import SharbatiWheatDetail from "./pages/products/wheat/SharbatiWheatDetail";
import DurumWheatDetail from "./pages/products/wheat/DurumWheatDetail";
import LokwanWheatDetail from "./pages/products/wheat/LokwanWheatDetail";
import BreadWheatDetail from "./pages/products/wheat/BreadWheatDetail";
import BhaliaWheatDetail from "./pages/products/wheat/BhaliaWheatDetail";
import HD2687WheatDetail from "./pages/products/wheat/HD2687WheatDetail";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/admin" element={<Admin />} />

          {/* Rice Routes */}
          <Route path="/products/rice" element={<RiceProductsPage />} />
          <Route path="/products/golden-sella-basmati-rice-1121" element={<GoldenSellaBasmatiRice1121Detail />} />
          <Route path="/products/white-sella-basmati-rice-1121" element={<WhiteSellaBasmatiRice1121Detail />} />
          <Route path="/products/steam-basmati-rice-1121" element={<SteamBasmatiRice1121Detail />} />
          <Route path="/products/ir64-parboiled-rice" element={<IR64ParboiledRiceDetail />} />
          <Route path="/products/ir64-raw-rice" element={<IR64RawRiceDetail />} />
          <Route path="/products/sona-masoori-rice" element={<SonaMasooriRiceDetail />} />
          <Route path="/products/jeerakasala-rice" element={<JeerakasalaRice />} />

          {/* Cumin Routes */}
          <Route path="/products/cumin-seeds" element={<CuminSeedsPage />} />
          <Route path="/products/cumin-seeds/detail" element={<CuminSeedsDetail />} />

          {/* Psyllium Husk Routes */}
          <Route path="/products/psyllium-husk" element={<IsabgolProducts />} />
          <Route path="/products/psyllium-husk/husk" element={<PsylliumHuskDetailPage />} />
          <Route path="/products/psyllium-husk/powder" element={<PsylliumPowderDetailPage />} />
          <Route path="/products/psyllium-husk/seeds" element={<PsylliumSeedsDetailPage />} />
          <Route path="/products/psyllium-husk-powder" element={<PsylliumHuskPowderDetail />} />
          <Route path="/products/psyllium-husk-products" element={<PsylliumHuskProducts />} />

          {/* Groundnut Routes */}
          <Route path="/products/groundnut" element={<GroundnutProductsPage />} />
          <Route path="/products/bold-runner-groundnut" element={<BoldRunnerGroundnutDetail />} />
          <Route path="/products/java-spanish-groundnut" element={<JavaSpanishGroundnutDetail />} />
          <Route path="/products/tj-groundnut" element={<TJGroundnutDetail />} />
          <Route path="/products/g10-g20-groundnut" element={<G10G20GroundnutDetail />} />

          {/* Wheat Routes */}
          <Route path="/products/wheat" element={<WheatProductsPage />} />
          <Route path="/products/wheat-flour" element={<WheatFlourPage />} />
          <Route path="/products/wheat-flour/detail" element={<WheatFlourDetail />} />
          <Route path="/products/wheat/sharbati" element={<SharbatiWheatDetail />} />
          <Route path="/products/wheat/durum" element={<DurumWheatDetail />} />
          <Route path="/products/wheat/lokwan" element={<LokwanWheatDetail />} />
          <Route path="/products/wheat/bread-wheat" element={<BreadWheatDetail />} />
          <Route path="/products/wheat/bhalia" element={<BhaliaWheatDetail />} />
          <Route path="/products/wheat/hd-2687" element={<HD2687WheatDetail />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
