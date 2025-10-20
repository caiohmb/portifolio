import { useState, useEffect } from 'react';
import type { TypeWriterProps } from '@/types';

export const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(pauseTimeout);
    }

    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    currentIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <div className={`min-h-[2em] ${className}`}>
      <span className="text-secondary text-lg md:text-xl">
        {displayText}
        <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
      </span>
    </div>
  );
};
