import React from "react";
import web1 from "/web1.webp";
import web2 from "/web2.webp";
import web3 from "/web3.webp";
import web4 from "/web4.webp";
import web5 from "/web5.webp";
import web6 from "/web6.webp";

function PortfolioList() {
  return (
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1 '>
        <img
          src={web1}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <img
          src={web2}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <img
          src={web3}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <img
          src={web4}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <img
          src={web5}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <img
          src={web6}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
    </div>
  );
}

export default PortfolioList;
