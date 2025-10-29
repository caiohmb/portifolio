import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/common';
import { TypeWriter, ScrollIndicator, GlitchEffect } from '@/components/animations';
import { Linkedin, Github, Mail, FileDown, MessageSquare } from 'lucide-react';


export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const tagline = t('hero.tagline', { returnObjects: true }) as string[];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = async () => {
    const email = import.meta.env.VITE_CONTACT_EMAIL || 'seu.email@exemplo.com';
    await navigator.clipboard.writeText(email);
    alert('Email copiado para área de transferência!');
  };

  const socialLinks = {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/seu-perfil',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/seu-usuario',
    cv: import.meta.env.VITE_CV_URL || '/cv/seu-cv.pdf',
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-6 md:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-accent"
          >
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <GlitchEffect text={t('hero.name')} className="text-primary" />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary"
          >
            <span className="inline-block">
              <span className="text-accent">&gt;&gt;&gt;</span>{' '}
              {t('hero.title')}{' '}
              <span className="text-accent">&lt;&lt;&lt;</span>
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <TypeWriter texts={tagline} delay={0.8} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button variant="primary" size="lg" onClick={scrollToProjects}>
              {t('hero.cta_primary')}
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              {t('hero.cta_secondary')}
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            {/* LinkedIn */}
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-default hover:border-accent/50 transition-all duration-150 ease-out"
            >
              <Linkedin className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors duration-150" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 dark:bg-gray-100 backdrop-blur-sm text-white dark:text-gray-800 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-md">
                LinkedIn
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 dark:bg-gray-100 rotate-45"></span>
              </span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-default hover:border-accent/50 transition-all duration-150 ease-out"
            >
              <Github className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors duration-150" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 dark:bg-gray-100 backdrop-blur-sm text-white dark:text-gray-800 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-md">
                GitHub
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 dark:bg-gray-100 rotate-45"></span>
              </span>
            </motion.a>

            {/* Email (copia para clipboard) */}
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-default hover:border-accent/50 transition-all duration-150 ease-out"
            >
              <Mail className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors duration-150" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 dark:bg-gray-100 backdrop-blur-sm text-white dark:text-gray-800 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-md">
                Copiar Email
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 dark:bg-gray-100 rotate-45"></span>
              </span>
            </motion.button>

            {/* Download CV */}
            <motion.a
              href={socialLinks.cv}
              download
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-default hover:border-accent/50 transition-all duration-150 ease-out"
            >
              <FileDown className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors duration-150" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 dark:bg-gray-100 backdrop-blur-sm text-white dark:text-gray-800 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-md">
                Baixar CV
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 dark:bg-gray-100 rotate-45"></span>
              </span>
            </motion.a>

            {/* Mensagem (scroll to contact) */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative p-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-default hover:border-accent/50 transition-all duration-150 ease-out"
            >
              <MessageSquare className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors duration-150" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 dark:bg-gray-100 backdrop-blur-sm text-white dark:text-gray-800 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-md">
                Contato
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 dark:bg-gray-100 rotate-45"></span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};
