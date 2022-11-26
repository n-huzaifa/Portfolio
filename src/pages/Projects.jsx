import React from "react";

function Projects() {
  return (
    <section
      id='projects'
      className='w-full backdrop-blur-sm font-poppins flex p-12 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-700
      '>
      <article
        className='flex flex-col 
        relative h-[350px] w-[400px] min-w-[250px]
        p-6 rounded-[16px] bg-[#17141d] shadow-[-1rem_0_3rem_#000]
        hover:translate-y-[-1rem] peer peer-hover:translate-x-[130px] 
        transition duration-300
        '>
        <header className=''>
          <p className=''>24, may 2020</p>
          <h2 className='font-semibold text-4xl'>This is CSS cards tricks</h2>
        </header>
      </article>
      <article
        className='flex flex-col 
        relative h-[350px] w-[400px] min-w-[250px]
        p-6 rounded-[16px] bg-[#17141d] shadow-[-1rem_0_3rem_#000]
        hover:translate-y-[-1rem] peer peer-hover:translate-x-[130px] [&:not(first-child)]:ml-[-130px]
        transition duration-300
        '>
        <header className=''>
          <p className=''>24, may 2020</p>
          <h2 className='font-semibold text-4xl'>This is CSS cards tricks</h2>
        </header>
      </article>
    </section>
  );
}

export default Projects;
