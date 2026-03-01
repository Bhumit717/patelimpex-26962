import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Calendar, ChevronRight } from 'lucide-react';
import blogsData from '@/data/limeBlogs.json';

const OtherSiteBlog = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <SEOHead
                title="Other Site Blog | Patel Impex"
                description="Read the latest blogs from Lime Institute"
                canonicalUrl="/other-site-blog"
            />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 relative">
                    {/* Decorative background circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 font-graduate uppercase tracking-tight relative z-10">
                        Other Site <span className="text-green-600">Blogs</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-fondamento italic max-w-2xl mx-auto relative z-10">
                        Curated export-import insights and comprehensive training material from our partners at Lime Institute.
                    </p>
                </div>

                {blogsData && blogsData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogsData.map((post: any, idx: number) => (
                            <article
                                key={idx}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col transform hover:-translate-y-2"
                            >
                                <Link to={`/other-site-blog/${post.slug}`} className="block relative h-64 overflow-hidden bg-slate-900 inline-block">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586528116311-ad8ed7c50352?q=80&w=2070&auto=format&fit=crop";
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={"https://images.unsplash.com/photo-1586528116311-ad8ed7c50352?q=80&w=2070&auto=format&fit=crop"}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-80"
                                        />
                                    )}
                                    {/* Floating Date Badge */}
                                    <div className="absolute bottom-4 left-4 z-20 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold font-graduate flex items-center shadow-lg">
                                        <Calendar className="w-3 h-3 mr-1.5" />
                                        {post.date}
                                    </div>
                                </Link>

                                <div className="p-8 flex flex-col flex-grow relative bg-white">
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors font-graduate">
                                        <Link to={`/other-site-blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed font-sans text-sm md:text-base flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        to={`/other-site-blog/${post.slug}`}
                                        className="mt-auto inline-flex items-center text-sm font-black text-slate-800 uppercase tracking-[0.2em] font-graduate group-hover:text-green-600 border-b-2 border-transparent group-hover:border-green-600 pb-1 self-start transition-all"
                                    >
                                        Read Full Article
                                        <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent mx-auto mb-4"></div>
                        <p className="text-slate-500 font-fondamento text-lg italic">Fetching latest articles...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OtherSiteBlog;
