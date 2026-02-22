
import { Target, ShieldCheck, Award, MessageCircle, Anchor, Globe, Users } from "lucide-react";
import qualityControlLabImg from "@/assets/quality-control-lab.jpg";

const About = () => {
    const values = [
        { title: "Our Mission", desc: "To provide the essence of agro resources with uncompromising quality.", icon: Target },
        { title: "Quality First", desc: "Rigorous inspection and standards for every single shipment.", icon: ShieldCheck },
        { title: "Global Reach", desc: "Connecting local farmers to the most demanding world markets.", icon: Globe },
        { title: "Customer Centric", desc: "Building long-term trust through transparency and reliability.", icon: Users },
    ];

    const openWhatsApp = () => {
        window.open(`https://wa.me/917984133417?text=${encodeURIComponent("Hi, I want to learn more about Patel Impex...")}`, '_blank');
    };

    return (
        <section id="about" className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
                    <div className="flex justify-center mb-8">
                        <div className="px-6 py-2 rounded-full bg-green-50 border border-green-100 text-green-600 font-graduate text-xs uppercase tracking-[0.2em] font-bold">
                            About Us
                        </div>
                    </div>
                    <h2 className="font-fredericka text-5xl md:text-8xl text-green-600 lowercase mb-8 leading-tight">
                        the essence of <br />
                        <span className="text-slate-900 font-graduate uppercase text-4xl md:text-7xl">agro resources</span>
                    </h2>
                    <p className="font-fondamento text-2xl md:text-3xl text-slate-500 italic max-w-2xl mx-auto leading-relaxed">
                        Patel Impex is India's leading bridge between agricultural heritage and global modern demand.
                    </p>
                </div>


                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-32">
                    {/* Story Side */}
                    <div className="space-y-12">
                        <div className="nm-card !p-12 border-none">
                            <h3 className="font-graduate text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Established Legacy</h3>
                            <div className="font-fondamento text-xl text-slate-600 italic space-y-6 leading-relaxed">
                                <p>
                                    Based in the heart of Gujarat's trade hub, Patel Impex has evolved from a local visionary project into a global export leader. We don't just trade commodities; we export the pride of Indian soil.
                                </p>
                                <p>
                                    Our expertise spans across pulses, spices, and premium grains, ensuring that every container carrying the Patel Impex seal meets international benchmarks of purity.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="nm-card-dark !p-8 flex flex-col items-center text-center bg-green-600">
                                <Award className="h-10 w-10 text-white mb-4" />
                                <span className="font-graduate text-3xl font-black text-white">15+ YRS</span>
                                <span className="text-[10px] font-bold text-green-100 uppercase tracking-widest mt-1">Trade Experience</span>
                            </div>
                            <div className="nm-card-dark !p-8 flex flex-col items-center text-center bg-slate-900">
                                <Anchor className="h-10 w-10 text-green-500 mb-4" />
                                <span className="font-graduate text-3xl font-black text-white">50+ Countries</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global Destinations</span>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Side */}
                    <div className="relative">
                        <div className="nm-card !p-4 !rounded-[60px] overflow-hidden group shadow-2xl">
                            <img
                                src={qualityControlLabImg}
                                alt="Quality Inspection"
                                className="w-full h-full object-cover rounded-[50px] aspect-[4/5] md:aspect-[3/4] group-hover:scale-105 transition-transform duration-[3s]"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-12 left-12 w-32 h-32 rounded-full glass-card flex items-center justify-center animate-float">
                                <div className="text-center">
                                    <span className="block font-graduate text-2xl font-black text-slate-900">100%</span>
                                    <span className="block font-fondamento text-xs italic text-slate-500">Pure Organic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="nm-card !p-10 border-none transition-all hover:-translate-y-2 group">
                            <v.icon className="h-8 w-8 text-green-600 mb-6 group-hover:scale-125 transition-transform" />
                            <h4 className="font-graduate text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{v.title}</h4>
                            <p className="font-fondamento text-base text-slate-500 italic leading-snug">{v.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-32 text-center">
                    <button
                        onClick={openWhatsApp}
                        className="nm-btn-green border-none !py-8 !px-16 !text-white font-graduate font-bold uppercase tracking-[0.3em] text-sm group shadow-2xl"
                    >
                        <MessageCircle className="h-5 w-5 mr-4 group-hover:rotate-12 transition-transform" />
                        Explore Our Expertise
                    </button>
                </div>
            </div>

            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white -z-10 skew-x-12 translate-x-1/2"></div>
        </section>
    );
};

export default About;

