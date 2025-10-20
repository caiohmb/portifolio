import { Button, Card } from '@/components/common';
import { Header } from '@/components/layout';
import { Hero, Certifications } from '@/components/sections';

function App() {
  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      {/* Header com glassmorphism */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Certifications Section */}
      <Certifications />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-12">Sobre</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card variant="default">
              <h3 className="font-bold text-xl mb-2 text-primary">Card Default</h3>
              <p className="text-secondary">Background sutil com backdrop blur</p>
            </Card>
            <Card variant="elevated">
              <h3 className="font-bold text-xl mb-2 text-primary">Card Elevated</h3>
              <p className="text-secondary">Com shadow e hover effect</p>
            </Card>
            <Card variant="outlined">
              <h3 className="font-bold text-xl mb-2 text-primary">Card Outlined</h3>
              <p className="text-secondary">Border animado ao hover</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-12">Skills</h2>
          <Card variant="elevated" className="max-w-4xl mx-auto text-center">
            <h3 className="font-bold text-2xl mb-6 text-primary">Componentes Button</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary">Primary Gradient</Button>
              <Button variant="secondary">Secondary Neumorphic</Button>
              <Button variant="outline">Outline Glassmorphism</Button>
              <Button variant="ghost">Ghost Minimal</Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gradient mb-8">Projetos</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Seção de projetos em desenvolvimento...
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gradient mb-8">Contato</h2>
          <Card variant="outlined" className="max-w-2xl mx-auto">
            <p className="text-secondary text-lg">
              Entre em contato para discutir projetos de dados!
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Button variant="primary">Email</Button>
              <Button variant="outline">LinkedIn</Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
