import React from "react";
import Logo from "/Cliffs.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
  return (
    <>
      <div
        className='relative flex flex-col justify-center mx-auto 
      bg-gradient-to-b from-teal-500 rounded-full
      w-56 h-56 mt-14 overflow-hidden md:w-96 md:h-96'>
        <LazyLoadImage src={Logo} alt='' className='absolute top-5' />
      </div>
      <div className='text-center p-6 '>
        <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl'>
          Noor ul Islam Huzaifa
        </h2>
        <h3 className='text-xl py-2 md:text-3xl'>MERN Stack Dev</h3>
        <p className='text-sm py-5 leading-6 text-gray-800 dark:text-[#EEEEEE] md:text-lg md:leading-8 max-w-xl mx-auto'>
          I have experience designing, developing, testing, and debugging{" "}
          <span className='text-teal-500'>websites and web apps</span>.
        </p>
      </div>
    </>
  );
}

export default Hero;
