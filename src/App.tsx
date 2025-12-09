
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import Logo from "./pages/Logo";
import FAQ from "./pages/FAQ";
import SEO from "./pages/SEO";
import More from "./pages/More";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// More pages
import ExportImportGuide from "./pages/more/ExportImportGuide";
import InternationalTradeBasics from "./pages/more/InternationalTradeBasics";
import RiceExport from "./pages/more/RiceExport";
import SpicesExport from "./pages/more/SpicesExport";
import AsianMarkets from "./pages/more/AsianMarkets";
import SeaFreight from "./pages/more/SeaFreight";
import ExportDocumentation from "./pages/more/ExportDocumentation";
import AgriculturalProducts from "./pages/more/AgriculturalProducts";
import TradeFinance from "./pages/more/TradeFinance";
import EuropeanMarkets from "./pages/more/EuropeanMarkets";
import QualityStandards from "./pages/more/QualityStandards";
import CertificateOfOrigin from "./pages/more/CertificateOfOrigin";
import TextileExport from "./pages/more/TextileExport";
import CustomsClearance from "./pages/more/CustomsClearance";
import FreightForwarding from "./pages/more/FreightForwarding";
import MarketResearch from "./pages/more/MarketResearch";
import WarehouseServices from "./pages/more/WarehouseServices";
import InsuranceServices from "./pages/more/InsuranceServices";
import BuyerVerification from "./pages/more/BuyerVerification";
import DigitalMarketing from "./pages/more/DigitalMarketing";
import ComplianceTraining from "./pages/more/ComplianceTraining";
import AfricanMarkets from "./pages/more/AfricanMarkets";
import MiddleEastMarkets from "./pages/more/MiddleEastMarkets";
import AmericanMarkets from "./pages/more/AmericanMarkets";
import LegalCompliance from "./pages/more/LegalCompliance";
import TechnologyIntegration from "./pages/more/TechnologyIntegration";
import PackagingServices from "./pages/more/PackagingServices";
import CertificationServices from "./pages/more/CertificationServices";
import SupplyChainManagement from "./pages/more/SupplyChainManagement";
import NorthAmericanMarkets from "./pages/more/NorthAmericanMarkets";
import SouthAmericanMarkets from "./pages/more/SouthAmericanMarkets";
import OceaniaMarkets from "./pages/more/OceaniaMarkets";
import EasternEuropeanMarkets from "./pages/more/EasternEuropeanMarkets";
import CentralAsianMarkets from "./pages/more/CentralAsianMarkets";
import SoutheastAsianMarkets from "./pages/more/SoutheastAsianMarkets";
import NortheastAsianMarkets from "./pages/more/NortheastAsianMarkets";
import SouthernAfricanMarkets from "./pages/more/SouthernAfricanMarkets";
import WestAfricanMarkets from "./pages/more/WestAfricanMarkets";
import EastAfricanMarkets from "./pages/more/EastAfricanMarkets";
import NorthAfricanMarkets from "./pages/more/NorthAfricanMarkets";
import GulfCooperationCouncil from "./pages/more/GulfCooperationCouncil";
import LevantMarkets from "./pages/more/LevantMarkets";
import ScandinavianMarkets from "./pages/more/ScandinavianMarkets";
import MediterraneanMarkets from "./pages/more/MediterraneanMarkets";
import BasmatiRiceExport from "./pages/more/BasmatiRiceExport";
import NonBasmatiRiceExport from "./pages/more/NonBasmatiRiceExport";
import WheatExport from "./pages/more/WheatExport";
import CornExport from "./pages/more/CornExport";
import MilletExport from "./pages/more/MilletExport";
import BarleyExport from "./pages/more/BarleyExport";
import TurmericExport from "./pages/more/TurmericExport";
import CuminExport from "./pages/more/CuminExport";
import CorianderExport from "./pages/more/CorianderExport";
import CardamomExport from "./pages/more/CardamomExport";
import BlackPepperExport from "./pages/more/BlackPepperExport";
import RedChiliExport from "./pages/more/RedChiliExport";
import GingerExport from "./pages/more/GingerExport";
import GarlicExport from "./pages/more/GarlicExport";
import OnionExport from "./pages/more/OnionExport";
import CashewExport from "./pages/more/CashewExport";
import AlmondExport from "./pages/more/AlmondExport";
import SesameSeedsExport from "./pages/more/SesameSeedsExport";
import SunflowerSeedsExport from "./pages/more/SunflowerSeedsExport";

// Product Pages
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
import CNCMachineExport from "./pages/products/CNCMachineExport";
import PowerDrillSetExport from "./pages/products/PowerDrillSetExport";
import IndustrialMotorExport from "./pages/products/IndustrialMotorExport";
import EnginePartsExport from "./pages/products/EnginePartsExport";
import SteelSheetsExport from "./pages/products/SteelSheetsExport";
import WeldingMachineExport from "./pages/products/WeldingMachineExport";
import HydraulicPressExport from "./pages/products/HydraulicPressExport";
import BallBearingsExport from "./pages/products/BallBearingsExport";
import HardwareFittingsExport from "./pages/products/HardwareFittingsExport";
import ConveyorBeltExport from "./pages/products/ConveyorBeltExport";
import StorageContainersExport from "./pages/products/StorageContainersExport";
import PackagingBoxesExport from "./pages/products/PackagingBoxesExport";
import IndustrialPipesExport from "./pages/products/IndustrialPipesExport";
import HouseholdBucketsExport from "./pages/products/HouseholdBucketsExport";
import MedicalContainersExport from "./pages/products/MedicalContainersExport";
import AutomotiveBumpersExport from "./pages/products/AutomotiveBumpersExport";
import PlasticBottlesExport from "./pages/products/PlasticBottlesExport";
import FoodContainersExport from "./pages/products/FoodContainersExport";
import PlasticSheetsExport from "./pages/products/PlasticSheetsExport";
import MoldedPartsExport from "./pages/products/MoldedPartsExport";
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

// SEO Pages
import USAMarketExport from "./pages/seo/USAMarketExport";
import UKMarketExport from "./pages/seo/UKMarketExport";
import CanadaMarketExport from "./pages/seo/CanadaMarketExport";
import AustraliaMarketExport from "./pages/seo/AustraliaMarketExport";
import OrganicFoodExport from "./pages/seo/OrganicFoodExport";
import FrozenFoodExport from "./pages/seo/FrozenFoodExport";
import PharmaceuticalExport from "./pages/seo/PharmaceuticalExport";
import AirFreightServices from "./pages/seo/AirFreightServices";
import OceanFreightServices from "./pages/seo/OceanFreightServices";
import ExpressShippingServices from "./pages/seo/ExpressShippingServices";
import GermanyMarketExport from "./pages/seo/GermanyMarketExport";
import FranceMarketExport from "./pages/seo/FranceMarketExport";
import ItalyMarketExport from "./pages/seo/ItalyMarketExport";
import SpainMarketExport from "./pages/seo/SpainMarketExport";
import NetherlandsMarketExport from "./pages/seo/NetherlandsMarketExport";
import JapanMarketExport from "./pages/seo/JapanMarketExport";
import BelgiumMarketExport from "./pages/seo/BelgiumMarketExport";
import SingaporeMarketExport from "./pages/seo/SingaporeMarketExport";
import TeaExportServices from "./pages/seo/TeaExportServices";
import CoffeeExportServices from "./pages/seo/CoffeeExportServices";
import SugarExportServices from "./pages/seo/SugarExportServices";
import PulsesExportServices from "./pages/seo/PulsesExportServices";
import MangoExportServices from "./pages/seo/MangoExportServices";
import BananaExportServices from "./pages/seo/BananaExportServices";
import GrapesExportServices from "./pages/seo/GrapesExportServices";
import CoconutExportServices from "./pages/seo/CoconutExportServices";
import CottonExportServices from "./pages/seo/CottonExportServices";
import WheatFlourExportServices from "./pages/seo/WheatFlourExportServices";
import CasheOilExportServices from "./pages/seo/CasheOilExportServices";
import JaggeryExportServices from "./pages/seo/JaggeryExportServices";
import HandicraftsExportServices from "./pages/seo/HandicraftsExportServices";
import LeatherProductsExportServices from "./pages/seo/LeatherProductsExportServices";
import GemsJewelryExportServices from "./pages/seo/GemsJewelryExportServices";
import UAEMarketExport from "./pages/seo/UAEMarketExport";
import ArharDalExport from "./pages/seo/ArharDalExport";
import MoongDalExport from "./pages/seo/MoongDalExport";
import ChanaDalExport from "./pages/seo/ChanaDalExport";
import UradDalExport from "./pages/seo/UradDalExport";
import MasoorDalExport from "./pages/seo/MasoorDalExport";
import RajmaExport from "./pages/seo/RajmaExport";
import ChickpeaExport from "./pages/seo/ChickpeaExport";
import FenugreekSeedsExport from "./pages/seo/FenugreekSeedsExport";
import MustardSeedsExport from "./pages/seo/MustardSeedsExport";
import CinnamonExport from "./pages/seo/CinnamonExport";
import CloveExport from "./pages/seo/CloveExport";
import StarAniseExport from "./pages/seo/StarAniseExport";
import FennelSeedsExport from "./pages/seo/FennelSeedsExport";
import BlackMustardSeedsExport from "./pages/seo/BlackMustardSeedsExport";
import AjwainExport from "./pages/seo/AjwainExport";
import CelerySeeds from "./pages/seo/CelerySeeds";
import DillSeedsExport from "./pages/seo/DillSeedsExport";
import PopopySeedsExport from "./pages/seo/PopopySeedsExport";
import NigellaSeedsExport from "./pages/seo/NigellaSeedsExport";
import PsylliumHuskExport from "./pages/seo/PsylliumHuskExport";
import MoroccoMarketExport from "./pages/seo/MoroccoMarketExport";
import KenyaMarketExportServices from "./pages/seo/KenyaMarketExportServices";
import NigeriaMarketExportServices from "./pages/seo/NigeriaMarketExportServices";
import WalnutExport from "./pages/seo/WalnutExport";
import PistachioExport from "./pages/seo/PistachioExport";
import HazelnutExport from "./pages/seo/HazelnutExport";
import PecanExport from "./pages/seo/PecanExport";
import PinePnutExport from "./pages/seo/PinePnutExport";
import MacadamiaExport from "./pages/seo/MacadamiaExport";
import BrazilNutExport from "./pages/seo/BrazilNutExport";
import RaisinsExport from "./pages/seo/RaisinsExport";
import DatesExport from "./pages/seo/DatesExport";
import AlgeriaMarketExport from "./pages/seo/AlgeriaMarketExport";
import AngolaMarketExport from "./pages/seo/AngolaMarketExport";
import ArgentinaMarketExport from "./pages/seo/ArgentinaMarketExport";
import AzerbaijanMarketExport from "./pages/seo/AzerbaijanMarketExport";
import BahrainMarketExport from "./pages/seo/BahrainMarketExport";
import BangladeshMarketExport from "./pages/seo/BangladeshMarketExport";
import BelarusMarketExport from "./pages/seo/BelarusMarketExport";
import BoliviaMarketExport from "./pages/seo/BoliviaMarketExport";
import BotswanaMarketExport from "./pages/seo/BotswanaMarketExport";
import BrazilMarketExport from "./pages/seo/BrazilMarketExport";
import BruneiMarketExport from "./pages/seo/BruneiMarketExport";
import BulgariaMarketExport from "./pages/seo/BulgariaMarketExport";
import CambodiaMarketExport from "./pages/seo/CambodiaMarketExport";
import CameroonMarketExport from "./pages/seo/CameroonMarketExport";
import ChileMarketExport from "./pages/seo/ChileMarketExport";
import ChinaMarketExport from "./pages/seo/ChinaMarketExport";
import ColombiaMarketExport from "./pages/seo/ColombiaMarketExport";
import CroatiaMarketExport from "./pages/seo/CroatiaMarketExport";
import CubaMarketExport from "./pages/seo/CubaMarketExport";
import CyprusMarketExport from "./pages/seo/CyprusMarketExport";
import CzechMarketExport from "./pages/seo/CzechMarketExport";
import DenmarkMarketExport from "./pages/seo/DenmarkMarketExport";
import DominicanRepublicMarketExport from "./pages/seo/DominicanRepublicMarketExport";
import EcuadorMarketExport from "./pages/seo/EcuadorMarketExport";
import EgyptMarketExport from "./pages/seo/EgyptMarketExport";
import EstoniaMarketExport from "./pages/seo/EstoniaMarketExport";
import EthiopiaMarketExport from "./pages/seo/EthiopiaMarketExport";
import FinlandMarketExport from "./pages/seo/FinlandMarketExport";
import GabonMarketExport from "./pages/seo/GabonMarketExport";
import GambiaMarketExport from "./pages/seo/GambiaMarketExport";
import GeorgiaMarketExport from "./pages/seo/GeorgiaMarketExport";
import GhanaMarketExport from "./pages/seo/GhanaMarketExport";
import GreeceMarketExport from "./pages/seo/GreeceMarketExport";
import GuatemalaMarketExport from "./pages/seo/GuatemalaMarketExport";
import GuineaMarketExport from "./pages/seo/GuineaMarketExport";
import HondurasMarketExport from "./pages/seo/HondurasMarketExport";
import HungaryMarketExport from "./pages/seo/HungaryMarketExport";
import IcelandMarketExport from "./pages/seo/IcelandMarketExport";
import IndonesiaMarketExport from "./pages/seo/IndonesiaMarketExport";
import IraqMarketExport from "./pages/seo/IraqMarketExport";
import IrelandMarketExport from "./pages/seo/IrelandMarketExport";
import IsraelMarketExport from "./pages/seo/IsraelMarketExport";
import IvoryCoastMarketExport from "./pages/seo/IvoryCoastMarketExport";
import JamaicaMarketExport from "./pages/seo/JamaicaMarketExport";
import JordanMarketExport from "./pages/seo/JordanMarketExport";
import KazakhstanMarketExport from "./pages/seo/KazakhstanMarketExport";
import KenyaMarketExport from "./pages/seo/KenyaMarketExport";
import KuwaitMarketExport from "./pages/seo/KuwaitMarketExport";
import KyrgyzstanMarketExport from "./pages/seo/KyrgyzstanMarketExport";
import LaosMarketExport from "./pages/seo/LaosMarketExport";
import LatviaMarketExport from "./pages/seo/LatviaMarketExport";
import LebanonMarketExport from "./pages/seo/LebanonMarketExport";
import MalaysiaMarketExport from "./pages/seo/MalaysiaMarketExport";
import MexicoMarketExport from "./pages/seo/MexicoMarketExport";
import MyanmarMarketExport from "./pages/seo/MyanmarMarketExport";
import NepalMarketExport from "./pages/seo/NepalMarketExport";
import NigeriaMarketExport from "./pages/seo/NigeriaMarketExport";
import PakistanMarketExport from "./pages/seo/PakistanMarketExport";
import PeruMarketExport from "./pages/seo/PeruMarketExport";
import PhilippinesMarketExport from "./pages/seo/PhilippinesMarketExport";
import RussiaMarketExport from "./pages/seo/RussiaMarketExport";
import SouthAfricaMarketExport from "./pages/seo/SouthAfricaMarketExport";
import SouthKoreaMarketExport from "./pages/seo/SouthKoreaMarketExport";
import SriLankaMarketExport from "./pages/seo/SriLankaMarketExport";
import ThailandMarketExport from "./pages/seo/ThailandMarketExport";
import TurkeyMarketExport from "./pages/seo/TurkeyMarketExport";
import VietnamMarketExport from "./pages/seo/VietnamMarketExport";


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
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/more" element={<More />} />
          
          {/* More sub-pages */}
          <Route path="/more/export-import-guide" element={<ExportImportGuide />} />
          <Route path="/more/international-trade-basics" element={<InternationalTradeBasics />} />
          <Route path="/more/rice-export" element={<RiceExport />} />
          <Route path="/more/spices-export" element={<SpicesExport />} />
          <Route path="/more/asian-markets" element={<AsianMarkets />} />
          <Route path="/more/sea-freight" element={<SeaFreight />} />
          <Route path="/more/export-documentation" element={<ExportDocumentation />} />
          <Route path="/more/agricultural-products" element={<AgriculturalProducts />} />
          <Route path="/more/trade-finance" element={<TradeFinance />} />
          <Route path="/more/european-markets" element={<EuropeanMarkets />} />
          <Route path="/more/quality-standards" element={<QualityStandards />} />
          <Route path="/more/certificate-of-origin" element={<CertificateOfOrigin />} />
          <Route path="/more/textile-export" element={<TextileExport />} />
          <Route path="/more/customs-clearance" element={<CustomsClearance />} />
          <Route path="/more/freight-forwarding" element={<FreightForwarding />} />
          <Route path="/more/market-research" element={<MarketResearch />} />
          <Route path="/more/warehouse-services" element={<WarehouseServices />} />
          <Route path="/more/insurance-services" element={<InsuranceServices />} />
          <Route path="/more/buyer-verification" element={<BuyerVerification />} />
          <Route path="/more/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/more/compliance-training" element={<ComplianceTraining />} />
          <Route path="/more/african-markets" element={<AfricanMarkets />} />
          <Route path="/more/middle-east-markets" element={<MiddleEastMarkets />} />
          <Route path="/more/american-markets" element={<AmericanMarkets />} />
          <Route path="/more/legal-compliance" element={<LegalCompliance />} />
          <Route path="/more/technology-integration" element={<TechnologyIntegration />} />
          <Route path="/more/packaging-services" element={<PackagingServices />} />
          <Route path="/more/certification-services" element={<CertificationServices />} />
          <Route path="/more/supply-chain-management" element={<SupplyChainManagement />} />
          <Route path="/more/north-american-markets" element={<NorthAmericanMarkets />} />
          <Route path="/more/south-american-markets" element={<SouthAmericanMarkets />} />
          <Route path="/more/oceania-markets" element={<OceaniaMarkets />} />
          <Route path="/more/eastern-european-markets" element={<EasternEuropeanMarkets />} />
          <Route path="/more/central-asian-markets" element={<CentralAsianMarkets />} />
          <Route path="/more/southeast-asian-markets" element={<SoutheastAsianMarkets />} />
          <Route path="/more/northeast-asian-markets" element={<NortheastAsianMarkets />} />
          <Route path="/more/southern-african-markets" element={<SouthernAfricanMarkets />} />
          <Route path="/more/west-african-markets" element={<WestAfricanMarkets />} />
          <Route path="/more/east-african-markets" element={<EastAfricanMarkets />} />
          <Route path="/more/north-african-markets" element={<NorthAfricanMarkets />} />
          <Route path="/more/gulf-cooperation-council" element={<GulfCooperationCouncil />} />
          <Route path="/more/levant-markets" element={<LevantMarkets />} />
          <Route path="/more/scandinavian-markets" element={<ScandinavianMarkets />} />
          <Route path="/more/mediterranean-markets" element={<MediterraneanMarkets />} />
          <Route path="/more/basmati-rice-export" element={<BasmatiRiceExport />} />
          <Route path="/more/non-basmati-rice-export" element={<NonBasmatiRiceExport />} />
          <Route path="/more/wheat-export" element={<WheatExport />} />
          <Route path="/more/corn-export" element={<CornExport />} />
          <Route path="/more/millet-export" element={<MilletExport />} />
          <Route path="/more/barley-export" element={<BarleyExport />} />
          <Route path="/more/turmeric-export" element={<TurmericExport />} />
          <Route path="/more/cumin-export" element={<CuminExport />} />
          <Route path="/more/coriander-export" element={<CorianderExport />} />
          <Route path="/more/cardamom-export" element={<CardamomExport />} />
          <Route path="/more/black-pepper-export" element={<BlackPepperExport />} />
          <Route path="/more/red-chili-export" element={<RedChiliExport />} />
          <Route path="/more/ginger-export" element={<GingerExport />} />
          <Route path="/more/garlic-export" element={<GarlicExport />} />
          <Route path="/more/onion-export" element={<OnionExport />} />
          <Route path="/more/cashew-export" element={<CashewExport />} />
          <Route path="/more/almond-export" element={<AlmondExport />} />
          <Route path="/more/sesame-seeds-export" element={<SesameSeedsExport />} />
          <Route path="/more/sunflower-seeds-export" element={<SunflowerSeedsExport />} />
          
          {/* SEO Pages */}
          <Route path="/seo/usa-market-export" element={<USAMarketExport />} />
          <Route path="/seo/uk-market-export" element={<UKMarketExport />} />
          <Route path="/seo/canada-market-export" element={<CanadaMarketExport />} />
          <Route path="/seo/australia-market-export" element={<AustraliaMarketExport />} />
          <Route path="/seo/organic-food-export" element={<OrganicFoodExport />} />
          <Route path="/seo/frozen-food-export" element={<FrozenFoodExport />} />
          <Route path="/seo/pharmaceutical-export" element={<PharmaceuticalExport />} />
          <Route path="/seo/air-freight-services" element={<AirFreightServices />} />
          <Route path="/seo/ocean-freight-services" element={<OceanFreightServices />} />
          <Route path="/seo/express-shipping-services" element={<ExpressShippingServices />} />
          <Route path="/seo/germany-market-export" element={<GermanyMarketExport />} />
          <Route path="/seo/france-market-export" element={<FranceMarketExport />} />
          <Route path="/seo/italy-market-export" element={<ItalyMarketExport />} />
          <Route path="/seo/spain-market-export" element={<SpainMarketExport />} />
          <Route path="/seo/netherlands-market-export" element={<NetherlandsMarketExport />} />
          <Route path="/seo/japan-market-export" element={<JapanMarketExport />} />
          <Route path="/seo/belgium-market-export" element={<BelgiumMarketExport />} />
          <Route path="/seo/singapore-market-export" element={<SingaporeMarketExport />} />
          <Route path="/seo/tea-export-services" element={<TeaExportServices />} />
          <Route path="/seo/coffee-export-services" element={<CoffeeExportServices />} />
          <Route path="/seo/sugar-export-services" element={<SugarExportServices />} />
          <Route path="/seo/pulses-export-services" element={<PulsesExportServices />} />
          <Route path="/seo/mango-export-services" element={<MangoExportServices />} />
          <Route path="/seo/banana-export-services" element={<BananaExportServices />} />
          <Route path="/seo/grapes-export-services" element={<GrapesExportServices />} />
          <Route path="/seo/coconut-export-services" element={<CoconutExportServices />} />
          <Route path="/seo/cotton-export-services" element={<CottonExportServices />} />
          <Route path="/seo/wheat-flour-export-services" element={<WheatFlourExportServices />} />
          <Route path="/seo/cashew-oil-export-services" element={<CasheOilExportServices />} />
          <Route path="/seo/jaggery-export-services" element={<JaggeryExportServices />} />
          <Route path="/seo/handicrafts-export-services" element={<HandicraftsExportServices />} />
          <Route path="/seo/leather-products-export-services" element={<LeatherProductsExportServices />} />
          <Route path="/seo/gems-jewelry-export-services" element={<GemsJewelryExportServices />} />
          <Route path="/seo/uae-market-export" element={<UAEMarketExport />} />
          <Route path="/seo/arhar-dal-export" element={<ArharDalExport />} />
          <Route path="/seo/moong-dal-export" element={<MoongDalExport />} />
          <Route path="/seo/chana-dal-export" element={<ChanaDalExport />} />
          <Route path="/seo/urad-dal-export" element={<UradDalExport />} />
          <Route path="/seo/masoor-dal-export" element={<MasoorDalExport />} />
          <Route path="/seo/rajma-export" element={<RajmaExport />} />
          <Route path="/seo/chickpea-export" element={<ChickpeaExport />} />
          <Route path="/seo/fenugreek-seeds-export" element={<FenugreekSeedsExport />} />
          <Route path="/seo/mustard-seeds-export" element={<MustardSeedsExport />} />
          <Route path="/seo/cinnamon-export" element={<CinnamonExport />} />
          <Route path="/seo/clove-export" element={<CloveExport />} />
          <Route path="/seo/star-anise-export" element={<StarAniseExport />} />
          <Route path="/seo/fennel-seeds-export" element={<FennelSeedsExport />} />
          <Route path="/seo/black-mustard-seeds-export" element={<BlackMustardSeedsExport />} />
          <Route path="/seo/ajwain-export" element={<AjwainExport />} />
          <Route path="/seo/celery-seeds" element={<CelerySeeds />} />
          <Route path="/seo/dill-seeds-export" element={<DillSeedsExport />} />
          <Route path="/seo/poppy-seeds-export" element={<PopopySeedsExport />} />
          <Route path="/seo/nigella-seeds-export" element={<NigellaSeedsExport />} />
          <Route path="/seo/psyllium-husk-export" element={<PsylliumHuskExport />} />
          <Route path="/seo/morocco-market-export" element={<MoroccoMarketExport />} />
          <Route path="/seo/kenya-market-export-services" element={<KenyaMarketExportServices />} />
          <Route path="/seo/nigeria-market-export-services" element={<NigeriaMarketExportServices />} />
          <Route path="/seo/walnut-export" element={<WalnutExport />} />
          <Route path="/seo/pistachio-export" element={<PistachioExport />} />
          <Route path="/seo/hazelnut-export" element={<HazelnutExport />} />
          <Route path="/seo/pecan-export" element={<PecanExport />} />
          <Route path="/seo/pine-nuts-export" element={<PinePnutExport />} />
          <Route path="/seo/macadamia-export" element={<MacadamiaExport />} />
          <Route path="/seo/brazil-nut-export" element={<BrazilNutExport />} />
          <Route path="/seo/raisins-export" element={<RaisinsExport />} />
          <Route path="/seo/dates-export" element={<DatesExport />} />
          <Route path="/seo/algeria-market-export" element={<AlgeriaMarketExport />} />
          <Route path="/seo/angola-market-export" element={<AngolaMarketExport />} />
          <Route path="/seo/argentina-market-export" element={<ArgentinaMarketExport />} />
          <Route path="/seo/azerbaijan-market-export" element={<AzerbaijanMarketExport />} />
          <Route path="/seo/bahrain-market-export" element={<BahrainMarketExport />} />
          <Route path="/seo/bangladesh-market-export" element={<BangladeshMarketExport />} />
          <Route path="/seo/belarus-market-export" element={<BelarusMarketExport />} />
          <Route path="/seo/bolivia-market-export" element={<BoliviaMarketExport />} />
          <Route path="/seo/botswana-market-export" element={<BotswanaMarketExport />} />
          <Route path="/seo/brazil-market-export" element={<BrazilMarketExport />} />
          <Route path="/seo/brunei-market-export" element={<BruneiMarketExport />} />
          <Route path="/seo/bulgaria-market-export" element={<BulgariaMarketExport />} />
          <Route path="/seo/cambodia-market-export" element={<CambodiaMarketExport />} />
          <Route path="/seo/cameroon-market-export" element={<CameroonMarketExport />} />
          <Route path="/seo/chile-market-export" element={<ChileMarketExport />} />
          <Route path="/seo/china-market-export" element={<ChinaMarketExport />} />
          <Route path="/seo/colombia-market-export" element={<ColombiaMarketExport />} />
          <Route path="/seo/croatia-market-export" element={<CroatiaMarketExport />} />
          <Route path="/seo/cuba-market-export" element={<CubaMarketExport />} />
          <Route path="/seo/cyprus-market-export" element={<CyprusMarketExport />} />
          <Route path="/seo/czech-market-export" element={<CzechMarketExport />} />
          <Route path="/seo/denmark-market-export" element={<DenmarkMarketExport />} />
          <Route path="/seo/dominican-republic-market-export" element={<DominicanRepublicMarketExport />} />
          <Route path="/seo/ecuador-market-export" element={<EcuadorMarketExport />} />
          <Route path="/seo/egypt-market-export" element={<EgyptMarketExport />} />
          <Route path="/seo/estonia-market-export" element={<EstoniaMarketExport />} />
          <Route path="/seo/ethiopia-market-export" element={<EthiopiaMarketExport />} />
          <Route path="/seo/finland-market-export" element={<FinlandMarketExport />} />
          <Route path="/seo/gabon-market-export" element={<GabonMarketExport />} />
          <Route path="/seo/gambia-market-export" element={<GambiaMarketExport />} />
          <Route path="/seo/georgia-market-export" element={<GeorgiaMarketExport />} />
          <Route path="/seo/ghana-market-export" element={<GhanaMarketExport />} />
          <Route path="/seo/greece-market-export" element={<GreeceMarketExport />} />
          <Route path="/seo/guatemala-market-export" element={<GuatemalaMarketExport />} />
          <Route path="/seo/guinea-market-export" element={<GuineaMarketExport />} />
          <Route path="/seo/honduras-market-export" element={<HondurasMarketExport />} />
          <Route path="/seo/hungary-market-export" element={<HungaryMarketExport />} />
          <Route path="/seo/iceland-market-export" element={<IcelandMarketExport />} />
          <Route path="/seo/indonesia-market-export" element={<IndonesiaMarketExport />} />
          <Route path="/seo/iraq-market-export" element={<IraqMarketExport />} />
          <Route path="/seo/ireland-market-export" element={<IrelandMarketExport />} />
          <Route path="/seo/israel-market-export" element={<IsraelMarketExport />} />
          <Route path="/seo/ivory-coast-market-export" element={<IvoryCoastMarketExport />} />
          <Route path="/seo/jamaica-market-export" element={<JamaicaMarketExport />} />
          <Route path="/seo/jordan-market-export" element={<JordanMarketExport />} />
          <Route path="/seo/kazakhstan-market-export" element={<KazakhstanMarketExport />} />
          <Route path="/seo/kenya-market-export" element={<KenyaMarketExport />} />
          <Route path="/seo/kuwait-market-export" element={<KuwaitMarketExport />} />
          <Route path="/seo/kyrgyzstan-market-export" element={<KyrgyzstanMarketExport />} />
          <Route path="/seo/laos-market-export" element={<LaosMarketExport />} />
          <Route path="/seo/latvia-market-export" element={<LatviaMarketExport />} />
          <Route path="/seo/lebanon-market-export" element={<LebanonMarketExport />} />
          <Route path="/seo/malaysia-market-export" element={<MalaysiaMarketExport />} />
          <Route path="/seo/mexico-market-export" element={<MexicoMarketExport />} />
          <Route path="/seo/myanmar-market-export" element={<MyanmarMarketExport />} />
          <Route path="/seo/nepal-market-export" element={<NepalMarketExport />} />
          <Route path="/seo/nigeria-market-export" element={<NigeriaMarketExport />} />
          <Route path="/seo/pakistan-market-export" element={<PakistanMarketExport />} />
          <Route path="/seo/peru-market-export" element={<PeruMarketExport />} />
          <Route path="/seo/philippines-market-export" element={<PhilippinesMarketExport />} />
          <Route path="/seo/russia-market-export" element={<RussiaMarketExport />} />
          <Route path="/seo/south-africa-market-export" element={<SouthAfricaMarketExport />} />
          <Route path="/seo/south-korea-market-export" element={<SouthKoreaMarketExport />} />
          <Route path="/seo/sri-lanka-market-export" element={<SriLankaMarketExport />} />
          <Route path="/seo/thailand-market-export" element={<ThailandMarketExport />} />
          <Route path="/seo/turkey-market-export" element={<TurkeyMarketExport />} />
          <Route path="/seo/vietnam-market-export" element={<VietnamMarketExport />} />

          
          {/* Product Pages */}
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
          <Route path="/products/cnc-machine-export" element={<CNCMachineExport />} />
          <Route path="/products/power-drill-set-export" element={<PowerDrillSetExport />} />
          <Route path="/products/industrial-motor-export" element={<IndustrialMotorExport />} />
          <Route path="/products/engine-parts-export" element={<EnginePartsExport />} />
          <Route path="/products/steel-sheets-export" element={<SteelSheetsExport />} />
          <Route path="/products/welding-machine-export" element={<WeldingMachineExport />} />
          <Route path="/products/hydraulic-press-export" element={<HydraulicPressExport />} />
          <Route path="/products/ball-bearings-export" element={<BallBearingsExport />} />
          <Route path="/products/hardware-fittings-export" element={<HardwareFittingsExport />} />
          <Route path="/products/conveyor-belt-export" element={<ConveyorBeltExport />} />
          <Route path="/products/storage-containers-export" element={<StorageContainersExport />} />
          <Route path="/products/packaging-boxes-export" element={<PackagingBoxesExport />} />
          <Route path="/products/industrial-pipes-export" element={<IndustrialPipesExport />} />
          <Route path="/products/household-buckets-export" element={<HouseholdBucketsExport />} />
          <Route path="/products/medical-containers-export" element={<MedicalContainersExport />} />
          <Route path="/products/automotive-bumpers-export" element={<AutomotiveBumpersExport />} />
          <Route path="/products/plastic-bottles-export" element={<PlasticBottlesExport />} />
          <Route path="/products/food-containers-export" element={<FoodContainersExport />} />
          <Route path="/products/plastic-sheets-export" element={<PlasticSheetsExport />} />
          <Route path="/products/molded-parts-export" element={<MoldedPartsExport />} />
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
