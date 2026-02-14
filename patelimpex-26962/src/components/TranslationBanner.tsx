import { X, Globe, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAutoTranslator } from "@/hooks/useAutoTranslator";

const TranslationBanner = () => {
  const { 
    translationConfig, 
    showTranslationBanner, 
    isTranslating, 
    enableTranslation, 
    dismissTranslation 
  } = useAutoTranslator();

  if (!showTranslationBanner || !translationConfig) return null;

  return (
    <>
      {/* Google Translate Element Container (hidden) */}
      <div id="google_translate_element" className="hidden" />
      
      {/* Translation Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span className="text-lg">{translationConfig.flag}</span>
              </div>
              <div>
                <p className="font-semibold">
                  Welcome visitor from {translationConfig.country}!
                </p>
                <p className="text-sm text-blue-100">
                  Would you like to translate this page to your language?
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                onClick={enableTranslation}
                disabled={isTranslating}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg transition-all duration-300"
              >
                {isTranslating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2" />
                    Translating...
                  </>
                ) : (
                  <>
                    <Languages className="h-4 w-4 mr-2" />
                    Translate Page
                  </>
                )}
              </Button>
              
              <button
                onClick={dismissTranslation}
                className="text-white hover:text-blue-200 p-1 rounded-full hover:bg-white/10 transition-all duration-300"
                aria-label="Dismiss translation offer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TranslationBanner;