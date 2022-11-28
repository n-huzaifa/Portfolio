import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLink } from "react-icons/io5";

function ProjectCard({ data }) {
  return (
    <article
      className={`flex flex-col justify-end relative 
      h-[350px] w-[350px] min-w-[250px] p-3 rounded-2xl
      shadow-[-1rem_0_3rem_#000] bg-[url("${data.hero}")] bg-no-repeat bg-cover
      hover:translate-y-[-1rem] peer peer-hover:translate-x-[130px]
      [&:not(first-child)]:ml-[-130px] 
      transition duration-300 space-y-2`}>
      <div className='flex space-x-2'>
        {data.repo && (
          <a href={data.repo} className='text-4xl text-[#1c1c1c]'>
            <IoLogoGithub />
          </a>
        )}
        {data.demo && (
          <a href={data.demo} className='text-4xl text-[#1c1c1c]'>
            <IoLink />
          </a>
        )}
      </div>
      <header className='bg-base rounded-xl p-2 h-32 overflow-hidden'>
        <h2 className='font-semibold text-xl text-ellipsis'>{data.title}</h2>
        <p className='text-xs'>{data.description}</p>
        <div className='flex mt-5 space-x-2 overflow-ellipsis'>
          {data.tags?.map((tag, index) => {
            return (
              <div key={index} className='badge badge-secondary text-ellipsis'>
                {tag}
              </div>
            );
          })}
        </div>
      </header>
    </article>
  );
}

export default ProjectCard;
