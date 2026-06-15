// Shared Firebase initialization for Vercel Serverless Functions
// This file is prefixed with _ so Vercel does NOT expose it as an API endpoint

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTx5DTprVwp7za5cZow4jTw_wtNSR6DCA",
    authDomain: "patel-impex.firebaseapp.com",
    projectId: "patel-impex",
    storageBucket: "patel-impex.firebasestorage.app",
    messagingSenderId: "579090779018",
    appId: "1:579090779018:web:4cfaff7ff6be54fcc39673",
    measurementId: "G-2V84H3BM6L"
};

// Prevent re-initialization in hot-reload / warm functions
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
