import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skillsData } from '@/data/skills';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/30 to-primary -z-10" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

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
            <Code2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
              Skills & Competências
            </h2>
          </div>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            Tecnologias e habilidades que domino na área de engenharia de dados
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="group"
            >
              <div
                className="h-full p-6 rounded-2xl backdrop-blur-md border transition-all duration-300
                           bg-secondary/40 border-cyan-500/20 hover:border-cyan-500/60 hover:bg-secondary/60
                           hover:shadow-xl hover:shadow-cyan-500/20"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl filter drop-shadow-lg">{category.icon}</span>
                  <h3 className="text-lg font-bold text-primary group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg
                                 bg-primary/30 hover:bg-primary/50 transition-colors
                                 border border-transparent hover:border-cyan-500/30"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
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
