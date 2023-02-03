import React from "react";
import Logo from "/Cliffs.png";

function Hero() {
  return (
    <div className='min-h-screen '>
      <img
        src={Logo}
        alt=''
        className='relative flex flex-col justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-16 overflow-hidden md:w-96 md:h-96'
      />
      <div className='text-center p-6 '>
        <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl'>
          Noor ul Islam Huzaifa
        </h2>
        <h3 className='text-xl py-2 md:text-3xl'>MERN Stack Dev</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-[#EEEEEE] md:text-lg max-w-xl mx-auto'>
          Innovative, Good Conversationalist, and Task-Driven Professional with
          experience acquired from completing various projects singlehandedly
          and being a core contributor to a team. I have experience designing,
          developing, testing, and debugging websites and web apps.
        </p>
      </div>
    </div>
  );
}

export default Hero;
