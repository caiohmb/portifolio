import { useTranslation } from 'react-i18next';
import { Button, Card } from '@/components/common';
import { Header } from '@/components/layout';
import { Hero, Certifications, Skills, About, Projects } from '@/components/sections';
import { DotsBackground } from '@/components/animations';

function App() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-primary transition-colors duration-300">
      {/* Background de dots para todo o site */}
      <DotsBackground />

      {/* Conteúdo do site */}
      <div className="relative z-10">
        <Header />

      <Hero />

      <About />

      <Skills />

      <Certifications />

      <Projects />

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">{t('contact.title')}</h2>
          <Card variant="outlined" className="max-w-2xl mx-auto">
            <p className="text-secondary text-lg">
              {t('contact.subtitle')}
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Button variant="primary">{t('contact.email')}</Button>
              <Button variant="outline">{t('contact.linkedin')}</Button>
            </div>
          </Card>
        </div>
      </section>
      </div>
    </div>
  )
}

export default App
