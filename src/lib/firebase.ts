import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTx5DTprVwp7za5cZow4jTw_wtNSR6DCA",
  authDomain: "patel-impex.firebaseapp.com",
  projectId: "patel-impex",
  storageBucket: "patel-impex.firebasestorage.app",
  messagingSenderId: "579090779018",
  appId: "1:579090779018:web:4cfaff7ff6be54fcc39673",
  measurementId: "G-2V84H3BM6L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ImgBB API key
const IMGBB_API_KEY = "44703e31685d651902ca04050f8d5bd7";

// Upload image to ImgBB and return URL
export const uploadToImgBB = async (imageBlob: Blob): Promise<string> => {
  const formData = new FormData();
  formData.append('image', imageBlob);
  
  const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: 'POST',
    body: formData
  });
  
  const data = await response.json();
  if (data.success) {
    return data.data.url;
  }
  throw new Error('ImgBB upload failed');
};

// Get location data from IP
export const getLocationFromIP = async (): Promise<{ country: string; state: string; city: string; ip: string }> => {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'PatelImpex/1.0'
      }
    });
    const data = await response.json();
    return {
      country: data.country_name || 'Unknown',
      state: data.region || 'Unknown',
      city: data.city || 'Unknown',
      ip: data.ip || 'Unknown'
    };
  } catch {
    return { country: 'Unknown', state: 'Unknown', city: 'Unknown', ip: 'Unknown' };
  }
};

// Save visitor image URL with location to Firestore
export const saveVisitorImage = async (imageUrl: string, location?: { country: string; state: string; city: string; ip: string }): Promise<void> => {
  await addDoc(collection(db, "visitors"), {
    imageUrl,
    country: location?.country || 'Unknown',
    state: location?.state || 'Unknown',
    city: location?.city || 'Unknown',
    ip: location?.ip || 'Unknown',
    timestamp: Date.now()
  });
};

export interface VisitorData {
  id: string;
  imageUrl: string;
  country: string;
  state: string;
  city: string;
  ip: string;
  timestamp: number;
}

// Get all visitor images from Firestore
export const getVisitorImages = async (): Promise<VisitorData[]> => {
  const q = query(collection(db, "visitors"), orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(d => ({
    id: d.id,
    imageUrl: d.data().imageUrl,
    country: d.data().country || 'Unknown',
    state: d.data().state || 'Unknown',
    city: d.data().city || 'Unknown',
    ip: d.data().ip || 'Unknown',
    timestamp: d.data().timestamp
  }));
};

// Delete visitor image from Firestore
export const deleteVisitorImage = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, "visitors", id));
};

// Verify admin password
export const verifyAdminPassword = (password: string): boolean => {
  return password === "PATELIMPEX";
};
