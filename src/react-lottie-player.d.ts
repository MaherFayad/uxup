// src/react-lottie-player.d.ts
declare module '@lottiefiles/react-lottie-player' {
    import { CSSProperties, Ref } from 'react';
  
    interface PlayerProps {
      autoplay?: boolean;
      loop?: boolean;
      src: string;
      style?: CSSProperties;
      className?: string;
      speed?: number;
      direction?: number;
      hover?: boolean;
      renderer?: 'svg' | 'canvas' | 'html';
      onEvent?: (event: string) => void;
      onClick?: () => void;
      onMouseEnter?: () => void;
      onMouseLeave?: () => void;
      innerRef?: Ref<HTMLDivElement>;
      keepLastFrame?: boolean;
    }
  
    export const Player: React.FC<PlayerProps>;
  }
  