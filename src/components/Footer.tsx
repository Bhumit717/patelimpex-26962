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
      await fetch(apiUrl, {
        method: 'GET',
        mode: 'no-cors'
      });
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
    "Products": [{
      name: "IR-64 Rice",
      href: "/more/rice-export"
    }, {
      name: "Cotton Export",
      href: "/seo/cotton-export-services"
    }, {
      name: "Soybean Meal",
      href: "/seo/soybean-export"
    }, {
      name: "Wheat Flour",
      href: "/seo/wheat-flour-export-services"
    }, {
      name: "Psyllium Husk",
      href: "/seo/psyllium-husk-export"
    }, {
      name: "All Products",
      href: "/products"
    }],
    "Markets": [{
      name: "USA Market Export",
      href: "/seo/usa-market-export"
    }, {
      name: "UK Market Export",
      href: "/seo/uk-market-export"
    }, {
      name: "UAE Market Export",
      href: "/seo/uae-market-export"
    }, {
      name: "Germany Market Export",
      href: "/seo/germany-market-export"
    }, {
      name: "Singapore Market Export",
      href: "/seo/singapore-market-export"
    }, {
      name: "All 67 Countries",
      href: "/seo"
    }],
    "Resources": [{
      name: "Export Import Guide",
      href: "/more/export-import-guide"
    }, {
      name: "Trade Finance",
      href: "/more/trade-finance"
    }, {
      name: "Export Documentation",
      href: "/more/export-documentation"
    }, {
      name: "Sea Freight",
      href: "/more/sea-freight"
    }, {
      name: "Quality Standards",
      href: "/more/quality-standards"
    }, {
      name: "All Resources",
      href: "/more"
    }],
    "Company": [{
      name: "About Us",
      href: "/about"
    }, {
      name: "Our Services",
      href: "/services"
    }, {
      name: "News",
      href: "/news"
    }, {
      name: "Contact Us",
      href: "/contact"
    }, {
      name: "Request Quote",
      href: "/inquiry"
    }, {
      name: "Sitemap",
      href: "/seo"
    }]
  };
  const socialLinks = [{
    icon: Facebook,
    href: "https://www.facebook.com/share/1GthjczpjL/",
    label: "Facebook",
    color: "hover:bg-blue-600"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/patel-impex-globalsourcing/",
    label: "LinkedIn",
    color: "hover:bg-blue-700"
  }, {
    icon: Instagram,
    href: "https://www.instagram.com/patel.impex?igsh=bHhsbGlzeDQ4eGt1",
    label: "Instagram",
    color: "hover:bg-pink-600"
  }];
  const certifications = ["ISO 9001:2015 Certified", "Export House Certificate", "FSSAI Licensed"];
  return <footer className="bg-[#e9edf3] text-slate-800 border-t border-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <Link to="/" className="text-3xl font-bold text-slate-800 mb-4 block hover:text-blue-600 transition-colors">
              Patel<span className="text-teal-600">Impex</span>
            </Link>
            <p className="text-slate-600 leading-relaxed text-lg">
              Your premier partner for international trade solutions. Connecting Indian excellence with global markets through expert export-import services since 2010.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff]">
                <MapPin className="h-4 w-4 text-teal-600" />
              </div>
              <span>Rajkot, Gujarat, India</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff]">
                <Phone className="h-4 w-4 text-teal-600" />
              </div>
              <span>+91 (798) 41 33 417</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff]">
                <Mail className="h-4 w-4 text-teal-600" />
              </div>
              <span>info@patelimpex.com</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff]">
                <Globe className="h-4 w-4 text-teal-600" />
              </div>
              <span>100+ Global Clients Worldwide</span>
            </div>
          </div>

          <div className="flex space-x-3">
            {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className={`w-12 h-12 bg-[#e9edf3] rounded-full flex items-center justify-center text-slate-600 shadow-[6px_6px_10px_#cfd6e0,-6px_-6px_10px_#ffffff] transition-all duration-300 hover:scale-110 active:shadow-[inset_4px_4px_8px_#cfd6e0,inset_-4px_-4px_8px_#ffffff] hover:text-blue-600`}>
              <social.icon className="h-5 w-5" />
            </a>)}
          </div>
        </div>

        {/* Footer Links */}
        {Object.entries(footerLinks).map(([title, links]) => <div key={title}>
          <h4 className="text-lg font-bold mb-6 text-slate-800">{title}</h4>
          <ul className="space-y-4">
            {links.map((link, index) => <li key={index}>
              <Link to={link.href} className="block w-full px-4 py-3 bg-[#e9edf3] rounded-xl shadow-[4px_4px_8px_#cfd6e0,-4px_-4px_8px_#ffffff] text-slate-600 text-sm font-medium hover:text-blue-600 transition-all hover:bg-white hover:shadow-[6px_6px_12px_#cfd6e0,-6px_-6px_12px_#ffffff] active:translate-y-[1px] active:shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff] flex items-center justify-between group">
                <span>{link.name}</span>
                <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-500" />
              </Link>
            </li>)}
          </ul>
        </div>)}
      </div>

      {/* Certifications */}
      <div className="border-t border-slate-300 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          <div className="text-center md:text-right w-full md:w-auto">
            <h4 className="text-lg font-bold mb-2 text-slate-800">Newsletter</h4>
            <p className="text-slate-600 mb-4">Get trade insights & opportunities</p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required className="nm-input !py-3 flex-1 md:w-64" />
              <button type="submit" disabled={isSubmitting} className="nm-btn !w-auto !px-6 text-sm">
                {isSubmitting ? '...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-300 mt-8 pt-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500">
            © 2026 Patel Impex , All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">Cookie Policy</Link>
            <Link to="/contact" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">Contact</Link>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-300">
          <p className="text-slate-400 text-sm">
            Designed for global trade excellence • Made in India 🇮🇳 • Serving the world 🌍
          </p>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;