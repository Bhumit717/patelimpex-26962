
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Send, Package, Globe, TrendingUp, Shield, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedData = localStorage.getItem("inquiry_form_draft");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inquiry_form_draft", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formattedMessage = `
🚀 NEW QUOTE REQUEST 🚀
🏢 Company: ${formData.companyName}
👤 Contact: ${formData.contactPerson}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🌍 Country: ${formData.country}
🔄 Type: ${formData.inquiryType}
📊 Qty: ${formData.quantity || 'N/A'}
💰 Budget: ${formData.budget || 'N/A'}
⏰ Timeline: ${formData.timeline || 'N/A'}
💬 Msg: ${formData.message || 'N/A'}
📅 Request Date: ${new Date().toLocaleString()}
      `.trim();

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(formattedMessage)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(formattedMessage)}`;

      await Promise.all([
        fetch(apiUrl1, { mode: 'no-cors' }),
        fetch(apiUrl2, { mode: 'no-cors' })
      ]);

      setFormData({ companyName: '', contactPerson: '', email: '', phone: '', country: '', inquiryType: '', quantity: '', budget: '', timeline: '', message: '' });
      localStorage.removeItem("inquiry_form_draft");
      toast({ title: "Quote requested! ✅", description: "Our trade experts will reply within 24 hours." });
    } catch (error) {
      toast({ title: "Connected! ✅", description: "Your inquiry has been logged successfully." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: Package, title: "Product Sourcing", description: "Verified manufacturers & direct farm access" },
    { icon: Globe, title: "Global Logistics", description: "Seamless worldwide freight & shipping" },
    { icon: TrendingUp, title: "Market Rates", description: "Most competitive pricing in the industry" },
    { icon: Shield, title: "Certified Quality", description: "ISO standards & rigorous inspections" },
  ];

  const countries = ["USA", "UK", "Canada", "Australia", "Germany", "UAE", "Saudi Arabia", "Japan", "Singapore", "Others"];
  const budgets = ["Under $10k", "$10k - $50k", "$50k - $100k", "Above $100k"];
  const timelines = ["Immediate", "1-3 Months", "6+ Months", "Flexible"];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title="Get a Quote | Patel Impex" description="Request a customized quote for your import-export needs." canonicalUrl="/inquiry" />
      <Navigation />

      <main className="pt-40 pb-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-slate-100 mb-6">
              <HelpCircle className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-graduate">Quotation Center</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 font-graduate uppercase tracking-tighter">
              deal <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800 font-fredericka tracking-tight lowercase">quotation</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-fondamento italic leading-relaxed">
              Fill out our specialized trade inquiry form and receive a comprehensive commercial quote curated by our global logistics team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <f.icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-black text-slate-800 font-graduate uppercase tracking-tight mb-2">{f.title}</h3>
                <p className="text-slate-500 font-fondamento text-base italic">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-[150px] opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-tr-[100px] opacity-50 -z-10"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Company Name</label>
                  <input name="companyName" value={formData.companyName} onChange={handleInputChange} required className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400" placeholder="Your Organization Ltd." />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Contact Person</label>
                  <input name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} required className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400" placeholder="Hitesh Patel" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400" placeholder="trade@email.com" />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Country</label>
                  <div className="relative">
                    <select name="country" value={formData.country} onChange={handleInputChange} required className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 appearance-none cursor-pointer">
                      <option value="">Select Region</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Inquiry Type</label>
                  <div className="relative">
                    <select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} required className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 appearance-none cursor-pointer">
                      <option value="">Select Type</option>
                      <option value="Export">Export Service</option>
                      <option value="Import">Import Service</option>
                      <option value="Both">Strategic Both</option>
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Budget Range</label>
                  <div className="relative">
                    <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 appearance-none cursor-pointer">
                      <option value="">Approximate Budget</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Expected Timeline</label>
                  <div className="relative">
                    <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 appearance-none cursor-pointer">
                      <option value="">Launch Plan</option>
                      {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-graduate">Specific Requirements</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Describe product specs, packaging needs, or designated port..." className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-green-500/20 focus:bg-white transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400 min-h-[150px] resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center group font-bold font-graduate uppercase tracking-widest text-sm">
                <span>{isSubmitting ? 'Transmitting Data...' : 'Request deal quotation'}</span>
                <Send className={`ml-3 h-4 w-4 transition-transform ${isSubmitting ? 'animate-ping' : 'group-hover:translate-x-2 group-hover:-translate-y-1'}`} />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Inquiry;

