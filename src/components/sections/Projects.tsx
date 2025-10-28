import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Clock, Code2, Sparkles } from 'lucide-react';
import { fetchGitHubRepos, formatDate } from '@/services/github';
import type { Project } from '@/types';

const GITHUB_USERNAME = 'caiohmb';

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const repos = await fetchGitHubRepos(GITHUB_USERNAME, 6);
        setProjects(repos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <Code2 className="w-16 h-16 text-accent mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div className="h-16 w-16 rounded-full border-4 border-accent/20"></div>
                <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
              </div>
              <p className="text-secondary text-lg">{t('projects.loading')}</p>
            </motion.div>
          </div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center min-h-[400px]"
          >
            <div className="text-center max-w-md mx-auto bg-red-500/10 backdrop-blur-md border border-red-500/30 rounded-2xl p-8">
              <p className="text-red-400 mb-4 text-lg font-medium">{t('projects.error')}</p>
              <p className="text-sm text-red-300/70">{error}</p>
            </div>
          </motion.div>
        )}

        {!loading && !error && projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center min-h-[400px]"
          >
            <p className="text-secondary text-lg">{t('projects.empty')}</p>
          </motion.div>
        )}

        {!loading && !error && projects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                className="group relative h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-accent/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/10 overflow-hidden text-gray-800 dark:text-gray-100">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  {/* Language Badge with glow */}
                  {project.language && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-accent/30 blur-md rounded-full"></div>
                        <div className="relative px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs font-semibold text-accent border border-accent/30">
                          {project.language}
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Decorative corner element */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-br-full opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-grow mb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="mt-1"
                        >
                          <Sparkles className="w-5 h-5 text-accent" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-2.5 py-1 bg-white/5 backdrop-blur-sm rounded-lg text-xs text-gray-400 border border-white/10 hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
                            >
                              #{tag}
                            </motion.span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-500 border border-white/10">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400 pb-4 border-b border-white/5">
                      <motion.div
                        whileHover={{ scale: 1.1, color: '#fbbf24' }}
                        className="flex items-center gap-1.5 transition-colors"
                      >
                        <Star className="w-4 h-4" />
                        <span className="font-medium">{project.stars}</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1.5"
                      >
                        <GitFork className="w-4 h-4" />
                        <span className="font-medium">{project.forks}</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1.5 ml-auto"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs">
                          {formatDate(project.updatedAt, i18n.language === 'pt' ? 'pt-BR' : 'en-US')}
                        </span>
                      </motion.div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent/20 hover:bg-accent/30 text-accent rounded-xl transition-all duration-200 text-sm font-semibold border border-accent/30 hover:border-accent/50 backdrop-blur-sm group/btn"
                      >
                        <Code2 className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                        {t('projects.viewCode')}
                      </motion.a>
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl transition-all duration-200 text-sm font-semibold backdrop-blur-sm group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                          {t('projects.viewDemo')}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* GitHub Profile Link */}
        {!loading && !error && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16"
          >
            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/20 via-purple-500/20 to-blue-500/20 hover:from-accent/30 hover:via-purple-500/30 hover:to-blue-500/30 backdrop-blur-xl text-accent rounded-2xl transition-all duration-300 font-semibold border border-accent/30 hover:border-accent/50 shadow-lg hover:shadow-accent/20 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <Code2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
              <span className="relative z-10">{t('projects.viewAllGitHub')}</span>
              <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
