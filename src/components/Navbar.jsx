import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ darkModeToggle, darkModeState }) {
  return (
    <div className='py-5 flex justify-between'>
      <h1 className='text-xl'>nHuzaifa</h1>
      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill
            className='cursor-pointer text-xl'
            onClick={() => darkModeToggle(!darkModeState)}
          />
        </li>
        <li>
          <a
            href='/resume.pdf'
            className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-3 rounded-md ml-8 font-medium'
            target='_blank'>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
