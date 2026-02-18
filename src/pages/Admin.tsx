
import { useState, useEffect, useRef, useCallback } from "react";
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
    Info,
    BarChart3,
    Monitor,
    Smartphone,
    Tablet,
    Eye,
    MousePointerClick,
    Timer,
    MapPin,
    Languages,
    RefreshCw,
    Activity
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
    Cell,
    BarChart,
    Bar,
    Legend,
    LineChart,
    Line
} from "recharts";
// Custom HTML Editor - no ReactQuill dependency needed
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
const GRADIENT_COLORS = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#fa709a'];

// ============================================================
// ANALYTICS DATA TYPES
// ============================================================
interface AnalyticsData {
    fetchedAt: string;
    overview: {
        activeUsers: number;
        sessions: number;
        pageViews: number;
        bounceRate: number;
        avgSessionDuration: number;
        newUsers: number;
        engagedSessions: number;
        totalUsers: number;
    };
    dailyVisitors: Array<{ date: string; activeUsers: number; sessions: number; pageViews: number; newUsers: number }>;
    topPages: Array<{ page: string; views: number; users: number; avgDuration: number }>;
    trafficSources: Array<{ source: string; sessions: number; users: number }>;
    countries: Array<{ country: string; users: number; sessions: number }>;
    devices: Array<{ device: string; users: number; sessions: number }>;
    browsers: Array<{ browser: string; users: number }>;
    operatingSystems: Array<{ os: string; users: number }>;
    referrers: Array<{ source: string; sessions: number; users: number }>;
    hourlyDistribution: Array<{ hour: string; users: number }>;
    landingPages: Array<{ page: string; sessions: number; bounceRate: number }>;
    cities: Array<{ city: string; users: number }>;
    languages: Array<{ language: string; users: number }>;
    screenResolutions: Array<{ resolution: string; users: number }>;
}

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

// ============================================================
// RICH TEXT EDITOR WITH FULL HTML PASTE SUPPORT
// Single editor — paste content directly, everything is preserved
// ============================================================

const RichTextEditor = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const colorInputRef = useRef<HTMLInputElement>(null);
    const bgColorInputRef = useRef<HTMLInputElement>(null);

    // Sync contentEditable div with value on mount and when value changes externally
    useEffect(() => {
        if (editorRef.current) {
            if (editorRef.current.innerHTML !== value) {
                editorRef.current.innerHTML = value;
            }
        }
    }, [value]);

    // Handle paste - preserve ALL HTML including divs, styles, animations, themes, fonts
    const handlePaste = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        const clipboardData = e.clipboardData;

        // Try to get HTML content first (preserves everything: formatting, divs, styles, animations)
        let pastedHtml = clipboardData.getData('text/html');

        if (pastedHtml) {
            // Clean up browser metadata only, keep ALL styling and structure
            pastedHtml = pastedHtml.replace(/<!--StartFragment-->|<!--EndFragment-->/gi, '');
            pastedHtml = pastedHtml.replace(/<meta[^>]*>/gi, '');
            pastedHtml = pastedHtml.replace(/<\/?html[^>]*>/gi, '');
            pastedHtml = pastedHtml.replace(/<\/?head[^>]*>/gi, '');
            pastedHtml = pastedHtml.replace(/<\/?body[^>]*>/gi, '');
            pastedHtml = pastedHtml.trim();
        } else {
            // Fallback to plain text
            pastedHtml = clipboardData.getData('text/plain');
            pastedHtml = pastedHtml.split('\n').map(line => `<p>${line}</p>`).join('');
        }

        // Insert at cursor position
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            const fragment = range.createContextualFragment(pastedHtml);
            range.insertNode(fragment);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        // Update state
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    }, [onChange]);

    // Handle input
    const handleInput = useCallback(() => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    }, [onChange]);

    // Toolbar commands
    const execCommand = useCallback((command: string, cmdValue?: string) => {
        document.execCommand(command, false, cmdValue);
        if (editorRef.current) {
            editorRef.current.focus();
            onChange(editorRef.current.innerHTML);
        }
    }, [onChange]);

    const insertLink = useCallback(() => {
        const url = prompt('Enter URL:');
        if (url) execCommand('createLink', url);
    }, [execCommand]);

    const insertImage = useCallback(() => {
        const url = prompt('Enter image URL:');
        if (url) execCommand('insertImage', url);
    }, [execCommand]);

    // Toolbar button helper
    const ToolBtn = ({ onClick, title, children, className = '' }: { onClick: () => void; title: string; children: React.ReactNode; className?: string }) => (
        <button type="button" onClick={onClick} title={title}
            className={`px-2 py-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors text-xs font-bold ${className}`}>
            {children}
        </button>
    );

    const Separator = () => <div className="w-px h-6 bg-slate-200 mx-0.5" />;

    return (
        <div className="rounded-xl border-2 border-slate-200 overflow-hidden bg-white">
            {/* Toolbar Row 1 — Headers, Font, Size */}
            <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 bg-slate-50 border-b border-slate-200">
                <select
                    onChange={(e) => { if (e.target.value) execCommand('formatBlock', e.target.value); }}
                    className="text-xs border border-slate-200 rounded px-2 py-1 bg-white text-slate-700 focus:outline-none cursor-pointer"
                    defaultValue=""
                >
                    <option value="" disabled>Heading</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="h4">Heading 4</option>
                    <option value="h5">Heading 5</option>
                    <option value="h6">Heading 6</option>
                    <option value="p">Normal</option>
                </select>

                <select
                    onChange={(e) => { if (e.target.value) execCommand('fontName', e.target.value); }}
                    className="text-xs border border-slate-200 rounded px-2 py-1 bg-white text-slate-700 focus:outline-none cursor-pointer"
                    defaultValue=""
                >
                    <option value="" disabled>Font</option>
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Trebuchet MS">Trebuchet MS</option>
                    <option value="Impact">Impact</option>
                </select>

                <select
                    onChange={(e) => { if (e.target.value) execCommand('fontSize', e.target.value); }}
                    className="text-xs border border-slate-200 rounded px-2 py-1 bg-white text-slate-700 focus:outline-none cursor-pointer"
                    defaultValue=""
                >
                    <option value="" disabled>Size</option>
                    <option value="1">Small</option>
                    <option value="3">Normal</option>
                    <option value="5">Large</option>
                    <option value="7">Huge</option>
                </select>

                <Separator />

                <ToolBtn onClick={() => execCommand('bold')} title="Bold"><b>B</b></ToolBtn>
                <ToolBtn onClick={() => execCommand('italic')} title="Italic"><i>I</i></ToolBtn>
                <ToolBtn onClick={() => execCommand('underline')} title="Underline"><u>U</u></ToolBtn>
                <ToolBtn onClick={() => execCommand('strikeThrough')} title="Strikethrough"><s>S</s></ToolBtn>

                <Separator />

                {/* Text Color */}
                <div className="relative">
                    <ToolBtn onClick={() => colorInputRef.current?.click()} title="Text Color">
                        <span style={{ borderBottom: '3px solid #e11d48' }}>A</span>
                    </ToolBtn>
                    <input ref={colorInputRef} type="color" className="absolute opacity-0 w-0 h-0"
                        onChange={(e) => execCommand('foreColor', e.target.value)} />
                </div>

                {/* Background Color */}
                <div className="relative">
                    <ToolBtn onClick={() => bgColorInputRef.current?.click()} title="Background Color">
                        <span className="bg-yellow-200 px-1 rounded">A</span>
                    </ToolBtn>
                    <input ref={bgColorInputRef} type="color" className="absolute opacity-0 w-0 h-0"
                        onChange={(e) => execCommand('hiliteColor', e.target.value)} />
                </div>

                <Separator />

                <ToolBtn onClick={() => execCommand('insertUnorderedList')} title="Bullet List">• List</ToolBtn>
                <ToolBtn onClick={() => execCommand('insertOrderedList')} title="Numbered List">1. List</ToolBtn>

                <Separator />

                <ToolBtn onClick={() => execCommand('justifyLeft')} title="Align Left">⫷</ToolBtn>
                <ToolBtn onClick={() => execCommand('justifyCenter')} title="Align Center">⫼</ToolBtn>
                <ToolBtn onClick={() => execCommand('justifyRight')} title="Align Right">⫸</ToolBtn>

                <Separator />

                <ToolBtn onClick={insertLink} title="Insert Link">🔗</ToolBtn>
                <ToolBtn onClick={insertImage} title="Insert Image">🖼</ToolBtn>

                <Separator />

                <ToolBtn onClick={() => execCommand('removeFormat')} title="Clear Formatting" className="text-red-400 hover:text-red-600 hover:bg-red-50">
                    ✕ Clear
                </ToolBtn>
            </div>

            {/* Editor Area — single contentEditable, full HTML paste support */}
            <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
                onPaste={handlePaste}
                className="min-h-[400px] max-h-[600px] overflow-y-auto p-6 prose prose-slate prose-lg max-w-none focus:outline-none"
                style={{ wordBreak: 'break-word' }}
                data-placeholder="Write your blog content here or paste any content — animations, themes, fonts, divs, and styles will be preserved..."
            />
        </div>
    );
};

// ============================================================
// ADMIN COMPONENT
// ============================================================
const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [activeTab, setActiveTab] = useState("blog");
    const [inquiries, setInquiries] = useState<any[]>([]);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [visitors, setVisitors] = useState<VisitorData[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const { toast } = useToast();

    // Google Analytics State
    const [gaData, setGaData] = useState<AnalyticsData | null>(null);
    const [gaLoading, setGaLoading] = useState(false);
    const [gaError, setGaError] = useState<string | null>(null);

    // Blog Form State
    const [blogForm, setBlogForm] = useState({
        title: "",
        content: "", // Full HTML content
        tags: ""
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);

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

        // Validation: Need image for new posts, or existing image for edits
        if (!imageFile && !existingImageUrl) {
            toast({ title: "Error", description: "Please upload a blog image.", variant: "destructive" });
            return;
        }

        try {
            setUploading(true);
            console.log("Starting Blog Sync...");

            // 1. Convert Image to Base64 (only if new image selected)
            let imageUrl = existingImageUrl || "";

            if (imageFile) {
                try {
                    console.log("Step 1: Converting New Image to Base64...");

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
            }

            // 2. Save Data to Firestore (Add or Update)
            try {
                console.log("Step 2: Syncing Data to Firestore...");
                const blogData = {
                    title: blogForm.title,
                    content: blogForm.content,
                    image: imageUrl,
                    tags: blogForm.tags.split(",").map(tag => tag.trim()),
                    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                    // Only update timestamp on creation, or add 'updatedAt' for edits if needed
                    ...(editingId ? { updatedAt: serverTimestamp() } : { timestamp: serverTimestamp() })
                };

                if (editingId) {
                    await setDoc(doc(db, "blog_posts", editingId), blogData, { merge: true });
                    toast({ title: "Article Updated!", description: "Changes have been saved." });
                } else {
                    await addDoc(collection(db, "blog_posts"), blogData);
                    toast({ title: "Article Published!", description: "Blog post is live now." });
                }

                console.log("Firestore Sync Success");
            } catch (dbErr: any) {
                console.error("Firestore Error:", dbErr);
                throw new Error(`Data Sync Failed: ${dbErr.message || 'Check Firestore Rules'}`);
            }

            // Reset Form
            setBlogForm({ title: "", content: "", tags: "" });
            setImageFile(null);
            setExistingImageUrl(null);
            setEditingId(null);
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

    const handleEditBlog = (post: BlogPost) => {
        setBlogForm({
            title: post.title,
            content: post.content,
            tags: post.tags?.join(", ") || ""
        });
        setExistingImageUrl(post.image);
        setEditingId(post.id);
        setActiveTab("add-blog");
    };

    const handleDeleteBlog = async (id: string, imagePath: string) => {
        if (window.confirm("Delete this article permanently?")) {
            await deleteDoc(doc(db, "blog_posts", id));
            toast({ title: "Article Removed" });
        }
    };

    // ---------------------------------------------------------
    // Google Analytics Data Fetcher
    // ---------------------------------------------------------
    const fetchAnalytics = useCallback(async () => {
        if (!storedPassword) return;
        setGaLoading(true);
        setGaError(null);
        try {
            const response = await fetch('/api/analytics', {
                headers: {
                    'Authorization': `Bearer ${storedPassword}`,
                },
            });
            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.message || errData.error || `HTTP ${response.status}`);
            }
            const data = await response.json();
            setGaData(data);
            toast({ title: "Analytics Loaded", description: "Real-time GA4 data fetched successfully." });
        } catch (err: any) {
            console.error('Analytics fetch error:', err);
            setGaError(err.message || 'Failed to load analytics');
            toast({ title: "Analytics Error", description: err.message, variant: "destructive" });
        } finally {
            setGaLoading(false);
        }
    }, [storedPassword, toast]);

    // Auto-fetch analytics when tab switches to analytics
    useEffect(() => {
        if (activeTab === 'analytics' && !gaData && !gaLoading) {
            fetchAnalytics();
        }
    }, [activeTab, gaData, gaLoading, fetchAnalytics]);

    // Format helpers
    const formatDuration = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = Math.round(seconds % 60);
        return `${m}m ${s}s`;
    };
    const formatDate = (yyyymmdd: string) => {
        if (!yyyymmdd || yyyymmdd.length !== 8) return yyyymmdd;
        return `${yyyymmdd.slice(4, 6)}/${yyyymmdd.slice(6, 8)}`;
    };
    const formatPercent = (val: number) => `${(val * 100).toFixed(1)}%`;



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
                                    { id: "analytics", label: "Analytics", icon: BarChart3 },
                                    { id: "inquiries", label: "Inquiries", icon: MessageSquare },
                                    { id: "visitors", label: "Custom Tracking", icon: Activity },
                                    { id: "blog", label: "Blog Factory", icon: FileText },
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

                        {/* ═══════════════════════════════════════════ */}
                        {/* GOOGLE ANALYTICS DASHBOARD TAB             */}
                        {/* ═══════════════════════════════════════════ */}
                        {activeTab === "analytics" && (
                            <div className="space-y-6">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-6 rounded-[30px] shadow-xl">
                                    <div>
                                        <h2 className="text-3xl font-black text-white font-graduate tracking-tight flex items-center gap-3">
                                            <BarChart3 size={32} /> Google Analytics
                                        </h2>
                                        <p className="text-white/70 text-xs font-graduate mt-1 uppercase tracking-widest">
                                            {gaData ? `Last updated: ${new Date(gaData.fetchedAt).toLocaleString()}` : 'Real-time GA4 Data • Last 30 Days'}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={fetchAnalytics}
                                        disabled={gaLoading}
                                        className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm font-graduate font-black text-xs tracking-widest"
                                    >
                                        {gaLoading ? <Loader2 className="animate-spin mr-2" size={16} /> : <RefreshCw className="mr-2" size={16} />}
                                        {gaLoading ? 'LOADING...' : 'REFRESH DATA'}
                                    </Button>
                                </div>

                                {/* Error State */}
                                {gaError && (
                                    <Card className="border-red-200 bg-red-50 p-6">
                                        <div className="flex items-start gap-3">
                                            <Info className="text-red-500 mt-0.5" size={20} />
                                            <div>
                                                <h3 className="font-bold text-red-800 font-graduate">Analytics Error</h3>
                                                <p className="text-red-600 text-sm mt-1">{gaError}</p>
                                                <p className="text-red-400 text-xs mt-2">Make sure GA_PROPERTY_ID, GA_CLIENT_EMAIL, and GA_PRIVATE_KEY are set in Vercel Environment Variables.</p>
                                            </div>
                                        </div>
                                    </Card>
                                )}

                                {/* Loading State */}
                                {gaLoading && !gaData && (
                                    <div className="nm-card !p-20 text-center">
                                        <Loader2 size={48} className="mx-auto mb-4 animate-spin text-indigo-400" />
                                        <p className="font-graduate uppercase tracking-[0.3em] text-sm text-slate-400">Fetching Google Analytics Data...</p>
                                    </div>
                                )}

                                {/* Analytics Dashboard */}
                                {gaData && (
                                    <>
                                        {/* ─── Overview Stat Cards ─── */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {[
                                                { label: 'Total Users', value: gaData.overview.totalUsers.toLocaleString(), icon: Users, color: 'from-blue-500 to-cyan-400', sub: `${gaData.overview.newUsers} new` },
                                                { label: 'Sessions', value: gaData.overview.sessions.toLocaleString(), icon: MousePointerClick, color: 'from-violet-500 to-purple-400', sub: `${gaData.overview.engagedSessions} engaged` },
                                                { label: 'Page Views', value: gaData.overview.pageViews.toLocaleString(), icon: Eye, color: 'from-emerald-500 to-teal-400', sub: `${(gaData.overview.pageViews / Math.max(gaData.overview.sessions, 1)).toFixed(1)} per session` },
                                                { label: 'Avg Duration', value: formatDuration(gaData.overview.avgSessionDuration), icon: Timer, color: 'from-amber-500 to-orange-400', sub: `Bounce: ${formatPercent(gaData.overview.bounceRate)}` },
                                            ].map(s => (
                                                <Card key={s.label} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                                                    <div className={`bg-gradient-to-br ${s.color} p-4`}>
                                                        <div className="flex items-center justify-between">
                                                            <s.icon className="text-white/80" size={24} />
                                                            <span className="text-white/60 text-[9px] font-graduate font-black uppercase tracking-widest">{s.label}</span>
                                                        </div>
                                                        <p className="text-3xl font-black text-white mt-2 font-graduate">{s.value}</p>
                                                        <p className="text-white/60 text-[10px] font-graduate mt-1">{s.sub}</p>
                                                    </div>
                                                </Card>
                                            ))}
                                        </div>

                                        {/* ─── Daily Visitors Chart ─── */}
                                        <Card className="nm-card !p-6">
                                            <CardHeader className="!p-0 !pb-4">
                                                <CardTitle className="text-xl font-black font-graduate text-slate-800 flex items-center gap-2">
                                                    <Activity size={20} className="text-indigo-500" /> Daily Visitors (30 Days)
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="!p-0">
                                                <ResponsiveContainer width="100%" height={320}>
                                                    <AreaChart data={gaData.dailyVisitors.map(d => ({ ...d, label: formatDate(d.date) }))}>
                                                        <defs>
                                                            <linearGradient id="gradUsers" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                                            </linearGradient>
                                                            <linearGradient id="gradSessions" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                            </linearGradient>
                                                            <linearGradient id="gradPageViews" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2} />
                                                                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                                        <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                                        <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                                        <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} />
                                                        <Legend />
                                                        <Area type="monotone" dataKey="activeUsers" name="Users" stroke="#6366f1" fill="url(#gradUsers)" strokeWidth={2} />
                                                        <Area type="monotone" dataKey="sessions" name="Sessions" stroke="#10b981" fill="url(#gradSessions)" strokeWidth={2} />
                                                        <Area type="monotone" dataKey="pageViews" name="Page Views" stroke="#f59e0b" fill="url(#gradPageViews)" strokeWidth={2} />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </CardContent>
                                        </Card>

                                        {/* ─── Row: Traffic Sources + Devices ─── */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Traffic Sources */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <TrendingUp size={18} className="text-purple-500" /> Traffic Sources
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <ResponsiveContainer width="100%" height={260}>
                                                        <PieChart>
                                                            <Pie data={gaData.trafficSources} cx="50%" cy="50%" outerRadius={90} innerRadius={40} fill="#8884d8" dataKey="sessions" nameKey="source" label={({ source, percent }) => `${source} ${(percent * 100).toFixed(0)}%`} labelLine={false} fontSize={10}>
                                                                {gaData.trafficSources.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                                                            </Pie>
                                                            <Tooltip />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                </CardContent>
                                            </Card>

                                            {/* Devices */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Monitor size={18} className="text-cyan-500" /> Devices
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <div className="space-y-3 mt-2">
                                                        {gaData.devices.map(d => {
                                                            const total = gaData.devices.reduce((s, x) => s + x.users, 0);
                                                            const pct = total > 0 ? (d.users / total * 100) : 0;
                                                            const DevIcon = d.device.toLowerCase() === 'mobile' ? Smartphone : d.device.toLowerCase() === 'tablet' ? Tablet : Monitor;
                                                            return (
                                                                <div key={d.device} className="flex items-center gap-3">
                                                                    <DevIcon size={18} className="text-slate-400 shrink-0" />
                                                                    <div className="flex-1">
                                                                        <div className="flex justify-between text-xs font-graduate font-bold text-slate-700">
                                                                            <span className="capitalize">{d.device}</span>
                                                                            <span>{d.users} users ({pct.toFixed(1)}%)</span>
                                                                        </div>
                                                                        <div className="w-full bg-slate-100 rounded-full h-2 mt-1">
                                                                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <ResponsiveContainer width="100%" height={180} className="mt-4">
                                                        <PieChart>
                                                            <Pie data={gaData.devices} cx="50%" cy="50%" outerRadius={70} innerRadius={30} fill="#8884d8" dataKey="users" nameKey="device" label={({ device }) => device}>
                                                                {gaData.devices.map((_, i) => <Cell key={i} fill={GRADIENT_COLORS[i % GRADIENT_COLORS.length]} />)}
                                                            </Pie>
                                                            <Tooltip />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* ─── Top Pages Table ─── */}
                                        <Card className="nm-card !p-6">
                                            <CardHeader className="!p-0 !pb-4">
                                                <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                    <Eye size={18} className="text-emerald-500" /> Top Pages
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="!p-0">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-xs">
                                                        <thead>
                                                            <tr className="border-b border-slate-100">
                                                                <th className="text-left py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">#</th>
                                                                <th className="text-left py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">Page</th>
                                                                <th className="text-right py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">Views</th>
                                                                <th className="text-right py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">Users</th>
                                                                <th className="text-right py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">Avg Duration</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {gaData.topPages.map((p, i) => (
                                                                <tr key={p.page} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                                    <td className="py-2.5 px-3 text-slate-400 font-bold">{i + 1}</td>
                                                                    <td className="py-2.5 px-3 font-semibold text-slate-700 max-w-[300px] truncate">{p.page}</td>
                                                                    <td className="py-2.5 px-3 text-right font-bold text-indigo-600">{p.views.toLocaleString()}</td>
                                                                    <td className="py-2.5 px-3 text-right text-slate-500">{p.users.toLocaleString()}</td>
                                                                    <td className="py-2.5 px-3 text-right text-slate-500">{formatDuration(p.avgDuration)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* ─── Row: Countries + Browsers ─── */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Countries */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Globe size={18} className="text-blue-500" /> Countries
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <ResponsiveContainer width="100%" height={280}>
                                                        <BarChart data={gaData.countries.slice(0, 10)} layout="vertical">
                                                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                                            <XAxis type="number" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                                            <YAxis type="category" dataKey="country" tick={{ fontSize: 10, fill: '#64748b' }} width={80} />
                                                            <Tooltip />
                                                            <Bar dataKey="users" name="Users" fill="#6366f1" radius={[0, 6, 6, 0]} />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </CardContent>
                                            </Card>

                                            {/* Browsers */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Search size={18} className="text-orange-500" /> Browsers
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <ResponsiveContainer width="100%" height={280}>
                                                        <BarChart data={gaData.browsers}>
                                                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                                            <XAxis dataKey="browser" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                                            <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                                            <Tooltip />
                                                            <Bar dataKey="users" name="Users" radius={[6, 6, 0, 0]}>
                                                                {gaData.browsers.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                                                            </Bar>
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* ─── Hourly Distribution ─── */}
                                        <Card className="nm-card !p-6">
                                            <CardHeader className="!p-0 !pb-4">
                                                <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                    <Clock size={18} className="text-violet-500" /> Hourly Distribution (7 Days)
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="!p-0">
                                                <ResponsiveContainer width="100%" height={220}>
                                                    <BarChart data={gaData.hourlyDistribution.map(h => ({ ...h, label: `${h.hour}:00` }))}>
                                                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                                        <XAxis dataKey="label" tick={{ fontSize: 9, fill: '#94a3b8' }} />
                                                        <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                                        <Tooltip />
                                                        <Bar dataKey="users" name="Users" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </CardContent>
                                        </Card>

                                        {/* ─── Row: Operating Systems + Referrers ─── */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* OS */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Monitor size={18} className="text-green-500" /> Operating Systems
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <div className="space-y-2">
                                                        {gaData.operatingSystems.map(os => {
                                                            const total = gaData.operatingSystems.reduce((s, x) => s + x.users, 0);
                                                            const pct = total > 0 ? (os.users / total * 100) : 0;
                                                            return (
                                                                <div key={os.os} className="flex items-center gap-2">
                                                                    <span className="text-xs font-graduate font-bold text-slate-600 w-24 truncate">{os.os}</span>
                                                                    <div className="flex-1 bg-slate-100 rounded-full h-2.5">
                                                                        <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2.5 rounded-full" style={{ width: `${pct}%` }} />
                                                                    </div>
                                                                    <span className="text-[10px] text-slate-400 font-bold w-16 text-right">{os.users} ({pct.toFixed(0)}%)</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            {/* Referrers */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <ArrowUpRight size={18} className="text-pink-500" /> Top Referrers
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <div className="space-y-2">
                                                        {gaData.referrers.slice(0, 10).map((r, i) => (
                                                            <div key={r.source} className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-[9px] font-black">{i + 1}</span>
                                                                    <span className="text-xs font-semibold text-slate-700 truncate max-w-[150px]">{r.source}</span>
                                                                </div>
                                                                <div className="flex gap-3">
                                                                    <span className="text-[10px] text-slate-400">{r.sessions} sessions</span>
                                                                    <span className="text-[10px] text-indigo-500 font-bold">{r.users} users</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* ─── Row: Landing Pages ─── */}
                                        <Card className="nm-card !p-6">
                                            <CardHeader className="!p-0 !pb-4">
                                                <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                    <ArrowUpRight size={18} className="text-teal-500" /> Landing Pages
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="!p-0">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-xs">
                                                        <thead>
                                                            <tr className="border-b border-slate-100">
                                                                <th className="text-left py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">Landing Page</th>
                                                                <th className="text-right py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">Sessions</th>
                                                                <th className="text-right py-2 px-3 font-graduate font-black text-slate-500 uppercase tracking-wider text-[10px]">Bounce Rate</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {gaData.landingPages.map((lp) => (
                                                                <tr key={lp.page} className="border-b border-slate-50 hover:bg-slate-50/50">
                                                                    <td className="py-2.5 px-3 font-semibold text-slate-700 max-w-[400px] truncate">{lp.page}</td>
                                                                    <td className="py-2.5 px-3 text-right font-bold text-indigo-600">{lp.sessions.toLocaleString()}</td>
                                                                    <td className="py-2.5 px-3 text-right text-slate-500">{formatPercent(lp.bounceRate)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* ─── Row: Cities + Languages + Screen Resolutions ─── */}
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {/* Cities */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-3">
                                                    <CardTitle className="text-sm font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <MapPin size={16} className="text-red-500" /> Top Cities
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <div className="space-y-1.5 max-h-[300px] overflow-y-auto">
                                                        {gaData.cities.map((c, i) => (
                                                            <div key={c.city} className="flex justify-between items-center py-1 px-2 rounded hover:bg-slate-50 text-xs">
                                                                <span className="flex items-center gap-1.5">
                                                                    <span className="text-[9px] text-slate-300 font-bold">{i + 1}.</span>
                                                                    <span className="text-slate-700 font-semibold truncate max-w-[120px]">{c.city}</span>
                                                                </span>
                                                                <span className="text-indigo-500 font-bold text-[10px]">{c.users}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            {/* Languages */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-3">
                                                    <CardTitle className="text-sm font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Languages size={16} className="text-amber-500" /> Languages
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <div className="space-y-1.5 max-h-[300px] overflow-y-auto">
                                                        {gaData.languages.map((l, i) => (
                                                            <div key={l.language} className="flex justify-between items-center py-1 px-2 rounded hover:bg-slate-50 text-xs">
                                                                <span className="flex items-center gap-1.5">
                                                                    <span className="text-[9px] text-slate-300 font-bold">{i + 1}.</span>
                                                                    <span className="text-slate-700 font-semibold truncate max-w-[120px]">{l.language}</span>
                                                                </span>
                                                                <span className="text-amber-500 font-bold text-[10px]">{l.users}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            {/* Screen Resolutions */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-3">
                                                    <CardTitle className="text-sm font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Monitor size={16} className="text-indigo-500" /> Screen Sizes
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="!p-0">
                                                    <div className="space-y-1.5 max-h-[300px] overflow-y-auto">
                                                        {gaData.screenResolutions.map((sr, i) => (
                                                            <div key={sr.resolution} className="flex justify-between items-center py-1 px-2 rounded hover:bg-slate-50 text-xs">
                                                                <span className="flex items-center gap-1.5">
                                                                    <span className="text-[9px] text-slate-300 font-bold">{i + 1}.</span>
                                                                    <span className="text-slate-700 font-semibold">{sr.resolution}</span>
                                                                </span>
                                                                <span className="text-indigo-500 font-bold text-[10px]">{sr.users}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {activeTab === "inquiries" && (
                            <div className="space-y-8">
                                <div className="flex justify-between items-center bg-white p-6 rounded-[30px] shadow-sm border border-slate-100">
                                    <h2 className="text-3xl font-black text-slate-800 font-graduate tracking-tight">Contact Inquiries</h2>
                                    <div className="text-[10px] font-black font-graduate text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                                        Total: {inquiries.length} submissions
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    {inquiries.map((inq) => (
                                        <Card key={inq.id} className="nm-card !p-6 flex flex-col md:flex-row items-start gap-6 group hover:shadow-2xl transition-all duration-500 bg-white">
                                            <div className="flex-1 space-y-4">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <h3 className="text-xl font-black text-slate-800 font-graduate">{inq.name}</h3>
                                                    <span className="text-[10px] font-black text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full font-graduate uppercase">{inq.email}</span>
                                                    <span className="text-[10px] font-black text-slate-400 font-graduate ml-auto flex items-center gap-1">
                                                        <Clock size={12} /> {inq.submittedAt?.toDate?.()?.toLocaleString() || new Date(inq.submittedAt).toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                    <div>
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-graduate mb-1">Phone</p>
                                                        <p className="text-sm font-bold text-slate-700">{inq.phone || 'N/A'}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-graduate mb-1">Subject</p>
                                                        <p className="text-sm font-bold text-slate-700">{inq.subject || 'General Inquiry'}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-graduate mb-2">Message Content</p>
                                                    <div className="bg-white p-6 rounded-2xl border-2 border-slate-100/50 text-slate-600 text-sm leading-relaxed shadow-inner italic">
                                                        "{inq.message}"
                                                    </div>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-12 w-12 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-2xl shrink-0 mt-1"
                                                onClick={async () => {
                                                    if (window.confirm("Remove this inquiry?")) {
                                                        await deleteDoc(doc(db, "contact_inquiries", inq.id));
                                                        toast({ title: "Inquiry Deleted" });
                                                    }
                                                }}
                                            >
                                                <Trash2 size={20} />
                                            </Button>
                                        </Card>
                                    ))}
                                    {inquiries.length === 0 && (
                                        <div className="nm-card !p-20 text-center text-slate-300">
                                            <MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
                                            <p className="font-graduate uppercase tracking-[0.3em] text-sm text-slate-400 text-center">No inbox messages yet...</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === "visitors" && (
                            <div className="space-y-8">
                                <div className="flex justify-between items-center bg-white p-6 rounded-[30px] shadow-sm border border-slate-100">
                                    <h2 className="text-3xl font-black text-slate-800 font-graduate tracking-tight">Custom Visitor Log</h2>
                                    <div className="text-[10px] font-black font-graduate text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                                        Last 500 Activities
                                    </div>
                                </div>

                                <Card className="nm-card !p-0 overflow-hidden bg-white">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-xs text-left">
                                            <thead>
                                                <tr className="bg-slate-50 border-b border-slate-100">
                                                    <th className="py-4 px-6 font-graduate font-black text-[10px] uppercase tracking-widest text-slate-400">Timestamp</th>
                                                    <th className="py-4 px-6 font-graduate font-black text-[10px] uppercase tracking-widest text-slate-400">Path Name</th>
                                                    <th className="py-4 px-6 font-graduate font-black text-[10px] uppercase tracking-widest text-slate-400">Environment</th>
                                                    <th className="py-4 px-6 font-graduate font-black text-[10px] uppercase tracking-widest text-slate-400">Browser / OS</th>
                                                    <th className="py-4 px-6 font-graduate font-black text-[10px] uppercase tracking-widest text-slate-400 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {visitors.map((v) => (
                                                    <tr key={v.id} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="py-4 px-6">
                                                            <p className="font-bold text-slate-700">{v.timestamp?.toDate?.()?.toLocaleTimeString() || "Live"}</p>
                                                            <p className="text-[10px] text-slate-400">{v.timestamp?.toDate?.()?.toLocaleDateString() || "Just now"}</p>
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            <span className="font-graduate font-black text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 uppercase italic">
                                                                {v.path || '/'}
                                                            </span>
                                                        </td>
                                                        <td className="py-4 px-6 text-slate-500 font-medium">
                                                            {v.screen} • {v.language}
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            <p className="text-slate-700 font-bold">{v.browser}</p>
                                                            <p className="text-[10px] text-slate-400">{v.os} ({v.platform})</p>
                                                        </td>
                                                        <td className="py-4 px-6 text-right">
                                                            <button
                                                                onClick={async () => {
                                                                    if (window.confirm("Purge this log entry?")) {
                                                                        await deleteDoc(doc(db, "site_analytics", v.id));
                                                                    }
                                                                }}
                                                                className="text-slate-300 hover:text-red-500 transition-colors"
                                                            >
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {visitors.length === 0 && (
                                            <div className="py-20 text-center">
                                                <Activity size={48} className="mx-auto mb-4 text-slate-200 animate-pulse" />
                                                <p className="font-graduate text-slate-400 uppercase tracking-[0.2em] text-[10px]">Awaiting First Connection...</p>
                                            </div>
                                        )}
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
                                                <div
                                                    className="text-slate-500 text-xs line-clamp-2 italic font-fondamento text-lg"
                                                    dangerouslySetInnerHTML={{ __html: (post.content || '').replace(/<[^>]+>/g, '').substring(0, 150) + "..." }}
                                                />
                                                <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
                                                    <span className="flex items-center text-[10px] font-black text-slate-400 uppercase font-graduate tracking-widest"><Clock size={12} className="mr-1" /> {post.date}</span>
                                                    {post.tags?.map(t => (
                                                        <span key={t} className="text-[8px] bg-slate-100 px-2 py-0.5 rounded-full font-black text-slate-400 uppercase font-graduate">#{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                {/* Edit Button (Placeholder functionality) */}
                                                <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-colors"
                                                    onClick={() => handleEditBlog(post)}
                                                >
                                                    <Edit size={20} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
                                                    onClick={() => handleDeleteBlog(post.id, "")}
                                                >
                                                    <Trash2 size={20} />
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
                                        <h2 className="text-4xl font-black text-slate-800 font-graduate">{editingId ? "Edit Publication" : "New Publication"}</h2>
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
                                            id="blog-image-input" // Fixed ID
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={e => setImageFile(e.target.files?.[0] || null)}
                                        />
                                        {imageFile || existingImageUrl ? (
                                            <>
                                                <img src={imageFile ? URL.createObjectURL(imageFile) : (existingImageUrl || "")} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
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

                                            {/* Rich Text Editor with full HTML paste support */}
                                            <RichTextEditor
                                                value={blogForm.content}
                                                onChange={(content) => setBlogForm({ ...blogForm, content })}
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
                                            {uploading ? "SYNCING..." : (editingId ? "UPDATE PUBLICATION" : "FINISH & PUBLISH")}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )}

                    </main >
                </div >
            </div >
            <Footer />
        </div >
    );
};

export default Admin;
