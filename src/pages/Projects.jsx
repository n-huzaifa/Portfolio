import React from "react";
import ProjectCard from "../components/design/ProjectCard";
import ProjectsData from "../assets/projects.json";

function Projects() {
  return (
    <section
      id='projects'
      className='w-full h-screen backdrop-blur-sm font-poppins flex flex-col justify-between'>
      <h1 className='text-5xl w-full text-center font-bold py-5 mt-14 bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 '>
        Projects
      </h1>
      <div className='flex p-12 overflow-y-scroll mb-20 scrollbar-thin scrollbar-thumb-ghost scrollbar-track-base'>
        <div
          className='flex flex-col 
        relative h-[350px] w-[300px] min-w-[250px]
        p-6 rounded-[16px] bg-[#17141d] mr-40 
        text-4xl font-semibold'>
          Some of the projects I've developed so far.
        </div>
        {ProjectsData.map((project, key) => {
          return <ProjectCard data={project} key={key} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
