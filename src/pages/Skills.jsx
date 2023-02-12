import React from "react";
import SkillCards from "../components/SkillCards";
import data from "/src/data.json";

function Skills() {
  return (
    <div id='skills' className='md:text-lg'>
      <h3 className='text-3xl py-1'>Skills</h3>
      <p className='text-md py-5 leading-8 text-gray-800 dark:text-[#EEEEEE]'>
        Full stack web wizard crafting stunning, seamless websites and web apps.
        Proficient in HTML, CSS, JavaScript, and front-end/back-end integration.
        Utilizing technologies like{" "}
        <span className='text-teal-500'>React.js</span> and{" "}
        <span className='text-teal-500'>Node.js</span> to bring your vision to
        life. In addition to my core technologies, I also have experience using
        the following libraries:
      </p>
      <div className='flex py-5 w-full mr-10 overflow-y-hidden mb-10 text-gray-900'>
        {data.skills.map((skill) => (
          <SkillCards skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
