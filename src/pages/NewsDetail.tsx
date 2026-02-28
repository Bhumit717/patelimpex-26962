
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronLeft, Loader2, Share2, Tag, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

import NewsLeadForm from "@/components/NewsLeadForm";

interface NewsArticle {
    title: string;
    content: string;
    image: string;
    date: string;
    tags: string[];
    category: string;
}

const NewsDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<NewsArticle | null>(null);
    const [loading, setLoading] = useState(true);
    const [leadCaptured, setLeadCaptured] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!id) return;
            try {
                // First try getting by document ID
                const docRef = doc(db, "news_articles", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setArticle(docSnap.data() as NewsArticle);
                } else {
                    // If not found by ID, try querying by custom link field
                    const q = query(collection(db, "news_articles"), where("link", "==", id));
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        setArticle(querySnapshot.docs[0].data() as NewsArticle);
                    } else {
                        setArticle(null);
                    }
                }
            } catch (error) {
                console.error("Error fetching news article:", error);
                setArticle(null);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
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

    if (!article) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navigation />
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-4xl font-bold text-slate-800 uppercase font-graduate">Article Not Found</h1>
                    <Link to="/news">
                        <Button className="nm-btn">Back to News</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={`${article.title} | Patel Impex News`}
                description={article.content.replace(/<[^>]+>/g, '').substring(0, 160)}
                canonicalUrl={`/news/${id}`}
            />
            <Navigation />

            <NewsLeadForm onSuccess={() => setLeadCaptured(true)} />

            {leadCaptured && (
                <main className="pt-32 pb-20 animate-fade-in">
                    <div className="container mx-auto px-4 max-w-4xl mb-8">
                        <Link to="/news" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group uppercase font-graduate text-[10px] font-black tracking-widest">
                            <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to news center
                        </Link>

                        <article>
                            {/* Header */}
                            <header className="mb-12">
                                <div className="flex items-center space-x-6 text-[10px] font-black text-slate-400 uppercase tracking-widest font-graduate mb-6">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4 text-blue-500" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Newspaper className="h-4 w-4 text-blue-500" />
                                        <span>{article.category || 'Global Trade'}</span>
                                    </div>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-800 mb-8 leading-tight font-graduate uppercase">
                                    {article.title}
                                </h1>
                            </header>
                        </article>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full max-w-[900px] mx-auto px-4 mb-16">
                        <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group bg-slate-100">
                            {article.image ? (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Newspaper size={80} className="text-slate-200" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 max-w-4xl">
                        <article>
                            {/* Content */}
                            <div className="space-y-8">
                                <div
                                    className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed news-content-rendered font-fondamento text-xl"
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />

                                <style>{`
                            .news-content-rendered h1, .news-content-rendered h2, .news-content-rendered h3 { font-family: 'Graduate', serif; margin-top: 2rem; margin-bottom: 1rem; color: #1e293b; text-transform: uppercase; }
                            .news-content-rendered p { margin-bottom: 1.5rem; }
                            .news-content-rendered ul, .news-content-rendered ol { margin-left: 1.5rem; margin-bottom: 1.5rem; }
                            .news-content-rendered li { margin-bottom: 0.5rem; }
                            .news-content-rendered blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; font-style: italic; background: #f8fafc; padding: 1.5rem; border-radius: 0 1rem 1rem 0; }
                            .news-content-rendered img { border-radius: 2rem; margin-top: 2rem; margin-bottom: 2rem; max-width: 100%; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); }
                        `}
                                </style>
                            </div>

                            {/* Footer Meta */}
                            <footer className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="flex flex-wrap gap-2">
                                    {article.tags?.map(tag => (
                                        <span key={tag} className="flex items-center space-x-1 bg-slate-50 text-slate-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest font-graduate border border-slate-100">
                                            <Tag className="h-3 w-3" />
                                            <span>{tag}</span>
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-graduate">Broadcast Intel:</span>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="nm-btn border-none !w-12 !h-12"
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: article.title,
                                                    text: `Check out this trade update: ${article.title}`,
                                                    url: window.location.href,
                                                }).catch(console.error);
                                            } else {
                                                navigator.clipboard.writeText(window.location.href);
                                                alert("Link copied to clipboard!");
                                            }
                                        }}
                                    >
                                        <Share2 className="h-5 w-5 text-blue-600" />
                                    </Button>
                                </div>
                            </footer>
                        </article>
                    </div>
                </main>
            )}

            <Footer />
        </div>
    );
};

export default NewsDetail;
