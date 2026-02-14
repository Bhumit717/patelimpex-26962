import { Link } from "react-router-dom";
import { ArrowLeft, Check, Globe, Package, Shield, Truck, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TradePlatformButtons from "@/components/TradePlatformButtons";
interface Specification {
  label: string;
  value: string;
}

interface ExportInfo {
  label: string;
  value: string;
}

interface ProductDetailTemplateProps {
  category: string;
  name: string;
  description: string;
  image: string;
  specifications: Specification[];
  uses: string[];
  exportInfo: ExportInfo[];
  hsCode?: string;
  backLink: string;
  backLinkText: string;
}

const ProductDetailTemplate = ({
  category,
  name,
  description,
  image,
  specifications,
  uses,
  exportInfo,
  hsCode,
  backLink,
  backLinkText,
}: ProductDetailTemplateProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${name} from Patel Impex. Please provide more details.`
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-12">
          <div className="container mx-auto px-4">
            <Link 
              to={backLink} 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {backLinkText}
            </Link>
            <p className="text-blue-100 text-sm mb-2">{category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{name}</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center shadow-xl border border-transparent">
                <img
                  src={image}
                  alt={name}
                  className="max-h-96 object-contain"
                />
              </div>
              {hsCode && (
                <div className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  HSN: {hsCode}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-gray-600 text-lg mb-6">{description}</p>

              {/* Quick Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-xl shadow-lg border border-transparent">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Lab Tested</p>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-xl shadow-lg border border-transparent">
                  <Package className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Custom Packaging</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl shadow-lg border border-transparent">
                  <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Govt. Certified</p>
                </div>
              </div>

              {/* WhatsApp Enquiry */}
              <a
                href={`https://wa.me/919924386998?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors mb-8"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          {/* Tabs Content */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Specifications */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-transparent hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Package className="h-5 w-5 text-blue-600 mr-2" />
                Specifications
              </h3>
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Uses & Benefits */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-transparent hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Check className="h-5 w-5 text-teal-600 mr-2" />
                Uses & Benefits
              </h3>
              <ul className="space-y-3">
                {uses.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Export Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-transparent hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Globe className="h-5 w-5 text-green-600 mr-2" />
                Export Information
              </h3>
              <div className="space-y-3">
                {exportInfo.map((info, index) => (
                  <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium text-gray-900">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trade Platform Buttons */}
          <TradePlatformButtons />

          {/* Shipping Information */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 shadow-xl border border-transparent">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Truck className="h-6 w-6 text-blue-600 mr-3" />
              Shipping Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-white/50 rounded-xl shadow-md border border-transparent">
                <Globe className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Worldwide Export Services</p>
                  <p className="text-gray-600">We deliver premium products to more than 50+ countries across Asia, Europe, Middle East, Africa & USA.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white/50 rounded-xl shadow-md border border-transparent">
                <Truck className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Reliable Shipping Partners</p>
                  <p className="text-gray-600">Tie-ups with leading logistics & freight companies to ensure safe and timely delivery.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white/50 rounded-xl shadow-md border border-transparent">
                <Package className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Fast & Secure Delivery</p>
                  <p className="text-gray-600">Orders are dispatched via sea, air & land freight with proper tracking support.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white/50 rounded-xl shadow-md border border-transparent">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Customs & Documentation</p>
                  <p className="text-gray-600">Complete assistance with export documentation, certifications & compliance for hassle-free trade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailTemplate;

