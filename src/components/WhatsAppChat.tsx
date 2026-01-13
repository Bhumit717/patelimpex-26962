
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+917984133417";
  const defaultMessage = "Hello! I'm interested in your import export business services. Could you please provide more information about your export company offerings?";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50" role="complementary" aria-label="WhatsApp contact widget">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce focus:ring-2 focus:ring-green-400 focus:outline-none"
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={isOpen}
          aria-controls="whatsapp-popup"
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div 
          id="whatsapp-popup" 
          className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)] animate-fade-in"
          role="dialog"
          aria-labelledby="whatsapp-title"
          aria-describedby="whatsapp-description"
        >
          <header className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center" aria-hidden="true">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="whatsapp-title" className="font-semibold">Patel Impex</h3>
                  <p className="text-sm opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors focus:ring-2 focus:ring-white/30 focus:outline-none rounded"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </header>
          
          <div className="p-4">
            <div id="whatsapp-description" className="bg-green-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-700 mb-2">
                👋 Hi there! Welcome to Patel Impex
              </p>
              <p className="text-sm text-gray-600">
                How can we help with your import export business needs today? Our export company specializes in global trade solutions.
              </p>
            </div>
            
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              aria-label="Start WhatsApp conversation with Patel Impex import export company"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Start WhatsApp Chat</span>
            </button>
            
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                We'll respond as soon as possible
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
