
import { ArrowRight, TrendingUp, Globe, Shield, CheckCircle, Zap, Brain, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900" role="banner" aria-label="Patel Impex - Global Import Export Company Hero Section">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-ai-primary/20 to-ai-secondary/20 rounded-full -top-48 -left-48"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-ai-accent/30 to-ai-primary/30 rounded-full top-1/4 right-0"></div>
        <div className="absolute w-32 h-32 bg-ai-secondary/40 rounded-full bottom-1/4 left-1/4"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Trust badge with better touch target */}
            <div className="inline-flex items-center px-6 py-3 bg-gray-800/80 border border-ai-primary/30 rounded-[50px] min-h-[44px]" role="banner" aria-label="Trust indicator">
              <CheckCircle className="h-4 w-4 text-ai-primary mr-2" aria-hidden="true" />
              <span className="text-sm font-medium text-ai-primary">Trusted by 100+ Global Companies</span>
            </div>

            {/* Main heading - LCP optimized with fetchpriority */}
            <header className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white lcp-element" id="main-heading">
                <span className="block">
                  Leading Import Export Company
                </span>
                <span className="block text-transparent bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text">
                  from India
                </span>
                <span className="block">
                  Global Trade Solutions
                </span>
              </h1>
            </header>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl" role="text" aria-describedby="main-heading">
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
                <div key={index} className="flex items-center space-x-3 text-gray-300 min-h-[32px]" role="listitem">
                  <div className="w-2 h-2 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full flex-shrink-0" aria-hidden="true"></div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </section>

            {/* Improved touch targets for navigation */}
            <nav className="flex flex-col sm:flex-row gap-6" aria-label="Primary action buttons">
              <Link to="/products" aria-label="View our import export products and services" className="inline-block">
                <Button size="lg" className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-accent text-white group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[48px] px-8" tabIndex={0}>
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/services" aria-label="Explore our import export services" className="inline-block">
                <Button variant="outline" size="lg" className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-white group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[48px] px-8" tabIndex={0}>
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/about" aria-label="Learn more about our import export company" className="inline-block">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[48px] px-8" tabIndex={0}>
                  About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
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
                <div key={index} className="text-center group cursor-pointer min-h-[80px] p-2 bg-gray-800/50 rounded-[50px] shadow-[0_5px_15px_rgba(139,92,246,0.2)]" role="article" aria-label={`${stat.description}: ${stat.number}`} tabIndex={0}>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-ai-primary transition-colors duration-300" aria-label={`${stat.number} ${stat.label}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
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
                color: "from-ai-primary to-ai-secondary",
                bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
              },
              {
                icon: Shield,
                title: "Secure Trading",
                desc: "100% compliant transactions with full documentation and insurance for all import export firms",
                color: "from-ai-accent to-ai-primary",
                bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
              },
            ].map((item, index) => (
              <article key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300" role="article" aria-label={`${item.title} service feature`} tabIndex={0}>
                <div className={`${item.bgColor} p-8 rounded-[50px] border border-ai-primary/20 hover:border-ai-primary/40 transition-all duration-300 shadow-[0_5px_15px_rgba(139,92,246,0.2)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] focus:ring-2 focus:ring-ai-primary focus:outline-none min-h-[200px]`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-[25px] flex items-center justify-center mb-6`} aria-hidden="true">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ai-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
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
