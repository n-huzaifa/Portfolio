import React from "react";
import PortfolioList from "../components/PortfolioList";

function Portfolio() {
  return (
    <div id='portfolio'>
      <h3 className='text-3xl py-1'>Portfolio</h3>
      <p className='text-md py-5 leading-8 text-gray-800 dark:text-[#EEEEEE]'>
        Explore my portfolio and experience my passion for delivering creative
        solutions. With a commitment to quality and timely delivery, I am
        confident in bringing your vision to life. Let's connect and make it
        happen.
      </p>
      <PortfolioList />
    </div>
  );
}

export default Portfolio;
