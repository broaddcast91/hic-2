import React from 'react';

const AboutUsSection = () => {
  return (
    <div className='bg-white rounded-lg  p-4 md:p-8 flex flex-col md:flex-row'>
      {/* About Us Section (Left) */}
      <div className='md:w-1/2 p-4'>
        <h2 className='text-xl md:text-3xl font-semibold mb-2 md:mb-4'>
          About Us
        </h2>
        <p className='text-gray-600 text-sm md:text-base'>
          Nestled in the heart of Hyderabad,{' '}
          <span className='text-[#EA580C]'>Hotel Inner Circle</span> beckons you
          with a blend of contemporary sophistication and warm hospitality. Our
          meticulously designed rooms and suites offer a sanctuary of comfort,
          while our attentive staff ensures your every need is met.
        </p>
        <p className='text-gray-600 text-sm md:text-base mt-2 md:mt-4'>
          Explore the vibrant local culture or unwind in our{' '}
          <span className='text-[#EA580C]'>world-class spa and dining</span>
          &nbsp;venues. At Hotel Inner Circle, we invite you to join our
          exclusive circle of guests who experience travel in a class of its own
        </p>
      </div>

      {/* Image Section (Right) */}
      <div className='md:w-1/2'>
        <img
          src='https://images.unsplash.com/photo-1578898886225-c7c894047899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80' // Replace with the path to your image
          alt='About Us'
          className='object-cover w-full h-auto rounded-lg max-h-80 mx-auto'
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
