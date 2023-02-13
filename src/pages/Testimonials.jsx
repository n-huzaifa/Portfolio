import React, { useState } from "react";
import { testimonials } from "./../data.json";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(testimonials[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <h3 className='text-3xl py-1'>Testimonials</h3>
      <p className='text-md pt-5 leading-8 text-gray-800 dark:text-[#EEEEEE]'>
        Explore my portfolio and experience my passion for delivering creative
        solutions. With a commitment to quality and timely delivery, I am
        confident in bringing your vision to life. Let's connect and make it
        happen.
      </p>
      <div className=' w-full py-10 h-2/4 flex flex-col items-center'>
        <ul className='flex w-3/6 justify-center border-b'>
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.id}
              className={`w-30 text-center py-2 mx-4 rounded-md p-2 font-semibold hover:cursor-pointer
            ${
              activeTab === testimonial.id
                ? "dark:text-[#EEEEEE] text-gray-800"
                : "dark:text-gray-400 text-gray-600"
            }`}
              onClick={() => handleTabClick(testimonial.id)}>
              {testimonial.name}
            </li>
          ))}
        </ul>
        <div className='py-4'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={` w-full
             ${activeTab === testimonial.id ? "block" : "hidden"}`}>
              <div className=' rounded-xl'>
                <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
                  <figure className='max-w-screen-md mx-auto'>
                    <svg
                      className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
                      viewBox='0 0 24 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                        fill='currentColor'
                      />
                    </svg>
                    <blockquote>
                      <p className='text-2xl font-medium text-gray-900 dark:text-[#EEEEEE]'>
                        {testimonial.text}
                      </p>
                    </blockquote>
                    <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                      <img
                        className='w-8 h-8 rounded-full'
                        src={testimonial.img}
                        alt='profile picture'
                      />
                      <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                        <div className='pr-3 font-medium text-gray-900 dark:text-[#EEEEEE]'>
                          {testimonial.name}
                        </div>
                        <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                          {testimonial.occupation}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
