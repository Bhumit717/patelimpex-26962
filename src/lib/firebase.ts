import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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
export const storage = getStorage(app);
export const db = getFirestore(app);

// Upload visitor image
export const uploadVisitorImage = async (imageBlob: Blob): Promise<string> => {
  const timestamp = Date.now();
  const fileName = `visitors/${timestamp}.jpg`;
  const storageRef = ref(storage, fileName);
  
  await uploadBytes(storageRef, imageBlob);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

// Get all visitor images
export const getVisitorImages = async (): Promise<string[]> => {
  const listRef = ref(storage, 'visitors');
  const result = await listAll(listRef);
  
  const urls = await Promise.all(
    result.items.map(item => getDownloadURL(item))
  );
  
  return urls;
};

// Verify admin password
export const verifyAdminPassword = async (password: string): Promise<boolean> => {
  // Password is stored as PATELIMPEX
  const correctPassword = "PATELIMPEX";
  return password === correctPassword;
};

// Store admin password in Firestore (call once to initialize)
export const initializeAdminPassword = async () => {
  const docRef = doc(db, "config", "admin");
  await setDoc(docRef, { password: "PATELIMPEX" });
};
