
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
    "SEO Services": [
      { name: "Organic Food Export", href: "/seo/organic-food-export" },
      { name: "Pharmaceutical Trade", href: "/seo/pharmaceutical-export" },
      { name: "Ocean Freight Logisics", href: "/seo/ocean-freight-services" },
      { name: "Air Cargo Solutions", href: "/seo/air-freight-services" },
      { name: "Handicrafts Export", href: "/seo/handicrafts-export-services" }
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
      { name: "Contact & Support", href: "/contact" },
      { name: "Trade Inquiry", href: "/inquiry" },
      { name: "Privacy & Terms", href: "/privacy-policy" }
    ]
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-24 text-slate-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-8 lg:col-span-1">
            <div>
              <Link to="/" className="text-3xl font-black text-slate-800 mb-6 block font-graduate uppercase">
                Patel<span className="font-fredericka text-slate-400">Impex</span>
              </Link>
              <p className="text-slate-500 leading-relaxed font-fondamento text-lg italic">
                Bridging Indian excellence with global markets through reliability and quality since 2010.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Rajkot, Gujarat, India" },
                { icon: Phone, text: "+91 (798) 41 33 417" },
                { icon: Mail, text: "info@patelimpex.com" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-slate-600">
                  <item.icon className="h-5 w-5 text-slate-400" />
                  <span className="font-medium text-sm font-graduate uppercase tracking-tighter">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links Mapping */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-8">
              <h4 className="text-sm font-bold text-slate-900 font-graduate uppercase tracking-widest">{title}</h4>
              <ul className="space-y-4">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} className="text-slate-500 hover:text-green-600 transition-colors flex items-center group font-fondamento text-lg">
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="space-y-8 lg:col-span-1">
            <h4 className="text-sm font-bold text-slate-900 font-graduate uppercase tracking-widest">Connect</h4>
            <p className="text-slate-500 font-fondamento text-lg italic">Subscribe for trade updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="nm-input w-full !py-4 px-6 text-sm font-graduate !rounded-xl"
              />
              <button type="submit" disabled={isSubmitting} className="nm-btn-dark w-full !py-4 font-bold uppercase tracking-widest font-graduate text-xs border-none !rounded-xl">
                {isSubmitting ? '...' : 'Subscribe'}
              </button>
            </form>
          </div>
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