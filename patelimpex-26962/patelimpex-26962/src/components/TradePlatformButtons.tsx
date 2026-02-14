import { ExternalLink } from "lucide-react";

const tradePlatforms = [
  { name: "Alibaba", url: "https://www.alibaba.com" },
  { name: "Made in China", url: "https://www.made-in-china.com" },
  { name: "Exporters India", url: "https://www.exportersindia.com" },
  { name: "IndiaMart", url: "https://www.indiamart.com" },
  { name: "TradeIndia", url: "https://www.tradeindia.com" },
  { name: "Go4WorldBusiness", url: "https://www.go4worldbusiness.com" },
  { name: "EC21", url: "https://www.ec21.com" },
  { name: "Export India", url: "https://www.exportindia.com" },
  { name: "Global Sources", url: "https://www.globalsources.com" },
  { name: "ThomasNet", url: "https://www.thomasnet.com" },
  { name: "Amazon Business", url: "https://business.amazon.in" },
  { name: "DHgate", url: "https://www.dhgate.com" },
  { name: "ECVV", url: "https://www.ecvv.com" },
  { name: "TradeKey", url: "https://www.tradekey.com" },
  { name: "eWorldTrade", url: "https://www.eworldtrade.com" },
  { name: "HKTDC", url: "https://www.hktdc.com" },
];

const TradePlatformButtons = () => {
  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-xl border border-transparent">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
        Find Us on Popular Platforms
      </h3>
      <div className="flex flex-wrap gap-2">
        {tradePlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-200"
          >
            {platform.name}
            <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TradePlatformButtons;
