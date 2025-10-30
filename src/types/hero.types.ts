// Hero Section Types

export interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  delay?: number;
  className?: string;
}

export interface GlitchEffectProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  autoPlay?: boolean;
}
