import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    window.localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    setDarkMode(JSON.parse(window.localStorage.getItem("darkMode")));
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className='bg-[#E3FDFD]  px-5 md:px-20 lg:px-40 font-poppins
        dark:bg-gradient-to-tr dark:from-teal-900 dark:to-[#222831] dark:text-[#EEEEEE]
        '>
        <Navbar darkModeToggle={setDarkMode} darkModeState={darkMode} />
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
