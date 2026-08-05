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
      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(messageText)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(messageText)}`;

      await Promise.all([
        fetch(apiUrl1, { method: 'GET', mode: 'no-cors' }),
        fetch(apiUrl2, { method: 'GET', mode: 'no-cors' })
      ]);

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
 "Commodities": [
      { name: "Basmati Rice Varieties", href: "/products/rice" },
      { name: "Wheat & Wheat Flour", href: "/products/wheat" },
      { name: "Groundnut / Peanuts", href: "/products/groundnut" },
      { name: "Psyllium Husk", href: "/products/psyllium-husk" },
      { name: "Cumin Seeds", href: "/products/cumin-seeds" }
    ],
 "Company": [
      { name: "About Patel Impex", href: "/about" },
      { name: "Global Services", href: "/services" },
      { name: "Blog & Updates", href: "/blog" },
      { name: "Contact & Support", href: "/contact" },
      { name: "Trade Inquiry", href: "/inquiry" }
    ],
 "Information": [
      { name: "Market Information", href: "/news" },
      { name: "FAQ", href: "/faq" },
      { name: "Sitemap", href: "/sitemap" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ]
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="editorial-shell py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand + bulletin */}
          <div>
            <Link
              to="/"
              className="font-display text-xl font-black uppercase tracking-[0.2em] text-foreground block mb-6"
            >
              Patel Impex
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Bridging Indian agricultural excellence with global markets through reliability,
              traceability and consistent quality.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <label className="nm-label" htmlFor="footer-email">Trade bulletin</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@company.com"
                required
                className="nm-input"
              />
              <button type="submit" disabled={isSubmitting} className="nm-btn w-full">
                {isSubmitting ? '…' : 'Subscribe'}
              </button>
            </form>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground border-b border-border pb-4 mb-6">
                {title}
              </h2>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href + link.name}>
                    <Link
                      to={link.href}
                      className="link-underline text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="editorial-shell py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © 2026 Patel Impex. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Veraval, Rajkot &bull; Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
