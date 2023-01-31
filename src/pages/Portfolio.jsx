import React from "react";
import PortfolioList from "../components/PortfolioList";

function Portfolio() {
  return (
    <div>
      <h3 className='text-3xl py-1'>Portfolio</h3>
      <p className='text-md py-5 leading-8 text-gray-800'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <span className='text-teal-500'>suscipit</span>Necessitatibus, inventore
        officiis! Beatae, sapiente? Eaque similique perferendis
        <span className='text-teal-500'>suscipit</span> animi enim culpa dicta
        nihil, dolorem esse quisquam sequi? Tempore quae hic voluptas.
      </p>
      <p className='text-md py-5 leading-8 text-gray-800'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <span className='text-teal-500'>suscipit</span>Necessitatibus, inventore
        officiis! Beatae, sapiente? Eaque similique perferendis
      </p>
      <PortfolioList />
    </div>
  );
}

export default Portfolio;
