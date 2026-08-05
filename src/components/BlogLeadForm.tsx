
import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";

interface BlogLeadFormProps {
    onSuccess: () => void;
}

const BlogLeadForm = ({ onSuccess }: BlogLeadFormProps) => {
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        commodity: ""
    });

    useEffect(() => {
        const isCaptured = localStorage.getItem("blog_lead_captured");
        if (!isCaptured) {
            setIsOpen(true);
        } else {
            onSuccess();
        }
    }, [onSuccess]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const message = `
🌟 NEW BLOG LEAD 🌟
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}
📦 Interest: ${formData.commodity}

📅 Date: ${new Date().toLocaleString()}
📍 Source: Blog Access Gate
            `.trim();

            const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(message)}`;
            const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(message)}`;

            // Using no-cors as per existing pattern for CallMeBot
            await Promise.all([
                fetch(apiUrl1, { mode: 'no-cors' }),
                fetch(apiUrl2, { mode: 'no-cors' })
            ]);

            localStorage.setItem("blog_lead_captured", "true");
            toast({
                title: "Welcome to our Blog!",
                description: "Thank you for sharing your details. Enjoy the insights!",
            });
            setIsOpen(false);
            onSuccess();
        } catch (error) {
            console.error("Lead submission error:", error);
            // Fallback: still allow access if API fails to avoid blocking the user
            localStorage.setItem("blog_lead_captured", "true");
            setIsOpen(false);
            onSuccess();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={() => { }}>
            <DialogContent className="bg-card rounded-[40px] border-none  p-0 max-w-[500px] overflow-hidden">
                <div className="relative p-8 md:p-12">
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-secondary rounded-[30px] flex items-center justify-center mx-auto mb-6 shadow-inner">
                            <ShoppingBag className="text-accent-ink h-10 w-10" />
                        </div>
                        <DialogTitle className="text-3xl font-black text-foreground font-graduate uppercase tracking-tight mb-2">
                            Unlock <span className="text-accent-ink">Insights</span>
                        </DialogTitle>
                        <p className="text-muted-foreground font-fondamento italic">
                            Please provide your details to access our exclusive trade reports and industry insights.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent-ink transition-colors">
                                    <User size={18} />
                                </div>
                                <input
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-secondary border-2 border-transparent rounded-2xl focus:border-accent-ink/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent-ink transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    required
                                    type="email"
                                    className="w-full pl-12 pr-4 py-4 bg-secondary border-2 border-transparent rounded-2xl focus:border-accent-ink/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent-ink transition-colors">
                                    <Phone size={18} />
                                </div>
                                <input
                                    required
                                    type="tel"
                                    className="w-full pl-12 pr-4 py-4 bg-secondary border-2 border-transparent rounded-2xl focus:border-accent-ink/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                                    placeholder="Mobile Number"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent-ink transition-colors">
                                    <ShoppingBag size={18} />
                                </div>
                                <input
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-secondary border-2 border-transparent rounded-2xl focus:border-accent-ink/20 focus:bg-card transition-all outline-none font-semibold text-foreground placeholder:text-muted-foreground"
                                    placeholder="Commodity of Interest (e.g. Rice, Spices)"
                                    value={formData.commodity}
                                    onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 bg-accent-ink text-[hsl(var(--paper))] rounded-[20px]  hover: hover:-translate-y-1 active:translate-y-0 transition-all duration-300 font-black font-graduate uppercase tracking-widest text-sm flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <Loader2 className="animate-spin h-6 w-6" />
                            ) : (
                                <>
                                    <span>Access Blog</span>
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </button>

                        <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-graduate">
                            Secure Terminal • Patel Impex Privacy Policy
                        </p>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BlogLeadForm;
