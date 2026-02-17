
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Loader2, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
    title: string;
    intro: string;
    section1: string;
    section2: string;
    section3: string;
    section4: string;
    section5: string;
    conclusion?: string;
    image: string;
    date: string;
    tags: string[];
}

const BlogPostDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            try {
                const docRef = doc(db, "blog_posts", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setPost(docSnap.data() as BlogPost);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navigation />
                <div className="flex-1 flex items-center justify-center">
                    <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
                </div>
                <Footer />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navigation />
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-4xl font-bold text-slate-800">Post Not Found</h1>
                    <Link to="/blog">
                        <Button className="nm-btn">Back to Blog</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={`${post.title} | Patel Impex Blog`}
                description={post.intro.substring(0, 160)}
                canonicalUrl={`/blog/${id}`}
            />
            <Navigation />

            <main className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
                    <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all articles
                </Link>

                <article className="animate-fade-in">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>8 min read</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-8 leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    {/* Featured Image */}
                    <div className="aspect-video relative rounded-[40px] overflow-hidden shadow-2xl mb-16 border-8 border-white">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-12">
                        {/* Introduction */}
                        <div className="nm-card !p-12 !rounded-[40px] border-none bg-blue-50/30">
                            <p className="text-2xl font-fondamento text-slate-700 leading-relaxed italic">
                                {post.intro}
                            </p>
                        </div>

                        {/* Main Body - Structured Sections */}
                        <div className="space-y-16">
                            {[
                                { title: "The Global Spice Market Growth", content: post.section1 },
                                { title: "Why Indian Spices are Preferred", content: post.section2 },
                                { title: "Private Label Opportunities", content: post.section3 },
                                { title: "Risk-Free Trade & Logistics", content: post.section4 },
                                { title: "Partnering with Patel Impex", content: post.section5 }
                            ].map((section, idx) => (
                                <div key={idx} className="space-y-6">
                                    <h2 className="text-3xl font-black text-slate-800 font-graduate uppercase tracking-tight">
                                        {section.title}
                                    </h2>
                                    <div className="prose prose-slate prose-lg max-w-none">
                                        <p className="font-sans text-lg text-slate-600 leading-loose whitespace-pre-wrap">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Conclusion */}
                        {post.conclusion && (
                            <div className="mt-16 p-12 bg-slate-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-8 -translate-y-8" />
                                <h3 className="text-2xl font-black mb-6 font-graduate uppercase tracking-widest text-blue-400">Final Verdict</h3>
                                <p className="text-xl font-fondamento italic text-slate-300 leading-relaxed">
                                    {post.conclusion}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer Meta */}
                    <footer className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="flex flex-wrap gap-2">
                            {post.tags?.map(tag => (
                                <span key={tag} className="flex items-center space-x-1 bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
                                    <Tag className="h-3 w-3" />
                                    <span>{tag}</span>
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest font-graduate">Share this insight:</span>
                            <Button size="icon" variant="ghost" className="nm-btn border-none !w-12 !h-12">
                                <Share2 className="h-5 w-5 text-blue-600" />
                            </Button>
                        </div>
                    </footer>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPostDetail;
