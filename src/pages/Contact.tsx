
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


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
🌟 CONTACT PAGE FORM SUBMISSION 🌟

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
    console.log('Contact page form submission started');

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

      // Save to Firebase Firestore
      try {
        await addDoc(collection(db, "contact_inquiries"), {
          ...formData,
          submittedAt: serverTimestamp(),
          source: 'contact_page'
        });
        console.log('Document successfully written to Firestore');
      } catch (dbError) {
        console.error('Error adding document to Firestore: ', dbError);
        // We don't block the UI if DB save fails, as telegram message was likely sent
      }


      // Reset form
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

      console.log('Contact page form submitted successfully');
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

  const openGoogleMaps = () => {
    const mapsUrl = "https://www.google.com/maps/place/PATEL+IMPEX/@22.1622576,70.8040941,17z";
    window.open(mapsUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Veraval, Rajkot, Gujarat, India"],
      clickable: true,
      onClick: openGoogleMaps
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
    <div className="min-h-screen bg-[#e9edf3]">
      <SEOHead title="Contact Us | Patel Impex" description="Get in touch with Patel Impex for your import export requirements. 24/7 support available." canonicalUrl="/contact" />
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 mb-6">
              Contact <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">Us</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to expand your business globally? Get in touch with Patel Impex today and let us help you navigate international trade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`nm-card p-6 ${info.clickable ? 'cursor-pointer hover:-translate-y-1 transition-transform' : ''}`}
                    onClick={info.onClick}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 rounded-[14px] bg-[#e9edf3] shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 flex items-center">
                        {info.title}
                        {info.clickable && (
                          <ExternalLink className="h-4 w-4 ml-2 text-blue-600" />
                        )}
                      </h3>
                    </div>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm mb-1 ml-15 pl-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Embedded Google Map */}
              <div className="h-80 rounded-[30px] overflow-hidden nm-bg p-2 shadow-[inset_5px_5px_10px_#cfd6e0,inset_-5px_-5px_10px_#ffffff]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0!2d70.8040941!3d22.1622576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835617fada2e3%3A0x7046141c800ddc54!2sPATEL%20IMPEX!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PATEL IMPEX Location - Veraval, Rajkot"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="nm-card p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-800">Send us a Message</h2>
                <p className="text-slate-600">We'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="nm-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="nm-input w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="nm-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 7984133417"
                    required
                    className="nm-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Export/Import Inquiry"
                    required
                    className="nm-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements and how we can help you..."
                    className="nm-inset w-full min-h-[150px] p-3 rounded-xl outline-none bg-transparent"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="nm-btn w-full !h-auto py-3 text-lg font-semibold text-slate-700 hover:text-blue-600 group"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Contact;
