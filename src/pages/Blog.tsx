import Navigation from "@/components/Navigation";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* AI background effects */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-16 bg-gradient-to-b from-ai-primary to-transparent animate-digital-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Navigation />
      
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 animate-ai-text-glow">
              Trade <span className="text-transparent bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text animate-text-shimmer">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-hologram">
              Stay ahead in international trade with expert insights, market analysis, and practical guides for successful global business expansion.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center animate-slide-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-gray-800/50 border border-ai-primary/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-ai-primary focus:ring-2 focus:ring-ai-primary/20 w-80 animate-glow"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-ai-primary" />
            </div>
            <Button onClick={handleSearch} className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-accent text-white animate-ai-pulse-glow">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Featured Post */}
          <div className="mb-16 animate-slide-up">
            <div className="bg-gray-800/50 rounded-3xl border border-ai-primary/20 shadow-2xl overflow-hidden hover:shadow-3xl hover:border-ai-primary/40 transition-all duration-500 animate-dark-card-glow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-ai-primary to-ai-secondary text-white px-4 py-2 rounded-full text-sm font-medium animate-neon-flicker">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4 animate-fade-in">
                    <span className="bg-ai-primary/20 text-ai-primary px-3 py-1 rounded-full font-medium border border-ai-primary/30">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-ai-primary" />
                      <span className="text-gray-300">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-ai-secondary" />
                      <span className="text-gray-300">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 hover:text-ai-primary transition-colors cursor-pointer animate-ai-text-glow">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed animate-hologram">
                    {featuredPost.excerpt}
                  </p>
                  <Link to="#" className="w-fit">
                    <Button className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-accent text-white group animate-ai-pulse-glow">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-bounce-in">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 animate-circuit-pulse ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-ai-primary to-ai-secondary text-white shadow-lg border border-ai-primary/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-ai-primary/10 hover:text-ai-primary border border-gray-700 hover:border-ai-primary/30'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filter indicator */}
          {selectedCategory !== "All Posts" && (
            <div className="text-center mb-8 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-ai-primary/20 border border-ai-primary/30 rounded-full">
                <Filter className="h-4 w-4 text-ai-primary mr-2" />
                <span className="text-ai-primary font-medium">Filtered by: {selectedCategory}</span>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="bg-gray-800/50 rounded-2xl border border-ai-primary/20 shadow-lg hover:shadow-xl hover:border-ai-primary/40 transition-all duration-300 group hover:scale-105 overflow-hidden animate-dark-card-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900/90 backdrop-blur-sm text-ai-primary px-3 py-1 rounded-full text-xs font-medium border border-ai-primary/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-ai-primary" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-ai-secondary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ai-primary transition-colors line-clamp-2 animate-ai-text-glow">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-700/50 text-ai-primary text-xs px-2 py-1 rounded-full border border-ai-primary/20 animate-neon-flicker">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to="#" className="inline-flex items-center text-ai-primary font-medium hover:text-ai-secondary transition-colors group/link">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
