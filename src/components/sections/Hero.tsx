import { motion } from 'framer-motion';
import { Button } from '@/components/common';
import { ParticleBackground, TypeWriter, ScrollIndicator, GlitchEffect } from '@/components/animations';
import { TechBadges } from './TechBadges';
import { heroData } from '@/data/hero';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30 -z-[5]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-cyan-400"
          >
            {heroData.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <GlitchEffect text={heroData.name} className="text-gradient" />
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary"
          >
            <span className="inline-block">
              <span className="text-cyan-500">&gt;&gt;&gt;</span>{' '}
              {heroData.title}{' '}
              <span className="text-cyan-500">&lt;&lt;&lt;</span>
            </span>
          </motion.h2>

          {/* TypeWriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <TypeWriter texts={heroData.tagline} delay={0.8} />
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <TechBadges technologies={heroData.mainTechnologies} delay={1} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button variant="primary" size="lg" onClick={scrollToProjects}>
              {heroData.cta.primary.text}
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              {heroData.cta.secondary.text}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};
