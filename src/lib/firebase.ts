import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtWGC2M5CqAhDK1O7mVqYvkhCqXhv0Ii0",
    authDomain: "mark-overseas.firebaseapp.com",
    projectId: "mark-overseas",
    storageBucket: "mark-overseas.firebasestorage.app",
    messagingSenderId: "558178626256",
    appId: "1:558178626256:web:c543cdd71c3e29019cccd5",
    measurementId: "G-48YT3FTPSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, db, storage, analytics };
