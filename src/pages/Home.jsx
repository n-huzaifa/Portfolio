import React from "react";
import MernStackTooltip from "../components/design/MernStackTooltip";

function Home() {
  return (
    <section id='home' className='mt-48 font-poppins space-y-2 text-ghost'>
      <span className='font-semibold text-lg'>Hey - I'm</span>
      <h2 className='text-5xl w-fit font-bold py-3 bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 '>
        {"<"}Noor ul Islam Huzaifa{"/>"}
      </h2>
      <h2 className='text-4xl w-fit font-bold py-3 text-gray-300'>
        I design & develop user interfaces.
      </h2>
      <p className='text-lg font-light  w-3/4'>
        I'm an Innovative and Task-Driven Developer from{" "}
        <span className='hover:text-ghost transition duration-300 cursor-pointer text-green-600 font-semibold text-lg'>
          Pakistan.
        </span>{" "}
        My development stack of choice is the <MernStackTooltip />
      </p>
      <div className='space-x-5'>
        <a href='#contact'>
          <button
            href='#contact'
            className='btn btn-outline hover:bg-gradient-to-r hover:text-white hover:border-transparent from-purple-400 to-pink-400 mt-10'>
            Contact
          </button>
        </a>
        <a href='/resume.pdf' target='_blank'>
          <button className='btn btn-outline hover:bg-gradient-to-r hover:text-white hover:border-transparent from-purple-400 to-pink-400 mt-10'>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Home;
