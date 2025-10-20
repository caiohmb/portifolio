import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, ISourceOptions } from '@tsparticles/engine';

export const ParticleBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded:', container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: ['#00d4ff', '#7c3aed', '#3b82f6'],
          },
          links: {
            color: '#00d4ff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.5, max: 1 },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
      }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 w-full h-full"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}
    />
  );
};
