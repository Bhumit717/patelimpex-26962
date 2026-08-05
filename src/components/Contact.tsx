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
NEW CONTACT FORM SUBMISSION
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}
Submitted: ${new Date().toLocaleString()}
      `.trim();

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(formattedMessage)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(formattedMessage)}`;

      await Promise.all([
        fetch(apiUrl1, { mode: 'no-cors' }),
        fetch(apiUrl2, { mode: 'no-cors' })
      ]);

      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      toast({ title: "Enquiry sent", description: "Our team will contact you shortly." });
    } catch (error) {
      toast({ title: "Message logged", description: "Thank you for reaching out." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { title: "Headquarters", detail: "Veraval, Rajkot, Gujarat, India" },
    { title: "Global Sales", detail: "+91 798 41 33 417" },
    { title: "Email", detail: "info@patelimpex.com" },
    { title: "Hours", detail: "Mon – Fri, 9AM – 6PM IST" },
  ];

  return (
    <>
      {/* Partner CTA band */}
      <section className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] px-6 py-24 md:py-32 text-center">
        <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter italic mb-10">
          Partner with us.
        </h2>
        <a
          href="mailto:info@patelimpex.com"
          className="text-lg md:text-3xl font-light underline underline-offset-8 hover:opacity-50 transition-opacity duration-500"
        >
          info@patelimpex.com
        </a>
      </section>

      {/* Enquiry */}
      <section id="contact" className="section-rhythm bg-background">
        <div className="editorial-shell grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Index side */}
          <div className="lg:col-span-5">
            <span className="micro-label block mb-6">Enquiry</span>
            <h2 className="display-lg text-4xl md:text-5xl text-foreground mb-10">
              Let&apos;s do business
            </h2>

            <dl className="border-t border-border">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-baseline justify-between gap-6 py-5 border-b border-border"
                >
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {info.title}
                  </dt>
                  <dd className="text-sm md:text-base text-foreground text-right">{info.detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border border-border aspect-video overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0!2d70.8040941!3d22.1622576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835617fada2e3%3A0x7046141c800ddc54!2sPATEL%20IMPEX!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Patel Impex head office location"
              />
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-7 border border-border p-8 md:p-12">
            <h3 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-foreground mb-10">
              Business Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="nm-label" htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Rajesh" required className="nm-input" />
                </div>
                <div>
                  <label className="nm-label" htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Patel" required className="nm-input" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="nm-label" htmlFor="email">Work Email</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="rajesh@company.com" required className="nm-input" />
                </div>
                <div>
                  <label className="nm-label" htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 00000 00000" required className="nm-input" />
                </div>
              </div>

              <div>
                <label className="nm-label" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Commodity and destination market" required className="nm-input" />
              </div>

              <div>
                <label className="nm-label" htmlFor="message">Requirement</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Volume, packaging, specification, shipment window…" required className="nm-input h-32 resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="nm-btn-dark w-full !py-5">
                {isSubmitting ? 'Sending…' : 'Send export inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
