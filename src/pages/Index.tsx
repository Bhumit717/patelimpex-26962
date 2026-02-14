import { useState, useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OpeningAnimation from "@/components/OpeningAnimation";
import LogoScroll from "@/components/LogoScroll";
import TranslationBanner from "@/components/TranslationBanner";
import PopularPages from "@/components/PopularPages";

// Lazy load non-critical components for better performance
const WhatsAppChat = lazy(() => import("@/components/WhatsAppChat"));
import { useLocationTracking } from "@/hooks/useLocationTracking";
import SEOHead from "@/components/SEOHead";
const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  // Track user location and send to API (deferred and optimized)
  useLocationTracking();
  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  // Preload critical resources
  useEffect(() => {
    const preloadResources = () => {
      // Preload critical images
      const criticalImages = ['/lovable-uploads/53ec340c-22b1-40c1-b206-d24555cba152.png'];
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload the hero video for instant playback
      const videoLink = document.createElement('link');
      videoLink.rel = 'preload';
      videoLink.as = 'video';
      videoLink.href = '/hero-video.mp4';
      videoLink.type = 'video/mp4';
      document.head.appendChild(videoLink);
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadResources);
    } else {
      setTimeout(preloadResources, 100);
    }
  }, []);

  // Scroll Reveal Logic (remains same)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [showAnimation]); // Re-run when animation finishes to catch elements

  return (
    <div className="min-h-screen relative">
      <SEOHead title="Import Export Company in India | Patel Impex" description="Patel Impex is a leading government recognized import export company in India dealing in agro products, spices, and more." canonicalUrl="/" />

      {/* Animation Overlay - Mounted on top */}
      {showAnimation && (
        <div className="fixed inset-0 z-[9999]">
          <OpeningAnimation onComplete={handleAnimationComplete} />
        </div>
      )}

      {/* Main Site Content - Mounted immediately to allow preloading */}
      {/* Hidden visually during animation but present in DOM for asset loading */}
      <div className={showAnimation ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 transition-opacity duration-700'}>
        <TranslationBanner />
        <Navigation />
        <main role="main">
          <Hero />
          <div className="reveal"><Products /></div>
          <div className="reveal"><About /></div>
          <div className="reveal"><PopularPages /></div>
          <div className="reveal"><Contact /></div>
        </main>

        <Footer />

        {/* Lazy load WhatsApp chat with better fallback */}
        <Suspense fallback={<div className="sr-only">Loading chat support...</div>}>
          <WhatsAppChat />
        </Suspense>
      </div>
    </div>
  );
};
export default Index;