import { CheckCircle, Users, Award, Clock, Target, Globe2, Brain, Zap, MessageCircle } from "lucide-react";

const About = () => {
  const features = [
    "15+ Years of Industry Excellence",
    "100+ Satisfied Global Clients", 
    "ISO Certified Quality Standards",
    "24/7 Customer Support Network",
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients", color: "text-ai-primary" },
    { icon: Award, number: "15+", label: "Years Experience", color: "text-ai-secondary" },
    { icon: Clock, number: "24/7", label: "Support Available", color: "text-ai-accent" },
    { icon: Globe2, number: "50+", label: "Countries Served", color: "text-ai-primary" },
  ];

  const openWhatsApp = () => {
    const phoneNumber = "917984133417";
    const message = "Hi, I am...";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* AI-themed background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ai-primary/10 rounded-full -translate-x-32 -translate-y-32 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ai-secondary/5 rounded-full translate-x-48 translate-y-48 animate-rotate-slow"></div>
      
      {/* Digital rain effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-16 bg-gradient-to-b from-ai-primary to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 group animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/80 border border-ai-primary/30 rounded-[50px] animate-neon-flicker">
                <Brain className="h-4 w-4 text-ai-primary mr-2 animate-sparkle-rotate" />
                 <span className="text-sm font-semibold text-ai-primary uppercase tracking-wide animate-ai-text-glow">
                   About Patel Impex
                 </span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight animate-fade-in">
                Leading
                <span className="block text-transparent bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text animate-text-shimmer bg-200%">
                  Export-Import
                </span>
                <span className="block animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-ai-primary">
                  Company
                </span>
              </h2>
              
               <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up">
                 Patel Impex has been at the forefront of international trade for over 15 years. 
                 We specialize in connecting <a href="/services" className="text-ai-primary hover:underline">import export businesses</a> across continents, facilitating smooth 
                 trade operations and ensuring quality <a href="/products" className="text-ai-primary hover:underline">export products</a> reach their destinations with 
                 complete reliability and trust. <a href="/contact" className="text-ai-primary hover:underline">Contact our export company</a> today.
               </p>
            </div>

            <div className="space-y-4 animate-slide-up">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group/item hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300 animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-ai-primary group-hover/item:scale-110 transition-transform duration-300 animate-circuit-pulse" />
                  </div>
                  <span className="text-gray-300 font-medium text-lg group-hover/item:text-ai-primary transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group/stat cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gray-800/50 rounded-[50px] p-6 shadow-[0_5px_15px_rgba(139,92,246,0.2)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)] transition-all duration-300 border border-ai-primary/20 hover:border-ai-primary/40">
                    <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4 group-hover/stat:scale-110 transition-transform duration-300`} />
                    <div className="text-3xl font-black text-white mb-2 group-hover/stat:text-ai-primary transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6 pt-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-ai-accent animate-wave" />
                <span className="text-gray-300 font-medium">Our Mission: Global Trade Excellence</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative overflow-hidden rounded-[50px] shadow-[0_5px_15px_rgba(139,92,246,0.2)] transform group-hover:scale-105 transition-all duration-700 border border-ai-primary/20">
              <img
                src="/lovable-uploads/388b7837-d349-4307-9ccb-6fe86933060f.png"
                alt="International shipping containers with various country flags"
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-ai-primary/20"></div>
            </div>
            
            {/* Floating achievement card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-ai-primary to-ai-secondary text-white p-8 rounded-[50px] shadow-[0_5px_15px_rgba(139,92,246,0.3)] transform hover:scale-105 transition-all duration-300 border-4 border-gray-800">
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <div className="text-4xl font-black mb-2">15+</div>
                <div className="text-sm font-semibold uppercase tracking-wide">Years of Excellence</div>
                <div className="w-12 h-1 bg-white/50 rounded-full mx-auto mt-3"></div>
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -top-6 -right-6 bg-gray-800/90 backdrop-blur-sm p-6 rounded-[50px] shadow-[0_5px_15px_rgba(139,92,246,0.2)] border border-ai-primary/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <Award className="h-8 w-8 text-ai-primary mx-auto mb-2" />
                <div className="text-xs font-bold text-white">ISO Certified</div>
                <div className="text-xs text-ai-primary">AI Enhanced</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-[50px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default About;
