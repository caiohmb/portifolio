import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { heroData } from '@/data/hero';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/50 to-primary -z-10" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
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
            <Award className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
              Certificações
            </h2>
          </div>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
            Minhas certificações profissionais que validam conhecimentos em engenharia de dados
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {heroData.certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
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
                  className="relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-300
                             bg-secondary/40 border-cyan-500/20 hover:border-cyan-500/60 hover:bg-secondary/60
                             hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden h-full"
                >
                  {/* Verify Link Icon */}
                  {cert.verifyUrl && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </div>
                  )}

                  {/* Badge Image Container */}
                  <div className="relative mb-6 h-48 flex items-center justify-center">
                    {cert.badgeUrl ? (
                      <img
                        src={cert.badgeUrl}
                        alt={cert.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3">
                        {cert.icon && (
                          <div className="text-7xl filter drop-shadow-lg">
                            {cert.icon}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Certification Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-primary group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h3>
                    {cert.issuer && (
                      <p className="text-sm text-secondary">
                        {cert.issuer}
                      </p>
                    )}
                    {cert.year && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold">
                          {cert.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-secondary mt-16 text-sm"
        >
          Clique nas certificações para verificar a autenticidade
        </motion.p>
      </div>
    </section>
  );
};
