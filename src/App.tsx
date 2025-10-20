import { useTranslation } from 'react-i18next';
import { Button, Card } from '@/components/common';
import { Header } from '@/components/layout';
import { Hero, Certifications, Skills, About } from '@/components/sections';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <Header />

      <Hero />

      <Certifications />

      <Skills />

      <About />

      <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gradient mb-8">{t('projects.title')}</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gradient mb-8">{t('contact.title')}</h2>
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
  )
}

export default App
