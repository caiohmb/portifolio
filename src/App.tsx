import { Header } from '@/components/layout';
import { Hero, Certifications, Skills, About, Projects, Contact } from '@/components/sections';
import { DotsBackground } from '@/components/animations';

function App() {

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

      <Contact />
      </div>
    </div>
  )
}

export default App
