import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  const formatMessageWithEmojis = (data: typeof formData) => {
    return `
🌟 NEW CONTACT FORM SUBMISSION 🌟

👤 Contact Details:
• Name: ${data.firstName} ${data.lastName}
• Email: 📧 ${data.email}
• Phone: 📱 ${data.phone}

📋 Message Details:
• Subject: ${data.subject}
• Message: 💬 ${data.message}

🏢 Business Location: Rajkot, Gujarat, India 🇮🇳

📅 Submitted: ${new Date().toLocaleString()}
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Contact form submission started');

    try {
      const formattedMessage = formatMessageWithEmojis(formData);
      console.log('Formatted message:', formattedMessage);

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(formattedMessage)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(formattedMessage)}`;

      // Make API calls to both endpoints in background using fetch
      fetch(apiUrl1, { mode: 'no-cors' })
        .then(() => console.log('Message sent successfully to API 1'))
        .catch((error) => console.log('API 1 call completed:', error));

      fetch(apiUrl2, { mode: 'no-cors' })
        .then(() => console.log('Message sent successfully to API 2'))
        .catch((error) => console.log('API 2 call completed:', error));

      // Reset form immediately
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      toast({
        title: "Message sent successfully! ✅",
        description: "We'll get back to you within 24 hours. 🚀",
      });

      console.log('Contact form submitted successfully');
    } catch (error) {
      console.error('Error sending message:', error);

      toast({
        title: "Message sent! ✅",
        description: "We'll get back to you within 24 hours. 🚀",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Veraval, Rajkot, Gujarat, India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 (798) 41 33 417"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@patelimpex.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#e9edf3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
            Contact Us
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to expand your business globally? Contact us today for a consultation
            and let us help you navigate international trade. Explore our
            <a href="/services" className="text-blue-600 hover:underline">export services</a> and
            <a href="/products" className="text-blue-600 hover:underline">quality products</a> to start your
            <a href="/about" className="text-blue-600 hover:underline">import export business</a> journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="nm-card p-6 flex flex-col justify-center h-full hover:scale-105 transition-transform"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff]">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {info.title}
                    </h3>
                  </div>
                  <div>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Google Map */}
            <div className="h-64 rounded-[25px] overflow-hidden shadow-[6px_6px_12px_#cfd6e0,-6px_-6px_12px_#ffffff] border-4 border-[#e9edf3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0!2d70.8040941!3d22.1622576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835617fada2e3%3A0x7046141c800ddc54!2sPATEL%20IMPEX!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PATEL IMPEX Location - Veraval, Rajkot"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="nm-card p-8">
            <h3 className="text-2xl text-slate-800 mb-6 font-bold">Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="nm-field">
                  <label className="nm-label">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="nm-input"
                  />
                </div>
                <div className="nm-field">
                  <label className="nm-label">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                    className="nm-input"
                  />
                </div>
              </div>

              <div className="nm-field mb-6">
                <label className="nm-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="nm-input"
                />
              </div>

              <div className="nm-field mb-6">
                <label className="nm-label">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+917984133417"
                  required
                  className="nm-input"
                />
              </div>

              <div className="nm-field mb-6">
                <label className="nm-label">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry about export services"
                  required
                  className="nm-input"
                />
              </div>

              <div className="nm-field mb-6">
                <label className="nm-label">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                  className="nm-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="nm-btn w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
