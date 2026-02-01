import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

const CustomLanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const languages = [
        { code: 'en', name: 'English', nativeName: 'English' },
        { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
        { code: 'sq', name: 'Albanian', nativeName: 'Shqip' },
        { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
        { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
        { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն' },
        { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan' },
        { code: 'eu', name: 'Basque', nativeName: 'Euskara' },
        { code: 'be', name: 'Belarusian', nativeName: 'Беларуская' },
        { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
        { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski' },
        { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
        { code: 'ca', name: 'Catalan', nativeName: 'Català' },
        { code: 'ceb', name: 'Cebuano', nativeName: 'Cebuano' },
        { code: 'ny', name: 'Chichewa', nativeName: 'Chichewa' },
        { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文' },
        { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
        { code: 'co', name: 'Corsican', nativeName: 'Corsu' },
        { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski' },
        { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
        { code: 'da', name: 'Danish', nativeName: 'Dansk' },
        { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
        { code: 'eo', name: 'Esperanto', nativeName: 'Esperanto' },
        { code: 'et', name: 'Estonian', nativeName: 'Eesti' },
        { code: 'tl', name: 'Filipino', nativeName: 'Filipino' },
        { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
        { code: 'fr', name: 'French', nativeName: 'Français' },
        { code: 'fy', name: 'Frisian', nativeName: 'Frysk' },
        { code: 'gl', name: 'Galician', nativeName: 'Galego' },
        { code: 'ka', name: 'Georgian', nativeName: 'ქართული' },
        { code: 'de', name: 'German', nativeName: 'Deutsch' },
        { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
        { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
        { code: 'ht', name: 'Haitian Creole', nativeName: 'Kreyòl Ayisyen' },
        { code: 'ha', name: 'Hausa', nativeName: 'Hausa' },
        { code: 'haw', name: 'Hawaiian', nativeName: 'ʻŌlelo Hawaiʻi' },
        { code: 'iw', name: 'Hebrew', nativeName: 'עברית' },
        { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
        { code: 'hmn', name: 'Hmong', nativeName: 'Hmong' },
        { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
        { code: 'is', name: 'Icelandic', nativeName: 'Íslenska' },
        { code: 'ig', name: 'Igbo', nativeName: 'Igbo' },
        { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
        { code: 'ga', name: 'Irish', nativeName: 'Gaeilge' },
        { code: 'it', name: 'Italian', nativeName: 'Italiano' },
        { code: 'ja', name: 'Japanese', nativeName: '日本語' },
        { code: 'jw', name: 'Javanese', nativeName: 'Basa Jawa' },
        { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
        { code: 'kk', name: 'Kazakh', nativeName: 'Қазақ' },
        { code: 'km', name: 'Khmer', nativeName: 'ភាសាខ្មែរ' },
        { code: 'ko', name: 'Korean', nativeName: '한국어' },
        { code: 'ku', name: 'Kurdish', nativeName: 'Kurdî' },
        { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча' },
        { code: 'lo', name: 'Lao', nativeName: 'ລາວ' },
        { code: 'la', name: 'Latin', nativeName: 'Latina' },
        { code: 'lv', name: 'Latvian', nativeName: 'Latviešu' },
        { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
        { code: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergesch' },
        { code: 'mk', name: 'Macedonian', nativeName: 'Македонски' },
        { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy' },
        { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
        { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
        { code: 'mt', name: 'Maltese', nativeName: 'Malti' },
        { code: 'mi', name: 'Maori', nativeName: 'Māori' },
        { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
        { code: 'mn', name: 'Mongolian', nativeName: 'Монгол' },
        { code: 'my', name: 'Myanmar', nativeName: 'မြန်မာ' },
        { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
        { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
        { code: 'ps', name: 'Pashto', nativeName: 'پښتو' },
        { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
        { code: 'pl', name: 'Polish', nativeName: 'Polski' },
        { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
        { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
        { code: 'ro', name: 'Romanian', nativeName: 'Română' },
        { code: 'ru', name: 'Russian', nativeName: 'Русский' },
        { code: 'sm', name: 'Samoan', nativeName: 'Samoa' },
        { code: 'gd', name: 'Scots Gaelic', nativeName: 'Gàidhlig' },
        { code: 'sr', name: 'Serbian', nativeName: 'Српски' },
        { code: 'st', name: 'Sesotho', nativeName: 'Sesotho' },
        { code: 'sn', name: 'Shona', nativeName: 'Shona' },
        { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي' },
        { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' },
        { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina' },
        { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina' },
        { code: 'so', name: 'Somali', nativeName: 'Soomaali' },
        { code: 'es', name: 'Spanish', nativeName: 'Español' },
        { code: 'su', name: 'Sundanese', nativeName: 'Basa Sunda' },
        { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
        { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
        { code: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ' },
        { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
        { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
        { code: 'th', name: 'Thai', nativeName: 'ไทย' },
        { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
        { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
        { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
        { code: 'uz', name: 'Uzbek', nativeName: 'Oʻzbek' },
        { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
        { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg' },
        { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
        { code: 'yi', name: 'Yiddish', nativeName: 'ייִדיש' },
        { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
        { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
    ];

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
                    includedLanguages: languages.map(l => l.code).join(','),
                },
                'google_translate_element_hidden'
            );
        };

        addScript();

        // Hide Google Translate UI
        const style = document.createElement('style');
        style.innerHTML = `
      #google_translate_element_hidden {
        position: absolute;
        left: -9999px;
        top: -9999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      body {
        top: 0px !important;
      }
      .skiptranslate {
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

    const handleLanguageSelect = (langCode: string, langName: string) => {
        setSelectedLanguage(langName);
        setIsOpen(false);

        // Function to trigger translation
        const doTranslate = (retries = 0) => {
            const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;

            if (select) {
                select.value = langCode;
                select.dispatchEvent(new Event('change'));
            } else if (retries < 30) {
                // Retry for up to 15 seconds
                setTimeout(() => doTranslate(retries + 1), 500);
            }
        };

        // Start translation attempt
        setTimeout(() => doTranslate(), 100);
    };

    return (
        <>
            {/* Hidden Google Translate Element */}
            <div id="google_translate_element_hidden"></div>

            {/* Custom Language Selector */}
            <div className="relative z-[100]">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e9edf3] shadow-[4px_4px_8px_#cfd6e0,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff] transition-all duration-300 active:scale-95"
                    aria-label="Select Language"
                >
                    <Languages className="h-5 w-5 text-blue-600" />
                </button>

                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-[99]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown Menu */}
                        <div className="absolute top-12 right-0 bg-[#e9edf3] rounded-[20px] shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] border border-white/50 overflow-hidden z-[100] min-w-[280px] max-h-[400px] overflow-y-auto">
                            <div className="p-4 space-y-3">
                                {languages.map((lang, index) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageSelect(lang.code, lang.name)}
                                        className={`w-full text-left px-5 py-3 text-sm rounded-xl transition-all duration-300 ${index % 2 === 0
                                            ? 'bg-[#e9edf3] shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff] border border-white/40 hover:translate-y-[-2px]'
                                            : 'bg-[#e9edf3] shadow-[inset_5px_5px_10px_#cfd6e0,inset_-5px_-5px_10px_#ffffff] border border-transparent opacity-90 hover:opacity-100'
                                            } ${selectedLanguage === lang.name ? 'text-blue-600 font-bold border-blue-200' : 'text-slate-600 font-medium'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{lang.nativeName}</span>
                                            {selectedLanguage === lang.name && <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CustomLanguageSelector;
