import React from "react";
import { Particles as Particle } from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particles() {
  // this loads the tsparticles package bundle asynchronously,
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particle
      id='tsparticles'
      init={particlesInit}
      options={tsparticlesConfig}
    />
  );
}

export default Particles;

const tsparticlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 40,
    },
    color: {
      value: "#fff",
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#1c1c1c",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};
