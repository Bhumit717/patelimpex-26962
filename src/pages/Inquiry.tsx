import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Send, Package, Globe, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    productCategory: '',
    inquiryType: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Load saved data from localStorage on mount
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

  // Save data to localStorage on change
  useEffect(() => {
    localStorage.setItem("inquiry_form_draft", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatQuoteRequestWithEmojis = (data: typeof formData) => {
    return `
🚀 NEW QUOTE REQUEST 🚀

🏢 Company Information:
• Company: ${data.companyName}
• Contact Person: 👤 ${data.contactPerson}
• Email: 📧 ${data.email}
• Phone: 📱 ${data.phone}
• Country: 🌍 ${data.country}

📦 Business Details:
• Product Category: ${data.productCategory}
• Inquiry Type: ${data.inquiryType}
• Quantity: 📊 ${data.quantity || 'Not specified'}
• Budget: 💰 ${data.budget || 'Not specified'}
• Timeline: ⏰ ${data.timeline || 'Not specified'}

💬 Additional Message:
${data.message || 'No additional message'}

🏢 Our Location: Rajkot, Gujarat, India 🇮🇳

📅 Quote Requested: ${new Date().toLocaleString()}

🎯 Priority: HIGH - Quote Request
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Quote form submission started');

    try {
      const formattedMessage = formatQuoteRequestWithEmojis(formData);
      console.log('Formatted quote request:', formattedMessage);

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(formattedMessage)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(formattedMessage)}`;

      // Make API calls to both endpoints in background using fetch
      fetch(apiUrl1, { mode: 'no-cors' })
        .then(() => console.log('Quote request sent successfully to API 1'))
        .catch((error) => console.log('API 1 call completed:', error));

      fetch(apiUrl2, { mode: 'no-cors' })
        .then(() => console.log('Quote request sent successfully to API 2'))
        .catch((error) => console.log('API 2 call completed:', error));

      // Reset form
      const initialFormState = {
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        productCategory: '',
        inquiryType: '',
        quantity: '',
        budget: '',
        timeline: '',
        message: ''
      };
      setFormData(initialFormState);
      localStorage.removeItem("inquiry_form_draft");

      toast({
        title: "Quote request sent successfully! ✅",
        description: "We'll provide you a detailed quote within 24 hours. 🚀",
      });

      console.log('Quote form submitted successfully');
    } catch (error) {
      console.error('Error sending quote request:', error);

      toast({
        title: "Quote request sent! ✅",
        description: "We'll provide you a detailed quote within 24 hours. 🚀",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Access to thousands of verified manufacturers and suppliers"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide shipping and logistics support"
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Best market rates with transparent pricing"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and inspection services"
    },
  ];

  const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", "France",
    "Netherlands", "Belgium", "Italy", "Spain", "Sweden", "Norway", "Denmark",
    "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Japan", "Singapore", "South Korea",
    "Malaysia", "Thailand", "Vietnam", "Bangladesh", "Sri Lanka", "Nepal", "Other"
  ];

  const productCategories = [
    "Textiles & Apparel", "Agricultural Products", "Chemicals & Pharmaceuticals",
    "Engineering Goods", "Electronics & IT", "Gems & Jewelry", "Leather Products",
    "Handicrafts", "Marine Products", "Plastic Products", "Sports Goods",
    "Medical Equipment", "Automotive Parts", "Home Textiles", "Spices & Food Products", "Other"
  ];

  const budgetRanges = [
    "Under $10,000", "$10,000 - $50,000", "$50,000 - $100,000",
    "$100,000 - $500,000", "$500,000 - $1,000,000", "Above $1,000,000", "Flexible"
  ];

  const timelines = [
    "Immediate (Within 2 weeks)", "1 Month", "2-3 Months",
    "3-6 Months", "6-12 Months", "Long Term (12+ Months)", "Flexible"
  ];

  return (
    <div className="min-h-screen bg-[#e9edf3]">
      <SEOHead title="Send Inquiry | Patel Impex" description="Send us your trade inquiry and get a quick quotation." canonicalUrl="/inquiry" />
      <Navigation />


      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 mb-6">
              Get Your Quote
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your import/export business? Fill out our detailed inquiry form and get a customized quote within 24 hours.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="nm-card p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Quote Form */}
          <div className="nm-card max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800">Request a Quote</h2>
              <p className="text-slate-600">Fill out the form below and we'll get back to you with a detailed quote</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="nm-field">
                  <label className="nm-label">Company Name *</label>
                  <input
                    className="nm-input"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    required
                  />
                </div>
                <div className="nm-field">
                  <label className="nm-label">Contact Person *</label>
                  <input
                    className="nm-input"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="nm-field">
                  <label className="nm-label">Email Address *</label>
                  <input
                    className="nm-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="nm-field">
                  <label className="nm-label">Phone Number *</label>
                  <input
                    className="nm-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="nm-field">
                  <label className="nm-label">Country *</label>
                  <select
                    className="nm-select"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="nm-field">
                  <label className="nm-label">Product Category *</label>
                  <select
                    className="nm-select"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {productCategories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="nm-field">
                  <label className="nm-label">Inquiry Type *</label>
                  <select
                    className="nm-select"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Import">Import</option>
                    <option value="Export">Export</option>
                    <option value="Both">Both Import & Export</option>
                  </select>
                </div>
                <div className="nm-field">
                  <label className="nm-label">Quantity Required</label>
                  <input
                    className="nm-input"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="1000 units, 10 tons, etc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="nm-field">
                  <label className="nm-label">Budget Range</label>
                  <select
                    className="nm-select"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
                <div className="nm-field">
                  <label className="nm-label">Timeline</label>
                  <select
                    className="nm-select"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="nm-field">
                <label className="nm-label">Additional Requirements</label>
                <textarea
                  className="nm-textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please provide any additional details..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="nm-btn"
              >
                {isSubmitting ? 'Sending Request...' : 'Get My Quote'}
                <Send className="ml-3 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Inquiry;
