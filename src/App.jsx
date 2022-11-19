import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className='h-screen w-full flex flex-col overflow-clip px-96 bg-transparent'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
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
            color: "#111",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />

      <div className='h-full'>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
