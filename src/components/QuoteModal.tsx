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
      const subject = encodeURIComponent(`Quote Request: ${formData.product}${formData.variety ? ` - ${formData.variety}` : ""}`);
      const body = encodeURIComponent(`
Product: ${formData.product}
Variety: ${formData.variety || "N/A"}
Quantity: ${formData.quantity} ${formData.unit}
Delivery Terms: ${formData.deliveryTerms}
Country: ${formData.country}

Contact Information:
Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
      `.trim());

      window.location.href = `mailto:sales@patelimpex.com?subject=${subject}&body=${body}`;

      toast({
        title: "Quote Request Initiated",
        description: "Your email client should open with the quote details.",
      });

      localStorage.removeItem("quote_form_draft");
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please use the contact form.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-transparent border-none shadow-none text-slate-800 p-0 max-w-none w-auto flex justify-center">
        <div className="nm-card w-full max-w-[600px] max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>

          <DialogTitle className="text-2xl font-bold text-center mb-6 text-slate-700">Request a Quote</DialogTitle>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="nm-field">
                <label className="nm-label">Product *</label>
                <input
                  className="nm-input"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  required
                />
              </div>

              <div className="nm-field">
                <label className="nm-label">Variety</label>
                <input
                  className="nm-input"
                  value={formData.variety}
                  onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                  placeholder="e.g., 1121 Golden Sella"
                />
              </div>

              <div className="nm-field">
                <label className="nm-label">Quantity *</label>
                <input
                  className="nm-input"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g., 100"
                  required
                />
              </div>

              <div className="nm-field">
                <label className="nm-label">Unit *</label>
                <select
                  className="nm-select"
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                >
                  <option value="MT">Metric Tons (MT)</option>
                  <option value="KG">Kilograms (KG)</option>
                  <option value="LBS">Pounds (LBS)</option>
                  <option value="Containers">20ft Containers</option>
                  <option value="Containers40">40ft Containers</option>
                </select>
              </div>

              <div className="nm-field">
                <label className="nm-label">Destination Country *</label>
                <input
                  className="nm-input"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g., United States"
                  required
                />
              </div>

              <div className="nm-field">
                <label className="nm-label">Delivery Terms *</label>
                <select
                  className="nm-select"
                  value={formData.deliveryTerms}
                  onChange={(e) => setFormData({ ...formData, deliveryTerms: e.target.value })}
                >
                  <option value="FOB">FOB (Free on Board)</option>
                  <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                  <option value="EXW">EXW (Ex Works)</option>
                  <option value="CFR">CFR (Cost and Freight)</option>
                  <option value="DDP">DDP (Delivered Duty Paid)</option>
                </select>
              </div>

              <div className="nm-field">
                <label className="nm-label">Your Name *</label>
                <input
                  className="nm-input"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  required
                />
              </div>

              <div className="nm-field">
                <label className="nm-label">Email *</label>
                <input
                  className="nm-input"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="nm-field md:col-span-2">
                <label className="nm-label">Phone Number *</label>
                <input
                  className="nm-input"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>
            </div>

            <div className="nm-field">
              <label className="nm-label">Additional Requirements</label>
              <textarea
                className="nm-textarea"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specific requirements, packaging, etc."
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button type="button" className="nm-btn nm-btn-secondary" onClick={onClose} style={{ width: '40%' }}>
                Cancel
              </button>
              <button type="submit" className="nm-btn" disabled={isSubmitting}>
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
