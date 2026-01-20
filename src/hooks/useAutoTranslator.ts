import { useEffect, useState } from 'react';
import { getCountryByIP } from '@/services/locationService';

interface TranslationConfig {
  country: string;
  language: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

const TRANSLATION_MAP: Record<string, TranslationConfig> = {
  // Arabic speaking countries
  'Saudi Arabia': { country: 'Saudi Arabia', language: 'ar', flag: '🇸🇦', direction: 'rtl' },
  'United Arab Emirates': { country: 'UAE', language: 'ar', flag: '🇦🇪', direction: 'rtl' },
  'Qatar': { country: 'Qatar', language: 'ar', flag: '🇶🇦', direction: 'rtl' },
  'Kuwait': { country: 'Kuwait', language: 'ar', flag: '🇰🇼', direction: 'rtl' },
  'Bahrain': { country: 'Bahrain', language: 'ar', flag: '🇧🇭', direction: 'rtl' },
  'Egypt': { country: 'Egypt', language: 'ar', flag: '🇪🇬', direction: 'rtl' },
  'Jordan': { country: 'Jordan', language: 'ar', flag: '🇯🇴', direction: 'rtl' },
  
  // European countries
  'Germany': { country: 'Germany', language: 'de', flag: '🇩🇪', direction: 'ltr' },
  'France': { country: 'France', language: 'fr', flag: '🇫🇷', direction: 'ltr' },
  'Spain': { country: 'Spain', language: 'es', flag: '🇪🇸', direction: 'ltr' },
  'Italy': { country: 'Italy', language: 'it', flag: '🇮🇹', direction: 'ltr' },
  'Netherlands': { country: 'Netherlands', language: 'nl', flag: '🇳🇱', direction: 'ltr' },
  'Poland': { country: 'Poland', language: 'pl', flag: '🇵🇱', direction: 'ltr' },
  'Russia': { country: 'Russia', language: 'ru', flag: '🇷🇺', direction: 'ltr' },
  
  // Asian countries
  'China': { country: 'China', language: 'zh', flag: '🇨🇳', direction: 'ltr' },
  'Japan': { country: 'Japan', language: 'ja', flag: '🇯🇵', direction: 'ltr' },
  'South Korea': { country: 'South Korea', language: 'ko', flag: '🇰🇷', direction: 'ltr' },
  'Vietnam': { country: 'Vietnam', language: 'vi', flag: '🇻🇳', direction: 'ltr' },
  'Thailand': { country: 'Thailand', language: 'th', flag: '🇹🇭', direction: 'ltr' },
  'Indonesia': { country: 'Indonesia', language: 'id', flag: '🇮🇩', direction: 'ltr' },
  'Malaysia': { country: 'Malaysia', language: 'ms', flag: '🇲🇾', direction: 'ltr' },
  'Singapore': { country: 'Singapore', language: 'en', flag: '🇸🇬', direction: 'ltr' },
  'Bangladesh': { country: 'Bangladesh', language: 'bn', flag: '🇧🇩', direction: 'ltr' },
  
  // American countries
  'United States': { country: 'USA', language: 'en', flag: '🇺🇸', direction: 'ltr' },
  'Canada': { country: 'Canada', language: 'en', flag: '🇨🇦', direction: 'ltr' },
  'Mexico': { country: 'Mexico', language: 'es', flag: '🇲🇽', direction: 'ltr' },
  'Brazil': { country: 'Brazil', language: 'pt', flag: '🇧🇷', direction: 'ltr' },
  'Argentina': { country: 'Argentina', language: 'es', flag: '🇦🇷', direction: 'ltr' },
  
  // African countries
  'South Africa': { country: 'South Africa', language: 'en', flag: '🇿🇦', direction: 'ltr' },
  'Nigeria': { country: 'Nigeria', language: 'en', flag: '🇳🇬', direction: 'ltr' },
  'Kenya': { country: 'Kenya', language: 'en', flag: '🇰🇪', direction: 'ltr' },
  
  // Default fallback
  'India': { country: 'India', language: 'en', flag: '🇮🇳', direction: 'ltr' },
};

export const useAutoTranslator = () => {
  const [translationConfig, setTranslationConfig] = useState<TranslationConfig | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [showTranslationBanner, setShowTranslationBanner] = useState(false);

  useEffect(() => {
    const initializeTranslation = async () => {
      try {
        // Check if user has already dismissed translation
        const translationDismissed = sessionStorage.getItem('translation-dismissed');
        if (translationDismissed) return;

        const country = await getCountryByIP();
        const config = TRANSLATION_MAP[country];
        
        if (config && config.language !== 'en') {
          setTranslationConfig(config);
          setShowTranslationBanner(true);
        }
      } catch (error) {
        console.warn('Translation initialization failed:', error);
      }
    };

    // Initialize with delay to not block page load
    setTimeout(initializeTranslation, 2000);
  }, []);

  const enableTranslation = async () => {
    if (!translationConfig) return;

    setIsTranslating(true);
    setShowTranslationBanner(false);

    try {
      // Google Translate Widget initialization
      if (!(window as any).google?.translate) {
        await loadGoogleTranslate();
      }

      // Initialize Google Translate
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: translationConfig.language,
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );

      // Store user preference
      sessionStorage.setItem('translation-enabled', 'true');
      sessionStorage.setItem('translation-language', translationConfig.language);
      
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  const dismissTranslation = () => {
    setShowTranslationBanner(false);
    sessionStorage.setItem('translation-dismissed', 'true');
  };

  const loadGoogleTranslate = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Add Google Translate script
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      // Set global callback
      (window as any).googleTranslateElementInit = () => {
        resolve();
      };

      script.onerror = () => reject(new Error('Failed to load Google Translate'));
      document.head.appendChild(script);
    });
  };

  return {
    translationConfig,
    showTranslationBanner,
    isTranslating,
    enableTranslation,
    dismissTranslation,
  };
};