import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
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

      // Open email client
      window.location.href = `mailto:sales@patelimpex.com?subject=${subject}&body=${body}`;

      toast({
        title: "Quote Request Initiated",
        description: "Your email client should open with the quote details. If not, please email us directly at sales@patelimpex.com",
      });

      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request a Quote</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product */}
            <div className="space-y-2">
              <Label htmlFor="product">Product *</Label>
              <Input
                id="product"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                required
              />
            </div>

            {/* Variety */}
            <div className="space-y-2">
              <Label htmlFor="variety">Variety</Label>
              <Input
                id="variety"
                value={formData.variety}
                onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                placeholder="e.g., 1121 Golden Sella"
              />
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g., 100"
                required
              />
            </div>

            {/* Unit */}
            <div className="space-y-2">
              <Label htmlFor="unit">Unit *</Label>
              <Select
                value={formData.unit}
                onValueChange={(value) => setFormData({ ...formData, unit: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MT">Metric Tons (MT)</SelectItem>
                  <SelectItem value="KG">Kilograms (KG)</SelectItem>
                  <SelectItem value="LBS">Pounds (LBS)</SelectItem>
                  <SelectItem value="Containers">20ft Containers</SelectItem>
                  <SelectItem value="Containers40">40ft Containers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country">Destination Country *</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g., United States"
                required
              />
            </div>

            {/* Delivery Terms */}
            <div className="space-y-2">
              <Label htmlFor="deliveryTerms">Delivery Terms *</Label>
              <Select
                value={formData.deliveryTerms}
                onValueChange={(value) => setFormData({ ...formData, deliveryTerms: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select terms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FOB">FOB (Free on Board)</SelectItem>
                  <SelectItem value="CIF">CIF (Cost, Insurance & Freight)</SelectItem>
                  <SelectItem value="EXW">EXW (Ex Works)</SelectItem>
                  <SelectItem value="CFR">CFR (Cost and Freight)</SelectItem>
                  <SelectItem value="DDP">DDP (Delivered Duty Paid)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Contact Name */}
            <div className="space-y-2">
              <Label htmlFor="contactName">Your Name *</Label>
              <Input
                id="contactName"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 234 567 8900"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Requirements / Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please share any specific requirements, certifications needed, packaging preferences, etc."
              rows={4}
            />
          </div>

          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Request Quote"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
