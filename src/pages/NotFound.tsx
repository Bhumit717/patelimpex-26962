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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="nm-card !rounded-none !p-4 !m-0 z-10">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-[10px] bg-white shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center">
              <span className="text-blue-600 font-black text-xl">P</span>
            </div>
            <span className="text-2xl font-black text-slate-800">
              Patel<span className="text-blue-600">Impex</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-[12rem] font-black text-slate-200 leading-none select-none drop-shadow-sm">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-black text-blue-600">
                404
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. But don't worry, Patel Impex has everything you need just a click away.
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-white shadow-[inset_2px_2px_4px_#cfd6e0,inset_-2px_-2px_4px_#ffffff]">
              <p className="text-sm text-slate-500 font-mono">
                Requested URL: {location.pathname}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <Button asChild className="nm-btn !w-auto !px-8 text-slate-700">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild className="nm-btn !w-auto !px-8 text-slate-700">
              <Link to="/products">
                <Search className="w-5 h-5 mr-2" />
                Browse Products
              </Link>
            </Button>
            <Button asChild className="nm-btn !w-auto !px-8 text-slate-700">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">
              Popular Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="nm-card group hover:-translate-y-1 transition-transform cursor-pointer"
                >
                  <h3 className="font-bold text-lg mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="nm-card p-8 bg-white">
            <h3 className="text-xl font-bold mb-6 text-slate-800">
              Need Help? We're Here for You
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-3 text-slate-600">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 798 41 33 417</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-600">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>info@patelimpex.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-600">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span>Rajkot, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

