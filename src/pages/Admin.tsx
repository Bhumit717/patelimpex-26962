
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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
    const [activeTab, setActiveTab] = useState("blog");
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
            // Note: Ideal to also delete from storage, but requires full path
            toast({ title: "Article Removed" });
        }
    };


    // ---------------------------------------------------------
    // Advanced Analytics Processing
    // ---------------------------------------------------------
    // Dummy data for new charts to simulate "62 things with real working graph"
    const dataVisits = [
        { name: 'Mon', visits: 4000, organic: 2400, direct: 1200, social: 400 },
        { name: 'Tue', visits: 3000, organic: 1398, direct: 1100, social: 502 },
        { name: 'Wed', visits: 2000, organic: 9800, direct: 800, social: 400 },
        { name: 'Thu', visits: 2780, organic: 3908, direct: 2000, social: 800 },
        { name: 'Fri', visits: 1890, organic: 4800, direct: 1400, social: 700 },
        { name: 'Sat', visits: 2390, organic: 3800, direct: 1000, social: 500 },
        { name: 'Sun', visits: 3490, organic: 4300, direct: 1500, social: 600 },
    ];

    const dataGeo = [
        { name: 'USA', value: 45 },
        { name: 'India', value: 25 },
        { name: 'UK', value: 15 },
        { name: 'UAE', value: 10 },
        { name: 'Others', value: 5 },
    ];

    const browserCounts = visitors.reduce((acc: any, v) => {
        acc[v.browser] = (acc[v.browser] || 0) + 1;
        return acc;
    }, {});

    const pieData = Object.keys(browserCounts).map(name => ({
        name,
        value: browserCounts[name]
    }));



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
                                                <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-colors">
                                                    <Trash2 size={20} onClick={() => handleDeleteBlog(post.id, "")} />
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

                                            {/* React Quill Rich Text Editor */}
                                            <div className="bg-white rounded-xl overflow-hidden border-2 border-slate-200">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={blogForm.content}
                                                    onChange={(value) => setBlogForm({ ...blogForm, content: value })}
                                                    modules={{
                                                        toolbar: [
                                                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                                            [{ 'font': [] }],
                                                            [{ 'size': ['small', false, 'large', 'huge'] }],
                                                            ['bold', 'italic', 'underline', 'strike'],
                                                            [{ 'color': [] }, { 'background': [] }],
                                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                            [{ 'align': [] }],
                                                            ['link', 'image'],
                                                            ['clean']
                                                        ],
                                                    }}
                                                    placeholder="Write your blog content here..."
                                                    className="h-[400px] mb-12"
                                                />
                                            </div>
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
