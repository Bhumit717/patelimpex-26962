
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
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(var(--ink))] text-[hsl(var(--paper))] font-graduate">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-accent-ink" />
                <span className="text-lg">{translationConfig.flag}</span>
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight">
                  Welcome from {translationConfig.country}!
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  Translate this website?
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                onClick={enableTranslation}
                disabled={isTranslating}
                className="bg-accent-ink text-[hsl(var(--paper))] hover:bg-accent-ink font-bold px-4 py-2 transition-all duration-300 border-none text-xs uppercase tracking-widest"
              >
                {isTranslating ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white border-t-transparent animate-spin mr-2" />
                    ...
                  </>
                ) : (
                  <>
                    <Languages className="h-3 w-3 mr-2" />
                    Translate
                  </>
                )}
              </Button>

              <button
                onClick={dismissTranslation}
                className="text-[hsl(var(--paper))] hover:text-muted-foreground p-1 hover:bg-card/10 transition-all duration-300"
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
