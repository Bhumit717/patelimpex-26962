import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Shield, Lock, Eye, FileText, Users, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead title="Privacy Policy | Patel Impex" description="Our commitment to protecting your privacy and data." canonicalUrl="/privacy-policy" />
      <Helmet>
        <title>Privacy Policy | Patel Impex - Data Protection & Privacy Rights</title>
        <meta name="description" content="Read Patel Impex privacy policy. Learn how we protect your personal data, cookies usage, and your privacy rights for our import export services." />
        <link rel="canonical" href="https://patelimpex.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-accent-ink">
        <Navigation />
        <WhatsAppChat />

        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-accent-ink rounded-2xl flex items-center justify-center">
                  <Shield className="h-10 w-10 text-[hsl(var(--paper))]" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-accent-ink mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how Patel Impex collects, uses, and protects your information.
              </p>
              <div className="text-sm text-muted-foreground mt-4">
                Last updated: January 2024
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {/* Information Collection */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">
                      We collect information you provide directly to us, including:
                    </p>
                    <ul className="text-muted-foreground space-y-2 mb-6">
                      <li>• Contact information (name, email, phone number)</li>
                      <li>• Business details for trade inquiries</li>
                      <li>• Communication preferences</li>
                      <li>• Location data for service optimization</li>
                    </ul>
                  </div>
                </div>

                {/* How We Use Information */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Users className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <ul className="text-muted-foreground space-y-2">
                      <li>• To provide and improve our import/export services</li>
                      <li>• To communicate about your inquiries and orders</li>
                      <li>• To send relevant trade information and updates</li>
                      <li>• To analyze website usage and optimize user experience</li>
                      <li>• To comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                {/* Data Protection */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Lock className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">Data Protection</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">
                      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure servers and databases</li>
                      <li>• Limited access to personal information</li>
                      <li>• Regular security assessments</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">Cookies and Tracking</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar technologies to enhance your browsing experience:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Essential cookies for website functionality</li>
                      <li>• Analytics cookies to understand usage patterns</li>
                      <li>• Preference cookies to remember your settings</li>
                    </ul>
                  </div>
                </div>

                {/* Third Party Services */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Globe className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">
                      We may use third-party services for:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Analytics (Google Analytics)</li>
                      <li>• Communication tools (WhatsApp, Email)</li>
                      <li>• Location services for regional content</li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="bg-accent-ink rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">You have the right to:</p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Access your personal information</li>
                      <li>• Correct inaccurate data</li>
                      <li>• Request deletion of your data</li>
                      <li>• Opt-out of marketing communications</li>
                      <li>• File a complaint with supervisory authorities</li>
                    </ul>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
                  <p className="text-muted-foreground mb-6">
                    For any privacy-related questions or requests, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: privacy@patelimpex.com</p>
                    <p>Phone: +91 798 41 33 417</p>
                    <p>Address: Rajkot, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
