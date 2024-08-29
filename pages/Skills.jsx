import React from "react";
import SkillCards from "../components/SkillCards";
import data from "/src/data.json";

function Skills() {
  return (
    <div id='skills' className='md:text-lg'>
      <h3 className='text-3xl py-1'>Skills</h3>
      <p className='text-md py-5 leading-8 text-gray-800 dark:text-[#EEEEEE]'>
        As a web wizard, I have a strong expertise in integrating front-end and
        back-end technologies using the{" "}
        <span className='text-teal-500'> MERN Stack </span>to deliver
        high-quality and user-friendly web applications which bring your vision
        to life. In addition to my core technologies, I also have experience
        using the following libraries:
      </p>
      <div className='flex py-5 w-full mr-10 overflow-y-hidden mb-10 text-gray-900'>
        {data.skills.map((skill, index) => (
          <SkillCards skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
