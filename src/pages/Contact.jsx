import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <footer className='text-center text-gray-800 dark:text-[#EEEEEE]'>
      <div className='container pt-9'>
        <div className='flex justify-center mb-9'>
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

      <div className='text-center text-gray-500 p-4 '>
        Made with ❤️ using React + Tailwind
      </div>
    </footer>
  );
}

export default Contact;
