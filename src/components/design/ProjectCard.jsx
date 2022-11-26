import React from "react";

function ProjectCard(props) {
  return (
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
  );
}

export default ProjectCard;
