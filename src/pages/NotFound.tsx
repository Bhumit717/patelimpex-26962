import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, Phone, Mail, MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Products", path: "/products", description: "Explore our product range" },
    { name: "Services", path: "/services", description: "Our professional services" },
    { name: "About Us", path: "/about", description: "Learn about PATEL IMPEX" },
    { name: "Contact", path: "/contact", description: "Get in touch with us" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              PATEL IMPEX
            </span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-[12rem] font-bold text-primary/10 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-pulse">
                404
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. But don't worry, PATEL IMPEX has everything you need just a click away.
            </p>
            <p className="text-sm text-muted-foreground/80 font-mono bg-muted/50 inline-block px-3 py-1 rounded-md">
              Requested URL: {location.pathname}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                <Search className="w-5 h-5 mr-2" />
                Browse Products
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">
              Popular Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group p-6 rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Need Help? We're Here for You
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 XXXX XXXXXX</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@patelimpex.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
