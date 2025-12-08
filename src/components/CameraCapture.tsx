import { useState, useRef, useEffect } from "react";
import { uploadVisitorImage } from "@/lib/firebase";
import { Camera, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CameraCaptureProps {
  onComplete: () => void;
}

const CameraCapture = ({ onComplete }: CameraCaptureProps) => {
  const [step, setStep] = useState<'ask' | 'capturing' | 'preview' | 'done'>('ask');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStep('capturing');
    } catch (err) {
      console.error('Camera access denied:', err);
      setError('Camera access denied. Please allow camera access to continue.');
      setTimeout(onComplete, 2000);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setCapturedImage(imageData);
        setStep('preview');
      }
    }
  };

  const savePhoto = async () => {
    if (capturedImage) {
      try {
        // Convert base64 to blob
        const response = await fetch(capturedImage);
        const blob = await response.blob();
        await uploadVisitorImage(blob);
        setStep('done');
        stopCamera();
        setTimeout(onComplete, 1500);
      } catch (err) {
        console.error('Failed to upload image:', err);
        setError('Failed to save photo. Continuing...');
        stopCamera();
        setTimeout(onComplete, 2000);
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setStep('capturing');
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const skipCapture = () => {
    stopCamera();
    onComplete();
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  if (error) {
    return (
      <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90">
        <div className="text-center text-white p-8">
          <p className="text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/95">
      <div className="bg-card rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
        {step === 'ask' && (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Welcome to Patel Impex</h2>
              <p className="text-muted-foreground">
                For security verification, we would like to capture your photo. This helps us maintain a safe environment for all visitors.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={skipCapture}
              >
                Skip
              </Button>
              <Button 
                className="flex-1"
                onClick={startCamera}
              >
                Allow Camera
              </Button>
            </div>
          </div>
        )}

        {step === 'capturing' && (
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover mirror"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={skipCapture}
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button 
                className="flex-1"
                onClick={capturePhoto}
              >
                <Camera className="w-4 h-4 mr-2" />
                Capture
              </Button>
            </div>
          </div>
        )}

        {step === 'preview' && capturedImage && (
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <img
                src={capturedImage}
                alt="Captured"
                className="w-full h-full object-cover"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
            <p className="text-center text-muted-foreground text-sm">
              Is this photo okay?
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={retakePhoto}
              >
                <X className="w-4 h-4 mr-2" />
                Retake
              </Button>
              <Button 
                className="flex-1"
                onClick={savePhoto}
              >
                <Check className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        )}

        {step === 'done' && (
          <div className="text-center space-y-4 py-8">
            <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <p className="text-lg text-foreground">Thank you! Redirecting...</p>
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default CameraCapture;
