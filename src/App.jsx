import React, { useState } from "react";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className='bg-white dark:bg-gray-800 px-10 md:px-20 lg:px-40'>
        <Navbar darkModeToggle={setDarkMode} darkModeState={darkMode} />
        <Hero />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
