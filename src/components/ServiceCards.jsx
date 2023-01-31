import React from "react";
import design from "/design.png";
import code from "/code.png";
import consulting from "/consulting.png";

function ServiceCards() {
  return (
    <div className='lg:flex gap-10 '>
      <div className='text-center shadow-xl p-10 rounded-xl my-10 '>
        <img src={design} alt='' className='mx-auto' width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          dolorum, beatae totam assumenda
        </p>
        <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
        <p className='text-gray-800 py-1'>Illustrator</p>
        <p className='text-gray-800 py-1'>Adobe XD</p>
      </div>
      <div className='text-center shadow-xl p-10 rounded-xl my-10'>
        <img
          src={consulting}
          alt=''
          className='mx-auto'
          width={100}
          height={100}
        />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          dolorum, beatae totam assumenda
        </p>
        <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
        <p className='text-gray-800 py-1'>Illustrator</p>
        <p className='text-gray-800 py-1'>Adobe XD</p>
      </div>
      <div className='text-center shadow-xl p-10 rounded-xl my-10'>
        <img src={code} alt='' className='mx-auto' width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          dolorum, beatae totam assumenda
        </p>
        <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
        <p className='text-gray-800 py-1'>Photoshop</p>
        <p className='text-gray-800 py-1'>Figma</p>
      </div>
    </div>
  );
}

export default ServiceCards;
