import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ExternalLink, Globe, TrendingUp, Newspaper, RefreshCw, ChevronLeft, ChevronRight, Zap, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";

interface NewsArticle {
  id: string; // Changed from article_id
  title: string;
  content: string; // Changed from description
  image: string; // Changed from image_url
  date: string; // Changed from pubDate
  tags: string[]; // Added tags
}

// Get today's date for static news
const getDateString = (daysAgo: number = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
};

// Static fallback news for when API fails
const staticNews: NewsArticle[] = [
  {
    article_id: "1",
    title: "India's Agricultural Exports Reach Record High in 2025",
    link: "#",
    description: "India's agricultural exports have reached unprecedented levels, with spices and grains leading the growth. The country continues to strengthen its position as a major global exporter.",
    pubDate: getDateString(0), // Today
    source_id: "trade-news",
    source_name: "Trade News India",
    source_icon: null,
    image_url: null,
    category: ["trade", "agriculture"],
    country: ["india"],
    language: "en"
  },
  {
    article_id: "2",
    title: "Global Spice Trade Trends: What Exporters Need to Know in 2025",
    link: "#",
    description: "The global spice market is evolving with new consumer preferences and sustainability requirements. Key insights for exporters navigating these changes.",
    pubDate: getDateString(0), // Today
    source_id: "export-weekly",
    source_name: "Export Weekly",
    source_icon: null,
    image_url: null,
    category: ["spices", "export"],
    country: ["world"],
    language: "en"
  },
  {
    article_id: "3",
    title: "Rice Export Regulations Update for International Markets",
    link: "#",
    description: "New regulations affecting rice exports to key markets. Exporters must ensure compliance with updated quality standards and documentation requirements.",
    pubDate: getDateString(1), // Yesterday
    source_id: "agri-trade",
    source_name: "Agri Trade Journal",
    source_icon: null,
    image_url: null,
    category: ["rice", "regulations"],
    country: ["india"],
    language: "en"
  },
  {
    article_id: "4",
    title: "Groundnut Market Analysis: Growing Demand in Middle East",
    link: "#",
    description: "Middle Eastern markets show increasing demand for Indian groundnuts. Quality certifications and competitive pricing drive export growth.",
    pubDate: getDateString(1), // Yesterday
    source_id: "commodity-insider",
    source_name: "Commodity Insider",
    source_icon: null,
    image_url: null,
    category: ["groundnut", "market"],
    country: ["middle-east"],
    language: "en"
  },
  {
    article_id: "5",
    title: "Sustainable Packaging Trends in Agricultural Exports",
    link: "#",
    description: "Eco-friendly packaging solutions gaining traction in international agricultural trade. How exporters can adapt to meet growing sustainability demands.",
    pubDate: getDateString(2), // 2 days ago
    source_id: "green-trade",
    source_name: "Green Trade News",
    source_icon: null,
    image_url: null,
    category: ["sustainability", "packaging"],
    country: ["world"],
    language: "en"
  },
  {
    article_id: "6",
    title: "Cotton Export Quality Standards: A Comprehensive Guide",
    link: "#",
    description: "Understanding international quality standards for cotton exports. Essential certification and testing requirements for global markets.",
    pubDate: getDateString(3), // 3 days ago
    source_id: "textile-times",
    source_name: "Textile Times",
    source_icon: null,
    image_url: null,
    category: ["cotton", "quality"],
    country: ["india"],
    language: "en"
  }
];

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const q = query(collection(db, "news_articles"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as NewsArticle[];
      setArticles(newsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching news:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return "Recent";
    }
  };

  const paginatedNews = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  return (
    <>
      <SEOHead title="Company News | Patel Impex" description="Latest updates and announcements from Patel Impex." canonicalUrl="/news" />
      <Helmet>
        <title>Import Export News | Latest Trade Updates | Patel Impex</title>
        <meta name="description" content="Stay updated with the latest import export news, global trade updates, and international commerce insights. Real-time news for import export businesses." />
        <meta name="keywords" content="import export news, trade news, international trade, global commerce, export updates, import updates" />
        <link rel="canonical" href="https://patelimpex.com/news" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="relative overflow-hidden rounded-[30px] nm-bg shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] p-12 text-center border-4 border-[#e9edf3]">
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff] mb-6">
                <Zap className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-slate-600 text-sm font-medium">
                  Live Updates
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Trade News
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                Stay ahead with import export news and global trade insights
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff]">
                  <Newspaper className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">Latest Articles</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff]">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span className="text-slate-600">Global Coverage</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff]">
                  <TrendingUp className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-600">Trade Trends</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="nm-card p-0 overflow-hidden h-96">
                  <Skeleton className="h-48 w-full bg-slate-200" />
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4 bg-slate-200" />
                    <Skeleton className="h-4 w-full bg-slate-200" />
                    <Skeleton className="h-4 w-2/3 bg-slate-200" />
                  </CardContent>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedNews.map((article) => (
                  <div key={article.id} className="group block h-full">
                    <div className="h-full nm-card !p-0 overflow-hidden transition-all duration-500 hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden bg-slate-200">
                        {article.image ? (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                            <Newspaper className="h-16 w-16 text-slate-400" />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {article.tags?.slice(0, 2).map((tag, i) => (
                            <span key={i} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded capitalize shadow-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {article.content && (
                          <div
                            className="text-slate-500 text-sm line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: article.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..." }}
                          />
                        )}

                        <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                          <span className="text-blue-500 font-medium">
                            Patel Impex
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-16">
                  <Button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="nm-btn !w-10 !h-10 !p-0 flex items-center justify-center disabled:opacity-50"
                  >
                    <ChevronLeft className="h-4 w-4 text-slate-600" />
                  </Button>

                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-[10px] font-semibold transition-all duration-300 ${pageNum === currentPage
                            ? 'bg-white text-blue-600 shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff]'
                            : 'bg-white text-slate-500 shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff] hover:text-blue-600'
                            }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <Button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="nm-btn !w-10 !h-10 !p-0 flex items-center justify-center disabled:opacity-50"
                  >
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>
              )}

              {/* Refresh Button */}
              <div className="text-center mt-12">
                <Button
                  onClick={() => {
                    setLoading(true);
                    // The onSnapshot will automatically re-fire on data change or we can manually trigger a loading state reset if needed
                    // For now, let's just simulate a refresh by toggling loading
                    setTimeout(() => setLoading(false), 500);
                  }}
                  className="nm-btn !w-auto text-slate-700 hover:text-blue-600"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh News
                </Button>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default News;

