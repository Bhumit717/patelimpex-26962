import { useEffect } from 'react';
import { Languages } from 'lucide-react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Add Google Translate script
    const addScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,pt,ru,zh-CN,zh-TW,ja,ko,ar,hi,bn,pa,te,ta,mr,gu,kn,ml,ur,vi,th,id,ms,tl,tr,pl,uk,ro,nl,sv,cs,el,he,fa,da,fi,no,hu,bg,hr,sk,sl,sr,lt,lv,et,mt,ga,cy,is,mk,sq,bs,ka,hy,az,eu,gl',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        'google_translate_element'
      );
    };

    addScript();

    // Add custom styles
    const style = document.createElement('style');
    style.innerHTML = `
      /* Hide Google Translate banner */
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      body {
        top: 0px !important;
      }
      
      /* Main container styling */
      #google_translate_element {
        display: flex !important;
        align-items: center !important;
        width: 100% !important;
        height: 100% !important;
      }
      
      /* Remove default font size */
      .goog-te-gadget {
        font-family: inherit !important;
        font-size: 0 !important;
        color: transparent !important;
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
      }
      
      /* Style the translate button */
      .goog-te-gadget-simple {
        background-color: transparent !important;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        font-size: 13px !important; /* Slightly larger for better read */
        line-height: normal !important;
        display: flex !important;
        align-items: center !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        height: 100% !important;
        width: 100% !important;
        vertical-align: middle !important;
        white-space: nowrap !important;
      }
      
      .goog-te-gadget-simple:hover {
        background-color: transparent !important;
        border: none !important;
        transform: none !important;
        box-shadow: none !important;
      }
      
      /* Style the text wrapper */
      .goog-te-gadget-simple .goog-te-menu-value {
        color: #1e293b !important;
        font-weight: 600 !important; /* Slightly bolder */
        font-size: 13px !important;
        line-height: normal !important;
        display: flex !important;
        align-items: center !important;
        margin: 0 !important;
        padding: 0 !important;
        white-space: nowrap !important;
      }
      
      /* Style individual spans inside the text wrapper */
      .goog-te-gadget-simple .goog-te-menu-value span {
        color: #1e293b !important;
        font-weight: 600 !important;
        border: none !important; /* Remove separation border lines */
        padding: 0 !important;
        margin: 0 !important;
        display: inline-block !important;
        vertical-align: middle !important;
      }
      
      /* Hide "Powered by" text if needed (keeping user pref or standard clean look) */
      /* Usually first child is the selected language or "Select Language" */
      /* Note: Google structure varies. We want to show the text. */
      
      /* Hide the icon provided by Google */
      .goog-te-gadget-icon {
        display: none !important;
      }
      
      /* Style the dropdown arrow */
      .goog-te-gadget-simple .goog-te-menu-value > span:last-child {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        border: none !important;
        margin-left: 4px !important;
        font-size: 10px !important; /* Make arrow subtle */
        color: #3b82f6 !important; /* Blue arrow */
        opacity: 0.8 !important;
      }

      /* Fix for "Select Language" appearing on two lines */
      .goog-te-gadget-simple .goog-te-menu-value span:first-child {
         display: inline-block !important;
      }
      
      /* Style the dropdown menu */
      .goog-te-menu-frame {
        max-height: 400px !important;
        overflow-y: auto !important;
        border-radius: 12px !important;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
        border: 1px solid rgba(59, 130, 246, 0.1) !important;
        z-index: 99999 !important;
      }
      
      .goog-te-menu-frame::-webkit-scrollbar {
        width: 8px;
      }
      
      .goog-te-menu-frame::-webkit-scrollbar-track {
        background: #f1f5f9;
        border-radius: 4px;
      }
      
      .goog-te-menu-frame::-webkit-scrollbar-thumb {
        background: #3b82f6;
        border-radius: 4px;
      }

      /* Reduce layout shift */
      .goog-te-gadget-simple img {
          display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const script = document.getElementById('google-translate-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2 group">
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-0 rounded-[20px] border border-blue-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-md w-auto min-w-[200px]">
        <Languages className="h-4 w-4 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
        <div id="google_translate_element" className="translate-widget flex items-center overflow-hidden"></div>
      </div>
    </div>
  );
};

export default GoogleTranslate;
