
import { ArrowRight, TrendingUp, Globe, Shield, CheckCircle, Zap, Brain, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#e9edf3]" role="banner" aria-label="Patel Impex - Global Import Export Company Hero Section">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-96 h-96 bg-blue-200/20 rounded-full -top-48 -left-48 blur-3xl"></div>
        <div className="absolute w-64 h-64 bg-teal-200/20 rounded-full top-1/4 right-0 blur-3xl"></div>
        <div className="absolute w-32 h-32 bg-purple-200/20 rounded-full bottom-1/4 left-1/4 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Trust badge with better touch target */}
            <div className="inline-flex items-center px-6 py-3 bg-[#e9edf3] rounded-[50px] min-h-[44px] shadow-[6px_6px_12px_#cfd6e0,-6px_-6px_12px_#ffffff]" role="banner" aria-label="Trust indicator">
              <CheckCircle className="h-4 w-4 text-blue-600 mr-2" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-600">Trusted by 100+ Global Companies</span>
            </div>

            {/* Main heading - LCP optimized with fetchpriority */}
            <header className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-800 lcp-element" id="main-heading">
                <span className="block">
                  Leading Import Export Company
                </span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">
                  from India
                </span>
                <span className="block">
                  Global Trade Solutions
                </span>
              </h1>
            </header>

            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl" role="text" aria-describedby="main-heading">
              Your premier partner for seamless international trade solutions. We connect Indian manufacturers with global markets through expert import export business services, helping import and export businesses thrive globally.
            </p>

            {/* Key benefits with better spacing */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6" aria-label="Company benefits and certifications">
              {[
                { text: "15+ Years Export Excellence" },
                { text: "50+ Countries Served" },
                { text: "ISO 9001:2015 Certified" },
                { text: "24/7 Global Support" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-600 min-h-[32px]" role="listitem">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true"></div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </section>

            {/* Improved touch targets for navigation */}
            <nav className="flex flex-col sm:flex-row gap-6" aria-label="Primary action buttons">
              <Link to="/products" aria-label="View our import export products and services" className="inline-block">
                <Button size="lg" className="nm-btn !w-auto !px-8 text-slate-700 hover:text-blue-600 min-h-[48px] bg-[#e9edf3]" tabIndex={0}>
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/services" aria-label="Explore our import export services" className="inline-block">
                <Button variant="outline" size="lg" className="nm-btn !w-auto !px-8 text-slate-700 hover:text-blue-600 min-h-[48px] bg-[#e9edf3] hover:bg-white border-none" tabIndex={0}>
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/about" aria-label="Learn more about our import export company" className="inline-block">
                <Button variant="ghost" size="lg" className="nm-btn !w-auto !px-8 text-slate-700 hover:text-blue-600 min-h-[48px] bg-[#e9edf3] hover:bg-white" tabIndex={0}>
                  About Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
            </nav>

            {/* Stats with better spacing */}
            <section className="grid grid-cols-3 gap-8 pt-8" aria-label="Company statistics and achievements">
              {[
                { number: "100+", label: "Global Clients", description: "Import export businesses we've served" },
                { number: "15+", label: "Years Experience", description: "Years in import export business" },
                { number: "50+", label: "Countries Reached", description: "Countries served by our export company" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer min-h-[80px] p-4 nm-card hover:-translate-y-1 transition-transform" role="article" aria-label={`${stat.description}: ${stat.number}`} tabIndex={0}>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300" aria-label={`${stat.number} ${stat.label}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </section>
          </div>

          <section className="grid grid-cols-1 gap-6" aria-label="Key features and services">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Connect with markets across 50+ countries with our extensive import export business network",
              },
              {
                icon: Shield,
                title: "Secure Trading",
                desc: "100% compliant transactions with full documentation and insurance for all import export firms",
              },
            ].map((item, index) => (
              <article key={index} className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300" role="article" aria-label={`${item.title} service feature`} tabIndex={0}>
                <div className="nm-card p-8 min-h-[200px]">
                  <div className="w-16 h-16 rounded-[20px] bg-[#e9edf3] shadow-[inset_4px_4px_8px_#cfd6e0,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mb-6" aria-hidden="true">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
