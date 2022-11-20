import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import BgParticles from "./components/design/BgParticles";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full flex flex-col px-96 bg-transparent'>
        <BgParticles />
        <div className='h-full'>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
