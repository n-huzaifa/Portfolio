import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Particles from "./components/design/Particles";

function App() {
  return (
    <>
      <div className='h-screen w-full flex flex-col px-96 bg-transparent scrollbar-thin overflow-y-scroll scrollbar-thumb-ghost scrollbar-track-base'>
        <Particles />
        <div className='h-full'>
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
