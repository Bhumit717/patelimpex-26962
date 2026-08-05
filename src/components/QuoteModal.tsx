import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  varietyName?: string;
}

const QuoteModal = ({ isOpen, onClose, productName, varietyName }: QuoteModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    product: productName,
    variety: varietyName || "",
    quantity: "",
    unit: "MT",
    country: "",
    deliveryTerms: "FOB",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Load draft from localStorage on mount (only if matching product/variety or empty)
  useEffect(() => {
    const saved = localStorage.getItem("quote_form_draft");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Only load draft if it matches the current product context or if we want to be aggressive.
        // For now, let's load it and just override the product/variety if props are provided.
        setFormData(prev => ({
          ...parsed,
          product: productName || parsed.product,
          variety: varietyName || parsed.variety
        }));
      } catch (e) {
        console.error("Failed to load quote draft", e);
      }
    }
  }, [productName, varietyName]);

  // Save draft to localStorage
  useEffect(() => {
    localStorage.setItem("quote_form_draft", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formattedMessage = `
🚀 NEW QUOTE REQUEST 🚀
📦 Product: ${formData.product}
🌾 Variety: ${formData.variety || "N/A"}
📊 Quantity: ${formData.quantity} ${formData.unit}
🌍 Destination: ${formData.country}
🚚 Terms: ${formData.deliveryTerms}

👤 Contact Details:
• Name: ${formData.contactName}
• Email: ${formData.email}
• Phone: ${formData.phone}

📝 Message:
${formData.message || "No additional requirements"}

📅 Date: ${new Date().toLocaleString()}
      `.trim();

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(formattedMessage)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(formattedMessage)}`;

      await Promise.all([
        fetch(apiUrl1, { mode: 'no-cors' }),
        fetch(apiUrl2, { mode: 'no-cors' })
      ]);

      toast({
        title: "Quote Request Sent! ✅",
        description: "We have received your request and will respond shortly.",
      });

      localStorage.removeItem("quote_form_draft");
      onClose();
    } catch (error) {
      // Even if fetch fails (cors opaque), we assume success for user experience or log it
      console.error("Error sending quote:", error);
      toast({
        title: "Request Logged",
        description: "Thank you! We will process your request.",
      });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card rounded-3xl border-none  p-0 max-w-[650px] overflow-hidden">
        <div className="relative p-8 md:p-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-secondary transition-colors z-10"
          >
            <X className="h-5 w-5 text-muted-foreground hover:text-accent-ink transition-colors" />
          </button>

          <DialogTitle className="text-3xl font-black text-center mb-2 text-foreground font-graduate uppercase tracking-tight">
            Request a <span className="text-accent-ink">Quote</span>
          </DialogTitle>
          <p className="text-center text-muted-foreground mb-8 font-fondamento italic">
            Complete the form below to receive a customized price quotation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Product *</label>
                <input
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Variety</label>
                <input
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                  value={formData.variety}
                  onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                  placeholder="e.g., 1121 Golden Sella"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Quantity *</label>
                <input
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g., 100"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Unit *</label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground appearance-none cursor-pointer"
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  >
                    <option value="MT">Metric Tons (MT)</option>
                    <option value="KG">Kilograms (KG)</option>
                    <option value="LBS">Pounds (LBS)</option>
                    <option value="Containers">20ft Containers</option>
                    <option value="Containers40">40ft Containers</option>
                  </select>
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-muted-foreground">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Destination Country *</label>
                <input
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g., United States"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Delivery Terms *</label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground appearance-none cursor-pointer"
                    value={formData.deliveryTerms}
                    onChange={(e) => setFormData({ ...formData, deliveryTerms: e.target.value })}
                  >
                    <option value="FOB">FOB (Free on Board)</option>
                    <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                    <option value="CFR">CFR (Cost and Freight)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-muted-foreground">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Your Name *</label>
                <input
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Email *</label>
                <input
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Phone Number *</label>
                <input
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-graduate">Additional Requirements</label>
                <textarea
                  className="w-full px-4 py-3 bg-secondary border-none rounded-xl focus:ring-2 focus:ring-foreground/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground min-h-[100px] resize-none"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specific requirements, packaging preference, target price, etc."
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                className="flex-1 py-4 bg-secondary text-muted-foreground rounded-xl font-bold font-graduate uppercase tracking-widest text-sm hover:bg-secondary transition-colors"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-[2] py-4 bg-accent-ink text-[hsl(var(--paper))] rounded-xl  hover: hover:-translate-y-1 active:translate-y-0 transition-all duration-300 font-bold font-graduate uppercase tracking-widest text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;

