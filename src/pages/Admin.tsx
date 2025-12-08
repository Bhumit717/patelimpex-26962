import { useState } from "react";
import { getVisitorImages, verifyAdminPassword } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, RefreshCw, Image, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface VisitorImage {
  imageUrl: string;
  timestamp: number;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState<VisitorImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (verifyAdminPassword(password)) {
      setIsAuthenticated(true);
      loadImages();
    } else {
      setError("Invalid password");
    }
  };

  const loadImages = async () => {
    setLoading(true);
    try {
      const data = await getVisitorImages();
      setImages(data);
    } catch (err) {
      console.error("Failed to load images:", err);
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Admin Access</h1>
              <p className="text-muted-foreground mt-2">Enter password to continue</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-lg"
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>

            <Link to="/" className="block">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Visitor Gallery</h1>
            <p className="text-muted-foreground">
              {images.length} visitor photo{images.length !== 1 ? 's' : ''} captured
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={loadImages} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>

        {loading && images.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
              <Image className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg">No visitor photos yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-muted cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                onClick={() => setSelectedImage(img.imageUrl)}
              >
                <img
                  src={img.imageUrl}
                  alt={`Visitor ${index + 1}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="text-xs text-muted-foreground p-2 bg-card">
                  {new Date(img.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Visitor"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-4xl">&times;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;