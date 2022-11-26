import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Particles from "./components/design/Particles";

function App() {
  return (
    <>
      <div className='w-full bg-transparent '>
        <Particles />
        <div className='h-full box-border'>
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
