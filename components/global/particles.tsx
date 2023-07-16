import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Container, Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);
  return (
    <Particles
      id="tsparticles"
      options={{
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
        },
        particles: {
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          modes: {
            grab: {
              distance: 120,
              links: {
                opacity: 0.7,
              },
            },
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 15,
          },
          opacity: {
            value: 0.05,
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesComponent;
