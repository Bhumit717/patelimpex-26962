import { useState, useRef, useEffect } from "react";

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Skip animation if loading takes more than 4 seconds
    const loadingTimeout = setTimeout(() => {
      console.log('Video loading timeout - skipping animation');
      onComplete();
    }, 4000);

    const handleVideoEnd = () => {
      clearTimeout(loadingTimeout);
      setVideoEnded(true);
      // Add a small delay before hiding to ensure smooth transition
      setTimeout(() => {
        onComplete();
      }, 300);
    };

    const handleVideoError = (e: Event) => {
      clearTimeout(loadingTimeout);
      console.error('Video failed to load:', e);
      // If video fails to load, skip to main content after a short delay
      setTimeout(() => {
        onComplete();
      }, 1500);
    };

    const handleLoadedData = () => {
      // Set playback rate to make video complete in exactly 3 seconds
      const targetDuration = 3; // 3 seconds
      if (video.duration > targetDuration) {
        video.playbackRate = video.duration / targetDuration;
      }
    };

    // Optimize video loading
    const handleCanPlayThrough = () => {
      clearTimeout(loadingTimeout);
      // Video is ready to play through without buffering
      video.play().catch(error => {
        console.error('Video autoplay failed:', error);
        setTimeout(() => {
          onComplete();
        }, 1500);
      });
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      clearTimeout(loadingTimeout);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 bg-background ${
        videoEnded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ 
        backgroundColor: '#080A09'
      }}
      role="dialog"
      aria-label="Company introduction video"
      aria-modal="true"
    >
      <div className="w-[60vw] h-[60vh] max-w-[600px] max-h-[400px] flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          muted
          playsInline
          preload="metadata"
          aria-label="Patel Impex company introduction video"
        >
          <source 
            src="/logo-animation.mp4" 
            type="video/mp4" 
          />
          <track 
            kind="captions" 
            src="/captions/intro-en.vtt" 
            srcLang="en" 
            label="English captions"
            default
          />
          <p>Your browser does not support the video tag. Please upgrade to a modern browser to view our introduction video.</p>
        </video>
      </div>
    </div>
  );
};

export default OpeningAnimation;
