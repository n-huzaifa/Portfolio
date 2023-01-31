import React, { useState } from "react";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className='bg-[#E3FDFD] dark:bg-gray-800 dark:text-white px-10 md:px-20 lg:px-40'>
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
