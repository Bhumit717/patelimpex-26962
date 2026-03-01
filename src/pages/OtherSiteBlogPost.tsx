import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import blogsData from '@/data/limeBlogs.json';

const OtherSiteBlogPost = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);

        // Find the specific blog
        const foundBlog = blogsData.find((b: any) => b.slug === slug);
        if (foundBlog) {
            setBlog(foundBlog);
        }
        setLoading(false);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
            </div>
        );
    }

    if (!blog) {
        return <Navigate to="/other-site-blog" replace />;
    }

    // Calculate reading time roughly
    const wordCount = blog.content ? blog.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length : 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-24">
            <SEOHead
                title={`${blog.title} | Lime Institute Blogs`}
                description={blog.excerpt || `Read ${blog.title} on Patel Impex.`}
                canonicalUrl={`/other-site-blog/${blog.slug}`}
            />

            {/* Article Header */}
            <div className="bg-white border-b border-slate-200 shadow-sm relative overflow-hidden">
                {/* Abstract background graphics */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 opacity-50 pointer-events-none" />

                <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
                    <Link
                        to="/other-site-blog"
                        className="inline-flex items-center text-sm font-bold text-slate-500 uppercase tracking-wider font-graduate hover:text-green-600 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to all blogs
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-graduate uppercase tracking-tight leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-600 font-fondamento text-lg italic">
                        <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-green-600" />
                            {blog.date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-green-600" />
                            {readTime} Min Read
                        </div>
                        <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                            Lime Institute Import Export
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl mt-12">
                <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative">

                    {/* Featured Image */}
                    {blog.image && (
                        <div className="w-full h-[400px] md:h-[500px] relative">
                            <div className="absolute inset-0 bg-slate-900/10 z-10 block" />
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586528116311-ad8ed7c50352?q=80&w=2070&auto=format&fit=crop";
                                }}
                            />
                        </div>
                    )}

                    {/* Article Body */}
                    <div className="p-8 md:p-12 lg:p-16">
                        <div
                            className="prose prose-lg md:prose-xl prose-slate max-w-none font-sans 
                prose-headings:font-graduate prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-slate-900
                prose-p:leading-relaxed prose-p:text-slate-600 prose-p:mb-6
                prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-md prose-img:mx-auto
                prose-strong:text-slate-800 prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:mb-2 prose-li:text-slate-600
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
                prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-lg prose-blockquote:py-2
                "
                            dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
                        />

                        {blog.originalUrl && (
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <p className="text-slate-500 italic font-fondamento text-center">
                                    This article was sourced from <a href={blog.originalUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline underline-offset-4 font-bold not-italic">Lime Institute Blog</a>.
                                </p>
                            </div>
                        )}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default OtherSiteBlogPost;
