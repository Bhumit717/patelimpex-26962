import { CheckCircle, Users, Award, Clock, Target, Globe2, Brain, Zap, MessageCircle } from "lucide-react";

const About = () => {
    const features = [
        "15+ Years of Industry Excellence",
        "100+ Satisfied Global Clients",
        "ISO Certified Quality Standards",
        "24/7 Customer Support Network",
    ];

    const stats = [
        { number: "100+", label: "Global Clients" },
        { number: "15+", label: "Years Experience" },
        { number: "50+", label: "Countries Reached" },
    ];

    const openWhatsApp = () => {
        const phoneNumber = "917984133417";
        const message = "Hi, I am...";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="about" className="py-24 bg-[#e9edf3] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 group animate-slide-in-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-[#e9edf3] border border-white/50 rounded-[50px] shadow-[6px_6px_12px_#cfd6e0,-6px_-6px_12px_#ffffff]">
                                <Brain className="h-4 w-4 text-slate-600 mr-2" />
                                <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                                    About Patel Impex
                                </span>
                            </div>

                            <h2 className="text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
                                Leading
                                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">
                                    Export-Import
                                </span>
                                <span className="block border-r-2 border-slate-800 text-slate-800">
                                    Company
                                </span>
                            </h2>

                            <p className="text-xl text-slate-600 leading-relaxed">
                                Patel Impex has been at the forefront of international trade for over 15 years.
                                We specialize in connecting <a href="/services" className="text-blue-600 hover:underline">import export businesses</a> across continents, facilitating smooth
                                trade operations and ensuring quality <a href="/products" className="text-blue-600 hover:underline">export products</a> reach their destinations with
                                complete reliability and trust. <a href="/contact" className="text-blue-600 hover:underline">Contact our export company</a> today.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="nm-card p-4 flex items-center space-x-4 transition-all duration-300 hover:scale-105">
                                    <div className="flex-shrink-0">
                                        <CheckCircle className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium text-lg">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group/stat cursor-pointer transform hover:scale-105 transition-all duration-300">
                                    <div className="nm-card py-8 px-2 flex flex-col items-center justify-center h-full rounded-[30px]">
                                        <div className="text-2xl lg:text-3xl font-black text-slate-800 mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs lg:text-sm text-slate-500 font-medium leading-tight px-1">
                                            {stat.label.split(' ').map((word, i) => (
                                                <span key={i} className="block">{word}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6 pt-6">
                            <div className="flex items-center space-x-2">
                                <Target className="h-5 w-5 text-teal-600" />
                                <span className="text-slate-600 font-medium">Our Mission: Global Trade Excellence</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="relative overflow-hidden rounded-[50px] shadow-[15px_15px_30px_#cfd6e0,-15px_-15px_30px_#ffffff] transform group-hover:scale-105 transition-all duration-700 border-8 border-[#e9edf3]">
                            <img
                                src="/lovable-uploads/388b7837-d349-4307-9ccb-6fe86933060f.png"
                                alt="Patel Impex - Rooted in Values, Growing with Humanity"
                                className="w-full h-[600px] object-cover transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div >
            </div >

            {/* WhatsApp Chat Button */}
            < div className="fixed bottom-6 right-6 z-50" >
                <button
                    onClick={openWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="h-6 w-6" />
                </button>
            </div >
        </section >
    );
};

export default About;
