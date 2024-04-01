import React from 'react';

const AboutUsSection = () => {
  return (
    <div className=' rounded-lg p-4 md:p-8 flex flex-col md:flex-row border'>
      {/* About Us Section (Left) */}
      <div className='md:w-1/2 p-4'>
        <h2 className='text-4xl md:text-3xl font-bold mb-4 text-orange-400'>
          About Us
        </h2>
        <p className='text-gray-600 text-sm md:text-base'>
          Nestled in the heart of Hyderabad,{' '}
          <span className='text-[#EA580C]'>Hotel Inner Circle</span> beckons you
          with a blend of contemporary sophistication and warm hospitality. Our
          meticulously designed rooms and suites offer a sanctuary of comfort,
          while our attentive staff ensures your every need is met. Explore the
          vibrant local culture or unwind in our{' '}
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
          className='object-cover w-full h-auto rounded-lg max-h-80'
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
