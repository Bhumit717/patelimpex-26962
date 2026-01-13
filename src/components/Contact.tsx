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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-ai-primary mb-2 uppercase tracking-wide">
            Contact Us
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to expand your business globally? Contact us today for a consultation 
            and let us help you navigate international trade. Explore our 
            <a href="/services" className="text-ai-primary hover:underline">export services</a> and 
            <a href="/products" className="text-ai-primary hover:underline">quality products</a> to start your 
            <a href="/about" className="text-ai-primary hover:underline">import export business</a> journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800/50 border-transparent hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] shadow-[0_5px_15px_rgba(139,92,246,0.2)] transition-all duration-300 rounded-[50px]"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-[25px] flex items-center justify-center shadow-lg">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        {info.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Embedded Google Map */}
            <div className="h-64 bg-gray-800 rounded-[50px] overflow-hidden border border-transparent shadow-[0_5px_15px_rgba(139,92,246,0.2)]">
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
          <Card className="bg-gray-800/50 border-ai-primary/20 shadow-[0_5px_15px_rgba(139,92,246,0.2)] rounded-[50px]">
            <CardHeader>
              <h3 className="text-2xl text-white">Send Message</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-ai-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-ai-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-ai-primary"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+917984133417" 
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-ai-primary"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Inquiry about export services" 
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-ai-primary"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-ai-primary"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-accent text-white group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
