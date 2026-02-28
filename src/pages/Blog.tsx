import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, Search, Filter, Bell, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import BlogLeadForm from "@/components/BlogLeadForm";

interface BlogPost {
  id: string;
  title: string;
  content: string; // Changed from intro to content
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  link?: string; // Custom URL / slug from admin
}

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [pendingPostId, setPendingPostId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const q = query(collection(db, "blog_posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching blog posts:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const keywords = useMemo(() => {
    // Collect all tags (keywords) used in posts
    const tagCounts: Record<string, number> = {};
    posts.forEach(post => {
      post.tags?.forEach(tag => {
        const normalized = tag.trim();
        tagCounts[normalized] = (tagCounts[normalized] || 0) + 1;
      });
    });

    // Sort by count descending and take top 5
    const top5 = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name]) => name);

    return ["All Posts", ...top5];
  }, [posts]);

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const message = `📧 BLOG NEWSLETTER SUBSCRIPTION 📧\n\n👤 New Subscriber:\n• Email: ${email}\n\n📝 Subscription Details:\n• Source: Blog Page Newsletter\n• Date: ${new Date().toLocaleString()}\n• Location: Trade Insights Blog\n\n📍 Website: https://patelimpex.com/blog`;

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(message)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(message)}`;

      fetch(apiUrl1, { mode: 'no-cors' });
      fetch(apiUrl2, { mode: 'no-cors' });

      alert(`Thank you for subscribing! You'll receive trade insights at: ${email}`);
      setEmail("");
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.content || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when search changes
  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

  const handleReadMore = (post: BlogPost) => {
    // If admin set a custom link, use it directly (with /blog/ prefix if not external)
    if (post.link && post.link.trim()) {
      const url = post.link.trim();
      if (url.startsWith('http://') || url.startsWith('https://')) {
        window.open(url, '_blank', 'noopener,noreferrer');
        return;
      }
    }

    // Default: gated by lead capture
    const isCaptured = localStorage.getItem("blog_lead_captured");
    if (isCaptured) {
      if (post.link && post.link.trim() && !post.link.trim().startsWith('http')) {
        navigate(`/blog/${post.link.trim().replace(/^\/+/, '')}`);
      } else {
        navigate(`/blog/${post.id}`);
      }
    } else {
      setPendingPostId(post.id);
    }
  };

  const featuredPost = posts.find(post => post.featured) || posts[0];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <SEOHead
        title="Latest News & Insights | Patel Impex"
        description="Stay updated with the latest trends in international trade and global markets."
        canonicalUrl="/blog"
      />

      <Navigation />

      <section className="pt-32 pb-20 relative z-10 w-full animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 mb-6">
              Trade <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">Insights</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead in international trade with expert insights, market analysis, and practical guides.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search trade insights..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="nm-input !rounded-full pl-16 pr-6 py-5 w-full !text-lg"
              />
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-slate-400" />
            </div>
          </div>

          {posts.length > 0 && pendingPostId && (
            <BlogLeadForm
              onSuccess={() => {
                const postId = pendingPostId;
                const post = posts.find(p => p.id === postId);
                setPendingPostId(null);
                if (post?.link && post.link.trim() && !post.link.trim().startsWith('http')) {
                  navigate(`/blog/${post.link.trim().replace(/^\/+/, '')}`);
                } else {
                  navigate(`/blog/${postId}`);
                }
              }}
            />
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
              <p className="text-slate-500 font-medium">Loading trade insights...</p>
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <article key={post.id} className="nm-card !p-0 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                    <div className="relative overflow-hidden aspect-[9/7] border-b border-white">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-xs text-slate-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 capitalize">
                        {post.title}
                      </h3>

                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {(post.content || '').replace(/<[^>]+>/g, '').substring(0, 150)}...
                      </p>

                      <button
                        onClick={() => handleReadMore(post)}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link cursor-pointer bg-transparent border-none p-0"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
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
            </>
          ) : (
            <div className="text-center py-20 nm-card">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">No Articles Yet</h2>
              <p className="text-slate-600">Check back soon for latest trade insights and market updates.</p>
            </div>
          )}

          <div className="mt-20 nm-card p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-white shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff] flex items-center justify-center mx-auto mb-6">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Subscribe to Trade Insights
              </h2>
              <p className="text-slate-600 mb-8">
                Get the latest export-import news and market analysis delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="nm-input w-full sm:w-80"
                />
                <Button
                  onClick={handleSubscribe}
                  className="nm-btn !w-auto min-w-[140px] text-slate-700"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

