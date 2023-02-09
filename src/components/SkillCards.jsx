import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLink } from "react-icons/io5";

function SkillCards({ url }) {
  return (
    <div
      className={`left-32 ml-2 mr-4 
      flex flex-col justify-end relative 
      h-[350px] w-[350px] min-w-[250px] 
      space-y-2 p-3 rounded-2xl shadow-lg shadow-gray-800
      bg-no-repeat bg-cover
      hover:translate-y-[-1rem] 
      peer peer-hover:translate-x-[130px]
      [&:not(first-child)]:ml-[-130px] 
      transition duration-300`}
      style={{
        backgroundImage: `url(${url})`,
      }}>
      <div className='bg-base rounded-xl p-2 h-32 text-gray-100 overflow-hidden flex flex-col justify-end'>
        <div>
          <h2 className='font-semibold text-xl text-ellipsis'>Skill Name</h2>
          <p className='text-xs text-ellipsis'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae,
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillCards;
