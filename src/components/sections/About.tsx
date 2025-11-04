import { motion } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: "📅",
      value: t('about.stats.experience.value'),
      label: t('about.stats.experience.label')
    },
    {
      icon: "🎓",
      value: t('about.stats.certifications.value'),
      label: t('about.stats.certifications.label')
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-secondary"
    >

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <User className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              {t('about.title')}
            </h2>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Description and Stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {(t('about.description', { returnObjects: true }) as string[]).map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-lg text-secondary leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div
                    className="h-full p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
                               bg-secondary/50 border-default hover:border-accent/50 hover:bg-secondary/70 text-center shadow-md hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary group-hover:text-primary transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Highlights Section - Now as separate subsection below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary text-center">
              {t('about.highlights_title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(t('about.highlights', { returnObjects: true }) as string[]).map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                  className="group"
                >
                  <div className="h-full p-4 rounded-xl backdrop-blur-sm border transition-all duration-300
                                  bg-secondary/30 border-default hover:border-accent/40 hover:bg-secondary/50 shadow-sm hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-secondary group-hover:text-primary transition-colors leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
