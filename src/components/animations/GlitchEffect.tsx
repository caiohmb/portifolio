import { useState, useCallback } from 'react';
import type { GlitchEffectProps } from '@/types';

export const GlitchEffect: React.FC<GlitchEffectProps> = ({
  text,
  className = '',
  triggerOnHover = true,
  autoPlay = false,
}) => {
  const [isGlitching, setIsGlitching] = useState(autoPlay);
  const [key, setKey] = useState(0);

  const handleMouseEnter = useCallback(() => {
    if (triggerOnHover && !isGlitching) {
      setIsGlitching(true);
      setKey(prev => prev + 1);

      // Stop glitch after animation completes (300ms)
      setTimeout(() => {
        setIsGlitching(false);
      }, 300);
    }
  }, [triggerOnHover, isGlitching]);

  return (
    <span
      className="glitch-wrapper inline-block"
      onMouseEnter={handleMouseEnter}
      data-text={text}
    >
      <span
        key={key}
        className={`glitch-text ${isGlitching ? 'glitching' : ''} ${className}`}
        data-text={text}
      >
        {text}
      </span>
    </span>
  );
};
