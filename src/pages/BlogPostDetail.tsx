
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
    content: string; // Single content field
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
                description={post.content.replace(/<[^>]+>/g, '').substring(0, 160)}
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
                    <div className="space-y-8">
                        {/* Main Content - Full HTML Rendering with embedded styles support */}
                        <div
                            className="prose prose-slate prose-lg max-w-none text-slate-600 leading-loose blog-content-rendered"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Base styles for blog content */}
                        <style>{`
                            .blog-content-rendered h1, .blog-content-rendered h2, .blog-content-rendered h3 { font-family: 'Graduate', serif; margin-top: 2rem; margin-bottom: 1rem; color: #1e293b; }
                            .blog-content-rendered p { margin-bottom: 1.5rem; }
                            .blog-content-rendered ul, .blog-content-rendered ol { margin-left: 1.5rem; margin-bottom: 1.5rem; }
                            .blog-content-rendered li { margin-bottom: 0.5rem; }
                            .blog-content-rendered blockquote { border-left: 4px solid #cbd5e1; padding-left: 1rem; font-style: italic; }
                            .blog-content-rendered img { border-radius: 0.75rem; margin-top: 2rem; margin-bottom: 2rem; max-width: 100%; }
                            .blog-content-rendered iframe { max-width: 100%; border-radius: 0.75rem; }
                            .blog-content-rendered pre { background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; overflow-x: auto; }
                            .blog-content-rendered code { background: #f1f5f9; padding: 0.2em 0.4em; border-radius: 0.25rem; font-size: 0.875em; }
                            .blog-content-rendered pre code { background: transparent; padding: 0; }
                        `}
                        </style>
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
                            <Button
                                size="icon"
                                variant="ghost"
                                className="nm-btn border-none !w-12 !h-12"
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: post.title,
                                            text: `Check out this article: ${post.title}`,
                                            url: window.location.href,
                                        }).catch(console.error);
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        // Simple alert or toast could be added here
                                        alert("Link copied to clipboard!");
                                    }
                                }}
                            >
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
