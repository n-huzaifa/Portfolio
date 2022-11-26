import React from "react";
import ProjectCard from "../components/design/ProjectCard";

function Projects() {
  return (
    <section
      id='projects'
      className='w-full h-screen backdrop-blur-sm font-poppins flex flex-col justify-center'>
      <div className='flex p-12 overflow-y-scroll scrollbar-thin scrollbar-thumb-ghost scrollbar-track-base'>
        <div
          className='flex flex-col 
        relative h-[350px] w-[400px] min-w-[250px]
        p-6 rounded-[16px] bg-[#17141d] mr-40
        text-4xl font-semibold'>
          These are some of projects which are out there in the wild for the
          peasents to see.
        </div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
