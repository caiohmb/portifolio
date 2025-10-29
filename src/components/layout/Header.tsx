import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle, LanguageSwitcher } from '@/components/common';
import { NavLink } from './NavLink';
import { useScrollPosition } from '@/hooks';

const navigationKeys = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const scrollPosition = useScrollPosition();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navigationKeys.forEach((key) => {
      const element = document.getElementById(key);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'py-3' : 'py-4'}
          ${isScrolled &&
            'bg-secondary/80 backdrop-blur-xl shadow-lg border-b border-accent/10'
          }
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl font-bold"
            >
              <span className="text-accent">Data Engineer</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigationKeys.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (i + 2), duration: 0.3 }}
                >
                  <NavLink
                    href={`#${key}`}
                    label={t(`navigation.${key}`)}
                    isActive={activeSection === key}
                  />
                </motion.div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <LanguageSwitcher />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-primary hover:text-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden bg-primary/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navigationKeys.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <a
                    href={`#${key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${key}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      text-2xl font-semibold
                      transition-all duration-300
                      px-6 py-3 rounded-xl inline-block
                      ${activeSection === key
                        ? 'text-accent bg-accent/10 shadow-md'
                        : 'text-primary hover:text-accent hover:bg-accent/5 hover:shadow-sm hover:scale-105'
                      }
                    `}
                  >
                    {t(`navigation.${key}`)}
                  </a>
                </motion.div>
              ))}
               <div className="absolute bottom-10">
                <LanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
