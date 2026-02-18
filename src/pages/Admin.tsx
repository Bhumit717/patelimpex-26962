
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
        totalUsers: number;
        newUsers: number;
        activeUsers: number;
        returningUsers: number;
        engagedSessions: number;
        engagementRate: number;
        avgSessionDuration: number;
        avgEngagementTime: number;
        sessions: number;
        sessionsPerUser: number;
        pageViews: number;
        bounceRate: number;
    };
    demographics: Array<{ continent: string; country: string; region: string; city: string; language: string; users: number }>;
    tech: Array<{ device: string; browser: string; os: string; resolution: string; platform: string; users: number }>;
    pages: Array<{ path: string; views: number; users: number; avgTime: number; exits: number }>;
    traffic: Array<{ source: string; medium: string; campaign: string; channel: string; sessions: number; users: number; conversions: number }>;
    events: Array<{ name: string; count: number; users: number }>;
    ecommerce: { transactions: number; revenue: number; purchasers: number; purchases: number; views: number };
    realtime: { activeUsers: number; locations: Array<{ city: string; users: number }>; pages: Array<{ page: string; users: number }> };
    retention: Array<{ type: string; users: number; sessions: number }>;
    daily: Array<{ date: string; users: number; sessions: number; views: number }>;
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
                                        {/* ─── Real-time Snapshot ─── */}
                                        <Card className="border-indigo-200 bg-indigo-50/50 p-6 overflow-hidden relative">
                                            <div className="absolute top-0 right-0 p-4 animate-pulse">
                                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                                            </div>
                                            <div className="flex flex-col md:flex-row items-center gap-8">
                                                <div className="text-center md:text-left">
                                                    <p className="text-[10px] font-graduate font-black uppercase tracking-[0.2em] text-indigo-500">Active users right now</p>
                                                    <h3 className="text-5xl font-black text-indigo-900 font-graduate mt-2">{gaData.realtime.activeUsers}</h3>
                                                </div>
                                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                                    <div className="bg-white/60 p-3 rounded-xl backdrop-blur-sm border border-white">
                                                        <p className="text-[9px] font-graduate font-black text-slate-400 uppercase mb-2 flex items-center gap-1.5"><MapPin size={10} /> Live Locations</p>
                                                        {gaData.realtime.locations.length > 0 ? gaData.realtime.locations.map((loc, i) => (
                                                            <div key={i} className="flex justify-between text-[11px] font-bold py-0.5 border-b border-indigo-100 last:border-0 text-slate-700">
                                                                <span className="truncate max-w-[100px]">{loc.city || 'Unknown'}</span>
                                                                <span className="text-indigo-600">{loc.users}</span>
                                                            </div>
                                                        )) : <p className="text-[10px] text-slate-400 italic">Tracking locations...</p>}
                                                    </div>
                                                    <div className="bg-white/60 p-3 rounded-xl backdrop-blur-sm border border-white">
                                                        <p className="text-[9px] font-graduate font-black text-slate-400 uppercase mb-2 flex items-center gap-1.5"><Eye size={10} /> Active Pages</p>
                                                        {gaData.realtime.pages.length > 0 ? gaData.realtime.pages.map((p, i) => (
                                                            <div key={i} className="flex justify-between text-[11px] font-bold py-0.5 border-b border-indigo-100 last:border-0 text-slate-700">
                                                                <span className="truncate max-w-[100px]">{p.page}</span>
                                                                <span className="text-indigo-600">{p.users}</span>
                                                            </div>
                                                        )) : <p className="text-[10px] text-slate-400 italic">No page data yet</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>

                                        {/* ─── 1. User Analysis Dashboard ─── */}
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                            {[
                                                { label: 'Total Users', value: gaData.overview.totalUsers.toLocaleString(), icon: Users, color: 'from-blue-600 to-cyan-500', sub: `${gaData.overview.returningUsers} returning` },
                                                { label: 'Active Users', value: gaData.overview.activeUsers.toLocaleString(), icon: Activity, color: 'from-emerald-600 to-teal-500', sub: `${gaData.overview.newUsers} new` },
                                                { label: 'Engagement', value: formatPercent(gaData.overview.engagementRate), icon: MousePointerClick, color: 'from-violet-600 to-purple-500', sub: `${gaData.overview.engagedSessions} sessions` },
                                                { label: 'Engage Time', value: formatDuration(gaData.overview.avgEngagementTime), icon: Clock, color: 'from-amber-600 to-orange-500', sub: `${gaData.overview.sessionsPerUser.toFixed(2)} sess/user` },
                                            ].map(s => (
                                                <Card key={s.label} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0">
                                                    <div className={`bg-gradient-to-br ${s.color} p-5 relative overflow-hidden`}>
                                                        <s.icon className="absolute -right-2 -bottom-2 text-white/10" size={80} />
                                                        <div className="relative z-10">
                                                            <span className="text-white/70 text-[10px] font-graduate font-black uppercase tracking-widest">{s.label}</span>
                                                            <p className="text-4xl font-black text-white mt-2 font-graduate leading-none">{s.value}</p>
                                                            <div className="flex items-center gap-1.5 mt-3">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm" />
                                                                <span className="text-white/70 text-[11px] font-graduate font-bold">{s.sub}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))}
                                        </div>

                                        {/* ─── Daily Trend Chart ─── */}
                                        <Card className="nm-card !p-6">
                                            <CardHeader className="!p-0 !pb-6">
                                                <div className="flex justify-between items-center">
                                                    <CardTitle className="text-xl font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Activity size={24} className="text-indigo-500" /> Interaction Trend
                                                    </CardTitle>
                                                    <div className="flex gap-4">
                                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-indigo-500" /> <span className="text-[10px] font-graduate font-bold text-slate-400">USERS</span></div>
                                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-emerald-500" /> <span className="text-[10px] font-graduate font-bold text-slate-400">SESSIONS</span></div>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="!p-0">
                                                <ResponsiveContainer width="100%" height={320}>
                                                    <AreaChart data={gaData.daily.map(d => ({ ...d, label: formatDate(d.date) }))}>
                                                        <defs>
                                                            <linearGradient id="gUsers" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} /><stop offset="95%" stopColor="#6366f1" stopOpacity={0} /></linearGradient>
                                                            <linearGradient id="gSessions" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10b981" stopOpacity={0.4} /><stop offset="95%" stopColor="#10b981" stopOpacity={0} /></linearGradient>
                                                        </defs>
                                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                                        <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} minTickGap={30} />
                                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                                        <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                                                        <Area type="monotone" dataKey="users" stroke="#6366f1" fill="url(#gUsers)" strokeWidth={4} />
                                                        <Area type="monotone" dataKey="sessions" stroke="#10b981" fill="url(#gSessions)" strokeWidth={4} />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </CardContent>
                                        </Card>

                                        {/* ─── 2. Traffic & Acquisition ─── */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4 flex flex-row items-center justify-between">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <TrendingUp size={20} className="text-purple-500" /> Traffic Sources
                                                    </CardTitle>
                                                </CardHeader>
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-5 text-[10px] font-graduate font-black text-slate-400 uppercase tracking-widest border-b pb-2">
                                                        <span className="col-span-2">Source / Medium</span>
                                                        <span className="text-right">Users</span>
                                                        <span className="text-right">Sessions</span>
                                                        <span className="text-right">Conv</span>
                                                    </div>
                                                    {gaData.traffic.slice(0, 8).map((t, i) => (
                                                        <div key={i} className="grid grid-cols-5 items-center text-xs pb-2 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-1">
                                                            <div className="col-span-2 flex items-center gap-2">
                                                                <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${GRADIENT_COLORS[i % GRADIENT_COLORS.length]}`} />
                                                                <div>
                                                                    <p className="font-bold text-slate-700 truncate">{t.source}</p>
                                                                    <p className="text-[9px] text-slate-400 uppercase font-graduate">{t.medium}</p>
                                                                </div>
                                                            </div>
                                                            <span className="text-right font-bold text-slate-600">{t.users}</span>
                                                            <span className="text-right text-slate-500">{t.sessions}</span>
                                                            <span className="text-right font-black text-emerald-500">{t.conversions}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Card>

                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Plus size={20} className="text-pink-500" /> Events & Conversion Analysis
                                                    </CardTitle>
                                                </CardHeader>
                                                <div className="space-y-3">
                                                    {gaData.events.length > 0 ? gaData.events.map((e, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <span className="text-[10px] font-graduate font-black text-indigo-400 w-8">#{(i + 1).toString().padStart(2, '0')}</span>
                                                            <div className="flex-1">
                                                                <div className="flex justify-between text-[11px] mb-1">
                                                                    <span className="font-graduate font-black text-slate-600 uppercase tracking-wider">{e.name.replace(/_/g, ' ')}</span>
                                                                    <span className="font-bold text-indigo-600">{e.count.toLocaleString()} ops</span>
                                                                </div>
                                                                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                                                    <div className="bg-indigo-500 h-full transition-all" style={{ width: `${Math.min(100, (e.count / gaData.overview.pageViews) * 100)}%` }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )) : <p className="text-xs text-slate-400 italic py-10 text-center">No custom event data recorded for this property.</p>}
                                                </div>
                                            </Card>
                                        </div>

                                        {/* ─── 3. Page & Screen Performance ─── */}
                                        <Card className="nm-card !p-6">
                                            <CardHeader className="!p-0 !pb-4 flex flex-row items-center justify-between">
                                                <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                    <Eye size={22} className="text-emerald-500" /> Content & Behavior Analysis
                                                </CardTitle>
                                            </CardHeader>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-xs">
                                                    <thead>
                                                        <tr className="border-b border-slate-100/50">
                                                            <th className="text-left py-3 px-4 font-graduate font-black text-slate-400 uppercase tracking-widest text-[9px]">Page Path</th>
                                                            <th className="text-right py-3 px-4 font-graduate font-black text-slate-400 uppercase tracking-widest text-[9px]">Views</th>
                                                            <th className="text-right py-3 px-4 font-graduate font-black text-slate-400 uppercase tracking-widest text-[9px]">Exits</th>
                                                            <th className="text-right py-3 px-4 font-graduate font-black text-slate-400 uppercase tracking-widest text-[9px]">Avg. Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {gaData.pages.map((p, i) => (
                                                            <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
                                                                <td className="py-3 px-4">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-[10px] text-slate-300 font-bold w-4">{(i + 1)}</span>
                                                                        <span className="font-semibold text-slate-700 max-w-[400px] truncate group-hover:text-indigo-600 transition-colors">{p.path}</span>
                                                                        <ArrowUpRight size={10} className="text-slate-200 group-hover:text-indigo-300" />
                                                                    </div>
                                                                </td>
                                                                <td className="py-3 px-4 text-right font-black text-slate-900">{p.views.toLocaleString()}</td>
                                                                <td className="py-3 px-4 text-right text-slate-500">{p.exits.toLocaleString()}</td>
                                                                <td className="py-3 px-4 text-right font-bold text-indigo-500">{formatDuration(p.avgTime)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Card>

                                        {/* ─── 4. Demographics & Tech Breakdown ─── */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Location Analysis */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Globe size={20} className="text-blue-500" /> Demographic & Geospatial Analysis
                                                    </CardTitle>
                                                </CardHeader>
                                                <div className="space-y-4">
                                                    {gaData.demographics.slice(0, 10).map((d, i) => (
                                                        <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-graduate font-black text-[9px] text-slate-400">{i + 1}</div>
                                                                <div>
                                                                    <p className="font-bold text-slate-700 text-sm leading-tight">{d.country} <span className="text-[10px] text-slate-300 ml-1">({d.continent})</span></p>
                                                                    <p className="text-[10px] text-slate-400 flex items-center gap-1"><MapPin size={8} /> {d.city || 'Unknown Region'}</p>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="font-black text-blue-600 text-sm">{d.users.toLocaleString()}</p>
                                                                <p className="text-[9px] font-graduate font-black text-slate-300 uppercase">Users</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Card>

                                            {/* Technology & Platforms */}
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-6">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Settings size={20} className="text-orange-500" /> Platform & Technology Profile
                                                    </CardTitle>
                                                </CardHeader>
                                                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                                    {/* Devices (Simplified) */}
                                                    <div>
                                                        <p className="text-[10px] font-graduate font-black text-slate-400 uppercase tracking-widest border-b pb-2 mb-3">Device Mix</p>
                                                        {Array.from(new Set(gaData.tech.map(t => t.device))).map(dev => {
                                                            const users = gaData.tech.filter(t => t.device === dev).reduce((sum, x) => sum + x.users, 0);
                                                            const pct = (users / gaData.overview.activeUsers) * 100;
                                                            return (
                                                                <div key={dev} className="mb-3">
                                                                    <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1 capitalize">
                                                                        <span>{dev}</span>
                                                                        <span className="text-indigo-500">{pct.toFixed(1)}%</span>
                                                                    </div>
                                                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                                        <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-1000" style={{ width: `${pct}%` }} />
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    {/* Browsers (Simplified) */}
                                                    <div>
                                                        <p className="text-[10px] font-graduate font-black text-slate-400 uppercase tracking-widest border-b pb-2 mb-3">Browser Market</p>
                                                        {Array.from(new Set(gaData.tech.map(t => t.browser))).slice(0, 4).map(br => {
                                                            const users = gaData.tech.filter(t => t.browser === br).reduce((sum, x) => sum + x.users, 0);
                                                            const pct = (users / gaData.overview.activeUsers) * 100;
                                                            return (
                                                                <div key={br} className="mb-3">
                                                                    <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1 capitalize">
                                                                        <span>{br}</span>
                                                                        <span className="text-amber-500">{pct.toFixed(1)}%</span>
                                                                    </div>
                                                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                                        <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-1000" style={{ width: `${pct}%` }} />
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                {/* More Tech details */}
                                                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between gap-4 overflow-x-auto pb-2">
                                                    <div className="shrink-0 bg-slate-50 p-2 rounded-lg border border-slate-100 min-w-[120px]">
                                                        <p className="text-[9px] font-graduate font-black text-slate-300 uppercase">Top OS</p>
                                                        <p className="text-[11px] font-bold text-slate-600 truncate">{gaData.tech[0]?.os || 'N/A'}</p>
                                                    </div>
                                                    <div className="shrink-0 bg-slate-50 p-2 rounded-lg border border-slate-100 min-w-[120px]">
                                                        <p className="text-[9px] font-graduate font-black text-slate-300 uppercase">Top Res</p>
                                                        <p className="text-[11px] font-bold text-slate-600 truncate">{gaData.tech[0]?.resolution || 'N/A'}</p>
                                                    </div>
                                                    <div className="shrink-0 bg-slate-50 p-2 rounded-lg border border-slate-100 min-w-[120px]">
                                                        <p className="text-[9px] font-graduate font-black text-slate-300 uppercase">Main Language</p>
                                                        <p className="text-[11px] font-bold text-slate-600 truncate">{gaData.demographics[0]?.language || 'N/A'}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>

                                        {/* ─── 5. Retention & Behavioral Cohorts ─── */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Card className="nm-card !p-6">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <RefreshCw size={20} className="text-emerald-500" /> User Retention Profile
                                                    </CardTitle>
                                                </CardHeader>
                                                <div className="flex h-[200px] items-end justify-around gap-4 pt-10 px-4">
                                                    {gaData.retention.map((r, i) => {
                                                        const total = gaData.retention.reduce((sum, x) => sum + x.users, 0);
                                                        const h = (r.users / total) * 100;
                                                        return (
                                                            <div key={i} className="flex-1 group relative">
                                                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                                    {r.users} users
                                                                </div>
                                                                <div
                                                                    className={`w-full rounded-t-xl bg-gradient-to-b ${i % 2 === 0 ? 'from-emerald-400 to-teal-500' : 'from-indigo-400 to-indigo-600'} transition-all duration-1000 shadow-lg`}
                                                                    style={{ height: `${h}%` }}
                                                                />
                                                                <div className="text-center mt-3">
                                                                    <p className="text-[10px] font-graduate font-black text-slate-400 uppercase tracking-tighter">{r.type}</p>
                                                                    <p className="text-[11px] font-bold text-slate-700">{Math.round(h)}%</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Card>

                                            <Card className="nm-card !p-6 border-indigo-100 bg-gradient-to-br from-white to-slate-50/50">
                                                <CardHeader className="!p-0 !pb-4">
                                                    <CardTitle className="text-lg font-black font-graduate text-slate-800 flex items-center gap-2">
                                                        <Plus size={20} className="text-indigo-500" /> Revenue & Commerce Overview
                                                    </CardTitle>
                                                </CardHeader>
                                                <div className="grid grid-cols-2 gap-6 mt-4">
                                                    <div className="bg-white p-4 rounded-2xl border border-indigo-50 shadow-sm">
                                                        <p className="text-[9px] font-graduate font-black text-slate-400 uppercase tracking-widest mb-1">Total Revenue</p>
                                                        <p className="text-3xl font-black text-emerald-600 font-graduate">${gaData.ecommerce.revenue.toLocaleString()}</p>
                                                        <p className="text-[10px] text-slate-400 mt-2">Conversion: {((gaData.ecommerce.transactions / gaData.overview.sessions) * 100).toFixed(2)}%</p>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-2xl border border-indigo-50 shadow-sm">
                                                        <p className="text-[9px] font-graduate font-black text-slate-400 uppercase tracking-widest mb-1">Transactions</p>
                                                        <p className="text-3xl font-black text-indigo-900 font-graduate">{gaData.ecommerce.transactions}</p>
                                                        <p className="text-[10px] text-slate-400 mt-2">{gaData.ecommerce.purchasers} Unique Purchasers</p>
                                                    </div>
                                                </div>
                                                <div className="mt-8">
                                                    <div className="flex justify-between text-[10px] font-graduate font-black text-slate-400 uppercase mb-3">
                                                        <span>Checkout Funnel Basics</span>
                                                        <span>Engagement</span>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-slate-200" />
                                                            <span className="text-[11px] text-slate-600 flex-1">Item View to Purchased</span>
                                                            <span className="text-[11px] font-bold text-indigo-500">{((gaData.ecommerce.purchases / Math.max(1, gaData.ecommerce.views)) * 100).toFixed(1)}%</span>
                                                        </div>
                                                        <div className="w-full bg-slate-50 rounded-full h-1">
                                                            <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${Math.min(100, (gaData.ecommerce.purchases / Math.max(1, gaData.ecommerce.views)) * 100)}%` }} />
                                                        </div>
                                                    </div>
                                                </div>
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
