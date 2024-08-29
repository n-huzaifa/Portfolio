import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CloudinaryImage } from "@cloudinary/url-gen";

function PortfolioList() {
  const web1 = new CloudinaryImage("LowRes/web1_pdcg2b_1_xio1us", {
    cloudName: "dpb89bcny",
  }).toURL();

  const web2 = new CloudinaryImage("LowRes/web2_azts4e_1_ryviec", {
    cloudName: "dpb89bcny",
  }).toURL();

  const web3 = new CloudinaryImage("LowRes/web3_dlwhun_1_czrnx5", {
    cloudName: "dpb89bcny",
  }).toURL();

  const web4 = new CloudinaryImage("LowRes/web5_uidab7_1_cmjd1e", {
    cloudName: "dpb89bcny",
  }).toURL();

  const web5 = new CloudinaryImage("LowRes/web4_j6sg1n_1_fnxvnj", {
    cloudName: "dpb89bcny",
  }).toURL();

  const web6 = new CloudinaryImage("LowRes/web6_slxyje_1_cfmao3", {
    cloudName: "dpb89bcny",
  }).toURL();

  return (
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src={web1}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src={web2}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src={web3}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src={web4}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src={web5}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
      <div className='basis-1/3 flex-1 '>
        <LazyLoadImage
          src={web6}
          alt=''
          className='rounded-lg object-cover w-full h-full'
        />
      </div>
    </div>
  );
}

export default PortfolioList;
