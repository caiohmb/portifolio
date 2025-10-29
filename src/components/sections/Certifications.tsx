import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '@/data/certifications';

export const Certifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="certifications"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-secondary"
    >

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              {t('certifications.title')}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.nameKey}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <a
                href={cert.verifyUrl || '#'}
                target={cert.verifyUrl ? '_blank' : undefined}
                rel={cert.verifyUrl ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <div
                  className="relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
                             bg-primary/50 border-default hover:border-accent/50 hover:bg-primary/70 overflow-hidden h-full shadow-md hover:shadow-xl hover:-translate-y-2"
                >
                  {cert.verifyUrl && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </div>
                  )}

                  <div className="relative mb-6 h-48 flex items-center justify-center">
                    {cert.badgeUrl ? (
                      <img
                        src={cert.badgeUrl}
                        alt={t(`certifications.${cert.nameKey}.name`)}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3">
                        {cert.icon && (
                          <div className="text-7xl">
                            {cert.icon}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {t(`certifications.${cert.nameKey}.name`)}
                    </h3>
                    <p className="text-sm text-secondary">
                      {t(`certifications.${cert.nameKey}.issuer`)}
                    </p>
                    {cert.year && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-semibold">
                          {cert.year}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-secondary mt-16 text-sm"
        >
          {t('certifications.verify_text')}
        </motion.p>
      </div>
    </section>
  );
};
