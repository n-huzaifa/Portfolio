import React from "react";
import SkillCards from "../components/SkillCards";

function Skills() {
  return (
    <div className='md:text-lg'>
      <h3 className='text-3xl py-1'>Skills</h3>
      <p className='text-md py-5 leading-8 text-gray-800 dark:text-[#EEEEEE]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <span className='text-teal-500'>suscipit</span>Necessitatibus, inventore
        officiis! Beatae, sapiente? Eaque similique perferendis
        <span className='text-teal-500'>suscipit</span> animi enim culpa dicta
        nihil, dolorem esse quisquam sequi? Tempore quae hic voluptas.
      </p>
      <div className='flex py-5 w-full mr-10 overflow-y-hidden mb-10 text-gray-900'>
        <SkillCards url='https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png' />
        <SkillCards url='https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg' />
        <SkillCards url='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
        <SkillCards url='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld' />
        <SkillCards url='https://www.secret-source.eu/wp-content/uploads/2017/11/node-js-logo.jpg' />
        <SkillCards url='https://i.etsystatic.com/32954091/r/il/408155/3673666601/il_500x500.3673666601_oktl.jpg' />
        <SkillCards url='https://res.cloudinary.com/practicaldev/image/fetch/s--0GLg37Wj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x99qusomdtlnzm8zizen.png' />
        <SkillCards url='https://miro.medium.com/max/1200/1*eCoqJKb-QnoxWFPsjyqU0g.png' />
        <SkillCards url='https://blog.logrocket.com/wp-content/uploads/2022/09/build-progress-bar-indicator-next-js-nocdn.png' />
      </div>
    </div>
  );
}

export default Skills;
