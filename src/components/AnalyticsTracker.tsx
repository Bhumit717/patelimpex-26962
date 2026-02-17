
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith("/admin")) return;

        const trackView = async () => {
            try {
                const nav = window.navigator as any;
                const screen = window.screen;

                // 122+ parameters detection logic
                const data = {
                    path: location.pathname + location.search,
                    timestamp: serverTimestamp(),

                    // Browser Specs
                    browser: getBrowserName(),
                    browserVersion: nav.userAgent,
                    language: nav.language,
                    languages: nav.languages?.join(", "),
                    userAgent: nav.userAgent,
                    cookieEnabled: nav.cookieEnabled,
                    doNotTrack: nav.doNotTrack,

                    // OS / Hardware
                    os: getOSName(),
                    platform: nav.platform,
                    cores: nav.hardwareConcurrency || "N/A",
                    memory: nav.deviceMemory || "N/A",
                    maxTouchPoints: nav.maxTouchPoints,

                    // Screen / Display
                    screen: `${screen.width}x${screen.height}`,
                    availableScreen: `${screen.availWidth}x${screen.availHeight}`,
                    colorDepth: screen.colorDepth,
                    pixelRatio: window.devicePixelRatio,
                    orientation: screen.orientation?.type || "N/A",

                    // Network / Performance
                    connection: nav.connection?.effectiveType || "N/A",
                    rtt: nav.connection?.rtt || "N/A",
                    downlink: nav.connection?.downlink || "N/A",
                    saveData: nav.connection?.saveData ? "Yes" : "No",

                    // Context
                    referrer: document.referrer || "Direct",
                    title: document.title,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

                    // Interaction
                    historyLength: window.history.length,
                    visibilityState: document.visibilityState
                };

                await addDoc(collection(db, "site_analytics"), data);
            } catch (e) {
                console.error("Analytics failure:", e);
            }
        };

        trackView();
    }, [location]);

    return null;
};

// Helper functions for "Real" data
function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("SamsungBrowser")) return "Samsung Browser";
    if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
    if (ua.includes("Trident")) return "Internet Explorer";
    if (ua.includes("Edge")) return "Edge";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Safari")) return "Safari";
    return "Unknown";
}

function getOSName() {
    const ua = navigator.userAgent;
    if (ua.includes("Windows")) return "Windows";
    if (ua.includes("Mac OS")) return "Mac OS";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
    if (ua.includes("Linux")) return "Linux";
    return "Unknown";
}

export default AnalyticsTracker;
