
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

// More pages removed - replaced by dynamic system


// Product Pages - Main Categories
import IsabgolProducts from "./pages/products/IsabgolProducts";
import PsylliumHuskDetailPage from "./pages/products/PsylliumHuskDetailPage";
import PsylliumPowderDetailPage from "./pages/products/PsylliumPowderDetailPage";
import PsylliumSeedsDetailPage from "./pages/products/PsylliumSeedsDetailPage";
import FennelSeedsPage from "./pages/products/FennelSeedsPage";
import CardamomPage from "./pages/products/CardamomPage";
import CuminSeedsPage from "./pages/products/CuminSeedsPage";
import SoybeansPage from "./pages/products/SoybeansPage";
import WheatFlourPage from "./pages/products/WheatFlourPage";
import WheatProductsPage from "./pages/products/WheatProductsPage";
import RiceProductsPage from "./pages/products/RiceProductsPage";
import GroundnutProductsPage from "./pages/products/GroundnutProductsPage";
import CottonProductsPage from "./pages/products/CottonProductsPage";
import SesameSeedsProducts from "./pages/products/SesameSeedsProducts";
import SugarProductsPage from "./pages/products/SugarProductsPage";
import HulledSesameSeedsDetail from "./pages/products/HulledSesameSeedsDetail";
import NaturalSesameSeedsDetail from "./pages/products/NaturalSesameSeedsDetail";
import PsylliumHuskPowderDetail from "./pages/products/PsylliumHuskPowderDetail";
import PsylliumHuskProducts from "./pages/products/PsylliumHuskProducts";

// Cotton Subproduct Pages
import RawCottonDetail from "./pages/products/RawCottonDetail";
import CottonYarnDetail from "./pages/products/CottonYarnDetail";
import ComberNoilDetail from "./pages/products/ComberNoilDetail";
import CottonCardingDetail from "./pages/products/CottonCardingDetail";
import ProcessedCottonDetail from "./pages/products/ProcessedCottonDetail";
import CottonRovingDetail from "./pages/products/CottonRovingDetail";

// Groundnut Subproduct Pages
import BoldRunnerGroundnutDetail from "./pages/products/BoldRunnerGroundnutDetail";
import JavaSpanishGroundnutDetail from "./pages/products/JavaSpanishGroundnutDetail";
import TJGroundnutDetail from "./pages/products/TJGroundnutDetail";
import G10G20GroundnutDetail from "./pages/products/G10G20GroundnutDetail";

// Rice Subproduct Pages
import GoldenSellaBasmatiRice1121Detail from "./pages/products/GoldenSellaBasmatiRice1121Detail";
import WhiteSellaBasmatiRice1121Detail from "./pages/products/WhiteSellaBasmatiRice1121Detail";
import SteamBasmatiRice1121Detail from "./pages/products/SteamBasmatiRice1121Detail";
import IR64ParboiledRiceDetail from "./pages/products/IR64ParboiledRiceDetail";
import IR64RawRiceDetail from "./pages/products/IR64RawRiceDetail";
import SonaMasooriRiceDetail from "./pages/products/SonaMasooriRiceDetail";
import JeerakasalaRice from "./pages/products/JeerakasalaRice";

// Sugar Subproduct Pages
import RawSugarDetail from "./pages/products/sugar/RawSugarDetail";
import RefinedWhiteSugarDetail from "./pages/products/sugar/RefinedWhiteSugarDetail";
import OrganicSugarDetail from "./pages/products/sugar/OrganicSugarDetail";
import JaggeryDetail from "./pages/products/sugar/JaggeryDetail";
import PharmaSugarDetail from "./pages/products/sugar/PharmaSugarDetail";
import WhiteCrystalSugarDetail from "./pages/products/sugar/WhiteCrystalSugarDetail";
import BrownSugarDetail from "./pages/products/sugar/BrownSugarDetail";

// Wheat Subproduct Pages
import SharbatiWheatDetail from "./pages/products/wheat/SharbatiWheatDetail";
import DurumWheatDetail from "./pages/products/wheat/DurumWheatDetail";
import LokwanWheatDetail from "./pages/products/wheat/LokwanWheatDetail";
import BreadWheatDetail from "./pages/products/wheat/BreadWheatDetail";
import BhaliaWheatDetail from "./pages/products/wheat/BhaliaWheatDetail";
import HD2687WheatDetail from "./pages/products/wheat/HD2687WheatDetail";

// Product Pages - Other
import OrganicPesticidesExport from "./pages/products/OrganicPesticidesExport";
import BioFertilizersExport from "./pages/products/BioFertilizersExport";
import VeterinaryMedicinesExport from "./pages/products/VeterinaryMedicinesExport";
import HealthCapsulesExport from "./pages/products/HealthCapsulesExport";
import DiagnosticKitsExport from "./pages/products/DiagnosticKitsExport";
import HerbalSupplementsExport from "./pages/products/HerbalSupplementsExport";
import MedicalGlovesExport from "./pages/products/MedicalGlovesExport";
import MiniTractorExport from "./pages/products/MiniTractorExport";
import CombineHarvesterExport from "./pages/products/CombineHarvesterExport";
import DripIrrigationExport from "./pages/products/DripIrrigationExport";
import CultivatorExport from "./pages/products/CultivatorExport";
import SprinklerSystemExport from "./pages/products/SprinklerSystemExport";
import SeedingMachineExport from "./pages/products/SeedingMachineExport";
import PowerTillerExport from "./pages/products/PowerTillerExport";
import ThresherExport from "./pages/products/ThresherExport";
import FarmTrailerExport from "./pages/products/FarmTrailerExport";
import HandToolsExport from "./pages/products/HandToolsExport";


import BedLinenExport from "./pages/products/BedLinenExport";
import DesignerFabricsExport from "./pages/products/DesignerFabricsExport";
import CottonYarnExport from "./pages/products/CottonYarnExport";
import CurtainsExport from "./pages/products/CurtainsExport";
import TowelSetsExport from "./pages/products/TowelSetsExport";
import WoolBlanketsExport from "./pages/products/WoolBlanketsExport";
import SpicePicklesExport from "./pages/products/SpicePicklesExport";
import ReadyMealsExport from "./pages/products/ReadyMealsExport";
import SnackPacketsExport from "./pages/products/SnackPacketsExport";
import DairyGheeExport from "./pages/products/DairyGheeExport";
import SilverEarringsExport from "./pages/products/SilverEarringsExport";
import PearlJewelryExport from "./pages/products/PearlJewelryExport";
import BrassStatuesExport from "./pages/products/BrassStatuesExport";
import WallHangingsExport from "./pages/products/WallHangingsExport";
import DecorativeLampsExport from "./pages/products/DecorativeLampsExport";
import FashionJewelryExport from "./pages/products/FashionJewelryExport";
import AnimalDungPage from "./pages/products/AnimalDungPage";
import AnimalDungCakeDetail from "./pages/products/AnimalDungCakeDetail";
import AnimalDungPowderDetail from "./pages/products/AnimalDungPowderDetail";
import TilesExport from "./pages/products/TilesExport";
import EarthingExport from "./pages/products/EarthingExport";
import DesignerWashBasinsDetail from "./pages/products/DesignerWashBasinsDetail";
import WaterClosetsDetail from "./pages/products/WaterClosetsDetail";
import VitrifiedTilesDetail from "./pages/products/VitrifiedTilesDetail";
import ChemicalEarthingDetail from "./pages/products/ChemicalEarthingDetail";
import WallTilesDetail from "./pages/products/WallTilesDetail";
import FloorTilesDetail from "./pages/products/FloorTilesDetail";
import CopperRodsDetail from "./pages/products/CopperRodsDetail";
import EarthingAccessoriesDetail from "@/pages/products/EarthingAccessoriesDetail";
import DoubleChargeTilesDetail from "./pages/products/DoubleChargeTilesDetail";
import ElevationTilesDetail from "./pages/products/ElevationTilesDetail";
import ParkingTilesDetail from "./pages/products/ParkingTilesDetail";
import PorcelainSlabsDetail from "./pages/products/PorcelainSlabsDetail";
import SanitarywareDetail from "./pages/products/SanitarywareDetail";
import BathFittingsDetail from "./pages/products/BathFittingsDetail";
import GiElectrodeDetail from "./pages/products/GiElectrodeDetail";
import BackfillCompoundDetail from "./pages/products/BackfillCompoundDetail";
import EarthingStripsDetail from "./pages/products/EarthingStripsDetail";
import PitCoversDetail from "./pages/products/PitCoversDetail";
import LightningArresterDetail from "./pages/products/LightningArresterDetail";
import FullBodyVitrifiedDetail from "./pages/products/FullBodyVitrifiedDetail";

import AgricultureProductsPage from "./pages/products/AgricultureProductsPage";


// SEO Pages

// Generated SEO Pages



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

          {/* Generated SEO Routes */}


          {/* Main Product Category Hubs */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/agriculture" element={<AgricultureProductsPage />} />
          <Route path="/products/tiles-export" element={<TilesExport />} />
          <Route path="/products/earthing-export" element={<EarthingExport />} />



          {/* Main Product Detail Hubs (Sub-categories) */}
          <Route path="/products/psyllium-husk" element={<IsabgolProducts />} />
          <Route path="/products/psyllium-husk/husk" element={<PsylliumHuskDetailPage />} />
          <Route path="/products/psyllium-husk/powder" element={<PsylliumPowderDetailPage />} />
          <Route path="/products/psyllium-husk/seeds" element={<PsylliumSeedsDetailPage />} />
          <Route path="/products/fennel-seeds" element={<FennelSeedsPage />} />
          <Route path="/products/cardamom" element={<CardamomPage />} />
          <Route path="/products/cumin-seeds" element={<CuminSeedsPage />} />
          <Route path="/products/soybeans" element={<SoybeansPage />} />
          <Route path="/products/wheat-flour" element={<WheatFlourPage />} />
          <Route path="/products/wheat" element={<WheatProductsPage />} />
          <Route path="/products/rice" element={<RiceProductsPage />} />
          <Route path="/products/groundnut" element={<GroundnutProductsPage />} />
          <Route path="/products/cotton" element={<CottonProductsPage />} />
          <Route path="/products/sesame-seeds" element={<SesameSeedsProducts />} />
          <Route path="/products/sesame-seeds/hulled" element={<HulledSesameSeedsDetail />} />
          <Route path="/products/sesame-seeds/natural" element={<NaturalSesameSeedsDetail />} />
          <Route path="/products/sugar" element={<SugarProductsPage />} />
          <Route path="/products/animal-dung" element={<AnimalDungPage />} />
          <Route path="/products/animal-dung/cake" element={<AnimalDungCakeDetail />} />
          <Route path="/products/animal-dung/powder" element={<AnimalDungPowderDetail />} />


          {/* Cotton Subproduct Routes */}
          <Route path="/products/raw-cotton" element={<RawCottonDetail />} />
          <Route path="/products/cotton-yarn" element={<CottonYarnDetail />} />
          <Route path="/products/comber-noil-cotton" element={<ComberNoilDetail />} />
          <Route path="/products/cotton-carding-dropping" element={<CottonCardingDetail />} />
          <Route path="/products/processed-cotton" element={<ProcessedCottonDetail />} />
          <Route path="/products/cotton-roving" element={<CottonRovingDetail />} />

          {/* Groundnut Subproduct Routes */}
          <Route path="/products/bold-runner-groundnut" element={<BoldRunnerGroundnutDetail />} />
          <Route path="/products/java-spanish-groundnut" element={<JavaSpanishGroundnutDetail />} />
          <Route path="/products/tj-groundnut" element={<TJGroundnutDetail />} />
          <Route path="/products/g10-g20-groundnut" element={<G10G20GroundnutDetail />} />

          {/* Rice Subproduct Routes */}
          <Route path="/products/golden-sella-basmati-rice-1121" element={<GoldenSellaBasmatiRice1121Detail />} />
          <Route path="/products/white-sella-basmati-rice-1121" element={<WhiteSellaBasmatiRice1121Detail />} />
          <Route path="/products/steam-basmati-rice-1121" element={<SteamBasmatiRice1121Detail />} />
          <Route path="/products/ir64-parboiled-rice" element={<IR64ParboiledRiceDetail />} />
          <Route path="/products/ir64-raw-rice" element={<IR64RawRiceDetail />} />
          <Route path="/products/sona-masoori-rice" element={<SonaMasooriRiceDetail />} />
          <Route path="/products/jeerakasala-rice" element={<JeerakasalaRice />} />

          {/* Sugar Subproduct Routes */}
          <Route path="/products/sugar/raw-sugar" element={<RawSugarDetail />} />
          <Route path="/products/sugar/refined-white-sugar" element={<RefinedWhiteSugarDetail />} />
          <Route path="/products/sugar/organic-sugar" element={<OrganicSugarDetail />} />
          <Route path="/products/sugar/jaggery" element={<JaggeryDetail />} />
          <Route path="/products/sugar/pharmaceutical-sugar" element={<PharmaSugarDetail />} />
          <Route path="/products/sugar/white-crystal-sugar" element={<WhiteCrystalSugarDetail />} />
          <Route path="/products/sugar/brown-sugar" element={<BrownSugarDetail />} />

          {/* Wheat Subproduct Routes */}
          <Route path="/products/wheat/sharbati" element={<SharbatiWheatDetail />} />
          <Route path="/products/wheat/durum" element={<DurumWheatDetail />} />
          <Route path="/products/wheat/lokwan" element={<LokwanWheatDetail />} />
          <Route path="/products/wheat/bread-wheat" element={<BreadWheatDetail />} />
          <Route path="/products/wheat/bhalia" element={<BhaliaWheatDetail />} />
          <Route path="/products/wheat/hd-2687" element={<HD2687WheatDetail />} />

          {/* Other Product Pages */}
          <Route path="/products/organic-pesticides-export" element={<OrganicPesticidesExport />} />
          <Route path="/products/bio-fertilizers-export" element={<BioFertilizersExport />} />
          <Route path="/products/veterinary-medicines-export" element={<VeterinaryMedicinesExport />} />
          <Route path="/products/health-capsules-export" element={<HealthCapsulesExport />} />
          <Route path="/products/diagnostic-kits-export" element={<DiagnosticKitsExport />} />
          <Route path="/products/herbal-supplements-export" element={<HerbalSupplementsExport />} />
          <Route path="/products/medical-gloves-export" element={<MedicalGlovesExport />} />
          <Route path="/products/mini-tractor-export" element={<MiniTractorExport />} />
          <Route path="/products/combine-harvester-export" element={<CombineHarvesterExport />} />
          <Route path="/products/drip-irrigation-export" element={<DripIrrigationExport />} />
          <Route path="/products/cultivator-export" element={<CultivatorExport />} />
          <Route path="/products/sprinkler-system-export" element={<SprinklerSystemExport />} />
          <Route path="/products/seeding-machine-export" element={<SeedingMachineExport />} />
          <Route path="/products/power-tiller-export" element={<PowerTillerExport />} />
          <Route path="/products/thresher-export" element={<ThresherExport />} />
          <Route path="/products/farm-trailer-export" element={<FarmTrailerExport />} />
          <Route path="/products/hand-tools-export" element={<HandToolsExport />} />
          {/* Agricultural Sector Hubs */}
          <Route path="/products/rice" element={<RiceProductsPage />} />
          <Route path="/products/wheat" element={<WheatProductsPage />} />
          <Route path="/products/wheat-flour" element={<WheatFlourPage />} />
          <Route path="/products/fennel-seeds" element={<FennelSeedsPage />} />
          <Route path="/products/cumin-seeds" element={<CuminSeedsPage />} />
          <Route path="/products/cardamom" element={<CardamomPage />} />
          <Route path="/products/groundnut" element={<GroundnutProductsPage />} />
          <Route path="/products/animal-dung" element={<AnimalDungPage />} />
          <Route path="/products/soybeans" element={<SoybeansPage />} />
          <Route path="/products/sesame-seeds" element={<SesameSeedsProducts />} />
          <Route path="/products/cotton" element={<CottonProductsPage />} />
          <Route path="/products/psyllium-husk" element={<IsabgolProducts />} />
          <Route path="/products/psyllium-husk-powder" element={<PsylliumHuskPowderDetail />} />
          <Route path="/products/psyllium-husk-products" element={<PsylliumHuskProducts />} />


          <Route path="/products/bed-linen-export" element={<BedLinenExport />} />
          <Route path="/products/designer-fabrics-export" element={<DesignerFabricsExport />} />
          <Route path="/products/cotton-yarn-export" element={<CottonYarnExport />} />
          <Route path="/products/curtains-export" element={<CurtainsExport />} />
          <Route path="/products/towel-sets-export" element={<TowelSetsExport />} />
          <Route path="/products/wool-blankets-export" element={<WoolBlanketsExport />} />
          <Route path="/products/spice-pickles-export" element={<SpicePicklesExport />} />
          <Route path="/products/ready-meals-export" element={<ReadyMealsExport />} />
          <Route path="/products/snack-packets-export" element={<SnackPacketsExport />} />
          <Route path="/products/dairy-ghee-export" element={<DairyGheeExport />} />
          <Route path="/products/silver-earrings-export" element={<SilverEarringsExport />} />
          <Route path="/products/pearl-jewelry-export" element={<PearlJewelryExport />} />
          <Route path="/products/brass-statues-export" element={<BrassStatuesExport />} />
          <Route path="/products/wall-hangings-export" element={<WallHangingsExport />} />
          <Route path="/products/decorative-lamps-export" element={<DecorativeLampsExport />} />
          <Route path="/products/fashion-jewelry-export" element={<FashionJewelryExport />} />
          <Route path="/products/earthing-export" element={<EarthingExport />} />
           <Route path="/products/tiles/gvt-pgvt" element={<VitrifiedTilesDetail />} />
          <Route path="/products/tiles/double-charge" element={<DoubleChargeTilesDetail />} />
          <Route path="/products/tiles/full-body" element={<FullBodyVitrifiedDetail />} />
          <Route path="/products/tiles/wall" element={<WallTilesDetail />} />
          <Route path="/products/tiles/floor" element={<FloorTilesDetail />} />
          <Route path="/products/tiles/elevation" element={<ElevationTilesDetail />} />
          <Route path="/products/tiles/parking" element={<ParkingTilesDetail />} />
          <Route path="/products/tiles/slabs" element={<PorcelainSlabsDetail />} />
          <Route path="/products/tiles/sanitary-basin" element={<DesignerWashBasinsDetail />} />
          <Route path="/products/tiles/sanitary-closet" element={<WaterClosetsDetail />} />
          <Route path="/products/sanitaryware" element={<SanitarywareDetail />} />
          <Route path="/products/bath-fittings" element={<BathFittingsDetail />} />
          
          <Route path="/products/earthing/gi-electrode" element={<GiElectrodeDetail />} />
          <Route path="/products/earthing/copper-electrode" element={<ChemicalEarthingDetail />} />
          <Route path="/products/earthing/copper-rods" element={<CopperRodsDetail />} />
          <Route path="/products/earthing/backfill" element={<BackfillCompoundDetail />} />
          <Route path="/products/earthing/strips" element={<EarthingStripsDetail />} />
          <Route path="/products/earthing/pit-covers" element={<PitCoversDetail />} />
          <Route path="/products/earthing/lightning-arresters" element={<LightningArresterDetail />} />
          <Route path="/products/earthing/clamps" element={<EarthingAccessoriesDetail />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Sitemap is served as a static file from /public/sitemap.xml */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
