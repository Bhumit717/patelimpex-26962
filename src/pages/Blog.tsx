import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, TrendingUp, Search, Filter, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = {
    title: "India's Export Growth in 2024: Key Trends and Opportunities",
    excerpt: "Discover the latest trends driving India's export economy and how your business can capitalize on emerging global opportunities in international trade.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Market Insights"
  };

  const blogPosts = [
    {
      title: "Complete Guide to Export Documentation for Indian Businesses",
      excerpt: "Master the essential documentation process for seamless international trade. A comprehensive guide covering all required paperwork and compliance requirements.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Documentation",
      tags: ["Export", "Documentation", "Legal"]
    },
    {
      title: "Quality Assurance in International Trade: Building Trust with Global Partners",
      excerpt: "Learn how implementing robust quality assurance processes can strengthen your international trade relationships and ensure consistent product standards.",
      image: "/lovable-uploads/0472eac4-e17c-4d0b-8043-25419d6b7e16.png",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Quality Standards",
      tags: ["Quality", "Assurance", "Standards"]
    },
    {
      title: "Top 10 Global Markets for Indian Textile Exports in 2024",
      excerpt: "Explore the most promising international markets for Indian textile products and strategies to enter these lucrative trade destinations.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Market Analysis",
      tags: ["Textiles", "Global Markets", "Export Strategy"]
    },
    {
      title: "Navigating International Trade Regulations: A 2024 Update",
      excerpt: "Stay compliant with the latest international trade regulations and avoid costly mistakes in your export-import operations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "Regulations",
      tags: ["Trade Laws", "Compliance", "International"]
    },
    {
      title: "Digital Transformation in Export-Import: Tools for Success",
      excerpt: "Leverage modern technology and digital tools to streamline your international trade operations and gain competitive advantages.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      date: "November 22, 2024",
      readTime: "7 min read",
      category: "Technology",
      tags: ["Digital", "Technology", "Automation"]
    },
    {
      title: "Agricultural Exports from India: Quality Standards and Certifications",
      excerpt: "Understand the quality requirements and certification processes for exporting agricultural products to international markets.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Agriculture",
      tags: ["Agriculture", "Quality", "Certification"]
    },
    {
      title: "Logistics Optimization for International Trade: Cost-Effective Strategies",
      excerpt: "Reduce shipping costs and improve delivery times with proven logistics optimization strategies for international trade operations.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
      date: "November 8, 2024",
      readTime: "11 min read",
      category: "Logistics",
      tags: ["Logistics", "Optimization", "Cost Reduction"]
    }
  ];

  const categories = [
    "All Posts", "Market Insights", "Documentation", "Regulations",
    "Technology", "Agriculture", "Logistics", "Quality Standards", "Success Stories"
  ];

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const message = `📧 BLOG NEWSLETTER SUBSCRIPTION 📧

👤 New Subscriber:
• Email: ${email}

📝 Subscription Details:
• Source: Blog Page Newsletter
• Date: ${new Date().toLocaleString()}
• Location: Trade Insights Blog

📍 Website: https://patelimpex.com/blog`;

      const apiUrl1 = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(message)}`;
      const apiUrl2 = `https://api.callmebot.com/text.php?source=web&user=@PATEL111206&text=${encodeURIComponent(message)}`;

      // Send to both endpoints
      fetch(apiUrl1, { mode: 'no-cors' })
        .then(() => console.log('Newsletter subscription sent to API 1'))
        .catch((error) => console.log('API 1 call completed:', error));

      fetch(apiUrl2, { mode: 'no-cors' })
        .then(() => console.log('Newsletter subscription sent to API 2'))
        .catch((error) => console.log('API 2 call completed:', error));

      alert(`Thank you for subscribing! You'll receive trade insights at: ${email}`);
      setEmail("");
    } catch (error) {
      console.error('Subscription error:', error);
      alert(`Thank you for subscribing! You'll receive trade insights at: ${email}`);
      setEmail("");
    }
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  const filteredPosts = selectedCategory === "All Posts"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#e9edf3] relative overflow-hidden">
      <SEOHead title="Latest News & Insights | Patel Impex" description="Stay updated with the latest trends in international trade and global markets." canonicalUrl="/blog" />

      <Navigation />

      <section className="pt-32 pb-20 relative z-10 w-full animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 mb-6">
              Trade <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">Insights</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead in international trade with expert insights, market analysis, and practical guides for successful global business expansion.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="nm-input !rounded-full pl-12 pr-4 py-3 w-80"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
            <Button onClick={handleSearch} className="nm-btn !w-auto !rounded-full text-slate-700">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="nm-card !p-0 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-[400px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center bg-[#e9edf3]">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium border border-blue-200">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link to="#" className="w-fit">
                    <Button className="nm-btn !w-auto text-slate-700 group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-[#e9edf3] text-blue-600 shadow-[inset_3px_3px_6px_#cfd6e0,inset_-3px_-3px_6px_#ffffff]'
                  : 'bg-[#e9edf3] text-slate-600 hover:text-blue-600 shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filter indicator */}
          {selectedCategory !== "All Posts" && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium">
                <Filter className="h-4 w-4 mr-2" />
                Filtered by: {selectedCategory}
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="nm-card !p-0 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="relative overflow-hidden h-48 border-b border-white">
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

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 nm-card p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#e9edf3] shadow-[5px_5px_10px_#cfd6e0,-5px_-5px_10px_#ffffff] flex items-center justify-center mx-auto mb-6">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Subscribe to Trade Insights
              </h2>
              <p className="text-slate-600 mb-8">
                Get the latest export-import news, market analysis, and business tips delivered to your inbox.
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

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
