import React from "react";

function PageNotFound() {
  return (
    <div className='h-screen w-full relative'>
      <div className='absolute h-screen w-full flex flex-col justify-center items-center font-poppins font-semibold '>
        <h1 className='text-9xl '>404</h1>
        <a
          className='text-xl underline-offset-4 underline hover:no-underline'
          href='/'>
          Back to Home
        </a>
      </div>
      <img
        src='https://res.cloudinary.com/dpb89bcny/image/upload/v1676589981/LowRes/drinking_water_x6nbet.webp'
        alt='man drinking water'
        className='h-full w-full object-cover'
      />
    </div>
  );
}

export default PageNotFound;
