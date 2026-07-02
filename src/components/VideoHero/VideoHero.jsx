import { useRef, useEffect } from 'react';

export default function VideoHero({ videoSrc, title, subtitle, children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Attempt to play the video
      video.play().catch(() => {
        // Autoplay might be blocked
      });

      // Stop the video at 20 seconds
      const handleTimeUpdate = () => {
        if (video.currentTime >= 20) {
          video.pause();
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      // Cleanup
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-brand-black"
      style={{ height: 'clamp(65vh, 85vh, 100vh)' }}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        autoPlay
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/65 to-brand-black/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center"
        style={{ paddingLeft: 'clamp(1rem, 5vw, 2rem)', paddingRight: 'clamp(1rem, 5vw, 2rem)' }}>
        {children}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black to-transparent z-5"
        style={{ height: 'clamp(5rem, 15vw, 8rem)' }} />
    </div>
  );
}
