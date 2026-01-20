import { useState, useRef, useEffect } from "react";

const Logo = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setVideoEnded(true);
      // Auto-replay the video after a short pause
      setTimeout(() => {
        setVideoEnded(false);
        video.currentTime = 0;
        video.play().catch(error => {
          console.error('Video replay failed:', error);
        });
      }, 1000);
    };

    const handleVideoError = (e: Event) => {
      console.error('Video failed to load:', e);
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
      // Video is ready to play through without buffering
      video.play().catch(error => {
        console.error('Video autoplay failed:', error);
      });
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center"
      style={{ 
        backgroundColor: '#080A09'
      }}
    >
      <video
        ref={videoRef}
        className="object-contain"
        muted
        playsInline
        preload="metadata"
        style={{
          width: '50vw',
          height: '50vh'
        }}
        aria-label="Patel Impex logo animation"
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
        <p>Your browser does not support the video tag. Please upgrade to a modern browser to view our logo animation.</p>
      </video>
    </div>
  );
};

export default Logo;