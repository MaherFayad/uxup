// Components/Preloader/Preloader.tsx
import React, { useRef, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface PreloaderProps {
  onAnimationComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onAnimationComplete }) => {
  const playerRef = useRef<any>(null); // Use 'any' type for playerRef

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 3500);

    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pause(); // No TypeScript error with 'any' type
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="preloader">
      <Player
        autoplay
        loop={false}
        src="/uxup.json"
        style={{ width: '100%', height: '100%' }}
        speed={2}
      />
    </div>
  );
};

export default Preloader;
