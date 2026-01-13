import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Patel Impex - Legal Terms & Conditions</title>
        <meta name="description" content="Review Patel Impex terms of service. Legal terms and conditions for using our import export services, website, and business agreements." />
        <link rel="canonical" href="https://patelimpex.com/terms-of-service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <WhatsAppChat />
        
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-500 rounded-2xl flex items-center justify-center">
                  <Scale className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These terms govern your use of Patel Impex services. Please read carefully before engaging with our import/export services.
              </p>
              <div className="text-sm text-slate-500 mt-4">
                Effective from: January 2024
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {/* Acceptance of Terms */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Acceptance of Terms</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">
                      By accessing or using Patel Impex services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                    </p>
                  </div>
                </div>

                {/* Services Description */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-blue-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Our Services</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">Patel Impex provides:</p>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Import and export facilitation services</li>
                      <li>• International trade consultation</li>
                      <li>• Customs clearance assistance</li>
                      <li>• Documentation and compliance support</li>
                      <li>• Logistics and shipping coordination</li>
                      <li>• Market research and analysis</li>
                    </ul>
                  </div>
                </div>

                {/* User Responsibilities */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Shield className="h-8 w-8 text-purple-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">User Responsibilities</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">You agree to:</p>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Provide accurate and complete information</li>
                      <li>• Comply with all applicable laws and regulations</li>
                      <li>• Maintain the confidentiality of your account information</li>
                      <li>• Use our services for legitimate business purposes only</li>
                      <li>• Pay all fees and charges in accordance with agreed terms</li>
                    </ul>
                  </div>
                </div>

                {/* Payment Terms */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-teal-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Payment Terms</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <ul className="text-slate-600 space-y-2">
                      <li>• Fees are as quoted and agreed upon in writing</li>
                      <li>• Payment terms are typically net 30 days unless otherwise specified</li>
                      <li>• Late payment charges may apply for overdue accounts</li>
                      <li>• All prices are exclusive of applicable taxes</li>
                      <li>• Disputes must be raised within 30 days of invoice date</li>
                    </ul>
                  </div>
                </div>

                {/* Limitations */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-orange-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Limitations and Disclaimers</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <ul className="text-slate-600 space-y-2">
                      <li>• Services are provided "as is" without warranties</li>
                      <li>• We are not liable for delays due to customs, weather, or force majeure</li>
                      <li>• Client is responsible for product quality and compliance</li>
                      <li>• Maximum liability limited to service fees paid</li>
                      <li>• We reserve the right to refuse service for any reason</li>
                    </ul>
                  </div>
                </div>

                {/* Prohibited Uses */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-6">
                    <XCircle className="h-8 w-8 text-red-600 mr-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Prohibited Uses</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">You may not use our services for:</p>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Illegal activities or prohibited goods</li>
                      <li>• Fraudulent or deceptive practices</li>
                      <li>• Violating intellectual property rights</li>
                      <li>• Circumventing trade sanctions or embargos</li>
                      <li>• Activities that could harm our reputation</li>
                    </ul>
                  </div>
                </div>

                {/* Termination */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Termination</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-4">
                      Either party may terminate services with 30 days written notice. We may terminate immediately for breach of terms, non-payment, or illegal activities.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Governing Law</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600">
                      These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Gujarat, India.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-slate-800 text-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact for Legal Matters</h2>
                  <p className="text-slate-300 mb-6">
                    For any questions about these terms:
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p>Email: legal@patelimpex.com</p>
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

export default TermsOfService;