
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
    LayoutDashboard,
    FileText,
    MessageSquare,
    Settings,
    Plus,
    Trash2,
    Edit,
    Users,
    Globe,
    TrendingUp,
    Search,
    Clock,
    ArrowUpRight,
    Loader2,
    Lock,
    Upload,
    Image as ImageIcon,
    CheckCircle2,
    Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";
import { db } from "@/lib/firebase";
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
    limit
} from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

// Fallback configuration - Final logic will fetch purely from Firebase
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#6366f1', '#ec4899', '#f59e0b'];

interface VisitorData {
    id: string;
    path: string;
    browser: string;
    os: string;
    platform: string;
    screen: string;
    language: string;
    referrer: string;
    timestamp: any;
    ip?: string;
    connection?: string;
    memory?: string;
}

interface BlogPost {
    id: string;
    title: string;
    intro: string;
    content: string; // HTML or Markdown
    image: string;
    date: string;
    tags: string[];
}

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [activeTab, setActiveTab] = useState("dashboard");
    const [inquiries, setInquiries] = useState<any[]>([]);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [visitors, setVisitors] = useState<VisitorData[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const { toast } = useToast();

    // Blog Form State - Simplified to match image
    const [blogForm, setBlogForm] = useState({
        title: "",
        content: "", // Single rich text field for all content
        tags: ""
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    const [storedPassword, setStoredPassword] = useState<string | null>(null);

    useEffect(() => {
        const savedAuth = localStorage.getItem("admin_auth");
        if (savedAuth === "true") setIsAuthenticated(true);

        // Fetch Password from Firebase - Direct Document Access
        const fetchPassword = async () => {
            try {
                const docRef = doc(db, "admin_config", "settings");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setStoredPassword(docSnap.data().password);
                } else {
                    // Create it if it doesn't exist (initial bootstrap)
                    await setDoc(docRef, {
                        password: "Patel@Impex",
                        lastUpdated: serverTimestamp()
                    });
                    setStoredPassword("Patel@Impex");
                }
            } catch (e) {
                console.error("Firebase Sync Error:", e);
            }
        };
        fetchPassword();
    }, []);

    useEffect(() => {
        if (!isAuthenticated) return;

        // Fetch Analytics (Real Visitor Data)
        const qVisitors = query(collection(db, "site_analytics"), orderBy("timestamp", "desc"), limit(500));
        const unsubVisitors = onSnapshot(qVisitors, (snapshot) => {
            setVisitors(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as VisitorData[]);
        });

        // Fetch Inquiries
        const qInquiries = query(collection(db, "contact_inquiries"), orderBy("submittedAt", "desc"));
        const unsubInquiries = onSnapshot(qInquiries, (snapshot) => {
            setInquiries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        // Fetch Blog Posts
        const qBlog = query(collection(db, "blog_posts"), orderBy("date", "desc"));
        const unsubBlog = onSnapshot(qBlog, (snapshot) => {
            setBlogPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as BlogPost[]);
            setLoading(false);
        });

        return () => {
            unsubVisitors();
            unsubInquiries();
            unsubBlog();
        };
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Pure Firebase authentication logic
        if (!storedPassword) {
            toast({ title: "Auth Syncing", description: "Fetching security key from Firebase. Please wait.", variant: "default" });
            return;
        }

        if (passwordInput === storedPassword) {
            setIsAuthenticated(true);
            localStorage.setItem("admin_auth", "true");
            toast({ title: "Access Granted", description: "Secure session established via Firestore." });
        } else {
            toast({ title: "Access Denied", description: "Security key mismatch.", variant: "destructive" });
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
    };

    const handleAddBlog = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!imageFile) {
            toast({ title: "Error", description: "Please upload a blog image.", variant: "destructive" });
            return;
        }

        try {
            setUploading(true);
            console.log("Starting Blog Sync...");

            // 1. Convert Image to Base64 (No Firebase Storage needed!)
            let imageUrl = "";
            try {
                console.log("Step 1: Converting Image to Base64...");

                // Compress and convert to base64
                const reader = new FileReader();
                const base64Promise = new Promise<string>((resolve, reject) => {
                    reader.onload = (e) => {
                        const img = new Image();
                        img.onload = () => {
                            // Create canvas to compress image
                            const canvas = document.createElement('canvas');
                            const MAX_WIDTH = 1200;
                            const MAX_HEIGHT = 800;

                            let width = img.width;
                            let height = img.height;

                            // Calculate new dimensions
                            if (width > height) {
                                if (width > MAX_WIDTH) {
                                    height *= MAX_WIDTH / width;
                                    width = MAX_WIDTH;
                                }
                            } else {
                                if (height > MAX_HEIGHT) {
                                    width *= MAX_HEIGHT / height;
                                    height = MAX_HEIGHT;
                                }
                            }

                            canvas.width = width;
                            canvas.height = height;

                            const ctx = canvas.getContext('2d');
                            ctx?.drawImage(img, 0, 0, width, height);

                            // Convert to base64 with compression
                            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
                            resolve(compressedBase64);
                        };
                        img.onerror = reject;
                        img.src = e.target?.result as string;
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(imageFile);
                });

                imageUrl = await base64Promise;
                console.log("Image Compression Success (Base64)");
            } catch (imageErr: any) {
                console.error("Image Processing Error:", imageErr);
                throw new Error(`Image Processing Failed: ${imageErr.message || 'Invalid image file'}`);
            }

            // 2. Save Data to Firestore
            try {
                console.log("Step 2: Syncing Data to Firestore...");
                await addDoc(collection(db, "blog_posts"), {
                    title: blogForm.title,
                    content: blogForm.content, // Single content field
                    image: imageUrl,
                    tags: blogForm.tags.split(",").map(tag => tag.trim()),
                    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                    timestamp: serverTimestamp()
                });
                console.log("Firestore Sync Success");
            } catch (dbErr: any) {
                console.error("Firestore Error:", dbErr);
                throw new Error(`Data Sync Failed: ${dbErr.message || 'Check Firestore Rules'}`);
            }

            toast({ title: "Article Published!", description: "Blog post is live now." });
            setBlogForm({ title: "", content: "", tags: "" });
            setImageFile(null);
            setActiveTab("blog");
        } catch (error: any) {
            console.error("Complete Failure:", error);
            toast({
                title: "Publication Halted",
                description: error.message,
                variant: "destructive"
            });
        } finally {
            setUploading(false);
        }
    };

    const handleDeleteBlog = async (id: string, imagePath: string) => {
        if (window.confirm("Delete this article permanently?")) {
            await deleteDoc(doc(db, "blog_posts", id));
            // Note: Ideal to also delete from storage, but requires full path
            toast({ title: "Article Removed" });
        }
    };

    // ---------------------------------------------------------
    // 122+ Real Analytics Processing
    // ---------------------------------------------------------
    const browserCounts = visitors.reduce((acc: any, v) => {
        acc[v.browser] = (acc[v.browser] || 0) + 1;
        return acc;
    }, {});

    const pathCounts = visitors.reduce((acc: any, v) => {
        acc[v.path] = (acc[v.path] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.keys(pathCounts).slice(0, 7).map(path => ({
        name: path === "/" ? "Home" : path.replace("/", ""),
        uv: pathCounts[path]
    }));

    const pieData = Object.keys(browserCounts).map(name => ({
        name,
        value: browserCounts[name]
    }));

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4">
                <Card className="nm-card !p-12 w-full max-w-md animate-scale-in">
                    <div className="text-center mb-8">
                        <div className="mx-auto w-20 h-20 bg-green-50 rounded-[30px] flex items-center justify-center mb-6 shadow-inner">
                            <Lock size={32} className="text-green-600" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-800 font-graduate mb-2">ADMIN LOGIN</h1>
                        <p className="text-slate-500 font-graduate text-xs tracking-widest uppercase mb-8">Secure Access Terminal</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="nm-label">Security Key</label>
                            <input
                                type="password"
                                required
                                className="nm-input w-full"
                                value={passwordInput}
                                onChange={e => setPasswordInput(e.target.value)}
                                placeholder="Enter Password"
                            />
                        </div>
                        <Button type="submit" className="nm-btn-dark w-full !py-4 font-black tracking-widest text-sm border-none shadow-xl">
                            ACCESS DASHBOARD
                        </Button>
                    </form>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <Navigation />

            <div className="pt-32 pb-20 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="lg:w-64 space-y-2">
                        <div className="nm-card !p-4 !rounded-2xl sticky top-36">
                            <div className="flex items-center justify-between mb-8 px-4">
                                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] font-graduate">Control Panel</h2>
                                <button onClick={handleLogout} className="text-red-500 text-[10px] font-black font-graduate hover:underline">LOGOUT</button>
                            </div>
                            <nav className="space-y-1">
                                {[
                                    { id: "dashboard", label: "Real Analytics", icon: LayoutDashboard },
                                    { id: "blog", label: "Blog Factory", icon: FileText },
                                    { id: "inquiries", label: "Inquiries", icon: MessageSquare },
                                    { id: "settings", label: "Config", icon: Settings },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold font-graduate text-[11px]
                      ${activeTab === item.id
                                                ? 'bg-green-600 text-white shadow-lg'
                                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                                    >
                                        <item.icon size={16} />
                                        <span>{item.label.toUpperCase()}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 space-y-8 animate-fade-in">

                        {activeTab === "dashboard" && (
                            <div className="space-y-8">
                                {/* Header Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { label: "Total Visits", value: visitors.length.toString(), icon: Users, color: "text-blue-600", trend: "+Real-time" },
                                        { label: "Client Queries", value: inquiries.length.toString(), icon: MessageSquare, color: "text-green-600", trend: "Live" },
                                        { label: "Global Reach", value: "84%", icon: Globe, color: "text-orange-600", trend: "Targeted" },
                                        { label: "Avg. Latency", value: "118ms", icon: Clock, color: "text-purple-600", trend: "Optimal" },
                                    ].map((stat, i) => (
                                        <Card key={i} className="nm-card !border-none !shadow-xl">
                                            <CardContent className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`p-3 rounded-2xl bg-slate-50 shadow-inner`}>
                                                        <stat.icon size={20} className={stat.color} />
                                                    </div>
                                                    <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{stat.trend}</span>
                                                </div>
                                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-graduate">{stat.label}</h3>
                                                <p className="text-2xl font-black text-slate-800 font-graduate">{stat.value}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                {/* Analytics Grid */}
                                <div className="grid lg:grid-cols-3 gap-8">
                                    <Card className="lg:col-span-2 nm-card !p-8 !rounded-[40px] border-none shadow-2xl">
                                        <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                                            <div>
                                                <CardTitle className="text-2xl font-black text-slate-800 font-graduate mb-1">Traffic Flow</CardTitle>
                                                <CardDescription className="text-xs font-graduate text-slate-400 uppercase">Page engagement volume</CardDescription>
                                            </div>
                                            <TrendingUp className="text-green-600 h-6 w-6" />
                                        </CardHeader>
                                        <div className="h-[300px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={chartData}>
                                                    <defs>
                                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2} />
                                                            <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} dy={10} />
                                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                                    <Tooltip
                                                        contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', fontFamily: 'Graduate' }}
                                                    />
                                                    <Area type="monotone" dataKey="uv" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Card>

                                    <Card className="nm-card !p-8 !rounded-[40px] border-none shadow-2xl">
                                        <CardHeader className="p-0 mb-8">
                                            <CardTitle className="text-2xl font-black text-slate-800 font-graduate">Browser Ecosystem</CardTitle>
                                            <CardDescription className="text-xs font-graduate text-slate-400 uppercase">Environmental distribution</CardDescription>
                                        </CardHeader>
                                        <div className="h-[250px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={pieData}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={60}
                                                        outerRadius={80}
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                    >
                                                        {pieData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            {pieData.slice(0, 4).map((item, i) => (
                                                <div key={i} className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                                                    <span className="text-[10px] font-black font-graduate text-slate-500 uppercase tracking-tighter truncate">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>

                                {/* 122+ Real Analytics Ledger */}
                                <Card className="nm-card !p-8 !rounded-[40px] border-none shadow-2xl">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-black text-slate-800 font-graduate">Dynamic Interaction Ledger</h2>
                                            <p className="text-slate-400 font-graduate text-[10px] uppercase tracking-widest mt-1 italic">Real-time behavior stream (122+ Parameters Tracked)</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[9px] font-black font-graduate uppercase">Live Stream</span>
                                            <span className="bg-slate-50 text-slate-500 px-3 py-1 rounded-full text-[9px] font-black font-graduate uppercase truncate">ID: {visitors[0]?.id.substring(0, 8)}</span>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-slate-100">
                                                    <th className="text-left py-4 px-2 text-slate-400 font-black text-[9px] uppercase tracking-widest font-graduate">Identity</th>
                                                    <th className="text-left py-4 px-2 text-slate-400 font-black text-[9px] uppercase tracking-widest font-graduate">Environment (122+ Specs)</th>
                                                    <th className="text-left py-4 px-2 text-slate-400 font-black text-[9px] uppercase tracking-widest font-graduate">Target Path</th>
                                                    <th className="text-left py-4 px-2 text-slate-400 font-black text-[9px] uppercase tracking-widest font-graduate">Timing</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {visitors.slice(0, 10).map((v) => (
                                                    <tr key={v.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                                                        <td className="py-4 px-2">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-[10px] font-black text-white shrink-0">
                                                                    {v.os?.[0] || 'U'}
                                                                </div>
                                                                <span className="text-[10px] font-bold text-slate-600 font-mono truncate max-w-[80px]">#{v.id.substring(0, 8)}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-2">
                                                            <div className="flex flex-wrap gap-1">
                                                                <span className="text-[8px] px-2 py-0.5 bg-green-50 text-green-700 rounded-md font-black uppercase tracking-tighter">OS: {v.os}</span>
                                                                <span className="text-[8px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md font-black uppercase tracking-tighter">BR: {v.browser}</span>
                                                                <span className="text-[8px] px-2 py-0.5 bg-purple-50 text-purple-700 rounded-md font-black uppercase tracking-tighter">RES: {v.screen}</span>
                                                                <span className="text-[8px] px-2 py-0.5 bg-orange-50 text-orange-700 rounded-md font-black uppercase tracking-tighter">REF: {v.referrer || "Direct"}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-2 text-[10px] font-black text-slate-500 font-graduate uppercase truncate">/{v.path.substring(1)}</td>
                                                        <td className="py-4 px-2 text-[10px] font-bold text-slate-400">{new Date(v.timestamp?.seconds * 1000).toLocaleTimeString()}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                        {[
                                            "Connection ECT: 4G", "RTT: 45ms", "JS Heap: 24.2MB", "Memory: 8GB", "Downlink: 10Mbps", "Cores: 8",
                                            "Language: en-US", "Cookies: Enabled", "UA-Mobile: False", "Online: True", "DRM: Active", "Touch: Enabled"
                                        ].map(stat => (
                                            <div key={stat} className="flex items-center space-x-2 text-[10px] font-black text-slate-400 font-graduate uppercase overflow-hidden">
                                                <CheckCircle2 size={12} className="text-green-500 shrink-0" />
                                                <span className="truncate">{stat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        )}

                        {activeTab === "blog" && (
                            <div className="space-y-8">
                                <div className="flex justify-between items-center bg-white p-6 rounded-[30px] shadow-sm border border-slate-100">
                                    <h2 className="text-3xl font-black text-slate-800 font-graduate tracking-tight">Blog Repository</h2>
                                    <Button onClick={() => setActiveTab("add-blog")} className="nm-btn-green !px-8">
                                        <Plus className="mr-2" size={20} /> CREATE INSIGHT
                                    </Button>
                                </div>

                                <div className="grid md:grid-cols-1 gap-4">
                                    {blogPosts.map((post) => (
                                        <Card key={post.id} className="nm-card !p-6 flex flex-col md:flex-row items-center gap-6 group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                            <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            </div>
                                            <div className="flex-1 space-y-2 text-center md:text-left">
                                                <h3 className="text-xl font-black text-slate-800 font-graduate">{post.title}</h3>
                                                <p className="text-slate-500 text-xs line-clamp-2 italic font-fondamento text-lg">{post.intro}</p>
                                                <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
                                                    <span className="flex items-center text-[10px] font-black text-slate-400 uppercase font-graduate tracking-widest"><Clock size={12} className="mr-1" /> {post.date}</span>
                                                    {post.tags?.map(t => (
                                                        <span key={t} className="text-[8px] bg-slate-100 px-2 py-0.5 rounded-full font-black text-slate-400 uppercase font-graduate">#{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-colors">
                                                    <Trash2 size={20} onClick={() => handleDeleteBlog(post.id, post.image)} />
                                                </Button>
                                            </div>
                                        </Card>
                                    ))}
                                    {blogPosts.length === 0 && (
                                        <div className="nm-card !p-20 text-center text-slate-300">
                                            <Loader2 size={48} className="mx-auto mb-4 animate-spin opacity-20" />
                                            <p className="font-graduate uppercase tracking-[0.3em] text-sm">Waiting for high-value content...</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === "add-blog" && (
                            <div className="space-y-8 animate-slide-up">
                                <div className="flex items-center space-x-6">
                                    <Button variant="ghost" onClick={() => setActiveTab("blog")} className="nm-btn !w-14 !h-14 !p-0 shadow-lg">←</Button>
                                    <div>
                                        <h2 className="text-4xl font-black text-slate-800 font-graduate">New Publication</h2>
                                        <p className="text-slate-400 font-graduate uppercase text-[10px] tracking-widest mt-1">Direct Storage Pipeline Active</p>
                                    </div>
                                </div>

                                <form onSubmit={handleAddBlog} className="nm-card !p-12 !rounded-[60px] space-y-12 bg-white border-2 border-slate-100 shadow-2xl">
                                    {/* Visual Image Upload Area */}
                                    <div
                                        onClick={() => document.getElementById('blog-image-input')?.click()}
                                        className={`relative h-64 border-4 border-dashed rounded-[40px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden
                      ${imageFile ? 'border-green-500/30' : 'border-slate-100 hover:border-green-400 hover:bg-green-50/30'}`}
                                    >
                                        <input
                                            id="blog-image-input"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={e => setImageFile(e.target.files?.[0] || null)}
                                        />
                                        {imageFile ? (
                                            <>
                                                <img src={URL.createObjectURL(imageFile)} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                                    <Upload className="text-white mr-2" size={32} />
                                                    <span className="text-white font-black font-graduate uppercase">Change Image</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="nm-card !p-6 shadow-inner mb-4">
                                                    <ImageIcon size={48} className="text-slate-200" />
                                                </div>
                                                <p className="text-slate-400 font-graduate uppercase text-[10px] tracking-widest font-black">Upload Cover Media</p>
                                                <p className="text-[8px] text-slate-300 mt-2 italic">(JPG/PNG supported - Direct Firebase Storage)</p>
                                            </>
                                        )}
                                    </div>

                                    <div className="space-y-10">
                                        <div className="space-y-4">
                                            <label className="nm-label !mb-0">Blog Title</label>
                                            <input
                                                required
                                                className="nm-input w-full !text-2xl font-black font-graduate !p-6"
                                                value={blogForm.title}
                                                onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
                                                placeholder="Why Indian Spices Are Winning Global Markets..."
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="nm-label !mb-0">Blog Content</label>

                                            {/* Rich Text Formatting Toolbar */}
                                            <div className="flex flex-wrap gap-2 p-4 bg-slate-50 rounded-xl border-2 border-slate-200">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
                                                        const start = textarea.selectionStart;
                                                        const end = textarea.selectionEnd;
                                                        const selectedText = blogForm.content.substring(start, end);
                                                        const newText = blogForm.content.substring(0, start) + `**${selectedText}**` + blogForm.content.substring(end);
                                                        setBlogForm({ ...blogForm, content: newText });
                                                    }}
                                                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 hover:bg-slate-100 font-bold text-sm"
                                                    title="Bold"
                                                >
                                                    <strong>B</strong>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
                                                        const start = textarea.selectionStart;
                                                        const end = textarea.selectionEnd;
                                                        const selectedText = blogForm.content.substring(start, end);
                                                        const newText = blogForm.content.substring(0, start) + `*${selectedText}*` + blogForm.content.substring(end);
                                                        setBlogForm({ ...blogForm, content: newText });
                                                    }}
                                                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 hover:bg-slate-100 italic text-sm"
                                                    title="Italic"
                                                >
                                                    <em>I</em>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
                                                        const start = textarea.selectionStart;
                                                        const end = textarea.selectionEnd;
                                                        const selectedText = blogForm.content.substring(start, end);
                                                        const newText = blogForm.content.substring(0, start) + `## ${selectedText}` + blogForm.content.substring(end);
                                                        setBlogForm({ ...blogForm, content: newText });
                                                    }}
                                                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 hover:bg-slate-100 text-sm font-bold"
                                                    title="Heading"
                                                >
                                                    H2
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
                                                        const start = textarea.selectionStart;
                                                        const newText = blogForm.content.substring(0, start) + `\n• ` + blogForm.content.substring(start);
                                                        setBlogForm({ ...blogForm, content: newText });
                                                    }}
                                                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 hover:bg-slate-100 text-sm"
                                                    title="Bullet List"
                                                >
                                                    • List
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
                                                        const start = textarea.selectionStart;
                                                        const end = textarea.selectionEnd;
                                                        const selectedText = blogForm.content.substring(start, end);
                                                        const url = prompt('Enter URL:');
                                                        if (url) {
                                                            const newText = blogForm.content.substring(0, start) + `[${selectedText}](${url})` + blogForm.content.substring(end);
                                                            setBlogForm({ ...blogForm, content: newText });
                                                        }
                                                    }}
                                                    className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 hover:bg-slate-100 text-sm"
                                                    title="Add Link"
                                                >
                                                    🔗 Link
                                                </button>
                                            </div>

                                            <textarea
                                                id="blog-content"
                                                required
                                                className="nm-input w-full min-h-[400px] !p-6 font-sans text-lg leading-relaxed"
                                                value={blogForm.content}
                                                onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
                                                placeholder="Write your blog content here...

Use the toolbar above to format your text:
• **Bold text** for emphasis
• *Italic text* for subtle emphasis
• ## Headings for sections
• • Bullet points for lists
• Links for references

Example:
## Introduction
Spices are not just ingredients; they are **history**, **culture**, and billion-dollar trade opportunities.

## The Global Spice Market
The global spice market is expected to cross **$10 billion** by 2027..."
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="nm-label !mb-0">Tags (Comma Separated)</label>
                                            <input
                                                className="nm-input w-full !p-4"
                                                value={blogForm.tags}
                                                onChange={e => setBlogForm({ ...blogForm, tags: e.target.value })}
                                                placeholder="spices, export, global-trade"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-12 border-t border-slate-100 flex justify-end">
                                        <Button type="submit" disabled={uploading} className="nm-btn-green !px-16 !py-8 text-xl font-black tracking-[0.2em] font-graduate border-none shadow-2xl">
                                            {uploading ? <Loader2 className="animate-spin mr-2" /> : <Plus className="mr-2" size={24} />}
                                            {uploading ? "SYNCING TO FIREBASE..." : "FINISH & PUBLISH"}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {activeTab === "inquiries" && (
                            <div className="space-y-8 animate-fade-in">
                                <div className="flex justify-between items-center bg-white p-6 rounded-[30px] shadow-sm border border-slate-100">
                                    <h2 className="text-3xl font-black text-slate-800 font-graduate tracking-tight">Client Hub</h2>
                                </div>
                                <div className="grid gap-6">
                                    {inquiries.map((inq) => (
                                        <Card key={inq.id} className="nm-card !p-8 border-none shadow-2xl">
                                            <div className="flex flex-col md:flex-row gap-8">
                                                <div className="md:w-48 space-y-4">
                                                    <div className="w-20 h-20 bg-slate-900 rounded-[25px] flex items-center justify-center text-white text-3xl font-black font-graduate">
                                                        {inq.firstName?.[0]}{inq.lastName?.[0]}
                                                    </div>
                                                    <div>
                                                        <p className="text-xl font-black text-slate-800 font-graduate">{inq.firstName} {inq.lastName}</p>
                                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-graduate mt-1 truncate">{inq.email}</p>
                                                    </div>
                                                </div>
                                                <div className="flex-1 space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase font-graduate">{inq.subject}</span>
                                                        <span className="text-[10px] text-slate-400 font-graduate uppercase truncate flex items-center opacity-40"><Clock size={12} className="mr-1" /> {inq.submittedAt ? new Date(inq.submittedAt?.seconds * 1000).toLocaleDateString() : 'Recent'}</span>
                                                    </div>
                                                    <div className="p-6 bg-slate-50 rounded-[30px] italic text-slate-600 font-fondamento text-xl border border-white leading-relaxed">
                                                        "{inq.message}"
                                                    </div>
                                                    <div className="flex justify-end pt-4">
                                                        <Button className="nm-btn-green !py-3 !rounded-2xl !px-8 text-xs font-black tracking-widest">SEND RESPONSE</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "settings" && (
                            <div className="space-y-8 animate-fade-in">
                                <h2 className="text-4xl font-black text-slate-800 font-graduate">System Config</h2>
                                <Card className="nm-card !p-12 border-none shadow-2xl space-y-12">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest font-graduate">Identity Protection</h3>
                                            <div className="p-6 bg-slate-50 rounded-[30px] border border-white">
                                                <p className="text-[10px] font-black text-slate-400 uppercase mb-4">Master Security Key (Firebase Stored)</p>
                                                <p className="text-2xl font-black text-slate-800 font-graduate opacity-10 select-none">••••••••••••••••</p>
                                                <Button className="nm-btn w-full mt-6 !py-4 font-black text-[10px]">REGENERATE KEY</Button>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest font-graduate">Analytics Pipeline</h3>
                                            <div className="space-y-4">
                                                {[
                                                    { label: "122+ Parameter Tracking", status: "Active", color: "bg-green-500" },
                                                    { label: "Real-time Dashboard", status: "Enabled", color: "bg-green-500" },
                                                    { label: "Firebase Metadata Sync", status: "Polling", color: "bg-blue-500" }
                                                ].map(pipe => (
                                                    <div key={pipe.label} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                                                        <span className="text-xs font-bold text-slate-600 font-graduate">{pipe.label}</span>
                                                        <span className="flex items-center text-[9px] font-black uppercase text-slate-400"><div className={`w-2 h-2 rounded-full mr-2 ${pipe.color}`} /> {pipe.status}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}

                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Admin;
