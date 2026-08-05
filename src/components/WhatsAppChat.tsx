
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
          className="bg-accent-ink hover:bg-accent-ink text-[hsl(var(--paper))] p-4 transition-all duration-300 transform hover:scale-110 animate-bounce focus:ring-2 focus:ring-foreground focus:outline-none"
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
          className="fixed bottom-24 right-6 z-50 bg-card border border-border w-80 max-w-[calc(100vw-2rem)] animate-fade-in"
          role="dialog"
          aria-labelledby="whatsapp-title"
          aria-describedby="whatsapp-description"
        >
          <header className="bg-accent-ink text-[hsl(var(--paper))] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-card/20 flex items-center justify-center" aria-hidden="true">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="whatsapp-title" className="font-semibold">Patel Impex</h3>
                  <p className="text-sm opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[hsl(var(--paper))]/80 hover:text-[hsl(var(--paper))] transition-colors focus:ring-2 focus:ring-white/30 focus:outline-none rounded"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="p-4">
            <div id="whatsapp-description" className="bg-secondary p-3 mb-4">
              <p className="text-sm text-foreground mb-2">
                👋 Hi there! Welcome to Patel Impex
              </p>
              <p className="text-sm text-muted-foreground">
                How can we help with your import export business needs today? Our export company specializes in global trade solutions.
              </p>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full bg-accent-ink hover:bg-accent-ink text-[hsl(var(--paper))] py-3 px-4 font-medium transition-colors duration-200 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-foreground focus:outline-none"
              aria-label="Start WhatsApp conversation with Patel Impex import export company"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Start WhatsApp Chat</span>
            </button>

            <div className="mt-3 text-center">
              <p className="text-xs text-muted-foreground">
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

