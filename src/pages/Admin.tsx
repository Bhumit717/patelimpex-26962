import { useState, useMemo } from "react";
import { getVisitorImages, verifyAdminPassword, deleteVisitorImage, VisitorData } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, RefreshCw, Image, ArrowLeft, Users, MapPin, Globe, TrendingUp, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { toast } from "sonner";

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe', '#00C49F', '#FFBB28', '#FF8042'];

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState<VisitorData[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<VisitorData | null>(null);
  const [activeTab, setActiveTab] = useState<'gallery' | 'analytics'>('analytics');

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

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Delete this visitor image?")) return;
    try {
      await deleteVisitorImage(id);
      setImages(prev => prev.filter(img => img.id !== id));
      if (selectedImage?.id === id) setSelectedImage(null);
      toast.success("Image deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  // Analytics calculations
  const analytics = useMemo(() => {
    if (images.length === 0) return null;

    // Country distribution
    const countryCount: Record<string, number> = {};
    const stateCount: Record<string, number> = {};
    const dailyVisits: Record<string, number> = {};

    images.forEach(img => {
      // Country
      countryCount[img.country] = (countryCount[img.country] || 0) + 1;
      // State
      const stateKey = `${img.state}, ${img.country}`;
      stateCount[stateKey] = (stateCount[stateKey] || 0) + 1;
      // Daily visits
      const date = new Date(img.timestamp).toLocaleDateString();
      dailyVisits[date] = (dailyVisits[date] || 0) + 1;
    });

    const countryData = Object.entries(countryCount)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    const stateData = Object.entries(stateCount)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    const dailyData = Object.entries(dailyVisits)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-30);

    return {
      totalVisitors: images.length,
      uniqueCountries: Object.keys(countryCount).length,
      uniqueStates: Object.keys(stateCount).length,
      countryData,
      stateData,
      dailyData,
      topCountry: countryData[0]?.name || 'N/A',
      todayVisitors: dailyVisits[new Date().toLocaleDateString()] || 0
    };
  }, [images]);

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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Visitor Dashboard</h1>
            <p className="text-muted-foreground">
              {images.length} total visitor{images.length !== 1 ? 's' : ''} captured
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

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button 
            variant={activeTab === 'analytics' ? 'default' : 'outline'}
            onClick={() => setActiveTab('analytics')}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Analytics
          </Button>
          <Button 
            variant={activeTab === 'gallery' ? 'default' : 'outline'}
            onClick={() => setActiveTab('gallery')}
          >
            <Image className="w-4 h-4 mr-2" />
            Gallery
          </Button>
        </div>

        {loading && images.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : activeTab === 'analytics' && analytics ? (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{analytics.totalVisitors}</p>
                    <p className="text-sm text-muted-foreground">Total Visitors</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{analytics.todayVisitors}</p>
                    <p className="text-sm text-muted-foreground">Today</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{analytics.uniqueCountries}</p>
                    <p className="text-sm text-muted-foreground">Countries</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{analytics.uniqueStates}</p>
                    <p className="text-sm text-muted-foreground">States/Regions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Daily Visits Line Chart */}
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Daily Visitors (Last 30 Days)</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={analytics.dailyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Country Pie Chart */}
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Visitors by Country</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={analytics.countryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analytics.countryData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* State Bar Chart */}
              <div className="bg-card rounded-xl p-6 border md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Top States/Regions</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analytics.stateData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                    <YAxis dataKey="name" type="category" width={150} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
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
                key={img.id}
                className="rounded-xl overflow-hidden bg-card border cursor-pointer hover:ring-2 hover:ring-primary transition-all relative group"
                onClick={() => setSelectedImage(img)}
              >
                <button
                  onClick={(e) => handleDelete(img.id, e)}
                  className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/90"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <img
                  src={img.imageUrl}
                  alt={`Visitor ${index + 1}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-3 space-y-1">
                  <div className="flex items-center gap-1 text-xs text-foreground">
                    <Globe className="w-3 h-3" />
                    {img.country}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {img.state}, {img.city}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(img.timestamp).toLocaleString()}
                  </div>
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
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-6 items-center" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.imageUrl}
                alt="Visitor"
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="bg-card rounded-xl p-6 text-left space-y-4 min-w-[250px]">
                <h3 className="text-lg font-semibold text-foreground">Visitor Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{selectedImage.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{selectedImage.state}, {selectedImage.city}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    IP: {selectedImage.ip}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(selectedImage.timestamp).toLocaleString()}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" onClick={() => setSelectedImage(null)} className="flex-1">
                    Close
                  </Button>
                  <Button variant="destructive" onClick={(e) => handleDelete(selectedImage.id, e)} className="flex-1">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
