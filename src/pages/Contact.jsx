import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <footer className='text-center text-white '>
      <div className='container pt-9'>
        <div className='flex justify-center mb-9'>
          <a
            href='mailto:contact.noorhuzaifa@gmail.com'
            className='mr-9 text-gray-800'>
            <SiGmail />
          </a>
          <a href='https://twitter.com/Diple_me' className='mr-9 text-gray-800'>
            <BsTwitter />
          </a>

          <a
            href='https://www.linkedin.com/in/noor-ul-islam-huzaifa-67505a201'
            className='mr-9 text-gray-800'>
            <BsLinkedin />
          </a>
          <a href='https://github.com/n-huzaifa' className='text-gray-800'>
            <BsGithub />
          </a>
        </div>
      </div>

      <div className='text-center text-gray-700 p-4 bg-[rgba(0, 0, 0, 0.2)]'>
        Made with ❤️ using React + Tailwind
      </div>
    </footer>
  );
}

export default Contact;
