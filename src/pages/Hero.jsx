import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Logo from "/dev-ed-wave.png";

function Hero() {
  return (
    <div className='min-h-screen '>
      <div className='relative flex flex-col justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-14 overflow-hidden md:w-96 md:h-96'>
        <img src={Logo} alt='' className='' />
      </div>
      <div className='text-center p-10 '>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
          Noor ul Islam Huzaifa
        </h2>
        <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat
          ducimus explicabo exercitationem laborum beatae a, non minus sit
        </p>
      </div>
    </div>
  );
}

export default Hero;
