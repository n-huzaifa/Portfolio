import React from "react";
import web1 from "/web1.webp";
import web2 from "/web2.webp";
import web3 from "/web3.webp";
import web4 from "/web4.webp";
import web5 from "/web5.webp";
import web6 from "/web6.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

function PortfolioList() {
  const myImage = new CloudinaryImage("sample", {
    cloudName: "dpb89bcny",
  }).resize(fill().width(100).height(150));
  return (
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src={myImage}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <img
          src='https://cdn.statically.io/img/nhuzaifa.netlify.app/f=auto,q=50%/web2.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://cdn.statically.io/img/nhuzaifa.netlify.app/f=auto,q=50%/web3.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://cdn.statically.io/img/nhuzaifa.netlify.app/f=auto,q=50%/web4.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://cdn.statically.io/img/nhuzaifa.netlify.app/f=auto,q=50%/web5.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src='https://cdn.statically.io/img/nhuzaifa.netlify.app/f=auto,q=50%/web6.webp'
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
    </div>
  );
}

export default PortfolioList;
