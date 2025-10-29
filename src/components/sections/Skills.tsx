import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2 } from 'lucide-react';
import { skillsData } from '@/data/skills';
import { Badge } from '@/components/common';

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-primary"
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
            <Code2 className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              {t('skills.title')}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="group"
            >
              <div
                className="h-full p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300
                           bg-primary/50 border-default hover:border-accent/50 hover:bg-primary/70 shadow-md hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {t(`skills.categories.${category.key}`)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                    >
                      <Badge size="md">
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
