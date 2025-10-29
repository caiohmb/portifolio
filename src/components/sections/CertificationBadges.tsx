import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import type { Certification } from '@/types';

interface CertificationBadgesProps {
  certifications: Certification[];
  delay?: number;
}

export const CertificationBadges: React.FC<CertificationBadgesProps> = ({
  certifications,
  delay = 0,
}) => {
  return (
    <div className="w-full">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="flex items-center justify-center gap-2 mb-6"
      >
        <Award className="w-5 h-5 text-cyan-400" />
        <h3 className="text-lg md:text-xl font-semibold text-primary">
          Certificações
        </h3>
      </motion.div>

      {/* Certification Badges Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
      >
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.name}
            href={cert.verifyUrl || '#'}
            target={cert.verifyUrl ? '_blank' : undefined}
            rel={cert.verifyUrl ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: delay + 0.3 + (index * 0.1), duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <div
              className="relative p-4 rounded-xl backdrop-blur-sm border transition-all duration-300
                         bg-secondary/40 border-cyan-500/20 hover:border-cyan-500/60 hover:bg-secondary/60
                         cursor-pointer overflow-hidden
                         w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
            >
              {/* Badge Image */}
              {cert.badgeUrl ? (
                <img
                  src={cert.badgeUrl}
                  alt={cert.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 px-2">
                  {cert.icon && (
                    <div className="text-5xl md:text-6xl">
                      {cert.icon}
                    </div>
                  )}
                  <span className="text-xs md:text-sm font-bold text-primary text-center leading-tight">
                    {cert.name}
                  </span>
                  {cert.year && (
                    <span className="text-[10px] text-cyan-400 font-semibold">
                      {cert.year}
                    </span>
                  )}
                </div>
              )}

              {/* Verify Link Icon */}
              {cert.verifyUrl && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </div>
              )}

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>

            {/* Tooltip */}
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2
                         bg-secondary/95 backdrop-blur-md rounded-lg border border-cyan-500/30
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200
                         pointer-events-none whitespace-nowrap z-50 shadow-lg"
            >
              <p className="text-sm font-semibold text-primary">{cert.name}</p>
              {cert.issuer && (
                <p className="text-xs text-secondary mt-0.5">{cert.issuer}</p>
              )}
              {cert.year && (
                <p className="text-xs text-cyan-400 mt-0.5">{cert.year}</p>
              )}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="w-2 h-2 bg-secondary/95 border-r border-b border-cyan-500/30 rotate-45"></div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};
