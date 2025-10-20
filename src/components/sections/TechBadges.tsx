import { motion } from 'framer-motion';
import type { TechBadgesProps } from '@/types';

export const TechBadges: React.FC<TechBadgesProps> = ({ technologies, delay = 0 }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + index * 0.1, duration: 0.3 }}
          className="group relative px-4 py-2 rounded-full
                     bg-secondary/50 backdrop-blur-sm
                     border border-cyan-500/30
                     hover:border-cyan-500 hover:bg-secondary/70
                     hover:shadow-lg hover:shadow-cyan-500/30
                     transition-all duration-300 cursor-default"
        >
          <span className="mr-2 text-lg">{tech.icon}</span>
          <span className="font-semibold text-primary text-sm">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};
