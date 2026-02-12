import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTx5DTprVwp7za5cZow4jTw_wtNSR6DCA",
    authDomain: "patel-impex.firebaseapp.com",
    projectId: "patel-impex",
    storageBucket: "patel-impex.firebasestorage.app",
    messagingSenderId: "579090779018",
    appId: "1:579090779018:web:4cfaff7ff6be54fcc39673",
    measurementId: "G-2V84H3BM6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, db, analytics };
