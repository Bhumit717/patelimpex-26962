
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Clock, Target, Globe2, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2010", title: "Founded", desc: "Started with a vision to bridge Indian manufacturers with global markets" },
    { year: "2015", title: "ISO Certified", desc: "Achieved ISO 9001:2015 certification for quality management systems" },
    { year: "2018", title: "Global Expansion", desc: "Expanded operations to 30+ countries across 5 continents" },
    { year: "2023", title: "Digital Innovation", desc: "Launched AI-powered trade matching platform for faster connections" },
  ];

  const values = [
    { icon: Shield, title: "Trust & Transparency", desc: "Building lasting relationships through honest business practices" },
    { icon: TrendingUp, title: "Excellence", desc: "Committed to delivering superior results in every transaction" },
    { icon: Globe2, title: "Global Vision", desc: "Connecting cultures and economies across international borders" },
    { icon: Users, title: "Partnership", desc: "Your success is our success - we grow together" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 mb-6">
              About <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">Patel Impex</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering international trade solutions since 2010, connecting Indian excellence with global opportunities through innovative export-import services.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl font-bold text-slate-800">Our Journey</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2010 with a simple yet powerful vision: to make international trade accessible, transparent, and profitable for Indian businesses. Today, we're proud to be a trusted bridge between Indian manufacturers and global markets.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expertise spans across multiple industries including textiles, agricultural products, pharmaceuticals, engineering goods, and handicrafts. We've facilitated over $500 million in trade value and helped hundreds of businesses expand globally.
              </p>
              <div className="space-y-4">
                {[
                  "Expert knowledge of international trade regulations",
                  "Strong relationships with global buyers and suppliers",
                  "Comprehensive logistics and documentation support",
                  "24/7 customer service across all time zones"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Global business meeting - Patel Impex import export business team"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-black text-blue-600">$500M+</div>
                <div className="text-sm text-slate-600 font-medium">Trade Volume Facilitated</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">Our Milestones</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-black text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                    <p className="text-slate-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "1120+", label: "Global Clients", color: "text-blue-600" },
              { icon: Award, number: "15+", label: "Years Experience", color: "text-teal-600" },
              { icon: Globe2, number: "50+", label: "Countries Served", color: "text-blue-600" },
              { icon: Clock, number: "24/7", label: "Support Available", color: "text-teal-600" },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-4xl font-black text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
