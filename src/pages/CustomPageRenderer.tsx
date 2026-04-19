
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { ChevronLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomPage {
    title: string;
    slug: string;
    content: string;
}

const CustomPageRenderer = () => {
    const { slug } = useParams<{ slug: string }>();
    const [page, setPage] = useState<CustomPage | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPage = async () => {
            if (!slug) return;
            try {
                const q = query(collection(db, "custom_pages"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    setPage(querySnapshot.docs[0].data() as CustomPage);
                } else {
                    setPage(null);
                }
            } catch (error) {
                console.error("Error fetching page:", error);
                setPage(null);
            } finally {
                setLoading(false);
            }
        };
        fetchPage();
    }, [slug]);

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

    if (!page) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navigation />
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-4xl font-bold text-slate-800 font-graduate">Page Not Found</h1>
                    <Link to="/">
                        <Button className="nm-btn">Back to Home</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={`${page.title} | Patel Impex`}
                description={page.content.replace(/<[^>]+>/g, '').substring(0, 160)}
                canonicalUrl={`/p/${slug}`}
            />
            <Navigation />

            <main className="pt-32 pb-20 animate-fade-in">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link to="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
                        <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <article>
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-800 mb-8 leading-tight font-graduate">
                                {page.title}
                            </h1>
                        </header>

                        <div className="space-y-8">
                            <div
                                className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed page-content-rendered"
                                dangerouslySetInnerHTML={{ __html: page.content }}
                            />

                            <style>{`
                                .page-content-rendered h1, .page-content-rendered h2, .page-content-rendered h3 { font-family: 'Graduate', serif; margin-top: 2rem; margin-bottom: 1rem; color: #1e293b; }
                                .page-content-rendered p { margin-bottom: 1.5rem; }
                                .page-content-rendered ul, .page-content-rendered ol { margin-left: 1.5rem; margin-bottom: 1.5rem; }
                                .page-content-rendered li { margin-bottom: 0.5rem; }
                                .page-content-rendered blockquote { border-left: 4px solid #cbd5e1; padding-left: 1rem; font-style: italic; }
                                .page-content-rendered img { border-radius: 0.75rem; margin-top: 2rem; margin-bottom: 2rem; max-width: 100%; }
                                .page-content-rendered iframe { max-width: 100%; border-radius: 0.75rem; }
                                .page-content-rendered pre { background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; overflow-x: auto; }
                                .page-content-rendered code { background: #f1f5f9; padding: 0.2em 0.4em; border-radius: 0.25rem; font-size: 0.875em; }
                                .page-content-rendered pre code { background: transparent; padding: 0; }
                            `}
                            </style>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CustomPageRenderer;
