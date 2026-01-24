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
    href: "https://www.instagram.com/patel.impex?igsh=bHhsbGlzeDQ4eGt1",
    label: "LinkedIn",
    color: "hover:bg-blue-700"
  }, {
    icon: Instagram,
    href: "https://www.instagram.com/patel.impex?igsh=bHhsbGlzeDQ4eGt1",
    label: "Instagram",
    color: "hover:bg-pink-600"
  }];
  const certifications = ["ISO 9001:2015 Certified", "Export House Certificate", "FSSAI Licensed"];
  return <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <Link to="/" className="text-3xl font-bold text-white mb-4 block hover:text-blue-400 transition-colors">
              Patel<span className="text-teal-400">Impex</span>
            </Link>
            <p className="text-slate-300 leading-relaxed text-lg">
              Your premier partner for international trade solutions. Connecting Indian excellence with global markets through expert export-import services since 2010.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
              <MapPin className="h-5 w-5 text-teal-400" />
              <span>Rajkot, Gujarat, India</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
              <Phone className="h-5 w-5 text-teal-400" />
              <span>+91 (798) 41 33 417</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
              <Mail className="h-5 w-5 text-teal-400" />
              <span>info@patelimpex.com</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Globe className="h-5 w-5 text-teal-400" />
              <span>100+ Global Clients Worldwide</span>
            </div>
          </div>

          <div className="flex space-x-3">
            {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className={`w-12 h-12 bg-slate-700 rounded-[50px] flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
              <social.icon className="h-5 w-5" />
            </a>)}
          </div>
        </div>

        {/* Footer Links */}
        {Object.entries(footerLinks).map(([title, links]) => <div key={title}>
          <h4 className="text-lg font-bold mb-6 text-white">{title}</h4>
          <ul className="space-y-3">
            {links.map((link, index) => <li key={index}>
              <Link to={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                {link.name}
              </Link>
            </li>)}
          </ul>
        </div>)}
      </div>

      {/* Certifications */}
      <div className="border-t border-slate-700 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-2 text-white">Newsletter</h4>
            <p className="text-slate-300 mb-4">Get trade insights & opportunities</p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 flex-1 md:w-64 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
              <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-medium disabled:opacity-50">
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 mt-8 pt-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400">
            © 2026 Patel Impex , All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Cookie Policy</Link>
            <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Contact</Link>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-slate-500 text-sm">
            Designed for global trade excellence • Made in India 🇮🇳 • Serving the world 🌍
          </p>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;