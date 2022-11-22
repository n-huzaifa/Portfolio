import React from "react";

function MernStackTooltip() {
  return (
    <>
      <span className='cursor-pointer font-bold'>
        <span
          className='hover:text-green-400 tooltip transition duration-200'
          data-tip='MongoDB'>
          M
        </span>
        <span
          className='hover:text-yellow-300 tooltip tooltip-bottom transition duration-200'
          data-tip='ExpressJs'>
          E
        </span>
        <span
          className='hover:text-blue-500 tooltip transition duration-200'
          data-tip='ReactJs'>
          R
        </span>
        <span
          className='hover:text-green-500 tooltip tooltip-bottom transition duration-200'
          data-tip='NodeJs'>
          N
        </span>
      </span>{" "}
      Stack <span className='text-sm'> (Frontend Oriented )</span>.
    </>
  );
}

export default MernStackTooltip;
