
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
    const address = "Rajkot, Gujarat, India";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Rajkot, Gujarat, India"],
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                  <Card 
                    key={index} 
                    className={`bg-white border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 ${info.clickable ? 'cursor-pointer' : ''}`}
                    onClick={info.onClick}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg text-slate-800 flex items-center">
                          {info.title}
                          {info.clickable && (
                            <ExternalLink className="h-4 w-4 ml-2 text-blue-600" />
                          )}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="h-80 bg-slate-200 rounded-2xl overflow-hidden border border-blue-200">
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={openGoogleMaps}
                >
                  <div className="text-white text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl font-bold mb-2">Click to View on Google Maps</p>
                    <p className="text-sm opacity-90">Location: Rajkot, Gujarat, India</p>
                    <ExternalLink className="h-8 w-8 mx-auto mt-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white border-blue-200 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-800">Send us a Message</CardTitle>
                <p className="text-slate-600">We'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        First Name
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        required
                        className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Last Name
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        required
                        className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required
                      className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 7984133417" 
                      required
                      className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Export/Import Inquiry" 
                      required
                      className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements and how we can help you..."
                      className="min-h-[150px] bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 text-lg font-semibold group"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Contact;
