import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Cookie, Settings, Eye, BarChart, Shield, Globe } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <SEOHead title="Cookie Policy | Patel Impex" description="Information about how we use cookies on our website." canonicalUrl="/cookie-policy" />
      <Helmet>
        <title>Cookie Policy | Patel Impex - How We Use Cookies</title>
        <meta name="description" content="Learn about Patel Impex cookie usage. Understand how we use cookies to improve your experience on our import export website." />
        <link rel="canonical" href="https://patelimpex.com/cookie-policy" />
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
                  <Cookie className="h-10 w-10 text-[hsl(var(--paper))]" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-accent-ink mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This policy explains how Patel Impex uses cookies and similar technologies to enhance your browsing experience.
              </p>
              <div className="text-sm text-muted-foreground mt-4">
                Last updated: January 2024
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {/* What are Cookies */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Cookie className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">What Are Cookies?</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">
                      Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving site functionality.
                    </p>
                  </div>
                </div>

                {/* Types of Cookies */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Settings className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">Types of Cookies We Use</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="bg-secondary border border-accent-ink rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Shield className="h-6 w-6 text-accent-ink mr-3" />
                        <h3 className="text-lg font-bold text-accent-ink">Essential Cookies</h3>
                      </div>
                      <p className="text-accent-ink mb-2">These cookies are necessary for the website to function properly.</p>
                      <ul className="text-accent-ink text-sm space-y-1">
                        <li>• Session management</li>
                        <li>• Security features</li>
                        <li>• Basic website functionality</li>
                      </ul>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-secondary border border-border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <BarChart className="h-6 w-6 text-accent-ink mr-3" />
                        <h3 className="text-lg font-bold text-accent-ink">Analytics Cookies</h3>
                      </div>
                      <p className="text-accent-ink mb-2">Help us understand how visitors interact with our website.</p>
                      <ul className="text-accent-ink text-sm space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Page view tracking</li>
                        <li>• User behavior analysis</li>
                      </ul>
                    </div>

                    {/* Functional Cookies */}
                    <div className="bg-secondary border border-border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Globe className="h-6 w-6 text-accent-ink mr-3" />
                        <h3 className="text-lg font-bold text-accent-ink">Functional Cookies</h3>
                      </div>
                      <p className="text-accent-ink mb-2">Remember your preferences and provide enhanced features.</p>
                      <ul className="text-accent-ink text-sm space-y-1">
                        <li>• Language preferences</li>
                        <li>• Location-based content</li>
                        <li>• Form data retention</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Third-Party Cookies */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">Third-Party Cookies</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">We may use third-party services that set cookies:</p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• <strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                      <li>• <strong>WhatsApp:</strong> For customer chat functionality</li>
                      <li>• <strong>Location Services:</strong> To provide region-specific content</li>
                    </ul>
                  </div>
                </div>

                {/* Cookie Management */}
                <div className="bg-card rounded-2xl p-8  border border-border">
                  <div className="flex items-center mb-6">
                    <Settings className="h-8 w-8 text-accent-ink mr-4" />
                    <h2 className="text-2xl font-bold text-foreground">Managing Your Cookie Preferences</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-4">You can manage cookies through:</p>
                    <ul className="text-muted-foreground space-y-2 mb-6">
                      <li>• Browser settings - disable or enable cookies</li>
                      <li>• Clear existing cookies from your device</li>
                      <li>• Set preferences for specific websites</li>
                    </ul>

                    <div className="bg-secondary border border-border rounded-lg p-4">
                      <p className="text-accent-ink text-sm">
                        <strong>Note:</strong> Disabling essential cookies may affect website functionality and your user experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Browser Instructions */}
                <div className="bg-accent-ink rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Browser Cookie Settings</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-foreground mb-3">Chrome</h3>
                      <p className="text-muted-foreground text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-3">Firefox</h3>
                      <p className="text-muted-foreground text-sm">Settings → Privacy & Security → Cookies and Site Data</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-3">Safari</h3>
                      <p className="text-muted-foreground text-sm">Preferences → Privacy → Cookies and website data</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-3">Edge</h3>
                      <p className="text-muted-foreground text-sm">Settings → Site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>

                {/* Updates */}
                <div className="bg-accent-ink rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Policy Updates</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground">
                      We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Questions About Cookies?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you have questions about our cookie usage:
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

export default CookiePolicy;
