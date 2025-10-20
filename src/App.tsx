import { useTranslation } from 'react-i18next';
import { Button, Card } from '@/components/common';
import { Header } from '@/components/layout';
import { Hero, Certifications, Skills } from '@/components/sections';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <Header />

      <Hero />

      <Certifications />

      <Skills />

      <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-12">{t('about.title')}</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card variant="default">
              <h3 className="font-bold text-xl mb-2 text-primary">{t('about.cards.default.title')}</h3>
              <p className="text-secondary">{t('about.cards.default.text')}</p>
            </Card>
            <Card variant="elevated">
              <h3 className="font-bold text-xl mb-2 text-primary">{t('about.cards.elevated.title')}</h3>
              <p className="text-secondary">{t('about.cards.elevated.text')}</p>
            </Card>
            <Card variant="outlined">
              <h3 className="font-bold text-xl mb-2 text-primary">{t('about.cards.outlined.title')}</h3>
              <p className="text-secondary">{t('about.cards.outlined.text')}</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills-demo" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-12">{t('skills_section.title')}</h2>
          <Card variant="elevated" className="max-w-4xl mx-auto text-center">
            <h3 className="font-bold text-2xl mb-6 text-primary">{t('skills_section.buttons_title')}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary">{t('skills_section.primary')}</Button>
              <Button variant="secondary">{t('skills_section.secondary')}</Button>
              <Button variant="outline">{t('skills_section.outline')}</Button>
              <Button variant="ghost">{t('skills_section.ghost')}</Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <Button variant="primary" size="sm">{t('skills_section.small')}</Button>
              <Button variant="primary" size="md">{t('skills_section.medium')}</Button>
              <Button variant="primary" size="lg">{t('skills_section.large')}</Button>
            </div>
          </Card>
        </div>
      </section>

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
