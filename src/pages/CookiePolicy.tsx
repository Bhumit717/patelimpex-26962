import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Cookie, Settings, Eye, BarChart, Shield, Globe } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Patel Impex - How We Use Cookies</title>
        <meta name="description" content="Learn about Patel Impex cookie usage. Understand how we use cookies to improve your experience on our import export website." />
        <link rel="canonical" href="https://patelimpex.com/cookie-policy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Cookie className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                This policy explains how Patel Impex uses cookies and similar technologies to enhance your browsing experience.
              </p>
              <div className="text-sm text-slate-500 mt-4">
                Last updated: January 2024
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {/* What are Cookies */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Cookie className="h-8 w-8 text-orange-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">What Are Cookies?</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">
                      Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving site functionality.
                    </p>
                  </div>
                </div>

                {/* Types of Cookies */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Settings className="h-8 w-8 text-blue-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Types of Cookies We Use</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Shield className="h-6 w-6 text-green-600 mr-3" />
                        <h3 className="text-lg font-bold text-green-800">Essential Cookies</h3>
                      </div>
                      <p className="text-green-700 mb-2">These cookies are necessary for the website to function properly.</p>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Session management</li>
                        <li>• Security features</li>
                        <li>• Basic website functionality</li>
                      </ul>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <BarChart className="h-6 w-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-bold text-blue-800">Analytics Cookies</h3>
                      </div>
                      <p className="text-blue-700 mb-2">Help us understand how visitors interact with our website.</p>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Page view tracking</li>
                        <li>• User behavior analysis</li>
                      </ul>
                    </div>

                    {/* Functional Cookies */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Globe className="h-6 w-6 text-purple-600 mr-3" />
                        <h3 className="text-lg font-bold text-purple-800">Functional Cookies</h3>
                      </div>
                      <p className="text-purple-700 mb-2">Remember your preferences and provide enhanced features.</p>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Language preferences</li>
                        <li>• Location-based content</li>
                        <li>• Form data retention</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Third-Party Cookies */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-teal-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Third-Party Cookies</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">We may use third-party services that set cookies:</p>
                    <ul className="text-slate-600 space-y-2">
                      <li>• <strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                      <li>• <strong>WhatsApp:</strong> For customer chat functionality</li>
                      <li>• <strong>Location Services:</strong> To provide region-specific content</li>
                    </ul>
                  </div>
                </div>

                {/* Cookie Management */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Settings className="h-8 w-8 text-indigo-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Managing Your Cookie Preferences</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">You can manage cookies through:</p>
                    <ul className="text-slate-600 space-y-2 mb-6">
                      <li>• Browser settings - disable or enable cookies</li>
                      <li>• Clear existing cookies from your device</li>
                      <li>• Set preferences for specific websites</li>
                    </ul>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>Note:</strong> Disabling essential cookies may affect website functionality and your user experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Browser Instructions */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Browser Cookie Settings</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-slate-700 mb-3">Chrome</h3>
                      <p className="text-slate-600 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-700 mb-3">Firefox</h3>
                      <p className="text-slate-600 text-sm">Settings → Privacy & Security → Cookies and Site Data</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-700 mb-3">Safari</h3>
                      <p className="text-slate-600 text-sm">Preferences → Privacy → Cookies and website data</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-700 mb-3">Edge</h3>
                      <p className="text-slate-600 text-sm">Settings → Site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>

                {/* Updates */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Policy Updates</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600">
                      We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-slate-800 text-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Questions About Cookies?</h2>
                  <p className="text-slate-300 mb-6">
                    If you have questions about our cookie usage:
                  </p>
                  <div className="space-y-2 text-slate-300">
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