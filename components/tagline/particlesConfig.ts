import type { ISourceOptions } from "@tsparticles/engine";

/**
 * Particles configuration for dissolve effect
 * Creates white particles that scatter outward like sand
 * Particles spawn at text position and fade out while scattering
 */
export const dissolveParticlesConfig: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    move: {
      enable: true,
      direction: "none",
      outModes: {
        default: "out",
      },
      random: true,
      speed: {
        min: 3,
        max: 8,
      },
      straight: false,
      attract: {
        enable: false,
      },
    },
    number: {
      value: 200,
    },
    opacity: {
      value: {
        min: 0.4,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 1.2,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 1,
        max: 4,
      },
      animation: {
        enable: true,
        speed: 1.5,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    life: {
      duration: {
        sync: false,
        value: 0.7,
      },
      count: 1,
      delay: {
        value: 0,
      },
    },
    emitters: {
      direction: "none",
      life: {
        count: 1,
        duration: 0.1,
        delay: 0,
      },
      rate: {
        delay: 0,
        quantity: 180,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
  },
  detectRetina: true,
};

