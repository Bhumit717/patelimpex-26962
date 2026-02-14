
import { MapPin, Phone, Mail, Clock, Send, Globe, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
🌟 NEW CONTACT FORM SUBMISSION 🌟
👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📋 Subject: ${formData.subject}
💬 Message: ${formData.message}
📅 Submitted: ${new Date().toLocaleString()}
      `.trim();

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(formattedMessage)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(formattedMessage)}`;

      await Promise.all([
        fetch(apiUrl1, { mode: 'no-cors' }),
        fetch(apiUrl2, { mode: 'no-cors' })
      ]);

      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      toast({ title: "Enquiry Sent! ✅", description: "Our team will contact you shortly." });
    } catch (error) {
      toast({ title: "Message Logged! ✅", description: "Thank you for reaching out." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: "Headquarters", details: ["Veraval, Rajkot, Gujarat, India"], color: "text-green-600" },
    { icon: Phone, title: "Global Sales", details: ["+91 798 41 33 417"], color: "text-slate-800" },
    { icon: Mail, title: "Email Support", details: ["info@patelimpex.com"], color: "text-green-600" },
    { icon: Clock, title: "Operation Hours", details: ["Mon - Fri: 9AM - 6PM"], color: "text-slate-800" },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6">
            <MessageSquare className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-graduate">Enquiry Hub</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 font-graduate uppercase tracking-tighter">
            Let's do business <span className="text-green-600 font-fredericka tracking-tight lowercase">together</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-fondamento italic leading-relaxed">
            Ready to expand your borders? Our experts are here to facilitate your international trade journey with precision and care.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="nm-card !p-8 group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-inner border border-slate-100 group-hover:scale-110 transition-transform">
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-800 font-graduate uppercase tracking-tight mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-500 font-fondamento italic">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Preview */}
            <div className="nm-card !p-2 overflow-hidden aspect-video group">
              <div className="w-full h-full rounded-[25px] overflow-hidden transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0!2d70.8040941!3d22.1622576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835617fada2e3%3A0x7046141c800ddc54!2sPATEL%20IMPEX!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location"
                />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="nm-card !p-12 md:!p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[100px] opacity-50 -z-10"></div>

              <h3 className="text-3xl font-black text-slate-900 mb-10 font-graduate uppercase tracking-tighter flex items-center">
                Business <span className="text-green-600 ml-3">Inquiry Form</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="nm-label">First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="E.g. Rajesh" required className="nm-input w-full" />
                  </div>
                  <div className="space-y-2">
                    <label className="nm-label">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="E.g. Patel" required className="nm-input w-full" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="nm-label">Work Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="rajesh@company.com" required className="nm-input w-full" />
                  </div>
                  <div className="space-y-2">
                    <label className="nm-label">Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 00000 00000" required className="nm-input w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="nm-label">Subject</label>
                  <input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What is this inquiry about?" required className="nm-input w-full" />
                </div>

                <div className="space-y-2">
                  <label className="nm-label">How can we help?</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your requirements or products you are interested in..." required className="nm-input w-full h-32 resize-none" />
                </div>

                <button type="submit" disabled={isSubmitting} className="nm-btn-green w-full !py-6 group mt-4">
                  <span className="font-graduate uppercase tracking-[0.2em]">{isSubmitting ? 'Processing...' : 'Send Export Inquiry'}</span>
                  <Send className={`ml-4 h-4 w-4 transition-transform ${isSubmitting ? 'animate-ping' : 'group-hover:translate-x-2 group-hover:-translate-y-2'}`} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

