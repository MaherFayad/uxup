// Components/Preloader/Preloader.tsx
import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Player component with SSR disabled
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

interface PreloaderProps {
  onAnimationComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onAnimationComplete }) => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 3500);

    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pause();
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
