// Components/Preloader/Preloader.tsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface PreloaderProps {
  onAnimationComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onAnimationComplete }) => {
  return (
    <div className="preloader">
      <Player
        autoplay
        loop={false}
        src="/uxup.json"
        style={{ height: '100vh', width: '100%' }}
        onEvent={(event) => {
          if (event === 'complete') {
            onAnimationComplete();
          }
        }}
      />
    </div>
  );
};

export default Preloader;
