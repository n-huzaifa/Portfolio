import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer
      id='contact'
      className='text-center text-gray-900 dark:text-[#EEEEEE]'>
      <div className='container pt-5'>
        <div className='flex justify-center mb-5'>
          <a href='mailto:contact.noorhuzaifa@gmail.com' className='mr-9 '>
            <SiGmail />
          </a>
          <a href='https://twitter.com/Diple_me' className='mr-9 '>
            <BsTwitter />
          </a>

          <a
            href='https://www.linkedin.com/in/noor-ul-islam-huzaifa-67505a201'
            className='mr-9 '>
            <BsLinkedin />
          </a>
          <a href='https://github.com/n-huzaifa' className=''>
            <BsGithub />
          </a>
        </div>
      </div>

      <div className='text-center pb-4 '>
        Made with ❤️ using React + Tailwind
      </div>
    </footer>
  );
}

export default Footer;
