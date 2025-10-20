import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
          i18n.language === 'pt'
            ? 'bg-cyan-500 text-white'
            : 'bg-secondary/50 text-primary'
        }`}
      >
        PT
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
          i18n.language.startsWith('en')
            ? 'bg-cyan-500 text-white'
            : 'bg-secondary/50 text-primary'
        }`}
      >
        EN
      </motion.button>
    </div>
  );
};
