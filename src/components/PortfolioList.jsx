import React from "react";
import web1 from "/web1.webp";
import web2 from "/web2.webp";
import web3 from "/web3.webp";
import web4 from "/web4.webp";
import web5 from "/web5.webp";
import web6 from "/web6.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PortfolioList() {
  return (
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://res.cloudinary.com/dpb89bcny/image/upload/v1676313826/web2_azts4e.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://res.cloudinary.com/dpb89bcny/image/upload/v1676313827/web1_pdcg2b.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://res.cloudinary.com/dpb89bcny/image/upload/v1676313827/web4_j6sg1n.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://res.cloudinary.com/dpb89bcny/image/upload/v1676313826/web5_uidab7.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://res.cloudinary.com/dpb89bcny/image/upload/v1676313826/web6_slxyje.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://res.cloudinary.com/dpb89bcny/image/upload/v1676313826/web3_dlwhun.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
    </div>
  );
}

export default PortfolioList;
