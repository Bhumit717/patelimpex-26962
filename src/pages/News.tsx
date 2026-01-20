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
  article_id: string;
  title: string;
  link: string;
  description: string | null;
  pubDate: string;
  source_id: string;
  source_name: string;
  source_icon: string | null;
  image_url: string | null;
  category: string[];
  country: string[];
  language: string;
}

interface NewsDataResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
  nextPage: string | null;
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
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usingFallback, setUsingFallback] = useState(false);

  const ITEMS_PER_PAGE = 9;
  const API_KEY = "pub_385a800beabd41d2b29aaf950325e31e";

  const loadStaticNews = () => {
    setArticles(staticNews);
    setUsingFallback(true);
    setLoading(false);
    setError(null);
  };

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=import%20export%20trade&language=en`,
        { signal: AbortSignal.timeout(10000) }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data: NewsDataResponse = await response.json();

      if (data.status === "success" && data.results && data.results.length > 0) {
        setArticles(data.results);
        setUsingFallback(false);
      } else {
        loadStaticNews();
      }
    } catch (err) {
      console.log("News API unavailable, using static content:", err);
      loadStaticNews();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
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

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 border border-white/10 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-teal-500/5" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
                <Zap className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">
                  {usingFallback ? "Industry Insights" : "Live Updates"}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Trade News
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Stay ahead with import export news and global trade insights
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Newspaper className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Latest Articles</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Globe className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Global Coverage</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <TrendingUp className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">Trade Trends</span>
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
                <Card key={i} className="bg-gray-800/50 border-gray-700 overflow-hidden">
                  <Skeleton className="h-48 w-full bg-gray-700" />
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4 bg-gray-700" />
                    <Skeleton className="h-4 w-full bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <Newspaper className="h-12 w-12 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Unable to Load News</h2>
              <p className="text-gray-400 mb-6">{error}</p>
              <Button onClick={loadStaticNews} className="bg-blue-600 hover:bg-blue-700">
                <RefreshCw className="h-4 w-4 mr-2" />
                Load Sample News
              </Button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedNews.map((article) => (
                  <a
                    key={article.article_id}
                    href={article.link}
                    target={article.link !== "#" ? "_blank" : undefined}
                    rel={article.link !== "#" ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <Card className="h-full bg-gray-800/50 border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                        {article.image_url ? (
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                            <Newspaper className="h-16 w-16 text-gray-500" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {article.category?.slice(0, 2).map((cat, i) => (
                            <span key={i} className="px-2 py-1 bg-blue-600/80 text-white text-xs font-semibold rounded capitalize">
                              {cat}
                            </span>
                          ))}
                        </div>
                        {article.link !== "#" && (
                          <div className="absolute top-3 right-3">
                            <ExternalLink className="h-5 w-5 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
                      </div>

                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {article.description && (
                          <p className="text-gray-400 text-sm line-clamp-3">
                            {article.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-700">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            <span>{formatDate(article.pubDate)}</span>
                          </div>
                          <span className="text-blue-400 font-medium">
                            {article.source_name || article.source_id}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-16">
                  <Button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${pageNum === currentPage
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
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
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Refresh Button */}
              <div className="text-center mt-12">
                <Button
                  onClick={fetchNews}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
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
