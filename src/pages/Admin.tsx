
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
    Search,
    Loader2,
    Lock,
    Upload,
    Image as ImageIcon,
    CheckCircle2,
    Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
        <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClick}
            title={title}
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
                                                <img src={imageFile ? URL.createObjectURL(imageFile) : (existingImageUrl || "")} alt="Preview" className="absolute inset-0 w-full h-full object-contain bg-slate-50" />
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
