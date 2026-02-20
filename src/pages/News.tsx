import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { Calendar, ExternalLink, Globe, TrendingUp, Newspaper, RefreshCw, ChevronLeft, ChevronRight, Zap, Clock, Search, Filter, Bell, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
  category: string;
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
    id: "1",
    title: "India's Agricultural Exports Reach Record High in 2025",
    content: "India's agricultural exports have reached unprecedented levels, with spices and grains leading the growth. The country continues to strengthen its position as a major global exporter.",
    date: getDateString(0), // Today
    image: "",
    tags: ["trade", "agriculture"],
    category: "Global Trade"
  },
  {
    id: "2",
    title: "Global Spice Trade Trends: What Exporters Need to Know in 2025",
    content: "The global spice market is evolving with new consumer preferences and sustainability requirements. Key insights for exporters navigating these changes.",
    date: getDateString(0), // Today
    image: "",
    tags: ["spices", "export"],
    category: "Market Trends"
  }
];

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All News");
  const [email, setEmail] = useState("");

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

  const categories = [
    "All News", "Global Trade", "Industry News", "Company Updates", "Market Trends", "Export Alerts"
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All News" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.content || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const paginatedNews = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const message = `📧 NEWS NEWSLETTER SUBSCRIPTION 📧\n\n👤 New Subscriber:\n• Email: ${email}\n\n📝 Subscription Details:\n• Source: News Page Newsletter\n• Date: ${new Date().toLocaleString()}\n\n📍 Website: https://patelimpex.com/news`;

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(message)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(message)}`;

      fetch(apiUrl1, { mode: 'no-cors' });
      fetch(apiUrl2, { mode: 'no-cors' });

      alert(`Thank you for subscribing! You'll receive trade updates at: ${email}`);
      setEmail("");
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

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
        <section className="container mx-auto px-4 mb-20 relative z-10">
          <div className="relative overflow-hidden rounded-[40px] nm-bg shadow-[10px_10px_20px_#cfd6e0,-10px_-10px_20px_#ffffff] p-12 lg:p-20 text-center border-4 border-[#e9edf3]">
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff] mb-8">
                <Zap className="h-4 w-4 text-blue-600 mr-2 animate-pulse" />
                <span className="text-slate-600 text-sm font-black uppercase tracking-widest font-graduate">
                  Global Trade Pulse
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-slate-800 mb-8 leading-tight font-graduate">
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text">
                  Trade News
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-12 font-fondamento italic leading-relaxed">
                Navigating the complexities of international trade with precision and strategic depth.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search trade alerts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="nm-input !rounded-full pl-16 pr-6 py-5 w-full !text-lg font-graduate"
                  />
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-slate-400" />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 mt-12">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-3 rounded-full text-xs font-black font-graduate uppercase tracking-widest transition-all duration-300 ${selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-50 shadow-md'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
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
                  <Link key={article.id} to={`/news/${article.id}`} className="group block h-full">
                    <div className="h-full nm-card !p-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 border-none">
                      <div className="relative h-56 overflow-hidden bg-slate-200 aspect-[16/10]">
                        {article.image ? (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                            <Newspaper className="h-16 w-16 text-blue-300" />
                          </div>
                        )}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg font-graduate border border-white">
                            {article.category || 'Trade News'}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-8 space-y-6">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black font-graduate">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-blue-500" />
                            <span>{article.date}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight font-graduate uppercase">
                          {article.title}
                        </h3>

                        {article.content && (
                          <div
                            className="text-slate-500 text-sm line-clamp-3 font-fondamento leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: article.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..." }}
                          />
                        )}

                        <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {article.tags?.slice(0, 2).map((tag, i) => (
                              <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-400 text-[9px] font-black uppercase tracking-tighter rounded font-graduate">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-blue-600 font-black text-[10px] uppercase tracking-widest font-graduate group/link">
                            Expand <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-40 nm-card !rounded-[40px] border-4 border-dashed border-slate-100 bg-slate-50/30">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Search className="h-12 w-12 text-slate-200" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 font-graduate uppercase mb-4">No trade alerts found</h2>
                  <p className="text-slate-500 font-fondamento text-xl italic max-w-md mx-auto">
                    Adjust your parameters or search terms to uncover hidden market movements.
                  </p>
                </div>
              )}

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

        {/* Newsletter Section */}
        <section className="container mx-auto px-4 mt-32">
          <div className="nm-card !p-16 text-center relative overflow-hidden bg-white border-2 border-slate-100 shadow-2xl !rounded-[60px]">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-[20px] bg-blue-600 shadow-xl flex items-center justify-center mx-auto mb-8 rotate-3">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-black text-slate-800 mb-6 font-graduate uppercase tracking-tight">
                Market Intel <span className="text-blue-600">Network</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 font-fondamento italic leading-relaxed">
                Stay indexed on the latest trade shifts and regulatory updates with our direct pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter secure email terminal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="nm-input w-full sm:w-96 !rounded-2xl !p-5 font-graduate tracking-wide"
                />
                <Button
                  onClick={handleSubscribe}
                  className="nm-btn-dark !rounded-2xl !px-10 !py-5 font-black uppercase tracking-widest font-graduate flex items-center"
                >
                  Connect <Zap className="h-4 w-4 ml-2 fill-current" />
                </Button>
              </div>
              <p className="mt-8 text-[10px] text-slate-400 font-graduate uppercase tracking-[0.3em] font-black">
                Privacy Guaranteed • Selective Dissemination
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default News;

