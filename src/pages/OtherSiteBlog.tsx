import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Calendar, ChevronRight } from 'lucide-react';

const OTHER_SITE_BLOGS = [
    {
        title: "Lime Blog - Import Export",
        excerpt: "Learn the fundamentals of international trade and how to start your export import business successfully.",
        date: "March 1, 2026",
        image: "https://limeinstitute.org/wp-content/uploads/2021/04/lime-institute-of-export-import-training.jpg",
        link: "https://limeinstitute.org/blog/"
    },
    {
        title: "Top 10 Export Products From India",
        excerpt: "Discover the most profitable products to export from India to international markets in 2026.",
        date: "February 25, 2026",
        image: "https://limeinstitute.org/wp-content/uploads/2022/01/Top-10-Export-Products-From-India.jpg",
        link: "https://limeinstitute.org/blog/top-10-export-products-from-india/"
    },
    {
        title: "How to Find Foreign Buyers",
        excerpt: "Effective strategies and tools for finding reliable buyers for your export business.",
        date: "February 20, 2026",
        image: "https://limeinstitute.org/wp-content/uploads/2021/05/how-to-find-foreign-buyers.jpg",
        link: "https://limeinstitute.org/blog/how-to-find-foreign-buyers/"
    },
    {
        title: "Export Documentation Required In India",
        excerpt: "A complete guide to all the mandatory documents needed for export clearance in India.",
        date: "February 15, 2026",
        image: "https://limeinstitute.org/wp-content/uploads/2021/06/Export-Documentation-Required-In-India.jpg",
        link: "https://limeinstitute.org/blog/export-documentation-required-in-india/"
    },
    {
        title: "Incoterms 2020 Explained",
        excerpt: "Understand the latest International Commercial Terms essential for global trade contracts.",
        date: "February 10, 2026",
        image: "https://limeinstitute.org/wp-content/uploads/2021/07/Incoterms-2020.jpg",
        link: "https://limeinstitute.org/blog/incoterms-2020/"
    },
    {
        title: "How To Calculate Export Pricing",
        excerpt: "Step-by-step guide on how to calculate accurate pricing for your export products.",
        date: "February 5, 2026",
        image: "https://limeinstitute.org/wp-content/uploads/2021/08/Export-Pricing.jpg",
        link: "https://limeinstitute.org/blog/how-to-calculate-export-pricing/"
    }
];

const OtherSiteBlog = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <SEOHead
                title="Other Site Blog | Patel Impex"
                description="Read the latest blogs from Lime Institute"
                canonicalUrl="/other-site-blog"
            />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-graduate uppercase tracking-tight">
                        Other Site <span className="text-green-600">Blogs</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-fondamento italic max-w-2xl mx-auto">
                        Curated export-import insights and training material from our partners at Lime Institute.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {OTHER_SITE_BLOGS.map((post, idx) => (
                        <article
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col"
                        >
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="block relative h-64 overflow-hidden bg-slate-200">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586528116311-ad8ed7c50352?q=80&w=2070&auto=format&fit=crop";
                                    }}
                                />
                            </a>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-green-600 font-medium mb-4 uppercase tracking-wider font-graduate">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {post.date}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-green-600 transition-colors">
                                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                                        {post.title}
                                    </a>
                                </h2>

                                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed font-mono text-sm flex-grow">
                                    {post.excerpt}
                                </p>

                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest font-graduate group-hover:text-green-600"
                                >
                                    Read More
                                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OtherSiteBlog;
