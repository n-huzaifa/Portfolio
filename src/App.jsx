import React, { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className='bg-[#E3FDFD] dark:bg-[#222831] dark:text-[#EEEEEE] px-10 md:px-20 lg:px-40 font-poppins'>
        <Navbar darkModeToggle={setDarkMode} darkModeState={darkMode} />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
