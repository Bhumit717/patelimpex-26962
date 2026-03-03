
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      const messageText = `Newsletter Subscription: ${email}`;
      const apiUrl = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(messageText)}`;
      await fetch(apiUrl, { method: 'GET', mode: 'no-cors' });
      setEmail('');
      alert('Newsletter subscription successful!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = {
    "Products": [
      { name: "IR-64 Rice Varieties", href: "/more/basmati-rice-export" },
      { name: "Cotton & Textiles", href: "/products/cotton" },
      { name: "Soybean & Meals", href: "/products/soybeans" },
      { name: "Groundnut / Peanuts", href: "/products/groundnut" },
      { name: "Psyllium Products", href: "/products/psyllium-husk" }
    ],

    "Regional Trade": [
      { name: "European Markets", href: "/more/european-markets" },
      { name: "African Trade Guide", href: "/more/african-markets" },
      { name: "Middle East Logistics", href: "/more/middle-east-markets" },
      { name: "USA Market Entry", href: "/seo/usa-market-export" },
      { name: "Asian Market Reach", href: "/more/asian-markets" }
    ],
    "Company": [
      { name: "About Patel Impex", href: "/about" },
      { name: "Global Services", href: "/services" },
      { name: "Blog & Updates", href: "/blog" },
      { name: "Contact & Support", href: "/contact" },
      { name: "Trade Inquiry", href: "/inquiry" },
      { name: "Admin Terminal", href: "/admin" },
      { name: "Privacy & Terms", href: "/privacy-policy" },
      { name: "More", href: "/more" }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-24 text-slate-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Newsletter */}
          <div className="space-y-12 lg:col-span-1">
            <div>
              <Link to="/" className="text-3xl font-black text-slate-800 mb-6 block font-graduate uppercase">
                Patel<span className="font-fredericka text-slate-400">Impex</span>
              </Link>
              <p className="text-slate-500 leading-relaxed font-fondamento text-lg italic">
                Bridging Indian excellence with global markets through reliability and quality since 2010.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6">Stay Connected</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Intelligence Bulletin"
                  required
                  className="nm-input w-full !py-3 px-4 text-xs font-graduate"
                />
                <button type="submit" disabled={isSubmitting} className="nm-btn-dark w-full !py-3 font-bold uppercase tracking-widest font-graduate text-[10px] border-none">
                  {isSubmitting ? '...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links Mapping (3 Columns) */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-8">
              <h4 className="text-xs font-black text-slate-900 font-graduate uppercase tracking-widest border-b border-slate-100 pb-4">{title}</h4>
              <ul className="space-y-4">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} className="text-slate-500 hover:text-green-600 transition-colors flex items-center group font-fondamento text-lg">
                      <ArrowRight className="h-4 w-4 mr-2 translate-x-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                      <span className="group-hover:translate-x-1 transition-transform duration-500">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 font-fondamento text-sm italic">
            © 2026 <span className="text-slate-600 font-bold not-italic">Patel Impex</span>. Connecting Resources Globally.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
