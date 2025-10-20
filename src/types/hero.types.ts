// Hero Section Types

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Certification {
  name: string;
  icon?: string;
  issuer?: string;
  year?: number;
  badgeUrl?: string;
  verifyUrl?: string;
}

export interface CTAButton {
  text: string;
  action: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  tagline: string[];
  mainTechnologies: Technology[];
  certifications: Certification[];
  cta: {
    primary: CTAButton;
    secondary: CTAButton;
  };
}

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

export interface TechBadgesProps {
  technologies: Technology[];
  delay?: number;
}
