import { useState, useEffect } from 'react';

interface ScrambleTextProps {
  texts: string[];
  scrambleDuration?: number;
  displayDuration?: number;
  className?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  texts,
  scrambleDuration = 800,
  displayDuration = 3000,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    const targetText = texts[currentIndex];

    if (isScrambling) {
      // Scramble the entire text
      const scrambleInterval = setInterval(() => {
        setDisplayText(
          targetText
            .split('')
            .map((char) => {
              if (char === ' ') return ' ';
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );
      }, 50);

      // After scramble duration, show the real text
      const revealTimeout = setTimeout(() => {
        clearInterval(scrambleInterval);
        setDisplayText(targetText);
        setIsScrambling(false);

        // Wait before moving to next text
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsScrambling(true);
        }, displayDuration);
      }, scrambleDuration);

      return () => {
        clearInterval(scrambleInterval);
        clearTimeout(revealTimeout);
      };
    }
  }, [currentIndex, texts, scrambleDuration, displayDuration, isScrambling]);

  return (
    <div className={`min-h-[2em] ${className}`}>
      <span className="text-secondary text-lg md:text-xl font-mono">
        {displayText}
      </span>
    </div>
  );
};
